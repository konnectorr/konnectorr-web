import axios from 'axios';

// Base URLs for the FCC National Broadband Map API
const BASE_URL = 'https://broadbandmap.fcc.gov/nbm/map/api/published';
const GEOCODING_URL = 'https://broadbandmap.fcc.gov/nbm/map/api/geocoding/search';
const FCC_API_KEY = process.env.FCC_API_KEY;

if (!FCC_API_KEY) {
  console.error('FCC API key not found. Please set the FCC_API_KEY environment variable.');
}

const fccApiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${FCC_API_KEY}`
  }
});

/**
 * Geocode an address to get latitude and longitude
 * @param address The address to geocode (can be full address or ZIP code)
 */
export async function geocodeAddress(address: string) {
  try {
    const response = await fccApiClient.get(`${GEOCODING_URL}?address=${encodeURIComponent(address)}`);
    return response.data;
  } catch (error) {
    console.error('Error geocoding address:', error);
    throw error;
  }
}

/**
 * Get fixed broadband deployment data for a location
 * @param latitude Latitude of the location
 * @param longitude Longitude of the location
 */
export async function getFixedBroadbandData(latitude: number, longitude: number) {
  try {
    const response = await fccApiClient.get(`${BASE_URL}/fixed/location?latitude=${latitude}&longitude=${longitude}`);
    return response.data;
  } catch (error) {
    console.error('Error getting fixed broadband data:', error);
    throw error;
  }
}

/**
 * Get wireless broadband deployment data for a location
 * @param latitude Latitude of the location
 * @param longitude Longitude of the location
 */
export async function getWirelessBroadbandData(latitude: number, longitude: number) {
  try {
    const response = await fccApiClient.get(`${BASE_URL}/wireless/location?latitude=${latitude}&longitude=${longitude}`);
    return response.data;
  } catch (error) {
    console.error('Error getting wireless broadband data:', error);
    throw error;
  }
}

/**
 * Search for providers by location
 * @param address The address to search for providers (can be full address or ZIP code)
 */
export async function findProvidersByLocation(address: string) {
  try {
    // First, geocode the address to get lat/long
    const geocodeResult = await geocodeAddress(address);
    
    if (!geocodeResult || !geocodeResult.results || geocodeResult.results.length === 0) {
      throw new Error('Unable to geocode the provided address');
    }
    
    const location = geocodeResult.results[0];
    const { lat, lng } = location.location;
    
    // Now fetch fixed and wireless broadband data
    const [fixedData, wirelessData] = await Promise.all([
      getFixedBroadbandData(lat, lng),
      getWirelessBroadbandData(lat, lng)
    ]);
    
    // Process and combine the data
    return {
      location: {
        address: location.formatted_address,
        latitude: lat,
        longitude: lng
      },
      fixedProviders: processFixedProviders(fixedData),
      wirelessProviders: processWirelessProviders(wirelessData)
    };
  } catch (error) {
    console.error('Error finding providers by location:', error);
    throw error;
  }
}

/**
 * Process fixed broadband providers data
 */
function processFixedProviders(data: any) {
  if (!data || !data.results || !data.results.fixed) {
    return [];
  }
  
  const providers = data.results.fixed.providers || [];
  
  return providers.map((provider: any) => ({
    id: provider.provider_id,
    name: provider.provider_doing_business_as_name || provider.provider_name,
    technologies: provider.technology_codes.map((tech: any) => ({
      code: tech.technology_code,
      name: getTechnologyName(tech.technology_code),
      maxDownloadSpeed: tech.max_advertised_download_speed,
      maxUploadSpeed: tech.max_advertised_upload_speed
    })),
    type: 'fixed'
  }));
}

/**
 * Process wireless broadband providers data
 */
function processWirelessProviders(data: any) {
  if (!data || !data.results || !data.results.wireless) {
    return [];
  }
  
  const providers = data.results.wireless.providers || [];
  
  return providers.map((provider: any) => ({
    id: provider.provider_id,
    name: provider.provider_doing_business_as_name || provider.provider_name,
    technologies: provider.technology_codes.map((tech: any) => ({
      code: tech.technology_code,
      name: getTechnologyName(tech.technology_code),
      maxDownloadSpeed: tech.max_advertised_download_speed,
      maxUploadSpeed: tech.max_advertised_upload_speed
    })),
    type: 'wireless'
  }));
}

/**
 * Get human-readable technology name from technology code
 */
function getTechnologyName(technologyCode: number): string {
  const technologyMap: {[key: number]: string} = {
    10: 'DSL',
    11: 'ADSL',
    12: 'SDSL',
    20: 'Cable',
    30: 'Fiber',
    40: 'Fixed Wireless',
    41: 'Fixed Wireless - Licensed',
    42: 'Fixed Wireless - Unlicensed',
    43: 'Fixed Wireless - CBRS',
    50: 'Satellite',
    60: 'Broadband over Powerline',
    70: 'Other Wireline',
    90: 'Other',
    
    // Wireless codes
    100: 'LTE',
    101: '5G-NR',
    102: 'CDMA',
    103: 'EVDO',
    104: 'HSPA',
    105: 'WiMAX',
    106: 'GSM'
  };
  
  return technologyMap[technologyCode] || `Technology ${technologyCode}`;
}