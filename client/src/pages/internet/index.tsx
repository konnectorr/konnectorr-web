import React from "react";
import { Zap, Tv, PhoneCall, Satellite, Globe, ArrowRight, Cloud, MapPin, Wifi, BarChart2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

// Components
import { PageLayout } from "@/components/layout/page-layout";

const InternetTypesPage: React.FC = () => {
  return (
    <PageLayout>
      <main className="bg-gray-50 flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Internet Connection Types</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore different internet technologies to find the best option for your home or business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Fiber Internet Card */}
            <Card className="group overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-indigo-600" />
                  Fiber Internet
                </CardTitle>
                <CardDescription>
                  The fastest and most reliable internet technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Top Speed</span>
                    <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Up to 5 Gbps</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Availability</span>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">32% of US</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Ideal For</span>
                    <span className="text-sm text-gray-600">Heavy streaming, gaming, large households</span>
                  </div>
                  
                  <div className="mt-4">
                    <Link href="/internet/fiber">
                      <Button className="w-full group-hover:bg-indigo-600">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Cable Internet Card */}
            <Card className="group overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tv className="h-5 w-5 text-blue-600" />
                  Cable Internet
                </CardTitle>
                <CardDescription>
                  Fast speeds through the same lines as cable TV
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Top Speed</span>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Up to 1.2 Gbps</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Availability</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">89% of US</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Ideal For</span>
                    <span className="text-sm text-gray-600">Streaming, gaming, multiple devices</span>
                  </div>
                  
                  <div className="mt-4">
                    <Link href="/internet/cable">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* DSL Internet Card */}
            <Card className="group overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PhoneCall className="h-5 w-5 text-cyan-600" />
                  DSL Internet
                </CardTitle>
                <CardDescription>
                  Reliable connectivity through phone lines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Top Speed</span>
                    <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">Up to 100 Mbps</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Availability</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">92% of US</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Ideal For</span>
                    <span className="text-sm text-gray-600">Browsing, email, light streaming</span>
                  </div>
                  
                  <div className="mt-4">
                    <Link href="/internet/dsl">
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Satellite Internet Card */}
            <Card className="group overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Satellite className="h-5 w-5 text-indigo-600" />
                  Satellite Internet
                </CardTitle>
                <CardDescription>
                  Internet available virtually anywhere
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Top Speed</span>
                    <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Up to 150 Mbps</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Availability</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">99% of US</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Ideal For</span>
                    <span className="text-sm text-gray-600">Rural areas, remote locations</span>
                  </div>
                  
                  <div className="mt-4">
                    <Link href="/internet/satellite">
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Comparison Section */}
          <div className="mb-12">
            <Card className="border-2 border-dashed border-blue-300 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-blue-600" />
                  Internet Connection Comparison
                </CardTitle>
                <CardDescription>
                  See how different internet technologies stack up against each other
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Need help deciding which internet type is right for you? Our detailed comparison breaks down the pros and cons of each option with side-by-side speed comparisons, reliability metrics, and real-world usage examples.
                </p>
                <Link href="/internet/comparison">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    View Detailed Comparison
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          {/* eSIM Section */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold mb-2">Travel Abroad? Stay Connected with eSIM</h2>
                    <p className="text-purple-100">
                      Instantly activate a local data plan in 190+ countries without switching physical SIM cards.
                    </p>
                    <div className="mt-4">
                      <Link href="/internet/esim">
                        <Button variant="outline" className="border-white text-white hover:bg-purple-700">
                          Learn About eSIM
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full md:w-auto">
                    <div className="flex items-center gap-3">
                      <Globe className="h-8 w-8 text-purple-200" />
                      <div>
                        <div className="text-xl font-semibold">190+</div>
                        <div className="text-xs text-purple-200">Countries</div>
                      </div>
                    </div>
                    <Separator className="my-3 bg-purple-300/30" />
                    <div className="flex items-center gap-3">
                      <Cloud className="h-8 w-8 text-purple-200" />
                      <div>
                        <div className="text-xl font-semibold">Instant</div>
                        <div className="text-xs text-purple-200">Activation</div>
                      </div>
                    </div>
                    <Separator className="my-3 bg-purple-300/30" />
                    <div className="flex items-center gap-3">
                      <Wifi className="h-8 w-8 text-purple-200" />
                      <div>
                        <div className="text-xl font-semibold">5G/4G</div>
                        <div className="text-xs text-purple-200">Networks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Weather Impact Section */}
          <div className="mb-10">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-blue-600" />
                  How Weather Affects Your Internet
                </CardTitle>
                <CardDescription>
                  Check if your current or potential internet service is vulnerable to weather conditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Different internet technologies have varying levels of sensitivity to weather conditions. Use our weather impact tool to see how rain, snow, wind, and other environmental factors might affect your connection.
                </p>
                <Link href="/weather-impact">
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    Check Weather Impact
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          {/* Location Checker */}
          <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-xl p-8 text-white">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Find The Best Internet Options In Your Area</h2>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Enter your address to see which internet services and providers are available at your location.
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/availability-checker">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <MapPin className="mr-2 h-4 w-4" />
                  Check Availability
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default InternetTypesPage;