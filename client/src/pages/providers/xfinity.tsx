import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Check, Tv, Wifi, Award, Phone, Zap, Star, DollarSign, 
  X, Package, MapPin, Smartphone, Globe, Cable, Shield, Satellite
} from "lucide-react";
import { motion } from "framer-motion";
import { XfinityDealerLogo } from "../../components/XfinityDealerLogo";

const XfinityPage: React.FC = () => {
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
            <XfinityDealerLogo />
            <h1 className="text-4xl font-bold mb-4">Internet, TV & Mobile Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience lightning-fast internet, premium entertainment, and reliable mobile service from one of America's leading providers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-50 to-white border-blue-100">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">Xfinity Internet</CardTitle>
                      <CardDescription>High-speed broadband</CardDescription>
                    </div>
                    <Wifi className="h-8 w-8 text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Up to 1.2 Gbps speeds available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Advanced security included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>WiFi coverage for your home</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Access to millions of hotspots</span>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full bg-gradient-to-br from-purple-50 to-white border-purple-100">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">Xfinity TV</CardTitle>
                      <CardDescription>Entertainment experience</CardDescription>
                    </div>
                    <Tv className="h-8 w-8 text-purple-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>185+ channels available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>X1 Entertainment system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Peacock Premium included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Voice remote included</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link href="/availability-checker">Check Availability</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full bg-gradient-to-br from-green-50 to-white border-green-100">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">Xfinity Mobile</CardTitle>
                      <CardDescription>Flexible wireless service</CardDescription>
                    </div>
                    <Smartphone className="h-8 w-8 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>By the Gig or Unlimited data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>5G network nationwide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No line access fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Mix and match lines</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
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
            <TabsTrigger value="packages">Plans & Pricing</TabsTrigger>
            <TabsTrigger value="features">Features & Benefits</TabsTrigger>
            <TabsTrigger value="equipment">Equipment & Setup</TabsTrigger>
            <TabsTrigger value="compare">Compare Plans</TabsTrigger>
          </TabsList>

          {/* Packages Tab Content */}
          <TabsContent value="packages">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Xfinity Internet Plans</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Powerful internet with a variety of speeds to match your household needs.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Internet Plan 1 */}
                <Card className="overflow-hidden">
                  <div className="bg-gray-100 p-4 border-b">
                    <h3 className="font-bold">Connect</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$30.00</span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <p className="text-sm mt-1">for 12 mos. + equipment & taxes</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">75 Mbps</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Download speeds up to 75 Mbps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Great for 1-2 devices at once</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Advanced security included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Includes WiFi equipment</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Select Plan</Button>
                  </CardFooter>
                </Card>

                {/* Internet Plan 2 */}
                <Card className="overflow-hidden">
                  <div className="bg-gray-100 p-4 border-b">
                    <h3 className="font-bold">Fast</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$55.00</span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <p className="text-sm mt-1">for 12 mos. + equipment & taxes</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">300 Mbps</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Download speeds up to 300 Mbps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Great for 5-7 devices at once</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Advanced security included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Includes WiFi equipment</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Select Plan</Button>
                  </CardFooter>
                </Card>

                {/* Internet Plan 3 */}
                <Card className="overflow-hidden border-blue-200 bg-gradient-to-b from-blue-50/50 to-white">
                  <div className="bg-blue-600 text-white p-4 border-b">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">Gigabit</h3>
                      <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Best Value</Badge>
                    </div>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$80.00</span>
                      <span className="text-sm text-gray-200">/mo</span>
                    </div>
                    <p className="text-sm mt-1 text-gray-200">for 24 mos. + equipment & taxes</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">1.2 Gbps</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Download speeds up to 1.2 Gbps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Great for 12+ devices at once</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>xFi Complete ($25 value) included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Unlimited data included</span>
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
                  <h2 className="text-3xl font-bold mb-3">Xfinity TV Plans</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Get access to live TV, on-demand content, and streaming apps all in one place.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {/* TV Plan 1 */}
                  <Card className="overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold">Popular TV</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$49.99</span>
                        <span className="text-sm text-gray-600">/mo</span>
                      </div>
                      <p className="text-sm mt-1">for 12 mos. + taxes and fees</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">125+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>125+ channels including local, sports, and news</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>X1 Entertainment Operating System</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Peacock Premium included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Voice Remote included</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Select Plan</Button>
                    </CardFooter>
                  </Card>

                  {/* TV Plan 2 */}
                  <Card className="overflow-hidden border-purple-200 bg-gradient-to-b from-purple-50/50 to-white">
                    <div className="bg-purple-600 text-white p-4 border-b">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold">Ultimate TV</h3>
                        <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Most Popular</Badge>
                      </div>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$69.99</span>
                        <span className="text-sm text-gray-200">/mo</span>
                      </div>
                      <p className="text-sm mt-1 text-gray-200">for 12 mos. + taxes and fees</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">185+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>185+ channels including popular entertainment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>DVR service (150 hours) included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Stream on multiple devices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Free Peacock Premium included</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Select Plan</Button>
                    </CardFooter>
                  </Card>

                  {/* TV Plan 3 */}
                  <Card className="overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold">Premium TV</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$89.99</span>
                        <span className="text-sm text-gray-600">/mo</span>
                      </div>
                      <p className="text-sm mt-1">for 12 mos. + taxes and fees</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">200+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>200+ channels including premium movie networks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Netflix Standard subscription included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Unlimited DVR storage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>HBO Max™ included for 12 months</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Select Plan</Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-12 space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-3">Xfinity Mobile Plans</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Flexible wireless plans designed exclusively for Xfinity Internet customers.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Mobile Plan 1 */}
                    <Card className="overflow-hidden">
                      <div className="bg-gray-100 p-4 border-b">
                        <h3 className="font-bold">By the Gig</h3>
                        <div className="mt-2">
                          <span className="text-3xl font-bold">$15</span>
                          <span className="text-sm text-gray-600">/GB</span>
                        </div>
                        <p className="text-sm mt-1">+ taxes and fees</p>
                      </div>
                      <CardContent className="pt-4">
                        <div className="space-y-4">
                          <div>
                            <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">Pay Per GB</Badge>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>$15 per GB of shared data</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Unlimited talk and text</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>No line access fees</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Switch between plans anytime</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Select Plan</Button>
                      </CardFooter>
                    </Card>

                    {/* Mobile Plan 2 */}
                    <Card className="overflow-hidden border-green-200 bg-gradient-to-b from-green-50/50 to-white">
                      <div className="bg-green-600 text-white p-4 border-b">
                        <div className="flex justify-between items-center">
                          <h3 className="font-bold">Unlimited</h3>
                          <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Best Value</Badge>
                        </div>
                        <div className="mt-2">
                          <span className="text-3xl font-bold">$45</span>
                          <span className="text-sm text-gray-200">/mo per line</span>
                        </div>
                        <p className="text-sm mt-1 text-gray-200">+ taxes and fees</p>
                      </div>
                      <CardContent className="pt-4">
                        <div className="space-y-4">
                          <div>
                            <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">Unlimited Data</Badge>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Unlimited 5G data per line</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Unlimited talk and text</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>HD streaming</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Reduced to slower speeds after 20GB</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-green-600 hover:bg-green-700">Select Plan</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Features Tab Content */}
          <TabsContent value="features">
            <div className="space-y-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Xfinity Features & Benefits</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Discover what makes Xfinity services stand out from the competition.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                      <Wifi className="text-blue-500 h-5 w-5" />
                      Internet Features
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full mt-1">
                              <Shield className="h-4 w-4 text-blue-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Advanced Security</h4>
                              <p className="text-sm text-gray-600">xFi Advanced Security helps protect all your connected devices from threats.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full mt-1">
                              <Wifi className="h-4 w-4 text-blue-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">WiFi Coverage</h4>
                              <p className="text-sm text-gray-600">xFi Pods extend WiFi throughout your home and eliminate dead zones.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full mt-1">
                              <Globe className="h-4 w-4 text-blue-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">WiFi Hotspots</h4>
                              <p className="text-sm text-gray-600">Access to millions of Xfinity WiFi hotspots nationwide for on-the-go connectivity.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full mt-1">
                              <Package className="h-4 w-4 text-blue-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Flex 4K Streaming Box</h4>
                              <p className="text-sm text-gray-600">Free 4K streaming device for Internet-only customers to access streaming apps.</p>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                      <Smartphone className="text-green-500 h-5 w-5" />
                      Mobile Features
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="bg-green-100 p-2 rounded-full mt-1">
                              <Zap className="h-4 w-4 text-green-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">5G Coverage</h4>
                              <p className="text-sm text-gray-600">Nationwide 5G network for lightning-fast download speeds and low latency.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-green-100 p-2 rounded-full mt-1">
                              <DollarSign className="h-4 w-4 text-green-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Pricing Flexibility</h4>
                              <p className="text-sm text-gray-600">Mix and match data options by the gig or unlimited for each line.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-green-100 p-2 rounded-full mt-1">
                              <Phone className="h-4 w-4 text-green-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Latest Devices</h4>
                              <p className="text-sm text-gray-600">Access to the latest phones with flexible payment options.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-green-100 p-2 rounded-full mt-1">
                              <Wifi className="h-4 w-4 text-green-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">WiFi Auto-Connect</h4>
                              <p className="text-sm text-gray-600">Automatically connects to Xfinity WiFi hotspots to save on cellular data.</p>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                      <Tv className="text-purple-500 h-5 w-5" />
                      TV Features
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="bg-purple-100 p-2 rounded-full mt-1">
                              <Tv className="h-4 w-4 text-purple-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">X1 Entertainment System</h4>
                              <p className="text-sm text-gray-600">Intuitive interface that brings together live TV, On Demand, and streaming apps.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-purple-100 p-2 rounded-full mt-1">
                              <Zap className="h-4 w-4 text-purple-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Voice Remote</h4>
                              <p className="text-sm text-gray-600">Search and navigate with your voice across all content.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-purple-100 p-2 rounded-full mt-1">
                              <Package className="h-4 w-4 text-purple-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Peacock Premium</h4>
                              <p className="text-sm text-gray-600">Included with X1 TV packages for access to exclusive streaming content.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-purple-100 p-2 rounded-full mt-1">
                              <Phone className="h-4 w-4 text-purple-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Stream Anywhere</h4>
                              <p className="text-sm text-gray-600">Watch live TV and recordings on any device with the Xfinity Stream app.</p>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                      <Star className="text-yellow-500 h-5 w-5" />
                      Bundle Benefits
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="bg-yellow-100 p-2 rounded-full mt-1">
                              <DollarSign className="h-4 w-4 text-yellow-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Cost Savings</h4>
                              <p className="text-sm text-gray-600">Save up to $400 per year when bundling Internet, TV, and Mobile services.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-yellow-100 p-2 rounded-full mt-1">
                              <Award className="h-4 w-4 text-yellow-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Premium Content</h4>
                              <p className="text-sm text-gray-600">Access to premium streaming services included in select bundles.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-yellow-100 p-2 rounded-full mt-1">
                              <Package className="h-4 w-4 text-yellow-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Simplified Billing</h4>
                              <p className="text-sm text-gray-600">Manage all your services with one account and one monthly bill.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-yellow-100 p-2 rounded-full mt-1">
                              <Zap className="h-4 w-4 text-yellow-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Integrated Experience</h4>
                              <p className="text-sm text-gray-600">Seamless integration between services for a better user experience.</p>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Equipment Tab Content */}
          <TabsContent value="equipment">
            <div className="space-y-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Xfinity Equipment & Setup</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Learn about the equipment that powers your Xfinity services.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Internet Equipment */}
                <Card className="overflow-hidden">
                  <div className="bg-blue-500 text-white p-4">
                    <h3 className="text-xl font-medium flex items-center gap-2">
                      <Wifi className="h-5 w-5" />
                      Internet Equipment
                    </h3>
                  </div>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="font-medium">xFi Gateway</h4>
                        <p className="text-sm text-gray-600">All-in-one modem and WiFi router</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>WiFi 6 technology for faster speeds</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Advanced security features</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Parental controls via xFi app</span>
                          </li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Equipment fee: $14/month</p>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h4 className="font-medium">xFi Pod WiFi Extenders</h4>
                        <p className="text-sm text-gray-600">WiFi mesh extenders for whole-home coverage</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Plug into any outlet</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Eliminates WiFi dead zones</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Easy self-installation</span>
                          </li>
                        </ul>
                        <p className="text-sm font-medium mt-2">$119 for 1 Pod or $199 for 2 Pods</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* TV Equipment */}
                <Card className="overflow-hidden">
                  <div className="bg-purple-500 text-white p-4">
                    <h3 className="text-xl font-medium flex items-center gap-2">
                      <Tv className="h-5 w-5" />
                      TV Equipment
                    </h3>
                  </div>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="font-medium">X1 TV Box</h4>
                        <p className="text-sm text-gray-600">4K UHD capable set-top box</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>4K UHD content capability</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Access to streaming apps</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Cloud DVR functionality</span>
                          </li>
                        </ul>
                        <p className="text-sm font-medium mt-2">First box included, additional boxes $7.50/month</p>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h4 className="font-medium">Xfinity Flex Box</h4>
                        <p className="text-sm text-gray-600">Streaming device for Internet-only customers</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>4K UHD streaming</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Voice Remote included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Free Peacock Premium included</span>
                          </li>
                        </ul>
                        <p className="text-sm font-medium mt-2">First device free with Internet service</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Setup & Installation */}
                <Card className="overflow-hidden">
                  <div className="bg-green-500 text-white p-4">
                    <h3 className="text-xl font-medium flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Setup & Installation
                    </h3>
                  </div>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="font-medium">Professional Installation</h4>
                        <p className="text-sm text-gray-600">Expert technician setup for your services</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Complete setup of all equipment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>WiFi optimization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Education on service features</span>
                          </li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Professional installation: $89.99 (often waived with promotions)</p>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h4 className="font-medium">Self-Installation Kit</h4>
                        <p className="text-sm text-gray-600">Easy setup on your own schedule</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>All necessary equipment included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Step-by-step instructions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>24/7 support if needed</span>
                          </li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Self-installation: Free</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Compare Plans Tab Content */}
          <TabsContent value="compare">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Compare Xfinity Bundles</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Save more when you bundle Xfinity services together.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 text-left font-medium">Bundle</th>
                      <th className="p-4 text-left font-medium">Services</th>
                      <th className="p-4 text-left font-medium">Key Features</th>
                      <th className="p-4 text-left font-medium">Price</th>
                      <th className="p-4 text-left font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">
                        <div className="font-medium">Starter Bundle</div>
                        <div className="text-sm text-gray-600">Internet + TV</div>
                      </td>
                      <td className="p-4">
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-1">
                            <Wifi className="h-3.5 w-3.5 text-blue-500" />
                            <span>Connect Internet (75 Mbps)</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Tv className="h-3.5 w-3.5 text-purple-500" />
                            <span>Popular TV (125+ channels)</span>
                          </li>
                        </ul>
                      </td>
                      <td className="p-4">
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>WiFi Gateway included</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>Peacock Premium included</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>Voice Remote included</span>
                          </li>
                        </ul>
                      </td>
                      <td className="p-4">
                        <div className="font-medium">$79.99/mo</div>
                        <div className="text-sm text-gray-600">for 12 mos + taxes</div>
                      </td>
                      <td className="p-4">
                        <Button size="sm">Select Bundle</Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-blue-50/30">
                      <td className="p-4">
                        <div className="font-medium">Premium Bundle</div>
                        <div className="text-sm text-gray-600">Internet + TV</div>
                        <Badge className="mt-1 bg-yellow-500 text-black border-0 hover:bg-yellow-400">Best Value</Badge>
                      </td>
                      <td className="p-4">
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-1">
                            <Wifi className="h-3.5 w-3.5 text-blue-500" />
                            <span>Fast Internet (300 Mbps)</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Tv className="h-3.5 w-3.5 text-purple-500" />
                            <span>Ultimate TV (185+ channels)</span>
                          </li>
                        </ul>
                      </td>
                      <td className="p-4">
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>WiFi Gateway included</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>DVR service (150 hours)</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>Peacock Premium included</span>
                          </li>
                        </ul>
                      </td>
                      <td className="p-4">
                        <div className="font-medium">$109.99/mo</div>
                        <div className="text-sm text-gray-600">for 12 mos + taxes</div>
                      </td>
                      <td className="p-4">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Select Bundle</Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">
                        <div className="font-medium">Ultimate Bundle</div>
                        <div className="text-sm text-gray-600">Internet + TV + Mobile</div>
                      </td>
                      <td className="p-4">
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-1">
                            <Wifi className="h-3.5 w-3.5 text-blue-500" />
                            <span>Gigabit Internet (1.2 Gbps)</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Tv className="h-3.5 w-3.5 text-purple-500" />
                            <span>Premium TV (200+ channels)</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Smartphone className="h-3.5 w-3.5 text-green-500" />
                            <span>Unlimited Mobile (1 line)</span>
                          </li>
                        </ul>
                      </td>
                      <td className="p-4">
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>xFi Complete ($25 value)</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>Unlimited DVR storage</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>Netflix & HBO Max included</span>
                          </li>
                        </ul>
                      </td>
                      <td className="p-4">
                        <div className="font-medium">$169.99/mo</div>
                        <div className="text-sm text-gray-600">for 24 mos + taxes</div>
                      </td>
                      <td className="p-4">
                        <Button size="sm">Select Bundle</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Why Bundle Xfinity Services?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <DollarSign className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Save Money</h4>
                      <p className="text-sm text-gray-600">Save up to 30% compared to purchasing services separately.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <Package className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Simplified Billing</h4>
                      <p className="text-sm text-gray-600">One bill for all your telecommunications services.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <Shield className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Extra Benefits</h4>
                      <p className="text-sm text-gray-600">Access to exclusive perks and premium content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Xfinity services.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardHeader className="py-4 px-6 flex flex-row items-start space-y-0">
                <div>
                  <CardTitle className="text-lg">What is Xfinity's cancellation policy?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-4">
                <p className="text-gray-600">
                  Most Xfinity services require a one-year contract. Early termination fees may apply if you cancel before the contract period ends. The early termination fee is typically $10 per month for the remaining months of your contract. Some promotional offers may require a two-year agreement with higher early termination fees.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="py-4 px-6 flex flex-row items-start space-y-0">
                <div>
                  <CardTitle className="text-lg">Can I keep my phone number if I switch to Xfinity Mobile?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-4">
                <p className="text-gray-600">
                  Yes, you can transfer your existing phone number to Xfinity Mobile through a process called "porting." During sign-up, you'll need to provide your current carrier account information and your phone number. The porting process typically takes 24-48 hours to complete, during which time your old service will continue to work until the transfer is complete.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="py-4 px-6 flex flex-row items-start space-y-0">
                <div>
                  <CardTitle className="text-lg">Does Xfinity Internet have data caps?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-4">
                <p className="text-gray-600">
                  Most Xfinity Internet plans come with a 1.2 TB (1,200 GB) monthly data allowance. If you exceed this amount, you'll be charged $10 for each additional 50 GB of data used, up to a maximum of $100 per month. Alternatively, you can add the unlimited data option to your plan for an additional $30 per month. The Gigabit plan includes unlimited data at no extra cost.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="py-4 px-6 flex flex-row items-start space-y-0">
                <div>
                  <CardTitle className="text-lg">What equipment do I need for Xfinity TV service?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-4">
                <p className="text-gray-600">
                  Xfinity TV service requires an X1 TV Box for each television in your home. The first TV Box is typically included with your service, and additional boxes are available for $7.50 per month each. Each X1 TV Box comes with a Voice Remote at no additional cost. For streaming on mobile devices, you can download the free Xfinity Stream app, which does not require additional equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="py-4 px-6 flex flex-row items-start space-y-0">
                <div>
                  <CardTitle className="text-lg">Can I bundle Xfinity services for a discount?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-4">
                <p className="text-gray-600">
                  Yes, Xfinity offers various bundle packages that combine Internet, TV, phone, and mobile services. Bundling services can save you money compared to purchasing each service separately. Additionally, certain bundles include premium features like Peacock Premium, Netflix, or larger data allowances at no extra cost. Promotional bundles often feature reduced pricing for the first 12 or 24 months of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 max-w-5xl mx-auto shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Xfinity?</h2>
            <p className="text-white/90 mb-6 max-w-3xl mx-auto">
              Get started with America's most reliable internet and entertainment services today. Our experts are ready to help you find the perfect plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="tel:8887886930" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call: 888-788-6930
                </a>
              </Button>
              <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
                <Link href="/sign-up" className="flex items-center gap-2">
                  Sign Up Now
                  <Zap className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XfinityPage;