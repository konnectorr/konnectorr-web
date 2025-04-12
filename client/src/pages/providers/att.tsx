import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Check, Tv, Wifi, Award, Phone, Zap, Star, DollarSign, 
  X, Package, MapPin, Smartphone, Globe, Cable, Shield, Bolt, Gift
} from "lucide-react";
import { motion } from "framer-motion";

const ATTPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex justify-center w-full mb-4">
              <img 
                src="/images/att-authorized-retailer.png" 
                alt="AT&T Authorized Retailer Logo" 
                className="h-32 object-contain"
                style={{ 
                  filter: 'drop-shadow(0 0 0.75rem rgba(0,0,0,0.1))',
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">Internet, TV & Wireless Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience lightning-fast fiber internet, premium entertainment, and the nation's most reliable 5G network.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col h-full"
            >
              <Card className="flex flex-col flex-grow bg-gradient-to-br from-blue-50 to-white border-blue-100">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">AT&T Fiber</CardTitle>
                      <CardDescription>Ultra-fast internet</CardDescription>
                    </div>
                    <Wifi className="h-8 w-8 text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Up to 5 Gig symmetric speeds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>99% reliability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>ActiveArmor℠ security included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No data caps or annual contract</span>
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
              className="flex flex-col h-full"
            >
              <Card className="flex flex-col flex-grow bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">DIRECTV STREAM</CardTitle>
                      <CardDescription>Live TV & on-demand</CardDescription>
                    </div>
                    <Tv className="h-8 w-8 text-indigo-500" />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>75+ live TV channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>40,000+ on-demand titles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unlimited cloud DVR storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No annual contract required</span>
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col h-full"
            >
              <Card className="flex flex-col flex-grow bg-gradient-to-br from-orange-50 to-white border-orange-100">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">AT&T Wireless</CardTitle>
                      <CardDescription>Fast, reliable 5G</CardDescription>
                    </div>
                    <Smartphone className="h-8 w-8 text-orange-500" />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unlimited talk, text & data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Fast, reliable 5G network</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Multi-line discounts available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Mobile hotspot included</span>
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
          </div>

          <div className="mt-10 flex gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="tel:8887886930">
                <Phone className="h-4 w-4" />
                Call: 888-788-6930
              </a>
            </Button>
            <Button asChild size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
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
            <TabsTrigger value="bundles">Bundle Options</TabsTrigger>
            <TabsTrigger value="compare">Compare Plans</TabsTrigger>
          </TabsList>

          {/* Plans & Pricing Tab Content */}
          <TabsContent value="packages">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">AT&T Fiber Internet Plans</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Blazing-fast fiber internet with consistent speeds perfect for streaming, gaming, and working from home.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Fiber 300 Plan */}
                <Card className="overflow-hidden">
                  <div className="bg-gray-100 p-4 border-b">
                    <h3 className="font-bold">AT&T Fiber 300</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$55</span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <p className="text-sm mt-1">Plus taxes. With AutoPay & Paperless Bill.</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">300 Mbps</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Symmetric 300 Mbps upload & download</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Unlimited data included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>No annual contract</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Wi-Fi gateway included</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Select Plan</Button>
                  </CardFooter>
                </Card>

                {/* Fiber 500 Plan */}
                <Card className="overflow-hidden">
                  <div className="bg-gray-100 p-4 border-b">
                    <h3 className="font-bold">AT&T Fiber 500</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$65</span>
                      <span className="text-sm text-gray-600">/mo</span>
                    </div>
                    <p className="text-sm mt-1">Plus taxes. With AutoPay & Paperless Bill.</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">500 Mbps</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Symmetric 500 Mbps upload & download</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Unlimited data included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>No annual contract</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Wi-Fi gateway included</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Select Plan</Button>
                  </CardFooter>
                </Card>

                {/* Fiber 1 Gig Plan */}
                <Card className="overflow-hidden border-blue-200 bg-gradient-to-b from-blue-50/50 to-white">
                  <div className="bg-blue-600 text-white p-4 border-b">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">AT&T Fiber 1 Gig</h3>
                      <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Most Popular</Badge>
                    </div>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$80</span>
                      <span className="text-sm text-gray-200">/mo</span>
                    </div>
                    <p className="text-sm mt-1 text-gray-200">Plus taxes. With AutoPay & Paperless Bill.</p>
                  </div>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">1 Gig</Badge>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Symmetric 1 Gig (940 Mbps) speed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Unlimited data included</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>No annual contract</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Wi-Fi gateway + security features included</span>
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
                    Enjoy live TV and on-demand content with no annual contracts or equipment fees.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-4">
                  {/* Entertainment Package */}
                  <Card className="overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold">Entertainment</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$69.99</span>
                        <span className="text-sm text-gray-600">/mo</span>
                      </div>
                      <p className="text-sm mt-1">Plus taxes. No annual contract.</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50">75+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Live TV & on-demand titles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>ESPN, CNN, HGTV, TNT</span>
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

                  {/* Choice Package */}
                  <Card className="overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold">Choice</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$89.99</span>
                        <span className="text-sm text-gray-600">/mo</span>
                      </div>
                      <p className="text-sm mt-1">Plus taxes. No annual contract.</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50">105+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>All Entertainment channels</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Regional Sports Networks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>MLB Network, NBA TV</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Unlimited cloud DVR storage</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Select Plan</Button>
                    </CardFooter>
                  </Card>

                  {/* Ultimate Package */}
                  <Card className="overflow-hidden">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold">Ultimate</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$104.99</span>
                        <span className="text-sm text-gray-600">/mo</span>
                      </div>
                      <p className="text-sm mt-1">Plus taxes. No annual contract.</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50">140+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>All Choice channels</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Starz®, Showtime®, Cinemax®</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>MLB Extra Innings included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Unlimited cloud DVR storage</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Select Plan</Button>
                    </CardFooter>
                  </Card>

                  {/* Premier Package */}
                  <Card className="overflow-hidden border-indigo-200 bg-gradient-to-b from-indigo-50/50 to-white">
                    <div className="bg-indigo-600 text-white p-4 border-b">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold">Premier</h3>
                        <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Best Value</Badge>
                      </div>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">$149.99</span>
                        <span className="text-sm text-gray-200">/mo</span>
                      </div>
                      <p className="text-sm mt-1 text-gray-200">Plus taxes. No annual contract.</p>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50">150+ Channels</Badge>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>All Ultimate channels</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>HBO Max™ included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>All premium channels included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Unlimited cloud DVR storage</span>
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
            </div>
          </TabsContent>

          {/* Features & Benefits Tab Content */}
          <TabsContent value="features">
            <div className="space-y-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Why Choose AT&T Services</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Experience the benefits of AT&T's award-winning fiber internet, entertainment, and wireless services.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Fiber Internet Features */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Wifi className="h-8 w-8 text-blue-500" />
                    <h3 className="text-2xl font-bold">AT&T Fiber Benefits</h3>
                  </div>
                  <div className="grid gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="bg-blue-100 rounded-full p-3 h-fit">
                            <Bolt className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">Symmetric Speeds</h4>
                            <p className="text-sm text-gray-600">
                              Unlike cable internet, AT&T Fiber delivers the same blazing-fast upload and download speeds for better video calls, gaming, and file uploads.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="bg-blue-100 rounded-full p-3 h-fit">
                            <Shield className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">ActiveArmor℠ Security</h4>
                            <p className="text-sm text-gray-600">
                              Built-in security features that help block threats like malware and phishing scams to keep your family safer online.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="bg-blue-100 rounded-full p-3 h-fit">
                            <Package className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">No Annual Contract</h4>
                            <p className="text-sm text-gray-600">
                              Enjoy AT&T Fiber with no annual contract required, giving you flexibility and peace of mind with your internet service.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="bg-blue-100 rounded-full p-3 h-fit">
                            <Globe className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">Unlimited Data</h4>
                            <p className="text-sm text-gray-600">
                              Stream, game, and download as much as you want with no data caps or overage charges on any AT&T Fiber plan.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* DIRECTV Features */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Tv className="h-8 w-8 text-indigo-500" />
                    <h3 className="text-2xl font-bold">DIRECTV STREAM Benefits</h3>
                  </div>
                  <div className="grid gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="bg-indigo-100 rounded-full p-3 h-fit">
                            <Package className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">No Annual Contract</h4>
                            <p className="text-sm text-gray-600">
                              Enjoy the flexibility of no annual contract, allowing you to change or cancel your service anytime without early termination fees.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="bg-indigo-100 rounded-full p-3 h-fit">
                            <Smartphone className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">Watch Anywhere</h4>
                            <p className="text-sm text-gray-600">
                              Stream live TV and on-demand content on your favorite devices at home or on the go with the DIRECTV app.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="bg-indigo-100 rounded-full p-3 h-fit">
                            <Award className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">Premium Entertainment</h4>
                            <p className="text-sm text-gray-600">
                              Access to premium channels and exclusive content, including HBO Max™, Showtime®, and Starz® with select packages.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="bg-indigo-100 rounded-full p-3 h-fit">
                            <Gift className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">Unlimited Cloud DVR</h4>
                            <p className="text-sm text-gray-600">
                              Record all your favorite shows with unlimited DVR storage included in every DIRECTV STREAM package.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Bundle Options Tab Content */}
          <TabsContent value="bundles">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Save with AT&T Bundles</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Combine services for convenience and savings on your monthly bill.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Internet + TV Bundle */}
                <Card className="overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 border-b">
                    <h3 className="font-bold text-xl">Internet + TV Bundle</h3>
                    <div className="mt-2 flex items-end gap-2">
                      <div>
                        <span className="text-sm line-through opacity-70">$149.98</span>
                        <div className="mt-1">
                          <span className="text-3xl font-bold">$119.99</span>
                          <span className="text-sm">/mo</span>
                        </div>
                      </div>
                      <span className="text-sm bg-yellow-500 text-black px-2 py-0.5 rounded-full mb-1">Save $30/mo</span>
                    </div>
                    <p className="text-xs mt-2 text-blue-100">Plus taxes. With AutoPay & Paperless Bill.</p>
                  </div>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Wifi className="h-5 w-5 text-blue-500" />
                          <h4 className="font-bold">AT&T Fiber 500</h4>
                        </div>
                        <ul className="space-y-2 text-sm ml-7">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>500 Mbps symmetric speeds</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Unlimited data</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Wi-Fi gateway included</span>
                          </li>
                        </ul>
                      </div>
                      <Separator />
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Tv className="h-5 w-5 text-indigo-500" />
                          <h4 className="font-bold">DIRECTV STREAM Entertainment</h4>
                        </div>
                        <ul className="space-y-2 text-sm ml-7">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>75+ live TV channels</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Unlimited cloud DVR</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Stream on multiple devices</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Select Bundle</Button>
                  </CardFooter>
                </Card>

                {/* Internet + Wireless Bundle */}
                <Card className="overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-orange-600 text-white p-6 border-b">
                    <h3 className="font-bold text-xl">Internet + Wireless Bundle</h3>
                    <div className="mt-2 flex items-end gap-2">
                      <div>
                        <span className="text-sm line-through opacity-70">$155.00</span>
                        <div className="mt-1">
                          <span className="text-3xl font-bold">$125.00</span>
                          <span className="text-sm">/mo</span>
                        </div>
                      </div>
                      <span className="text-sm bg-yellow-500 text-black px-2 py-0.5 rounded-full mb-1">Save $30/mo</span>
                    </div>
                    <p className="text-xs mt-2 text-blue-100">Plus taxes. With AutoPay & Paperless Bill.</p>
                  </div>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Wifi className="h-5 w-5 text-blue-500" />
                          <h4 className="font-bold">AT&T Fiber 1 Gig</h4>
                        </div>
                        <ul className="space-y-2 text-sm ml-7">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>1 Gig symmetric speeds</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Unlimited data</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Wi-Fi gateway included</span>
                          </li>
                        </ul>
                      </div>
                      <Separator />
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Smartphone className="h-5 w-5 text-orange-500" />
                          <h4 className="font-bold">AT&T Unlimited Starter</h4>
                        </div>
                        <ul className="space-y-2 text-sm ml-7">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Unlimited talk, text & data</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>5G access included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>SD streaming quality</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Select Bundle</Button>
                  </CardFooter>
                </Card>

                {/* Triple Play Bundle */}
                <Card className="overflow-hidden border-blue-200 bg-gradient-to-b from-blue-50/50 to-white">
                  <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-orange-700 text-white p-6 border-b">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-xl">Triple Play Bundle</h3>
                      <Badge className="bg-yellow-500 text-black border-0 hover:bg-yellow-400">Best Value</Badge>
                    </div>
                    <div className="mt-2 flex items-end gap-2">
                      <div>
                        <span className="text-sm line-through opacity-70">$229.98</span>
                        <div className="mt-1">
                          <span className="text-3xl font-bold">$179.99</span>
                          <span className="text-sm">/mo</span>
                        </div>
                      </div>
                      <span className="text-sm bg-yellow-500 text-black px-2 py-0.5 rounded-full mb-1">Save $50/mo</span>
                    </div>
                    <p className="text-xs mt-2 text-blue-100">Plus taxes. With AutoPay & Paperless Bill.</p>
                  </div>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Wifi className="h-5 w-5 text-blue-500" />
                          <h4 className="font-bold">AT&T Fiber 1 Gig</h4>
                        </div>
                        <ul className="space-y-2 text-sm ml-7">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>1 Gig symmetric speeds</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Unlimited data</span>
                          </li>
                        </ul>
                      </div>
                      <Separator />
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Tv className="h-5 w-5 text-indigo-500" />
                          <h4 className="font-bold">DIRECTV STREAM Choice</h4>
                        </div>
                        <ul className="space-y-2 text-sm ml-7">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>105+ live TV channels</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Regional Sports Networks</span>
                          </li>
                        </ul>
                      </div>
                      <Separator />
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Smartphone className="h-5 w-5 text-orange-500" />
                          <h4 className="font-bold">AT&T Unlimited Extra</h4>
                        </div>
                        <ul className="space-y-2 text-sm ml-7">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Unlimited talk, text & data</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>15GB hotspot data</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Select Bundle</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Compare Plans Tab Content */}
          <TabsContent value="compare">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Find Your Perfect AT&T Plan</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Compare AT&T services to find the right fit for your household needs.
                </p>
              </div>

              <div className="overflow-auto">
                <table className="w-full min-w-[800px] border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 text-left font-semibold border">Services</th>
                      <th className="p-4 text-center font-semibold border">AT&T Fiber 300</th>
                      <th className="p-4 text-center font-semibold border">AT&T Fiber 500</th>
                      <th className="p-4 text-center font-semibold border bg-blue-50">AT&T Fiber 1 Gig</th>
                      <th className="p-4 text-center font-semibold border">AT&T Fiber 2 Gig</th>
                      <th className="p-4 text-center font-semibold border">AT&T Fiber 5 Gig</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border font-medium">Price</td>
                      <td className="p-4 border text-center">$55/mo</td>
                      <td className="p-4 border text-center">$65/mo</td>
                      <td className="p-4 border text-center bg-blue-50 font-semibold">$80/mo</td>
                      <td className="p-4 border text-center">$110/mo</td>
                      <td className="p-4 border text-center">$180/mo</td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">Download speed</td>
                      <td className="p-4 border text-center">300 Mbps</td>
                      <td className="p-4 border text-center">500 Mbps</td>
                      <td className="p-4 border text-center bg-blue-50 font-semibold">1 Gig (940 Mbps)</td>
                      <td className="p-4 border text-center">2 Gig (2 Gbps)</td>
                      <td className="p-4 border text-center">5 Gig (5 Gbps)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">Upload speed</td>
                      <td className="p-4 border text-center">300 Mbps</td>
                      <td className="p-4 border text-center">500 Mbps</td>
                      <td className="p-4 border text-center bg-blue-50 font-semibold">1 Gig (940 Mbps)</td>
                      <td className="p-4 border text-center">2 Gig (2 Gbps)</td>
                      <td className="p-4 border text-center">5 Gig (5 Gbps)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">Data cap</td>
                      <td className="p-4 border text-center">
                        <span className="flex justify-center">
                          <Check className="h-5 w-5 text-green-500" /> Unlimited
                        </span>
                      </td>
                      <td className="p-4 border text-center">
                        <span className="flex justify-center">
                          <Check className="h-5 w-5 text-green-500" /> Unlimited
                        </span>
                      </td>
                      <td className="p-4 border text-center bg-blue-50">
                        <span className="flex justify-center">
                          <Check className="h-5 w-5 text-green-500" /> Unlimited
                        </span>
                      </td>
                      <td className="p-4 border text-center">
                        <span className="flex justify-center">
                          <Check className="h-5 w-5 text-green-500" /> Unlimited
                        </span>
                      </td>
                      <td className="p-4 border text-center">
                        <span className="flex justify-center">
                          <Check className="h-5 w-5 text-green-500" /> Unlimited
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">Equipment</td>
                      <td className="p-4 border text-center">Wi-Fi gateway</td>
                      <td className="p-4 border text-center">Wi-Fi gateway</td>
                      <td className="p-4 border text-center bg-blue-50 font-semibold">BGW320 gateway</td>
                      <td className="p-4 border text-center">BGW320 + 2.5 Gbps router</td>
                      <td className="p-4 border text-center">BGW320 + 5 Gbps router</td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">Best for</td>
                      <td className="p-4 border text-center">1-3 users, browsing, streaming</td>
                      <td className="p-4 border text-center">3-5 users, HD streaming, WFH</td>
                      <td className="p-4 border text-center bg-blue-50 font-semibold">5+ users, 4K streaming, gaming</td>
                      <td className="p-4 border text-center">Power users, creative professionals</td>
                      <td className="p-4 border text-center">Ultimate speeds, multiple devices</td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">Contract</td>
                      <td className="p-4 border text-center">No contract</td>
                      <td className="p-4 border text-center">No contract</td>
                      <td className="p-4 border text-center bg-blue-50">No contract</td>
                      <td className="p-4 border text-center">No contract</td>
                      <td className="p-4 border text-center">No contract</td>
                    </tr>
                    <tr>
                      <td className="p-4 border"></td>
                      <td className="p-4 border text-center">
                        <Button>Select</Button>
                      </td>
                      <td className="p-4 border text-center">
                        <Button>Select</Button>
                      </td>
                      <td className="p-4 border text-center bg-blue-50">
                        <Button className="bg-blue-600 hover:bg-blue-700">Select</Button>
                      </td>
                      <td className="p-4 border text-center">
                        <Button>Select</Button>
                      </td>
                      <td className="p-4 border text-center">
                        <Button>Select</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ATTPage;