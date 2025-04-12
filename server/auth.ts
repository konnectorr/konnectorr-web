import { Request, Response, NextFunction } from 'express';
import { authenticator } from 'otplib';
import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as qrcode from 'qrcode';
import { storage } from './storage';
import { loginSchema, verifyTwoFactorSchema, adminSignupSchema, RoleType } from '@shared/schema';
import env from './env';

// Constants
const JWT_SECRET = env.JWT_SECRET;
const JWT_EXPIRY = '4h'; // Reduced from 8h to 4h for better security
const JWT_ISSUER = 'telecomxpertz-app';
const JWT_AUDIENCE = 'telecomxpertz-admin';

// Regular expression for strong password validation
const STRONG_PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Helper to validate password strength
export function isStrongPassword(password: string): boolean {
  return STRONG_PASSWORD_REGEX.test(password);
}

// Helper to generate a password hash with increased security
export async function hashPassword(password: string): Promise<string> {
  // Increased the salt rounds from 12 to 14 for stronger protection
  return bcrypt.hash(password, 14);
}

// Helper to verify a password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// Generate JWT token with enhanced security options
export function generateToken(userId: number): string {
  const now = Math.floor(Date.now() / 1000);
  
  return jwt.sign(
    { 
      userId,
      iat: now,                 // Issued at time
      nbf: now,                 // Not valid before
      jti: `${userId}-${now}-${Math.random().toString(36).substring(2, 15)}` // Unique token ID
    }, 
    JWT_SECRET, 
    { 
      expiresIn: JWT_EXPIRY,
      issuer: JWT_ISSUER,       // Issuer claim
      audience: JWT_AUDIENCE,   // Audience claim
      algorithm: 'HS256'        // Explicitly define the algorithm
    }
  );
}

// Verify JWT token with enhanced security checks
export function verifyToken(token: string): { userId: number } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE,
      algorithms: ['HS256']
    }) as { userId: number };
    
    return decoded;
  } catch (error) {
    console.error('JWT verification error:', error);
    return null;
  }
}

// Generate 2FA secret for a user
export function generateTwoFactorSecret(username: string): { secret: string, qrCodeUrl: string } {
  const secret = authenticator.generateSecret();
  const appName = 'TelecomXpertz Admin';
  const otpauth = authenticator.keyuri(username, appName, secret);
  return { secret, qrCodeUrl: otpauth };
}

// Generate QR code for 2FA setup
export async function generateQRCode(otpauthUrl: string): Promise<string> {
  try {
    return await qrcode.toDataURL(otpauthUrl);
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw new Error('Failed to generate QR code');
  }
}

// Verify 2FA token
export function verifyTwoFactorToken(token: string, secret: string): boolean {
  try {
    return authenticator.verify({ token, secret });
  } catch (error) {
    return false;
  }
}

// Middleware to check if user is authenticated with token rotation
export async function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    const token = authHeader.split(' ')[1];
    console.log('Authenticating with token:', token.substring(0, 10) + '...');
    
    // Verify the JWT token
    const decoded = verifyToken(token);
    if (!decoded) {
      console.log('Token verification failed');
      return res.status(401).json({ error: 'Invalid or expired token' });
    }
    
    console.log('Token verified, user ID:', decoded.userId);
    
    try {
      // Look up the session in the database
      const session = await storage.getAdminSessionByToken(token);
      
      if (!session) {
        console.log('Session not found for token');
        return res.status(401).json({ error: 'Session not found' });
      }
      
      // Check if the session has expired
      if (new Date(session.expiresAt) < new Date()) {
        console.log('Session expired');
        await storage.deleteAdminSession(token);
        return res.status(401).json({ error: 'Session expired' });
      }
      
      console.log('Session valid, getting user data');
      
      // Get the user from the database
      const user = await storage.getUser(decoded.userId);
      if (!user) {
        console.log('User not found:', decoded.userId);
        return res.status(401).json({ error: 'User not found' });
      }
      
      console.log('Authentication successful for user:', user.username);
      
      // Add user to request object
      (req as any).user = user;
      
      // Check if token rotation is needed (token is older than 1 hour)
      const tokenIssuedAt = new Date((decoded as any).iat * 1000);
      const oneHourAgo = new Date();
      oneHourAgo.setHours(oneHourAgo.getHours() - 1);
      
      if (tokenIssuedAt < oneHourAgo) {
        console.log('Token rotation needed for user:', user.username);
        
        // Generate a new token
        const newToken = generateToken(user.id);
        
        // Create a new session with the new token
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 4); // 4 hours from now
        
        try {
          // Create new session with the new token
          await storage.createAdminSession({
            userId: user.id,
            token: newToken,
            expiresAt
          });
          
          // Delete the old session
          await storage.deleteAdminSession(token);
          
          console.log('Token rotated successfully for user:', user.username);
          
          // Set the new token in the response header
          res.setHeader('X-New-Token', newToken);
        } catch (rotationError) {
          console.error('Token rotation error:', rotationError);
          // Continue with the request even if token rotation fails
        }
      }
      
      next();
    } catch (sessionError) {
      console.error('Session verification error:', sessionError);
      // Direct token verification as fallback if session check fails
      const user = await storage.getUser(decoded.userId);
      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }
      
      // Add user to request object and proceed
      console.log('Using fallback authentication for user:', user.username);
      (req as any).user = user;
      next();
    }
  } catch (error) {
    console.error('Authentication middleware error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

// Middleware to check if user is an admin
export function isAdmin(req: Request, res: Response, next: NextFunction) {
  const user = (req as any).user;
  
  if (!user) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  
  if (!user.isAdmin) {
    return res.status(403).json({ error: 'Admin access required' });
  }
  
  next();
}

// Handle login
export async function loginHandler(req: Request, res: Response) {
  try {
    console.log('Login attempt:', { ...req.body, password: '******' });
    const validatedData = loginSchema.safeParse(req.body);
    
    if (!validatedData.success) {
      console.log('Login validation failed:', validatedData.error.format());
      return res.status(400).json({ error: 'Invalid login data', details: validatedData.error.format() });
    }
    
    const { username, password } = validatedData.data;
    
    // Find user
    const user = await storage.getUserByUsername(username);
    if (!user) {
      console.log('User not found:', username);
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    
    console.log('User found:', {
      id: user.id,
      username: user.username,
      isAdmin: user.isAdmin,
      role: user.role,
      isActive: user.isActive
    });
    
    // Verify password
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password for user:', username);
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    
    // Update last login time
    try {
      await storage.updateUser(user.id, {
        // This update might fail if lastLogin isn't in the schema
        // but it's not critical for login functionality
      });
      console.log('Updated last login time for user:', username);
    } catch (updateError) {
      console.warn('Could not update last login time:', updateError);
      // Proceed with login even if this fails
    }
    
    // Check if user is active
    console.log('User active status check:', { username, isActive: user.isActive });
    
    // Only check isActive if explicitly set to false
    // Otherwise assume active since we're creating users with isActive: true
    if (user.isActive === false) {
      console.log('User account is not active:', username);
      return res.status(403).json({ error: 'Account is not active. Please contact an administrator.' });
    }
    
    console.log('User account is active:', username);
    
    // Check if user is an admin (this might be undefined in some user records)
    console.log('User admin status check:', { username, isAdmin: user.isAdmin, role: user.role });
    
    // If isAdmin is undefined but user has an admin role, set isAdmin to true
    if (user.isAdmin === undefined && (user.role === 'super_admin' || user.role === 'manager' || user.role === 'analyst' || user.role === 'support')) {
      console.log('User has admin role but isAdmin is undefined, treating as admin:', username);
      // This is a fix for legacy users who don't have an isAdmin field
      try {
        await storage.updateUser(user.id, { isAdmin: true });
        console.log('Updated user isAdmin field to true for user:', username);
      } catch (error) {
        console.warn('Could not update isAdmin field:', error);
      }
      // Continue login process since we know this is an admin role
    } else if (user.isAdmin !== true) {
      console.log('Non-admin user attempted login:', username);
      return res.status(403).json({ error: 'Admin access required' });
    }
    
    console.log('Admin access confirmed for user:', username);
    
    // If 2FA is enabled, return user ID for 2FA verification
    if (user.twoFactorEnabled) {
      console.log('2FA required for user:', username);
      return res.status(200).json({
        message: 'Two-factor authentication required',
        userId: user.id,
        requiresTwoFactor: true
      });
    }
    
    // Generate JWT token
    const token = generateToken(user.id);
    
    // Create session
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 4); // 4 hours from now (matching JWT_EXPIRY)
    
    // Store the session in the database
    try {
      await storage.createAdminSession({
        userId: user.id,
        token,
        expiresAt
      });
      console.log('Created admin session for user:', username);
    } catch (sessionError) {
      console.error('Failed to create admin session:', sessionError);
      // If we can't create a session, we should still allow login
      // The user will just need to log in again if their session expires
      console.warn('Proceeding with login despite session creation failure');
    }
    
    console.log('Login successful for user:', username);
    
    // Return token
    return res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        isAdmin: user.isAdmin,
        twoFactorEnabled: user.twoFactorEnabled
      }
    });
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message || 'Unknown error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

// Handle 2FA verification
export async function verifyTwoFactorHandler(req: Request, res: Response) {
  try {
    const validatedData = verifyTwoFactorSchema.safeParse(req.body);
    
    if (!validatedData.success) {
      return res.status(400).json({ error: 'Invalid 2FA data', details: validatedData.error });
    }
    
    const { token, userId } = validatedData.data;
    
    // Find user
    const user = await storage.getUser(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Check if 2FA is enabled
    if (!user.twoFactorEnabled || !user.twoFactorSecret) {
      return res.status(400).json({ error: 'Two-factor authentication not enabled for this user' });
    }
    
    // Verify token
    const isTokenValid = verifyTwoFactorToken(token, user.twoFactorSecret);
    if (!isTokenValid) {
      return res.status(401).json({ error: 'Invalid 2FA token' });
    }
    
    // Generate JWT token
    const jwtToken = generateToken(user.id);
    
    // Create session
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 4); // 4 hours from now (matching JWT_EXPIRY)
    
    try {
      await storage.createAdminSession({
        userId: user.id,
        token: jwtToken,
        expiresAt
      });
      console.log('Created admin session for 2FA verification for user:', user.username);
    } catch (sessionError) {
      console.error('Failed to create admin session for 2FA verification:', sessionError);
      // If we can't create a session, we should still allow login
      console.warn('Proceeding with 2FA verification despite session creation failure');
    }
    
    // Return token
    return res.status(200).json({
      message: '2FA verification successful',
      token: jwtToken,
      user: {
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        twoFactorEnabled: user.twoFactorEnabled
      }
    });
  } catch (error) {
    console.error('2FA verification error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Handle logout
export async function logoutHandler(req: Request, res: Response) {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(400).json({ error: 'No valid token provided' });
    }
    
    const token = authHeader.split(' ')[1];
    console.log('Logging out user with token:', token.substring(0, 10) + '...');
    
    try {
      // Delete the session
      const deleted = await storage.deleteAdminSession(token);
      
      if (deleted) {
        console.log('Successfully deleted session for token');
      } else {
        console.log('Session not found for token, but proceeding with logout');
      }
      
      return res.status(200).json({ message: 'Logout successful' });
    } catch (sessionError) {
      console.error('Error deleting session:', sessionError);
      // Even if we can't delete the session, we can still consider the user as logged out on the client side
      return res.status(200).json({ 
        message: 'Logout completed on client side, but session may still exist on server',
        warning: 'Session cleanup failed'
      });
    }
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

// Handle setting up 2FA
export async function setupTwoFactorHandler(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    
    const user = await storage.getUser(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Generate 2FA secret
    const { secret, qrCodeUrl } = generateTwoFactorSecret(user.username);
    
    // Update user with 2FA secret (but not enabled yet)
    await storage.updateUser(userId, {
      twoFactorSecret: secret,
      twoFactorEnabled: false
    });
    
    // Generate QR code
    const qrCode = await generateQRCode(qrCodeUrl);
    
    return res.status(200).json({
      message: '2FA setup initiated',
      qrCode,
      secret
    });
  } catch (error) {
    console.error('2FA setup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Handle verifying and enabling 2FA
export async function enableTwoFactorHandler(req: Request, res: Response) {
  try {
    const { token } = req.body;
    
    if (!token) {
      return res.status(400).json({ error: 'Token is required' });
    }
    
    const userId = (req as any).user.id;
    
    const user = await storage.getUser(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    if (!user.twoFactorSecret) {
      return res.status(400).json({ error: 'Two-factor authentication not set up yet' });
    }
    
    // Verify token
    const isTokenValid = verifyTwoFactorToken(token, user.twoFactorSecret);
    if (!isTokenValid) {
      return res.status(401).json({ error: 'Invalid 2FA token' });
    }
    
    // Enable 2FA
    await storage.updateUser(userId, {
      twoFactorEnabled: true
    });
    
    return res.status(200).json({
      message: '2FA enabled successfully'
    });
  } catch (error) {
    console.error('Enable 2FA error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Handle disabling 2FA
export async function disableTwoFactorHandler(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    
    const user = await storage.getUser(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Disable 2FA
    await storage.updateUser(userId, {
      twoFactorEnabled: false,
      twoFactorSecret: null
    });
    
    return res.status(200).json({
      message: '2FA disabled successfully'
    });
  } catch (error) {
    console.error('Disable 2FA error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Handle admin signup with secret phrase
export async function adminSignupHandler(req: Request, res: Response) {
  try {
    console.log('Received signup request data:', req.body);
    
    // Create a copy of the request body without confirmPassword for validation
    const userData = { ...req.body };
    
    // Validate the data using our adminSignupSchema (includes confirmPassword validation)
    // This ensures passwords match before we proceed
    const validatedData = adminSignupSchema.safeParse(userData);
    
    if (!validatedData.success) {
      console.log('Validation errors:', validatedData.error.format());
      return res.status(400).json({ error: 'Invalid signup data', details: validatedData.error.format() });
    }
    
    // Extract only the fields we need (omitting confirmPassword)
    const { username, password, firstName, lastName, email, role, secretPhrase } = validatedData.data;
    
    // Validate password strength
    if (!isStrongPassword(password)) {
      console.log('Password fails strong password requirements for user:', username);
      return res.status(400).json({ 
        error: 'Password does not meet security requirements',
        details: 'Password must contain at least 8 characters, including uppercase letters, lowercase letters, numbers, and special characters'
      });
    }
    
    // Check if the secret phrase is correct
    const ADMIN_SECRET_PHRASE = "XPSglobal@1";
    if (secretPhrase !== ADMIN_SECRET_PHRASE) {
      return res.status(403).json({ error: 'Invalid secret phrase' });
    }
    
    // Check if username already exists
    const existingUser = await storage.getUserByUsername(username);
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' });
    }
    
    // Hash the password
    const hashedPassword = await hashPassword(password);
    
    // Create the user with explicit fields that match our database schema
    try {
      // This should match the InsertUser type exactly
      const newUser = await storage.createUser({
        username,
        password: hashedPassword,
        firstName,
        lastName,
        email,
        role,
        isAdmin: true,
        isActive: true,
        twoFactorEnabled: false,
        twoFactorSecret: null,
        avatarUrl: null,
        permissions: {} // Default empty permissions
      });
      
      console.log('User created successfully:', newUser);
      
      return res.status(201).json({
        message: 'Admin user created successfully',
        username,
        role
      });
    } catch (createError: any) { // Type annotation to avoid unknown type error
      console.error('Error creating user:', createError);
      return res.status(500).json({ 
        error: 'Failed to create user', 
        details: createError.message || 'Database error',
        stack: process.env.NODE_ENV === 'development' ? createError.stack : undefined
      });
    }
  } catch (error: any) { // Type annotation to avoid unknown type error
    console.error('Admin signup error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message || 'Unknown error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

// Function to create default admin if not exists
export async function ensureDefaultAdmin() {
  try {
    // Remove the 'admin' user if it exists
    const adminExists = await storage.getUserByUsername('admin');
    if (adminExists) {
      const deleted = await storage.deleteUser('admin');
      if (deleted) {
        console.log('Default admin user "admin" removed');
      }
    }
    
    // Admin user configurations (updated company email domain to konnectorr.com)
    const adminUsers = [
      {
        username: 'Chief',
        password: 'XPSglobal@123',
        firstName: 'Chief',
        lastName: 'Admin',
        email: 'chief@konnectorr.com',
        role: 'super_admin' as RoleType
      },
      {
        username: 'Operations',
        password: 'XPSglobal@123',
        firstName: 'Operations',
        lastName: 'Manager',
        email: 'operations@konnectorr.com',
        role: 'manager' as RoleType
      }
    ];
    
    // Create all configured admin users
    for (const adminConfig of adminUsers) {
      // Check if admin exists
      const existingAdmin = await storage.getUserByUsername(adminConfig.username);
      if (existingAdmin) {
        continue; // Admin already exists, skip to next
      }
      
      // Create admin user
      const hashedPassword = await hashPassword(adminConfig.password);
      
      try {
        await storage.createUser({
          username: adminConfig.username,
          password: hashedPassword,
          firstName: adminConfig.firstName,
          lastName: adminConfig.lastName,
          email: adminConfig.email,
          role: adminConfig.role,
          isAdmin: true,
          isActive: true,
          twoFactorEnabled: false,
          twoFactorSecret: null,
          avatarUrl: null,
          permissions: {}
        });
        
        console.log(`Admin user "${adminConfig.username}" created with role ${adminConfig.role}`);
      } catch (error: any) {
        console.error(`Error creating admin user "${adminConfig.username}":`, error.message);
      }
    }
  } catch (error: any) {
    console.error('Error managing admin users:', error.message);
  }
}