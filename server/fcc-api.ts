import { Request, Response } from 'express';
import { findProvidersByLocation } from './services/fcc-api';

/**
 * Handler for searching providers by address using the FCC National Broadband Map API
 */
export async function searchProvidersByAddressHandler(req: Request, res: Response) {
  try {
    const { address } = req.query;
    
    if (!address || typeof address !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid address or ZIP code'
      });
    }
    
    console.log('Searching for providers at address:', address);
    
    // Add timeout to avoid hanging requests
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timed out')), 5000);
    });
    
    // Create a promise that can be raced with the timeout
    const dataPromise = findProvidersByLocation(address);
    
    try {
      // Race between the API call and the timeout
      const providers = await Promise.race([dataPromise, timeoutPromise]);
      
      console.log('Provider search successful, returning data');
      return res.status(200).json({
        success: true,
        data: providers
      });
    } catch (innerError: any) {
      console.error('Provider search timed out or failed:', innerError.message);
      
      // Create fallback data for the client
      return res.status(500).json({
        success: false,
        message: innerError.message || 'Request timed out or failed',
        fallbackMode: true
      });
    }
    
  } catch (error: any) {
    console.error('Error searching for providers:', error);
    
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to retrieve provider information',
      fallbackMode: true
    });
  }
}