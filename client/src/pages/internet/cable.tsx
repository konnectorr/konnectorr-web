import React from "react";
import { Tv, MapPin, Check, X, Clock, Bolt, ArrowRight, Download, Upload, Zap, RadioTower, Laptop, Phone, Gamepad } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

// Components
import { PageLayout } from "@/components/layout/page-layout";

const CableInternetPage: React.FC = () => {
  return (
    <PageLayout>
      <main className="bg-gray-50 flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Cable Internet</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Widely available high-speed internet that delivers broadband connectivity through the same coaxial cable lines used for cable television.
                </p>
              </div>
              <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-xl text-white text-center">
                <div className="text-3xl font-bold mb-1">1.2 Gbps</div>
                <div className="text-sm opacity-90">Top Speed</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-blue-500 mb-2">
                  <Download className="h-5 w-5" />
                  <span className="font-semibold">Fast Downloads</span>
                </div>
                <p className="text-gray-600 text-sm">Fast download speeds up to 1.2 Gbps (1,200 Mbps), great for streaming and gaming.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-cyan-500 mb-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Good Latency</span>
                </div>
                <p className="text-gray-600 text-sm">Low ping times of 15-30ms suitable for most online activities including gaming.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-blue-500 mb-2">
                  <Tv className="h-5 w-5" />
                  <span className="font-semibold">Widespread Availability</span>
                </div>
                <p className="text-gray-600 text-sm">Available to nearly 89% of US households, making it one of the most accessible high-speed options.</p>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
              <CardTitle>How Cable Internet Works</CardTitle>
              <CardDescription className="text-blue-100">
                Understanding the technology behind cable broadband connections
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Cable Technology Explained</h3>
                  <p className="text-gray-600 mb-4">
                    Cable internet connects to your home via coaxial cables – the same infrastructure used for cable TV. These cables are made of copper and are designed to carry large amounts of data with minimal signal loss. The connection is established through a cable modem that connects to your provider's nearest cable facility or "node."
                  </p>
                  
                  <h4 className="font-semibold mt-6 mb-2">Key Components:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-blue-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Coaxial Cables</span>
                        <p className="text-sm text-gray-600">Copper-based cables that carry data signals through your neighborhood</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-blue-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Cable Modem</span>
                        <p className="text-sm text-gray-600">Device that converts the signal from your cable line into a format your devices can use</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-blue-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">DOCSIS Protocol</span>
                        <p className="text-sm text-gray-600">Data Over Cable Service Interface Specification - the standard that enables high-speed data transfer over cable TV systems</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="bg-blue-50 rounded-xl p-5 mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">DOCSIS Versions & Speeds</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">DOCSIS 3.0</span>
                          <span className="text-sm font-medium">Up to 1 Gbps</span>
                        </div>
                        <div className="w-full bg-blue-200 h-2.5 rounded-full">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">DOCSIS 3.1</span>
                          <span className="text-sm font-medium">Up to 10 Gbps</span>
                        </div>
                        <div className="w-full bg-blue-200 h-2.5 rounded-full">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">DOCSIS 4.0</span>
                          <span className="text-sm font-medium">Up to 10 Gbps symmetrical</span>
                        </div>
                        <div className="w-full bg-blue-200 h-2.5 rounded-full">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                        <p className="text-xs text-blue-700 mt-1">Beginning deployment in select markets</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyan-50 rounded-xl p-5">
                    <h3 className="text-lg font-semibold mb-3 text-cyan-900">Advantages & Limitations</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="mt-1 text-green-600 flex-shrink-0">
                          <Check className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Widely Available</span>
                          <p className="text-sm text-gray-600">Available in most urban and suburban areas</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="mt-1 text-green-600 flex-shrink-0">
                          <Check className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Fast Download Speeds</span>
                          <p className="text-sm text-gray-600">Sufficient for most household needs</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="mt-1 text-red-500 flex-shrink-0">
                          <X className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Shared Bandwidth</span>
                          <p className="text-sm text-gray-600">Speed may decrease during peak usage times in your neighborhood</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="mt-1 text-red-500 flex-shrink-0">
                          <X className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Asymmetrical Speeds</span>
                          <p className="text-sm text-gray-600">Upload speeds typically much slower than download speeds</p>
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
              <CardTitle>Ideal Uses for Cable Internet</CardTitle>
              <CardDescription>
                Activities and households that benefit from cable internet's capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Tv className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">HD/4K Streaming</span>
                  <span className="text-xs mt-1 text-green-600">Excellent</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Gamepad className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Online Gaming</span>
                  <span className="text-xs mt-1 text-green-600">Very Good</span>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-yellow-600">
                    <Upload className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">File Uploads</span>
                  <span className="text-xs mt-1 text-yellow-600">Moderate</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Video Conferencing</span>
                  <span className="text-xs mt-1 text-green-600">Good</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Smart Home</span>
                  <span className="text-xs mt-1 text-green-600">Very Good</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Download className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Large Downloads</span>
                  <span className="text-xs mt-1 text-green-600">Very Good</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <RadioTower className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Multiple Users</span>
                  <span className="text-xs mt-1 text-green-600">Good</span>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-yellow-600">
                    <Bolt className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Remote Work</span>
                  <span className="text-xs mt-1 text-yellow-600">Good</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Best For These Households</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Average Families</h4>
                    <p className="text-sm text-gray-600">Households with moderate internet usage needs that enjoy streaming and online activities.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Gamers & Streamers</h4>
                    <p className="text-sm text-gray-600">Users who primarily download content and play online games but don't upload large files frequently.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Budget-Conscious Users</h4>
                    <p className="text-sm text-gray-600">Households looking for a good balance between performance and cost compared to fiber options.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Major Cable Internet Providers</CardTitle>
              <CardDescription>
                Leading companies offering cable internet service across the United States
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/xfinity.com" 
                    alt="Xfinity" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/xfinity-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">Xfinity</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 1.2 Gbps</p>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Starting at $50/mo</Badge>
                </div>
                
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/spectrum.com" 
                    alt="Spectrum" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/spectrum-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">Spectrum</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 940 Mbps</p>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Starting at $49.99/mo</Badge>
                </div>
                
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/cox.com" 
                    alt="Cox" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/cox-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">Cox</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 940 Mbps</p>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Starting at $49.99/mo</Badge>
                </div>
                
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/optimum.com" 
                    alt="Optimum" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/optimum-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">Optimum</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 940 Mbps</p>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Starting at $40/mo</Badge>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3">Cable Internet Availability</h3>
                <p className="text-gray-600 mb-4">
                  Cable internet is available to approximately 89% of U.S. households, making it one of the most widely accessible high-speed internet options in the country.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Coverage Highlights</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                      <li>Urban areas: 98% coverage</li>
                      <li>Suburban areas: 95% coverage</li>
                      <li>Rural areas: 61% coverage</li>
                      <li>Second most available internet type after DSL</li>
                      <li>Continues to expand and upgrade to DOCSIS 3.1/4.0</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Common Bundle Options</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                      <li>Internet + TV (most popular)</li>
                      <li>Internet + Phone</li>
                      <li>Internet + TV + Phone (triple play)</li>
                      <li>Internet + Mobile service (growing trend)</li>
                      <li>Internet + Streaming services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-6 text-white">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Ready to Get Connected with Cable Internet?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Find the best cable internet providers and plans available at your address.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/availability-checker">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-100">
                  Check Availability
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/internet/comparison">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
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

export default CableInternetPage;