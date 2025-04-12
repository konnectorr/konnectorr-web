import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/page-layout";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Wifi, 
  Globe, 
  Check, 
  Map, 
  Smartphone, 
  Phone, 
  Zap,
  MapPin,
  Clock,
  CreditCard,
  ShieldCheck
} from "lucide-react";
import EsimCallbackForm from "@/components/esim-callback-form";

const EsimPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("united-states");
  
  const regions = [
    { id: "united-states", name: "United States", flag: "🇺🇸" },
    { id: "europe", name: "Europe", flag: "🇪🇺" },
    { id: "asia", name: "Asia", flag: "🌏" },
    { id: "global", name: "Global", flag: "🌎" }
  ];
  
  const esimPlans = {
    "united-states": [
      {
        name: "US Traveler",
        data: "1GB",
        validity: "7 days",
        price: "$4.50",
        popular: false
      },
      {
        name: "US Explorer",
        data: "3GB",
        validity: "30 days",
        price: "$11.00",
        popular: true
      },
      {
        name: "US Unlimited",
        data: "5GB",
        validity: "30 days",
        price: "$16.00",
        popular: false
      },
      {
        name: "US Pro",
        data: "10GB",
        validity: "30 days",
        price: "$26.00",
        popular: false
      },
      {
        name: "US Max",
        data: "20GB",
        validity: "30 days",
        price: "$36.00",
        popular: false
      }
    ],
    "europe": [
      {
        name: "Euro Mini",
        data: "1GB",
        validity: "7 days",
        price: "$5.00",
        popular: false
      },
      {
        name: "Euro Standard",
        data: "3GB",
        validity: "30 days",
        price: "$13.00",
        popular: true
      },
      {
        name: "Euro Plus",
        data: "5GB",
        validity: "30 days",
        price: "$18.00",
        popular: false
      },
      {
        name: "Euro Premium",
        data: "10GB",
        validity: "30 days",
        price: "$30.00",
        popular: false
      }
    ],
    "asia": [
      {
        name: "Asia Mini",
        data: "1GB",
        validity: "7 days",
        price: "$4.50",
        popular: false
      },
      {
        name: "Asia Standard",
        data: "3GB",
        validity: "30 days",
        price: "$12.00",
        popular: true
      },
      {
        name: "Asia Plus",
        data: "5GB",
        validity: "30 days",
        price: "$17.00",
        popular: false
      }
    ],
    "global": [
      {
        name: "Global Mini",
        data: "1GB",
        validity: "7 days",
        price: "$9.00",
        popular: false
      },
      {
        name: "Global Standard",
        data: "3GB",
        validity: "30 days",
        price: "$25.00",
        popular: true
      },
      {
        name: "Global Plus",
        data: "5GB",
        validity: "30 days",
        price: "$35.00",
        popular: false
      },
      {
        name: "Global Premium",
        data: "10GB",
        validity: "30 days",
        price: "$59.00",
        popular: false
      }
    ]
  };
  
  const howItWorksSteps = [
    {
      title: "Purchase your eSIM",
      description: "Choose a data plan from our range of options for different regions.",
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      title: "Scan QR code to install",
      description: "We'll email you a QR code to scan with your phone camera.",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "Activate when ready",
      description: "Activate your eSIM when you're ready to use it, even while traveling.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Stay connected",
      description: "Enjoy high-speed data without roaming charges or physical SIM cards.",
      icon: <Wifi className="h-6 w-6" />
    }
  ];

  return (
    <PageLayout hideHeader={true}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 py-12 md:py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">Global Connectivity in Your Pocket</h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-blue-100">
                  Stay connected worldwide with Konnectorr eSIM technology. Say goodbye to roaming charges and physical SIM cards.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <EsimCallbackForm 
                    buttonText="Get Your eSIM Now"
                    buttonSize="default"
                    buttonClassName="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 border-0 text-sm sm:text-base"
                  />
                  <Button 
                    size="default" 
                    variant="secondary"
                    className="w-full sm:w-auto backdrop-blur-sm bg-white/20 text-white hover:bg-white/30 text-sm sm:text-base mt-2 sm:mt-0"
                    onClick={() => {
                      // Scroll to plans section
                      document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Explore Plans
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="/esim-world-connected.svg" 
                  alt="Global eSIM connectivity" 
                  className="max-w-full h-auto w-full sm:w-auto rounded-xl md:rounded-2xl shadow-lg"
                  style={{ maxHeight: '60vh' }}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/500x400?text=eSIM+Global+Connectivity";
                  }} 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* What is eSIM Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
              NEW TECHNOLOGY
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What is an eSIM?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              An eSIM (embedded SIM) is a digital SIM that allows you to activate a cellular plan without having to use a physical SIM card.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardHeader>
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle>Device Compatibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Works with iPhone XR and newer, Google Pixel 3 and newer, Samsung Galaxy S20 and newer, and many other modern smartphones.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
              <CardHeader>
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-indigo-700" />
                </div>
                <CardTitle>Global Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect in over 190+ countries and regions worldwide with our partnership network of local carriers for the best coverage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
              <CardHeader>
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-700" />
                </div>
                <CardTitle>Instant Activation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Purchase, install, and activate your eSIM in minutes. No physical SIM card needed, no waiting for delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1 bg-indigo-50 text-indigo-700 border-indigo-200">
              EASY SETUP
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get connected in just a few simple steps, no technical knowledge required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-200 to-indigo-200 transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div id="plans-section" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1 bg-purple-50 text-purple-700 border-purple-200">
              FLEXIBLE PLANS
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Choose Your eSIM Plan</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Select from a variety of data plans designed to fit your travel needs and budget.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-6 rounded-xl mb-8 md:mb-10 overflow-hidden">
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="w-full overflow-x-auto pb-2 snap-x scrollbar-hide">
                <div className="flex min-w-max gap-2 justify-center px-1">
                  {regions.map((region) => (
                    <Button 
                      key={region.id}
                      variant={selectedRegion === region.id ? "default" : "outline"}
                      onClick={() => setSelectedRegion(region.id)}
                      className={`min-w-[120px] snap-start ${selectedRegion === region.id ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : ''}`}
                      size="sm"
                    >
                      <span className="mr-1">{region.flag}</span> {region.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile view - horizontal scroll for plans */}
          <div className="block md:hidden w-full overflow-x-auto pb-4 snap-x scrollbar-hide">
            <div className="flex min-w-max gap-4 px-1">
              {esimPlans[selectedRegion as keyof typeof esimPlans].map((plan, index) => (
                <div key={index} className="min-w-[270px] snap-start">
                  <Card 
                    className={`overflow-hidden h-full ${plan.popular ? 'border-2 border-indigo-500 relative' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-1 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardHeader className={`${plan.popular ? 'pt-8' : ''} bg-gradient-to-br from-gray-50 to-white pb-4`}>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <Globe className="h-4 w-4" />
                        {selectedRegion === "united-states" ? "United States" : 
                         selectedRegion === "europe" ? "Europe" : 
                         selectedRegion === "asia" ? "Asia" : "Global"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="mb-4">
                        <div className="text-3xl font-bold">{plan.price}</div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Wifi className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                          <span>{plan.data} Data</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                          <span>Valid for {plan.validity}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                          <span>24/7 Customer Support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <EsimCallbackForm 
                        buttonText="Get This Plan"
                        buttonSize="default"
                        buttonClassName="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-sm"
                      />
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop view - grid layout for plans */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {esimPlans[selectedRegion as keyof typeof esimPlans].map((plan, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden ${plan.popular ? 'border-2 border-indigo-500 relative' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className={`${plan.popular ? 'pt-8' : ''} bg-gradient-to-br from-gray-50 to-white pb-4`}>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    {selectedRegion === "united-states" ? "United States" : 
                     selectedRegion === "europe" ? "Europe" : 
                     selectedRegion === "asia" ? "Asia" : "Global"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-4">
                    <div className="text-3xl font-bold">{plan.price}</div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Wifi className="h-4 w-4 text-indigo-600" />
                      <span>{plan.data} Data</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-indigo-600" />
                      <span>Valid for {plan.validity}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-indigo-600" />
                      <span>24/7 Customer Support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <EsimCallbackForm 
                    buttonText="Get This Plan"
                    buttonClassName="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  />
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Mobile scroll indicator */}
          <div className="flex justify-center mt-4 md:hidden">
            <p className="text-xs text-gray-500 flex items-center">
              <span>Swipe for more plans</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </p>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="py-16 bg-gradient-to-b from-indigo-950 to-purple-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1 bg-indigo-900 text-indigo-200 border-indigo-700">
              WHY CHOOSE US
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Konnectorr eSIM</h2>
            <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
              Our partnership with VOCA brings you the best in eSIM technology with superior benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-900/30 rounded-xl p-6 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                Global Coverage
              </h3>
              <p className="text-indigo-200 mb-4">
                Connect seamlessly in over 190 countries and regions with our extensive network of local carrier partnerships.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>Access to premium local networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>Reliable connectivity even in remote areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>Seamless switching between available networks</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-900/30 rounded-xl p-6 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-blue-400" />
                Cost-Effective
              </h3>
              <p className="text-indigo-200 mb-4">
                Save up to 90% on international roaming charges with our affordable data plans.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>No surprise fees or hidden charges</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>Pay only for what you need</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>Flexible plans for different usage needs</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-900/30 rounded-xl p-6 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-400" />
                Fast & Simple
              </h3>
              <p className="text-indigo-200 mb-4">
                Get connected in minutes with our easy-to-use digital experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>Instant delivery via email</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>Simple QR code activation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>No physical SIM card management</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-900/30 rounded-xl p-6 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400" />
                Premium Support
              </h3>
              <p className="text-indigo-200 mb-4">
                Our customer service team is available 24/7 to help you with any issues.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>24/7 customer service</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>Multi-language support agents</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>Detailed setup guides and FAQs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
              QUESTIONS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our eSIM services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="billing">Billing & Support</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>What is an eSIM?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>An eSIM (embedded SIM) is a digital SIM that allows you to activate a cellular plan without using a physical SIM card. It's built into your device and can be programmed to connect to different cellular networks.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>How do I know if my device supports eSIM?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Most newer smartphones support eSIM technology, including iPhone XR and newer, Google Pixel 3 and newer, Samsung Galaxy S20 and newer. You can check your device specifications or contact your manufacturer to confirm eSIM compatibility.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Can I use my regular phone number with an eSIM?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Yes, modern devices support Dual SIM Dual Standby (DSDS), which means you can keep your physical SIM with your regular phone number active while using the eSIM for data connectivity. This is perfect for travelers who want to maintain their home number while abroad.</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="technical">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>How do I install the eSIM on my device?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>After purchasing, you&apos;ll receive a QR code via email. On your device, go to Settings &rarr; Cellular/Mobile Data &rarr; Add Cellular/Mobile Plan, then scan the QR code with your camera. Follow the on-screen instructions to complete setup.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Can I share my eSIM data with other devices?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Yes, you can use your eSIM-enabled device as a hotspot to share your data connection with other devices, like laptops or tablets. This works the same way as hotspot sharing with a physical SIM.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>What happens when my data runs out?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>When your data allowance runs out, your data connection will stop working. You can purchase a top-up or a new plan through our website or app to continue using data services.</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="billing">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Can I get a refund if I don't use my eSIM?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>We offer refunds for unused eSIMs within 30 days of purchase, provided the eSIM has not been activated. Contact our customer support team for assistance with refund requests.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>How do I contact customer support?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Our customer support team is available 24/7 via email at esim@konnectorr.com, or by phone at <a href="tel:8887886930" className="text-primary font-semibold hover:underline">888-788-6930</a>. We also offer live chat support through our website during business hours.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Can I transfer my eSIM to another device?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>eSIMs cannot be transferred between devices once activated. If you need to use your data plan on a different device, you'll need to purchase a new eSIM for that device.</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Stay Connected Worldwide?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied travelers who've ditched physical SIM cards and roaming charges.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <EsimCallbackForm 
              buttonText="Get Your eSIM Today"
              buttonSize="lg"
              buttonClassName="bg-white text-indigo-700 hover:bg-blue-50"
            />
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="tel:8887886930">
                <Phone className="h-4 w-4 mr-2" />
                Call: 888-788-6930
              </a>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EsimPage;