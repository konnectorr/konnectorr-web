import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/layout/page-layout";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight, Phone, Newspaper, Clock, CalendarDays, ArrowRight, TrendingUp, Tv, Wifi, Smartphone } from "lucide-react";

const IndustryNewsPage: React.FC = () => {
  // News articles data
  const newsArticles = [
    {
      id: 1,
      title: "Fiber Internet Expansion Accelerates Across Rural America",
      excerpt: "Federal funding drives rapid deployment of high-speed fiber connections to previously underserved communities, potentially closing the digital divide.",
      category: "Internet",
      date: "March 10, 2023",
      readTime: "4 min read",
      icon: <Wifi className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <p>
            The expansion of fiber internet access across rural America is accelerating at an unprecedented pace, driven by a combination of federal funding initiatives and increasing private investment. According to recent data from the Fiber Broadband Association, more than 60% of rural communities are expected to have fiber access by 2025, up from just 24% in 2020.
          </p>
          <p>
            This rapid deployment comes as the Broadband Equity, Access, and Deployment (BEAD) Program distributes $42.5 billion to states for high-speed internet infrastructure. The funding prioritizes fiber technology due to its superior speed, reliability, and long-term upgradeability compared to other connection types.
          </p>
          <p>
            "We're seeing a historic investment in connectivity that will fundamentally transform rural economies," said telecommunications analyst Maria Herrera. "Fiber deployment at this scale has the potential to finally close the digital divide that has disadvantaged rural communities for decades."
          </p>
          <p>
            The benefits extend beyond basic internet access. With symmetrical gigabit speeds becoming standard in new fiber deployments, rural businesses gain access to cloud services, telehealth providers can deliver high-quality video consultations, and students enjoy the same educational resources as their urban counterparts.
          </p>
          <p>
            However, challenges remain in the most remote locations where the cost per household for fiber deployment can exceed $10,000. For these areas, emerging technologies like next-generation satellite internet and fixed wireless may play complementary roles in achieving universal connectivity.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "Major Cable Providers Announce Price Increases for 2023",
      excerpt: "Leading cable and internet providers implement 5-8% price hikes citing inflation and infrastructure investments, while offering expanded service tiers.",
      category: "TV & Internet",
      date: "February 26, 2023",
      readTime: "3 min read",
      icon: <TrendingUp className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <p>
            Several major cable and internet providers have announced price increases ranging from 5-8% for 2023, affecting millions of subscribers nationwide. The companies cite rising operational costs, inflation, and continued infrastructure investments as key factors driving the increases.
          </p>
          <p>
            Comcast, Charter Spectrum, and Cox Communications have all disclosed pricing adjustments taking effect in the first quarter of the year. The increases apply to most service tiers, with broadcast TV fees and equipment rental costs seeing some of the steepest percentage increases.
          </p>
          <p>
            "While we understand rate increases are never welcome news, these adjustments reflect the rising cost of doing business and our continued investment in network improvements," said a representative from one of the affected providers. "We're simultaneously introducing new service tiers and enhanced features that deliver more value to our customers."
          </p>
          <p>
            Consumer advocacy groups have criticized the timing and scale of the increases, pointing out that many households are already struggling with inflation in essential categories. "These companies hold virtual monopolies in many markets, giving consumers few alternatives when faced with price hikes," noted consumer advocate Thomas Reynolds.
          </p>
          <p>
            For consumers looking to mitigate the impact, experts recommend:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reviewing current service packages to eliminate underutilized features</li>
            <li>Negotiating with retention departments for promotional rates</li>
            <li>Exploring bundle discounts if using multiple services</li>
            <li>Considering streaming alternatives for television service</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: "Streaming Services Introduce Ad-Supported Tiers to Boost Subscribers",
      excerpt: "Netflix, Disney+, and HBO Max launch lower-priced subscription options with advertisements as competition intensifies in the streaming market.",
      category: "Streaming",
      date: "January 18, 2023",
      readTime: "4 min read",
      icon: <Tv className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <p>
            In a significant shift in business strategy, major streaming platforms including Netflix, Disney+, and HBO Max have introduced ad-supported subscription tiers at lower price points. The move comes as subscriber growth slows across the industry and competition for viewer attention intensifies.
          </p>
          <p>
            Netflix, long resistant to advertising, launched its ad-supported plan at $6.99 per month in November, representing a 30% discount from its standard plan. Disney+ followed with its ad-supported tier at $7.99, while HBO Max offers its ad-version at $9.99 monthly.
          </p>
          <p>
            "The streaming landscape has evolved from a growth-at-all-costs model to a focus on profitability," explained media analyst Jennifer Park. "Ad-supported tiers serve dual purposes: they provide a more affordable entry point for price-sensitive consumers while opening new revenue streams for the platforms."
          </p>
          <p>
            Early data suggests the strategy is yielding results. According to industry reports, approximately 40% of new subscribers are choosing ad-supported options, with minimal cannibalization of existing premium subscriptions. Advertisers have responded enthusiastically, with ad inventory on these premium streaming platforms commanding higher rates than traditional television.
          </p>
          <p>
            The ad experience varies by platform, with most implementing 4-5 minutes of advertising per hour, significantly less than the 18-20 minutes typical of broadcast television. Viewers report general satisfaction with the trade-off between cost savings and limited commercial interruptions.
          </p>
          <p>
            Industry experts predict this hybrid model will become standard across streaming services, potentially leading to further price differentiation and ad-free premiums in the future.
          </p>
        </div>
      )
    },
    {
      id: 4,
      title: "5G Home Internet Emerges as Viable Alternative to Cable and Fiber",
      excerpt: "Wireless carriers expand 5G home internet coverage with competitive pricing and no data caps, posing a growing challenge to traditional broadband providers.",
      category: "Internet",
      date: "December 7, 2022",
      readTime: "5 min read",
      icon: <Smartphone className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <p>
            5G home internet is rapidly emerging as a serious competitor to traditional cable and fiber broadband, with major wireless carriers expanding availability and enhancing service offerings. Verizon, T-Mobile, and AT&T have all significantly increased their 5G home internet footprints in recent months, now covering over 50 million eligible households nationwide.
          </p>
          <p>
            Unlike earlier wireless home internet solutions, 5G fixed wireless access delivers fiber-competitive speeds, with typical downloads ranging from 100 Mbps to 300 Mbps and peak speeds exceeding 1 Gbps in optimal conditions. Most carriers offer these services with straightforward pricing around $50-70 monthly with no data caps, equipment fees, or long-term contracts.
          </p>
          <p>
            "5G home internet hits a sweet spot of performance, value, and flexibility that's resonating with consumers," said telecommunications analyst Marcus Chen. "The simplified billing and absence of data caps or hidden fees address major pain points in the traditional broadband market."
          </p>
          <p>
            The technology offers particular advantages in suburban areas where fiber deployment has lagged and in multi-dwelling units where installation of wired connections can be complex. Self-installation is standard, with customers typically receiving equipment by mail and completing setup in under 30 minutes without technician visits.
          </p>
          <p>
            Cable companies have responded by emphasizing their higher peak speeds and network reliability, while also exploring their own wireless offerings through MVNO partnerships or spectrum acquisitions. Industry forecasts suggest 5G could capture 10-15% of the home internet market by 2025, representing a significant disruption to the traditional broadband landscape.
          </p>
          <p>
            For consumers, the entry of wireless carriers into home internet creates much-needed competition in a market historically dominated by one or two providers per region, potentially driving improvements in service quality and pricing across all broadband options.
          </p>
        </div>
      )
    },
    {
      id: 5,
      title: "Streaming Devices Add Major Gaming Services Without Additional Hardware",
      excerpt: "Roku, Apple TV, and Fire TV integrate cloud gaming platforms, allowing users to play console-quality games using existing streaming devices and controllers.",
      category: "Streaming",
      date: "November 15, 2022",
      readTime: "3 min read",
      icon: <Tv className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <p>
            In a significant convergence of entertainment technologies, leading streaming device manufacturers are integrating cloud gaming services directly into their platforms. Roku, Apple TV, and Amazon Fire TV have all announced partnerships with major gaming services, allowing users to play console-quality games without purchasing additional dedicated gaming hardware.
          </p>
          <p>
            Amazon's Luna service is now built into Fire TV devices, while Apple Arcade continues to expand on Apple TV. Roku has partnered with both Xbox Cloud Gaming and NVIDIA GeForce NOW to bring their game streaming libraries to Roku devices. Users typically need only to connect a Bluetooth controller to begin playing.
          </p>
          <p>
            "This integration creates an all-in-one entertainment hub that further blurs the line between different media types," said gaming industry analyst Eduardo Vasquez. "For casual and moderate gamers, the convenience of accessing high-quality games through their existing streaming device may eliminate the need for a separate gaming console."
          </p>
          <p>
            The cloud gaming services offer libraries ranging from 100 to 300+ titles, with subscription pricing typically between $10-15 monthly. Performance depends heavily on internet connection quality, with providers recommending at least 25 Mbps for 1080p gaming and 35 Mbps for 4K experiences.
          </p>
          <p>
            While hardcore gamers are likely to continue preferring dedicated consoles or gaming PCs, industry observers note that this development substantially expands the potential gaming audience. The low barrier to entry – requiring no upfront hardware purchase beyond a controller – could bring gaming to demographics that have historically not engaged with traditional console ecosystems.
          </p>
        </div>
      )
    },
    {
      id: 6,
      title: "FCC Proposes New Broadband Labels for Clearer Internet Service Comparison",
      excerpt: "Standardized 'nutrition label' format aims to help consumers more easily compare internet service offerings with transparent pricing and performance metrics.",
      category: "Internet",
      date: "October 28, 2022",
      readTime: "3 min read",
      icon: <Wifi className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <p>
            The Federal Communications Commission (FCC) has proposed new broadband "nutrition labels" that would standardize how internet service providers display their pricing, performance, and terms. Similar to food nutrition labels, these broadband labels aim to present critical information in a consistent, easy-to-understand format to help consumers make informed choices when selecting internet service.
          </p>
          <p>
            The labels would require clear disclosure of:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Monthly price and whether it represents a promotional rate</li>
            <li>Additional fees such as equipment rentals, installation, and early termination</li>
            <li>Typical download and upload speeds, latency, and packet loss</li>
            <li>Data allowances and overage charges</li>
            <li>Whether the plan is subject to network management practices that could impact performance</li>
          </ul>
          <p>
            "Consumers deserve to know what they're paying for and to be able to compare service offerings on a level playing field," said FCC Chairwoman Jessica Rosenworcel. "These labels will bring much-needed transparency to the broadband marketplace."
          </p>
          <p>
            Consumer advocacy groups have broadly supported the measure, noting that complex pricing and hidden fees have long been sources of frustration for internet customers. "These labels would address the information asymmetry that currently favors providers over consumers," said Consumer Reports telecommunications policy analyst Sophia Williams.
          </p>
          <p>
            Industry response has been mixed, with some providers expressing concerns about implementation costs and the difficulty of presenting dynamic or personalized pricing in a standardized format. The proposed rule includes a phase-in period to allow providers time to develop compliant materials.
          </p>
          <p>
            The FCC is currently accepting public comments on the proposal, with final rules expected to be adopted in early 2023 and implementation required within six months of adoption.
          </p>
        </div>
      )
    }
  ];
  
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
                    <BreadcrumbLink className="text-white font-medium">Industry News</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Telecommunications Industry News
              </h1>
              <p className="text-white/90 mb-2">
                Stay informed about the latest developments, trends, and innovations in TV, internet, and telecommunications technology.
              </p>
              <p className="text-white/90">
                Have questions about recent industry changes? Call <a href="tel:8887886930" className="font-semibold text-white underline hover:text-white/80">888-788-6930</a> to speak with our experts.
              </p>
            </div>
          </div>
        </section>
        
        {/* News Articles Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {newsArticles.map((article) => (
                <Card key={article.id} className="h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <span className="text-primary">{article.category}</span>
                      </Badge>
                      <div className="flex items-center text-gray-500 text-xs">
                        <CalendarDays className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg">
                        {article.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                        <div className="flex items-center text-xs text-gray-500">
                          <Newspaper className="h-3 w-3 mr-1" />
                          <span className="mr-3">News</span>
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-4 pt-0 flex-grow">
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    {article.content}
                  </CardContent>
                  
                  <CardFooter className="pt-4 border-t">
                    <div className="w-full">
                      <Button asChild className="w-full">
                        <a href="tel:8887886930" className="flex items-center justify-center gap-2">
                          <Phone className="h-4 w-4" />
                          Discuss with Our Industry Experts
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Ahead of Telecom Trends</h2>
              <p className="text-gray-600 mb-8">
                Our experts stay on top of industry developments to help you make informed decisions about your TV and internet services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-secondary">
                  <a href="tel:8887886930" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call For Expert Insights
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/resources" className="flex items-center gap-2">
                    Explore More Resources
                    <ArrowRight className="h-5 w-5" />
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

export default IndustryNewsPage;