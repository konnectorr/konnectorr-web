import { Request, Response } from 'express';
import CryptoJS from 'crypto-js';
import { IStorage } from '../storage';
import { type ServiceSignup, type EsimCallback, type IptvSignup } from '@shared/schema';

// IFTTT integration configuration
interface IFTTTConfig {
  webhookSecret: string;  // Used to validate incoming webhook requests
  serviceSignupWebhook?: string; // IFTTT webhook URL for service signups
  esimCallbackWebhook?: string; // IFTTT webhook URL for eSIM callbacks
  iptvSignupWebhook?: string; // IFTTT webhook URL for IPTV signups
}

// In production, these should be loaded from environment variables
let iftttConfig: IFTTTConfig = {
  webhookSecret: process.env.IFTTT_WEBHOOK_SECRET || 'konnectorr-webhook-secret',
  serviceSignupWebhook: process.env.IFTTT_SERVICE_SIGNUP_WEBHOOK,
  esimCallbackWebhook: process.env.IFTTT_ESIM_CALLBACK_WEBHOOK,
  iptvSignupWebhook: process.env.IFTTT_IPTV_SIGNUP_WEBHOOK
};

/**
 * Configure IFTTT integration
 */
export function configureIFTTT(config: Partial<IFTTTConfig>) {
  iftttConfig = {
    ...iftttConfig,
    ...config
  };
}

/**
 * Verifies the webhook signature to ensure the request is from IFTTT
 */
function verifyWebhookSignature(req: Request): boolean {
  const signature = req.headers['x-ifttt-signature'] as string;
  
  if (!signature) {
    return false;
  }
  
  // In production implementation, we would verify the signature
  // This is a simplified verification for demonstration
  const requestBody = JSON.stringify(req.body);
  const expectedSignature = CryptoJS.HmacSHA256(requestBody, iftttConfig.webhookSecret).toString();
  
  return signature === expectedSignature;
}

/**
 * Sends data to IFTTT webhook
 * 
 * For IFTTT Maker webhooks, the structure is usually:
 * https://maker.ifttt.com/trigger/{event}/with/key/{your_key}
 * with the JSON payload in the body
 */
async function sendToIFTTT(webhookUrl: string, data: any): Promise<boolean> {
  if (!webhookUrl) {
    console.error('IFTTT webhook URL not configured');
    return false;
  }
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value1: JSON.stringify(data),
        // IFTTT can accept up to 3 values (value1, value2, value3)
        // Using value1 for all the data as JSON string
      }),
    });
    
    if (!response.ok) {
      console.error(`Error sending data to IFTTT: ${response.status} ${response.statusText}`);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error sending data to IFTTT:', error);
    return false;
  }
}

/**
 * Handles incoming webhook requests from IFTTT
 */
export async function iftttWebhookHandler(req: Request, res: Response) {
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
 * Notifies IFTTT about a new service signup
 */
export async function notifyServiceSignup(signup: ServiceSignup): Promise<boolean> {
  if (!iftttConfig.serviceSignupWebhook) {
    console.warn('Service signup webhook not configured');
    return false;
  }
  
  return sendToIFTTT(iftttConfig.serviceSignupWebhook, {
    event: 'new_service_signup',
    data: signup
  });
}

/**
 * Notifies IFTTT about a new eSIM callback
 */
export async function notifyEsimCallback(callback: EsimCallback): Promise<boolean> {
  if (!iftttConfig.esimCallbackWebhook) {
    console.warn('eSIM callback webhook not configured');
    return false;
  }
  
  return sendToIFTTT(iftttConfig.esimCallbackWebhook, {
    event: 'new_esim_callback',
    data: callback
  });
}

/**
 * Notifies IFTTT about a new IPTV signup
 */
export async function notifyIptvSignup(signup: IptvSignup): Promise<boolean> {
  if (!iftttConfig.iptvSignupWebhook) {
    console.warn('IPTV signup webhook not configured');
    return false;
  }
  
  return sendToIFTTT(iftttConfig.iptvSignupWebhook, {
    event: 'new_iptv_signup',
    data: signup
  });
}

/**
 * Function to manually trigger notifications for recent submissions
 * This can be used to resend notifications for submissions that were missed
 */
export async function sendRecentSubmissionsToIFTTT(
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
  
  // Send each submission to IFTTT
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

// Export a function to get the current IFTTT configuration
export function getIFTTTConfig(): Omit<IFTTTConfig, 'webhookSecret'> {
  // Don't expose the webhook secret
  const { webhookSecret, ...publicConfig } = iftttConfig;
  return publicConfig;
}