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
import { OptimumDealerLogo } from "../../components/OptimumDealerLogo";

const OptimumPage: React.FC = () => {
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
            <OptimumDealerLogo className="h-24 mb-6" />
            <h1 className="text-4xl font-bold mb-4">Internet, TV & Phone Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              High-speed internet, crystal-clear TV, and reliable home phone services from a leading provider in the Northeast.
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
                      <CardTitle className="text-2xl">Optimum Internet</CardTitle>
                      <CardDescription>High-speed fiber broadband</CardDescription>
                    </div>
                    <Wifi className="h-8 w-8 text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Speeds up to 1 Gig</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unlimited data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Free Smart WiFi router</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No annual contract</span>
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
              <Card className="h-full bg-gradient-to-br from-orange-50 to-white border-orange-100">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">Optimum TV</CardTitle>
                      <CardDescription>Premium entertainment</CardDescription>
                    </div>
                    <Tv className="h-8 w-8 text-orange-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>220+ channels available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>4K Ultra HD content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Cloud DVR included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Optimum Stream app</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
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
              <Card className="h-full bg-gradient-to-br from-purple-50 to-white border-purple-100">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">Optimum Phone</CardTitle>
                      <CardDescription>Reliable home service</CardDescription>
                    </div>
                    <Phone className="h-8 w-8 text-purple-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unlimited nationwide calling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>20+ calling features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Keep your existing number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>International calling plans</span>
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
                <h2 className="text-3xl font-bold mb-3">Optimum Internet Plans</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Fast, reliable internet with a variety of speeds to match your household needs.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Internet Plan 1 */}
                <Card className="overflow-hidden">
                  <div className="bg-gray-100 p-4 border-b">
                    <h3 className="font-bold">Internet 300</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$40</span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <p className="text-sm mt-1">for 12 mos. + taxes & fees</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">300 Mbps</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>300 Mbps download speed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Optimum Smart WiFi router included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Unlimited data usage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Perfect for 5-7 devices</span>
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
                    <h3 className="font-bold">Internet 500</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$60</span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <p className="text-sm mt-1">for 12 mos. + taxes & fees</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">500 Mbps</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>500 Mbps download speed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Optimum Smart WiFi router included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Unlimited data usage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Great for 8-10 devices</span>
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
                      <h3 className="font-bold">Gig Internet</h3>
                      <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Best Value</Badge>
                    </div>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$80</span>
                      <span className="text-sm text-gray-200">/mo</span>
                    </div>
                    <p className="text-sm mt-1 text-gray-200">for 12 mos. + taxes & fees</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">1 Gig</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>1 Gig (940 Mbps) download speed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Optimum Smart WiFi 6 router</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Unlimited data usage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Perfect for 10+ devices</span>
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
                  <h2 className="text-3xl font-bold mb-3">Optimum TV Plans</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Watch your favorite shows and movies with crystal-clear picture quality.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {/* TV Plan 1 */}
                  <Card className="overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold">Core TV</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$74.99</span>
                        <span className="text-sm text-gray-600">/mo</span>
                      </div>
                      <p className="text-sm mt-1">for 12 mos. + taxes & fees</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-orange-50 text-orange-700 hover:bg-orange-50">125+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>125+ channels including local</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Access to on-demand content</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Optimum Stream app</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Cloud DVR (20 hours)</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Select Plan</Button>
                    </CardFooter>
                  </Card>

                  {/* TV Plan 2 */}
                  <Card className="overflow-hidden border-orange-200 bg-gradient-to-b from-orange-50/50 to-white">
                    <div className="bg-orange-600 text-white p-4 border-b">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold">Select TV</h3>
                        <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Most Popular</Badge>
                      </div>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$89.99</span>
                        <span className="text-sm text-gray-200">/mo</span>
                      </div>
                      <p className="text-sm mt-1 text-gray-200">for 12 mos. + taxes & fees</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-orange-50 text-orange-700 hover:bg-orange-50">220+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>220+ channels including sports</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Access to premium content</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Optimum Stream app</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Cloud DVR (50 hours)</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">Select Plan</Button>
                    </CardFooter>
                  </Card>

                  {/* TV Plan 3 */}
                  <Card className="overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold">Premier TV</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$109.99</span>
                        <span className="text-sm text-gray-600">/mo</span>
                      </div>
                      <p className="text-sm mt-1">for 12 mos. + taxes & fees</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-orange-50 text-orange-700 hover:bg-orange-50">290+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>290+ channels with premium networks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>HBO Max™ included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Optimum Stream app</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Cloud DVR (100 hours)</span>
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
                    <h2 className="text-3xl font-bold mb-3">Optimum Phone Plans</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Stay connected with reliable home phone service.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
                    {/* Phone Plan 1 */}
                    <Card className="overflow-hidden">
                      <div className="bg-gray-100 p-4 border-b">
                        <h3 className="font-bold">Optimum Voice</h3>
                        <div className="mt-2">
                          <span className="text-3xl font-bold">$14.99</span>
                          <span className="text-sm text-gray-600">/mo</span>
                        </div>
                        <p className="text-sm mt-1">for 12 mos. + taxes & fees when bundled</p>
                      </div>
                      <CardContent className="pt-4">
                        <div className="space-y-4">
                          <div>
                            <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">Standard Features</Badge>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Unlimited nationwide calling</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>20+ calling features</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Caller ID and Call Waiting</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Voicemail service included</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Select Plan</Button>
                      </CardFooter>
                    </Card>

                    {/* Phone Plan 2 */}
                    <Card className="overflow-hidden">
                      <div className="bg-gray-100 p-4 border-b">
                        <h3 className="font-bold">Optimum Voice International</h3>
                        <div className="mt-2">
                          <span className="text-3xl font-bold">$24.99</span>
                          <span className="text-sm text-gray-600">/mo</span>
                        </div>
                        <p className="text-sm mt-1">for 12 mos. + taxes & fees when bundled</p>
                      </div>
                      <CardContent className="pt-4">
                        <div className="space-y-4">
                          <div>
                            <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">International Features</Badge>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Unlimited worldwide calling to 28 countries</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>All standard features included</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Reduced rates to additional countries</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Enhanced voicemail features</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">Select Plan</Button>
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
                <h2 className="text-3xl font-bold mb-3">Optimum Features & Benefits</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Discover the exclusive features that make Optimum services stand out.
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
                              <h4 className="font-medium">Smart WiFi 6 Technology</h4>
                              <p className="text-sm text-gray-600">Latest generation WiFi technology for faster speeds and better coverage throughout your home.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full mt-1">
                              <Wifi className="h-4 w-4 text-blue-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Network Extenders</h4>
                              <p className="text-sm text-gray-600">Optional WiFi extenders available to eliminate dead zones in larger homes.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full mt-1">
                              <Globe className="h-4 w-4 text-blue-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Security Solutions</h4>
                              <p className="text-sm text-gray-600">Built-in security features to protect your network from threats.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full mt-1">
                              <Package className="h-4 w-4 text-blue-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Fiber Technology</h4>
                              <p className="text-sm text-gray-600">Fiber-to-the-home technology available in select areas for lightning-fast speeds.</p>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                      <Phone className="text-purple-500 h-5 w-5" />
                      Phone Features
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="bg-purple-100 p-2 rounded-full mt-1">
                              <Zap className="h-4 w-4 text-purple-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Reliability</h4>
                              <p className="text-sm text-gray-600">Crystal-clear calls with 99.9% uptime reliability.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-purple-100 p-2 rounded-full mt-1">
                              <DollarSign className="h-4 w-4 text-purple-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">International Options</h4>
                              <p className="text-sm text-gray-600">Affordable international calling plans to stay connected with loved ones worldwide.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-purple-100 p-2 rounded-full mt-1">
                              <Phone className="h-4 w-4 text-purple-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Enhanced Calling Features</h4>
                              <p className="text-sm text-gray-600">Includes caller ID, call waiting, three-way calling, and more at no extra cost.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-purple-100 p-2 rounded-full mt-1">
                              <Package className="h-4 w-4 text-purple-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Advanced Voicemail</h4>
                              <p className="text-sm text-gray-600">Check voicemail from anywhere with visual voicemail and email notifications.</p>
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
                      <Tv className="text-orange-500 h-5 w-5" />
                      TV Features
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="bg-orange-100 p-2 rounded-full mt-1">
                              <Tv className="h-4 w-4 text-orange-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">4K Ultra HD</h4>
                              <p className="text-sm text-gray-600">Crystal-clear 4K resolution on compatible channels and content.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-orange-100 p-2 rounded-full mt-1">
                              <Zap className="h-4 w-4 text-orange-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Cloud DVR</h4>
                              <p className="text-sm text-gray-600">Record your favorite shows and watch them anywhere with Cloud DVR storage.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-orange-100 p-2 rounded-full mt-1">
                              <Package className="h-4 w-4 text-orange-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Optimum Stream App</h4>
                              <p className="text-sm text-gray-600">Watch TV on any device, anywhere in your home with the Optimum Stream app.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-orange-100 p-2 rounded-full mt-1">
                              <Phone className="h-4 w-4 text-orange-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Voice Remote</h4>
                              <p className="text-sm text-gray-600">Find shows, change channels, and control your TV with simple voice commands.</p>
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
                              <p className="text-sm text-gray-600">Save up to $500 per year when bundling Internet, TV, and Phone services.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-yellow-100 p-2 rounded-full mt-1">
                              <Award className="h-4 w-4 text-yellow-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Enhanced Features</h4>
                              <p className="text-sm text-gray-600">Get upgraded features included at no extra cost when you bundle.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-yellow-100 p-2 rounded-full mt-1">
                              <Package className="h-4 w-4 text-yellow-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">One Bill Convenience</h4>
                              <p className="text-sm text-gray-600">Single bill for all services makes managing your accounts simpler.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-yellow-100 p-2 rounded-full mt-1">
                              <Zap className="h-4 w-4 text-yellow-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Priority Customer Support</h4>
                              <p className="text-sm text-gray-600">Triple-play customers receive priority customer service assistance.</p>
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
                <h2 className="text-3xl font-bold mb-3">Optimum Equipment & Setup</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Learn about the equipment that powers your Optimum services.
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
                        <h4 className="font-medium">Optimum Smart WiFi Router</h4>
                        <p className="text-sm text-gray-600">Advanced wireless router</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>WiFi 6 technology on select plans</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Intelligent channel selection</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Parental controls via Optimum app</span>
                          </li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Included with Internet service</p>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h4 className="font-medium">Smart WiFi Extenders</h4>
                        <p className="text-sm text-gray-600">WiFi mesh extenders for whole-home coverage</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Extends WiFi to every corner</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Seamless roaming between devices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Easy self-installation</span>
                          </li>
                        </ul>
                        <p className="text-sm font-medium mt-2">$3/month per extender or $99 purchase</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* TV Equipment */}
                <Card className="overflow-hidden">
                  <div className="bg-orange-500 text-white p-4">
                    <h3 className="text-xl font-medium flex items-center gap-2">
                      <Tv className="h-5 w-5" />
                      TV Equipment
                    </h3>
                  </div>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="font-medium">Optimum Stream Box</h4>
                        <p className="text-sm text-gray-600">4K UHD capable set-top box</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Android TV OS with apps</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>4K UHD video support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Voice remote included</span>
                          </li>
                        </ul>
                        <p className="text-sm font-medium mt-2">First box included with TV service</p>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h4 className="font-medium">Cloud DVR</h4>
                        <p className="text-sm text-gray-600">Record and watch your shows anywhere</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Record multiple shows at once</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Watch recordings on any device</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Never miss your favorite shows</span>
                          </li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Storage varies by TV package</p>
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
                        <p className="text-sm text-gray-600">Expert technician setup</p>
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
                            <span>Device connection assistance</span>
                          </li>
                        </ul>
                        <p className="text-sm font-medium mt-2">Installation: $99 (often waived with promos)</p>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h4 className="font-medium">Self-Installation</h4>
                        <p className="text-sm text-gray-600">Set up on your own schedule</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Free self-install kit</span>
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
                <h2 className="text-3xl font-bold mb-3">Compare Optimum Bundles</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Save more when you bundle Optimum services together.
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
                        <div className="font-medium">Core Double Play</div>
                        <div className="text-sm text-gray-600">Internet + TV</div>
                      </td>
                      <td className="p-4">
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-1">
                            <Wifi className="h-3.5 w-3.5 text-blue-500" />
                            <span>Internet 300 (300 Mbps)</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Tv className="h-3.5 w-3.5 text-orange-500" />
                            <span>Core TV (125+ channels)</span>
                          </li>
                        </ul>
                      </td>
                      <td className="p-4">
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>Smart WiFi router included</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>Stream box included</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>Cloud DVR (20 hours)</span>
                          </li>
                        </ul>
                      </td>
                      <td className="p-4">
                        <div className="font-medium">$89.99/mo</div>
                        <div className="text-sm text-gray-600">for 12 mos + taxes</div>
                      </td>
                      <td className="p-4">
                        <Button size="sm">Select Bundle</Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-blue-50/30">
                      <td className="p-4">
                        <div className="font-medium">Select Double Play</div>
                        <div className="text-sm text-gray-600">Internet + TV</div>
                        <Badge className="mt-1 bg-yellow-500 text-black border-0 hover:bg-yellow-400">Best Value</Badge>
                      </td>
                      <td className="p-4">
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-1">
                            <Wifi className="h-3.5 w-3.5 text-blue-500" />
                            <span>Internet 500 (500 Mbps)</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Tv className="h-3.5 w-3.5 text-orange-500" />
                            <span>Select TV (220+ channels)</span>
                          </li>
                        </ul>
                      </td>
                      <td className="p-4">
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>Smart WiFi router included</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>Stream box included</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>Cloud DVR (50 hours)</span>
                          </li>
                        </ul>
                      </td>
                      <td className="p-4">
                        <div className="font-medium">$119.99/mo</div>
                        <div className="text-sm text-gray-600">for 12 mos + taxes</div>
                      </td>
                      <td className="p-4">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Select Bundle</Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">
                        <div className="font-medium">Premier Triple Play</div>
                        <div className="text-sm text-gray-600">Internet + TV + Phone</div>
                      </td>
                      <td className="p-4">
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-1">
                            <Wifi className="h-3.5 w-3.5 text-blue-500" />
                            <span>Gig Internet (1 Gbps)</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Tv className="h-3.5 w-3.5 text-orange-500" />
                            <span>Premier TV (290+ channels)</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Phone className="h-3.5 w-3.5 text-purple-500" />
                            <span>Optimum Voice</span>
                          </li>
                        </ul>
                      </td>
                      <td className="p-4">
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>Smart WiFi 6 router</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>HBO Max™ included</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            <span>Cloud DVR (100 hours)</span>
                          </li>
                        </ul>
                      </td>
                      <td className="p-4">
                        <div className="font-medium">$169.99/mo</div>
                        <div className="text-sm text-gray-600">for 12 mos + taxes</div>
                      </td>
                      <td className="p-4">
                        <Button size="sm">Select Bundle</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Why Bundle Optimum Services?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <DollarSign className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Save Money</h4>
                      <p className="text-sm text-gray-600">Save up to 40% compared to purchasing services separately.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <Package className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Better Service</h4>
                      <p className="text-sm text-gray-600">Enhanced features and equipment with bundled services.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <Shield className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">One-Bill Convenience</h4>
                      <p className="text-sm text-gray-600">Simplify your life with one bill for all your services.</p>
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
              Get answers to common questions about Optimum services.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardHeader className="py-4 px-6 flex flex-row items-start space-y-0">
                <div>
                  <CardTitle className="text-lg">Is Optimum available in my area?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-4">
                <p className="text-gray-600">
                  Optimum primarily serves parts of New York, New Jersey, Connecticut, and Pennsylvania. You can check service availability by entering your address in our availability checker or by calling our customer service team. As an authorized reseller, we can help determine if service is available at your address and provide the best options for your location.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="py-4 px-6 flex flex-row items-start space-y-0">
                <div>
                  <CardTitle className="text-lg">Does Optimum have contract options?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-4">
                <p className="text-gray-600">
                  Optimum offers both contract and no-contract options. While you can get service without a contract, signing a 12-month agreement often provides lower monthly rates and special promotions. Early termination fees may apply if you cancel before your contract term ends. We can help you determine which option is best for your needs and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="py-4 px-6 flex flex-row items-start space-y-0">
                <div>
                  <CardTitle className="text-lg">What equipment do I need for Optimum services?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-4">
                <p className="text-gray-600">
                  For Internet service, Optimum provides a Smart WiFi router. TV service requires an Optimum Stream box for each TV in your home. The first Stream box is included with your service, and additional boxes are available for a monthly fee. Phone service includes a voice modem if you don't have Internet service, or uses your existing Internet equipment if you bundle. Self-installation is available for most services, or you can opt for professional installation.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="py-4 px-6 flex flex-row items-start space-y-0">
                <div>
                  <CardTitle className="text-lg">How does Optimum compare to other providers?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-4">
                <p className="text-gray-600">
                  Optimum offers competitive pricing and high-speed internet compared to many competitors. Their internet plans feature symmetrical speeds in fiber-equipped areas, and their TV service includes more channels in base packages than many competitors. Optimum also stands out for offering no-contract options and bundling discounts that can save customers significantly. As an authorized reseller, we can provide special promotions that may not be available elsewhere.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="py-4 px-6 flex flex-row items-start space-y-0">
                <div>
                  <CardTitle className="text-lg">What is the difference between Optimum's internet plans?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-4">
                <p className="text-gray-600">
                  Optimum offers several internet speed tiers to match different household needs. The Internet 300 plan is suitable for small households with 5-7 devices for general browsing and streaming. Internet 500 works well for households with 8-10 devices with multiple simultaneous streams and downloads. The Gig Internet (1 Gbps) plan is ideal for larger households with 10+ devices, 4K streaming, work from home, and gaming. All plans include a router and unlimited data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl p-8 max-w-5xl mx-auto shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Optimum?</h2>
            <p className="text-white/90 mb-6 max-w-3xl mx-auto">
              As an authorized Optimum reseller, we can get you the best deals on Internet, TV, and Phone services. Contact us today to find the perfect plan for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="tel:8887886930" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call: 888-788-6930
                </a>
              </Button>
              <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
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

export default OptimumPage;