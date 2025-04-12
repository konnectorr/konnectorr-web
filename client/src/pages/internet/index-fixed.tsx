import React from "react";
import { Zap, Tv, PhoneCall, Satellite, Globe, ArrowRight, Cloud, MapPin, Wifi, BarChart2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const InternetTypesPage: React.FC = () => {
  return (
    <main className="bg-gray-50 flex-grow container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Internet Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the right internet connection type for your needs and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-primary/20">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <CardTitle className="flex items-center text-white">
                <Zap className="h-5 w-5 mr-2" />
                Fiber Internet
              </CardTitle>
              <CardDescription className="text-blue-100">
                Fastest residential internet
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col h-full">
                <div className="space-y-4 mb-6 flex-grow">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                      Up to 10 Gbps
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50 ml-2">
                      Symmetric Speeds
                    </Badge>
                  </div>
                  <p className="text-sm">
                    Fiber optic internet provides the fastest and most reliable connection, 
                    using light-based technology to deliver symmetrical upload and download speeds.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Wifi className="h-4 w-4 mr-2 text-green-600" />
                      <span>Unmatched reliability</span>
                    </li>
                    <li className="flex items-center">
                      <BarChart2 className="h-4 w-4 mr-2 text-green-600" />
                      <span>Excellent for streaming & gaming</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-green-600" />
                      <span>Perfect for work from home</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="/internet/fiber">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-primary/20">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              <CardTitle className="flex items-center text-white">
                <Tv className="h-5 w-5 mr-2" />
                Cable Internet
              </CardTitle>
              <CardDescription className="text-blue-100">
                Widely available high-speed option
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col h-full">
                <div className="space-y-4 mb-6 flex-grow">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                      Up to 1.2 Gbps
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50 ml-2">
                      Asymmetric Speeds
                    </Badge>
                  </div>
                  <p className="text-sm">
                    Cable internet uses the same coaxial cable lines as cable TV to provide high-speed 
                    internet with wide availability in urban and suburban areas.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Widely available</span>
                    </li>
                    <li className="flex items-center">
                      <BarChart2 className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Good for streaming & gaming</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Suitable for multiple users</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="/internet/cable">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-primary/20">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
              <CardTitle className="flex items-center text-white">
                <PhoneCall className="h-5 w-5 mr-2" />
                DSL Internet
              </CardTitle>
              <CardDescription className="text-indigo-100">
                Budget-friendly telephone line internet
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col h-full">
                <div className="space-y-4 mb-6 flex-grow">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50">
                      Up to 100 Mbps
                    </Badge>
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50 ml-2">
                      Widely Available
                    </Badge>
                  </div>
                  <p className="text-sm">
                    DSL (Digital Subscriber Line) internet uses existing telephone lines to provide 
                    a reliable and affordable internet connection for basic online activities.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-indigo-600" />
                      <span>Available almost everywhere</span>
                    </li>
                    <li className="flex items-center">
                      <BarChart2 className="h-4 w-4 mr-2 text-indigo-600" />
                      <span>Good for basic browsing</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-indigo-600" />
                      <span>Budget-friendly option</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="/internet/dsl">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-primary/20">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
              <CardTitle className="flex items-center text-white">
                <Satellite className="h-5 w-5 mr-2" />
                Satellite Internet
              </CardTitle>
              <CardDescription className="text-purple-100">
                Available virtually anywhere
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col h-full">
                <div className="space-y-4 mb-6 flex-grow">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                      Up to 100 Mbps
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50 ml-2">
                      Global Coverage
                    </Badge>
                  </div>
                  <p className="text-sm">
                    Satellite internet broadcasts internet data from satellites in space, providing 
                    internet access to remote and rural areas where other options aren't available.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                      <span>Available in rural locations</span>
                    </li>
                    <li className="flex items-center">
                      <BarChart2 className="h-4 w-4 mr-2 text-purple-600" />
                      <span>Higher latency than wired</span>
                    </li>
                    <li className="flex items-center">
                      <Cloud className="h-4 w-4 mr-2 text-purple-600" />
                      <span>Weather can affect reliability</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="/internet/satellite">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-primary/20">
            <CardHeader className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
              <CardTitle className="flex items-center text-white">
                <Globe className="h-5 w-5 mr-2" />
                Global eSIM Internet
              </CardTitle>
              <CardDescription className="text-cyan-100">
                Internet for international travelers
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col h-full">
                <div className="space-y-4 mb-6 flex-grow">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-cyan-50 text-cyan-700 hover:bg-cyan-50">
                      Mobile Data
                    </Badge>
                    <Badge variant="outline" className="bg-cyan-50 text-cyan-700 hover:bg-cyan-50 ml-2">
                      Travel-friendly
                    </Badge>
                  </div>
                  <p className="text-sm">
                    eSIM technology enables global internet access without physical SIM cards. Perfect for 
                    travelers who need reliable internet connection across multiple countries.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-cyan-600" />
                      <span>Works in 190+ countries</span>
                    </li>
                    <li className="flex items-center">
                      <BarChart2 className="h-4 w-4 mr-2 text-cyan-600" />
                      <span>No SIM card needed</span>
                    </li>
                    <li className="flex items-center">
                      <Wifi className="h-4 w-4 mr-2 text-cyan-600" />
                      <span>Easy setup on compatible devices</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="/internet/esim">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />
        
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
              <h2 className="text-2xl font-bold text-primary mb-2">Check Internet Availability</h2>
              <p className="text-muted-foreground mb-4">
                Find out which internet service providers are available at your address.
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

export default InternetTypesPage;