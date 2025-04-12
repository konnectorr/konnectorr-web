import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PageLayout } from "@/components/layout/page-layout";
import { toast } from "@/hooks/use-toast";
import { AlertTriangle, CloudRain, Sun, Wind, Info, RefreshCw, Cloud } from "lucide-react";

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

// Mock API call - this would be replaced with a real API call in production
const fetchWeatherData = async (zipCode: string): Promise<WeatherData> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulated weather data
  return {
    location: `Area code ${zipCode}`,
    current: {
      temp_c: 22,
      temp_f: 72,
      condition: {
        text: "Partly cloudy",
        icon: "",
        code: 1,
      },
      wind_mph: 10,
      wind_kph: 16,
      humidity: 45,
      cloud: 30,
      precip_mm: 0,
      precip_in: 0,
    }
  };
};

// Calculate service impact based on weather data
const calculateServiceImpact = (weatherData: WeatherData): ServiceImpact => {
  // Initialize impact scores (100 = no impact, 0 = complete outage)
  const impact: ServiceImpact = {
    satellite: { tv: 90, internet: 85, reasons: [] },
    cable: { tv: 95, internet: 92, reasons: [] },
    fiber: { tv: 99, internet: 98, reasons: [] },
    dsl: { tv: 93, internet: 90, reasons: [] },
    fixed_wireless: { tv: 88, internet: 85, reasons: [] }
  };
  
  // In a real app, this would calculate impact based on weather conditions
  return impact;
};

// Weather condition icon selector
const WeatherIcon: React.FC<{ condition: string }> = ({ condition }) => {
  switch (condition.toLowerCase()) {
    case "sunny":
      return <Sun className="h-8 w-8 text-yellow-500" />;
    case "partly cloudy":
      return <Cloud className="h-8 w-8 text-gray-400" />;
    case "cloudy":
      return <Cloud className="h-8 w-8 text-gray-600" />;
    case "rain":
      return <CloudRain className="h-8 w-8 text-blue-500" />;
    default:
      return <Cloud className="h-8 w-8 text-gray-500" />;
  }
};

// Main component
const WeatherImpactPage: React.FC = () => {
  const [zipCode, setZipCode] = useState("");
  const [submittedZip, setSubmittedZip] = useState("");
  const [error, setError] = useState("");
  
  const { data: weatherData, isLoading, isError, refetch } = useQuery({
    queryKey: ["weather", submittedZip],
    queryFn: () => fetchWeatherData(submittedZip),
    enabled: submittedZip !== "",
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  
  const serviceImpact = weatherData ? calculateServiceImpact(weatherData) : null;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation for US zip code (5 digits)
    if (!/^\d{5}$/.test(zipCode)) {
      setError("Please enter a valid 5-digit ZIP code");
      return;
    }
    
    setError("");
    setSubmittedZip(zipCode);
  };
  
  const handleRefresh = () => {
    refetch();
    toast({
      title: "Weather data refreshed",
      description: `Updated weather conditions for ${weatherData?.location}`,
    });
  };
  
  return (
    <PageLayout>
      <div className="bg-[#f9fafc] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Weather Impact on Service Performance</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Weather conditions can significantly impact the performance of different TV and internet technologies. 
                Enter your ZIP code to see how current weather might affect service in your area.
              </p>
            </div>
            
            <Card className="mb-8 shadow-md border-0">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
                <CardTitle className="text-xl">Check Your Location</CardTitle>
                <CardDescription>
                  Enter your ZIP code to get current weather conditions and service impact predictions.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-grow">
                    <Input
                      type="text"
                      placeholder="Enter your ZIP code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full"
                      maxLength={5}
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Check Conditions
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {isLoading && (
              <div className="flex justify-center items-center py-12">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <RefreshCw className="h-12 w-12 animate-spin text-primary" />
                  </div>
                  <div className="mt-6 text-primary font-medium">
                    Loading weather data...
                  </div>
                </div>
              </div>
            )}
            
            {isError && (
              <Alert variant="destructive" className="mb-8">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Unable to fetch weather data. Please try again or check your connection.
                </AlertDescription>
              </Alert>
            )}
            
            {weatherData && serviceImpact && (
              <Card className="mb-8 shadow-md border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500/10 to-blue-700/10 border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-xl">Current Weather in {weatherData.location}</CardTitle>
                      <CardDescription>
                        Here's how today's weather might affect your service
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm" onClick={handleRefresh} className="flex items-center gap-1">
                      <RefreshCw className="h-4 w-4" />
                      Refresh
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-6 rounded-lg">
                      <div className="flex items-center gap-3">
                        <WeatherIcon condition={weatherData.current.condition.text} />
                        <span className="text-2xl font-bold">{weatherData.current.temp_f}°F</span>
                      </div>
                      <p className="text-center mt-2 font-medium">{weatherData.current.condition.text}</p>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Wind className="h-4 w-4 text-gray-500" />
                          <span>{weatherData.current.wind_mph} mph</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CloudRain className="h-4 w-4 text-gray-500" />
                          <span>{weatherData.current.precip_in}" precip</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Cloud className="h-4 w-4 text-gray-500" />
                          <span>{weatherData.current.cloud}% cloud</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Info className="h-4 w-4 text-gray-500" />
                          <span>{weatherData.current.humidity}% humidity</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h3 className="text-lg font-medium mb-4">Service Impact Summary</h3>
                      <p className="mb-4">
                        Based on current conditions, expect normal service performance with minimal weather-related disruptions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WeatherImpactPage;