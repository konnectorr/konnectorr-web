import React from "react";
import { Link } from "wouter";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Phone, BookOpen, Wifi, Tv, Clock, CalendarDays, ArrowRight } from "lucide-react";

const EducationalArticlesPage: React.FC = () => {
  // Article categories
  const articleCategories = [
    {
      id: "internet",
      label: "Internet",
      icon: <Wifi className="h-4 w-4" />
    },
    {
      id: "tv",
      label: "TV Services",
      icon: <Tv className="h-4 w-4" />
    },
    {
      id: "latest",
      label: "Latest Articles",
      icon: <Clock className="h-4 w-4" />
    }
  ];

  // Featured/latest articles
  const featuredArticles = [
    {
      id: 1,
      title: "Understanding Internet Data Caps",
      excerpt: "Learn what data caps are, how they affect your service, and strategies to manage your data usage effectively.",
      category: "Internet",
      icon: <Wifi className="h-5 w-5 text-blue-500" />,
      date: "March 10, 2023",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Smart TV vs. Streaming Device: Which Is Right for You?",
      excerpt: "Explore the pros and cons of built-in smart TV platforms versus dedicated streaming devices to find the best solution for your home.",
      category: "TV Services",
      icon: <Tv className="h-5 w-5 text-purple-500" />,
      date: "February 25, 2023",
      readTime: "10 min read"
    },
    {
      id: 3,
      title: "WiFi 6 Explained: Is It Worth Upgrading?",
      excerpt: "Discover the benefits of WiFi 6 technology and determine if upgrading your router makes sense for your household's needs.",
      category: "Internet",
      icon: <Wifi className="h-5 w-5 text-blue-500" />,
      date: "February 12, 2023",
      readTime: "7 min read"
    }
  ];

  // Internet articles
  const internetArticles = [
    {
      id: 101,
      title: "Fiber vs. Cable: Understanding the Differences",
      excerpt: "Compare the technology, speed, reliability, and availability of fiber and cable internet connections.",
      date: "January 18, 2023",
      readTime: "9 min read"
    },
    {
      id: 102,
      title: "How to Optimize Your Home WiFi Network",
      excerpt: "Step-by-step guide to eliminating dead zones and maximizing your WiFi performance throughout your home.",
      date: "December 5, 2022",
      readTime: "12 min read"
    },
    {
      id: 103,
      title: "Understanding Internet Speed Tests: What Do the Numbers Mean?",
      excerpt: "Learn how to interpret download speed, upload speed, and ping results from common speed tests.",
      date: "November 20, 2022",
      readTime: "6 min read"
    },
    {
      id: 104,
      title: "Satellite Internet: What Rural Residents Should Know",
      excerpt: "Everything rural homeowners need to know about satellite internet options, limitations, and future developments.",
      date: "October 15, 2022",
      readTime: "11 min read"
    },
    {
      id: 105,
      title: "Mesh WiFi Systems: A Complete Guide",
      excerpt: "Understand how mesh WiFi systems work and whether they're the right solution for your home network challenges.",
      date: "September 28, 2022",
      readTime: "8 min read"
    }
  ];

  // TV service articles
  const tvArticles = [
    {
      id: 201,
      title: "Cable vs. Streaming: The Complete Cost Comparison",
      excerpt: "Break down the true costs of cable TV packages versus various streaming service combinations.",
      date: "January 5, 2023",
      readTime: "10 min read"
    },
    {
      id: 202,
      title: "Cutting the Cord: A Step-by-Step Guide",
      excerpt: "How to transition from traditional cable to streaming services without missing your favorite content.",
      date: "December 12, 2022",
      readTime: "15 min read"
    },
    {
      id: 203,
      title: "Satellite TV in Extreme Weather: What to Expect",
      excerpt: "Understanding how different weather conditions affect satellite TV reception and what you can do about it.",
      date: "November 8, 2022",
      readTime: "7 min read"
    },
    {
      id: 204,
      title: "4K, HDR, and Beyond: Making Sense of TV Display Technologies",
      excerpt: "Clear explanations of modern TV display technologies and which ones actually matter for your viewing experience.",
      date: "October 22, 2022",
      readTime: "9 min read"
    },
    {
      id: 205,
      title: "Sports Viewing Guide: Finding the Best TV Package for Sports Fans",
      excerpt: "Navigate the complex world of sports broadcasting rights and find the perfect TV package for your favorite sports.",
      date: "September 15, 2022",
      readTime: "11 min read"
    }
  ];

  // Sample article content for the "Smart TV vs. Streaming Device" article
  const sampleArticleContent = (
    <div className="prose prose-blue max-w-none">
      <h2>Smart TV vs. Streaming Device: Which Is Right for You?</h2>
      
      <p className="lead">
        As streaming continues to dominate the entertainment landscape, consumers face a choice: rely on a smart TV's built-in platform or add a dedicated streaming device. This guide explores the pros and cons of each approach to help you make the best decision for your viewing needs.
      </p>
      
      <h3>Smart TV Platforms: Built-in Convenience</h3>
      
      <p>
        Nearly every TV sold today comes with some form of "smart" capability—built-in apps and services that connect to the internet. Popular smart TV operating systems include:
      </p>
      
      <ul>
        <li>
          <strong>Samsung Tizen OS</strong> — Found on Samsung smart TVs
        </li>
        <li>
          <strong>LG webOS</strong> — Powers LG smart TVs
        </li>
        <li>
          <strong>Google TV/Android TV</strong> — Used by Sony, TCL, and other brands
        </li>
        <li>
          <strong>Roku TV</strong> — Integrated into TVs from TCL, Hisense, and others
        </li>
        <li>
          <strong>Amazon Fire TV</strong> — Built into certain Toshiba and Insignia models
        </li>
      </ul>
      
      <h4>Advantages of Smart TVs</h4>
      
      <ul>
        <li>
          <strong>All-in-one solution:</strong> No additional devices or remotes needed.
        </li>
        <li>
          <strong>Cost-effective:</strong> The smart platform is included in the TV's price.
        </li>
        <li>
          <strong>Simplified setup:</strong> Just connect to WiFi and start streaming.
        </li>
        <li>
          <strong>Single remote:</strong> One remote controls everything.
        </li>
        <li>
          <strong>Clean aesthetic:</strong> No additional boxes or cables cluttering your entertainment center.
        </li>
      </ul>
      
      <h4>Disadvantages of Smart TVs</h4>
      
      <ul>
        <li>
          <strong>Slower performance:</strong> Generally less powerful than dedicated streaming devices.
        </li>
        <li>
          <strong>Fewer updates:</strong> May not receive software updates as frequently or for as many years.
        </li>
        <li>
          <strong>Variable app selection:</strong> Some platforms may be missing certain streaming services.
        </li>
        <li>
          <strong>Potential privacy concerns:</strong> Some smart TVs track viewing habits and may show targeted advertisements.
        </li>
        <li>
          <strong>Aging hardware:</strong> Cannot be upgraded without replacing the entire TV.
        </li>
      </ul>
      
      <h3>Dedicated Streaming Devices: Performance Specialists</h3>
      
      <p>
        Dedicated streaming devices connect to your TV via HDMI and focus exclusively on delivering streaming content. Popular options include:
      </p>
      
      <ul>
        <li>
          <strong>Roku</strong> (Streaming Stick, Express, Ultra)
        </li>
        <li>
          <strong>Amazon Fire TV</strong> (Stick, Cube)
        </li>
        <li>
          <strong>Apple TV</strong> (HD, 4K)
        </li>
        <li>
          <strong>Google Chromecast</strong> (with Google TV)
        </li>
        <li>
          <strong>NVIDIA Shield TV</strong> (Android TV-based)
        </li>
      </ul>
      
      <h4>Advantages of Dedicated Streaming Devices</h4>
      
      <ul>
        <li>
          <strong>Better performance:</strong> Typically faster, more responsive interfaces.
        </li>
        <li>
          <strong>Regular updates:</strong> Receive more frequent software and security updates.
        </li>
        <li>
          <strong>Broader app support:</strong> Usually offer more comprehensive streaming app libraries.
        </li>
        <li>
          <strong>Portability:</strong> Can be moved between different TVs or taken when traveling.
        </li>
        <li>
          <strong>Affordable upgrades:</strong> Can upgrade your streaming experience without buying a new TV.
        </li>
      </ul>
      
      <h4>Disadvantages of Dedicated Streaming Devices</h4>
      
      <ul>
        <li>
          <strong>Additional cost:</strong> Requires purchasing a separate device ($30-200 depending on features).
        </li>
        <li>
          <strong>More complicated setup:</strong> Requires HDMI connection, power source, and potentially additional account setup.
        </li>
        <li>
          <strong>Multiple remotes:</strong> Adds another remote control unless you use a universal remote or HDMI-CEC features.
        </li>
        <li>
          <strong>Input switching:</strong> Need to switch inputs when moving between regular TV viewing and streaming device.
        </li>
      </ul>
      
      <h3>Head-to-Head Comparison</h3>
      
      <h4>Performance</h4>
      <p>
        <strong>Winner: Dedicated Devices</strong>
      </p>
      <p>
        Dedicated streaming devices typically have faster processors and more RAM than smart TVs, resulting in smoother navigation, faster app loading, and more responsive interfaces. This difference is most noticeable when using complex apps or when switching between multiple applications.
      </p>
      
      <h4>Longevity</h4>
      <p>
        <strong>Winner: Dedicated Devices</strong>
      </p>
      <p>
        Smart TV platforms often stop receiving updates after 2-4 years, potentially leaving them without access to newer streaming services or features. Dedicated devices tend to be supported longer, and when they do become obsolete, they're much less expensive to replace than a whole TV.
      </p>
      
      <h4>Convenience</h4>
      <p>
        <strong>Winner: Smart TVs</strong>
      </p>
      <p>
        For everyday use, it's hard to beat the simplicity of a smart TV. There's no input switching, fewer cables, and only one remote to manage. For casual viewers who primarily use major streaming services, this convenience factor can be significant.
      </p>
      
      <h4>Value</h4>
      <p>
        <strong>Winner: Depends on usage</strong>
      </p>
      <p>
        If you replace your TV every few years or only use basic streaming services, the built-in smart features offer good value. However, if you keep TVs for 5+ years, the ability to upgrade just the streaming device represents better long-term value.
      </p>
      
      <h3>Making Your Decision</h3>
      
      <p>Consider these factors when choosing between smart TV features and a dedicated streaming device:</p>
      
      <ol>
        <li>
          <strong>How long do you keep your TVs?</strong> Longer TV ownership periods favor dedicated devices.
        </li>
        <li>
          <strong>What's your performance threshold?</strong> If you're sensitive to lag and slow interfaces, choose a dedicated device.
        </li>
        <li>
          <strong>Which streaming services do you use?</strong> Check if your smart TV supports all your must-have services.
        </li>
        <li>
          <strong>How tech-savvy are you?</strong> Smart TVs generally offer simpler setup and operation.
        </li>
        <li>
          <strong>What's your budget?</strong> If funds are tight, using the built-in smart features can save $30-200.
        </li>
      </ol>
      
      <h3>The Best of Both Worlds</h3>
      
      <p>
        Many consumers end up with a hybrid approach: using their smart TV's capabilities for basic streaming services while adding a dedicated device for better performance or to access services not available on their TV's platform. This gives you flexibility without committing entirely to either ecosystem.
      </p>
      
      <p>
        Ultimately, there's no universal "right" choice—the best option depends on your specific needs, preferences, and how you typically watch content.
      </p>
      
      <p>
        <em>Last updated: February 25, 2023</em>
      </p>
    </div>
  );

  return (
    <>
      <main>
        {/* Hero Section with Articles Filter Tabs */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
          <div className="absolute inset-0 bg-[url('/esim-world-connected.svg')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-20 px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
                    <BreadcrumbLink className="text-white font-medium">Educational Articles</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Educational Articles & Guides
              </h1>
              <p className="text-white/90 mb-6">
                Explore our library of in-depth articles and guides on internet services, TV options, streaming, and more to help you make informed decisions about your home technology.
              </p>
              
              <form className="max-w-md">   
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-white/60" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                  </div>
                  <input type="search" className="block w-full p-4 ps-10 text-sm border rounded-lg bg-white/10 border-white/20 placeholder-white/60 text-white focus:ring-primary/70 focus:border-primary/70" placeholder="Search articles..." required />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-primary/80 hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* Articles Section with Tabs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="latest" className="w-full">
              <TabsList className="flex space-x-2 border-b w-full justify-start rounded-none bg-transparent p-0 mb-8">
                {articleCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-1.5 rounded-none border-b-2 border-transparent pb-3 pt-1.5 data-[state=active]:border-primary data-[state=active]:text-primary"
                  >
                    {category.icon}
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {/* Latest Articles Tab */}
              <TabsContent value="latest" className="mt-0">
                <div className="space-y-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold">Featured Article</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Featured article - takes full width on mobile, left column on desktop */}
                    <div className="lg:col-span-2">
                      <Card className="overflow-hidden h-full">
                        <CardContent className="p-0">
                          {sampleArticleContent}
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Sidebar with other featured articles */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold">Latest Articles</h3>
                      
                      {featuredArticles.map((article) => (
                        <Card key={article.id} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              {article.icon}
                              <div className="text-xs text-gray-500 flex items-center">
                                <CalendarDays className="h-3 w-3 mr-1" />
                                {article.date}
                              </div>
                            </div>
                            <CardTitle className="text-lg mt-1">{article.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="line-clamp-2">
                              {article.excerpt}
                            </CardDescription>
                          </CardContent>
                          <CardFooter className="pt-0">
                            <div className="flex items-center justify-between w-full">
                              <span className="text-xs text-gray-500 flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {article.readTime}
                              </span>
                              <Button variant="link" className="h-auto p-0">
                                Read More <ArrowRight className="ml-1 h-3 w-3" />
                              </Button>
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Internet Articles Tab */}
              <TabsContent value="internet" className="mt-0">
                <div className="space-y-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold">Internet Articles</h2>
                    <p className="text-gray-600 mt-2">Learn about internet technologies, troubleshooting, and optimization.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {internetArticles.map((article) => (
                      <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="text-xs text-gray-500 flex items-center mb-2">
                            <CalendarDays className="h-3 w-3 mr-1" />
                            {article.date}
                          </div>
                          <CardTitle className="text-lg">{article.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="line-clamp-3">
                            {article.excerpt}
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="border-t pt-3">
                          <div className="flex items-center justify-between w-full">
                            <span className="text-xs text-gray-500 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {article.readTime}
                            </span>
                            <Button variant="link" className="h-auto p-0">
                              Read More <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              {/* TV Services Tab */}
              <TabsContent value="tv" className="mt-0">
                <div className="space-y-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold">TV Service Articles</h2>
                    <p className="text-gray-600 mt-2">Explore guides on cable, satellite, streaming services, and cutting the cord.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tvArticles.map((article) => (
                      <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="text-xs text-gray-500 flex items-center mb-2">
                            <CalendarDays className="h-3 w-3 mr-1" />
                            {article.date}
                          </div>
                          <CardTitle className="text-lg">{article.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="line-clamp-3">
                            {article.excerpt}
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="border-t pt-3">
                          <div className="flex items-center justify-between w-full">
                            <span className="text-xs text-gray-500 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {article.readTime}
                            </span>
                            <Button variant="link" className="h-auto p-0">
                              Read More <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Informed with Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to receive our latest articles, guides, and tips on getting the most from your internet and TV services delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
              />
              <Button className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default EducationalArticlesPage;