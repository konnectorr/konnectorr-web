import { Request, Response } from 'express';
import CryptoJS from 'crypto-js';
import { IStorage } from '../storage';
import { type ServiceSignup, type EsimCallback, type IptvSignup } from '@shared/schema';

// Zapier integration configuration
interface ZapierConfig {
  webhookSecret: string;  // Used to validate incoming webhook requests
  serviceSignupWebhook?: string; // Zapier webhook URL for service signups
  esimCallbackWebhook?: string; // Zapier webhook URL for eSIM callbacks
  iptvSignupWebhook?: string; // Zapier webhook URL for IPTV signups
}

// In production, these should be loaded from environment variables
let zapierConfig: ZapierConfig = {
  webhookSecret: process.env.ZAPIER_WEBHOOK_SECRET || 'konnectorr-webhook-secret',
  serviceSignupWebhook: process.env.ZAPIER_SERVICE_SIGNUP_WEBHOOK,
  esimCallbackWebhook: process.env.ZAPIER_ESIM_CALLBACK_WEBHOOK,
  iptvSignupWebhook: process.env.ZAPIER_IPTV_SIGNUP_WEBHOOK
};

/**
 * Configure Zapier integration
 */
export function configureZapier(config: Partial<ZapierConfig>) {
  zapierConfig = {
    ...zapierConfig,
    ...config
  };
}

/**
 * Verifies the webhook signature to ensure the request is from Zapier
 */
function verifyWebhookSignature(req: Request): boolean {
  const signature = req.headers['x-zapier-signature'] as string;
  
  if (!signature) {
    return false;
  }
  
  // In production implementation, we would verify the signature
  // This is a simplified verification for demonstration
  const requestBody = JSON.stringify(req.body);
  const expectedSignature = CryptoJS.HmacSHA256(requestBody, zapierConfig.webhookSecret).toString();
  
  return signature === expectedSignature;
}

/**
 * Sends data to Zapier webhook
 */
async function sendToZapier(webhookUrl: string, data: any): Promise<boolean> {
  if (!webhookUrl) {
    console.error('Zapier webhook URL not configured');
    return false;
  }
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      console.error(`Error sending data to Zapier: ${response.status} ${response.statusText}`);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error sending data to Zapier:', error);
    return false;
  }
}

/**
 * Handles incoming webhook requests from Zapier
 */
export async function zapierWebhookHandler(req: Request, res: Response) {
  // Verify the webhook signature
  if (!verifyWebhookSignature(req)) {
    return res.status(401).json({ error: 'Invalid webhook signature' });
  }
  
  const { event, data } = req.body;
  
  if (!event || !data) {
    return res.status(400).json({ error: 'Missing event or data' });
  }
  
  // Process the webhook data based on the event type
  switch (event) {
    case 'ping':
      return res.json({ success: true, message: 'Pong!' });
    
    case 'update_status':
      // Example: update status of a signup or callback
      // Would need to call the storage methods to update the status
      return res.json({ success: true, message: 'Status updated' });
    
    default:
      return res.status(400).json({ error: `Unknown event type: ${event}` });
  }
}

/**
 * Notifies Zapier about a new service signup
 */
export async function notifyServiceSignup(signup: ServiceSignup): Promise<boolean> {
  if (!zapierConfig.serviceSignupWebhook) {
    console.warn('Service signup webhook not configured');
    return false;
  }
  
  return sendToZapier(zapierConfig.serviceSignupWebhook, {
    event: 'new_service_signup',
    data: signup
  });
}

/**
 * Notifies Zapier about a new eSIM callback
 */
export async function notifyEsimCallback(callback: EsimCallback): Promise<boolean> {
  if (!zapierConfig.esimCallbackWebhook) {
    console.warn('eSIM callback webhook not configured');
    return false;
  }
  
  return sendToZapier(zapierConfig.esimCallbackWebhook, {
    event: 'new_esim_callback',
    data: callback
  });
}

/**
 * Notifies Zapier about a new IPTV signup
 */
export async function notifyIptvSignup(signup: IptvSignup): Promise<boolean> {
  if (!zapierConfig.iptvSignupWebhook) {
    console.warn('IPTV signup webhook not configured');
    return false;
  }
  
  return sendToZapier(zapierConfig.iptvSignupWebhook, {
    event: 'new_iptv_signup',
    data: signup
  });
}

/**
 * Function to manually trigger notifications for recent submissions
 * This can be used to resend notifications for submissions that were missed
 */
export async function sendRecentSubmissionsToZapier(
  storage: IStorage, 
  daysBack: number = 7
): Promise<{
  serviceSignups: number,
  esimCallbacks: number,
  iptvSignups: number
}> {
  const dateFrom = new Date();
  dateFrom.setDate(dateFrom.getDate() - daysBack);
  
  // Get recent submissions
  const serviceSignupsResult = await storage.getAllServiceSignups({
    dateFrom
  });
  
  const esimCallbacksResult = await storage.getAllEsimCallbacks({
    dateFrom
  });
  
  const iptvSignupsResult = await storage.getAllIptvSignups({
    dateFrom
  });
  
  // Send each submission to Zapier
  let serviceSignupsSent = 0;
  let esimCallbacksSent = 0;
  let iptvSignupsSent = 0;
  
  for (const signup of serviceSignupsResult.signups) {
    const sent = await notifyServiceSignup(signup);
    if (sent) serviceSignupsSent++;
  }
  
  for (const callback of esimCallbacksResult.callbacks) {
    const sent = await notifyEsimCallback(callback);
    if (sent) esimCallbacksSent++;
  }
  
  for (const signup of iptvSignupsResult.signups) {
    const sent = await notifyIptvSignup(signup);
    if (sent) iptvSignupsSent++;
  }
  
  return {
    serviceSignups: serviceSignupsSent,
    esimCallbacks: esimCallbacksSent,
    iptvSignups: iptvSignupsSent
  };
}

// Export a function to get the current Zapier configuration
export function getZapierConfig(): Omit<ZapierConfig, 'webhookSecret'> {
  // Don't expose the webhook secret
  const { webhookSecret, ...publicConfig } = zapierConfig;
  return publicConfig;
}