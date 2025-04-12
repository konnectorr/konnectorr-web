import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { blogPosts } from "@/lib/data";
import { 
  Tv, Wifi, Play, BarChart2, Calendar, ArrowRight, 
  Bookmark, Eye, Filter, ChevronRight, Search, RefreshCw
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BlogSection: React.FC = () => {
  // Helper function to render custom SVG thumbnail based on post ID
  const renderThumbnail = (postId: number) => {
    switch (postId) {
      case 1: // Cable vs Streaming post
        return (
          <div className="w-full h-48 bg-gradient-to-r from-primary/10 to-primary/20 flex items-center justify-center">
            <div className="flex items-center justify-center gap-8 w-full px-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <Tv className="w-10 h-10 text-primary" />
                </div>
                <span className="text-sm font-medium text-dark">Cable TV</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="font-bold text-gray-500">VS</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                  <Play className="w-10 h-10 text-secondary" />
                </div>
                <span className="text-sm font-medium text-dark">Streaming</span>
              </div>
            </div>
          </div>
        );
      
      case 2: // Internet Speeds guide
        return (
          <div className="w-full h-48 bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center">
            <div className="flex flex-col items-center px-8">
              <BarChart2 className="w-16 h-16 text-primary mb-2" />
              <div className="flex w-full justify-between gap-4 mt-2">
                <div className="h-6 w-4 bg-primary/20 rounded-sm"></div>
                <div className="h-10 w-4 bg-primary/40 rounded-sm"></div>
                <div className="h-14 w-4 bg-primary/60 rounded-sm"></div>
                <div className="h-20 w-4 bg-primary/80 rounded-sm"></div>
                <div className="h-24 w-4 bg-primary rounded-sm"></div>
              </div>
              <span className="text-sm font-medium text-dark mt-2">Speed Comparison</span>
            </div>
          </div>
        );
      
      case 3: // Streaming Devices
        return (
          <div className="w-full h-48 bg-gradient-to-r from-gray-50 to-gray-200 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-100 rounded-md flex items-center justify-center">
                  <span className="text-red-500 font-bold text-xs">Roku</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-md flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-xs">Amazon</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                  <span className="text-gray-500 font-bold text-xs">Apple</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-md flex items-center justify-center">
                  <span className="text-green-500 font-bold text-xs">Google</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 4: // Optimum Fiber vs Cable
        return (
          <div className="w-full h-48 bg-gradient-to-r from-blue-50 to-blue-200 flex items-center justify-center">
            <div className="flex items-center justify-center gap-8 w-full px-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <Wifi className="w-10 h-10 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">Optimum Fiber</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="font-bold text-gray-500">VS</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                  <Tv className="w-10 h-10 text-gray-500" />
                </div>
                <span className="text-sm font-medium text-gray-600">Cable</span>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="450" fill="#e9ecef"/>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fill="#777">{blogPosts.find(p => p.id === postId)?.title.split(':')[0]}</text>
            </svg>
          </div>
        );
    }
  };
  
  // Filter by category state
  const [category, setCategory] = useState("all");
  
  // Get categories based on post titles
  const getCategories = () => {
    const categories = {
      all: 'All Resources',
      internet: 'Internet',
      tv: 'TV & Cable',
      streaming: 'Streaming',
      providers: 'Providers'
    };
    return categories;
  };
  
  // Filter posts based on selected category
  const filteredPosts = () => {
    if (category === 'all') return blogPosts;
    
    return blogPosts.filter(post => {
      const title = post.title.toLowerCase();
      switch(category) {
        case 'internet': 
          return title.includes('internet') || title.includes('fiber') || title.includes('speed');
        case 'tv': 
          return title.includes('tv') || title.includes('cable') || (title.includes('vs') && !title.includes('internet'));
        case 'streaming': 
          return title.includes('streaming') || title.includes('devices');
        case 'providers': 
          return title.includes('optimum') || title.includes('earthlink') || 
                 title.includes('viasat') || title.includes('hughesnet');
        default:
          return true;
      }
    });
  };
  
  // Get category badge color
  const getCategoryColor = (postId: number) => {
    const title = blogPosts.find(p => p.id === postId)?.title.toLowerCase() || '';
    
    if (title.includes('internet') || title.includes('fiber') || title.includes('speed')) {
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    } else if (title.includes('tv') || title.includes('cable')) {
      return "bg-purple-100 text-purple-800 hover:bg-purple-200";
    } else if (title.includes('streaming') || title.includes('devices')) {
      return "bg-green-100 text-green-800 hover:bg-green-200";
    } else if (title.includes('optimum') || title.includes('earthlink') || 
               title.includes('viasat') || title.includes('hughesnet')) {
      return "bg-amber-100 text-amber-800 hover:bg-amber-200";
    }
    
    return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  };
  
  // Get category name
  const getCategoryName = (postId: number) => {
    const title = blogPosts.find(p => p.id === postId)?.title.toLowerCase() || '';
    
    if (title.includes('internet') || title.includes('fiber') || title.includes('speed')) {
      return "Internet";
    } else if (title.includes('tv') || title.includes('cable')) {
      return "TV & Cable";
    } else if (title.includes('streaming') || title.includes('devices')) {
      return "Streaming";
    } else if (title.includes('optimum') || title.includes('earthlink') || 
               title.includes('viasat') || title.includes('hughesnet')) {
      return "Providers";
    }
    
    return "General";
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <Badge variant="outline" className="bg-primary/10 text-primary px-4 py-1 text-sm font-medium rounded-full">
              Resources Hub
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Latest Resources & Guides</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-2">
            Stay informed with our latest articles, tips, and industry news to make the best decisions about your telecom services.
          </p>
          <p className="text-gray-600">
            Questions about our content? Call <a href="tel:8887886930" className="text-primary font-semibold hover:underline">888-788-6930</a> to speak with a specialist.
          </p>
        </div>
        
        {/* Resource Categories */}
        <Tabs 
          value={category} 
          onValueChange={setCategory}
          className="mb-8"
        >
          <div className="flex justify-center">
            <TabsList className="bg-gray-100/80 p-1 rounded-full">
              {Object.entries(getCategories()).map(([key, label]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="rounded-full px-5 py-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
        
        {/* Search and Filter Row */}
        <div className="flex justify-between items-center mb-8 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="flex items-center text-gray-500 text-sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            <span>Updated daily • </span>
            <Badge variant="outline" className="ml-2 font-medium">
              {filteredPosts().length} resources
            </Badge>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter className="h-3 w-3" /> 
              Sort by Latest
            </Button>
            <Button variant="outline" size="sm">
              <Search className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        {/* Featured Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts().slice(0, 6).map((post) => (
            <Card 
              key={post.id} 
              className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <div className="transform group-hover:scale-105 transition-transform duration-500">
                  {renderThumbnail(post.id)}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <Badge className={`absolute top-3 right-3 ${getCategoryColor(post.id)}`}>
                  {getCategoryName(post.id)}
                </Badge>
                
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                  asChild
                >
                  <a href={post.link}>
                    <Bookmark className="h-4 w-4 mr-1" /> Save
                  </a>
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                
                <a href={post.link} className="block group-hover:text-primary">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300">
                    {post.title}
                  </h3>
                </a>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.summary}
                </p>
              </CardContent>
              
              <CardFooter className="px-6 py-4 bg-gray-50 flex justify-between items-center border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>{1000 + Math.floor(Math.random() * 9000)} views</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  asChild 
                  className="text-primary hover:text-primary/90 p-0 group"
                >
                  <a href={post.link} className="flex items-center gap-1 relative">
                    <span>Read More</span> 
                    <span className="relative z-10">
                      <ArrowRight className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* View All Resources Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="group rounded-full px-6">
            <a href="/resources" className="inline-flex items-center gap-2 font-medium">
              View All Resources
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Stay Updated on Telecom Trends</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest guides, comparisons, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-auto"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
