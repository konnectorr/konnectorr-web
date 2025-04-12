import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  Tv, 
  Wifi, 
  Newspaper, 
  ChevronRight, 
  Globe, 
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  BookOpen,
  ShieldCheck
} from "lucide-react";

const Home: React.FC = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [email, setEmail] = useState("");
  
  // Show floating button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Email subscription logic
    alert(`Thanks for subscribing with: ${email}`);
    setEmail("");
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                Premium Internet & TV Services
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Find Your Perfect <span className="text-blue-300">Connection</span> Today
              </h1>
              <p className="text-lg sm:text-xl text-blue-100">
                Compare the best TV & internet packages from top providers to save money and get more entertainment options.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">
                  <Link href="/availability-checker" className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Check Availability
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="border-white backdrop-blur-sm bg-white/20 text-white hover:bg-white/30 rounded-full">
                  <a href="tel:8887886930" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>Call: 888-788-6930</span>
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center text-blue-200 text-xs sm:text-sm gap-4 sm:gap-8 pt-2">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Secure Transactions</span>
                </div>
              </div>
            </div>
            
            {/* Desktop search form */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 blur-lg opacity-75"></div>
              <div className="relative bg-blue-950/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Search Availability</h3>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  const zipcode = (document.getElementById("zipcode-desktop") as HTMLInputElement)?.value;
                  if (zipcode && zipcode.trim().length >= 5) {
                    window.location.href = `/availability-checker?zip=${zipcode.trim()}`;
                  }
                }}>
                  <div>
                    <label htmlFor="zipcode-desktop" className="text-sm text-blue-200 mb-1 block">Enter your ZIP code</label>
                    <Input 
                      id="zipcode-desktop"
                      type="text" 
                      placeholder="e.g., 90210" 
                      className="bg-white/10 border-white/20 text-white focus:border-blue-400 focus:ring-blue-400/20 placeholder:text-blue-200/60"
                      maxLength={10}
                      required
                      pattern="[0-9]{5}(-[0-9]{4})?"
                      title="Please enter a valid ZIP code (e.g., 90210 or 90210-1234)"
                    />
                  </div>
                  <Button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white w-full rounded-lg">
                    Find Providers <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-sm text-blue-200 text-center">
                    Or call us at <a href="tel:8887886930" className="font-medium underline hover:text-white">888-788-6930</a>
                  </p>
                </form>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="text-white font-medium">Trusted by 10,000+ Customers</span>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((img) => (
                      <div key={img} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 border-2 border-blue-950 flex items-center justify-center text-xs font-bold text-white">
                        {img}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-blue-950 flex items-center justify-center text-xs font-bold text-white">
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile search form */}
            <div className="lg:hidden pt-4 pb-2">
              <form 
                className="flex gap-2" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const zipcode = (document.getElementById("zipcode-mobile") as HTMLInputElement)?.value;
                  if (zipcode && zipcode.trim().length >= 5) {
                    window.location.href = `/availability-checker?zip=${zipcode.trim()}`;
                  }
                }}
              >
                <Input 
                  id="zipcode-mobile"
                  type="text" 
                  placeholder="Enter ZIP code" 
                  className="bg-white/10 border-white/20 text-white focus:border-blue-400 focus:ring-blue-400/20 placeholder:text-blue-200/60 rounded-full"
                  maxLength={10}
                  required
                  pattern="[0-9]{5}(-[0-9]{4})?"
                  title="Please enter a valid ZIP code (e.g., 90210 or 90210-1234)"
                />
                <Button type="submit" className="shrink-0 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full px-4">
                  <MapPin className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Services for Your Home</h2>
            <p className="text-lg text-gray-600">
              Find the perfect combination of services to fit your entertainment and connectivity needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TV Service Card */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-blue-500/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Tv className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">TV Packages</h3>
                <p className="text-gray-600 mb-4">
                  Get access to premium channels, sports packages, and on-demand content for your entertainment needs.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Local channels", "Premium channels", "Sports packages", "DVR service"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="rounded-full p-1 bg-green-100 text-green-600 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                  <Link href="/providers/directv" className="flex items-center justify-between">
                    <span>View TV Providers</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Internet Service Card */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-blue-500/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Wifi className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Internet Plans</h3>
                <p className="text-gray-600 mb-4">
                  High-speed internet with a variety of plans to match your usage needs and budget.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Fiber optic", "Cable internet", "DSL options", "Satellite internet"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="rounded-full p-1 bg-green-100 text-green-600 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors">
                  <Link href="/internet" className="flex items-center justify-between">
                    <span>Browse Internet Plans</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Streaming Service Card */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-blue-500/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Streaming Options</h3>
                <p className="text-gray-600 mb-4">
                  Discover streaming services with thousands of shows, movies, and live TV channels.
                </p>
                <ul className="space-y-2 mb-6">
                  {["IPTV services", "QwickTV", "Popular platforms", "Live TV streaming"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="rounded-full p-1 bg-green-100 text-green-600 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors">
                  <Link href="/iptv" className="flex items-center justify-between">
                    <span>Explore Streaming</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Konnectorr</h2>
            <p className="text-lg text-gray-600">
              We help you navigate the complex world of telecommunications to find the best services for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <MapPin className="h-6 w-6" />, 
                title: "Local Availability", 
                description: "Find services available specifically in your area based on your exact address." 
              },
              { 
                icon: <MessageSquare className="h-6 w-6" />, 
                title: "Expert Advice", 
                description: "Get personalized recommendations from our team of telecommunications experts." 
              },
              { 
                icon: <BookOpen className="h-6 w-6" />, 
                title: "Educational Resources", 
                description: "Access guides, articles, and tools to help you make informed decisions." 
              },
              { 
                icon: <ShieldCheck className="h-6 w-6" />, 
                title: "Trusted Service", 
                description: "Join thousands of satisfied customers who found their perfect provider." 
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
            <p className="text-lg text-gray-600">
              Explore our guides, tools, and articles to help you make informed decisions about your services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-md">
              <div className="p-6 relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 text-white">
                  <Newspaper className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Buying Guides</h3>
                <p className="text-blue-100 mb-4">
                  Expert advice on choosing the right TV, internet, and streaming services for your needs.
                </p>
                <Button asChild variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none">
                  <Link href="/resources/buying-guides" className="flex items-center justify-between">
                    <span>Read Guides</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-800 to-transparent"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-md">
              <div className="p-6 relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 text-white">
                  <Wifi className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Internet Speed Test</h3>
                <p className="text-indigo-100 mb-4">
                  Check your current internet speed and see if you're getting what you pay for from your provider.
                </p>
                <Button asChild variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none">
                  <Link href="/resources/speed-test" className="flex items-center justify-between">
                    <span>Test Your Speed</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-indigo-800 to-transparent"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 shadow-md">
              <div className="p-6 relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Weather Impact Tool</h3>
                <p className="text-purple-100 mb-4">
                  See how weather conditions in your area might affect your TV and internet service performance.
                </p>
                <Button asChild variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none">
                  <Link href="/weather-impact" className="flex items-center justify-between">
                    <span>Check Impact</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-800 to-transparent"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/resources" className="flex items-center gap-2">
                <span>Explore All Resources</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-950 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Find Your Perfect Provider?</h2>
            <p className="text-xl text-blue-100">
              Enter your ZIP code to see available TV and internet options in your area.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 rounded-full">
                <Link href="/availability-checker" className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Check Availability
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="border-white backdrop-blur-sm bg-white/20 text-white hover:bg-white/30 rounded-full">
                <a href="tel:8887886930" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call: 888-788-6930
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Stay Updated on the Latest Deals</h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter to receive updates on new provider deals, technology tips, and industry news.
                </p>
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-lg border-gray-300"
                  />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg whitespace-nowrap">
                    Subscribe
                  </Button>
                </form>
                <p className="text-sm text-gray-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100"></div>
                  <div className="absolute inset-3 rounded-full bg-white flex items-center justify-center">
                    <div className="text-center">
                      <Newspaper className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                      <p className="text-lg font-medium text-gray-900">Weekly Insights</p>
                      <p className="text-sm text-gray-500">Exclusive deals and tips</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Availability Check Button */}
      {showFloatingButton && (
        <div className="fixed bottom-6 right-6 z-40 animate-fadeIn">
          <Link href="/availability-checker" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            <MapPin className="h-5 w-5" />
            <span>Check Availability</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
