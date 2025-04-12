import React from "react";
import { Satellite, MapPin, Check, X, Clock, Bolt, ArrowRight, Download, Upload, Globe, Cloud, Zap, RadioTower, Laptop, Phone, Gamepad, Tv } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

// Satellite Illustration Component
const SatelliteIllustration = () => (
  <div className="bg-indigo-50 p-5 rounded-xl relative h-64 overflow-hidden">
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
        <Satellite className="h-10 w-10 text-indigo-600" />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-500 to-blue-500/0 rounded-b-xl"></div>
    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-50"></div>
    <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
      <div className="w-1 h-32 bg-indigo-300 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-indigo-400 rounded-full"></div>
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-indigo-400 rounded-full"></div>
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-indigo-400 rounded-full"></div>
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-indigo-400 rounded-full"></div>
      </div>
    </div>
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg"></div>
  </div>
);

const SatelliteInternetPage: React.FC = () => {
  return (
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-medium text-indigo-600 text-sm mb-2 flex items-center">
                <Download className="h-4 w-4 mr-1" />
                Download
              </div>
              <div className="text-xl font-semibold">25-150 Mbps</div>
              <div className="text-xs text-gray-500">Varies by provider</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-medium text-indigo-600 text-sm mb-2 flex items-center">
                <Upload className="h-4 w-4 mr-1" />
                Upload
              </div>
              <div className="text-xl font-semibold">3-10 Mbps</div>
              <div className="text-xs text-gray-500">Limited capacity</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-medium text-indigo-600 text-sm mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Latency
              </div>
              <div className="text-xl font-semibold">500-800ms</div>
              <div className="text-xs text-gray-500">Traditional satellites</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-medium text-indigo-600 text-sm mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Coverage
              </div>
              <div className="text-xl font-semibold">99%</div>
              <div className="text-xs text-gray-500">US coverage</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 text-indigo-900">Key Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Globe className="h-5 w-5 text-indigo-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-indigo-600 mb-2">
                      <span className="font-semibold">Available Almost Everywhere</span>
                    </div>
                    <p className="text-gray-600 text-sm">Provides internet service to remote locations where cable, fiber, and DSL aren't available.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Bolt className="h-5 w-5 text-indigo-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-indigo-600 mb-2">
                      <span className="font-semibold">Easy Installation</span>
                    </div>
                    <p className="text-gray-600 text-sm">No need for local infrastructure - just a dish and clear view of the sky.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 text-indigo-900">Limitations</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-red-600 mb-2">
                      <span className="font-semibold">High Latency</span>
                    </div>
                    <p className="text-gray-600 text-sm">Signal travel to and from satellites results in higher lag, affecting gaming and video calls.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <Cloud className="h-5 w-5 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-purple-500 mb-2">
                      <span className="font-semibold">Weather Sensitive</span>
                    </div>
                    <p className="text-gray-600 text-sm">Heavy rain, snow, or dense cloud cover can temporarily affect connection quality and speeds.</p>
                  </div>
                </div>
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
                    Satellite internet works by transmitting signals between three points:
                  </p>
                  <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                    <li>Your satellite dish and modem at home</li>
                    <li>Satellites in orbit (geostationary or low-Earth orbit)</li>
                    <li>Ground stations (also called "gateways") operated by the provider</li>
                  </ol>
                  <p className="text-gray-600 mt-4">
                    When you request information online, your modem sends the request to your satellite dish, which beams it to the orbiting satellite. The satellite then sends the request to a ground station connected to the internet backbone. The data returns via the same path in reverse.
                  </p>
                </div>
                <div>
                  <SatelliteIllustration />
                </div>
              </div>
              <Separator className="my-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Traditional Satellites</h3>
                  <div className="bg-indigo-50 rounded-lg p-4 mb-3">
                    <Badge className="bg-indigo-600 mb-2">Geostationary Orbit</Badge>
                    <p className="text-sm text-gray-700">Traditional satellite providers like HughesNet and Viasat use satellites in geostationary orbit, about 22,000 miles above Earth. These satellites remain fixed above a specific location on Earth.</p>
                  </div>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span>Established technology with widespread availability</span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-4 w-4 text-red-600 mr-2 mt-0.5" />
                      <span>High latency (500-800ms) due to long distance</span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-4 w-4 text-red-600 mr-2 mt-0.5" />
                      <span>More susceptible to weather interference</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Low-Earth Orbit (LEO) Satellites</h3>
                  <div className="bg-purple-50 rounded-lg p-4 mb-3">
                    <Badge className="bg-purple-600 mb-2">New Technology</Badge>
                    <p className="text-sm text-gray-700">Newer providers like Starlink use low-Earth orbit satellites, which orbit just 340-1,200 miles above Earth. These systems use constellations of many satellites working together.</p>
                  </div>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span>Lower latency (20-40ms) comparable to wired connections</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span>Higher speeds (up to 150+ Mbps) with better reliability</span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-4 w-4 text-red-600 mr-2 mt-0.5" />
                      <span>Limited availability as systems are still being deployed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-indigo-900">Top Satellite Internet Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-indigo-100">
                <CardHeader className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <CardTitle className="flex items-center">
                    <Satellite className="mr-2 h-5 w-5" />
                    Starlink
                  </CardTitle>
                  <CardDescription className="text-indigo-100">
                    Best Performance
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <Badge className="bg-indigo-600 mb-1">Low Earth Orbit</Badge>
                      <div className="text-sm text-gray-500">SpaceX's satellite constellation</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Download speeds:</span>
                        <span className="font-medium">50-150+ Mbps</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Upload speeds:</span>
                        <span className="font-medium">5-10 Mbps</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Latency:</span>
                        <span className="font-medium">20-40ms</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Data cap:</span>
                        <span className="font-medium">Unlimited</span>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Low latency suitable for gaming and video calls</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">No hard data caps</span>
                      </div>
                    </div>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-100">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <CardTitle className="flex items-center">
                    <img src="/public/logos/viasat-logo.svg" alt="Viasat" className="mr-2 h-5 w-5 bg-white rounded-full p-0.5" />
                    Viasat
                  </CardTitle>
                  <CardDescription className="text-purple-100">
                    Best for High Data Usage
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <Badge className="bg-purple-600 mb-1">Geostationary Orbit</Badge>
                      <div className="text-sm text-gray-500">High-capacity satellite fleet</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Download speeds:</span>
                        <span className="font-medium">12-100 Mbps</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Upload speeds:</span>
                        <span className="font-medium">3-5 Mbps</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Latency:</span>
                        <span className="font-medium">600-800ms</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Data cap:</span>
                        <span className="font-medium">40-150 GB</span>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Higher data caps than HughesNet</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Unlimited data during off-peak hours (3am-6am)</span>
                      </div>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardTitle className="flex items-center">
                    <img src="/public/logos/hughesnet-logo.svg" alt="HughesNet" className="mr-2 h-5 w-5 bg-white rounded-full p-0.5" />
                    HughesNet
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Most Affordable
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <Badge className="bg-blue-600 mb-1">Geostationary Orbit</Badge>
                      <div className="text-sm text-gray-500">America's longest-running provider</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Download speeds:</span>
                        <span className="font-medium">25 Mbps</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Upload speeds:</span>
                        <span className="font-medium">3 Mbps</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Latency:</span>
                        <span className="font-medium">600-800ms</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Data cap:</span>
                        <span className="font-medium">15-75 GB</span>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Lower monthly costs than competitors</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Bonus Zone: 50GB extra data (2am-8am)</span>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mb-10">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
              <CardTitle>Ideal Use Cases for Satellite Internet</CardTitle>
              <CardDescription>Who benefits most from satellite connections</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-lg mb-4 flex items-center text-indigo-800">
                    <Check className="h-5 w-5 mr-2 text-green-600" />
                    Perfect For:
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Rural Residents</h4>
                      <p className="text-sm text-gray-600">People living in remote areas where cable, fiber, and DSL are unavailable or prohibitively expensive to install.</p>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                      <h4 className="font-medium mb-2">RV & Remote Workers</h4>
                      <p className="text-sm text-gray-600">Digital nomads and travelers who need internet access in remote locations. (Portable/mobile satellite options may be required.)</p>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Basic Internet Users</h4>
                      <p className="text-sm text-gray-600">Users who primarily need internet for web browsing, email, social media, and occasional standard-definition streaming.</p>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Emergency Backup</h4>
                      <p className="text-sm text-gray-600">Homeowners or businesses who need a backup connection if primary internet service is disrupted by natural disasters or outages.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-4 flex items-center text-red-800">
                    <X className="h-5 w-5 mr-2 text-red-600" />
                    Not Ideal For:
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Competitive Gamers</h4>
                      <p className="text-sm text-gray-600">Traditional satellite's high latency (except Starlink) makes it unsuitable for reaction-based multiplayer games where milliseconds matter.</p>
                    </div>
                    <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Heavy Video Conference Users</h4>
                      <p className="text-sm text-gray-600">The latency of traditional satellite can create awkward pauses in video calls. Upload limitations may also affect video quality.</p>
                    </div>
                    <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Large Households</h4>
                      <p className="text-sm text-gray-600">Families with many simultaneous users may struggle with data caps and bandwidth limitations, especially if multiple people stream video.</p>
                    </div>
                    <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                      <h4 className="font-medium mb-2">4K Streaming Enthusiasts</h4>
                      <p className="text-sm text-gray-600">Data caps on traditional satellite plans make regular 4K streaming impractical (consuming 7+ GB/hour). Starlink may be an exception.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Connect Anywhere with Satellite Internet</h2>
              <p className="text-indigo-100 max-w-2xl mx-auto">
                Find out which satellite internet providers serve your area and compare plans, pricing, and availability.
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
      </div>
    </main>
  );
};

export default SatelliteInternetPage;