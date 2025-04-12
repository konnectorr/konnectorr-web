import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Check, Tv, Satellite, Award, Phone, Zap, Star, DollarSign, 
  X, Package, MapPin, Wifi, Radio, Globe, Heart
} from "lucide-react";
import { motion } from "framer-motion";
import { DishNetworkDealerLogo } from "../../components/DishNetworkDealerLogo";

const DishPage: React.FC = () => {
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
            <DishNetworkDealerLogo />
            <h1 className="text-4xl font-bold mb-4">Superior TV Entertainment</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience better TV entertainment with DISH's award-winning technology, nationwide availability, and customizable packages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full bg-gradient-to-br from-red-50 to-white border-red-100">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">DISH TV</CardTitle>
                      <CardDescription>Satellite television service</CardDescription>
                    </div>
                    <Satellite className="h-8 w-8 text-red-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>190+ channels available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Industry-leading Hopper DVR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>99.9% signal reliability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Smart HD DVR included</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700">
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
              <Card className="h-full bg-gradient-to-br from-blue-50 to-white border-blue-100">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">Sling TV</CardTitle>
                      <CardDescription>Internet streaming service</CardDescription>
                    </div>
                    <Tv className="h-8 w-8 text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No long-term contracts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Watch on your TV, phone or tablet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Flexible, affordable packages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Free DVR included</span>
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
                <h2 className="text-3xl font-bold mb-3">DISH TV Packages</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Choose from flexible entertainment packages tailored to your TV watching preferences.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* America's Top 120 Package */}
                <Card className="overflow-hidden">
                  <div className="bg-gray-100 p-4 border-b">
                    <h3 className="font-bold">America's Top 120</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$69.99</span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <p className="text-sm mt-1">for 24 months with 2-year agreement</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">190+ Channels</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Local channels included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>DISH Voice Remote with Google Assistant</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>ESPN, Disney Channel, TNT, USA</span>
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

                {/* America's Top 120+ Package */}
                <Card className="overflow-hidden">
                  <div className="bg-gray-100 p-4 border-b">
                    <h3 className="font-bold">America's Top 120+</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$84.99</span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <p className="text-sm mt-1">for 24 months with 2-year agreement</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">190+ Channels</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Everything in America's Top 120</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Regional Sports Networks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>NFL Network, SEC Network, Big Ten Network</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>More sports programming</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Select Plan</Button>
                  </CardFooter>
                </Card>

                {/* America's Top 200 Package */}
                <Card className="overflow-hidden">
                  <div className="bg-gray-100 p-4 border-b">
                    <h3 className="font-bold">America's Top 200</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$94.99</span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <p className="text-sm mt-1">for 24 months with 2-year agreement</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">240+ Channels</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Everything in America's Top 120+</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Additional sports channels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>National Geographic, Cooking Channel</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Family entertainment and lifestyle channels</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Select Plan</Button>
                  </CardFooter>
                </Card>

                {/* America's Top 250 Package */}
                <Card className="overflow-hidden border-red-200 bg-gradient-to-b from-red-50/50 to-white">
                  <div className="bg-red-600 text-white p-4 border-b">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">America's Top 250</h3>
                      <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Best Value</Badge>
                    </div>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$104.99</span>
                      <span className="text-sm text-gray-200">/mo</span>
                    </div>
                    <p className="text-sm mt-1 text-gray-200">for 24 months with 2-year agreement</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">290+ Channels</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Everything in America's Top 200</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>STARZ® ENCORE movie channels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Premium movie and entertainment channels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Additional sports, movie and entertainment</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Select Plan</Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="mt-12 space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-3">Sling TV Packages</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Flexible, affordable streaming TV with no long-term contracts required.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {/* Sling Orange */}
                  <Card className="overflow-hidden">
                    <div className="bg-orange-600 text-white p-4 border-b">
                      <h3 className="font-bold">Sling Orange</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$40</span>
                        <span className="text-sm text-gray-200">/mo</span>
                      </div>
                      <p className="text-sm mt-1 text-gray-200">No long-term contract</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-orange-50 text-orange-700 hover:bg-orange-50">30+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>ESPN, Disney Channel, AMC</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Stream on 1 device at a time</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>50 hours of DVR storage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Great for sports & families</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">Select Plan</Button>
                    </CardFooter>
                  </Card>

                  {/* Sling Blue */}
                  <Card className="overflow-hidden">
                    <div className="bg-blue-600 text-white p-4 border-b">
                      <h3 className="font-bold">Sling Blue</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$40</span>
                        <span className="text-sm text-gray-200">/mo</span>
                      </div>
                      <p className="text-sm mt-1 text-gray-200">No long-term contract</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">40+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Fox, NBC, USA, FX</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Stream on 3 devices at once</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>50 hours of DVR storage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Great for news & entertainment</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Select Plan</Button>
                    </CardFooter>
                  </Card>

                  {/* Sling Orange & Blue */}
                  <Card className="overflow-hidden border-blue-200 bg-gradient-to-b from-purple-50/50 to-white">
                    <div className="bg-purple-600 text-white p-4 border-b">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold">Orange & Blue</h3>
                        <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Best Value</Badge>
                      </div>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$55</span>
                        <span className="text-sm text-gray-200">/mo</span>
                      </div>
                      <p className="text-sm mt-1 text-gray-200">No long-term contract</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">50+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>All Sling Orange + Blue channels</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Stream on 4 devices at once</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>50 hours of DVR storage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Complete entertainment experience</span>
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

              <div className="p-6 bg-red-50 rounded-lg border border-red-100 mt-10">
                <h3 className="text-lg font-bold mb-2">Important Information About DISH Packages</h3>
                <p className="text-sm text-gray-600 mb-4">
                  All offers require credit qualification, 24-month commitment with early termination fee, and eAutoPay.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                  <div>
                    <h4 className="font-semibold mb-2">For DISH TV:</h4>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>Prices increase in second year</li>
                      <li>Monthly fees for receivers beyond the first ($5-$7/mo.)</li>
                      <li>Regional Sports Fee may apply up to $15/mo. (where applicable)</li>
                      <li>Hopper DVR fees may apply based on model</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">For Sling TV:</h4>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>No long-term contracts</li>
                      <li>Cancel online anytime</li>
                      <li>Compatible device and high-speed internet required</li>
                      <li>Prices subject to change</li>
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
                  Discover why millions of customers choose DISH for their home entertainment needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <Card className="bg-gradient-to-b from-red-50/50 to-white border-red-100">
                  <CardHeader className="pb-2">
                    <div className="bg-red-100 p-3 rounded-full w-fit mb-2">
                      <Tv className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle>Award-Winning DVR Technology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Record up to 16 shows at once and store up to 2,000 hours of content with the DISH Hopper 3 DVR. 
                      Never worry about recording conflicts again.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 2 */}
                <Card className="bg-gradient-to-b from-red-50/50 to-white border-red-100">
                  <CardHeader className="pb-2">
                    <div className="bg-red-100 p-3 rounded-full w-fit mb-2">
                      <DollarSign className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle>Price Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      DISH offers a 2-year price guarantee, so the price you sign up for is the price you'll pay for your entire 
                      contract period. No surprise increases.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 3 */}
                <Card className="bg-gradient-to-b from-red-50/50 to-white border-red-100">
                  <CardHeader className="pb-2">
                    <div className="bg-red-100 p-3 rounded-full w-fit mb-2">
                      <Package className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle>Free Professional Installation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Get expert installation by certified technicians at no additional cost. They'll optimize your signal 
                      and make sure everything is working perfectly.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 4 */}
                <Card className="bg-gradient-to-b from-red-50/50 to-white border-red-100">
                  <CardHeader className="pb-2">
                    <div className="bg-red-100 p-3 rounded-full w-fit mb-2">
                      <Globe className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle>Nation's Best Signal Reliability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      DISH's advanced satellite technology delivers 99.9% signal reliability, so you can enjoy uninterrupted 
                      entertainment even during most weather conditions.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 5 */}
                <Card className="bg-gradient-to-b from-red-50/50 to-white border-red-100">
                  <CardHeader className="pb-2">
                    <div className="bg-red-100 p-3 rounded-full w-fit mb-2">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle>Nationwide Availability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Available virtually anywhere in the United States with a clear view of the southern sky. Get DISH even in 
                      rural areas where cable isn't available.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 6 */}
                <Card className="bg-gradient-to-b from-red-50/50 to-white border-red-100">
                  <CardHeader className="pb-2">
                    <div className="bg-red-100 p-3 rounded-full w-fit mb-2">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle>Customer Satisfaction Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Consistently rated #1 in customer satisfaction among satellite and cable providers. Dedicated 24/7 customer 
                      support for any issues that may arise.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-3">Sling TV Benefits</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    The flexibility of streaming with customizable packages.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <h3 className="text-xl font-bold mb-4 text-blue-800">Watch Anywhere</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Multi-device streaming</p>
                          <p className="text-sm text-gray-600">Watch on your TV, phone, tablet, and computer simultaneously.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">No equipment needed</p>
                          <p className="text-sm text-gray-600">Stream through your favorite devices without requiring a satellite dish.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Take it with you</p>
                          <p className="text-sm text-gray-600">Watch your favorite content even when you're away from home.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <h3 className="text-xl font-bold mb-4 text-blue-800">Enhanced Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Cloud DVR</p>
                          <p className="text-sm text-gray-600">Store your favorite shows to watch later with 50 hours of included DVR storage.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">No long-term contracts</p>
                          <p className="text-sm text-gray-600">Month-to-month service with the freedom to cancel anytime.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Customizable extras</p>
                          <p className="text-sm text-gray-600">Add channel packages like Sports Extra, Kids Extra, or News Extra for just $11 each.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild size="lg" className="gap-2 bg-red-600 hover:bg-red-700">
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
                <h2 className="text-3xl font-bold mb-3">DISH Equipment & Installation</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Cutting-edge technology to enhance your viewing experience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* DISH TV Equipment */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Satellite className="h-5 w-5 text-red-600" />
                    <span>DISH TV Equipment</span>
                  </h3>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Hopper 3 Smart DVR</CardTitle>
                      <CardDescription>The ultimate entertainment hub</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Record up to 16 shows at once</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Store up to 2,000 hours of SD programming</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Watch in 4K Ultra HD (with compatible TV)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Built-in streaming apps like Netflix</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Voice Remote with Google Assistant</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Joey Receivers</CardTitle>
                      <CardDescription>Connect additional TVs to your system</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Watch different channels on different TVs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Access to all recorded content from your Hopper</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Available in wired or wireless options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>4K Joey available for 4K TVs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Professional Installation</CardTitle>
                      <CardDescription>Free expert setup</CardDescription>
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
                
                {/* Sling TV Equipment */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Tv className="h-5 w-5 text-blue-600" />
                    <span>Sling TV Compatible Devices</span>
                  </h3>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Streaming Devices</CardTitle>
                      <CardDescription>Watch on your favorite devices</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Roku devices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Amazon Fire TV and Fire Stick</span>
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
                          <span>AirTV Player</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Smart TVs</CardTitle>
                      <CardDescription>No additional devices needed</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Samsung Smart TVs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>LG Smart TVs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Android TVs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Vizio SmartCast TVs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Mobile Devices</CardTitle>
                      <CardDescription>Watch on the go</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>iOS phones and tablets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Android phones and tablets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Web browsers on laptops and computers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Xbox game consoles</span>
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
                    <h4 className="font-semibold mb-2">DISH TV Requirements:</h4>
                    <ul className="space-y-1 list-disc pl-5 text-sm text-gray-600">
                      <li>Clear view of the southern sky for dish installation</li>
                      <li>HDMI-compatible TV for HD programming</li>
                      <li>4K Ultra HD TV for 4K programming</li>
                      <li>Internet connection recommended for on-demand and streaming features</li>
                      <li>Each connected TV requires a Joey receiver</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Sling TV Requirements:</h4>
                    <ul className="space-y-1 list-disc pl-5 text-sm text-gray-600">
                      <li>High-speed internet connection (5+ Mbps recommended)</li>
                      <li>Compatible streaming device, smart TV, or mobile device</li>
                      <li>25+ Mbps recommended for multiple devices</li>
                      <li>Mobile devices require iOS 11+ or Android 5.0+</li>
                      <li>No special equipment needed beyond your devices</li>
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
                <h2 className="text-3xl font-bold mb-3">DISH vs. Competitors</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  See how DISH stacks up against other TV service providers.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-4 px-6 text-left border w-1/5">Features</th>
                      <th className="py-4 px-6 text-center border w-1/5 bg-red-50">
                        <div className="flex flex-col items-center">
                          <Satellite className="h-6 w-6 text-red-600 mb-1" />
                          <span className="font-bold">DISH</span>
                        </div>
                      </th>
                      <th className="py-4 px-6 text-center border w-1/5">
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
                          <span className="font-bold">Streaming</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-6 border font-medium">2-Year Price Guarantee</td>
                      <td className="py-3 px-6 border text-center bg-red-50">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Channel Count</td>
                      <td className="py-3 px-6 border text-center bg-red-50">290+ (Top 250)</td>
                      <td className="py-3 px-6 border text-center">330+ (Premier)</td>
                      <td className="py-3 px-6 border text-center">150-250+</td>
                      <td className="py-3 px-6 border text-center">30-85+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">DVR Capacity</td>
                      <td className="py-3 px-6 border text-center bg-red-50">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                        </div>
                        <span className="text-sm">2,000 hours (SD)</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                        <span className="text-sm">200+ hours (HD)</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                        <span className="text-sm">50-500 Hours</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                        <span className="text-sm">Limited Cloud DVR</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Simultaneous Recordings</td>
                      <td className="py-3 px-6 border text-center bg-red-50">Up to 16 Shows</td>
                      <td className="py-3 px-6 border text-center">Up to 5 Shows</td>
                      <td className="py-3 px-6 border text-center">2-6 Shows</td>
                      <td className="py-3 px-6 border text-center">Unlimited (Cloud)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">4K Content</td>
                      <td className="py-3 px-6 border text-center bg-red-50">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                        </div>
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
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Contract Length</td>
                      <td className="py-3 px-6 border text-center bg-red-50">2 Years</td>
                      <td className="py-3 px-6 border text-center">2 Years</td>
                      <td className="py-3 px-6 border text-center">1-2 Years</td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-green-600">Month-to-Month</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Equipment</td>
                      <td className="py-3 px-6 border text-center bg-red-50">
                        <span>Hopper 3 DVR</span><br />
                        <span className="text-sm">16 simultaneous recordings</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span>Genie HD DVR</span><br />
                        <span className="text-sm">5 simultaneous recordings</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span>Varies by provider</span><br />
                        <span className="text-sm">Limited capabilities</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span>No dedicated equipment</span><br />
                        <span className="text-sm">Use your existing devices</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Installation Fee</td>
                      <td className="py-3 px-6 border text-center bg-red-50">
                        <span className="text-green-600">Free</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-green-600">Free</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-amber-600">$50-$100</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-green-600">Self-Install</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Availability</td>
                      <td className="py-3 px-6 border text-center bg-red-50">
                        <span className="text-green-600">Nationwide</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-green-600">Nationwide</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-amber-600">Regional</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-green-600">Nationwide</span><br />
                        <span className="text-xs">(Internet required)</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border border-red-100 mt-10">
                <h3 className="text-xl font-bold mb-3 text-red-800">Why Choose DISH?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-red-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">2-Year Price Guarantee</p>
                        <p className="text-sm text-gray-600">Your price won't change for two full years - no surprises.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-red-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Industry-Leading DVR</p>
                        <p className="text-sm text-gray-600">Hopper 3 lets you record 16 shows at once and store 2,000 hours.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-red-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Free Professional Installation</p>
                        <p className="text-sm text-gray-600">Expert setup at no additional cost.</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-red-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">More Flexibility</p>
                        <p className="text-sm text-gray-600">Choose from satellite TV or streaming service options to fit your lifestyle.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-red-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Award-Winning Customer Service</p>
                        <p className="text-sm text-gray-600">Consistently rated #1 in customer satisfaction.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-red-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Smart Home Integration</p>
                        <p className="text-sm text-gray-600">Voice control with Google Assistant and Amazon Alexa compatibility.</p>
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
                <Button asChild size="lg" className="gap-2 bg-red-600 hover:bg-red-700">
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
              Join millions of satisfied DISH customers across the country.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <Card className="bg-gray-50 border-t-4 border-t-red-500">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="italic text-gray-600 mb-4">
                  "The Hopper 3 DVR is absolutely amazing. I can record all my favorite shows at once and never worry about conflicts. 
                  Plus, the 2-year price guarantee means no surprise bill increases."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center text-red-800 font-bold mr-3">R</div>
                  <div>
                    <p className="font-medium">Robert M.</p>
                    <p className="text-sm text-gray-500">DISH Customer, 3 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card className="bg-gray-50 border-t-4 border-t-red-500">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="italic text-gray-600 mb-4">
                  "We live in a rural area where cable isn't available. DISH gives us all the channels we want with crystal clear picture quality. 
                  The installation was free and the technician was extremely professional."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center text-red-800 font-bold mr-3">J</div>
                  <div>
                    <p className="font-medium">Jennifer K.</p>
                    <p className="text-sm text-gray-500">DISH Customer, 2 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 3 */}
            <Card className="bg-gray-50 border-t-4 border-t-red-500">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
                <p className="italic text-gray-600 mb-4">
                  "I switched from cable to Sling TV and it's been a great experience. Much more affordable and I love being able to 
                  watch on my phone when I'm traveling. The flexibility to change packages anytime is perfect."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center text-red-800 font-bold mr-3">T</div>
                  <div>
                    <p className="font-medium">Thomas L.</p>
                    <p className="text-sm text-gray-500">Sling TV Customer, 1 year</p>
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
              <h3 className="font-bold text-lg mb-2">What's the difference between DISH TV and Sling TV?</h3>
              <p className="text-gray-600">
                DISH TV is a traditional satellite television service that requires professional installation of a satellite dish. 
                It offers more channels (up to 290+) and advanced DVR features. Sling TV is a streaming service that delivers TV over the 
                internet to your devices with no satellite dish required. It offers more flexibility with no contracts but fewer channels.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">Is there a contract with DISH?</h3>
              <p className="text-gray-600">
                DISH TV requires a 2-year agreement for new customers. This comes with a 2-year price guarantee, so your price won't 
                increase during your contract period. Sling TV has no long-term contracts and is available on a month-to-month basis.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">What is the Hopper 3 DVR?</h3>
              <p className="text-gray-600">
                The Hopper 3 is DISH's most advanced DVR system. It allows you to record up to 16 shows at once, store up to 2,000 hours 
                of SD programming (or 500 hours of HD), and includes features like built-in streaming apps, voice remote, and 4K compatibility.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">Can I watch DISH or Sling TV on multiple TVs?</h3>
              <p className="text-gray-600">
                For DISH TV, you can connect multiple TVs using Joey receivers. Each additional TV will require its own Joey, which has a 
                small monthly fee. With Sling TV, you can stream on multiple devices simultaneously (1 stream with Orange, 3 streams with Blue, 
                or 4 streams with Orange + Blue).
              </p>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">Is internet required for DISH TV?</h3>
              <p className="text-gray-600">
                An internet connection is not required for basic DISH TV service, but it is recommended to access on-demand content, 
                streaming apps, and certain interactive features. Sling TV does require a high-speed internet connection to stream content.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-12 px-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-3">Ready to Experience Better TV?</h2>
            <p className="max-w-3xl mx-auto mb-8">
              Join millions of satisfied customers and discover why DISH is America's best value in television entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <a href="tel:8887886930">
                  <Phone className="h-4 w-4" />
                  Call: 888-788-6930
                </a>
              </Button>
              <Button asChild size="lg" variant="default" className="bg-white text-red-600 hover:bg-gray-100 gap-2">
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

export default DishPage;