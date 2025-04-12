import React, { useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Tv, 
  Globe, 
  Tv2, 
  Film, 
  Infinity, 
  Clock, 
  Trophy, 
  Video, 
  PlayCircle, 
  Smartphone, 
  Laptop, 
  Tablet, 
  ShieldCheck, 
  Headphones, 
  Heart, 
  Users, 
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Zap,
  Info,
  CreditCard,
  Gamepad,
  MonitorSmartphone,
  Star
} from "lucide-react";
import { QwickTVSignupForm } from "@/components/qwicktv-signup-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Pricing plan interface
interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  devices: number;
  badge?: string;
  paymentType: "subscription" | "one-time";
  duration: string;
}

const QwickTVPage: React.FC = () => {
  // Active tab state
  const [activeTab, setActiveTab] = useState("overview");
  
  // Subscription plans
  const subscriptionPlans: PricingPlan[] = [
    {
      id: "basic",
      name: "QwickTV Essential",
      price: "$19.99",
      description: "Perfect for casual viewers",
      features: [
        "4,500+ live TV channels",
        "10,000+ movies & shows",
        "HD quality streaming",
        "24/7 customer support",
        "EPG (Electronic Program Guide)",
        "7-day catch-up TV",
        "Compatible with most devices"
      ],
      devices: 1,
      paymentType: "subscription",
      duration: "monthly"
    },
    {
      id: "plus",
      name: "QwickTV Plus",
      price: "$29.99",
      description: "Most popular for families",
      features: [
        "6,000+ live TV channels",
        "15,000+ movies & shows",
        "HD & 4K quality streaming",
        "24/7 priority customer support",
        "EPG (Electronic Program Guide)",
        "14-day catch-up TV",
        "Compatible with all devices",
        "Multi-screen viewing",
        "PPV events included"
      ],
      devices: 3,
      popular: true,
      badge: "MOST POPULAR",
      paymentType: "subscription",
      duration: "monthly"
    },
    {
      id: "premium",
      name: "QwickTV Premium",
      price: "$39.99",
      description: "Ultimate entertainment package",
      features: [
        "8,000+ live TV channels",
        "20,000+ movies & shows",
        "HD, 4K & HDR quality",
        "24/7 VIP customer support",
        "EPG (Electronic Program Guide)",
        "30-day catch-up TV",
        "All devices + smart TVs",
        "Multi-screen viewing",
        "PPV events included",
        "Premium sports packages",
        "Ad-free experience"
      ],
      devices: 5,
      paymentType: "subscription",
      duration: "monthly"
    }
  ];
  
  // One-time payment plans
  const oneTimePlans: PricingPlan[] = [
    {
      id: "oneMonth",
      name: "1 Month Pass",
      price: "$29.99",
      description: "Try it out with no commitment",
      features: [
        "6,000+ live TV channels",
        "15,000+ movies & shows",
        "HD quality streaming",
        "EPG (Electronic Program Guide)",
        "7-day catch-up TV",
        "Use on 2 devices simultaneously"
      ],
      devices: 2,
      paymentType: "one-time",
      duration: "1 month"
    },
    {
      id: "threeMonth",
      name: "3 Month Pass",
      price: "$74.99",
      description: "Save 17% compared to monthly",
      features: [
        "6,000+ live TV channels",
        "15,000+ movies & shows",
        "HD & 4K quality streaming",
        "EPG (Electronic Program Guide)",
        "14-day catch-up TV",
        "Use on 3 devices simultaneously",
        "PPV events included"
      ],
      devices: 3,
      popular: true,
      badge: "BEST VALUE",
      paymentType: "one-time",
      duration: "3 months"
    },
    {
      id: "annual",
      name: "12 Month Pass",
      price: "$239.99",
      description: "Save 33% with our annual plan",
      features: [
        "8,000+ live TV channels",
        "20,000+ movies & shows",
        "HD, 4K & HDR quality",
        "EPG (Electronic Program Guide)",
        "30-day catch-up TV",
        "Use on 4 devices simultaneously",
        "PPV events included",
        "Premium sports packages",
        "Ad-free experience"
      ],
      devices: 4,
      paymentType: "one-time",
      duration: "12 months"
    }
  ];

  // Channel categories with counts
  const channelCategories = [
    { name: "Entertainment", count: 1200, icon: <Tv className="w-5 h-5 text-primary" /> },
    { name: "Sports", count: 800, icon: <Trophy className="w-5 h-5 text-primary" /> },
    { name: "Movies", count: 950, icon: <Film className="w-5 h-5 text-primary" /> },
    { name: "News", count: 350, icon: <Globe className="w-5 h-5 text-primary" /> },
    { name: "Kids", count: 300, icon: <Users className="w-5 h-5 text-primary" /> },
    { name: "Music", count: 400, icon: <Headphones className="w-5 h-5 text-primary" /> },
    { name: "Documentary", count: 500, icon: <Video className="w-5 h-5 text-primary" /> },
    { name: "Premium", count: 150, icon: <Sparkles className="w-5 h-5 text-primary" /> }
  ];
  
  // Device compatibility list
  const compatibleDevices = [
    { name: "Smart TVs", description: "Samsung, LG, Android TV, Fire TV", icon: <Tv className="w-5 h-5" /> },
    { name: "Streaming Devices", description: "Roku, Apple TV, Chromecast, Fire Stick", icon: <Tv2 className="w-5 h-5" /> },
    { name: "Mobile Devices", description: "iOS and Android phones and tablets", icon: <Smartphone className="w-5 h-5" /> },
    { name: "Computers", description: "Windows, Mac, Linux via web browser", icon: <Laptop className="w-5 h-5" /> },
    { name: "Gaming Consoles", description: "Xbox, PlayStation", icon: <Gamepad className="w-5 h-5" /> }
  ];
  
  // Features list with descriptions
  const features = [
    {
      title: "Endless Entertainment",
      description: "Access to thousands of channels from around the world, including premium content, sports, movies, and more.",
      icon: <Infinity className="w-6 h-6 text-primary" />
    },
    {
      title: "Time-Shift Viewing",
      description: "Catch up on your favorite shows with our time-shift feature, allowing you to watch content from the past 7-30 days.",
      icon: <Clock className="w-6 h-6 text-primary" />
    },
    {
      title: "Multi-Device Support",
      description: "Stream on multiple devices simultaneously, perfect for families who watch different content at the same time.",
      icon: <MonitorSmartphone className="w-6 h-6 text-primary" />
    },
    {
      title: "Premium Picture Quality",
      description: "Enjoy crystal clear HD, 4K, and even HDR content on compatible devices for the ultimate viewing experience.",
      icon: <Zap className="w-6 h-6 text-primary" />
    },
    {
      title: "Global Content Access",
      description: "Watch international channels and content from around the world without regional restrictions.",
      icon: <Globe className="w-6 h-6 text-primary" />
    },
    {
      title: "Secure & Private",
      description: "Our service ensures your viewing habits are private and secure with end-to-end encryption.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What is QwickTV IPTV service?",
      answer: "QwickTV is a premium IPTV (Internet Protocol Television) service that delivers thousands of live TV channels, movies, and shows over the internet. Unlike traditional cable or satellite services, QwickTV streams content directly to your devices through your internet connection."
    },
    {
      question: "What devices can I use with QwickTV?",
      answer: "QwickTV is compatible with a wide range of devices, including Smart TVs (Samsung, LG, Android TV), streaming devices (Roku, Apple TV, Firestick, Chromecast), mobile devices (iOS/Android phones and tablets), computers (via web browsers), and gaming consoles."
    },
    {
      question: "How many devices can I use simultaneously?",
      answer: "The number of devices you can use simultaneously depends on your subscription plan. Our Essential plan allows 1 device, Plus plan allows 3 devices, and Premium plan allows up to 5 devices to stream content at the same time."
    },
    {
      question: "What speed internet connection do I need?",
      answer: "For HD content, we recommend a minimum internet speed of 10 Mbps. For 4K content, we recommend at least 25 Mbps. For the best experience, a stable connection is more important than raw speed."
    },
    {
      question: "Can I record shows or movies?",
      answer: "Yes, QwickTV offers cloud DVR functionality on Plus and Premium plans, allowing you to record your favorite content and watch it later. Storage limits vary by plan."
    },
    {
      question: "Is QwickTV legal?",
      answer: "Yes, QwickTV is a legal service that licenses content from providers worldwide. We comply with all relevant regulations and copyright laws to bring you legitimate access to global entertainment."
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <Helmet>
        <title>QwickTV - Premium IPTV Service | Konnectorr</title>
        <meta name="description" content="QwickTV offers 8,000+ live channels, on-demand content, and HD streaming. Experience premium IPTV service at affordable prices." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-card rounded-2xl p-8 mb-10">
        <div className="max-w-3xl">
          <Badge className="mb-4" variant="outline">NEW</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-primary">QwickTV</span> - Premium IPTV Service
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Unlock unlimited entertainment with 8,000+ channels, movies, and shows from around the world. Stream anywhere, anytime, on any device.
          </p>
          <div className="flex flex-wrap gap-4">
            <QwickTVSignupForm 
              buttonText="Start Free Trial" 
              buttonSize="lg" 
              buttonClassName="gap-2"
              trigger={
                <Button size="lg" className="gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Start Free Trial
                </Button>
              }
            />
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/iptv/qwicktv-plans">
                <Zap className="w-5 h-5" />
                View Plans
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content with Tabs */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-10">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          <TabsTrigger value="overview" className="text-sm md:text-base">
            <Info className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="features" className="text-sm md:text-base">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Features
          </TabsTrigger>
          <TabsTrigger value="channels" className="text-sm md:text-base">
            <Tv2 className="w-4 h-4 mr-2" />
            Channels
          </TabsTrigger>
          <TabsTrigger value="pricing" className="text-sm md:text-base">
            <CreditCard className="w-4 h-4 mr-2" />
            Pricing
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">The Ultimate IPTV Experience</h2>
              <p className="text-lg text-muted-foreground mb-6">
                QwickTV redefines how you watch television with our state-of-the-art IPTV service. Say goodbye to expensive cable subscriptions and limited content choices.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">What is IPTV?</h3>
              <p className="mb-6">
                IPTV (Internet Protocol Television) delivers television content over Internet Protocol networks, giving you unprecedented freedom and flexibility in how you consume entertainment. Unlike traditional cable or satellite, QwickTV streams directly to your favorite devices.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Why Choose QwickTV?</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Access to 8,000+ live channels from around the world</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>20,000+ on-demand movies and TV shows</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>HD, Full HD, and 4K quality on compatible devices</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Electronic Program Guide (EPG) for easy navigation</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Catch-up TV to never miss your favorite shows</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Multi-device support with seamless switching</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Affordable pricing with flexible subscription options</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <QwickTVSignupForm 
                  buttonText="Start Free Trial" 
                  trigger={
                    <Button className="gap-2">
                      <PlayCircle className="w-5 h-5" />
                      Start Free Trial
                    </Button>
                  }
                />
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="/iptv/qwicktv-plans">
                    <ChevronRight className="w-5 h-5" />
                    View All Plans
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-2 h-fit">
                      <Infinity className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Unlimited Content</h4>
                      <p className="text-sm text-muted-foreground">Thousands of channels and on-demand content</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-2 h-fit">
                      <MonitorSmartphone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Multi-Device</h4>
                      <p className="text-sm text-muted-foreground">Watch on TVs, phones, tablets, and computers</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-2 h-fit">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Global Content</h4>
                      <p className="text-sm text-muted-foreground">International channels from all continents</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-2 h-fit">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Premium Quality</h4>
                      <p className="text-sm text-muted-foreground">HD, 4K, and HDR content available</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-2 h-fit">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Secure & Private</h4>
                      <p className="text-sm text-muted-foreground">End-to-end encryption for your privacy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {compatibleDevices.slice(0, 3).map((device, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                      {device.icon}
                    </div>
                    <CardTitle className="text-xl">{device.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{device.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Features Tab */}
        <TabsContent value="features">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mb-10 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Why QwickTV Stands Out</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">No Contract Commitments</h4>
                      <p className="text-sm text-muted-foreground">Cancel anytime with no penalties or hidden fees</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Affordable Pricing</h4>
                      <p className="text-sm text-muted-foreground">Starting at just $19.99/month with flexible payment options</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Regular Content Updates</h4>
                      <p className="text-sm text-muted-foreground">New channels and on-demand titles added every month</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Dedicated Customer Support</h4>
                      <p className="text-sm text-muted-foreground">24/7 assistance via chat, email, and phone</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Regular App Updates</h4>
                      <p className="text-sm text-muted-foreground">Continuous improvements and new features</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">7-Day Free Trial</h4>
                      <p className="text-sm text-muted-foreground">Try before you buy with our no-risk trial period</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <QwickTVSignupForm 
                buttonText="Start Your Free Trial" 
                buttonClassName="w-full md:w-auto justify-center"
              />
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Channels Tab */}
        <TabsContent value="channels">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Extensive Channel Selection</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access over 8,000 channels across multiple categories, with new content added regularly
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {channelCategories.map((category, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mb-4">
                    {category.icon}
                  </div>
                  <h3 className="font-bold mb-1">{category.name}</h3>
                  <p className="text-2xl font-bold text-primary">{category.count}+</p>
                  <p className="text-sm text-muted-foreground">channels</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mb-12">
            <Button asChild size="lg">
              <Link href="/iptv/qwicktv-plans#channel-list">
                View Full Channel List
              </Link>
            </Button>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-10">
            <h3 className="text-2xl font-bold mb-4">Popular Channels Included</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-md p-4 flex items-center justify-center h-20">
                  <Tv className="w-10 h-10 text-primary/70" />
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-muted-foreground">
                And thousands more channels from around the world!
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Pricing Tab */}
        <TabsContent value="pricing">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our flexible subscription plans or one-time payment options
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-5">Monthly Subscriptions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan) => (
                <Card key={plan.id} className={`relative ${
                  plan.popular 
                    ? "border-primary shadow-lg shadow-primary/10 dark:shadow-primary/20" 
                    : "border-gray-200 dark:border-gray-800"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 right-4">
                      <Badge className="bg-primary text-white hover:bg-primary/90 dark:bg-primary dark:text-white px-3 py-1">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-gray-500 dark:text-gray-400">/{plan.duration}</span>
                    </div>
                    <div className="space-y-3 mt-6">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-3">
                    <QwickTVSignupForm 
                      planId={plan.id}
                      buttonText="Start Free Trial" 
                      buttonClassName="w-full"
                    />
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 dark:border-primary dark:text-white" asChild>
                      <Link href={`/iptv/qwicktv-plans#${plan.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-5">One-Time Payments</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {oneTimePlans.map((plan) => (
                <Card key={plan.id} className={`relative ${
                  plan.popular 
                    ? "border-primary shadow-lg shadow-primary/10 dark:shadow-primary/20" 
                    : "border-gray-200 dark:border-gray-800"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 right-4">
                      <Badge className="bg-primary text-white hover:bg-primary/90 dark:bg-primary dark:text-white px-3 py-1">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-gray-500 dark:text-gray-400"> one-time</span>
                    </div>
                    <div className="space-y-3 mt-6">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-3">
                    <QwickTVSignupForm 
                      planId={plan.id}
                      buttonText="Purchase Now" 
                      buttonClassName="w-full"
                    />
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 dark:border-primary dark:text-white" asChild>
                      <Link href={`/iptv/qwicktv-plans#${plan.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {faqItems.slice(0, 4).map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">{item.question}</h4>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-10">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience QwickTV?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start your free 7-day trial today. No credit card required. Cancel anytime.
            </p>
            <QwickTVSignupForm 
              buttonText="Start Your Free Trial" 
              buttonSize="lg"
              buttonClassName="px-8"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default QwickTVPage;