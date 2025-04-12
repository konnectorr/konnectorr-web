import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { packages } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wifi, Tv, Package, BadgeCheck, DollarSign, ChevronRight } from "lucide-react";

interface ProviderColors {
  [key: string]: {
    color: string;
    gradient: string;
    icon: string;
  };
}

const ComparisonSection: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [visibleRows, setVisibleRows] = useState(5);
  
  // Show more rows when clicking "View More"
  const showMoreRows = () => {
    setVisibleRows(prev => prev + 5);
  };
  
  // Map package providers to unique colors
  const providerColors: ProviderColors = {
    "DIRECTV": { 
      color: "text-blue-600", 
      gradient: "from-blue-500 to-blue-600",
      icon: "satellite" 
    },
    "Xfinity": { 
      color: "text-red-500", 
      gradient: "from-red-500 to-red-600",
      icon: "cable"
    },
    "Spectrum": { 
      color: "text-indigo-600", 
      gradient: "from-indigo-500 to-indigo-600",
      icon: "cable"
    },
    "DISH": { 
      color: "text-yellow-600", 
      gradient: "from-yellow-500 to-yellow-600",
      icon: "satellite"
    },
    "Optimum": { 
      color: "text-blue-700", 
      gradient: "from-blue-600 to-blue-700",
      icon: "fiber"
    },
    "Cox": { 
      color: "text-orange-600", 
      gradient: "from-orange-500 to-orange-600",
      icon: "cable"
    },
    "AT&T TV": { 
      color: "text-blue-500", 
      gradient: "from-blue-400 to-blue-500",
      icon: "cable"
    },
    "Earthlink": { 
      color: "text-green-600", 
      gradient: "from-green-500 to-green-600",
      icon: "fiber"
    },
    "Viasat": { 
      color: "text-purple-600", 
      gradient: "from-purple-500 to-purple-600",
      icon: "satellite"
    },
    "HughesNet": { 
      color: "text-sky-600", 
      gradient: "from-sky-500 to-sky-600",
      icon: "satellite"
    }
  };
  
  // Animation effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('comparison-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Get unique providers for the filter tabs
  const uniqueProviders = Array.from(new Set(packages.map(pkg => pkg.provider)));
  
  // Filter packages based on the selected provider
  const filteredPackages = selectedProvider 
    ? packages.filter(pkg => pkg.provider === selectedProvider)
    : packages;
  
  // Show only the first 'visibleRows' number of packages
  const displayedPackages = filteredPackages.slice(0, visibleRows);
  
  // Get provider logo and colors
  const getProviderStyle = (provider: string) => {
    return providerColors[provider] || { 
      color: "text-gray-600", 
      gradient: "from-gray-500 to-gray-600",
      icon: "default"
    };
  };
  
  // Render provider icon based on the type
  const renderProviderIcon = (provider: string) => {
    const style = getProviderStyle(provider);
    
    switch(style.icon) {
      case 'satellite':
        return <div className="p-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-200">
          <Tv className="w-5 h-5 text-blue-600" />
        </div>;
      case 'fiber':
        return <div className="p-2 rounded-full bg-gradient-to-r from-green-100 to-green-200">
          <Wifi className="w-5 h-5 text-green-600" />
        </div>;
      case 'cable':
        return <div className="p-2 rounded-full bg-gradient-to-r from-purple-100 to-purple-200">
          <Tv className="w-5 h-5 text-purple-600" />
        </div>;
      default:
        return <div className="p-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200">
          <Package className="w-5 h-5 text-gray-600" />
        </div>;
    }
  };
  
  return (
    <section id="comparison-section" className="py-20 bg-gradient-to-tr from-gray-50 to-white relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-40 translate-x-1/2"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/5 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-10 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Compare TV & Internet Packages</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-2 text-lg">
            Find the right combination of channels, speed, and price for your home entertainment needs.
          </p>
          <p className="text-gray-600">
            Need help deciding? Call us at <a href="tel:8887886930" className="text-primary font-semibold hover:underline transition-colors">888-788-6930</a> for expert advice.
          </p>
        </div>
        
        {/* Provider Filter Tabs */}
        <div className={`mb-8 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-4">
              <TabsList className="bg-blue-50 p-1 rounded-full">
                <TabsTrigger 
                  value="all" 
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm px-5"
                  onClick={() => setSelectedProvider(null)}
                >
                  All Providers
                </TabsTrigger>
                {uniqueProviders.slice(0, 5).map((provider) => (
                  <TabsTrigger 
                    key={provider} 
                    value={provider}
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm px-5"
                    onClick={() => setSelectedProvider(provider)}
                  >
                    {provider}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </div>
        
        <div className={`overflow-x-auto shadow-lg rounded-xl border border-gray-100 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          <Table className="w-full bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-primary/90">
                <TableHead className="py-4 px-6 text-left text-white font-medium">Provider</TableHead>
                <TableHead className="py-4 px-6 text-left text-white font-medium">Package Name</TableHead>
                <TableHead className="py-4 px-6 text-left text-white font-medium">Channels</TableHead>
                <TableHead className="py-4 px-6 text-left text-white font-medium">Internet Speed</TableHead>
                <TableHead className="py-4 px-6 text-left text-white font-medium">Price</TableHead>
                <TableHead className="py-4 px-6 text-left text-white font-medium">Features</TableHead>
                <TableHead className="py-4 px-6 text-left text-white font-medium">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedPackages.map((pkg, index) => (
                <TableRow 
                  key={pkg.id} 
                  className={`border-b border-gray-100 hover:bg-blue-50/30 transition-colors duration-200 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <TableCell className="py-4 px-6">
                    <div className="flex items-center">
                      {renderProviderIcon(pkg.provider)}
                      <span className={`font-medium ml-3 ${getProviderStyle(pkg.provider).color}`}>
                        {pkg.provider}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-6 font-medium">{pkg.packageName}</TableCell>
                  <TableCell className="py-4 px-6">
                    {pkg.channels !== "N/A" ? (
                      <div className="flex items-center">
                        <Tv className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{pkg.channels}</span>
                      </div>
                    ) : "—"}
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    {pkg.internetSpeed !== "N/A" ? (
                      <div className="flex items-center">
                        <Wifi className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{pkg.internetSpeed}</span>
                      </div>
                    ) : "—"}
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                      <span className="font-bold text-green-600">{pkg.price}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <ul className="space-y-1 text-sm">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <BadgeCheck className="h-4 w-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <Button asChild size="sm" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                      <a href={pkg.link} className="flex items-center">
                        View
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {visibleRows < filteredPackages.length && (
          <div className="text-center mt-6">
            <Button 
              onClick={showMoreRows}
              variant="outline" 
              className={`transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '600ms' }}
            >
              Load More Packages
            </Button>
          </div>
        )}
        
        <div className={`text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <Button asChild className="bg-primary hover:bg-primary/90 rounded-full px-6 py-2.5 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            <a href="#">
              Compare All Packages
            </a>
          </Button>
          <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary/10 rounded-full transition-all duration-300">
            <a href="tel:8887886930" className="flex items-center gap-2 px-6 py-2.5">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone relative z-10"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              Call: 888-788-6930
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
