import React from "react";
import { Zap, MapPin, Check, X, Clock, Bolt, ArrowRight, Download, Upload, Tv, RadioTower, Laptop, Phone, Gamepad } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

// Components
import { PageLayout } from "@/components/layout/page-layout";

const FiberInternetPage: React.FC = () => {
  return (
    <PageLayout>
      <main className="bg-gray-50 flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Fiber Internet</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Experience the fastest internet technology available today, with symmetrical upload and download speeds and ultra-low latency.
                </p>
              </div>
              <div className="flex-shrink-0 bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-xl text-white text-center">
                <div className="text-3xl font-bold mb-1">1-5 Gbps</div>
                <div className="text-sm opacity-90">Top Speed</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-green-500 mb-2">
                  <Download className="h-5 w-5" />
                  <span className="font-semibold">Ultra-Fast Speeds</span>
                </div>
                <p className="text-gray-600 text-sm">Download and upload speeds up to 5 Gbps (5,000 Mbps), perfect for 4K streaming and large file transfers.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-indigo-500 mb-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Low Latency</span>
                </div>
                <p className="text-gray-600 text-sm">Ultra-low ping times of 2-10ms make fiber ideal for online gaming, video calls, and real-time applications.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-purple-500 mb-2">
                  <Bolt className="h-5 w-5" />
                  <span className="font-semibold">Symmetrical Service</span>
                </div>
                <p className="text-gray-600 text-sm">Equal upload and download speeds, unlike other internet types that offer much slower upload speeds.</p>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle>How Fiber Internet Works</CardTitle>
              <CardDescription className="text-indigo-100">
                Understanding the technology behind the fastest internet connection
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Fiber Optic Technology</h3>
                  <p className="text-gray-600 mb-4">
                    Fiber optic internet transmits data as pulses of light through thin strands of glass or plastic fiber, bundled together in a protective cable. This technology allows data to travel at nearly the speed of light, resulting in significantly faster speeds than traditional copper-based internet connections.
                  </p>
                  
                  <h4 className="font-semibold mt-6 mb-2">Key Components:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-indigo-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Optical Fiber Cables</span>
                        <p className="text-sm text-gray-600">Glass or plastic fibers that transmit data using light signals</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-indigo-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Optical Network Terminal (ONT)</span>
                        <p className="text-sm text-gray-600">Device installed at your home that converts light signals to electrical signals</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-indigo-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Router/Modem</span>
                        <p className="text-sm text-gray-600">Distributes the internet connection throughout your home</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="bg-indigo-50 rounded-xl p-5 mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-900">Fiber vs. Other Technologies</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Max Download Speed</span>
                        </div>
                        <div className="relative h-8">
                          <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
                          <div className="absolute h-full bg-indigo-600 rounded-full" style={{ width: "100%" }}></div>
                          <div className="absolute h-full bg-blue-500 rounded-full" style={{ width: "25%" }}></div>
                          <div className="absolute h-full bg-cyan-500 rounded-full" style={{ width: "12%" }}></div>
                          <div className="absolute h-full bg-purple-500 rounded-full" style={{ width: "20%" }}></div>
                          <div className="absolute inset-0 flex items-center justify-end px-3">
                            <span className="text-xs font-medium text-white">Fiber: 5 Gbps</span>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Cable: 1.2 Gbps</span>
                          <span>DSL: 100 Mbps</span>
                          <span>Satellite: 150 Mbps</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Reliability</span>
                        </div>
                        <div className="relative h-8">
                          <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
                          <div className="absolute h-full bg-indigo-600 rounded-full" style={{ width: "98%" }}></div>
                          <div className="absolute h-full bg-blue-500 rounded-full" style={{ width: "92%" }}></div>
                          <div className="absolute h-full bg-cyan-500 rounded-full" style={{ width: "90%" }}></div>
                          <div className="absolute h-full bg-purple-500 rounded-full" style={{ width: "80%" }}></div>
                          <div className="absolute inset-0 flex items-center justify-between px-3">
                            <span className="text-xs font-medium text-white">Fiber: 99.9%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Latency</span>
                        </div>
                        <div className="relative h-8">
                          <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
                          <div className="absolute h-full bg-indigo-600 rounded-full" style={{ width: "95%" }}></div>
                          <div className="absolute h-full bg-blue-500 rounded-full" style={{ width: "75%" }}></div>
                          <div className="absolute h-full bg-cyan-500 rounded-full" style={{ width: "65%" }}></div>
                          <div className="absolute h-full bg-purple-500 rounded-full" style={{ width: "15%" }}></div>
                          <div className="absolute inset-0 flex items-center px-3">
                            <span className="text-xs font-medium text-white">Lower is better</span>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Fiber: 2-10ms</span>
                          <span>Cable: 15-30ms</span>
                          <span>DSL: 20-40ms</span>
                          <span>Satellite: 500-600ms</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-5">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-900">Fiber Deployment Types</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="bg-indigo-100 rounded-full p-1 mt-1 flex-shrink-0">
                          <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-indigo-900">FTTH (Fiber to the Home)</span>
                          <p className="text-sm text-gray-600">Fiber runs directly to your home, providing the best possible performance</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="bg-indigo-100 rounded-full p-1 mt-1 flex-shrink-0">
                          <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-indigo-900">FTTB (Fiber to the Building)</span>
                          <p className="text-sm text-gray-600">Fiber reaches the building, then uses existing wiring for individual units</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="bg-indigo-100 rounded-full p-1 mt-1 flex-shrink-0">
                          <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="font-medium text-indigo-900">FTTC (Fiber to the Curb)</span>
                          <p className="text-sm text-gray-600">Fiber reaches nearby utility poles, then copper lines complete the connection</p>
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
              <CardTitle>Ideal Uses for Fiber Internet</CardTitle>
              <CardDescription>
                Activities and households that benefit most from fiber's capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Tv className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">4K/8K Streaming</span>
                  <span className="text-xs mt-1 text-green-600">Excellent</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Gamepad className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Online Gaming</span>
                  <span className="text-xs mt-1 text-green-600">Excellent</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Upload className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">File Uploads</span>
                  <span className="text-xs mt-1 text-green-600">Excellent</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Video Conferencing</span>
                  <span className="text-xs mt-1 text-green-600">Excellent</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Smart Home</span>
                  <span className="text-xs mt-1 text-green-600">Excellent</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Download className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Large Downloads</span>
                  <span className="text-xs mt-1 text-green-600">Excellent</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <RadioTower className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Multiple Users</span>
                  <span className="text-xs mt-1 text-green-600">Excellent</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Bolt className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Remote Work</span>
                  <span className="text-xs mt-1 text-green-600">Excellent</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Best For These Households</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-2">Tech-Heavy Homes</h4>
                    <p className="text-sm text-gray-600">Households with many connected devices, smart home systems, and heavy internet usage.</p>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-2">Work From Home Professionals</h4>
                    <p className="text-sm text-gray-600">Remote workers who rely on video calls, VPNs, and cloud services for daily operations.</p>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-2">Large Families</h4>
                    <p className="text-sm text-gray-600">Multiple family members simultaneously streaming, gaming, and using bandwidth-intensive applications.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Major Fiber Internet Providers</CardTitle>
              <CardDescription>
                Leading companies offering fiber optic internet service across the United States
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/att.com" 
                    alt="AT&T Fiber" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/att-fiber-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">AT&T Fiber</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 5 Gbps</p>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Starting at $55/mo</Badge>
                </div>
                
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/verizon.com" 
                    alt="Verizon Fios" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/verizon-fios-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">Verizon Fios</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 940 Mbps</p>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Starting at $49.99/mo</Badge>
                </div>
                
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/google.com" 
                    alt="Google Fiber" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/google-fiber-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">Google Fiber</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 2 Gbps</p>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Starting at $70/mo</Badge>
                </div>
                
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/frontier.com" 
                    alt="Frontier Fiber" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/frontier-fiber-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">Frontier Fiber</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 2 Gbps</p>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Starting at $49.99/mo</Badge>
                </div>
              </div>
              
              <div className="mt-8 bg-indigo-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3">Fiber Internet Availability</h3>
                <p className="text-gray-600 mb-4">
                  Fiber internet is currently available to approximately 32% of U.S. households, primarily in urban and suburban areas. Coverage continues to expand as providers invest in new fiber infrastructure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Most Fiber-Connected States</h4>
                    <ol className="list-decimal list-inside text-sm space-y-1 text-gray-600 pl-2">
                      <li>Rhode Island (96% coverage)</li>
                      <li>New Jersey (72% coverage)</li>
                      <li>Connecticut (65% coverage)</li>
                      <li>New York (62% coverage)</li>
                      <li>Maryland (59% coverage)</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Most Fiber-Connected Cities</h4>
                    <ol className="list-decimal list-inside text-sm space-y-1 text-gray-600 pl-2">
                      <li>Chattanooga, TN</li>
                      <li>San Francisco, CA</li>
                      <li>San Diego, CA</li>
                      <li>Washington, DC</li>
                      <li>Seattle, WA</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Ready to Experience the Power of Fiber?</h2>
              <p className="text-indigo-100 max-w-2xl mx-auto">
                Get matched with the best fiber internet providers available in your area.
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

export default FiberInternetPage;