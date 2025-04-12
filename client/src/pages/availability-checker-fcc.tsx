import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Check, 
  X, 
  Phone, 
  Search, 
  MapPin, 
  Wifi, 
  Tv, 
  AlertCircle,
  Loader2
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const AvailabilityChecker: React.FC = () => {
  const [zipCode, setZipCode] = useState<string>("");
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [providers, setProviders] = useState<any[]>([]);
  
  // Validate ZIP code
  const validateZipCode = (zip: string) => {
    return /^\d{5}(-\d{4})?$/.test(zip) || /^\d{5}(\s\d{4})?$/.test(zip);
  };
  
  // State for API query
  const [submittedZip, setSubmittedZip] = useState<string>("");
  
  // API query using React Query
  const { 
    data: providerData,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['providers', submittedZip],
    queryFn: async () => {
      if (!submittedZip) return null;
      const response = await fetch(`/api/provider-search?address=${encodeURIComponent(submittedZip)}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch provider data');
      }
      
      return response.json();
    },
    enabled: submittedZip !== "",
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  
  // Process the API results when they arrive
  useEffect(() => {
    if (providerData) {
      setIsChecking(false);
      setSearched(true);
      
      if (providerData.success && providerData.data) {
        // Process provider data from API
        const { fixedProviders = [], wirelessProviders = [] } = providerData.data;
        
        // Normalize the provider data
        const normalizedProviders = [
          ...fixedProviders.map((p: any) => ({
            name: p.name,
            logo: (
              <div className="bg-blue-600 text-white w-full h-full rounded flex items-center justify-center">
                <span className="font-bold">{p.name.substring(0, 2).toUpperCase()}</span>
              </div>
            ),
            services: p.technologies.map((tech: any) => ({
              type: "internet",
              name: tech.name,
              speed: `${tech.maxDownloadSpeed} Mbps download / ${tech.maxUploadSpeed} Mbps upload`,
              price: "Call for pricing",
              features: [
                `Technology: ${tech.name}`,
                "Contact for details",
                "Subject to availability"
              ]
            }))
          })),
          ...wirelessProviders.map((p: any) => ({
            name: p.name,
            logo: (
              <div className="bg-green-600 text-white w-full h-full rounded flex items-center justify-center">
                <span className="font-bold">{p.name.substring(0, 2).toUpperCase()}</span>
              </div>
            ),
            services: p.technologies.map((tech: any) => ({
              type: "internet",
              name: `${tech.name} Wireless`,
              speed: `${tech.maxDownloadSpeed} Mbps download / ${tech.maxUploadSpeed} Mbps upload`,
              price: "Call for pricing",
              features: [
                `Wireless Technology: ${tech.name}`,
                "Mobile coverage",
                "Contact for details"
              ]
            }))
          }))
        ];
        
        setProviders(normalizedProviders);
      } else {
        // Handle error or no results
        setProviders([]);
        if (providerData.message) {
          setErrorMessage(providerData.message);
        }
      }
    }
  }, [providerData]);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateZipCode(zipCode)) {
      setErrorMessage("Please enter a valid ZIP code");
      return;
    }
    
    setIsChecking(true);
    setErrorMessage(null);
    setSubmittedZip(zipCode);
    
    // Show a toast notification
    toast({
      title: "Searching for providers",
      description: `Looking up services available in ${zipCode}...`,
    });
  };
  
  return (
    <PageLayout>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Check Service Availability
              </h1>
              <p className="text-white/90 mb-2">
                Find TV and internet providers available at your location. Enter your ZIP code to get started.
              </p>
              <p className="text-white/90">
                Need personalized help? Call <a href="tel:8887886930" className="font-semibold text-white underline hover:text-white/80">888-788-6930</a> to speak with our experts.
              </p>
            </div>
          </div>
        </section>
        
        {/* Search Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-2">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Find Providers in Your Area</CardTitle>
                <CardDescription>
                  Enter your ZIP code below to see what services are available in your neighborhood
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-1">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input
                          type="text"
                          placeholder="Enter ZIP code"
                          className="pl-10"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          maxLength={10}
                        />
                      </div>
                      {errorMessage && (
                        <div className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          <span>{errorMessage}</span>
                        </div>
                      )}
                    </div>
                    <Button type="submit" disabled={isChecking} className="gap-2 min-w-[180px]">
                      {isChecking ? (
                        <>
                          <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                          <span>Checking...</span>
                        </>
                      ) : (
                        <>
                          <Search size={18} />
                          <span>Check Availability</span>
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    Example ZIP codes: 10001 (New York), 90210 (Beverly Hills), 33101 (Miami), 60601 (Chicago)
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Results Section */}
        {searched && (
          <section id="results-section" className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                {providers.length > 0 ? (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-green-600 mb-4">
                      <Check size={24} className="bg-green-100 p-1 rounded-full" />
                      <h2 className="text-2xl font-bold">Services Available in {zipCode}</h2>
                    </div>
                    
                    <p className="text-muted-foreground">
                      We found {providers.length} provider{providers.length !== 1 ? 's' : ''} offering service in your area. Compare plans and features below.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      {providers.map((provider, index) => (
                        <Card key={index} className="overflow-hidden border-2 transition-all hover:shadow-md">
                          <div className="p-4 md:p-6">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                                {provider.logo}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold">{provider.name}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {provider.services.length} plan{provider.services.length !== 1 ? 's' : ''} available
                                </p>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              {provider.services.map((service: any, sIndex: number) => (
                                <div key={sIndex} className="border rounded-lg p-4">
                                  <div className="flex items-center gap-2 mb-2">
                                    {service.type === "internet" ? (
                                      <Wifi size={18} className="text-primary" />
                                    ) : (
                                      <Tv size={18} className="text-primary" />
                                    )}
                                    <h4 className="font-semibold">
                                      {service.name}
                                      {service.speed && <span className="text-sm font-normal ml-1">({service.speed})</span>}
                                    </h4>
                                  </div>
                                  
                                  <p className="text-lg font-bold text-primary mb-2">{service.price}</p>
                                  
                                  <ul className="space-y-1">
                                    {service.features.map((feature: string, fIndex: number) => (
                                      <li key={fIndex} className="text-sm flex items-start gap-2">
                                        <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  
                                  <Button className="w-full mt-3 gap-2">
                                    <Phone size={16} />
                                    <span>Call to Order</span>
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="bg-primary/10 rounded-lg p-4 mt-8">
                      <p className="text-center">
                        Want help finding the best plan for your needs? Call <a href="tel:8887886930" className="font-semibold text-primary">888-788-6930</a> to speak with our experts.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="flex items-center justify-center gap-2 text-destructive mb-4">
                      <X size={24} className="bg-destructive/10 p-1 rounded-full" />
                      <h2 className="text-2xl font-bold">No Services Available</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      We couldn't find any providers offering service at ZIP code {zipCode}.
                    </p>
                    <Button asChild>
                      <a href="tel:8887886930" className="gap-2">
                        <Phone size={18} />
                        <span>Call for Assistance</span>
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
    </PageLayout>
  );
};

export default AvailabilityChecker;