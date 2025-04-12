import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { streamingServices, streamingDevices } from "@/lib/data";
import { Play, Monitor, Tv, Smartphone, Disc, Film, CheckCircle, DollarSign, ArrowRight, Globe, Video } from "lucide-react";
import * as SiIcons from "react-icons/si";

const StreamingSection: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const [activeTab, setActiveTab] = useState<'services' | 'devices'>('services');
  
  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('streaming-section');
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
  
  // Helper function to render streaming service logos with modern design
  const renderStreamingLogo = (serviceName: string) => {
    // Find the service in the streamingServices data
    const service = streamingServices.find(s => s.name === serviceName);
    if (!service) return null;
    
    // Get the icon component from the imported SiIcons
    const IconComponent = service.logoIcon ? (SiIcons as any)[service.logoIcon] : null;
    
    return (
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-white flex items-center justify-center mr-3 shadow-md border border-gray-100">
          {IconComponent ? (
            <IconComponent size={28} style={{ color: service.logoColor }} />
          ) : (
            <Globe className="w-6 h-6 text-primary" />
          )}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-gray-800">{serviceName}</span>
        </div>
      </div>
    );
  };

  // Helper function to render streaming device logos with modern design
  const renderDeviceLogo = (deviceName: string) => {
    // Find the device in the data
    const device = streamingDevices.find(d => d.name === deviceName);
    if (!device) return null;
    
    // Get the icon component
    const IconComponent = device.logoIcon ? (SiIcons as any)[device.logoIcon] : null;
    
    return (
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-50 to-white flex items-center justify-center mr-4 shadow border border-gray-100 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
        {IconComponent ? (
          <IconComponent size={32} style={{ color: device.logoColor }} className="relative z-10" />
        ) : (
          <Tv className="w-8 h-8 text-primary relative z-10" />
        )}
      </div>
    );
  };
  
  return (
    <section id="streaming-section" className="py-20 bg-gradient-to-br from-white to-gray-50 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute -top-5 left-0 w-full h-10 bg-white transform -skew-y-2 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 transform ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Streaming Services & Devices</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-2 text-lg">
            Find the best streaming options to complement your TV and internet service.
          </p>
          <p className="text-gray-600">
            Have questions about streaming services? Call <a href="tel:8887886930" className="text-primary font-semibold hover:underline transition-colors">888-788-6930</a> to speak with our experts.
          </p>
        </div>
        
        <div className={`flex justify-center mb-8 transition-all duration-700 transform ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="inline-flex bg-blue-50 p-1 rounded-full">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center ${
                activeTab === 'services' ? 'bg-white shadow-md text-primary font-medium' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Play className="w-4 h-4 mr-2" />
              Streaming Services
            </button>
            <button
              onClick={() => setActiveTab('devices')}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center ${
                activeTab === 'devices' ? 'bg-white shadow-md text-primary font-medium' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Tv className="w-4 h-4 mr-2" />
              Streaming Devices
            </button>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Streaming Services Tab */}
          <div className={`${activeTab === 'services' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {streamingServices.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`transition-all duration-700 transform ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <Card className="card-hover rounded-xl overflow-hidden border border-gray-100 h-full flex flex-col">
                    <CardHeader className="p-6 pb-4">
                      {renderStreamingLogo(service.name)}
                    </CardHeader>
                    <CardContent className="px-6 py-2 flex-grow">
                      <div className="flex items-center mb-2">
                        <DollarSign className="h-4 w-4 text-green-500 mr-1" />
                        <span className="font-semibold text-primary">{service.price}</span>
                      </div>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>On-demand streaming</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Multiple device support</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-4 border-t border-gray-100">
                      <Button asChild variant="outline" className="w-full rounded-lg border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                        <a href={service.link} className="flex items-center justify-center">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className={`mt-10 text-center transition-all duration-700 transform ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
              <Button asChild variant="secondary" className="px-6 py-6 rounded-full group transition-all duration-300 hover:shadow-md">
                <a href="#" className="flex items-center">
                  <span>Compare All Streaming Services</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Streaming Devices Tab */}
          <div className={`${activeTab === 'devices' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {streamingDevices.map((device, index) => (
                <div 
                  key={device.id}
                  className={`transition-all duration-700 transform ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <Card className="card-hover rounded-xl overflow-hidden border border-gray-100">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        {renderDeviceLogo(device.name)}
                        <div className="flex-grow">
                          <h4 className="font-semibold text-gray-800 mb-1">{device.name}</h4>
                          <p className="text-sm text-gray-600">{device.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 text-green-500 mr-1" />
                          <span className="font-bold text-green-600">{device.price}</span>
                        </div>
                        <Button asChild size="sm" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                          <a href={device.link} className="flex items-center">
                            View Details
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className={`mt-10 text-center transition-all duration-700 transform ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
              <Button asChild variant="secondary" className="px-6 py-6 rounded-full group transition-all duration-300 hover:shadow-md">
                <a href="#" className="flex items-center">
                  <span>View All Streaming Devices</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Why Choose Streaming Info Box */}
        <div className={`mt-16 max-w-5xl mx-auto relative transition-all duration-700 transform ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <Card className="rounded-2xl overflow-hidden border-0 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 z-0"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
            
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need help choosing the right streaming option?</h3>
                  <p className="text-white/90 mb-6">
                    Our experts can help you navigate the streaming landscape and find the perfect combination of services and devices that fits your viewing preferences and budget.
                  </p>
                  <Button asChild className="bg-white text-primary hover:bg-white/90 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    <a href="tel:8887886930" className="flex items-center px-6 py-6">
                      <div className="relative mr-2">
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone relative z-10"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      </div>
                      <span className="font-medium">Call Us Now: 888-788-6930</span>
                    </a>
                  </Button>
                </div>
                
                <div className="hidden md:flex justify-center">
                  <div className="w-48 h-48 relative animate-floating">
                    <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <Video className="w-20 h-20 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StreamingSection;
