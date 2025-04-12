import React, { useState } from "react";
import { Link } from "wouter";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, BookOpen, Wifi, Tv, Clock, 
         CalendarDays, ArrowRight, Search, ExternalLink, 
         Heart, MessageCircle, Share2, Bookmark, Eye, 
         ChevronDown, PenSquare, Tag, TrendingUp, 
         Zap, LucideIcon, BookMarked, Sparkles } from "lucide-react";

// Animation components
const AnimatedSvgBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" className="text-white" />
      
      {/* Decorative circles */}
      <circle cx="20%" cy="20%" r="5%" fill="currentColor" className="text-white opacity-10 animate-pulse-slow" />
      <circle cx="80%" cy="60%" r="7%" fill="currentColor" className="text-white opacity-10 animate-pulse-light" />
      <circle cx="40%" cy="85%" r="3%" fill="currentColor" className="text-white opacity-10 animate-pulse-fast" />
    </svg>
  </div>
);

// Component for article metadata
const ArticleMeta: React.FC<{ date: string; readTime: string }> = ({ date, readTime }) => (
  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
    <div className="flex items-center gap-1">
      <CalendarDays className="h-4 w-4" />
      <span>{date}</span>
    </div>
    <div className="flex items-center gap-1">
      <Clock className="h-4 w-4" />
      <span>{readTime}</span>
    </div>
  </div>
);

// Tag component with hover effect
type TagProps = {
  label: string;
  icon?: React.ReactNode;
  color?: string;
};

const ArticleTag: React.FC<TagProps> = ({ label, icon, color = "bg-blue-100 text-blue-800 hover:bg-blue-200" }) => (
  <Badge variant="outline" className={`flex items-center gap-1.5 px-3 py-1 transition-colors ${color}`}>
    {icon}
    <span>{label}</span>
  </Badge>
);

// Author component
const ArticleAuthor: React.FC<{ name: string; role?: string }> = ({ name, role }) => (
  <div className="flex items-center gap-3">
    <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
    </Avatar>
    <div>
      <p className="text-sm font-medium">{name}</p>
      {role && <p className="text-xs text-gray-500">{role}</p>}
    </div>
  </div>
);

// Featured article card component with enhanced visual design
const FeaturedArticleCard: React.FC<{
  title: string;
  excerpt: string;
  image: React.ReactNode;
  category: string;
  date: string;
  readTime: string;
  authorName: string;
  animationDelay?: string;
}> = ({ title, excerpt, image, category, date, readTime, authorName, animationDelay = '0s' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden border-0 shadow-lg transition-all duration-300 h-full card-hover animate-fadeIn"
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <div className={`transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}>
          {image}
        </div>
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-white hover:bg-primary/90">
            {category}
          </Badge>
        </div>
      </div>
      <CardHeader className="px-6 pb-0 pt-5">
        <CardTitle className="text-xl line-clamp-2 font-bold">
          <Link href={`#article-${title.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors no-underline">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 py-4">
        <CardDescription className="text-gray-600 line-clamp-3 mb-4">{excerpt}</CardDescription>
        <div className="flex items-center justify-between">
          <ArticleMeta date={date} readTime={readTime} />
          <ArticleAuthor name={authorName} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center px-6 py-4 bg-gray-50 dark:bg-gray-800">
        <div className="flex gap-3">
          <button className="text-gray-500 hover:text-primary transition-colors">
            <Heart className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-primary transition-colors">
            <MessageCircle className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-primary transition-colors">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
        <Button variant="ghost" className="gap-2 hover:text-primary">
          Read Article <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

// Standard article card for the list view
const ArticleCard: React.FC<{
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  index: number;
}> = ({ title, excerpt, category, date, readTime, index }) => (
  <Card 
    className="overflow-hidden border-0 shadow transition-all duration-300 hover:shadow-md card-hover animate-fadeIn" 
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <CardHeader className="p-5 pb-0">
      <div className="flex items-center justify-between mb-2">
        <ArticleTag 
          label={category} 
          icon={category === "Internet" ? <Wifi className="h-3 w-3" /> : <Tv className="h-3 w-3" />} 
          color={category === "Internet" ? "bg-blue-100 text-blue-800 hover:bg-blue-200" : "bg-purple-100 text-purple-800 hover:bg-purple-200"} 
        />
        <ArticleMeta date={date} readTime={readTime} />
      </div>
      <CardTitle className="text-lg line-clamp-2 mt-2">
        <Link href={`#article-${title.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors no-underline">
          {title}
        </Link>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-5">
      <CardDescription className="text-gray-600 line-clamp-2 mb-2">{excerpt}</CardDescription>
    </CardContent>
    <CardFooter className="flex justify-between items-center p-5 bg-gray-50 dark:bg-gray-800">
      <div className="flex gap-1.5">
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Bookmark className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
      <Button variant="ghost" size="sm" className="gap-1 hover:text-primary">
        Read more <ArrowRight className="h-3 w-3" />
      </Button>
    </CardFooter>
  </Card>
);

// Component for displaying popular articles in a compact format
const PopularArticleItem: React.FC<{
  title: string;
  views: number;
  date: string;
  index: number;
}> = ({ title, views, date, index }) => (
  <div className={`flex items-start gap-3 py-3 animate-fadeSlideDown`} style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
      {index + 1}
    </div>
    <div className="flex-1">
      <h4 className="text-sm font-medium leading-tight">
        <Link href="#" className="hover:text-primary transition-colors no-underline">
          {title}
        </Link>
      </h4>
      <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <Eye className="h-3 w-3" /> {views.toLocaleString()} views
        </span>
        <span>·</span>
        <span>{date}</span>
      </div>
    </div>
  </div>
);

// Topic navigation sidebar component
const TopicsSidebar: React.FC = () => {
  const topics = [
    { name: "Getting Started", count: 12, icon: BookOpen },
    { name: "Internet Speed", count: 8, icon: Zap },
    { name: "Streaming Services", count: 15, icon: Tv },
    { name: "Connectivity", count: 10, icon: Wifi },
    { name: "Troubleshooting", count: 9, icon: PenSquare },
    { name: "Industry News", count: 7, icon: TrendingUp },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg animate-fadeIn">
      <h3 className="text-lg font-bold mb-4">Explore Topics</h3>
      <div className="space-y-2">
        {topics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <button 
              key={topic.name}
              className="flex items-center justify-between w-full p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />
                <span>{topic.name}</span>
              </div>
              <Badge variant="outline" className="bg-white">{topic.count}</Badge>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Newsletter signup component with enhanced visual design
const NewsletterSignup: React.FC = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-6 md:p-8 rounded-xl text-white animate-fadeIn">
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="newsletter-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#newsletter-pattern)" />
      </svg>
    </div>
    
    <BookMarked className="h-10 w-10 mb-4" />
    
    <h3 className="text-xl font-bold mb-2 relative">Stay Informed with Our Newsletter</h3>
    <p className="mb-4 opacity-90 relative">Get the latest telecommunications insights and tips delivered to your inbox.</p>
    
    <form className="relative flex flex-col md:flex-row gap-2">
      <input 
        type="email" 
        placeholder="Your email address" 
        className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-md px-4 py-2 focus:ring-2 focus:ring-white/30 focus:outline-none"
        required
      />
      <Button className="bg-white text-primary hover:bg-white/90 shrink-0">
        Subscribe
      </Button>
    </form>
    
    <p className="mt-3 text-xs opacity-80 relative">We respect your privacy. Unsubscribe at any time.</p>
  </div>
);

const EducationalArticlesPage: React.FC = () => {
  // Article categories
  const articleCategories = [
    {
      id: "latest",
      label: "Latest Articles",
      icon: <Clock className="h-4 w-4" />
    },
    {
      id: "internet",
      label: "Internet",
      icon: <Wifi className="h-4 w-4" />
    },
    {
      id: "tv",
      label: "TV Services",
      icon: <Tv className="h-4 w-4" />
    }
  ];

  // Featured articles
  const featuredArticles = [
    {
      id: 1,
      title: "Understanding Internet Data Caps",
      excerpt: "Learn what data caps are, how they affect your service, and strategies to manage your data usage effectively without exceeding your monthly limits.",
      category: "Internet",
      icon: <Wifi className="h-5 w-5 text-blue-500" />,
      date: "March 10, 2023",
      readTime: "8 min read",
      authorName: "Alex Johnson",
      image: (
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-full h-full flex items-center justify-center text-white">
          <svg viewBox="0 0 400 225" className="w-full h-full">
            <rect width="400" height="225" fill="url(#data-cap-gradient)" />
            <defs>
              <linearGradient id="data-cap-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="112.5" r="80" fill="none" stroke="white" strokeWidth="4" strokeDasharray="10 5" className="animate-spin-slow" />
            <circle cx="200" cy="112.5" r="50" fill="white" fillOpacity="0.2" />
            <path d="M160 112.5 L240 112.5 M200 72.5 L200 152.5" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <path d="M160 82.5 C170 62.5, 230 62.5, 240 82.5" stroke="white" strokeWidth="2" fill="none" />
            <path d="M160 142.5 C170 162.5, 230 162.5, 240 142.5" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>
      )
    },
    {
      id: 2,
      title: "Smart TV vs. Streaming Device: Which Is Right for You?",
      excerpt: "Explore the pros and cons of built-in smart TV platforms versus dedicated streaming devices to find the best solution for your home entertainment needs.",
      category: "TV Services",
      icon: <Tv className="h-5 w-5 text-purple-500" />,
      date: "February 25, 2023",
      readTime: "10 min read",
      authorName: "Maya Rivera",
      image: (
        <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-full h-full flex items-center justify-center text-white">
          <svg viewBox="0 0 400 225" className="w-full h-full">
            <rect width="400" height="225" fill="url(#streaming-gradient)" />
            <defs>
              <linearGradient id="streaming-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#7e22ce" />
              </linearGradient>
            </defs>
            <rect x="100" y="62.5" width="120" height="100" rx="5" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2" />
            <rect x="110" y="72.5" width="100" height="60" rx="2" fill="white" fillOpacity="0.3" />
            <rect x="230" y="87.5" width="80" height="50" rx="5" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2" />
            <path d="M210 112.5 L240 112.5" stroke="white" strokeWidth="2" strokeDasharray="5 3" />
            <circle cx="270" cy="112.5" r="15" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1" />
          </svg>
        </div>
      )
    },
    {
      id: 3,
      title: "WiFi 6 Explained: Is It Worth Upgrading?",
      excerpt: "Discover the benefits of WiFi 6 technology and determine if upgrading your router makes sense for your household's connectivity needs and devices.",
      category: "Internet",
      icon: <Wifi className="h-5 w-5 text-blue-500" />,
      date: "February 12, 2023",
      readTime: "7 min read",
      authorName: "Chris Peterson",
      image: (
        <div className="bg-gradient-to-br from-sky-400 to-blue-600 w-full h-full flex items-center justify-center text-white">
          <svg viewBox="0 0 400 225" className="w-full h-full">
            <rect width="400" height="225" fill="url(#wifi-gradient)" />
            <defs>
              <linearGradient id="wifi-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            <path d="M130 145 A100 100 0 0 1 270 145" stroke="white" strokeWidth="4" fill="none" />
            <path d="M160 125 A60 60 0 0 1 240 125" stroke="white" strokeWidth="3" fill="none" />
            <path d="M185 105 A30 30 0 0 1 215 105" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="200" cy="160" r="10" fill="white" />
          </svg>
        </div>
      )
    }
  ];

  // Internet articles
  const internetArticles = [
    {
      id: 101,
      title: "Fiber vs. Cable: Understanding the Differences",
      excerpt: "Compare the technology, speed, reliability, and availability of fiber and cable internet connections to find the best option for your needs.",
      category: "Internet",
      date: "January 18, 2023",
      readTime: "9 min read"
    },
    {
      id: 102,
      title: "How to Optimize Your Home WiFi Network",
      excerpt: "Step-by-step guide to eliminating dead zones and maximizing your WiFi performance throughout your home with simple adjustments and tips.",
      category: "Internet",
      date: "December 5, 2022",
      readTime: "12 min read"
    },
    {
      id: 103,
      title: "Understanding Internet Speed Tests: What Do the Numbers Mean?",
      excerpt: "Learn how to interpret download speed, upload speed, and ping results from common speed tests to evaluate your internet connection quality.",
      category: "Internet",
      date: "November 20, 2022",
      readTime: "6 min read"
    },
    {
      id: 104,
      title: "Satellite Internet: What Rural Residents Should Know",
      excerpt: "Everything rural homeowners need to know about satellite internet options, limitations, and future developments in rural connectivity.",
      category: "Internet",
      date: "October 15, 2022",
      readTime: "11 min read"
    },
    {
      id: 105,
      title: "Mesh WiFi Systems: A Complete Guide",
      excerpt: "Understand how mesh WiFi systems work and whether they're the right solution for your home network challenges and connectivity needs.",
      category: "Internet",
      date: "September 28, 2022",
      readTime: "8 min read"
    }
  ];

  // TV service articles
  const tvArticles = [
    {
      id: 201,
      title: "Cable vs. Streaming: The Complete Cost Comparison",
      excerpt: "Break down the true costs of cable TV packages versus various streaming service combinations to find the most cost-effective option.",
      category: "TV Services",
      date: "January 5, 2023",
      readTime: "10 min read"
    },
    {
      id: 202,
      title: "Cutting the Cord: A Step-by-Step Guide",
      excerpt: "How to transition from traditional cable to streaming services without missing your favorite content or experiencing service interruptions.",
      category: "TV Services",
      date: "December 12, 2022",
      readTime: "15 min read"
    },
    {
      id: 203,
      title: "Satellite TV in Extreme Weather: What to Expect",
      excerpt: "Understanding how different weather conditions affect satellite TV reception and what you can do to minimize service disruptions.",
      category: "TV Services",
      date: "November 8, 2022",
      readTime: "7 min read"
    },
    {
      id: 204,
      title: "4K, HDR, and Beyond: Making Sense of TV Display Technologies",
      excerpt: "Clear explanations of modern TV display technologies and which ones actually matter for your viewing experience and content consumption.",
      category: "TV Services",
      date: "October 22, 2022",
      readTime: "9 min read"
    },
    {
      id: 205,
      title: "Sports Viewing Guide: Finding the Best TV Package for Sports Fans",
      excerpt: "Navigate the complex world of sports broadcasting rights and find the perfect TV package for your favorite sports and teams.",
      category: "TV Services",
      date: "September 15, 2022",
      readTime: "11 min read"
    }
  ];

  // Popular articles
  const popularArticles = [
    { title: "How to Choose the Right Internet Speed for Your Home", views: 24853, date: "Jan 12, 2023" },
    { title: "The Hidden Fees in Your Cable Bill Explained", views: 18342, date: "Feb 3, 2023" },
    { title: "5G Home Internet: Is It Ready to Replace Cable?", views: 15291, date: "Dec 18, 2022" },
    { title: "Streaming Services Comparison: Which Ones Are Worth It?", views: 14527, date: "Mar 7, 2023" },
    { title: "Internet Security: Protecting Your Home Network", views: 12683, date: "Feb 22, 2023" }
  ];

  return (
    <>
      <main>
        {/* Hero Section with Articles Filter Tabs */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
          <div className="absolute inset-0 bg-[url('/esim-world-connected.svg')] bg-cover bg-center opacity-20 z-0"></div>
          <AnimatedSvgBackground />
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
              
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-2 mb-1">
                  <BookMarked className="h-6 w-6 text-white" />
                  <Badge variant="outline" className="bg-white/20 text-white/90 border-white/20 backdrop-blur-sm">Knowledge Hub</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fadeSlideDown">
                  Educational Articles & Guides
                </h1>
                <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-2xl animate-fadeSlideDown" style={{ animationDelay: '0.1s' }}>
                  Explore our library of in-depth articles and guides on internet services, TV options, streaming, and more to help you make informed decisions about your home technology.
                </p>
                
                <div className="relative animate-fadeSlideDown" style={{ animationDelay: '0.2s' }}>
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search className="w-5 h-5 text-white/60" />
                  </div>
                  <input 
                    type="search" 
                    className="block w-full p-4 ps-12 text-sm border rounded-lg bg-white/10 border-white/20 placeholder-white/60 text-white focus:ring-white/30 focus:border-white/30" 
                    placeholder="Search articles by keyword or topic..." 
                  />
                  <Button className="absolute end-2.5 bottom-2.5 bg-white text-primary hover:bg-white/90">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Article Carousel Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-3">
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Featured Content
              </Badge>
              <h2 className="text-3xl font-bold mb-3">Top Articles & Guides</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our most comprehensive resources to help you navigate the telecommunications landscape with confidence.
              </p>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredArticles.map((article, index) => (
                <FeaturedArticleCard 
                  key={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  image={article.image}
                  category={article.category}
                  date={article.date}
                  readTime={article.readTime}
                  authorName={article.authorName}
                  animationDelay={`${index * 0.1}s`}
                />
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="gap-2">
                View All Featured Articles <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Main Articles Section with Tabs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                <TopicsSidebar />
                
                <div className="bg-white p-5 rounded-lg shadow-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Popular Articles
                  </h3>
                  <div className="divide-y">
                    {popularArticles.map((article, index) => (
                      <PopularArticleItem
                        key={index}
                        title={article.title}
                        views={article.views}
                        date={article.date}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
                
                <NewsletterSignup />
              </div>
              
              {/* Main content */}
              <div className="lg:col-span-3">
                <Tabs defaultValue="latest" className="w-full animate-fadeIn">
                  <TabsList className="flex space-x-2 border-b w-full justify-start rounded-none bg-transparent p-0 mb-8">
                    {articleCategories.map((category) => (
                      <TabsTrigger 
                        key={category.id}
                        value={category.id}
                        className="flex items-center gap-1.5 rounded-none border-b-2 border-transparent pb-3 pt-1.5 data-[state=active]:border-primary data-[state=active]:text-primary hover:text-primary/80 transition-colors"
                      >
                        {category.icon}
                        {category.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {/* Latest Articles Tab */}
                  <TabsContent value="latest" className="mt-0 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[...internetArticles, ...tvArticles]
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .slice(0, 6)
                        .map((article, index) => (
                          <ArticleCard 
                            key={article.id}
                            title={article.title}
                            excerpt={article.excerpt}
                            category={article.category}
                            date={article.date}
                            readTime={article.readTime}
                            index={index}
                          />
                        ))}
                    </div>
                    
                    <div className="mt-10 text-center">
                      <Button className="gap-2">
                        Load More Articles <ChevronDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                  
                  {/* Internet Articles Tab */}
                  <TabsContent value="internet" className="mt-0 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {internetArticles.map((article, index) => (
                        <ArticleCard 
                          key={article.id}
                          title={article.title}
                          excerpt={article.excerpt}
                          category={article.category}
                          date={article.date}
                          readTime={article.readTime}
                          index={index}
                        />
                      ))}
                    </div>
                    
                    <div className="mt-10 text-center">
                      <Button className="gap-2">
                        Load More Articles <ChevronDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                  
                  {/* TV Articles Tab */}
                  <TabsContent value="tv" className="mt-0 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {tvArticles.map((article, index) => (
                        <ArticleCard 
                          key={article.id}
                          title={article.title}
                          excerpt={article.excerpt}
                          category={article.category}
                          date={article.date}
                          readTime={article.readTime}
                          index={index}
                        />
                      ))}
                    </div>
                    
                    <div className="mt-10 text-center">
                      <Button className="gap-2">
                        Load More Articles <ChevronDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EducationalArticlesPage;