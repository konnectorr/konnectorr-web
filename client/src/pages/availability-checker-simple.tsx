import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  X, 
  Phone, 
  Search, 
  MapPin, 
  Wifi, 
  Tv, 
  AlertCircle,
  CheckCircle,
  Clock,
  Shield,
  PackageCheck,
  Zap
} from "lucide-react";

// Enhanced component to display provider information
const ProviderCard = ({ provider }: { provider: any }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => setExpanded(!expanded);
  
  return (
    <Card className="overflow-hidden border transition-all hover:shadow-lg group">
      <div className="border-b border-muted/60 bg-muted/5">
        <div className="p-5 flex items-center gap-4">
          <div 
            className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm" 
            style={{ backgroundColor: provider.color }}
          >
            <span className="text-white font-bold text-lg">{provider.initials}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{provider.name}</h3>
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                Top Provider
              </Badge>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <div className="flex items-center gap-1 text-sm">
                <Wifi size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground">Internet</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Tv size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground">TV</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-muted-foreground">
                  {provider.services.length} plan{provider.services.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-5 space-y-6">
        {provider.services.map((service: any, sIndex: number) => (
          <div 
            key={sIndex} 
            className={`border rounded-xl p-5 transition-all ${
              sIndex === 0 ? 'relative bg-primary/5 border-primary/20' : 'bg-white'
            }`}
          >
            {sIndex === 0 && (
              <div className="absolute -top-3 left-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
                Best Value
              </div>
            )}
            
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2">
                  {service.type === "internet" ? (
                    <Wifi size={18} className="text-primary" />
                  ) : (
                    <Tv size={18} className="text-primary" />
                  )}
                  <h4 className="font-semibold text-lg">
                    {service.name}
                  </h4>
                </div>
                {service.speed && (
                  <div className="flex items-center gap-1.5 mt-1">
                    <Zap size={14} className="text-amber-500" />
                    <span className="text-sm font-medium">{service.speed}</span>
                  </div>
                )}
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{service.price}</p>
                <p className="text-xs text-muted-foreground">Plus taxes & fees</p>
              </div>
            </div>
            
            <ul className="space-y-2 mb-4">
              {service.features.map((feature: string, fIndex: number) => (
                <li key={fIndex} className="text-sm flex items-start gap-2">
                  <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0 bg-green-50 p-0.5 rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex gap-2 mt-4">
              <Button 
                className="flex-1 gap-2 font-medium bg-primary hover:bg-primary/90"
                size="lg"
              >
                <Phone size={16} />
                <span>Call to Order</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={toggleExpand}
                className="border-muted"
              >
                <PackageCheck size={18} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// Sample provider data
const providerPool = [
  {
    name: "Xfinity",
    initials: "XF",
    color: "#1F69C1",
    services: [
      {
        type: "internet",
        name: "Performance Pro",
        speed: "200 Mbps",
        price: "From $49.99/mo",
        features: [
          "Unlimited data",
          "WiFi equipment included", 
          "Access to 5G hotspots"
        ]
      },
      {
        type: "tv",
        name: "Popular TV",
        price: "From $59.99/mo",
        features: [
          "125+ channels", 
          "X1 Voice Remote", 
          "Streaming apps included"
        ]
      }
    ]
  },
  {
    name: "Spectrum",
    initials: "SP",
    color: "#0253a5",
    services: [
      {
        type: "internet",
        name: "Internet Ultra",
        speed: "500 Mbps",
        price: "From $69.99/mo",
        features: [
          "No data caps", 
          "Free modem", 
          "Security Suite included"
        ]
      },
      {
        type: "tv",
        name: "TV Select",
        price: "From $49.99/mo",
        features: [
          "125+ channels", 
          "Free HD", 
          "Spectrum TV App"
        ]
      }
    ]
  },
  {
    name: "AT&T",
    initials: "AT&T",
    color: "#009fdb",
    services: [
      {
        type: "internet",
        name: "Internet 500",
        speed: "500 Mbps",
        price: "From $55.00/mo",
        features: [
          "Unlimited data",
          "No equipment fee",
          "99% reliability"
        ]
      },
      {
        type: "tv",
        name: "DIRECTV STREAM",
        price: "From $69.99/mo",
        features: [
          "No annual contract",
          "Premium channels available",
          "Cloud DVR included"
        ]
      }
    ]
  },
  {
    name: "Verizon Fios",
    initials: "FIOS",
    color: "#ff0000",
    services: [
      {
        type: "internet",
        name: "Fios 300",
        speed: "300 Mbps",
        price: "From $49.99/mo",
        features: [
          "Symmetrical speeds",
          "No data caps",
          "Router included"
        ]
      },
      {
        type: "tv",
        name: "Fios TV",
        price: "From $56.00/mo",
        features: [
          "200+ channels",
          "4K content available",
          "Multi-room DVR"
        ]
      }
    ]
  }
];

const AvailabilityCheckerSimple = () => {
  const [location] = useLocation();
  const [zipCode, setZipCode] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [searchResults, setSearchResults] = useState<any[] | null>(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validate ZIP code
  const validateZipCode = (zip: string) => {
    return /^\d{5}(-\d{4})?$/.test(zip) || /^\d{5}(\s\d{4})?$/.test(zip);
  };

  // Get base 5-digit ZIP code
  const getBaseZipCode = (zip: string) => {
    return zip.substring(0, 5);
  };

  // Check availability with the given ZIP code
  const checkAvailability = (zip: string) => {
    // Validate ZIP code
    if (!validateZipCode(zip)) {
      setError("Please enter a valid ZIP code");
      return;
    }

    // Clear error and set loading state
    setError(null);
    setIsChecking(true);
    
    // Get the base 5-digit zip code
    const baseZipCode = getBaseZipCode(zip);

    // Create a deterministic selection of providers based on ZIP code
    setTimeout(() => {
      try {
        const zipSum = zip.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        const numberOfProviders = 1 + (zipSum % 3); // 1 to 3 providers

        // Select providers based on ZIP code (to ensure consistent results for same ZIP)
        const selectedProviders = [];
        for(let i = 0; i < numberOfProviders; i++) {
          const index = (zipSum + i) % providerPool.length;
          selectedProviders.push(providerPool[index]);
        }

        setSearchResults(selectedProviders);
        setSearched(true);
        setIsChecking(false);
        
        // Scroll to results
        setTimeout(() => {
          document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } catch (err) {
        console.error("Error generating provider data:", err);
        setError("Unable to process your request. Please try again later.");
        setIsChecking(false);
      }
    }, 800);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checkAvailability(zipCode);
  };
  
  // Check for ZIP in URL parameters on component mount
  useEffect(() => {
    // Parse URL search parameters
    const params = new URLSearchParams(window.location.search);
    const zipParam = params.get('zip');
    
    if (zipParam) {
      setZipCode(zipParam);
      checkAvailability(zipParam);
    }
  }, []);

  return (
    <PageLayout hideHeader>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 opacity-20">
                <MapPin size={80} />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Check Service Availability
              </h1>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20 mb-6">
                <p className="text-white mb-2 leading-relaxed">
                  Find TV and internet providers available at your location. Enter your ZIP code to get started.
                </p>
                <p className="text-white flex items-center gap-2">
                  <Phone size={18} className="animate-pulse" />
                  Need personalized help? Call <a href="tel:8885698194" className="font-semibold text-white underline hover:text-white/80 transition-colors">888-569-8194</a> to speak with our experts.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 flex items-center gap-1.5 text-sm">
                  <CheckCircle size={16} />
                  <span>Accurate results</span>
                </div>
                <div className="bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 flex items-center gap-1.5 text-sm">
                  <Clock size={16} />
                  <span>Updated daily</span>
                </div>
                <div className="bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 flex items-center gap-1.5 text-sm">
                  <Shield size={16} />
                  <span>100% secure</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Search Section */}
        <section className="py-20 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-2">
                    <Zap size={14} className="mr-1" />
                    Instant Check
                  </Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold">Find Providers in Your Area</CardTitle>
                <CardDescription className="text-base">
                  Enter your ZIP code below to see what services are available in your neighborhood
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" size={20} />
                        <Input
                          type="text"
                          placeholder="Enter ZIP code"
                          className="pl-10 py-6 text-lg border-2 focus-visible:ring-primary"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          maxLength={10}
                        />
                      </div>
                      {error && (
                        <div className="text-destructive text-sm mt-2 flex items-center gap-1 bg-destructive/5 p-2 rounded-md">
                          <AlertCircle size={16} />
                          <span>{error}</span>
                        </div>
                      )}
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isChecking} 
                      className="gap-2 min-w-[180px] py-6 text-base bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity shadow-md"
                    >
                      {isChecking ? (
                        <>
                          <div className="animate-spin h-5 w-5 border-3 border-current border-t-transparent rounded-full" />
                          <span>Checking...</span>
                        </>
                      ) : (
                        <>
                          <Search size={20} />
                          <span>Check Availability</span>
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex gap-3 items-center border rounded-lg p-3 bg-muted/30">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Wifi className="h-6 w-6 text-primary/80" />
                      </div>
                      <div>
                        <h3 className="font-medium">Internet Service</h3>
                        <p className="text-xs text-muted-foreground">Find high-speed options</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-center border rounded-lg p-3 bg-muted/30">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Tv className="h-6 w-6 text-primary/80" />
                      </div>
                      <div>
                        <h3 className="font-medium">TV Packages</h3>
                        <p className="text-xs text-muted-foreground">Compare channel lineups</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground px-4 py-3 bg-muted/20 rounded-md">
                    <div className="font-medium mb-1">Example ZIP codes to try:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-muted" onClick={() => setZipCode("10001")}>
                        10001 (New York)
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-muted" onClick={() => setZipCode("90210")}>
                        90210 (Beverly Hills)
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-muted" onClick={() => setZipCode("33101")}>
                        33101 (Miami)
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-muted" onClick={() => setZipCode("60601")}>
                        60601 (Chicago)
                      </Badge>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Results Section */}
        {searched && (
          <section id="results-section" className="py-20 bg-gradient-to-b from-muted/30 to-white relative">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                {searchResults && searchResults.length > 0 ? (
                  <div className="space-y-8">
                    <div className="text-center mb-10">
                      <div className="inline-flex items-center justify-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full mb-4">
                        <Check size={20} className="text-green-600" />
                        <span className="font-medium">Services Found</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">Available Providers in {zipCode}</h2>
                      <div className="w-20 h-1 bg-primary mx-auto my-4 rounded-full"></div>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        We found {searchResults.length} provider{searchResults.length !== 1 ? 's' : ''} offering service in your area. 
                        Compare plans and features to find the best option for your needs.
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4 justify-center flex-wrap mb-4">
                      <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-3 py-1.5 text-sm">
                        <PackageCheck size={16} className="mr-1.5" />
                        All Plans
                      </Badge>
                      <Badge variant="outline" className="border-muted/70 px-3 py-1.5 text-sm">
                        <Wifi size={16} className="mr-1.5" />
                        Internet Only
                      </Badge>
                      <Badge variant="outline" className="border-muted/70 px-3 py-1.5 text-sm">
                        <Tv size={16} className="mr-1.5" />
                        TV Only
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                      {searchResults.map((provider, index) => (
                        <ProviderCard key={index} provider={provider} />
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 mt-12 shadow-sm">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Need personalized recommendations?</h3>
                          <p className="text-muted-foreground">
                            Our experts can help you find the perfect plan for your household
                          </p>
                        </div>
                        <Button asChild size="lg" className="gap-2 min-w-[200px] bg-primary hover:bg-primary/90">
                          <a href="tel:8885698194">
                            <Phone size={18} />
                            <span>Call 888-569-8194</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-2xl mx-auto">
                    <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                      <X size={32} className="text-destructive" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">No Services Available</h2>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      We couldn't find any providers offering service at ZIP code {zipCode}. Our team might be able to help you find alternatives.
                    </p>
                    <div className="flex flex-col md:flex-row gap-3 justify-center">
                      <Button asChild size="lg" className="gap-2">
                        <a href="tel:8885698194">
                          <Phone size={18} />
                          <span>Call for Assistance</span>
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="gap-2"
                        onClick={() => {
                          setZipCode("");
                          setSearched(false);
                          setSearchResults(null);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        <Search size={18} />
                        <span>Try Another ZIP</span>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </PageLayout>
  );
};

export default AvailabilityCheckerSimple;