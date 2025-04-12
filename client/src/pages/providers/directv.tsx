import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Check, Tv, Satellite, Award, Phone, Zap, Star, DollarSign, X, Package, 
  MapPin, Wifi, Radio 
} from "lucide-react";
import { motion } from "framer-motion";
import { DirectTVDealerLogo } from "../../components/DirectTVDealerLogo";

const DirectvPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f9fafc] py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <DirectTVDealerLogo />
            <h1 className="text-4xl font-bold mb-4">Premium Satellite TV Entertainment</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the ultimate entertainment with crystal-clear picture quality, access to premium channels, and exclusive sports packages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-50 to-white border-blue-100">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">DIRECTV Satellite</CardTitle>
                      <CardDescription>Traditional satellite TV service</CardDescription>
                    </div>
                    <Satellite className="h-8 w-8 text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Up to 330+ channels available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>99.9% signal reliability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>4K Ultra HD programming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>NFL SUNDAY TICKET available</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="/availability-checker">Check Availability</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">DIRECTV STREAM</CardTitle>
                      <CardDescription>Internet-based streaming service</CardDescription>
                    </div>
                    <Tv className="h-8 w-8 text-indigo-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No satellite dish required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Watch on your TV or mobile devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Regional Sports Networks included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unlimited cloud DVR storage</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
                    <Link href="/availability-checker">Check Availability</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>

          <div className="mt-10 flex gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="tel:8887886930">
                <Phone className="h-4 w-4" />
                Call: 888-788-6930
              </a>
            </Button>
            <Button asChild size="lg" className="gap-2">
              <Link href="/sign-up">
                Get Started
                <Zap className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="packages" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="packages">Packages & Pricing</TabsTrigger>
            <TabsTrigger value="features">Features & Benefits</TabsTrigger>
            <TabsTrigger value="equipment">Equipment & Installation</TabsTrigger>
            <TabsTrigger value="compare">Compare Plans</TabsTrigger>
          </TabsList>

          {/* Packages Tab Content */}
          <TabsContent value="packages">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">DIRECTV Satellite TV Packages</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Choose from a variety of entertainment packages designed to fit your viewing preferences and budget.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Entertainment Package */}
                <Card className="overflow-hidden">
                  <div className="bg-gray-100 p-4 border-b">
                    <h3 className="font-bold">ENTERTAINMENT</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$74.99</span>
                      <span className="text-sm text-gray-600">/mo + taxes</span>
                    </div>
                    <p className="text-sm mt-1">for 12 mos plus taxes</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">165+ Channels</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>TNT, TBS, USA, ESPN, Discovery</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Local channels included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Genie HD DVR included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-500">No regional sports networks</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Select Plan</Button>
                  </CardFooter>
                </Card>

                {/* Choice Package */}
                <Card className="overflow-hidden">
                  <div className="bg-gray-100 p-4 border-b">
                    <h3 className="font-bold">CHOICE™</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$89.99</span>
                      <span className="text-sm text-gray-600">/mo + taxes</span>
                    </div>
                    <p className="text-sm mt-1">for 12 mos plus taxes</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">200+ Channels</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Everything in ENTERTAINMENT</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>ESPN, ESPNews, ESPNU, SEC Network</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Regional Sports Networks included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>NFL SUNDAY TICKET included for first season</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Select Plan</Button>
                  </CardFooter>
                </Card>

                {/* Ultimate Package */}
                <Card className="overflow-hidden">
                  <div className="bg-gray-100 p-4 border-b">
                    <h3 className="font-bold">ULTIMATE</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$104.99</span>
                      <span className="text-sm text-gray-600">/mo + taxes</span>
                    </div>
                    <p className="text-sm mt-1">for 12 mos plus taxes</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">270+ Channels</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Everything in CHOICE™</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>STARZ® ENCORE, FXM, more sports channels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>35+ specialty channels included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>NFL SUNDAY TICKET included for first season</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Select Plan</Button>
                  </CardFooter>
                </Card>

                {/* Premier Package */}
                <Card className="overflow-hidden border-blue-200 bg-gradient-to-b from-blue-50/50 to-white">
                  <div className="bg-blue-600 text-white p-4 border-b">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">PREMIER</h3>
                      <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Best Value</Badge>
                    </div>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$159.99</span>
                      <span className="text-sm text-gray-200">/mo + taxes</span>
                    </div>
                    <p className="text-sm mt-1 text-gray-200">for 12 mos plus taxes</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">330+ Channels</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Everything in ULTIMATE</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>HBO Max™, SHOWTIME®, STARZ®, Cinemax®</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>All sports packages included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>NFL SUNDAY TICKET included for first season</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Select Plan</Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="mt-12 space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-3">DIRECTV STREAM Packages</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    All the benefits of DIRECTV without the satellite dish. Stream on your TV, phone, tablet, and computer.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {/* Entertainment Stream */}
                  <Card className="overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold">ENTERTAINMENT</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$69.99</span>
                        <span className="text-sm text-gray-600">/mo + taxes</span>
                      </div>
                      <p className="text-sm mt-1">No annual contract</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50">75+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>ESPN, CNN, HGTV, Discovery, TNT</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Local channels included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Unlimited cloud DVR storage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500">No regional sports networks</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Select Plan</Button>
                    </CardFooter>
                  </Card>

                  {/* Choice Stream */}
                  <Card className="overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold">CHOICE™</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$89.99</span>
                        <span className="text-sm text-gray-600">/mo + taxes</span>
                      </div>
                      <p className="text-sm mt-1">No annual contract</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50">105+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Everything in ENTERTAINMENT</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Regional Sports Networks included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>ESPN, ESPNews, ESPNU, SEC Network</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Watch on up to 20 devices at home</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Select Plan</Button>
                    </CardFooter>
                  </Card>

                  {/* Ultimate Stream */}
                  <Card className="overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold">ULTIMATE</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$104.99</span>
                        <span className="text-sm text-gray-600">/mo + taxes</span>
                      </div>
                      <p className="text-sm mt-1">No annual contract</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50">140+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Everything in CHOICE™</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>STARZ® ENCORE, FXM</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>More sports and specialty channels</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Stream in 4K (where available)</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Select Plan</Button>
                    </CardFooter>
                  </Card>

                  {/* Premier Stream */}
                  <Card className="overflow-hidden border-indigo-200 bg-gradient-to-b from-indigo-50/50 to-white">
                    <div className="bg-indigo-600 text-white p-4 border-b">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold">PREMIER</h3>
                        <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Best Value</Badge>
                      </div>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$149.99</span>
                        <span className="text-sm text-gray-200">/mo + taxes</span>
                      </div>
                      <p className="text-sm mt-1 text-gray-200">No annual contract</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50">150+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Everything in ULTIMATE</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>HBO Max™, SHOWTIME®, STARZ®, Cinemax®, EPIX®</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>All sports packages included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>NFL SUNDAY TICKET available for add-on</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Select Plan</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <div className="p-6 bg-blue-50 rounded-lg border border-blue-100 mt-10">
                <h3 className="text-lg font-bold mb-2">Important Information About DIRECTV Packages</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Pricing, channels, features, and terms subject to change & may be modified or discontinued at any time without notice.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                  <div>
                    <h4 className="font-semibold mb-2">For DIRECTV Satellite:</h4>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>2-year agreement required for new customers</li>
                      <li>$20/mo. equipment service fee applies</li>
                      <li>Regional Sports Fee up to $15.00/mo. (where applicable)</li>
                      <li>Prices increase in month 13</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">For DIRECTV STREAM:</h4>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>No annual contract required</li>
                      <li>RSN Fees apply for CHOICE packages and above</li>
                      <li>Compatible device and high-speed internet required</li>
                      <li>Limit of 3 concurrent streams outside the home</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Features & Benefits Tab */}
          <TabsContent value="features">
            <div className="space-y-10">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-3">Exclusive Features & Benefits</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Discover why millions of customers choose DIRECTV for their home entertainment needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <Card className="bg-gradient-to-b from-blue-50/50 to-white border-blue-100">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-2">
                      <Tv className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>4K Ultra HD Entertainment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Experience stunning clarity and detail with DIRECTV's 4K Ultra HD programming. Watch sports, movies, and shows with 
                      4x the resolution of HD for an immersive viewing experience.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 2 */}
                <Card className="bg-gradient-to-b from-blue-50/50 to-white border-blue-100">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-2">
                      <Package className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>NFL SUNDAY TICKET</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Catch every out-of-market NFL game, every Sunday afternoon, all in one package. Follow your favorite teams no matter 
                      where you live with this DIRECTV exclusive.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 3 */}
                <Card className="bg-gradient-to-b from-blue-50/50 to-white border-blue-100">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-2">
                      <Satellite className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>99.9% Signal Reliability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      DIRECTV's advanced satellite technology provides industry-leading signal reliability, so you can enjoy uninterrupted 
                      entertainment even during most weather conditions.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 4 */}
                <Card className="bg-gradient-to-b from-blue-50/50 to-white border-blue-100">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-2">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Premium Channels</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Access to HBO Max™, SHOWTIME®, STARZ®, and more premium channels with exclusive content, blockbuster movies, 
                      and award-winning original series.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 5 */}
                <Card className="bg-gradient-to-b from-blue-50/50 to-white border-blue-100">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-2">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Local Channels Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Stay connected to your community with local news, weather, and programming. All DIRECTV packages include your local 
                      ABC, CBS, FOX, and NBC channels at no additional cost.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 6 */}
                <Card className="bg-gradient-to-b from-blue-50/50 to-white border-blue-100">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-2">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>No Hidden Fees</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      What you see is what you get with DIRECTV. Transparent pricing with no hidden fees and all equipment included 
                      in your monthly price. No surprises on your bill.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-3">DIRECTV STREAM Benefits</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    The flexibility of streaming with the reliability and channel selection of DIRECTV.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
                    <h3 className="text-xl font-bold mb-4 text-indigo-800">Watch Anywhere</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium">Stream on multiple devices</p>
                          <p className="text-sm text-gray-600">Watch on your TV, phone, tablet, and computer simultaneously.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium">No satellite dish required</p>
                          <p className="text-sm text-gray-600">Perfect for apartments, condos, or homes with restricted installation options.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium">Take it with you</p>
                          <p className="text-sm text-gray-600">Watch your favorite content even when you're away from home.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
                    <h3 className="text-xl font-bold mb-4 text-indigo-800">Enhanced Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium">Unlimited cloud DVR</p>
                          <p className="text-sm text-gray-600">Record as many shows as you want and store them for up to 9 months.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium">Voice remote included</p>
                          <p className="text-sm text-gray-600">Find what you want to watch with simple voice commands.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium">No annual contract</p>
                          <p className="text-sm text-gray-600">Flexibility to change or cancel your service anytime without penalties.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/sign-up">
                    Sign Up Now
                    <Zap className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Equipment & Installation Tab */}
          <TabsContent value="equipment">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-3">DIRECTV Equipment & Installation</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  State-of-the-art technology for an exceptional viewing experience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* DIRECTV Satellite Equipment */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Satellite className="h-5 w-5 text-blue-600" />
                    <span>DIRECTV Satellite Equipment</span>
                  </h3>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Genie HD DVR</CardTitle>
                      <CardDescription>The heart of your DIRECTV system</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Record up to 5 shows at once</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Store up to 200 hours of HD programming</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Watch in 4K Ultra HD (with compatible TV)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Enjoy Picture-in-Picture with Sports Mode</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Genie Mini</CardTitle>
                      <CardDescription>Connect additional TVs to your system</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Compact design fits anywhere</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Access to all recorded content from your Genie</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Available in wired or wireless options</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Professional Installation</CardTitle>
                      <CardDescription>Expert setup included</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Satellite dish installation and alignment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Equipment setup and connection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>System activation and testing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Tutorial on using your new equipment</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* DIRECTV STREAM Equipment */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Tv className="h-5 w-5 text-indigo-600" />
                    <span>DIRECTV STREAM Equipment</span>
                  </h3>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">DIRECTV STREAM Device</CardTitle>
                      <CardDescription>Optional dedicated streaming box</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Simple plug-and-play setup</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Voice remote with Google Assistant</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Access to 7,000+ apps like Netflix, Prime Video</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>4K Ultra HD and Dolby Atmos compatible</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Compatible Devices</CardTitle>
                      <CardDescription>Use your existing equipment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Amazon Fire TV</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Apple TV</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Google Chromecast</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Roku devices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Samsung Smart TVs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Mobile devices and tablets</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Self-Installation</CardTitle>
                      <CardDescription>Quick and easy setup</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>No professional installation needed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Simply download the app on your device</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Sign in with your DIRECTV STREAM credentials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Start streaming immediately</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border mt-8">
                <h3 className="text-lg font-bold mb-2">Requirements & System Specifications</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">DIRECTV Satellite Requirements:</h4>
                    <ul className="space-y-1 list-disc pl-5 text-sm text-gray-600">
                      <li>Clear view of the southern sky for dish installation</li>
                      <li>HDMI-compatible TV for HD programming</li>
                      <li>4K Ultra HD TV for 4K programming</li>
                      <li>Each connected TV requires a Genie Mini or receiver</li>
                      <li>Internet connection recommended for on-demand features</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">DIRECTV STREAM Requirements:</h4>
                    <ul className="space-y-1 list-disc pl-5 text-sm text-gray-600">
                      <li>High-speed internet connection (minimum 8 Mbps)</li>
                      <li>25+ Mbps recommended for 4K streaming</li>
                      <li>Compatible streaming device or smart TV</li>
                      <li>HDMI cable (for external streaming devices)</li>
                      <li>Mobile devices require iOS 11+ or Android 7.0+</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Compare Plans Tab */}
          <TabsContent value="compare">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-3">DIRECTV vs. Competitors</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  See how DIRECTV stacks up against other TV service providers.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-4 px-6 text-left border w-1/5">Features</th>
                      <th className="py-4 px-6 text-center border w-1/5 bg-blue-50">
                        <div className="flex flex-col items-center">
                          <Satellite className="h-6 w-6 text-blue-600 mb-1" />
                          <span className="font-bold">DIRECTV</span>
                        </div>
                      </th>
                      <th className="py-4 px-6 text-center border w-1/5">
                        <div className="flex flex-col items-center">
                          <Tv className="h-6 w-6 text-gray-600 mb-1" />
                          <span className="font-bold">Cable TV</span>
                        </div>
                      </th>
                      <th className="py-4 px-6 text-center border w-1/5">
                        <div className="flex flex-col items-center">
                          <Wifi className="h-6 w-6 text-gray-600 mb-1" />
                          <span className="font-bold">Streaming Services</span>
                        </div>
                      </th>
                      <th className="py-4 px-6 text-center border w-1/5">
                        <div className="flex flex-col items-center">
                          <Radio className="h-6 w-6 text-gray-600 mb-1" />
                          <span className="font-bold">Other Satellite</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Channel Count</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">330+ (Premier)</td>
                      <td className="py-3 px-6 border text-center">150-250+</td>
                      <td className="py-3 px-6 border text-center">Varies by service</td>
                      <td className="py-3 px-6 border text-center">290+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Sports Programming</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                        </div>
                        <span className="text-sm">Exclusive NFL SUNDAY TICKET</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                          <Star className="h-5 w-5 text-gray-300" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                        <span className="text-sm">Limited live sports</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Picture Quality</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                        </div>
                        <span className="text-sm">4K Ultra HD Available</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                        <span className="text-sm">Limited 4K content</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                        <span className="text-sm">Depends on internet speed</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">DVR Capacity</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">200+ Hours HD</td>
                      <td className="py-3 px-6 border text-center">50-100 Hours HD</td>
                      <td className="py-3 px-6 border text-center">Unlimited (Cloud)</td>
                      <td className="py-3 px-6 border text-center">500+ Hours HD</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Simultaneous Recordings</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">Up to 5 Shows</td>
                      <td className="py-3 px-6 border text-center">2-4 Shows</td>
                      <td className="py-3 px-6 border text-center">Unlimited</td>
                      <td className="py-3 px-6 border text-center">Up to 16 Shows</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Contract Length</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">
                        2-year (Satellite)<br />
                        <span className="text-green-600">No Contract (STREAM)</span>
                      </td>
                      <td className="py-3 px-6 border text-center">1-2 Years</td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-green-600">Month-to-Month</span>
                      </td>
                      <td className="py-3 px-6 border text-center">2 Years</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Equipment</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">
                        Genie HD DVR<br />
                        <span className="text-sm">Advanced technology</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        Standard DVR<br />
                        <span className="text-sm">Varies by provider</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        No equipment needed<br />
                        <span className="text-sm">Use existing devices</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        Hopper DVR<br />
                        <span className="text-sm">Proprietary technology</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Availability</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">
                        <span className="text-green-600">Nationwide</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-amber-600">Regional</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-green-600">Nationwide</span><br />
                        <span className="text-xs">(Internet required)</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-green-600">Nationwide</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-10">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Why Choose DIRECTV?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Exclusive Sports Programming</p>
                        <p className="text-sm text-gray-600">NFL SUNDAY TICKET, more sports channels than any other provider.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Superior Technology</p>
                        <p className="text-sm text-gray-600">Advanced Genie HD DVR with industry-leading features.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Best Channel Selection</p>
                        <p className="text-sm text-gray-600">More entertainment, sports, and premium movie channels.</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Nationwide Availability</p>
                        <p className="text-sm text-gray-600">Available virtually anywhere in the U.S. with a clear view of the southern sky.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Flexible Viewing Options</p>
                        <p className="text-sm text-gray-600">Choose between traditional satellite TV or DIRECTV STREAM.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Award-Winning Customer Service</p>
                        <p className="text-sm text-gray-600">Consistently ranked #1 in customer satisfaction among satellite TV providers.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/availability-checker">
                    <MapPin className="h-4 w-4 mr-1" />
                    Check Availability
                  </Link>
                </Button>
                <Button asChild size="lg" className="gap-2">
                  <Link href="/sign-up">
                    Get Started
                    <Zap className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Customer Reviews Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join millions of satisfied DIRECTV customers across the country.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <Card className="bg-gray-50 border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="italic text-gray-600 mb-4">
                  "NFL SUNDAY TICKET is a game-changer! I can watch my hometown team even though I live across the country. 
                  The picture quality is amazing and I love the multi-game view option."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold mr-3">M</div>
                  <div>
                    <p className="font-medium">Michael R.</p>
                    <p className="text-sm text-gray-500">DIRECTV Customer, 3 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card className="bg-gray-50 border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="italic text-gray-600 mb-4">
                  "The Genie DVR is fantastic. I can record all my favorite shows at once and never miss anything. 
                  Having access to on-demand content is also great for catching up on episodes I've missed."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold mr-3">S</div>
                  <div>
                    <p className="font-medium">Sarah K.</p>
                    <p className="text-sm text-gray-500">DIRECTV Customer, 5 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 3 */}
            <Card className="bg-gray-50 border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
                <p className="italic text-gray-600 mb-4">
                  "Switched from cable to DIRECTV STREAM and couldn't be happier. No more equipment rental fees and I can 
                  watch on my tablet when I'm not at home. The cloud DVR is a huge plus too."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold mr-3">J</div>
                  <div>
                    <p className="font-medium">James T.</p>
                    <p className="text-sm text-gray-500">DIRECTV STREAM Customer, 1 year</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">What's the difference between DIRECTV and DIRECTV STREAM?</h3>
              <p className="text-gray-600">
                DIRECTV is a traditional satellite TV service that requires a satellite dish installation and provides up to 330+ channels. 
                DIRECTV STREAM is an internet-based streaming service that doesn't require a satellite dish and allows you to watch on multiple 
                devices, both at home and on-the-go.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">Is NFL SUNDAY TICKET included with DIRECTV?</h3>
              <p className="text-gray-600">
                NFL SUNDAY TICKET is included at no extra cost for the first season with CHOICE packages and above. After the first season, 
                you can continue to subscribe to NFL SUNDAY TICKET for an additional fee.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">Do I need a contract for DIRECTV?</h3>
              <p className="text-gray-600">
                DIRECTV satellite service requires a 2-year agreement for new customers. DIRECTV STREAM does not require an annual contract 
                and is available on a month-to-month basis.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">Can I watch DIRECTV if the weather is bad?</h3>
              <p className="text-gray-600">
                DIRECTV offers 99.9% signal reliability. While extreme weather conditions might occasionally affect the signal, DIRECTV's 
                advanced technology minimizes disruptions. Most customers experience very few weather-related outages.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">Can I combine DIRECTV with internet service?</h3>
              <p className="text-gray-600">
                Yes, DIRECTV can be bundled with internet service from participating providers for additional savings. Contact us for 
                available bundle options in your area.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 px-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-3">Ready to Elevate Your Entertainment Experience?</h2>
            <p className="max-w-3xl mx-auto mb-8">
              Join millions of satisfied customers and discover why DIRECTV is America's premier television service provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <a href="tel:8887886930">
                  <Phone className="h-4 w-4" />
                  Call: 888-788-6930
                </a>
              </Button>
              <Button asChild size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100 gap-2">
                <Link href="/sign-up">
                  Get Started Today
                  <Zap className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectvPage;