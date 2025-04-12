import React from "react";
import { Satellite, MapPin, Check, X, Clock, Bolt, ArrowRight, Download, Upload, Globe, Cloud, Zap, RadioTower, Laptop, Phone, Gamepad, Tv } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

// Components
import { PageLayout } from "@/components/layout/page-layout";

// Satellite Illustration Component
const SatelliteIllustration = () => (
  <div className="bg-indigo-50 p-5 rounded-xl relative h-64 overflow-hidden">
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
        <Satellite className="h-10 w-10 text-indigo-600" />
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-600 to-transparent rounded-b-xl"></div>
    
    <div className="absolute bottom-8 left-1/4 w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
      <Laptop className="h-6 w-6 text-indigo-600" />
    </div>
    
    <div className="absolute bottom-8 right-1/4 w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
      <Tv className="h-6 w-6 text-indigo-600" />
    </div>
    
    {/* Satellite Beams */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <line x1="50%" y1="24%" x2="25%" y2="75%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" />
      <line x1="50%" y1="24%" x2="75%" y2="75%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" />
    </svg>
    
    <div className="absolute top-32 left-1/2 transform -translate-x-1/2 text-center">
      <p className="text-sm font-medium text-indigo-800">Satellite transmits data <br />between your home and provider</p>
    </div>
  </div>
);

const SatelliteInternetPage: React.FC = () => {
  return (
    <PageLayout>
      <main className="bg-gray-50 flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Satellite Internet</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Internet service that connects to your home via satellites orbiting Earth, providing coverage virtually anywhere with a clear view of the sky.
                </p>
              </div>
              <div className="flex-shrink-0 bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-xl text-white text-center">
                <div className="text-3xl font-bold mb-1">150 Mbps</div>
                <div className="text-sm opacity-90">Top Speed</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-indigo-500 mb-2">
                  <Globe className="h-5 w-5" />
                  <span className="font-semibold">Universal Coverage</span>
                </div>
                <p className="text-gray-600 text-sm">Available virtually anywhere with a clear view of the southern sky, even in remote rural areas.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-red-500 mb-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">High Latency</span>
                </div>
                <p className="text-gray-600 text-sm">Traditional satellite internet has higher latency (500-600ms) than wired options due to the distance signals travel.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-purple-500 mb-2">
                  <Cloud className="h-5 w-5" />
                  <span className="font-semibold">Weather Sensitive</span>
                </div>
                <p className="text-gray-600 text-sm">Heavy rain, snow, or dense cloud cover can temporarily affect connection quality and speeds.</p>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle>How Satellite Internet Works</CardTitle>
              <CardDescription className="text-indigo-100">
                Understanding the technology behind satellite internet connections
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Satellite Technology Explained</h3>
                  <p className="text-gray-600 mb-4">
                    Satellite internet connects you by sending and receiving signals to a satellite in orbit. Your home satellite dish communicates with satellites positioned thousands of miles above Earth, which then communicate with ground stations connected to the internet backbone.
                  </p>
                  
                  <h4 className="font-semibold mt-6 mb-2">Key Components:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-indigo-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Satellite Dish</span>
                        <p className="text-sm text-gray-600">Mounted on your home, sends and receives signals to/from orbiting satellites</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-indigo-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Satellites in Orbit</span>
                        <p className="text-sm text-gray-600">GEO (Geostationary Earth Orbit) satellites at 22,236 miles or LEO (Low Earth Orbit) satellites at 340-1,200 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-indigo-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Ground Stations</span>
                        <p className="text-sm text-gray-600">Connect satellites to the internet backbone</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-indigo-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Satellite Modem</span>
                        <p className="text-sm text-gray-600">Processes the satellite signals for use with your home network</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <SatelliteIllustration />
                  
                  <div className="bg-indigo-50 rounded-xl p-5 mt-6">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-900">Traditional vs. Next-Gen Satellite</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center text-sm font-medium">
                          <span>Traditional (GEO)</span>
                          <span>Next-Gen (LEO)</span>
                        </div>
                        <Separator className="my-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Latency</span>
                        </div>
                        <div className="relative h-8 flex items-center">
                          <div className="absolute w-full h-2 bg-gray-200 rounded-full"></div>
                          <div className="absolute left-0 h-2 bg-red-500 rounded-full" style={{ width: "15%" }}></div>
                          <div className="absolute right-0 h-2 bg-green-500 rounded-full" style={{ width: "80%" }}></div>
                          <span className="absolute left-4 text-xs text-red-700">500-600ms</span>
                          <span className="absolute right-4 text-xs text-green-700">20-40ms</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Speed</span>
                        </div>
                        <div className="relative h-8 flex items-center">
                          <div className="absolute w-full h-2 bg-gray-200 rounded-full"></div>
                          <div className="absolute left-0 h-2 bg-yellow-500 rounded-full" style={{ width: "25%" }}></div>
                          <div className="absolute right-0 h-2 bg-green-500 rounded-full" style={{ width: "70%" }}></div>
                          <span className="absolute left-4 text-xs text-yellow-700">Up to 100 Mbps</span>
                          <span className="absolute right-4 text-xs text-green-700">Up to 500 Mbps</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Weather Impact</span>
                        </div>
                        <div className="relative h-8 flex items-center">
                          <div className="absolute w-full h-2 bg-gray-200 rounded-full"></div>
                          <div className="absolute left-0 h-2 bg-red-500 rounded-full" style={{ width: "30%" }}></div>
                          <div className="absolute right-0 h-2 bg-yellow-500 rounded-full" style={{ width: "60%" }}></div>
                          <span className="absolute left-4 text-xs text-red-700">High</span>
                          <span className="absolute right-4 text-xs text-yellow-700">Moderate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ideal Uses for Satellite Internet</CardTitle>
              <CardDescription>
                Activities and households that benefit from satellite internet's capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Download className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Web Browsing</span>
                  <span className="text-xs mt-1 text-green-600">Good</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Tv className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">HD Streaming</span>
                  <span className="text-xs mt-1 text-green-600">Acceptable</span>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-yellow-600">
                    <Tv className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">4K Streaming</span>
                  <span className="text-xs mt-1 text-yellow-600">Limited</span>
                </div>
                
                <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-red-500">
                    <Gamepad className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Online Gaming</span>
                  <span className="text-xs mt-1 text-red-500">Not Recommended</span>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-yellow-600">
                    <Upload className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">File Uploads</span>
                  <span className="text-xs mt-1 text-yellow-600">Limited</span>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-yellow-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Video Calls</span>
                  <span className="text-xs mt-1 text-yellow-600">Fair</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Smart Home</span>
                  <span className="text-xs mt-1 text-green-600">Acceptable</span>
                </div>
                
                <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-red-500">
                    <RadioTower className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">5+ Users</span>
                  <span className="text-xs mt-1 text-red-500">Not Recommended</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Best For These Households</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-2">Rural Residents</h4>
                    <p className="text-sm text-gray-600">People living in remote areas where cable, fiber, or DSL aren't available as options.</p>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-2">RV & Mobile Users</h4>
                    <p className="text-sm text-gray-600">Travelers and mobile home residents who need internet access in changing locations.</p>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-2">Temporary Residents</h4>
                    <p className="text-sm text-gray-600">People who need internet for a short time period without installing permanent infrastructure.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Major Satellite Internet Providers</CardTitle>
              <CardDescription>
                Leading companies offering satellite internet service across the United States
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/viasat.com" 
                    alt="Viasat" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/viasat-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">Viasat</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 100 Mbps</p>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Starting at $64.99/mo</Badge>
                </div>
                
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/hughesnet.com" 
                    alt="HughesNet" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/hughesnet-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">HughesNet</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 25 Mbps</p>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Starting at $64.99/mo</Badge>
                </div>
                
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/starlink.com" 
                    alt="Starlink" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/starlink-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">Starlink</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 500 Mbps</p>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Starting at $110/mo</Badge>
                </div>
                
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/oneweb.net" 
                    alt="OneWeb" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/oneweb-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">OneWeb</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 150 Mbps</p>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Business focus</Badge>
                </div>
              </div>
              
              <div className="mt-8 bg-indigo-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3">Satellite Internet Technology Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px]">
                    <thead>
                      <tr className="border-b border-indigo-200">
                        <th className="text-left py-2 font-semibold text-indigo-900">Type</th>
                        <th className="text-left py-2 font-semibold text-indigo-900">Orbit Height</th>
                        <th className="text-left py-2 font-semibold text-indigo-900">Latency</th>
                        <th className="text-left py-2 font-semibold text-indigo-900">Key Companies</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-indigo-100">
                        <td className="py-2">GEO Satellite</td>
                        <td className="py-2">22,236 miles</td>
                        <td className="py-2">500-600ms</td>
                        <td className="py-2">HughesNet, Viasat</td>
                      </tr>
                      <tr className="border-b border-indigo-100">
                        <td className="py-2">LEO Satellite</td>
                        <td className="py-2">340-1,200 miles</td>
                        <td className="py-2">20-40ms</td>
                        <td className="py-2">Starlink, OneWeb</td>
                      </tr>
                      <tr>
                        <td className="py-2">MEO Satellite</td>
                        <td className="py-2">5,000-12,000 miles</td>
                        <td className="py-2">100-200ms</td>
                        <td className="py-2">O3b Networks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Connect From Anywhere With Satellite Internet</h2>
              <p className="text-indigo-100 max-w-2xl mx-auto">
                Get online no matter where you live with reliable satellite internet service.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/availability-checker">
                <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-100">
                  Check Availability
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/internet/comparison">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-indigo-700">
                  Compare All Internet Types
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default SatelliteInternetPage;