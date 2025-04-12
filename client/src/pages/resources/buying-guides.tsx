import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight, Phone, Wifi, Tv, Smartphone, PenTool, ChevronDown, Star, Zap, Check } from "lucide-react";

const BuyingGuidesPage: React.FC = () => {
  // Internet Buying Guide Content
  const internetBuyingGuide = {
    title: "Internet Service Buying Guide",
    introduction: "Choosing the right internet service requires understanding your needs, the available technologies, and how to compare providers effectively.",
    sections: [
      {
        title: "Understanding Connection Types",
        content: (
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <Zap className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-semibold">Fiber-Optic Internet</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Using glass or plastic fibers to transmit data via light signals, fiber-optic internet is the fastest and most reliable technology available.
              </p>
              <div className="flex items-center text-xs text-gray-500 space-x-4">
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  Speeds up to 10 Gbps
                </span>
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  Lowest latency
                </span>
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  Equal upload/download
                </span>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <Tv className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-semibold">Cable Internet</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Utilizing the same coaxial cables as cable TV, this technology provides high-speed internet with wide availability but shared bandwidth.
              </p>
              <div className="flex items-center text-xs text-gray-500 space-x-4">
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  Speeds up to 1 Gbps
                </span>
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  Widely available
                </span>
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  Lower upload speeds
                </span>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <Smartphone className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-semibold">DSL Internet</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Digital Subscriber Line uses traditional phone lines to deliver internet service, offering a reliable connection with consistent speeds.
              </p>
              <div className="flex items-center text-xs text-gray-500 space-x-4">
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  Speeds up to 100 Mbps
                </span>
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  Nearly universal availability
                </span>
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  Not shared with neighbors
                </span>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "How Much Speed Do You Need?",
        content: (
          <div className="space-y-4">
            <p className="text-gray-600">
              Internet speed requirements vary based on household size, usage patterns, and connected devices. Here's a general guide:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Household Size</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Light Usage</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Moderate Usage</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heavy Usage</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1-2 People</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25 Mbps</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50-100 Mbps</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">200+ Mbps</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3-4 People</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50 Mbps</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100-200 Mbps</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">300+ Mbps</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5+ People</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100 Mbps</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">200-300 Mbps</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500+ Mbps</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-sm text-gray-600">
              <p className="font-medium mb-1">Activity-Based Requirements:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Email & web browsing: 1-5 Mbps</li>
                <li>SD video streaming: 3-5 Mbps</li>
                <li>HD video streaming: 5-10 Mbps per stream</li>
                <li>4K video streaming: 25-35 Mbps per stream</li>
                <li>Online gaming: 10-25 Mbps with low latency</li>
                <li>Video conferencing: 5-10 Mbps</li>
                <li>Large file downloads/uploads: 40+ Mbps</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        title: "Comparing Internet Service Providers",
        content: (
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">
              When comparing internet service providers, look beyond just the advertised price and speed. Here are important factors to consider:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Contract Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Contract length (month-to-month vs. 1-2 year)</li>
                    <li>• Early termination fees</li>
                    <li>• Price guarantees and promotional periods</li>
                    <li>• Auto-renewal policies</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Hidden Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Equipment rental fees (modem/router)</li>
                    <li>• Installation and activation fees</li>
                    <li>• Data overage charges</li>
                    <li>• Rate increases after promotional period</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Service Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Actual vs. advertised speeds</li>
                    <li>• Reliability and uptime guarantees</li>
                    <li>• Peak hour slowdowns (7-11pm)</li>
                    <li>• Customer reviews and satisfaction ratings</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Extra Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Included Wi-Fi equipment quality</li>
                    <li>• Security features (antivirus, parental controls)</li>
                    <li>• Bundling options and discounts</li>
                    <li>• Customer service availability and quality</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      }
    ]
  };
  
  // TV Service Buying Guide
  const tvBuyingGuide = {
    title: "TV Service Buying Guide",
    introduction: "Finding the right TV service involves understanding the different delivery methods, channel packages, and emerging streaming alternatives.",
    sections: [
      {
        title: "Types of TV Services",
        content: (
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <Tv className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-semibold">Cable TV</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Delivered via coaxial cable, offering a wide selection of channels with consistent quality. Available in most urban and suburban areas.
              </p>
              <div className="flex items-center text-xs text-gray-500 space-x-4">
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  100+ channels
                </span>
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  HD & 4K options
                </span>
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  Bundle savings
                </span>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <Wifi className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-semibold">Satellite TV</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Delivered via satellite dish, available virtually anywhere with a clear view of the southern sky. Can be affected by severe weather.
              </p>
              <div className="flex items-center text-xs text-gray-500 space-x-4">
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  150+ channels
                </span>
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  National availability
                </span>
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  Sports packages
                </span>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-2">
                <Zap className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-semibold">Streaming TV Services</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Internet-based services offering live TV channels and on-demand content without long-term contracts or equipment rentals.
              </p>
              <div className="flex items-center text-xs text-gray-500 space-x-4">
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  No contracts
                </span>
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  Multi-device viewing
                </span>
                <span className="flex items-center">
                  <Check className="h-3 w-3 text-green-500 mr-1" /> 
                  Cloud DVR
                </span>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Understanding Channel Packages",
        content: (
          <div className="space-y-4">
            <p className="text-gray-600">
              Most TV providers offer tiered channel packages at different price points. Understanding what's included in each tier helps you avoid paying for channels you don't watch.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typical Channels</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Range</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Basic/Starter</td>
                    <td className="px-6 py-4 text-sm text-gray-500">20-60 channels (local, major networks, some cable)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">News watchers, casual viewers</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$25-50/month</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Standard/Popular</td>
                    <td className="px-6 py-4 text-sm text-gray-500">70-120 channels (adds popular cable networks)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Families, general entertainment</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$60-90/month</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Premium/Everything</td>
                    <td className="px-6 py-4 text-sm text-gray-500">150+ channels (adds specialty, premium movie channels)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Movie buffs, sports fans</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$100-150+/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-sm text-gray-600 mt-4">
              <p className="font-medium mb-1">Add-On Considerations:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Premium movie channels (HBO, Showtime) typically cost $10-20 each per month</li>
                <li>Sports packages can add $5-25 per month depending on content</li>
                <li>International/foreign language packages range from $5-30 monthly</li>
                <li>DVR service typically adds $5-15 monthly plus possible equipment fees</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        title: "Evaluating Equipment & Features",
        content: (
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">
              The equipment and features offered by TV providers can significantly impact your viewing experience. Here are key factors to consider:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">DVR Capabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Storage capacity (hours of content)</li>
                    <li>• Number of simultaneous recordings</li>
                    <li>• Record series and conflict resolution</li>
                    <li>• Cloud vs. local storage options</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Multi-Room Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Whole-home DVR capabilities</li>
                    <li>• Additional receiver/box fees</li>
                    <li>• Wireless vs. wired connections</li>
                    <li>• Maximum supported TVs</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">On-Demand Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Free vs. paid content availability</li>
                    <li>• New release movies and pricing</li>
                    <li>• Previous season TV show availability</li>
                    <li>• Content refresh frequency</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Mobile/Streaming Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• TV Everywhere app access</li>
                    <li>• Out-of-home streaming rights</li>
                    <li>• Download capabilities for offline viewing</li>
                    <li>• Device limitations and restrictions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      }
    ]
  };
  
  return (
    <PageLayout>
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Breadcrumb className="mb-6">
                <BreadcrumbList className="text-white/80">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-white/80 hover:text-white">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/resources" className="text-white/80 hover:text-white">Resources</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="text-white font-medium">Buying Guides</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                TV & Internet Buying Guides
              </h1>
              <p className="text-white/90 mb-2">
                Expert advice to help you make informed decisions when choosing the right TV and internet services for your home.
              </p>
              <p className="text-white/90">
                Need personal guidance? Call <a href="tel:8887886930" className="font-semibold text-white underline hover:text-white/80">888-788-6930</a> to speak with our experts.
              </p>
            </div>
          </div>
        </section>
        
        {/* Buying Guides Tabs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="internet" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="internet" className="flex items-center gap-2">
                    <Wifi className="h-4 w-4" /> Internet Service
                  </TabsTrigger>
                  <TabsTrigger value="tv" className="flex items-center gap-2">
                    <Tv className="h-4 w-4" /> TV Service
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Internet Buying Guide Content */}
              <TabsContent value="internet" className="space-y-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{internetBuyingGuide.title}</h2>
                  <p className="text-gray-600 mb-8">
                    {internetBuyingGuide.introduction}
                  </p>
                </div>
                
                {internetBuyingGuide.sections.map((section, index) => (
                  <div key={index} className="max-w-3xl mx-auto border-t pt-8 first:border-t-0 first:pt-0">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-xs mr-3">
                        {index + 1}
                      </span>
                      {section.title}
                    </h3>
                    {section.content}
                  </div>
                ))}
              </TabsContent>
              
              {/* TV Buying Guide Content */}
              <TabsContent value="tv" className="space-y-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{tvBuyingGuide.title}</h2>
                  <p className="text-gray-600 mb-8">
                    {tvBuyingGuide.introduction}
                  </p>
                </div>
                
                {tvBuyingGuide.sections.map((section, index) => (
                  <div key={index} className="max-w-3xl mx-auto border-t pt-8 first:border-t-0 first:pt-0">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-xs mr-3">
                        {index + 1}
                      </span>
                      {section.title}
                    </h3>
                    {section.content}
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Provider Recommendations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Recommended Providers</h2>
              <p className="text-gray-600">
                Based on our expert analysis, these providers offer the best combination of value, reliability, and customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">Optimum</CardTitle>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>Fiber & Cable Specialist</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Speeds up to 1 Gig with fiber options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>No contracts required on most plans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Bundle with TV for additional savings</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href="tel:8887886930" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call for Special Offers
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-primary/20">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">Spectrum</CardTitle>
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <CardDescription>Wide Availability</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Available in 41 states across the US</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>No data caps on any internet plans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Free security software included</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href="tel:8887886930" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call for Special Offers
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-primary/20">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">AT&T Fiber</CardTitle>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>Best for Symmetrical Speeds</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Equal upload and download speeds</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Options up to 5 Gbps in select areas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Excellent reliability and low latency</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href="tel:8887886930" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call for Special Offers
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Expert Assistance CTA */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Find Your Perfect Plan?</h2>
              <p className="text-gray-600 mb-8">
                Our experts can help you navigate provider options, compare plans, and secure the best deals in your area.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-secondary">
                  <a href="tel:8887886930" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Us: 888-788-6930
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/resources" className="flex items-center gap-2">
                    Explore More Resources
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default BuyingGuidesPage;