import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";
import { AlertTriangle, CloudRain, Sun, Wind, Info, RefreshCw, Cloud, MapPin } from "lucide-react";

// Types
interface WeatherData {
  location: string;
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    humidity: number;
    cloud: number;
    precip_mm: number;
    precip_in: number;
  };
}

interface ServiceImpact {
  satellite: {
    tv: number;
    internet: number;
    reasons: string[];
  };
  cable: {
    tv: number;
    internet: number;
    reasons: string[];
  };
  fiber: {
    tv: number;
    internet: number;
    reasons: string[];
  };
  dsl: {
    tv: number;
    internet: number;
    reasons: string[];
  };
  fixed_wireless: {
    tv: number;
    internet: number;
    reasons: string[];
  };
}

// Calculate the impact of weather conditions on different services
const calculateServiceImpact = (weatherData: WeatherData): ServiceImpact => {
  // Default impact values (0-10 scale where 10 is severe impact)
  const impact: ServiceImpact = {
    satellite: { tv: 0, internet: 0, reasons: [] },
    cable: { tv: 0, internet: 0, reasons: [] },
    fiber: { tv: 0, internet: 0, reasons: [] },
    dsl: { tv: 0, internet: 0, reasons: [] },
    fixed_wireless: { tv: 0, internet: 0, reasons: [] }
  };

  // Get weather conditions
  const { condition, wind_mph, humidity, cloud, precip_mm } = weatherData.current;
  const conditionCode = condition.code;
  const conditionText = condition.text.toLowerCase();

  // Heavy rain/storm conditions (codes 1030-1201)
  if (
    (conditionCode >= 1030 && conditionCode <= 1201) || 
    precip_mm > 10 ||
    conditionText.includes("rain") || 
    conditionText.includes("thunder") || 
    conditionText.includes("storm")
  ) {
    // Satellite is highly affected by heavy rain (rain fade)
    impact.satellite.tv += 7;
    impact.satellite.internet += 8;
    impact.satellite.reasons.push("Heavy rain causes signal degradation (rain fade)");
    
    // Fixed wireless is moderately affected
    impact.fixed_wireless.tv += 5;
    impact.fixed_wireless.internet += 6;
    impact.fixed_wireless.reasons.push("Rain can interfere with wireless signals");
    
    // Cable can be affected if there's flooding or water damage
    impact.cable.tv += 2;
    impact.cable.internet += 2;
    impact.cable.reasons.push("Potential for water damage to outdoor equipment");
    
    // DSL can face issues with wet phone lines
    impact.dsl.tv += 3;
    impact.dsl.internet += 3;
    impact.dsl.reasons.push("Water exposure may affect phone lines");
  }

  // Snow/freezing conditions (codes 1210-1282)
  if (
    (conditionCode >= 1210 && conditionCode <= 1282) || 
    conditionText.includes("snow") || 
    conditionText.includes("ice") || 
    conditionText.includes("freez")
  ) {
    // Satellite can get snow accumulation on dish
    impact.satellite.tv += 6;
    impact.satellite.internet += 6;
    impact.satellite.reasons.push("Snow accumulation on satellite dish");
    
    // Cable and fiber can face physical damage from ice
    impact.cable.tv += 4;
    impact.cable.internet += 4;
    impact.cable.reasons.push("Possible line damage from ice accumulation");
    
    impact.fiber.tv += 3;
    impact.fiber.internet += 3;
    impact.fiber.reasons.push("Potential for ice damage to equipment");
    
    // Fixed wireless faces signal issues
    impact.fixed_wireless.tv += 5;
    impact.fixed_wireless.internet += 5;
    impact.fixed_wireless.reasons.push("Ice and snow can obstruct wireless signals");
  }

  // High winds (over 35 mph is considered strong/damaging)
  if (wind_mph > 35) {
    // Satellite dishes can be misaligned
    impact.satellite.tv += 6;
    impact.satellite.internet += 6;
    impact.satellite.reasons.push("High winds may cause dish misalignment");
    
    // Aerial cables can be damaged
    impact.cable.tv += 5;
    impact.cable.internet += 5;
    impact.cable.reasons.push("Potential for damage to overhead cables");
    
    impact.dsl.tv += 4;
    impact.dsl.internet += 4;
    impact.dsl.reasons.push("Phone lines may be affected by strong winds");
    
    // Fixed wireless can face alignment issues
    impact.fixed_wireless.tv += 7;
    impact.fixed_wireless.internet += 7;
    impact.fixed_wireless.reasons.push("Wind can disrupt wireless transmitters");
  }

  // Heavy cloud cover affects satellite more than others
  if (cloud > 75) {
    impact.satellite.tv += 3;
    impact.satellite.internet += 4;
    impact.satellite.reasons.push("Dense cloud cover may affect signal strength");
    
    impact.fixed_wireless.tv += 2;
    impact.fixed_wireless.internet += 3;
    impact.fixed_wireless.reasons.push("Some signal degradation from heavy cloud cover");
  }

  // Humidity rarely affects services directly but can impact equipment
  if (humidity > 90) {
    // Minor impact across most services due to potential condensation
    impact.satellite.tv += 1;
    impact.satellite.internet += 1;
    impact.cable.tv += 1;
    impact.cable.internet += 1;
    impact.dsl.tv += 1;
    impact.dsl.internet += 1;
    impact.fixed_wireless.tv += 2;
    impact.fixed_wireless.internet += 2;
    impact.fixed_wireless.reasons.push("High humidity can cause signal refraction");
  }

  // Cap impacts at 10
  Object.keys(impact).forEach((service) => {
    const svc = service as keyof ServiceImpact;
    impact[svc].tv = Math.min(impact[svc].tv, 10);
    impact[svc].internet = Math.min(impact[svc].internet, 10);
    
    // Remove duplicate reasons
    const uniqueReasons: string[] = [];
    impact[svc].reasons.forEach(reason => {
      if (!uniqueReasons.includes(reason)) {
        uniqueReasons.push(reason);
      }
    });
    impact[svc].reasons = uniqueReasons;
  });

  return impact;
};

const WeatherImpactPage: React.FC = () => {
  const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [isGeolocating, setIsGeolocating] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // Store current location data in a cache object to quickly switch between locations
  const [locationCache, setLocationCache] = useState<{[key: string]: any}>({});
  const [currentSearchId, setCurrentSearchId] = useState<string>("");

  // Generate a unique ID for each search to force query refetch
  const getSearchId = () => Math.random().toString(36).substring(2, 9);
  
  const [apiError, setApiError] = useState<{
    status?: number;
    message: string;
    isKeyIssue: boolean;
  } | null>(null);

  const { data: weatherData, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['weather', location, currentSearchId],
    queryFn: async () => {
      try {
        setIsSearching(true);
        setApiError(null); // Reset API error state
        
        // Try to use cached data first
        if (locationCache[location]) {
          console.log("Using cached weather data for", location);
          return locationCache[location];
        }
        
        // Using the provided Weather API key with proper Vite env format (needs VITE_ prefix)
        console.log("Fetching weather data for", location);
        
        // Use the API key provided by the user directly
        const apiKey = "d377d6c0d4c741ecbb0173305251104";
        
        // If we don't have an API key, throw a specific error
        if (!apiKey) {
          setApiError({
            message: "Weather API key is missing",
            isKeyIssue: true
          });
          throw new Error('Weather API key is missing');
        }
        
        // Make the actual API call if we have a key
        console.log("Using Weather API key:", apiKey.substring(0, 5) + "...");
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
        console.log("Fetching from URL:", apiUrl);
        
        const response = await fetch(apiUrl);
        console.log("API Response status:", response.status);
        
        // Handle different HTTP error statuses with specific messages
        if (!response.ok) {
          const status = response.status;
          let errorMessage = 'Weather data not available';
          let isKeyIssue = false;
          
          // Map status codes to more specific error messages
          if (status === 401 || status === 403) {
            errorMessage = 'API key is invalid or expired';
            isKeyIssue = true;
          } else if (status === 400) {
            errorMessage = 'Invalid location format';
            isKeyIssue = false;
          } else if (status === 404) {
            errorMessage = 'Location not found';
            isKeyIssue = false;
          } else if (status >= 500) {
            errorMessage = 'Weather service is currently unavailable';
            isKeyIssue = false;
          }
          
          setApiError({
            status,
            message: errorMessage,
            isKeyIssue
          });
          
          throw new Error(errorMessage);
        }
        
        const data = await response.json();
        
        // Cache the successful result
        setLocationCache(prev => ({
          ...prev,
          [location]: data
        }));
        
        return data;
      } catch (err) {
        console.error("Weather API error:", err);
        
        // If we haven't set a specific API error, set a generic one
        if (!apiError) {
          setApiError({
            message: (err as Error).message || 'An unknown error occurred',
            isKeyIssue: false
          });
        }
        
        throw err; // Re-throw to let React Query handle it
      } finally {
        setIsSearching(false);
      }
    },
    enabled: location !== '',
    staleTime: 1000 * 60 * 15, // 15 minutes
    retry: 1,
  });
  
  // Function to generate mock weather data for testing/fallback
  const getMockWeatherData = (loc: string) => {
    return {
      location: {
        name: loc,
        region: "",
        country: "United States",
        localtime: new Date().toISOString()
      },
      current: {
        temp_c: 22,
        temp_f: 72,
        condition: {
          text: "Partly cloudy",
          icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
          code: 1003
        },
        wind_mph: 10,
        wind_kph: 16,
        humidity: 45,
        cloud: 30,
        precip_mm: 0,
        precip_in: 0
      }
    };
  };

  // Effect to handle the default welcome message and instructions
  React.useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      
      // Set New York as the default location after 1 second
      const timer = setTimeout(() => {
        if (location === "") {
          // Set a new search ID for the initial search
          const initialSearchId = getSearchId();
          setCurrentSearchId(initialSearchId);
          
          setSearchTerm("New York");
          setLocation("New York");
          toast({
            title: "Using default location: New York",
            description: "You can search for your own location using the search box above",
            variant: "default",
          });
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isFirstLoad, location]);

  // Effect to update search history when location changes
  React.useEffect(() => {
    if (location && !searchHistory.includes(location)) {
      // Add to search history, keeping only the most recent 5 locations
      setSearchHistory(prev => [location, ...prev.slice(0, 4)]);
    }
  }, [location, searchHistory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const newLocation = searchTerm.trim();
      
      // Generate a new search ID to force a query refresh
      const newSearchId = getSearchId();
      setCurrentSearchId(newSearchId);
      
      // Set the new location
      setLocation(newLocation);
      setSearchTerm("");
      
      toast({
        title: `Searching for ${newLocation}`,
        description: "Fetching latest weather data...",
        variant: "default",
      });
    } else {
      toast({
        title: "Please enter a location",
        description: "Enter a city name or zip code to check weather impact",
        variant: "destructive",
      });
    }
  };
  
  const handleHistorySelect = (historyLocation: string) => {
    if (location !== historyLocation) {
      // Generate a new search ID to force a query refresh
      const newSearchId = getSearchId();
      setCurrentSearchId(newSearchId);
      
      // Set the location from history
      setLocation(historyLocation);
      
      toast({
        title: `Checking weather for ${historyLocation}`,
        description: "Loading latest weather conditions...",
        variant: "default",
      });
    }
  };
  
  // Handle getting user's current location via browser geolocation API
  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Geolocation not supported",
        description: "Your browser doesn't support location services. Try entering your location manually.",
        variant: "destructive",
      });
      return;
    }
    
    // Set geolocating state to show loading indicator
    setIsGeolocating(true);
    
    navigator.geolocation.getCurrentPosition(
      // Success callback
      (position) => {
        const { latitude, longitude } = position.coords;
        const locationString = `${latitude},${longitude}`;
        
        // Generate a new search ID for the geolocation search
        const newSearchId = getSearchId();
        setCurrentSearchId(newSearchId);
        
        // Update the location to trigger a weather data fetch
        setLocation(locationString);
        
        toast({
          title: "Location detected",
          description: "Using your current location to check weather impact",
          variant: "default",
        });
        
        setIsGeolocating(false);
      },
      // Error callback
      (error) => {
        let errorMessage = "Failed to get your location";
        
        // Provide more specific error messages based on the error code
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied. Please enable location services in your browser.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable. Try entering your location manually.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out. Please try again.";
            break;
        }
        
        toast({
          title: "Location error",
          description: errorMessage,
          variant: "destructive",
        });
        
        setIsGeolocating(false);
      },
      // Options
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  // Calculate service impact if weather data is available
  const serviceImpact = weatherData ? calculateServiceImpact(weatherData) : null;

  // Helper function to get color based on impact level
  const getImpactColor = (level: number) => {
    if (level <= 3) return "bg-green-100 text-green-800"; // Low impact
    if (level <= 6) return "bg-yellow-100 text-yellow-800"; // Medium impact
    return "bg-red-100 text-red-800"; // High impact
  };

  return (
    <>
      <div className="bg-gradient-to-b from-primary/90 to-primary/70 text-white py-6 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-6">Weather Impact on TV & Internet</h1>
          <p className="text-sm md:text-base max-w-2xl mb-6 md:mb-8">
            Weather conditions can significantly affect the performance of different internet and TV services.
            Use this tool to check how current weather in your area might impact your connectivity.
          </p>
          <div className="flex flex-wrap items-center gap-2 mb-6 text-xs md:text-sm">
            <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm flex items-center">
              <span className="mr-1">✓</span> 24/7 Support
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm flex items-center">
              <span className="mr-1">✓</span> Secure Transactions
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm flex items-center">
              <span className="mr-1">✓</span> TCPA & PCI Compliant
            </span>
          </div>
          
          <div>
            <form onSubmit={handleSearch} className="flex flex-col gap-2 max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter city or zip code" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full"
                  disabled={isSearching || isGeolocating}
                />
                <Button type="submit" variant="secondary" disabled={isSearching || isGeolocating} className="sm:w-auto w-full">
                  {isSearching ? <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> : null}
                  Check Impact
                </Button>
              </div>
              
              {/* One-Click Location Button */}
              <Button 
                type="button" 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10 mt-1"
                onClick={handleGetCurrentLocation}
                disabled={isSearching || isGeolocating}
              >
                {isGeolocating ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <MapPin className="w-4 h-4 mr-2" />
                )}
                {isGeolocating ? "Getting location..." : "Use My Location"}
              </Button>
            </form>
            
            {/* Search History */}
            {searchHistory.length > 0 && (
              <div className="mt-4 max-w-md">
                <p className="text-xs text-white/70 mb-2">Recent Searches:</p>
                <div className="flex flex-wrap gap-2">
                  {searchHistory.map((historyItem, index) => (
                    <button
                      key={index}
                      onClick={() => handleHistorySelect(historyItem)}
                      className={`text-xs py-1 px-3 rounded-full transition-all 
                        ${historyItem === location 
                          ? 'bg-white/30 text-white font-medium shadow-sm' 
                          : 'bg-white/10 text-white/80 hover:bg-white/20'}`}
                    >
                      {historyItem}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="bg-slate-50 border border-slate-100 rounded-md p-4 text-center text-sm text-slate-600 mb-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs">✓</span>
            <span>24/7 Support</span>
          </div>
          <div className="hidden sm:block w-1 h-4 border-r border-slate-300"></div>
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs">✓</span>
            <span>Secure Transactions</span>
          </div>
          <div className="hidden sm:block w-1 h-4 border-r border-slate-300"></div>
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs">✓</span>
            <span>TCPA & PCI Compliant</span>
          </div>
        </div>
        
        {location === "" && !isLoading && !isError && (
          <div className="flex flex-col items-center justify-center py-8 md:py-16 text-center max-w-2xl mx-auto">
            <div className="mb-6 p-5 md:p-6 bg-primary/5 rounded-full">
              <Cloud className="w-12 h-12 md:w-16 md:h-16 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Check Weather Impact</h2>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Discover how current weather conditions in your area might affect your internet and TV service quality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
              <Button 
                onClick={handleGetCurrentLocation} 
                className="gap-2"
                disabled={isGeolocating}
              >
                {isGeolocating ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <MapPin className="w-4 h-4" />
                )}
                {isGeolocating ? "Detecting location..." : "Use My Location"}
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm("New York");
                  const newSearchId = getSearchId();
                  setCurrentSearchId(newSearchId);
                  setLocation("New York");
                }}
              >
                Try Demo (New York)
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full mt-4">
              {/* Step 1 */}
              <div className="bg-white border border-gray-100 rounded-lg p-4 flex flex-col items-center text-center shadow-sm">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="font-medium mb-1">Enter Location</h3>
                <p className="text-sm text-gray-500">
                  Type in your city or zip code
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white border border-gray-100 rounded-lg p-4 flex flex-col items-center text-center shadow-sm">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="font-medium mb-1">Get Weather Data</h3>
                <p className="text-sm text-gray-500">
                  We'll fetch the latest weather conditions
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white border border-gray-100 rounded-lg p-4 flex flex-col items-center text-center shadow-sm">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="font-medium mb-1">View Impact Analysis</h3>
                <p className="text-sm text-gray-500">
                  See how weather affects different services
                </p>
              </div>
            </div>
          </div>
        )}
      
        {isLoading && (
          <div className="flex flex-col justify-center items-center py-20">
            <div className="relative w-20 h-20 mb-4">
              <div className="absolute inset-0 rounded-full animate-ping bg-primary/20"></div>
              <div className="absolute inset-2 rounded-full animate-pulse bg-primary/30"></div>
              <RefreshCw className="w-20 h-20 animate-spin text-primary relative z-10 opacity-80" />
            </div>
            <h3 className="text-xl font-medium mt-4">Loading Weather Data</h3>
            <p className="text-gray-500 mt-2">Fetching current conditions for {location}...</p>
          </div>
        )}
        
        {isError && (
          <div className="max-w-xl mx-auto py-12">
            <Alert variant={apiError?.isKeyIssue ? "destructive" : "default"} className="mb-6 shadow-md">
              <AlertTriangle className="h-5 w-5" />
              <AlertTitle className="text-lg font-medium">
                {apiError?.isKeyIssue 
                  ? "Weather API Key Issue" 
                  : "Unable to Get Weather Data"}
              </AlertTitle>
              <AlertDescription className="mt-2">
                {apiError?.message || (error as Error)?.message || "Failed to load weather data for this location."}
                
                {apiError?.status && (
                  <div className="mt-1 text-sm opacity-80">
                    Error code: {apiError.status}
                  </div>
                )}
              </AlertDescription>
            </Alert>
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mt-4">
              {apiError?.isKeyIssue ? (
                <>
                  <h3 className="font-medium text-lg mb-3 text-gray-800">API Key Information:</h3>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded mb-4">
                    <p className="text-amber-800">
                      This feature requires a valid WeatherAPI.com API key to display real-time weather data.
                    </p>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>The current API key appears to be invalid or expired</li>
                    <li>Please contact the site administrator to update the API key</li>
                    <li>For development purposes, you can <a href="https://www.weatherapi.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">sign up for a WeatherAPI.com key</a></li>
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="font-medium text-lg mb-3 text-gray-800">Suggestions:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Check that you've spelled the location correctly</li>
                    <li>Try using a zip/postal code instead of a city name</li>
                    <li>Try a larger nearby city if you're in a small town</li>
                    <li>Include the country name for better results (e.g., "Paris, France")</li>
                  </ul>
                </>
              )}
              
              <Button 
                onClick={() => refetch()} 
                className="mt-6 w-full"
                variant="outline"
              >
                Try Again
              </Button>
            </div>
          </div>
        )}
        
        {weatherData && serviceImpact && (
          <div className="space-y-8">
            {/* Current Weather Card - Futuristic Design */}
            <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-slate-900 to-primary/90 text-white">
              <div className="absolute inset-0 bg-[url('/esim-world-connected.svg')] bg-cover bg-center opacity-10"></div>
              <CardHeader className="relative z-10 border-b border-white/10">
                <CardTitle className="flex items-center text-xl">
                  <div className="bg-white/20 p-2 rounded-full mr-3 backdrop-blur-sm">
                    <img 
                      src={weatherData.current.condition.icon} 
                      alt={weatherData.current.condition.text}
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <span className="block text-xs text-blue-200 uppercase tracking-wider mb-1">Current Weather</span>
                    {weatherData.location.name}, {weatherData.location.country}
                  </div>
                </CardTitle>
                <CardDescription className="text-blue-100 opacity-80">
                  Last updated: {new Date().toLocaleString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pt-6">
                <div className="flex justify-center mb-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold">{weatherData.current.temp_c}°<span className="text-lg">C</span></div>
                    <div className="text-lg mt-1 text-blue-100">{weatherData.current.temp_f}°F</div>
                    <div className="mt-2 text-blue-200">{weatherData.current.condition.text}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="relative overflow-hidden bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/5 transition-all hover:bg-white/20">
                    <div className="absolute top-0 right-0 p-2 opacity-20">
                      <Wind className="w-8 h-8" />
                    </div>
                    <h3 className="text-xs uppercase tracking-wider text-blue-200 mb-1">Wind</h3>
                    <div className="text-xl font-semibold">{weatherData.current.wind_mph} mph</div>
                    <div className="text-sm text-blue-100">{weatherData.current.wind_kph} kph</div>
                  </div>
                  
                  <div className="relative overflow-hidden bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/5 transition-all hover:bg-white/20">
                    <div className="absolute top-0 right-0 p-2 opacity-20">
                      <CloudRain className="w-8 h-8" />
                    </div>
                    <h3 className="text-xs uppercase tracking-wider text-blue-200 mb-1">Precipitation</h3>
                    <div className="text-xl font-semibold">{weatherData.current.precip_mm} mm</div>
                    <div className="text-sm text-blue-100">{weatherData.current.precip_in}"</div>
                  </div>
                  
                  <div className="relative overflow-hidden bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/5 transition-all hover:bg-white/20">
                    <div className="absolute top-0 right-0 p-2 opacity-20">
                      <Cloud className="w-8 h-8" />
                    </div>
                    <h3 className="text-xs uppercase tracking-wider text-blue-200 mb-1">Cloud Cover</h3>
                    <div className="text-xl font-semibold">{weatherData.current.cloud}%</div>
                    <div className="text-sm text-blue-100">
                      {weatherData.current.cloud < 25 ? 'Clear' : 
                       weatherData.current.cloud < 50 ? 'Partly Cloudy' : 
                       weatherData.current.cloud < 75 ? 'Mostly Cloudy' : 'Overcast'}
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/5 transition-all hover:bg-white/20">
                    <div className="absolute top-0 right-0 p-2 opacity-20">
                      <span className="w-8 h-8 flex items-center justify-center text-xl">%</span>
                    </div>
                    <h3 className="text-xs uppercase tracking-wider text-blue-200 mb-1">Humidity</h3>
                    <div className="text-xl font-semibold">{weatherData.current.humidity}%</div>
                    <div className="text-sm text-blue-100">
                      {weatherData.current.humidity < 30 ? 'Dry' : 
                       weatherData.current.humidity < 60 ? 'Comfortable' : 'Humid'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Service Impact Heading */}
            <div className="mt-6 md:mt-8 mb-4 md:mb-6">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <div className="h-6 md:h-8 w-1 bg-primary rounded-full"></div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Service Impact Analysis</h2>
              </div>
              <p className="text-sm md:text-base text-gray-600 pl-3 md:pl-4 border-l-2 border-gray-200">
                Based on current weather conditions, here's how different services might be affected in your area:
              </p>
            </div>
            
            {/* Service Impact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pb-6">
              {/* Satellite */}
              <Card className="border border-slate-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-slate-100 to-white p-2 border-b">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M4 10a4 4 0 0 0 4 4h12"></path>
                        <path d="M2 14a6 6 0 0 0 6 6h12"></path>
                        <circle cx="20" cy="4" r="2"></circle>
                        <path d="M14.5 9.5 18 6"></path>
                        <path d="M16 7a2 2 0 0 0 4 0 4 4 0 0 0-4-4 6 6 0 0 0-6 6 4 4 0 0 0 0 4 2 2 0 0 0 0 4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Satellite Service</h3>
                      <p className="text-xs text-gray-500">Weather sensitivity: High</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <div className="space-y-6">
                    {/* TV Service Impact */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                            <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                            <polyline points="17 2 12 7 7 2"></polyline>
                          </svg>
                          <span className="text-sm font-medium">TV Service</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full 
                            ${serviceImpact.satellite.tv > 6 
                              ? 'bg-red-100 text-red-800' 
                              : serviceImpact.satellite.tv > 3 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-green-100 text-green-800'}`}>
                            {serviceImpact.satellite.tv > 6 ? 'High Impact' : 
                             serviceImpact.satellite.tv > 3 ? 'Moderate' : 'Low Impact'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            serviceImpact.satellite.tv > 6 ? 'bg-gradient-to-r from-red-500 to-red-300' : 
                            serviceImpact.satellite.tv > 3 ? 'bg-gradient-to-r from-yellow-500 to-yellow-300' : 
                            'bg-gradient-to-r from-green-500 to-green-300'
                          }`} 
                          style={{ width: `${serviceImpact.satellite.tv * 10}%` }}>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Low</span>
                        <span>Moderate</span>
                        <span>High</span>
                      </div>
                    </div>
                    
                    {/* Internet Service Impact */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                            <circle cx="12" cy="20" r="1"></circle>
                          </svg>
                          <span className="text-sm font-medium">Internet Service</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full 
                            ${serviceImpact.satellite.internet > 6 
                              ? 'bg-red-100 text-red-800' 
                              : serviceImpact.satellite.internet > 3 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-green-100 text-green-800'}`}>
                            {serviceImpact.satellite.internet > 6 ? 'High Impact' : 
                             serviceImpact.satellite.internet > 3 ? 'Moderate' : 'Low Impact'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            serviceImpact.satellite.internet > 6 ? 'bg-gradient-to-r from-red-500 to-red-300' : 
                            serviceImpact.satellite.internet > 3 ? 'bg-gradient-to-r from-yellow-500 to-yellow-300' : 
                            'bg-gradient-to-r from-green-500 to-green-300'
                          }`} 
                          style={{ width: `${serviceImpact.satellite.internet * 10}%` }}>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Low</span>
                        <span>Moderate</span>
                        <span>High</span>
                      </div>
                    </div>
                    
                    {/* Impact Reasons */}
                    {serviceImpact.satellite.reasons.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-dashed border-slate-200">
                        <h4 className="text-sm font-semibold mb-3 flex items-center text-primary">
                          <Info className="w-4 h-4 mr-2" /> Weather Impact Factors
                        </h4>
                        <ul className="text-sm space-y-2 bg-slate-50 p-3 rounded-lg">
                          {serviceImpact.satellite.reasons.map((reason, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <span className="text-primary mr-2 font-bold">•</span> 
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {/* Cable */}
              <Card className="border border-slate-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-slate-100 to-white p-2 border-b">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M4 5v14a1 1 0 0 0 1 1h14"></path>
                        <path d="M4 12h16"></path>
                        <path d="M11 12v8"></path>
                        <path d="M7 8v8"></path>
                        <path d="M15 16v4"></path>
                        <path d="M19 8v12"></path>
                        <path d="M15 2v6"></path>
                        <circle cx="15" cy="5" r="1"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Cable Service</h3>
                      <p className="text-xs text-gray-500">Weather sensitivity: Moderate</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <div className="space-y-6">
                    {/* TV Service Impact */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                            <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                            <polyline points="17 2 12 7 7 2"></polyline>
                          </svg>
                          <span className="text-sm font-medium">TV Service</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full 
                            ${serviceImpact.cable.tv > 6 
                              ? 'bg-red-100 text-red-800' 
                              : serviceImpact.cable.tv > 3 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-green-100 text-green-800'}`}>
                            {serviceImpact.cable.tv > 6 ? 'High Impact' : 
                             serviceImpact.cable.tv > 3 ? 'Moderate' : 'Low Impact'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            serviceImpact.cable.tv > 6 ? 'bg-gradient-to-r from-red-500 to-red-300' : 
                            serviceImpact.cable.tv > 3 ? 'bg-gradient-to-r from-yellow-500 to-yellow-300' : 
                            'bg-gradient-to-r from-green-500 to-green-300'
                          }`} 
                          style={{ width: `${serviceImpact.cable.tv * 10}%` }}>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Low</span>
                        <span>Moderate</span>
                        <span>High</span>
                      </div>
                    </div>
                    
                    {/* Internet Service Impact */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                            <circle cx="12" cy="20" r="1"></circle>
                          </svg>
                          <span className="text-sm font-medium">Internet Service</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full 
                            ${serviceImpact.cable.internet > 6 
                              ? 'bg-red-100 text-red-800' 
                              : serviceImpact.cable.internet > 3 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-green-100 text-green-800'}`}>
                            {serviceImpact.cable.internet > 6 ? 'High Impact' : 
                             serviceImpact.cable.internet > 3 ? 'Moderate' : 'Low Impact'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            serviceImpact.cable.internet > 6 ? 'bg-gradient-to-r from-red-500 to-red-300' : 
                            serviceImpact.cable.internet > 3 ? 'bg-gradient-to-r from-yellow-500 to-yellow-300' : 
                            'bg-gradient-to-r from-green-500 to-green-300'
                          }`} 
                          style={{ width: `${serviceImpact.cable.internet * 10}%` }}>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Low</span>
                        <span>Moderate</span>
                        <span>High</span>
                      </div>
                    </div>
                    
                    {/* Impact Reasons */}
                    {serviceImpact.cable.reasons.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-dashed border-slate-200">
                        <h4 className="text-sm font-semibold mb-3 flex items-center text-primary">
                          <Info className="w-4 h-4 mr-2" /> Weather Impact Factors
                        </h4>
                        <ul className="text-sm space-y-2 bg-slate-50 p-3 rounded-lg">
                          {serviceImpact.cable.reasons.map((reason, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <span className="text-primary mr-2 font-bold">•</span> 
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {/* Fiber */}
              <Card className="border border-slate-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-slate-100 to-white p-2 border-b">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M9 17H3"></path>
                        <path d="M13 17h8"></path>
                        <path d="M19 9h2"></path>
                        <path d="M13 9h4"></path>
                        <path d="M7 9H1"></path>
                        <path d="M9 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                        <path d="M17 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                        <path d="M9 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                        <path d="M17 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Fiber Service</h3>
                      <p className="text-xs text-gray-500">Weather sensitivity: Low</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <div className="space-y-6">
                    {/* TV Service Impact */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                            <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                            <polyline points="17 2 12 7 7 2"></polyline>
                          </svg>
                          <span className="text-sm font-medium">TV Service</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full 
                            ${serviceImpact.fiber.tv > 6 
                              ? 'bg-red-100 text-red-800' 
                              : serviceImpact.fiber.tv > 3 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-green-100 text-green-800'}`}>
                            {serviceImpact.fiber.tv > 6 ? 'High Impact' : 
                             serviceImpact.fiber.tv > 3 ? 'Moderate' : 'Low Impact'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            serviceImpact.fiber.tv > 6 ? 'bg-gradient-to-r from-red-500 to-red-300' : 
                            serviceImpact.fiber.tv > 3 ? 'bg-gradient-to-r from-yellow-500 to-yellow-300' : 
                            'bg-gradient-to-r from-green-500 to-green-300'
                          }`} 
                          style={{ width: `${serviceImpact.fiber.tv * 10}%` }}>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Low</span>
                        <span>Moderate</span>
                        <span>High</span>
                      </div>
                    </div>
                    
                    {/* Internet Service Impact */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                            <circle cx="12" cy="20" r="1"></circle>
                          </svg>
                          <span className="text-sm font-medium">Internet Service</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full 
                            ${serviceImpact.fiber.internet > 6 
                              ? 'bg-red-100 text-red-800' 
                              : serviceImpact.fiber.internet > 3 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-green-100 text-green-800'}`}>
                            {serviceImpact.fiber.internet > 6 ? 'High Impact' : 
                             serviceImpact.fiber.internet > 3 ? 'Moderate' : 'Low Impact'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            serviceImpact.fiber.internet > 6 ? 'bg-gradient-to-r from-red-500 to-red-300' : 
                            serviceImpact.fiber.internet > 3 ? 'bg-gradient-to-r from-yellow-500 to-yellow-300' : 
                            'bg-gradient-to-r from-green-500 to-green-300'
                          }`} 
                          style={{ width: `${serviceImpact.fiber.internet * 10}%` }}>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Low</span>
                        <span>Moderate</span>
                        <span>High</span>
                      </div>
                    </div>
                    
                    {/* Impact Reasons */}
                    {serviceImpact.fiber.reasons.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-dashed border-slate-200">
                        <h4 className="text-sm font-semibold mb-3 flex items-center text-primary">
                          <Info className="w-4 h-4 mr-2" /> Weather Impact Factors
                        </h4>
                        <ul className="text-sm space-y-2 bg-slate-50 p-3 rounded-lg">
                          {serviceImpact.fiber.reasons.map((reason, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <span className="text-primary mr-2 font-bold">•</span> 
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Compliance Footer */}
            <div className="mt-6 border-t border-slate-200 pt-8 pb-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <div className="bg-slate-50 border border-slate-100 py-2 px-4 rounded-md shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">✓</span>
                      </div>
                      <span className="text-sm font-medium">24/7 Support</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 py-2 px-4 rounded-md shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">✓</span>
                      </div>
                      <span className="text-sm font-medium">Secure Transactions</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 py-2 px-4 rounded-md shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">✓</span>
                      </div>
                      <span className="text-sm font-medium">TCPA & PCI Compliant</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 max-w-xl mx-auto">
                  Konnectorr is committed to maintaining the highest standards of security and compliance. 
                  All transactions are secured with enterprise-grade encryption. We are fully compliant with 
                  Telephone Consumer Protection Act (TCPA) regulations and Payment Card Industry (PCI) standards.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherImpactPage;