import React from "react";
import { PhoneCall, MapPin, Check, X, Clock, Bolt, ArrowRight, Download, Upload, Zap, RadioTower, Laptop, Phone, Gamepad, Tv } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

// Components
import { PageLayout } from "@/components/layout/page-layout";

const DSLInternetPage: React.FC = () => {
  return (
    <PageLayout>
      <main className="bg-gray-50 flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-900">DSL Internet</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Digital Subscriber Line (DSL) delivers internet service through standard telephone lines, offering a reliable connection for everyday activities.
                </p>
              </div>
              <div className="flex-shrink-0 bg-gradient-to-r from-cyan-500 to-teal-500 p-6 rounded-xl text-white text-center">
                <div className="text-3xl font-bold mb-1">100 Mbps</div>
                <div className="text-sm opacity-90">Top Speed</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-cyan-500 mb-2">
                  <PhoneCall className="h-5 w-5" />
                  <span className="font-semibold">Widespread Coverage</span>
                </div>
                <p className="text-gray-600 text-sm">Available to over 92% of US households, offering a consistent connection option in many areas.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-teal-500 mb-2">
                  <Download className="h-5 w-5" />
                  <span className="font-semibold">Dedicated Line</span>
                </div>
                <p className="text-gray-600 text-sm">Unlike cable, DSL provides you with a dedicated connection not shared with neighbors.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-cyan-500 mb-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Affordable Option</span>
                </div>
                <p className="text-gray-600 text-sm">Generally less expensive than cable or fiber, with plans starting around $30-45 per month.</p>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
              <CardTitle>How DSL Internet Works</CardTitle>
              <CardDescription className="text-cyan-100">
                Understanding the technology that powers DSL connections
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">DSL Technology Explained</h3>
                  <p className="text-gray-600 mb-4">
                    DSL internet uses existing telephone lines to transmit digital data. Unlike dial-up, DSL operates at a different frequency than voice services, allowing you to use your telephone and internet simultaneously. The connection is established through a DSL modem that connects to your telephone jack.
                  </p>
                  
                  <h4 className="font-semibold mt-6 mb-2">Key Components:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-cyan-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Telephone Lines</span>
                        <p className="text-sm text-gray-600">Standard copper telephone wires carry both voice and internet data</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-cyan-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">DSL Modem</span>
                        <p className="text-sm text-gray-600">Converts the digital signals from your provider to a format your devices can use</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-cyan-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">DSLAM</span>
                        <p className="text-sm text-gray-600">Digital Subscriber Line Access Multiplexer - equipment at the provider's facility that manages connections</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-cyan-600 flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Splitter/Filter</span>
                        <p className="text-sm text-gray-600">Separates voice and data signals to prevent interference</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="bg-cyan-50 rounded-xl p-5 mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-cyan-900">DSL Types & Speeds</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">ADSL</span>
                          <span className="text-sm font-medium">Up to 24 Mbps</span>
                        </div>
                        <div className="w-full bg-cyan-200 h-2.5 rounded-full">
                          <div className="bg-cyan-600 h-2.5 rounded-full" style={{ width: "24%" }}></div>
                        </div>
                        <p className="text-xs text-cyan-700 mt-1">Asymmetric - faster download than upload speeds</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">VDSL</span>
                          <span className="text-sm font-medium">Up to 100 Mbps</span>
                        </div>
                        <div className="w-full bg-cyan-200 h-2.5 rounded-full">
                          <div className="bg-cyan-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <p className="text-xs text-cyan-700 mt-1">Very-high-bit-rate DSL, faster but shorter distance</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">SDSL</span>
                          <span className="text-sm font-medium">Up to 20 Mbps</span>
                        </div>
                        <div className="w-full bg-cyan-200 h-2.5 rounded-full">
                          <div className="bg-cyan-600 h-2.5 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                        <p className="text-xs text-cyan-700 mt-1">Symmetric - equal download and upload speeds</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-50 rounded-xl p-5">
                    <h3 className="text-lg font-semibold mb-3 text-teal-900">Distance & Speed Relationship</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      DSL performance is directly affected by your distance from the provider's nearest central office or DSLAM. The further away you are, the slower your speeds will be.
                    </p>
                    <div className="relative h-32">
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-teal-600 to-gray-300"></div>
                      <div className="absolute left-2 top-0 right-0 flex flex-col justify-between h-full">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                          <div className="ml-2">
                            <span className="text-sm font-medium">0-5,000 ft</span>
                            <p className="text-xs text-gray-500">50-100 Mbps possible</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                          <div className="ml-2">
                            <span className="text-sm font-medium">5,000-10,000 ft</span>
                            <p className="text-xs text-gray-500">25-50 Mbps typical</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                          <div className="ml-2">
                            <span className="text-sm font-medium">10,000-15,000 ft</span>
                            <p className="text-xs text-gray-500">15-25 Mbps typical</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <div className="ml-2">
                            <span className="text-sm font-medium">15,000+ ft</span>
                            <p className="text-xs text-gray-500">1-15 Mbps or unavailable</p>
                          </div>
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
              <CardTitle>Ideal Uses for DSL Internet</CardTitle>
              <CardDescription>
                Activities and households that benefit from DSL's capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Download className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Web Browsing</span>
                  <span className="text-xs mt-1 text-green-600">Excellent</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Tv className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">HD Streaming</span>
                  <span className="text-xs mt-1 text-green-600">Good</span>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-yellow-600">
                    <Tv className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">4K Streaming</span>
                  <span className="text-xs mt-1 text-yellow-600">Fair</span>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-yellow-600">
                    <Gamepad className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Online Gaming</span>
                  <span className="text-xs mt-1 text-yellow-600">Fair</span>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-yellow-600">
                    <Upload className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">File Uploads</span>
                  <span className="text-xs mt-1 text-yellow-600">Fair</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Video Calls</span>
                  <span className="text-xs mt-1 text-green-600">Good</span>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="mb-2 text-green-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Smart Home</span>
                  <span className="text-xs mt-1 text-green-600">Good</span>
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
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-900 mb-2">Light Users</h4>
                    <p className="text-sm text-gray-600">Individuals or couples who primarily use the internet for browsing, email, and occasional streaming.</p>
                  </div>
                  
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-900 mb-2">Rural Residents</h4>
                    <p className="text-sm text-gray-600">People in areas where cable or fiber isn't available but telephone service is established.</p>
                  </div>
                  
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-900 mb-2">Budget-Conscious Users</h4>
                    <p className="text-sm text-gray-600">Those looking for reliable internet at lower prices than cable or fiber options.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Major DSL Internet Providers</CardTitle>
              <CardDescription>
                Leading companies offering DSL internet service across the United States
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/att.com" 
                    alt="AT&T" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/att-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">AT&T</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 100 Mbps</p>
                  <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">Starting at $55/mo</Badge>
                </div>
                
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/centurylink.com" 
                    alt="CenturyLink" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/centurylink-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">CenturyLink</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 100 Mbps</p>
                  <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">Starting at $50/mo</Badge>
                </div>
                
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/earthlink.net" 
                    alt="EarthLink" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/earthlink-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">EarthLink</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 75 Mbps</p>
                  <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">Starting at $49.95/mo</Badge>
                </div>
                
                <div className="border rounded-lg p-5 flex flex-col items-center text-center">
                  <img 
                    src="https://logo.clearbit.com/windstream.com" 
                    alt="Windstream" 
                    className="h-16 w-16 mb-3" 
                    onError={(e) => { e.currentTarget.src = "/logos/windstream-logo.svg" }}
                  />
                  <h3 className="font-semibold mb-1">Windstream</h3>
                  <p className="text-sm text-gray-500 mb-3">Speeds up to 100 Mbps</p>
                  <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">Starting at $37/mo</Badge>
                </div>
              </div>
              
              <div className="mt-8 bg-cyan-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3">DSL Internet Availability</h3>
                <p className="text-gray-600 mb-4">
                  DSL internet is available to approximately 92% of U.S. households, making it the most widely accessible broadband internet option in the country.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Coverage Highlights</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                      <li>Urban areas: 98% coverage</li>
                      <li>Suburban areas: 96% coverage</li>
                      <li>Rural areas: 73% coverage</li>
                      <li>Most widely available broadband technology</li>
                      <li>Often available where cable isn't</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">DSL Technology Evolution</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                      <li>ADSL: First widely deployed (1990s)</li>
                      <li>ADSL2+: Improved speeds up to 24 Mbps</li>
                      <li>VDSL: Speeds up to 100 Mbps (limited range)</li>
                      <li>VDSL2: Further improvements</li>
                      <li>G.fast: Experimental DSL with fiber-like speeds</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-lg p-6 text-white">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Find Reliable DSL Internet In Your Area</h2>
              <p className="text-cyan-100 max-w-2xl mx-auto">
                Check availability and compare DSL providers and plans at your address.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/availability-checker">
                <Button size="lg" className="bg-white text-cyan-700 hover:bg-cyan-100">
                  Check Availability
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/internet/comparison">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-cyan-700">
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

export default DSLInternetPage;