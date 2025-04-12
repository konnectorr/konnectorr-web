import React, { useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Info, X, Tv, Globe, Smartphone, Laptop, Tablet, Film, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Channel {
  name: string;
  category: string;
  hd: boolean;
  premium?: boolean;
}

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
  channels: string[];
}

const entertainmentChannels: Channel[] = [
  { name: "QwickTV Entertainment", category: "Entertainment", hd: true },
  { name: "QwickTV Movies", category: "Entertainment", hd: true },
  { name: "QwickTV Series", category: "Entertainment", hd: true },
  { name: "AMC", category: "Entertainment", hd: true },
  { name: "BBC America", category: "Entertainment", hd: true },
  { name: "BET", category: "Entertainment", hd: true },
  { name: "Bravo", category: "Entertainment", hd: true },
  { name: "Comedy Central", category: "Entertainment", hd: true },
  { name: "Discovery", category: "Entertainment", hd: true },
  { name: "E!", category: "Entertainment", hd: true },
  { name: "Food Network", category: "Entertainment", hd: true },
  { name: "FX", category: "Entertainment", hd: true },
  { name: "HGTV", category: "Entertainment", hd: true },
  { name: "History", category: "Entertainment", hd: true },
  { name: "IFC", category: "Entertainment", hd: true },
  { name: "Lifetime", category: "Entertainment", hd: true },
  { name: "MTV", category: "Entertainment", hd: true },
  { name: "Paramount", category: "Entertainment", hd: true },
  { name: "Syfy", category: "Entertainment", hd: true },
  { name: "TBS", category: "Entertainment", hd: true },
  { name: "TLC", category: "Entertainment", hd: true },
  { name: "TNT", category: "Entertainment", hd: true },
  { name: "Travel Channel", category: "Entertainment", hd: true },
  { name: "truTV", category: "Entertainment", hd: true },
  { name: "USA Network", category: "Entertainment", hd: true },
  { name: "VH1", category: "Entertainment", hd: true },
];

const newsChannels: Channel[] = [
  { name: "CNN", category: "News", hd: true },
  { name: "Fox News", category: "News", hd: true },
  { name: "MSNBC", category: "News", hd: true },
  { name: "Bloomberg", category: "News", hd: true },
  { name: "CNBC", category: "News", hd: true },
  { name: "BBC World News", category: "News", hd: true },
  { name: "Al Jazeera", category: "News", hd: true },
  { name: "Weather Channel", category: "News", hd: true },
  { name: "C-SPAN", category: "News", hd: true },
  { name: "Newsmax", category: "News", hd: true },
];

const sportsChannels: Channel[] = [
  { name: "QwickTV Sports", category: "Sports", hd: true },
  { name: "ESPN", category: "Sports", hd: true },
  { name: "ESPN2", category: "Sports", hd: true },
  { name: "FS1", category: "Sports", hd: true },
  { name: "FS2", category: "Sports", hd: true },
  { name: "NFL Network", category: "Sports", hd: true },
  { name: "NBA TV", category: "Sports", hd: true },
  { name: "MLB Network", category: "Sports", hd: true },
  { name: "NHL Network", category: "Sports", hd: true },
  { name: "Golf Channel", category: "Sports", hd: true },
  { name: "Tennis Channel", category: "Sports", hd: true, premium: true },
  { name: "CBS Sports Network", category: "Sports", hd: true },
  { name: "Olympic Channel", category: "Sports", hd: true },
  { name: "SEC Network", category: "Sports", hd: true, premium: true },
  { name: "ACC Network", category: "Sports", hd: true, premium: true },
  { name: "Big Ten Network", category: "Sports", hd: true, premium: true },
  { name: "ESPNU", category: "Sports", hd: true, premium: true },
  { name: "ESPNews", category: "Sports", hd: true },
];

const premiumChannels: Channel[] = [
  { name: "HBO", category: "Premium", hd: true, premium: true },
  { name: "Showtime", category: "Premium", hd: true, premium: true },
  { name: "Cinemax", category: "Premium", hd: true, premium: true },
  { name: "Starz", category: "Premium", hd: true, premium: true },
  { name: "Epix", category: "Premium", hd: true, premium: true },
  { name: "MGM+", category: "Premium", hd: true, premium: true },
];

const internationalChannels: Channel[] = [
  { name: "Univision", category: "International", hd: true },
  { name: "Telemundo", category: "International", hd: true },
  { name: "TV Asia", category: "International", hd: true },
  { name: "Zee TV", category: "International", hd: true },
  { name: "Star Plus", category: "International", hd: true },
  { name: "TV Japan", category: "International", hd: true },
  { name: "TV5Monde", category: "International", hd: true },
  { name: "Deutsche Welle", category: "International", hd: true },
  { name: "RT", category: "International", hd: true },
  { name: "CCTV-4", category: "International", hd: true },
  { name: "RAI Italia", category: "International", hd: true },
  { name: "TVE Internacional", category: "International", hd: true },
];

const kidsFamilyChannels: Channel[] = [
  { name: "QwickTV Kids", category: "Kids & Family", hd: true },
  { name: "Cartoon Network", category: "Kids & Family", hd: true },
  { name: "Disney Channel", category: "Kids & Family", hd: true },
  { name: "Disney Junior", category: "Kids & Family", hd: true },
  { name: "Disney XD", category: "Kids & Family", hd: true },
  { name: "Nickelodeon", category: "Kids & Family", hd: true },
  { name: "Nick Jr.", category: "Kids & Family", hd: true },
  { name: "TeenNick", category: "Kids & Family", hd: true },
  { name: "PBS Kids", category: "Kids & Family", hd: true },
  { name: "Universal Kids", category: "Kids & Family", hd: true },
  { name: "Baby TV", category: "Kids & Family", hd: true },
];

const allChannels = [
  ...entertainmentChannels,
  ...newsChannels,
  ...sportsChannels,
  ...kidsFamilyChannels,
  ...internationalChannels,
  ...premiumChannels,
];

const pricingPlans: PricingPlan[] = [
  {
    id: "essentials",
    name: "QwickTV Essentials",
    price: "$29.99",
    description: "Essential entertainment for the whole family",
    features: [
      "50+ channels of entertainment, news, sports",
      "Stream on up to 2 devices simultaneously",
      "HD streaming quality",
      "7-day replay for missed shows",
      "Compatible with all major devices"
    ],
    devices: 2,
    paymentType: "subscription",
    duration: "monthly",
    channels: [
      "Entertainment", 
      "News", 
      "Kids & Family"
    ]
  },
  {
    id: "premium",
    name: "QwickTV Premium",
    price: "$49.99",
    description: "Our most popular plan with maximum entertainment",
    features: [
      "100+ channels including premium sports",
      "Stream on up to 3 devices simultaneously",
      "Full HD streaming quality",
      "14-day replay for missed shows",
      "Compatible with all major devices",
      "Downloadable content for offline viewing"
    ],
    popular: true,
    devices: 3,
    badge: "Most Popular",
    paymentType: "subscription",
    duration: "monthly",
    channels: [
      "Entertainment", 
      "News", 
      "Sports", 
      "Kids & Family", 
      "International"
    ]
  },
  {
    id: "ultimate",
    name: "QwickTV Ultimate",
    price: "$69.99",
    description: "The ultimate entertainment experience with all channels",
    features: [
      "150+ channels including all premium content",
      "Stream on up to 5 devices simultaneously",
      "4K Ultra HD streaming quality where available",
      "30-day replay for missed shows",
      "Compatible with all major devices",
      "Downloadable content for offline viewing",
      "Premium customer support",
      "Free premium upgrades"
    ],
    devices: 5,
    paymentType: "subscription",
    duration: "monthly",
    channels: [
      "Entertainment", 
      "News", 
      "Sports", 
      "Kids & Family", 
      "International", 
      "Premium"
    ]
  },
  {
    id: "lifetime",
    name: "QwickTV Lifetime",
    price: "$499.99",
    description: "Lifetime access with a one-time payment",
    features: [
      "All channels and premium content",
      "Stream on up to 4 devices simultaneously",
      "4K Ultra HD streaming where available",
      "Unlimited replay for all content",
      "Compatible with all major devices",
      "Downloadable content for offline viewing",
      "VIP customer support",
      "No monthly fees ever"
    ],
    devices: 4,
    badge: "Best Value",
    paymentType: "one-time",
    duration: "lifetime",
    channels: [
      "Entertainment", 
      "News", 
      "Sports", 
      "Kids & Family", 
      "International", 
      "Premium"
    ]
  }
];

export default function QwickTVPlansPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const filteredChannels = selectedCategory === "All" 
    ? allChannels 
    : allChannels.filter(channel => channel.category === selectedCategory);
  
  const categories = ["All", "Entertainment", "News", "Sports", "Kids & Family", "International", "Premium"];
  
  const plans = [
    { id: "monthly", name: "Monthly Plans" },
    { id: "lifetime", name: "Lifetime Plans" }
  ];

  return (
    <>
      <Helmet>
        <title>QwickTV Channels & Plans | Konnectorr</title>
        <meta name="description" content="Explore QwickTV channels and plans - the best value IPTV service with 150+ channels and flexible subscription options." />
      </Helmet>

      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              QwickTV Channels & Plans
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Discover the perfect entertainment package to suit your needs with our flexible plans
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-black py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="monthly" className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                {plans.map(plan => (
                  <TabsTrigger key={plan.id} value={plan.id} className="text-base py-3">
                    {plan.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="monthly" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingPlans.filter(plan => plan.paymentType === "subscription").map((plan) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className={`relative h-full flex flex-col ${
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
                      <CardContent className="flex-grow">
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-primary">{plan.price}</span>
                          <span className="text-gray-500 dark:text-gray-400">/{plan.duration}</span>
                        </div>
                        <div className="space-y-3 mt-6">
                          {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-8">
                          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Included Channel Categories:</h4>
                          <div className="flex flex-wrap gap-2">
                            {plan.channels.map((category, idx) => (
                              <Badge variant="outline" key={idx} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200">
                                {category}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col space-y-3 mt-auto">
                        <Button asChild className="w-full bg-primary hover:bg-primary/90">
                          <Link href={`/sign-up?plan=${plan.id}&type=qwicktv`}>Start Free Trial</Link>
                        </Button>
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 dark:border-primary dark:text-white">
                          <Link href={`#channel-list`}>View Channels</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="lifetime" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {pricingPlans.filter(plan => plan.paymentType === "one-time").map((plan) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className={`relative h-full flex flex-col ${
                      plan.badge 
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
                      <CardContent className="flex-grow">
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-primary">{plan.price}</span>
                          <span className="text-gray-500 dark:text-gray-400"> one-time</span>
                        </div>
                        <div className="space-y-3 mt-6">
                          {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-8">
                          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Included Channel Categories:</h4>
                          <div className="flex flex-wrap gap-2">
                            {plan.channels.map((category, idx) => (
                              <Badge variant="outline" key={idx} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200">
                                {category}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col space-y-3 mt-auto">
                        <Button asChild className="w-full bg-primary hover:bg-primary/90">
                          <Link href={`/sign-up?plan=${plan.id}&type=qwicktv`}>Purchase Now</Link>
                        </Button>
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 dark:border-primary dark:text-white">
                          <Link href={`#channel-list`}>View Channels</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div id="channel-list" className="bg-gray-50 dark:bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">
              Full Channel Lineup
            </h2>
            
            <div className="flex overflow-x-auto scrollbar-hide pb-4 mb-6">
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "bg-primary hover:bg-primary/90 text-white" 
                      : "border-gray-200 dark:border-gray-800"}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                {filteredChannels.map((channel, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 border border-gray-100 dark:border-gray-800 rounded-md"
                  >
                    <div className="mr-4 flex-shrink-0">
                      <Tv className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-800 dark:text-gray-200">{channel.name}</span>
                        <div className="flex space-x-1">
                          {channel.hd && (
                            <Badge variant="outline" className="text-xs">HD</Badge>
                          )}
                          {channel.premium && (
                            <Badge variant="outline" className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800 text-xs">
                              Premium
                            </Badge>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{channel.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-6">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Channel Availability Notice</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Channel lineups may vary by location and are subject to change. Premium channels may require additional subscriptions. 
                      Some channels may be unavailable in certain regions due to licensing restrictions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
              Watch On Any Device
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              QwickTV works seamlessly across all your favorite devices
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gray-50 dark:bg-gray-900 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-2">Smartphones</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">iOS & Android</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 dark:bg-gray-900 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tablet className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-2">Tablets</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">iPad & Android</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 dark:bg-gray-900 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-2">Computers</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Windows & Mac</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 dark:bg-gray-900 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-2">Smart TVs</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Samsung, LG & More</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              <Link href="/sign-up?type=qwicktv">Start Your Free Trial Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}