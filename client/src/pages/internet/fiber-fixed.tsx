import React from "react";
import { Zap, MapPin, Check, X, Clock, Bolt, ArrowRight, Download, Upload, Tv, RadioTower, Laptop, Phone, Gamepad } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const FiberInternetPage: React.FC = () => {
  return (
    <main className="bg-gray-50 flex-grow container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Fiber Internet</h1>
              <p className="text-lg text-muted-foreground">
                The fastest, most reliable internet technology available today.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="p-4 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full h-24 w-24 flex items-center justify-center">
                <Zap className="h-14 w-14 text-white" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="flex flex-col items-center p-4 bg-white shadow-sm rounded-lg">
              <Download className="h-8 w-8 text-indigo-600 mb-2" />
              <p className="font-bold text-2xl">Up to 10 Gbps</p>
              <p className="text-sm text-muted-foreground text-center">Download Speed</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white shadow-sm rounded-lg">
              <Upload className="h-8 w-8 text-indigo-600 mb-2" />
              <p className="font-bold text-2xl">Up to 10 Gbps</p>
              <p className="text-sm text-muted-foreground text-center">Upload Speed</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white shadow-sm rounded-lg">
              <Tv className="h-8 w-8 text-indigo-600 mb-2" />
              <p className="font-bold text-2xl">Unlimited</p>
              <p className="text-sm text-muted-foreground text-center">Data Allowance</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white shadow-sm rounded-lg">
              <RadioTower className="h-8 w-8 text-indigo-600 mb-2" />
              <p className="font-bold text-2xl">99.9%</p>
              <p className="text-sm text-muted-foreground text-center">Uptime Reliability</p>
            </div>
          </div>
        </div>
        
        <div className="mb-12 bg-white p-6 md:p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">What is Fiber Internet?</h2>
          <p className="mb-4">
            Fiber internet is a broadband connection that uses fiber-optic cables made of thin strands of glass or plastic to transmit data using pulses of light. This technology allows for much faster speeds, lower latency, and higher bandwidth compared to traditional copper-based internet connections like DSL or cable.
          </p>
          <p className="mb-4">
            Unlike traditional copper cables that use electrical signals, fiber-optic cables transmit data using light, which allows them to carry more data over longer distances without degradation in quality. This makes fiber internet the gold standard for high-speed, reliable connectivity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                Advantages
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Symmetrical speeds (equal upload and download)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Extremely low latency (ideal for gaming & video calls)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>More reliable than cable or DSL in adverse weather</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Not affected by electromagnetic interference</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Bandwidth doesn't degrade with distance (up to certain limits)</span>
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <X className="h-5 w-5 text-red-500 mr-2" />
                Limitations
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Limited availability (not accessible in all areas)</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Higher cost compared to DSL and some cable plans</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Installation may require property modifications</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Physical fiber cables can be damaged (though less likely than copper)</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>May require specialized equipment for full speed capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Who Should Get Fiber Internet?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
                <CardTitle className="flex items-center text-xl">
                  <Gamepad className="h-5 w-5 mr-2" />
                  Gamers
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Low ping for competitive gaming</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fast game downloads</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reliable connection for streaming</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4">
                <CardTitle className="flex items-center text-xl">
                  <Laptop className="h-5 w-5 mr-2" />
                  Remote Workers
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>HD video conferencing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fast file uploads/downloads</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reliable for critical work tasks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4">
                <CardTitle className="flex items-center text-xl">
                  <Tv className="h-5 w-5 mr-2" />
                  Streamers
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Multiple 4K streams simultaneously</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No buffering during peak hours</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Content creation & uploading</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4">
                <CardTitle className="flex items-center text-xl">
                  <Phone className="h-5 w-5 mr-2" />
                  Large Households
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Support for many connected devices</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Multiple activities simultaneously</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Smart home device support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Fiber Internet Providers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Xfinity Fiber</CardTitle>
                <CardDescription>Fast & reliable fiber service</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Speed Range:</p>
                    <p className="text-lg font-bold">300 Mbps - 2 Gbps</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Starting Price:</p>
                    <p className="text-lg font-bold">$39.99/mo</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Available in select markets</p>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/providers/xfinity">
                      View Plans <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Spectrum Fiber</CardTitle>
                <CardDescription>Expanding fiber network</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Speed Range:</p>
                    <p className="text-lg font-bold">500 Mbps - 1 Gbps</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Starting Price:</p>
                    <p className="text-lg font-bold">$49.99/mo</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Available in select markets</p>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/providers/spectrum">
                      View Plans <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Optimum Fiber</CardTitle>
                <CardDescription>High-speed fiber service</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Speed Range:</p>
                    <p className="text-lg font-bold">300 Mbps - 5 Gbps</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Starting Price:</p>
                    <p className="text-lg font-bold">$39.99/mo</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Available in select markets</p>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/providers/optimum">
                      View Plans <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-primary mb-2">Not sure which internet type is right for you?</h2>
              <p className="text-muted-foreground mb-4">
                Compare all internet technologies side by side to find the perfect match for your needs.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/internet/comparison">
                Compare Internet Types <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-primary mb-2">Check Fiber Internet Availability</h2>
              <p className="text-muted-foreground mb-4">
                Find out which fiber internet service providers are available at your address.
              </p>
            </div>
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="/availability-checker">
                Check Availability <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FiberInternetPage;