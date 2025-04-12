import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-12 pb-6">
      {/* Availability Checker Banner */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-primary/90 rounded-xl p-6 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="md:max-w-md text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Find Providers In Your Area</h3>
                <p className="text-white/90">Enter your ZIP code to see available TV and internet services in your neighborhood.</p>
              </div>
              
              <div className="ml-auto w-full md:w-auto">
                <form action="/availability-checker" method="get" className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <input 
                      type="text" 
                      name="zip" 
                      placeholder="Enter ZIP code" 
                      className="w-full px-10 py-3 rounded-lg bg-white/95 shadow-sm border-0 focus:ring-2 focus:ring-white/30"
                      pattern="^\d{5}(-\d{4})?$"
                      title="Enter a valid ZIP code (e.g. 12345 or 12345-6789)"
                      required
                    />
                  </div>
                  <button type="submit" className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                    Check Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Logo and Newsletter Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12 pb-10 border-b border-gray-800">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white dark:bg-gray-900 py-4 px-6 rounded-xl shadow-md transition-colors">
                <img 
                  src="/konnectorr-logo.svg" 
                  alt="Konnectorr Logo" 
                  className="h-32 md:h-36 dark:hidden" 
                  style={{ maxWidth: '450px' }}
                />
                <img 
                  src="/konnectorr-logo-dark.svg" 
                  alt="Konnectorr Logo" 
                  className="h-32 md:h-36 hidden dark:block" 
                  style={{ maxWidth: '450px' }}
                />
              </div>
            </Link>
            <p className="text-white/70 max-w-md mb-5">
              We help you find, compare, and purchase the best TV and internet services for your home. Our experts research providers nationwide to save you money.
            </p>
            <div className="flex justify-center md:justify-start space-x-5">
              <a href="#" className="text-white/70 hover:text-primary transition-colors text-lg">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors text-lg">
                <FaTwitter />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors text-lg">
                <FaInstagram />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors text-lg">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-96 bg-gray-800/50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">
                <Mail className="h-4 w-4" />
              </span>
              Subscribe to our newsletter
            </h3>
            <p className="text-white/70 mb-4">Get weekly updates on deals, provider news, and expert tips.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2.5 rounded-lg bg-gray-700/50 border border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary text-white"
              />
              <button type="submit" className="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-5 rounded-lg flex items-center justify-center">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 2: TV Providers */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">TV Providers</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/providers/directv" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  DIRECTV
                </Link>
              </li>
              <li>
                <Link href="/providers/dish" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  DISH
                </Link>
              </li>
              <li>
                <Link href="/providers/spectrum" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  Spectrum
                </Link>
              </li>
              <li>
                <Link href="/providers/xfinity" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  Xfinity
                </Link>
              </li>
              <li>
                <Link href="/providers/optimum" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  Optimum
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Internet & Streaming */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">Internet & Streaming</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/internet/fiber" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  Fiber Internet
                </Link>
              </li>
              <li>
                <Link href="/internet/cable" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  Cable Internet
                </Link>
              </li>
              <li>
                <Link href="/internet/satellite" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  Satellite Internet
                </Link>
              </li>
              <li>
                <Link href="/internet/dsl" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  DSL Internet
                </Link>
              </li>
              <li>
                <Link href="/internet/comparison" className="text-white/70 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary" />
                  Internet Comparison
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <MapPin className="mt-1 mr-3 text-primary" />
                <span className="text-white/70">1021 E Lincolnway Suite 5747<br/>Cheyenne, WY 82001</span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-3 text-primary" />
                <a href="tel:8887886930" className="text-white/70 hover:text-primary">888-788-6930</a>
              </p>
              <p className="flex items-center">
                <Mail className="mr-3 text-primary" />
                <a href="mailto:info@konnectorr.com" className="text-white/70 hover:text-primary">info@konnectorr.com</a>
              </p>
              <p className="flex items-center">
                <Clock className="mr-3 text-primary" />
                <span className="text-white/70">Mon-Fri: 8am-9pm ET<br/>Sat-Sun: 10am-6pm ET</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm order-2 md:order-1">
              <Link href="/privacy-policy" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</Link>
              <span className="text-white/30">|</span>
              <Link href="/" className="text-white/60 hover:text-primary transition-colors">Terms of Service</Link>
              <span className="text-white/30">|</span>
              <Link href="/" className="text-white/60 hover:text-primary transition-colors">Accessibility</Link>
              <span className="text-white/30">|</span>
              <Link href="/" className="text-white/60 hover:text-primary transition-colors">Sitemap</Link>
            </div>
            <div className="text-center md:text-right order-1 md:order-2 mb-4 md:mb-0">
              <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Weinberg Global Inc. dba Konnectorr. All rights reserved.</p>
            </div>
          </div>
          
          <div className="mt-6 border-t border-gray-800 pt-6 text-xs text-white/40 text-center">
            <p>This site includes affiliate links. We may earn a commission for purchases made through these links.</p>
            <p className="mt-2">Konnectorr is not affiliated with any of the providers mentioned on this website.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
