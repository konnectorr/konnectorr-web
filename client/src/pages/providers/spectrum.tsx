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
import { SpectrumDealerLogo } from "../../components/SpectrumDealerLogo";

const SpectrumPage: React.FC = () => {
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
            <SpectrumDealerLogo />
            <h1 className="text-4xl font-bold mb-4">High-Speed Internet & TV Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get lightning-fast internet, crystal-clear TV, and reliable home phone services from one of America's leading providers.
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
                      <CardTitle className="text-2xl">Spectrum Internet</CardTitle>
                      <CardDescription>High-speed broadband</CardDescription>
                    </div>
                    <Wifi className="h-8 w-8 text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Starting at 300 Mbps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No data caps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Free modem included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Free antivirus software</span>
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
                      <CardTitle className="text-2xl">Spectrum TV</CardTitle>
                      <CardDescription>HD entertainment service</CardDescription>
                    </div>
                    <Tv className="h-8 w-8 text-purple-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>125+ HD channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Free Spectrum TV app</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Access to on-demand content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>DVR service available</span>
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
                      <CardTitle className="text-2xl">Spectrum Mobile</CardTitle>
                      <CardDescription>Flexible wireless service</CardDescription>
                    </div>
                    <Smartphone className="h-8 w-8 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unlimited or By-the-Gig plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Nationwide 5G network</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No contracts or hidden fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Add up to 5 lines</span>
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
              <a href="tel:8885698194">
                <Phone className="h-4 w-4" />
                Call: (888) 569-8194
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
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="packages">Plans & Pricing</TabsTrigger>
            <TabsTrigger value="features">Features & Benefits</TabsTrigger>
            <TabsTrigger value="equipment">Equipment & Setup</TabsTrigger>
            <TabsTrigger value="compare">Compare Plans</TabsTrigger>
            <TabsTrigger value="contact">Provider Contact</TabsTrigger>
          </TabsList>

          {/* Packages Tab Content */}
          <TabsContent value="packages">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Spectrum Internet Plans</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  High-speed internet with no data caps and free security software.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Internet Plan 1 */}
                <Card className="overflow-hidden">
                  <div className="bg-gray-100 p-4 border-b">
                    <h3 className="font-bold">Internet 300</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$49.99</span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <p className="text-sm mt-1">for 12 mos. + taxes and fees</p>
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
                          <span>Upload speeds up to 10 Mbps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Free modem included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>No data caps or contracts</span>
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
                      <span className="text-3xl font-bold">$69.99</span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <p className="text-sm mt-1">for 12 mos. + taxes and fees</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">500 Mbps</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Download speeds up to 500 Mbps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Upload speeds up to 20 Mbps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Free modem included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>No data caps or contracts</span>
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
                      <h3 className="font-bold">Internet Gig</h3>
                      <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Best Value</Badge>
                    </div>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$89.99</span>
                      <span className="text-sm text-gray-200">/mo</span>
                    </div>
                    <p className="text-sm mt-1 text-gray-200">for 12 mos. + taxes and fees</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">1 Gig</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Download speeds up to 1 Gbps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Upload speeds up to 35 Mbps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Free modem and WiFi router</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Ideal for large households</span>
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
                  <h2 className="text-3xl font-bold mb-3">Spectrum TV Packages</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Crystal-clear HD entertainment with access to popular channels and on-demand content.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {/* TV Plan 1 */}
                  <Card className="overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold">TV Select</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$59.99</span>
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
                            <span>HD channels at no extra cost</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Access to 10,000+ On Demand titles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Free Spectrum TV app</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500">No premium channels included</span>
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
                        <h3 className="font-bold">TV Silver</h3>
                        <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Popular</Badge>
                      </div>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$89.99</span>
                        <span className="text-sm text-gray-200">/mo</span>
                      </div>
                      <p className="text-sm mt-1 text-gray-200">for 12 mos. + taxes and fees</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">175+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Everything in TV Select</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>HBO® and SHOWTIME® included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>NFL Network and more sports channels</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Enhanced DVR available</span>
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
                      <h3 className="font-bold">TV Gold</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$109.99</span>
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
                            <span>Everything in TV Silver</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>STARZ®, STARZ ENCORE®, and EPIX® included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>NFL RedZone and more sports channels</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Enhanced DVR included</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Select Plan</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <div className="mt-12 space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-3">Spectrum Mobile Plans</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Flexible mobile plans with nationwide coverage on America's most reliable 5G network.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Mobile Plan 1 */}
                  <Card className="overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold">By the Gig</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$14</span>
                        <span className="text-sm text-gray-600">/GB</span>
                      </div>
                      <p className="text-sm mt-1">per line + taxes and fees</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Pay only for data you use</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Share data across all lines</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Unlimited talk and text</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>No contracts or hidden fees</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Nationwide 5G access</span>
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
                        <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Most Popular</Badge>
                      </div>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$45</span>
                        <span className="text-sm text-gray-200">/mo</span>
                      </div>
                      <p className="text-sm mt-1 text-gray-200">per line + taxes and fees</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Unlimited data, talk, and text</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>HD video streaming</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Hotspot included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>No contracts or hidden fees</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Nationwide 5G access</span>
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

              <div className="p-6 bg-blue-50 rounded-lg border border-blue-100 mt-10">
                <h3 className="text-lg font-bold mb-2">Important Information About Spectrum Plans</h3>
                <p className="text-sm text-gray-600 mb-4">
                  All offers require credit approval and are subject to change. Taxes, fees, and surcharges are additional.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                  <div>
                    <h4 className="font-semibold mb-2">For Internet & TV:</h4>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>Regular rates apply after promotional period</li>
                      <li>Installation and equipment fees may apply</li>
                      <li>Services subject to availability</li>
                      <li>Speeds may vary by location</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">For Mobile:</h4>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>Requires Spectrum Internet subscription</li>
                      <li>Taxes and fees extra</li>
                      <li>Data speeds may be reduced during periods of network congestion</li>
                      <li>Coverage not available everywhere</li>
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
                  Discover why millions of customers choose Spectrum for their home and mobile services.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <Card className="bg-gradient-to-b from-blue-50/50 to-white border-blue-100">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-2">
                      <Wifi className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>High-Speed Internet</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Experience lightning-fast internet speeds starting at 300 Mbps, with no data caps or speed throttling.
                      Perfect for streaming, gaming, working from home, and supporting multiple devices.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 2 */}
                <Card className="bg-gradient-to-b from-blue-50/50 to-white border-blue-100">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-2">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Security Suite</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Free advanced security software to protect your devices from malware, spyware, and other online threats.
                      Keep your personal information safe with anti-virus, firewall protection, and identity theft prevention.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 3 */}
                <Card className="bg-gradient-to-b from-blue-50/50 to-white border-blue-100">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-2">
                      <Tv className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>HD Channels & On Demand</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Enjoy crystal-clear HD channels at no additional cost, plus access to thousands of On Demand titles.
                      Watch your favorite shows, movies, and sports whenever you want with an easy-to-use interface.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 4 */}
                <Card className="bg-gradient-to-b from-blue-50/50 to-white border-blue-100">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-2">
                      <Smartphone className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Spectrum TV App</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Take your entertainment on the go with the free Spectrum TV app.
                      Stream live TV, browse the channel guide, manage your DVR, and watch On Demand content from anywhere.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 5 */}
                <Card className="bg-gradient-to-b from-blue-50/50 to-white border-blue-100">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-2">
                      <Cable className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Free Equipment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Get a free modem with Spectrum Internet plans and free HD set-top boxes for TV service.
                      No expensive equipment rental fees, helping you save hundreds of dollars per year.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 6 */}
                <Card className="bg-gradient-to-b from-blue-50/50 to-white border-blue-100">
                  <CardHeader className="pb-2">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-2">
                      <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Nationwide WiFi Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Connect to Spectrum WiFi hotspots across the nation at no additional cost.
                      Save on mobile data while staying connected to fast, reliable WiFi when away from home.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-3">Spectrum Mobile Benefits</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    The perfect complement to your home internet service.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                    <h3 className="text-xl font-bold mb-4 text-green-800">Flexible Plans</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">By the Gig or Unlimited</p>
                          <p className="text-sm text-gray-600">Choose the plan that fits your usage patterns and budget.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">No contracts</p>
                          <p className="text-sm text-gray-600">Freedom to change plans or cancel anytime without penalties.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Family friendly</p>
                          <p className="text-sm text-gray-600">Add up to 5 lines and mix-and-match plans to save money.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                    <h3 className="text-xl font-bold mb-4 text-green-800">Network & Coverage</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Nationwide 5G coverage</p>
                          <p className="text-sm text-gray-600">Access to America's largest and most reliable 5G network.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">WiFi advantage</p>
                          <p className="text-sm text-gray-600">Automatically connect to secure WiFi hotspots to save data.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Mobile hotspot</p>
                          <p className="text-sm text-gray-600">Share your connection with laptops, tablets, and other devices.</p>
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

          {/* Equipment & Setup Tab */}
          <TabsContent value="equipment">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-3">Spectrum Equipment & Setup</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Modern, reliable equipment for a seamless home entertainment experience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Internet Equipment */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-blue-600" />
                    <span>Internet Equipment</span>
                  </h3>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Spectrum Internet Modem</CardTitle>
                      <CardDescription>Included with service</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>DOCSIS 3.1 technology</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Compatible with all internet plans</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Optimized for high-speed performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Easy setup with self-installation option</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Advanced WiFi Router</CardTitle>
                      <CardDescription>Optional add-on</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Dual-band WiFi 6 technology</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Extended range coverage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Support for 25+ connected devices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Advanced security features</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">WiFi Pods</CardTitle>
                      <CardDescription>Extended coverage solution</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Eliminate WiFi dead zones</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Perfect for larger homes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Simple plug-and-play setup</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Seamless mesh WiFi system</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* TV Equipment */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Tv className="h-5 w-5 text-purple-600" />
                    <span>TV Equipment</span>
                  </h3>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Spectrum Receiver</CardTitle>
                      <CardDescription>HD set-top box</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Access to all your channels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>HD picture quality</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Interactive guide included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Access to On Demand library</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Spectrum DVR</CardTitle>
                      <CardDescription>Never miss your favorite shows</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Record multiple shows at once</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Store up to 100 hours of HD content</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Pause, rewind, and fast-forward live TV</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Enhanced DVR service available for more storage</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Spectrum TV App</CardTitle>
                      <CardDescription>Your TV on any device</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Stream live TV channels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Access On Demand content</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Available on smartphones, tablets, and computers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Use as a remote control for your TV</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border mt-8">
                <h3 className="text-lg font-bold mb-2">Installation Options</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Self-Installation:</h4>
                    <ul className="space-y-1 list-disc pl-5 text-sm text-gray-600">
                      <li>Free self-installation kit</li>
                      <li>Easy-to-follow setup instructions</li>
                      <li>Online support available</li>
                      <li>Get connected in as little as 30 minutes</li>
                      <li>Available for most residences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Professional Installation:</h4>
                    <ul className="space-y-1 list-disc pl-5 text-sm text-gray-600">
                      <li>Expert technician setup</li>
                      <li>Optimal equipment placement</li>
                      <li>Complete system testing</li>
                      <li>In-home tutorial on using your services</li>
                      <li>Required for some complex installations</li>
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
                <h2 className="text-3xl font-bold mb-3">Spectrum vs. Competitors</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  See how Spectrum's services compare to other major providers.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-4 px-6 text-left border w-1/5">Features</th>
                      <th className="py-4 px-6 text-center border w-1/5 bg-blue-50">
                        <div className="flex flex-col items-center">
                          <Wifi className="h-6 w-6 text-blue-600 mb-1" />
                          <span className="font-bold">Spectrum</span>
                        </div>
                      </th>
                      <th className="py-4 px-6 text-center border w-1/5">
                        <div className="flex flex-col items-center">
                          <Wifi className="h-6 w-6 text-gray-600 mb-1" />
                          <span className="font-bold">Cable Provider</span>
                        </div>
                      </th>
                      <th className="py-4 px-6 text-center border w-1/5">
                        <div className="flex flex-col items-center">
                          <Wifi className="h-6 w-6 text-gray-600 mb-1" />
                          <span className="font-bold">Fiber Provider</span>
                        </div>
                      </th>
                      <th className="py-4 px-6 text-center border w-1/5">
                        <div className="flex flex-col items-center">
                          <Satellite className="h-6 w-6 text-gray-600 mb-1" />
                          <span className="font-bold">Satellite Provider</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Starting Internet Speed</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">300 Mbps</td>
                      <td className="py-3 px-6 border text-center">100 Mbps</td>
                      <td className="py-3 px-6 border text-center">500 Mbps</td>
                      <td className="py-3 px-6 border text-center">25 Mbps</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Data Caps</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">
                        <span className="text-green-600">No Data Caps</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-red-600">1TB Limit</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-green-600">No Data Caps</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-red-600">Limited Data</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Equipment Fees</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                        </div>
                        <span className="text-sm">Free Modem</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                          <Star className="h-5 w-5 text-gray-300" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                        <span className="text-sm">$10-14/mo for equipment</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                        <span className="text-sm">Free router with some plans</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <div className="flex justify-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-gray-300" />
                          <Star className="h-5 w-5 text-gray-300" />
                          <Star className="h-5 w-5 text-gray-300" />
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                        <span className="text-sm">$15/mo equipment fee</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Contract Requirements</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">No Contract</td>
                      <td className="py-3 px-6 border text-center">1-2 Year Contract</td>
                      <td className="py-3 px-6 border text-center">No Contract</td>
                      <td className="py-3 px-6 border text-center">2 Year Contract</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">TV Channel Count</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">125-200+</td>
                      <td className="py-3 px-6 border text-center">150-220+</td>
                      <td className="py-3 px-6 border text-center">190-290+</td>
                      <td className="py-3 px-6 border text-center">190-330+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Mobile Services</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">WiFi Hotspots</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">
                        <span className="text-green-600">Nationwide Access</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-amber-600">Limited Hotspots</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-red-600">No Hotspots</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span className="text-red-600">No Hotspots</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border font-medium">Availability</td>
                      <td className="py-3 px-6 border text-center bg-blue-50">
                        <span>41 States</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span>Regional</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span>Limited Areas</span>
                      </td>
                      <td className="py-3 px-6 border text-center">
                        <span>Nationwide</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-10">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Why Choose Spectrum?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">No Data Caps</p>
                        <p className="text-sm text-gray-600">Stream, game, and download as much as you want with no overage charges.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">No Contracts</p>
                        <p className="text-sm text-gray-600">Enjoy flexibility with no long-term commitments or early termination fees.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Free Equipment</p>
                        <p className="text-sm text-gray-600">Save money with included modems and no hidden equipment fees.</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Bundle Savings</p>
                        <p className="text-sm text-gray-600">Save more when you combine Internet, TV, and Mobile services.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">24/7 Customer Support</p>
                        <p className="text-sm text-gray-600">Get help whenever you need it via phone, chat, or in-store.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">30-Day Money-Back Guarantee</p>
                        <p className="text-sm text-gray-600">Try Spectrum risk-free with our satisfaction guarantee.</p>
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

          {/* Provider Contact Tab Content */}
          <TabsContent value="contact">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Contact Spectrum</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Reach out to our dedicated support team for assistance with plans, technical issues, or any questions you may have.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Phone Contact */}
                <Card className="overflow-hidden bg-gradient-to-br from-blue-50 to-white border-blue-100">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">Call Directly</CardTitle>
                        <CardDescription>Speak with a representative</CardDescription>
                      </div>
                      <Phone className="h-8 w-8 text-blue-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-gray-600">Our customer service team is available 24/7 to assist you with any questions or concerns.</p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                      <a href="tel:8885698194" className="text-xl font-bold text-blue-700 hover:text-blue-800 flex items-center justify-center gap-2 transition-colors">
                        <Phone className="h-5 w-5" />
                        (888) 569-8194
                      </a>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <a href="tel:8885698194" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Email Contact */}
                <Card className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">Email Support</CardTitle>
                        <CardDescription>Get written assistance</CardDescription>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-gray-600">Send us an email and we'll respond within 24 hours with the information you need.</p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                      <p className="text-md font-medium text-gray-700">support@spectrum.com</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <a href="mailto:support@spectrum.com" className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        Send Email
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Live Chat */}
                <Card className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">Live Chat</CardTitle>
                        <CardDescription>Chat with a representative</CardDescription>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-gray-600">Connect with our support team through live chat for immediate assistance.</p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                      <p className="text-md font-medium text-gray-700">Available 8AM - 10PM ET</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="#" className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        Start Chat
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="text-xl font-bold mb-4 text-center">Prefer to Talk? Call Us Now</h3>
                <div className="flex justify-center">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 gap-2">
                    <a href="tel:8885698194" className="text-xl">
                      <Phone className="h-5 w-5" />
                      (888) 569-8194
                    </a>
                  </Button>
                </div>
                <p className="text-center text-sm mt-4 text-gray-600">
                  Our customer service representatives are available 24/7 to assist you with any questions or concerns.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Customer Reviews Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join millions of satisfied Spectrum customers across the country.
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
                  "I was skeptical about switching from my previous provider, but the speed and reliability of Spectrum
                  Internet has been amazing. I love not having to worry about data caps."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold mr-3">A</div>
                  <div>
                    <p className="font-medium">Amanda J.</p>
                    <p className="text-sm text-gray-500">Spectrum Internet Customer, 2 years</p>
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
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
                <p className="italic text-gray-600 mb-4">
                  "I use Spectrum for both TV and Internet and the bundle savings are great. The TV app is convenient
                  when I'm traveling, and I love being able to stream my shows from anywhere."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold mr-3">D</div>
                  <div>
                    <p className="font-medium">David T.</p>
                    <p className="text-sm text-gray-500">Spectrum TV & Internet Customer, 3 years</p>
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
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="italic text-gray-600 mb-4">
                  "Switching to Spectrum Mobile saved our family over $50 a month compared to our previous carrier.
                  The coverage is excellent and I love being able to manage all our services in one place."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold mr-3">M</div>
                  <div>
                    <p className="font-medium">Michelle P.</p>
                    <p className="text-sm text-gray-500">Spectrum Triple Play + Mobile Customer, 1 year</p>
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
              <h3 className="font-bold text-lg mb-2">Is Spectrum available in my area?</h3>
              <p className="text-gray-600">
                Spectrum services are available in 41 states across the U.S. Use our online availability checker to confirm
                if Spectrum is available at your address. Spectrum has one of the largest coverage areas for a cable provider.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">Are there any data caps with Spectrum Internet?</h3>
              <p className="text-gray-600">
                No, Spectrum Internet has no data caps or usage limits. You can browse, stream, download, and game as much as you want
                without ever worrying about overage charges or speed throttling.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">Do I need to sign a long-term contract?</h3>
              <p className="text-gray-600">
                No, Spectrum does not require long-term contracts for any of its services. All plans are offered on a month-to-month
                basis, giving you the flexibility to change or cancel your service at any time without early termination fees.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">Can I use my own modem and router with Spectrum?</h3>
              <p className="text-gray-600">
                Spectrum provides a free modem with all Internet plans. You can use your own WiFi router or rent an advanced
                router from Spectrum. If you choose to use your own equipment, it must be compatible with Spectrum's network.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-bold text-lg mb-2">What channels are included with Spectrum TV?</h3>
              <p className="text-gray-600">
                Spectrum TV plans include popular channels like ESPN, CNN, HGTV, and local channels. The specific channel lineup
                varies based on your location and the TV package you choose. Premium channels like HBO and SHOWTIME are included
                in higher-tier plans or can be added to any package.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 px-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-3">Ready to Experience Better Internet & TV?</h2>
            <p className="max-w-3xl mx-auto mb-8">
              Join millions of satisfied customers and discover why Spectrum is America's fastest-growing TV, Internet and Voice provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <a href="tel:8885698194">
                  <Phone className="h-4 w-4" />
                  Call: (888) 569-8194
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

export default SpectrumPage;