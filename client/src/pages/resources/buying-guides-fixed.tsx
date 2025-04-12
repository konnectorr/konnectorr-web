import React from "react";
import { Link } from "wouter";
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
              <h4 className="font-medium text-lg">Fiber Internet</h4>
              <p className="text-sm text-gray-600">Fastest and most reliable option, using fiber-optic cables to deliver data at light speed. Ideal for heavy users and large households.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-lg">Cable Internet</h4>
              <p className="text-sm text-gray-600">Uses the same coaxial cables as cable TV. Widely available with good speeds, though can slow during peak usage times.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-lg">DSL</h4>
              <p className="text-sm text-gray-600">Delivers internet through phone lines. More reliable than dial-up but slower than cable or fiber. Good for basic internet use.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-lg">Satellite</h4>
              <p className="text-sm text-gray-600">Available virtually anywhere with a clear view of the southern sky. Higher latency but essential in rural areas without other options.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-lg">5G/Fixed Wireless</h4>
              <p className="text-sm text-gray-600">Emerging technology that delivers internet wirelessly to your home. Growing availability with competitive speeds.</p>
            </div>
          </div>
        )
      },
      {
        title: "Determining Your Speed Needs",
        content: (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Light Use</h4>
                <p className="text-sm text-gray-600 mb-2">1-2 users</p>
                <ul className="text-sm space-y-1">
                  <li>• Email and web browsing</li>
                  <li>• Social media</li>
                  <li>• SD video streaming</li>
                </ul>
                <div className="mt-3 font-medium">25-50 Mbps</div>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Medium Use</h4>
                <p className="text-sm text-gray-600 mb-2">2-4 users</p>
                <ul className="text-sm space-y-1">
                  <li>• HD video streaming</li>
                  <li>• Video conferencing</li>
                  <li>• Gaming (casual)</li>
                </ul>
                <div className="mt-3 font-medium">100-200 Mbps</div>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Heavy Use</h4>
                <p className="text-sm text-gray-600 mb-2">4-6 users</p>
                <ul className="text-sm space-y-1">
                  <li>• 4K streaming</li>
                  <li>• Multiple device streaming</li>
                  <li>• Regular downloads</li>
                  <li>• Online gaming</li>
                </ul>
                <div className="mt-3 font-medium">300-500 Mbps</div>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Extreme Use</h4>
                <p className="text-sm text-gray-600 mb-2">6+ users</p>
                <ul className="text-sm space-y-1">
                  <li>• Multiple 4K streams</li>
                  <li>• Large file downloads</li>
                  <li>• Smart home devices</li>
                  <li>• Professional applications</li>
                </ul>
                <div className="mt-3 font-medium">1 Gbps+</div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Provider Comparison Checklist",
        content: (
          <div className="space-y-4">
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <div>
                  <strong>Contract Terms:</strong> Compare contract lengths, early termination fees, and whether month-to-month options are available.
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <div>
                  <strong>Equipment Fees:</strong> Ask about modem/router rental fees vs. buying your own compatible equipment.
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <div>
                  <strong>Data Caps:</strong> Some providers limit monthly data usage with overage charges. Look for unlimited data if you're a heavy user.
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <div>
                  <strong>Price Guarantees:</strong> Find out how long the promotional price lasts and what the standard rate will be afterwards.
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <div>
                  <strong>Customer Service:</strong> Research the provider's reputation for customer support and technical assistance.
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <div>
                  <strong>Installation:</strong> Compare professional installation fees versus self-installation options.
                </div>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                <div>
                  <strong>Bundle Options:</strong> Consider potential savings from bundling internet with TV, phone, or mobile services.
                </div>
              </li>
            </ul>
          </div>
        )
      }
    ]
  };

  // TV Service Buying Guide Content
  const tvBuyingGuide = {
    title: "TV Service Buying Guide",
    introduction: "Navigate the world of TV entertainment options with our comprehensive guide covering traditional TV services and streaming alternatives.",
    sections: [
      {
        title: "Types of TV Services",
        content: (
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-lg">Cable TV</h4>
              <p className="text-sm text-gray-600">Delivered through coaxial cables, offering hundreds of channels and on-demand content. Usually bundlable with internet service.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-lg">Satellite TV</h4>
              <p className="text-sm text-gray-600">Requires a satellite dish installation, available nationwide. Good for rural areas and typically offers more channel options than cable.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-lg">IPTV (Internet Protocol TV)</h4>
              <p className="text-sm text-gray-600">Delivered over internet connections like fiber. Offers advanced features like multi-view and stronger integration with streaming services.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-lg">Streaming Services</h4>
              <p className="text-sm text-gray-600">Subscription-based platforms (Netflix, Hulu, Disney+) offering on-demand content without traditional channels.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-lg">Live TV Streaming</h4>
              <p className="text-sm text-gray-600">Services like YouTube TV and Hulu + Live TV that offer traditional channels without cable or satellite equipment.</p>
            </div>
          </div>
        )
      },
      {
        title: "Channel Package Selection",
        content: (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Basic/Starter Packages</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Local broadcast channels</li>
                  <li>• Popular cable networks</li>
                  <li>• Limited sports coverage</li>
                  <li>• Most affordable option</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Standard/Popular Packages</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• All basic channels plus...</li>
                  <li>• More entertainment networks</li>
                  <li>• More sports channels</li>
                  <li>• Good value for most households</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Premium Packages</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• All standard channels plus...</li>
                  <li>• Premium movie channels</li>
                  <li>• Specialty and niche channels</li>
                  <li>• Comprehensive sports coverage</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Add-Ons & Premium Channels</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Sports packages (NFL, NBA, MLB)</li>
                  <li>• Movie channels (HBO, Showtime)</li>
                  <li>• International programming</li>
                  <li>• Specialized content</li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg mt-4">
              <h4 className="font-medium mb-2">Pro Tip:</h4>
              <p className="text-sm">Make a list of your must-have channels before comparing packages. Don't pay for channels you won't watch. Many providers now offer customizable packages.</p>
            </div>
          </div>
        )
      },
      {
        title: "Equipment & Features Comparison",
        content: (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">DVR Capabilities</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Storage capacity (hours)</li>
                  <li>• Simultaneous recordings</li>
                  <li>• Cloud vs. local storage</li>
                  <li>• Recording retention period</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">On-Demand Content</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Free vs. paid content</li>
                  <li>• Library size</li>
                  <li>• New release availability</li>
                  <li>• Viewing window length</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Multi-Room Viewing</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Additional receiver costs</li>
                  <li>• Wireless vs. wired connections</li>
                  <li>• Mobile device streaming</li>
                  <li>• Out-of-home access</li>
                </ul>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Advanced Features to Consider:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Voice remote control
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  4K/HDR compatibility
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Integrated streaming apps
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  AI-powered recommendations
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Restart/Rewind live TV
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Parental controls
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Sports stats/features
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Screen mirroring capabilities
                </li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  };

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
          <div className="absolute inset-0 bg-[url('/esim-world-connected.svg')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-20 px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="text-white/80 hover:text-white">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/50">
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/resources" className="text-white/80 hover:text-white">Resources</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/50">
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
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Tabs defaultValue="internet" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="internet" className="text-base py-3">
                  <Wifi className="mr-2 h-4 w-4" />
                  Internet Guide
                </TabsTrigger>
                <TabsTrigger value="tv" className="text-base py-3">
                  <Tv className="mr-2 h-4 w-4" />
                  TV Service Guide
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="internet" className="mt-0">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">{internetBuyingGuide.title}</h2>
                  <p className="text-gray-600">{internetBuyingGuide.introduction}</p>
                </div>
                
                <div className="space-y-10">
                  {internetBuyingGuide.sections.map((section, index) => (
                    <div key={index} className="border-t pt-8">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <span className="flex items-center justify-center bg-primary/10 text-primary rounded-full w-8 h-8 mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        {section.title}
                      </h3>
                      {section.content}
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 rounded-xl bg-primary/5 p-6 border border-primary/10">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <PenTool className="mr-2 h-5 w-5 text-primary" />
                    Expert Tip
                  </h3>
                  <p className="text-gray-700">
                    When comparing internet plans, look beyond the advertised speed and price. Consider factors like the provider's reliability in your specific neighborhood, hidden fees, and whether there's a data cap that might limit your usage. Speaking with neighbors about their experiences can provide valuable insights that professional reviews might miss.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="tv" className="mt-0">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">{tvBuyingGuide.title}</h2>
                  <p className="text-gray-600">{tvBuyingGuide.introduction}</p>
                </div>
                
                <div className="space-y-10">
                  {tvBuyingGuide.sections.map((section, index) => (
                    <div key={index} className="border-t pt-8">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <span className="flex items-center justify-center bg-primary/10 text-primary rounded-full w-8 h-8 mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        {section.title}
                      </h3>
                      {section.content}
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 rounded-xl bg-primary/5 p-6 border border-primary/10">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <PenTool className="mr-2 h-5 w-5 text-primary" />
                    Cord-Cutting Consideration
                  </h3>
                  <p className="text-gray-700">
                    Before committing to a traditional TV service, calculate the total cost of streaming alternatives that would provide the content you want. Many households find that a combination of an antenna for local channels and 2-3 streaming services can provide most of their desired content at a lower cost than cable or satellite packages.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </>
  );
};

export default BuyingGuidesPage;