import React from "react";
import { PhoneCall, MapPin, Check, X, Clock, Bolt, ArrowRight, Download, Upload, Zap, RadioTower, Laptop, Phone, Gamepad, Tv } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const DSLInternetPage: React.FC = () => {
  return (
    <main className="bg-gray-50 flex-grow container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-900">DSL Internet</h1>
              <p className="text-lg text-gray-700 max-w-3xl">
                Digital Subscriber Line (DSL) internet delivers broadband connections through existing telephone lines, offering widespread availability and reliable basic connectivity.
              </p>
            </div>
            <div className="flex-shrink-0 p-4 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
              <div className="text-center">
                <div className="font-semibold text-gray-700">Typical Speed Range</div>
                <div className="text-3xl font-bold text-cyan-700">10-100 Mbps</div>
                <div className="text-sm text-gray-500 mt-1">Download</div>
                
                <div className="mt-3 font-semibold text-gray-700">Average Upload</div>
                <div className="text-2xl font-bold text-cyan-600">1-10 Mbps</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="font-medium text-gray-500 text-sm mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Latency
              </div>
              <div className="text-xl font-semibold">20-50ms</div>
              <div className="text-xs text-gray-500">Average latency</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="font-medium text-gray-500 text-sm mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Availability
              </div>
              <div className="text-xl font-semibold">90%</div>
              <div className="text-xs text-gray-500">U.S. households</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="font-medium text-gray-500 text-sm mb-2 flex items-center">
                <Bolt className="h-4 w-4 mr-1" />
                Reliability
              </div>
              <div className="text-xl font-semibold">98.5%</div>
              <div className="text-xs text-gray-500">Uptime</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="font-medium text-gray-500 text-sm mb-2 flex items-center">
                <Tv className="h-4 w-4 mr-1" />
                Bundling
              </div>
              <div className="text-xl font-semibold">Medium</div>
              <div className="text-xs text-gray-500">Phone bundling</div>
            </div>
          </div>
          
          <div className="space-y-2 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">How DSL Internet Works</h2>
            <p className="text-gray-700">
              DSL (Digital Subscriber Line) technology transmits internet data over traditional copper telephone lines. Unlike dial-up, DSL uses frequencies that don't interfere with voice service, allowing simultaneous phone calls and internet use on the same line. The connection is established between your home and the provider's central office through a DSL modem.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">DSL Internet Basics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Download className="h-5 w-5 mr-2 text-cyan-600" />
                  Download Speeds
                </h3>
                <p className="text-gray-600 text-sm">
                  DSL typically offers download speeds between 10-100 Mbps, with most residential plans delivering around 25-50 Mbps. Performance depends heavily on distance from the provider's equipment and the quality of your telephone lines.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Upload className="h-5 w-5 mr-2 text-cyan-600" />
                  Upload Speeds
                </h3>
                <p className="text-gray-600 text-sm">
                  Upload speeds for DSL are typically much lower than download speeds, ranging from 1-10 Mbps. This asymmetric design prioritizes downloading content, which is the primary activity for most internet users.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-cyan-600" />
                  Distance Factors
                </h3>
                <p className="text-gray-600 text-sm">
                  DSL performance is significantly affected by the distance between your home and the provider's central office or DSLAM (DSL Access Multiplexer). Speeds decrease as distance increases, with optimal performance within 3 miles of the equipment.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Who DSL Internet Is Good For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100 p-5">
                <h3 className="text-lg font-semibold text-green-700 mb-3">Ideal For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Rural and small-town residents</span> - Often available where cable and fiber aren't
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Light internet users</span> - Sufficient for basic web browsing, email, and social media
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Budget-conscious households</span> - Generally more affordable than cable or fiber
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Single users or small households</span> - Adequate for 1-2 people with basic internet needs
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
                      <span className="font-medium">Households with multiple high-bandwidth users</span> - Struggles with several people streaming or downloading simultaneously
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Serious gamers</span> - May not provide the low latency and high speeds needed for competitive gaming
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Heavy video streamers</span> - May struggle with 4K streaming or multiple HD streams
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="text-gray-700">
                      <span className="font-medium">Remote workers with video requirements</span> - Limited upload speeds can affect video conferencing quality
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Top DSL Internet Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-100 px-4 py-5">
                  <CardTitle className="flex items-center gap-2">
                    <img src="/public/logos/earthlink-logo.svg" alt="EarthLink Logo" className="h-6" />
                    EarthLink
                  </CardTitle>
                  <CardDescription>Widest DSL Coverage</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-3">
                    <Badge className="bg-cyan-600">Up to 75 Mbps</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting price:</span>
                      <span className="font-medium">$49.95/mo</span>
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
                      <span>Available in all 50 states</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span>No data caps on any plans</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                      <Link href="/availability-checker">Check Availability</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-100 px-4 py-5">
                  <CardTitle className="flex items-center gap-2">
                    <PhoneCall className="h-5 w-5 mr-1" />
                    AT&T Internet
                  </CardTitle>
                  <CardDescription>Best Performance DSL</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-3">
                    <Badge className="bg-cyan-600">Up to 100 Mbps</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting price:</span>
                      <span className="font-medium">$55.00/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Data cap:</span>
                      <span className="font-medium">1 TB</span>
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
                      <span>Includes AT&T Internet Security</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span>Option to bundle with DirecTV</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                      <Link href="/availability-checker">Check Availability</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-100 px-4 py-5">
                  <CardTitle className="flex items-center gap-2">
                    <PhoneCall className="h-5 w-5 mr-1" />
                    CenturyLink
                  </CardTitle>
                  <CardDescription>Best Value DSL</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-3">
                    <Badge className="bg-cyan-600">Up to 100 Mbps</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting price:</span>
                      <span className="font-medium">$50.00/mo</span>
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
                      <span>Price for Life guarantee</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span>Free self-installation option</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                      <Link href="/availability-checker">Check Availability</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mb-10">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
              <CardTitle>DSL Internet Performance Factors</CardTitle>
              <CardDescription>Key elements that influence your DSL internet experience</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2 flex items-center">
                    <RadioTower className="h-5 w-5 mr-2 text-cyan-600" />
                    Distance from the Central Office
                  </h3>
                  <p className="text-gray-600 mb-3">
                    The single most important factor affecting DSL performance is the distance between your home and the provider's central office or DSLAM (DSL Access Multiplexer). DSL signal strength degrades over distance when traveling through copper telephone lines.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="font-medium mb-1">Less than 1 mile</h4>
                      <p className="text-sm text-gray-600">Excellent speeds, potentially 50-100 Mbps</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="font-medium mb-1">1-3 miles</h4>
                      <p className="text-sm text-gray-600">Good speeds, typically 25-50 Mbps</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="font-medium mb-1">3+ miles</h4>
                      <p className="text-sm text-gray-600">Significantly reduced speeds, often below 10 Mbps</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 flex items-center">
                    <Laptop className="h-5 w-5 mr-2 text-cyan-600" />
                    Line Quality and Home Wiring
                  </h3>
                  <p className="text-gray-600 mb-3">
                    The condition of your telephone lines and home wiring can significantly impact DSL performance. Old wiring, line interference, and splitters can all degrade your internet speeds and stability.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block">Direct Connection</span>
                        <span className="text-sm text-gray-600">Connect your DSL modem to the first phone jack in your home</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block">Use DSL Filters</span>
                        <span className="text-sm text-gray-600">Install filters on all phone devices to prevent interference</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-cyan-600" />
                    DSL Types and Technology
                  </h3>
                  <p className="text-gray-600 mb-3">
                    There are different types of DSL technology, with ADSL (Asymmetric DSL) being the most common for residential users. Each type offers different performance characteristics.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-1">DSL Technology Types</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Most residential connections use ADSL, which prioritizes download speeds over upload speeds. Newer technologies like VDSL offer better performance but limited availability.
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-700 pl-2">
                      <li>ADSL: Up to 24 Mbps down, 3.5 Mbps up</li>
                      <li>ADSL2+: Up to 24 Mbps down, 3.5 Mbps up</li>
                      <li>VDSL: Up to 100 Mbps down, 30 Mbps up</li>
                      <li>VDSL2: Up to 100 Mbps down, 50 Mbps up</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 flex items-center">
                    <Gamepad className="h-5 w-5 mr-2 text-cyan-600" />
                    Activities and Usage Suitability
                  </h3>
                  <p className="text-gray-600">
                    DSL internet performance varies significantly based on your specific installation, which affects its suitability for different online activities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <h4 className="font-medium mb-2">Streaming</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                        <li>HD streaming: Good</li>
                        <li>4K streaming: Fair to Poor</li>
                        <li>Multiple streams: Fair</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Gaming</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                        <li>Casual gaming: Good</li>
                        <li>Competitive gaming: Fair</li>
                        <li>Game downloads: Fair</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Work & Study</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                        <li>Video conferencing: Fair</li>
                        <li>File downloads: Good</li>
                        <li>File uploads: Poor</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Smart Home</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                        <li>IoT devices: Good</li>
                        <li>Security cameras: Fair</li>
                        <li>Multiple devices: Fair</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-10">
            <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-100">
              <CardTitle>DSL Internet Coverage & Availability</CardTitle>
              <CardDescription>Understanding where DSL internet is available and what to expect</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-gray-700">
                  DSL is one of the most widely available internet technologies in the United States, reaching approximately 90% of households. This extensive coverage is due to its use of existing telephone infrastructure, which extends throughout urban, suburban, and rural areas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Coverage Highlights</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                      <li>Urban areas: 95% coverage</li>
                      <li>Suburban areas: 90% coverage</li>
                      <li>Rural areas: 70% coverage</li>
                      <li>Most widely available internet technology</li>
                      <li>Declining in popularity as fiber expands</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Common Bundle Options</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 pl-2">
                      <li>Internet + Home Phone (traditional)</li>
                      <li>Internet + Satellite TV (partnership)</li>
                      <li>Internet + Streaming services</li>
                      <li>Internet only (increasingly common)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-6 text-white">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Ready to Explore DSL Internet Options?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Find the best DSL internet providers available at your address and compare plans, pricing, and special offers.
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

export default DSLInternetPage;