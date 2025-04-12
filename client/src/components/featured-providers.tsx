import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, StarHalf, Tv, Satellite, Wifi, Signal, Zap, Globe, BarChart4 } from "lucide-react";
import { providers } from "@/lib/data";
import * as SiIcons from "react-icons/si";

const FeaturedProviders: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'cable' | 'satellite' | 'fiber'>('all');

  // Animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('featured-providers');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-yellow-400 text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-yellow-400" />);
    }
    
    return stars;
  };
  
  // Find the provider data for a given provider name
  const findProvider = (providerName: string) => {
    return providers.find(p => p.name === providerName);
  };
  
  // Helper function to render different logos for each provider
  const renderProviderLogo = (providerName: string) => {
    const provider = findProvider(providerName);
    if (!provider) return null;
    
    // Provider type mapping for filtering
    const providerTypes: {[key: string]: 'cable' | 'satellite' | 'fiber'} = {
      "DIRECTV": 'satellite',
      "Xfinity": 'cable',
      "Spectrum": 'cable',
      "DISH": 'satellite',
      "Optimum": 'fiber',
      "Earthlink": 'fiber',
      "Viasat": 'satellite',
      "HughesNet": 'satellite'
    };
    
    // Logo mapping
    const logoMapping: {[key: string]: string} = {
      "DIRECTV": "/logos/directv-logo.svg",
      "Xfinity": "/logos/xfinity-logo.svg",
      "Spectrum": "/logos/spectrum-logo.svg",
      "DISH": "/logos/dish-logo.svg",
      "Optimum": "/logos/optimum-logo.svg",
      "Earthlink": "/logos/earthlink-logo.svg",
      "Viasat": "/logos/viasat-logo.svg",
      "HughesNet": "/logos/hughesnet-logo.svg"
    };
    
    // Get the background gradient based on provider type
    const getBgGradient = (type: 'cable' | 'satellite' | 'fiber') => {
      switch (type) {
        case 'cable':
          return 'bg-gradient-to-tr from-blue-100 to-blue-50';
        case 'satellite':
          return 'bg-gradient-to-tr from-purple-100 to-purple-50';
        case 'fiber':
          return 'bg-gradient-to-tr from-green-100 to-green-50';
        default:
          return 'bg-gradient-to-tr from-gray-100 to-gray-50';
      }
    };
    
    // Use SVG logo if available, otherwise use icon component
    const logoSrc = logoMapping[providerName];
    const IconComponent = provider.logoIcon ? (SiIcons as any)[provider.logoIcon] : null;
    
    return (
      <div className="h-20 flex items-center justify-center mb-4">
        {logoSrc ? (
          <div className="h-16 w-full flex items-center justify-center">
            <img 
              src={logoSrc} 
              alt={`${providerName} logo`} 
              className="object-contain h-full max-w-[180px] hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className={`flex items-center`}>
            <div className={`w-16 h-16 rounded-full ${getBgGradient(providerTypes[providerName])} flex items-center justify-center shadow-md relative group`}>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="z-10" style={{ color: provider.logoColor }}>
                {IconComponent ? 
                  <IconComponent size={32} /> : 
                  providerTypes[providerName] === 'satellite' ? 
                    <Satellite className="h-8 w-8" /> : 
                    providerTypes[providerName] === 'fiber' ? 
                      <Zap className="h-8 w-8" /> : 
                      <Tv className="h-8 w-8" />
                }
              </span>
            </div>
            <div className={`ml-3 font-bold text-xl`} style={{ color: provider.logoColor }}>
              {providerName}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Filter providers based on the active tab
  const filteredProviders = providers.filter(provider => {
    if (activeTab === 'all') return true;
    
    const providerTypes: {[key: string]: 'cable' | 'satellite' | 'fiber'} = {
      "DIRECTV": 'satellite',
      "Xfinity": 'cable',
      "Spectrum": 'cable',
      "DISH": 'satellite',
      "Optimum": 'fiber',
      "Earthlink": 'fiber',
      "Viasat": 'satellite',
      "HughesNet": 'satellite'
    };
    
    return providerTypes[provider.name] === activeTab;
  });
  
  return (
    <section id="featured-providers" className="py-20 bg-gradient-to-br from-white to-blue-50 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Top TV & Internet Providers
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-2 text-lg">
            Compare the best TV and internet service providers nationwide to find the perfect package for your home.
          </p>
          <p className="text-gray-600">
            Need help choosing a provider? Call <a href="tel:8887886930" className="text-primary font-semibold hover:underline transition-colors">888-788-6930</a> for a free consultation.
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-8 transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <Button
            onClick={() => setActiveTab('all')}
            variant={activeTab === 'all' ? 'default' : 'outline'}
            className="rounded-full px-6"
          >
            All Providers
          </Button>
          <Button
            onClick={() => setActiveTab('cable')}
            variant={activeTab === 'cable' ? 'default' : 'outline'}
            className="rounded-full px-6"
          >
            <Tv className="mr-2 h-4 w-4" />
            Cable
          </Button>
          <Button
            onClick={() => setActiveTab('satellite')}
            variant={activeTab === 'satellite' ? 'default' : 'outline'}
            className="rounded-full px-6"
          >
            <Satellite className="mr-2 h-4 w-4" />
            Satellite
          </Button>
          <Button
            onClick={() => setActiveTab('fiber')}
            variant={activeTab === 'fiber' ? 'default' : 'outline'}
            className="rounded-full px-6"
          >
            <Zap className="mr-2 h-4 w-4" />
            Fiber
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProviders.map((provider, index) => (
            <div 
              key={provider.id} 
              className={`transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <Card className="card-hover bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <CardContent className="p-6 text-center">
                  {renderProviderLogo(provider.name)}
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex animate-pulse-slow">
                      {renderRating(provider.rating)}
                    </div>
                    <span className="text-gray-600 ml-2 font-medium">{provider.rating}/5</span>
                  </div>
                  <p className="text-gray-600 mb-4 h-12">{provider.description}</p>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-2 rounded-lg mb-4">
                    <p className="text-primary font-bold">Starting at {provider.price}</p>
                  </div>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-md">
                    <a href={provider.link} className="py-2">
                      View Plans
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-10 transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <Button variant="outline" className="group rounded-full px-6 py-2.5 hover:bg-primary hover:text-white transition-all duration-300">
            <span className="inline-flex items-center">
              View All Providers
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
