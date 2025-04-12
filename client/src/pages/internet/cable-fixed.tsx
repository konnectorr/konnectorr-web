import React from "react";
import { Tv, MapPin, Check, X, Clock, Bolt, ArrowRight, Download, Upload, Zap, RadioTower, Laptop, Phone, Gamepad } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const CableInternetPage: React.FC = () => {
  return (
    <main className="bg-gray-50 flex-grow container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Cable Internet</h1>
              <p className="text-lg text-gray-700 max-w-3xl">
                High-speed internet delivered through the same coaxial cable lines used for cable television, offering widespread availability and reliable performance.
              </p>
            </div>
            <div className="flex-shrink-0 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <div className="text-center">
                <div className="font-semibold text-gray-700">Typical Speed Range</div>
                <div className="text-3xl font-bold text-blue-700">100-1200 Mbps</div>
                <div className="text-sm text-gray-500 mt-1">Download</div>
                
                <div className="mt-3 font-semibold text-gray-700">Average Upload</div>
                <div className="text-2xl font-bold text-blue-600">10-50 Mbps</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="font-medium text-gray-500 text-sm mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Latency
              </div>
              <div className="text-xl font-semibold">15-35ms</div>
              <div className="text-xs text-gray-500">Low latency</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="font-medium text-gray-500 text-sm mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Availability
              </div>
              <div className="text-xl font-semibold">95%</div>
              <div className="text-xs text-gray-500">U.S. households</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="font-medium text-gray-500 text-sm mb-2 flex items-center">
                <Bolt className="h-4 w-4 mr-1" />
                Reliability
              </div>
              <div className="text-xl font-semibold">99.5%</div>
              <div className="text-xs text-gray-500">Uptime</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="font-medium text-gray-500 text-sm mb-2 flex items-center">
                <Tv className="h-4 w-4 mr-1" />
                Bundling
              </div>
              <div className="text-xl font-semibold">High</div>
              <div className="text-xs text-gray-500">TV/Phone options</div>
            </div>
          </div>
          
          <div className="space-y-2 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">How Cable Internet Works</h2>
            <p className="text-gray-700">
              Cable internet uses the same coaxial cables that deliver cable TV to provide internet service to homes and businesses. The technology leverages existing infrastructure to deliver high-speed internet access through a cable modem that connects to your home network.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Cable Internet Basics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Download className="h-5 w-5 mr-2 text-blue-600" />
                  Download Speeds
                </h3>
                <p className="text-gray-600 text-sm">
                  Cable typically offers download speeds between 100-1200 Mbps, with most residential plans delivering around 300 Mbps. Premium plans can reach up to 1.2 Gbps in areas with upgraded infrastructure.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Upload className="h-5 w-5 mr-2 text-blue-600" />
                  Upload Speeds
                </h3>
                <p className="text-gray-600 text-sm">
                  Upload speeds are usually much lower than download speeds, ranging from 10-50 Mbps. This asymmetric nature is one of the main limitations of cable internet compared to fiber.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-blue-600" />
                  Network Congestion
                </h3>
                <p className="text-gray-600 text-sm">
                  Cable internet uses shared neighborhood infrastructure, which means speeds can slow during peak usage hours (typically evenings). Providers address this by implementing bandwidth management and network upgrades.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Who Cable Internet Is Good For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100 p-5">
                <h3 className="text-lg font-semibold text-green-700 mb-3">Ideal For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Households with multiple users</span> - Enough bandwidth for several people to stream, browse, and game simultaneously
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Online gamers</span> - Low latency and consistent speeds suitable for competitive gaming
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Streamers and content consumers</span> - Fast enough for 4K streaming and quick content downloads
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Value-oriented customers</span> - Generally more affordable than fiber while still offering good performance
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-100 p-5">
                <h3 className="text-lg font-semibold text-red-700 mb-3">Not Ideal For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Content creators and uploaders</span> - Limited upload speeds can hinder large file uploads and livestreaming
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Work-from-home professionals</span> - Video conferencing and file sharing may be limited by upload speeds
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Very remote areas</span> - Service availability diminishes significantly in rural locations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Users requiring symmetrical speeds</span> - The asymmetrical nature of cable limits upload-heavy applications
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Top Cable Internet Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-5">
                  <CardTitle className="flex items-center gap-2">
                    <img src="/public/logos/xfinity-logo.svg" alt="Xfinity Logo" className="h-6" />
                    Xfinity
                  </CardTitle>
                  <CardDescription>Fastest Cable Provider</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-3">
                    <Badge className="bg-blue-600">Up to 1.2 Gbps</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting price:</span>
                      <span className="font-medium">$19.99/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Data cap:</span>
                      <span className="font-medium">1.2 TB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Contract:</span>
                      <span className="font-medium">Optional</span>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="text-sm space-y-2">
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span>Widest availability of any cable provider</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span>Free access to millions of WiFi hotspots</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href="/availability-checker">Check Availability</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-100 px-4 py-5">
                  <CardTitle className="flex items-center gap-2">
                    <img src="/public/logos/spectrum-logo.svg" alt="Spectrum Logo" className="h-6" />
                    Spectrum
                  </CardTitle>
                  <CardDescription>No Data Caps</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-3">
                    <Badge className="bg-blue-600">Up to 1 Gbps</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting price:</span>
                      <span className="font-medium">$49.99/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Data cap:</span>
                      <span className="font-medium">Unlimited</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Contract:</span>
                      <span className="font-medium">None</span>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="text-sm space-y-2">
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span>Free modem and no data caps</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span>Contract buyout available up to $500</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href="/availability-checker">Check Availability</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-100 px-4 py-5">
                  <CardTitle className="flex items-center gap-2">
                    <img src="/public/logos/optimum-logo.svg" alt="Optimum Logo" className="h-6" />
                    Optimum
                  </CardTitle>
                  <CardDescription>Best Value Provider</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-3">
                    <Badge className="bg-blue-600">Up to 940 Mbps</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting price:</span>
                      <span className="font-medium">$40.00/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Data cap:</span>
                      <span className="font-medium">Unlimited</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Contract:</span>
                      <span className="font-medium">None</span>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="text-sm space-y-2">
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span>Price for Life guarantee on some plans</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span>Advanced security features included</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href="/availability-checker">Check Availability</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mb-10">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
              <CardTitle>Cable Internet Performance Factors</CardTitle>
              <CardDescription>Key elements that influence your cable internet experience</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2 flex items-center">
                    <RadioTower className="h-5 w-5 mr-2 text-blue-600" />
                    Network Infrastructure and DOCSIS Technology
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Cable internet performance largely depends on the DOCSIS (Data Over Cable Service Interface Specification) version deployed in your area. The newest standards, DOCSIS 3.1 and the emerging DOCSIS 4.0, offer dramatically improved speeds and reliability.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="font-medium mb-1">DOCSIS 3.0</h4>
                      <p className="text-sm text-gray-600">Supports up to 1Gbps download and 200Mbps upload</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="font-medium mb-1">DOCSIS 3.1</h4>
                      <p className="text-sm text-gray-600">Supports up to 10Gbps download and 1-2Gbps upload</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="font-medium mb-1">DOCSIS 4.0</h4>
                      <p className="text-sm text-gray-600">Will support up to 10Gbps symmetrical speeds</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 flex items-center">
                    <Laptop className="h-5 w-5 mr-2 text-blue-600" />
                    Home Network Equipment
                  </h3>
                  <p className="text-gray-600 mb-3">
                    The quality of your modem, router, and internal wiring significantly impacts your actual internet experience. Older or lower-quality equipment can create bottlenecks that prevent you from experiencing the full speed of your connection.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block">DOCSIS 3.1 Modem</span>
                        <span className="text-sm text-gray-600">Essential for plans over 400Mbps</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block">Wi-Fi 6 Router</span>
                        <span className="text-sm text-gray-600">Recommended for optimal wireless performance</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-blue-600" />
                    Neighborhood Congestion
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Cable internet uses shared infrastructure in your neighborhood. During peak usage times (typically 7-11PM), speeds can decrease as more neighbors use the internet simultaneously. Providers mitigate this through network management and upgrades.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-1">Peak Hours Impact</h4>
                    <p className="text-sm text-gray-700">
                      During peak hours, you might experience up to a 20-30% reduction in speed. Higher-tier plans are often less affected by congestion due to bandwidth prioritization.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 flex items-center">
                    <Gamepad className="h-5 w-5 mr-2 text-blue-600" />
                    Activities and Usage Patterns
                  </h3>
                  <p className="text-gray-600">
                    Different online activities have different bandwidth and latency requirements. Cable internet is well-suited for the majority of online activities, with some limitations for upload-intensive tasks.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <h4 className="font-medium mb-2">Streaming</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                        <li>HD streaming: Excellent</li>
                        <li>4K streaming: Very good</li>
                        <li>Multiple streams: Good</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Gaming</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                        <li>Casual gaming: Excellent</li>
                        <li>Competitive gaming: Very good</li>
                        <li>Game downloads: Very good</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Work & Study</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                        <li>Video conferencing: Good</li>
                        <li>File downloads: Very good</li>
                        <li>File uploads: Fair</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Smart Home</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                        <li>IoT devices: Excellent</li>
                        <li>Security cameras: Good</li>
                        <li>Multiple devices: Very good</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-10">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardTitle>Cable Internet Coverage & Availability</CardTitle>
              <CardDescription>Understanding where cable internet is available and what to expect</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-gray-700">
                  Cable internet is one of the most widely available broadband options in the United States, with access available to approximately 95% of urban and suburban households. Rural coverage is more limited but still reaches about 61% of rural households, making it the second most available technology after DSL.
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
                Find the best cable internet providers available at your address and compare plans, pricing, and special offers.
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
      </div>
    </main>
  );
};

export default CableInternetPage;