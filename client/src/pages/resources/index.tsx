import React from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Phone, BookText, HelpCircle, Calculator, FileText, PenTool, Wifi, DollarSign, Sparkles } from "lucide-react";

const ResourcesPage: React.FC = () => {
  type ResourceCategory = {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
    color: string;
    comingSoon?: boolean;
  };

  const resourceCategories: ResourceCategory[] = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Bill Analysis Tool",
      description: "Analyze your current telecom bill to uncover savings and find better plans",
      link: "/resources/bill-analyzer",
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      icon: <BookText className="h-8 w-8" />,
      title: "Buying Guides",
      description: "Expert advice on choosing the right TV and internet plans for your needs",
      link: "/resources/buying-guides",
      color: "bg-blue-50 text-blue-700 border-blue-100"
    },
    {
      icon: <HelpCircle className="h-8 w-8" />,
      title: "FAQ & Help Center",
      description: "Get answers to your most common TV and internet service questions",
      link: "/resources/faq",
      color: "bg-green-50 text-green-700 border-green-100"
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Tools & Calculators",
      description: "Estimate your monthly bills and calculate your internet speed needs",
      link: "/resources/tools",
      color: "bg-purple-50 text-purple-700 border-purple-100"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Internet Speed Test",
      description: "Test your internet connection speed and get recommendations",
      link: "/resources/speed-test",
      color: "bg-cyan-50 text-cyan-700 border-cyan-100"
    },
    {
      icon: <BookText className="h-8 w-8" />,
      title: "Educational Articles",
      description: "In-depth articles and guides about internet and TV technologies",
      link: "/resources/educational-articles",
      color: "bg-amber-50 text-amber-700 border-amber-100"
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Industry News",
      description: "Stay updated on the latest telecommunications industry trends",
      link: "/resources/industry-news",
      color: "bg-red-50 text-red-700 border-red-100"
    }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Fiber vs. Cable Internet: Which Is Better For Your Home?",
      excerpt: "Compare speed, reliability, and cost factors to determine the best internet connection for your household needs.",
      category: "Internet",
      image: (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <rect width="200" height="150" fill="#f0f5ff" />
          <circle cx="50" cy="75" r="30" fill="#0066cc" />
          <path d="M50 45 L50 105" stroke="#003366" strokeWidth="3" />
          <path d="M20 75 L80 75" stroke="#003366" strokeWidth="3" />
          <rect x="100" y="45" width="60" height="60" rx="5" fill="#ff6600" />
          <path d="M100 75 L160 75" stroke="#993300" strokeWidth="3" />
          <path d="M130 45 L130 105" stroke="#993300" strokeWidth="3" />
          <path d="M50 75 C50 75, 75 25, 130 75" stroke="#333" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      )
    },
    {
      id: 2,
      title: "How to Choose the Right Internet Speed for Your Household",
      excerpt: "Learn how to calculate your household's bandwidth needs based on usage patterns and connected devices.",
      category: "Buying Guide",
      image: (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <rect width="200" height="150" fill="#f5f8ff" />
          <circle cx="100" cy="75" r="50" fill="#e6f0ff" stroke="#0050b3" strokeWidth="2" />
          <path d="M100 35 L100 115" stroke="#0050b3" strokeWidth="3" />
          <path d="M60 75 L140 75" stroke="#0050b3" strokeWidth="3" />
          <circle cx="70" cy="55" r="10" fill="#0050b3" />
          <circle cx="130" cy="95" r="10" fill="#0050b3" />
          <path d="M60 40 L65 35 L70 40" stroke="#0050b3" strokeWidth="2" fill="none" />
          <path d="M130 110 L135 115 L140 110" stroke="#0050b3" strokeWidth="2" fill="none" />
          <text x="100" y="20" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">Speed</text>
        </svg>
      )
    },
    {
      id: 3,
      title: "Cable TV vs. Streaming: Cost Comparison 2023",
      excerpt: "An updated analysis of the real costs of traditional cable packages versus multiple streaming service subscriptions.",
      category: "Comparison",
      image: (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <rect width="200" height="150" fill="#f8f5ff" />
          <rect x="30" y="40" width="60" height="80" rx="2" fill="#333" />
          <rect x="40" y="50" width="40" height="25" rx="2" fill="#0066ff" />
          <rect x="40" y="85" width="40" height="25" rx="2" fill="#0066ff" />
          <rect x="110" y="40" width="60" height="80" rx="2" fill="#f0f0f0" stroke="#333" strokeWidth="2" />
          <circle cx="140" cy="60" r="15" fill="#ff3300" />
          <circle cx="140" cy="100" r="15" fill="#00cc66" />
          <path d="M40 130 L160 130" stroke="#333" strokeWidth="2" />
          <rect x="50" y="130" width="20" height="10" fill="#333" />
          <rect x="130" y="130" width="20" height="15" fill="#333" />
        </svg>
      )
    }
  ];
  
  return (
    <>
      <Header />
      
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
                    <BreadcrumbLink className="text-white font-medium">Resources</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Konnectorr Resource Center
              </h1>
              <p className="text-white/90 mb-6">
                Expert guides, tools, and resources to help you make informed decisions about your TV and internet services.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="tel:8885698194" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call For Personalized Help: 888-569-8194
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Bill Analysis Tool */}
        <section className="py-12 bg-gradient-to-r from-primary/90 to-primary/60 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none">
                      <Sparkles className="h-3.5 w-3.5 mr-1" />
                      <span>New Feature</span>
                    </Badge>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Bill Analysis Tool</h2>
                  <p className="text-white/80 text-lg mb-6">
                    Upload or enter your current telecom bill details and discover potential savings with our AI-powered bill analyzer. Find hidden fees and get personalized recommendations for better plans.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="bg-white/20 rounded-full p-1 mt-0.5">
                        <DollarSign className="h-4 w-4" />
                      </div>
                      <span>Uncover hidden fees you didn't know you were paying</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-white/20 rounded-full p-1 mt-0.5">
                        <DollarSign className="h-4 w-4" />
                      </div>
                      <span>Our customers save an average of 30% on monthly bills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-white/20 rounded-full p-1 mt-0.5">
                        <DollarSign className="h-4 w-4" />
                      </div>
                      <span>Get side-by-side comparison with better alternatives</span>
                    </li>
                  </ul>
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Link href="/resources/bill-analyzer">
                      Analyze Your Bill Now
                    </Link>
                  </Button>
                </div>
                <div className="md:w-1/2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 md:p-8 shadow-lg">
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-bold text-xl">Sample Bill Savings</div>
                    <div className="bg-white/20 rounded-full px-3 py-1 text-sm">30% Average Savings</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-white/20">
                      <div>
                        <div className="font-medium text-lg">Current Monthly Bill</div>
                        <div className="text-white/60 text-sm">Average customer bill</div>
                      </div>
                      <div className="text-2xl font-bold">$180.00</div>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-white/20">
                      <div>
                        <div className="font-medium text-lg">Hidden Fees Found</div>
                        <div className="text-white/60 text-sm">Common unnecessary charges</div>
                      </div>
                      <div className="text-xl font-bold text-amber-300">$37.00</div>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-white/20">
                      <div>
                        <div className="font-medium text-lg">Recommended Plan</div>
                        <div className="text-white/60 text-sm">Better value alternatives</div>
                      </div>
                      <div className="text-2xl font-bold">$125.00</div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <div>
                        <div className="font-medium text-lg">Monthly Savings</div>
                      </div>
                      <div className="text-2xl font-bold text-green-300">$55.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Explore Our Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourceCategories.map((category, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-lg border ${category.color} relative transition-transform hover:translate-y-[-5px]`}
                >
                  {category.comingSoon && (
                    <span className="absolute top-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded">Coming Soon</span>
                  )}
                  <div className="mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  {category.comingSoon ? (
                    <Button disabled variant="outline" className="w-full">Explore</Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full">
                      <Link href={category.link}>Explore</Link>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Featured Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <div key={article.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-100">
                    {article.image}
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">{article.category}</div>
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/resources/buying-guides">Read More</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Expert Assistance CTA */}
        <section className="py-16 bg-light border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Personalized Assistance?</h2>
              <p className="text-gray-600 mb-8">
                Our TV and internet experts are ready to help you find the perfect services for your needs and budget.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-secondary">
                <a href="tel:8885698194" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Us: 888-569-8194
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ResourcesPage;