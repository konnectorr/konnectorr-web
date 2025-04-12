import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import csrf from "csurf";
import env from "./env";

const app = express();

// Apply Helmet middleware for security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://cdn.weatherapi.com", "blob:"],
      connectSrc: ["'self'", "https://api.weatherapi.com"]
    }
  },
  hsts: {
    maxAge: 15552000, // 180 days in seconds
    includeSubDomains: true
  },
  frameguard: {
    action: "deny" // Deny framing of the site
  }
}));

// Configure Rate Limiting for all API requests
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: { error: "Too many requests, please try again later." }
});

// Apply more strict rate limiting for authentication routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many authentication attempts, please try again later." }
});

// Apply the rate limiter to API routes
app.use("/api/", apiLimiter);
app.use("/api/auth/", authLimiter);

// Parse cookies for CSRF protection
app.use(cookieParser());

// Parse body for use with CSRF protection
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup CSRF protection with secure cookie settings
const csrfProtection = csrf({
  cookie: {
    key: '_csrf',
    path: '/',
    httpOnly: true,
    secure: env.NODE_ENV === 'production', // Only require secure in production
    sameSite: 'strict',
    maxAge: 3600 * 4 // 4 hours matching JWT expiry
  }
});

// Apply CSRF protection to all state-changing routes
app.use('/api/auth', csrfProtection);
app.use('/api/service-signup', csrfProtection);
app.use('/api/esim-callback', csrfProtection);
app.use('/api/iptv-signup', csrfProtection);

// Get CSRF token
app.get('/api/csrf-token', csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    
    // In production, don't expose error details for 500 errors
    const isProduction = process.env.NODE_ENV === 'production';
    const response = {
      message: status === 500 && isProduction ? "Internal Server Error" : message,
      code: err.code || 'ERROR',
      // Only include stack trace in development
      ...(isProduction ? {} : {
        stack: err.stack,
        details: err.details || err.data
      })
    };

    // Log error for server monitoring
    console.error(`[ERROR] ${status} - ${message}`, { 
      stack: err.stack,
      code: err.code,
      path: _req.path,
      method: _req.method,
      ip: _req.ip
    });

    res.status(status).json(response);
    
    // Don't re-throw error in production to prevent app crash
    if (!isProduction) {
      throw err;
    }
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Serve the app on the configured port from environment variables
  // this serves both the API and the client
  const port = env.PORT;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port} in ${env.NODE_ENV} mode`);
  });
})();
