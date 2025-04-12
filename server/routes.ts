import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertServiceSignupSchema, insertEsimCallbackSchema, insertIptvSignupSchema } from "@shared/schema";
import { 
  isAuthenticated, 
  isAdmin, 
  loginHandler, 
  verifyTwoFactorHandler, 
  logoutHandler,
  setupTwoFactorHandler,
  enableTwoFactorHandler,
  disableTwoFactorHandler,
  adminSignupHandler,
  ensureDefaultAdmin
} from './auth';
import { searchProvidersByAddressHandler } from './fcc-api';
import { 
  zapierWebhookHandler, 
  notifyServiceSignup as notifyZapierServiceSignup, 
  notifyEsimCallback as notifyZapierEsimCallback, 
  notifyIptvSignup as notifyZapierIptvSignup,
  sendRecentSubmissionsToZapier,
  getZapierConfig,
  configureZapier
} from './integrations/zapier';

import {
  iftttWebhookHandler,
  notifyServiceSignup as notifyIFTTTServiceSignup,
  notifyEsimCallback as notifyIFTTTEsimCallback,
  notifyIptvSignup as notifyIFTTTIptvSignup,
  sendRecentSubmissionsToIFTTT,
  getIFTTTConfig,
  configureIFTTT
} from './integrations/ifttt';

export async function registerRoutes(app: Express): Promise<Server> {
  // Create default admin user on startup
  await ensureDefaultAdmin();

  // Auth routes
  app.post('/api/auth/login', loginHandler);
  app.post('/api/auth/signup', adminSignupHandler);
  app.post('/api/auth/verify-2fa', verifyTwoFactorHandler);
  app.post('/api/auth/logout', isAuthenticated, logoutHandler);
  
  // 2FA management routes (requires authentication)
  app.post('/api/auth/setup-2fa', isAuthenticated, setupTwoFactorHandler);
  app.post('/api/auth/enable-2fa', isAuthenticated, enableTwoFactorHandler);
  app.post('/api/auth/disable-2fa', isAuthenticated, disableTwoFactorHandler);
  
  // User profile route (for authenticated users)
  app.get('/api/user/profile', isAuthenticated, (req: Request, res: Response) => {
    const user = (req as any).user;
    
    return res.status(200).json({
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      twoFactorEnabled: user.twoFactorEnabled
    });
  });
  // API routes for providers
  app.get('/api/providers', (req, res) => {
    // In a real application, this would fetch from a database
    // Here we're sending static data
    const providers = [
      {
        id: 1,
        name: "DIRECTV",
        logo: "directv-logo.svg",
        rating: 4.5,
        description: "330+ channels with 99% signal reliability",
        price: "$49.99/mo",
        link: "#"
      },
      {
        id: 2,
        name: "Xfinity",
        logo: "xfinity-logo.svg",
        rating: 4.0,
        description: "Fast internet with flexible TV packages",
        price: "$39.99/mo",
        link: "#"
      },
      {
        id: 3,
        name: "Spectrum",
        logo: "spectrum-logo.svg",
        rating: 3.5,
        description: "No contracts with free HD and DVR service",
        price: "$44.99/mo",
        link: "#"
      },
      {
        id: 4,
        name: "DISH",
        logo: "dish-logo.svg",
        rating: 4.0,
        description: "2-year price guarantee with free installation",
        price: "$59.99/mo",
        link: "#"
      },
      {
        id: 5,
        name: "Optimum",
        logo: "optimum-logo.svg",
        rating: 4.2,
        description: "Fast fiber internet and cable TV with no annual contract",
        price: "$39.99/mo",
        link: "#"
      }
    ];
    
    res.json(providers);
  });

  // API route for packages
  app.get('/api/packages', (req, res) => {
    // In a real application, this would fetch from a database
    // Here we're sending static data
    const packages = [
      {
        id: 1,
        provider: "DIRECTV",
        providerLogo: "directv-logo.svg",
        packageName: "Entertainment",
        channels: "160+",
        internetSpeed: "N/A",
        price: "$64.99/mo",
        features: [
          "Free HD included",
          "NFL Sunday Ticket available"
        ],
        link: "#"
      },
      {
        id: 2,
        provider: "Xfinity",
        providerLogo: "xfinity-logo.svg",
        packageName: "Starter Pro+",
        channels: "140+",
        internetSpeed: "200 Mbps",
        price: "$89.99/mo",
        features: [
          "Free X1 DVR service",
          "Access to Peacock Premium"
        ],
        link: "#"
      },
      {
        id: 3,
        provider: "Spectrum",
        providerLogo: "spectrum-logo.svg",
        packageName: "Triple Play Silver",
        channels: "175+",
        internetSpeed: "400 Mbps",
        price: "$109.99/mo",
        features: [
          "No contracts required",
          "Free HD & DVR",
          "Unlimited calling"
        ],
        link: "#"
      },
      {
        id: 4,
        provider: "DISH",
        providerLogo: "dish-logo.svg",
        packageName: "America's Top 120+",
        channels: "190+",
        internetSpeed: "N/A",
        price: "$69.99/mo",
        features: [
          "2-year price guarantee",
          "Free Hopper Duo DVR",
          "Smart HD DVR included"
        ],
        link: "#"
      },
      {
        id: 5,
        provider: "Optimum",
        providerLogo: "optimum-logo.svg",
        packageName: "Core Internet & TV",
        channels: "220+",
        internetSpeed: "300 Mbps",
        price: "$79.99/mo",
        features: [
          "No annual contract required",
          "Free installation",
          "Smart WiFi included"
        ],
        link: "#"
      },
      {
        id: 6,
        provider: "Optimum",
        providerLogo: "optimum-logo.svg",
        packageName: "Optimum Fiber Internet 1 Gig",
        channels: "N/A",
        internetSpeed: "1 Gig (940 Mbps)",
        price: "$59.99/mo",
        features: [
          "Unlimited data",
          "Free installation with select packages",
          "No annual contract"
        ],
        link: "#"
      }
    ];
    
    res.json(packages);
  });

  // API route for search by zipcode
  app.post('/api/search', (req, res) => {
    const { zipCode } = req.body;
    
    // Validate zipcode format
    if (!zipCode || !/^\d{5}$/.test(zipCode)) {
      return res.status(400).json({ message: "Please provide a valid 5-digit ZIP code" });
    }
    
    // In a real application, this would search in a database
    // Here we're sending a success message
    res.json({ 
      success: true, 
      message: `Found providers for ZIP code ${zipCode}`,
      zipCode
    });
  });
  
  // API endpoint for service signup submissions
  app.post('/api/service-signup', async (req: Request, res: Response) => {
    try {
      console.log('Service signup request body:', JSON.stringify(req.body, null, 2));
      
      // Validate the request body against the schema
      const validatedData = insertServiceSignupSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        console.log('Validation errors:', JSON.stringify(validatedData.error.format(), null, 2));
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid form data',
          errors: validatedData.error.format() 
        });
      }
      
      // Store the validated data
      const serviceSignup = await storage.createServiceSignup(validatedData.data);
      
      // Notify integration services about the new service signup
      try {
        await notifyZapierServiceSignup(serviceSignup);
      } catch (error) {
        console.error('Error notifying Zapier about service signup:', error);
      }
      
      // Also notify IFTTT
      try {
        await notifyIFTTTServiceSignup(serviceSignup);
      } catch (error) {
        console.error('Error notifying IFTTT about service signup:', error);
      }
      
      res.status(201).json({ 
        success: true, 
        message: 'Service sign-up successful',
        id: serviceSignup.id
      });
    } catch (error) {
      console.error('Error processing service signup:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  });
  
  // API endpoint for eSIM callback requests
  app.post('/api/esim-callback', async (req: Request, res: Response) => {
    try {
      // Validate the request body against the schema
      const validatedData = insertEsimCallbackSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid form data',
          errors: validatedData.error.format() 
        });
      }
      
      // Store the validated data
      const esimCallback = await storage.createEsimCallback(validatedData.data);
      
      // Notify integration services about the new eSIM callback
      try {
        await notifyZapierEsimCallback(esimCallback);
      } catch (error) {
        console.error('Error notifying Zapier about eSIM callback:', error);
      }
      
      // Also notify IFTTT
      try {
        await notifyIFTTTEsimCallback(esimCallback);
      } catch (error) {
        console.error('Error notifying IFTTT about eSIM callback:', error);
      }
      
      res.status(201).json({ 
        success: true, 
        message: 'eSIM callback request received',
        id: esimCallback.id
      });
    } catch (error) {
      console.error('Error processing eSIM callback:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  });
  
  // Protected admin routes - require authentication and admin privileges
  
  // API endpoint to get all service signups (for admin purposes)
  app.get('/api/service-signups', isAuthenticated, isAdmin, async (req: Request, res: Response) => {
    try {
      console.log('Fetching service signups data');
      const result = await storage.getAllServiceSignups();
      
      // Ensure the response is in the format expected by the client, which is an array
      const signups = result.signups || [];
      
      console.log(`Found ${signups.length} service signups`);
      res.json(signups);
    } catch (error) {
      console.error('Error fetching service signups:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // API endpoint to get all eSIM callbacks (for admin purposes)
  app.get('/api/esim-callbacks', isAuthenticated, isAdmin, async (req: Request, res: Response) => {
    try {
      console.log('Fetching eSIM callbacks data');
      const result = await storage.getAllEsimCallbacks();
      
      // Ensure the response is in the format expected by the client, which is an array
      // The admin UI expects an array, not an object with a callbacks property
      const callbacks = result.callbacks || [];
      
      console.log(`Found ${callbacks.length} eSIM callbacks`);
      res.json(callbacks);
    } catch (error) {
      console.error('Error fetching eSIM callbacks:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // API endpoint for IPTV (QwickTV) signup submissions
  app.post('/api/iptv-signup', async (req: Request, res: Response) => {
    try {
      // Validate the request body against the schema
      const validatedData = insertIptvSignupSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid form data',
          errors: validatedData.error.format() 
        });
      }
      
      // Store the validated data
      const iptvSignup = await storage.createIptvSignup(validatedData.data);
      
      // Notify integration services about the new IPTV signup
      try {
        await notifyZapierIptvSignup(iptvSignup);
      } catch (error) {
        console.error('Error notifying Zapier about IPTV signup:', error);
      }
      
      // Also notify IFTTT
      try {
        await notifyIFTTTIptvSignup(iptvSignup);
      } catch (error) {
        console.error('Error notifying IFTTT about IPTV signup:', error);
      }
      
      res.status(201).json({ 
        success: true, 
        message: 'QwickTV sign-up successful',
        id: iptvSignup.id
      });
    } catch (error) {
      console.error('Error processing IPTV signup:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  });
  
  // API endpoint to get all IPTV signups (for admin purposes)
  app.get('/api/iptv-signups', isAuthenticated, isAdmin, async (req: Request, res: Response) => {
    try {
      console.log('Fetching IPTV signups data');
      const result = await storage.getAllIptvSignups();
      
      // Ensure the response is in the format expected by the client, which is an array
      const signups = result.signups || [];
      
      console.log(`Found ${signups.length} IPTV signups`);
      res.json(signups);
    } catch (error) {
      console.error('Error fetching IPTV signups:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // FCC National Broadband Map API route for provider search by address
  app.get('/api/provider-search', searchProvidersByAddressHandler);
  
  // OpenAI API key endpoint for the frontend - accessible without authentication for bill analysis
  app.get('/api/openai-key', (req: Request, res: Response) => {
    // Only send the key, not the actual value
    res.json({ key: process.env.OPENAI_API_KEY ? 'available' : 'not_available' });
  });
  
  // =======================================
  // Zapier integration routes (legacy)
  // =======================================
  
  // Webhook endpoint for Zapier to send data to our system
  app.post('/api/zapier/webhook', zapierWebhookHandler);
  
  // Configure Zapier webhooks (admin only)
  app.post('/api/zapier/config', isAuthenticated, isAdmin, (req: Request, res: Response) => {
    try {
      const { serviceSignupWebhook, esimCallbackWebhook, iptvSignupWebhook } = req.body;
      
      configureZapier({
        serviceSignupWebhook,
        esimCallbackWebhook,
        iptvSignupWebhook
      });
      
      res.status(200).json({
        success: true,
        message: 'Zapier configuration updated',
        config: getZapierConfig()
      });
    } catch (error) {
      console.error('Error updating Zapier configuration:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  });
  
  // Get current Zapier configuration (admin only)
  app.get('/api/zapier/config', isAuthenticated, isAdmin, (req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      config: getZapierConfig()
    });
  });
  
  // Manually trigger Zapier notifications for recent submissions (admin only)
  app.post('/api/zapier/send-recent', isAuthenticated, isAdmin, async (req: Request, res: Response) => {
    try {
      const { daysBack = 7 } = req.body;
      
      // Validate the daysBack parameter
      if (isNaN(daysBack) || daysBack <= 0 || daysBack > 30) {
        return res.status(400).json({
          success: false,
          message: 'Invalid daysBack parameter. Must be a number between 1 and 30.'
        });
      }
      
      const result = await sendRecentSubmissionsToZapier(storage, daysBack);
      
      res.status(200).json({
        success: true,
        message: 'Recent submissions sent to Zapier',
        result
      });
    } catch (error) {
      console.error('Error sending recent submissions to Zapier:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  });
  
  // =======================================
  // IFTTT integration routes
  // =======================================
  
  // Webhook endpoint for IFTTT to send data to our system
  app.post('/api/ifttt/webhook', iftttWebhookHandler);
  
  // Configure IFTTT webhooks (admin only)
  app.post('/api/ifttt/config', isAuthenticated, isAdmin, (req: Request, res: Response) => {
    try {
      const { serviceSignupWebhook, esimCallbackWebhook, iptvSignupWebhook } = req.body;
      
      configureIFTTT({
        serviceSignupWebhook,
        esimCallbackWebhook,
        iptvSignupWebhook
      });
      
      res.status(200).json({
        success: true,
        message: 'IFTTT configuration updated',
        config: getIFTTTConfig()
      });
    } catch (error) {
      console.error('Error updating IFTTT configuration:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  });
  
  // Get current IFTTT configuration (admin only)
  app.get('/api/ifttt/config', isAuthenticated, isAdmin, (req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      config: getIFTTTConfig()
    });
  });
  
  // Manually trigger IFTTT notifications for recent submissions (admin only)
  app.post('/api/ifttt/send-recent', isAuthenticated, isAdmin, async (req: Request, res: Response) => {
    try {
      const { daysBack = 7 } = req.body;
      
      // Validate the daysBack parameter
      if (isNaN(daysBack) || daysBack <= 0 || daysBack > 30) {
        return res.status(400).json({
          success: false,
          message: 'Invalid daysBack parameter. Must be a number between 1 and 30.'
        });
      }
      
      const result = await sendRecentSubmissionsToIFTTT(storage, daysBack);
      
      res.status(200).json({
        success: true,
        message: 'Recent submissions sent to IFTTT',
        result
      });
    } catch (error) {
      console.error('Error sending recent submissions to IFTTT:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
