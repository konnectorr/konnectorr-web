import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { KonnectorrLogo } from "@/assets/KonnectorrLogo";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Globe,
  Tv,
  Wifi,
  Clock,
  Zap
} from "lucide-react";

export function PageFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Pre-footer CTA */}
      <div className="border-t border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Stay Connected with the Latest Updates</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join our newsletter to receive exclusive deals, provider updates, and telecommunication tips.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="rounded-lg border-gray-300 dark:border-gray-700 flex-grow"
                />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 rounded-lg">
                  Subscribe
                </Button>
              </form>
              <div className="flex items-center gap-2 mt-3">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <p className="text-xs text-gray-500 dark:text-gray-400">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl opacity-70"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg max-w-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Get Expert Recommendations</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Based on your location and needs</p>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-4">
                    {[
                      {icon: <Globe className="h-4 w-4" />, text: "Find local providers in your area"},
                      {icon: <Tv className="h-4 w-4" />, text: "Compare TV packages and channels"},
                      {icon: <Wifi className="h-4 w-4" />, text: "Discover the best internet plans"},
                      {icon: <Clock className="h-4 w-4" />, text: "Save time with expert recommendations"}
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="text-green-500 mt-0.5">{item.icon}</div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                    <Link to="/availability-checker" className="flex items-center justify-center gap-2">
                      Find Providers <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6 group">
                <div className="flex items-center">
                  <KonnectorrLogo className="text-2xl group-hover:scale-105 transition-transform dark:hidden" />
                  <KonnectorrLogo className="text-2xl group-hover:scale-105 transition-transform hidden dark:block" dark={true} />
                </div>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                Your trusted resource for finding and comparing the best internet and TV providers. We help you make informed decisions about your telecommunications services.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <a href="#" className="w-9 h-9 rounded-full bg-blue-100 dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-blue-100 dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-blue-100 dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-blue-100 dark:bg-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                <a href="tel:888-788-6930" className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  888-788-6930
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/internet" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Internet
                  </Link>
                </li>
                <li>
                  <Link to="/providers" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    TV Providers
                  </Link>
                </li>
                <li>
                  <Link to="/iptv" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Streaming
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link to="/weather-impact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Weather Impact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-6">Popular Providers</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/providers/directv" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    DIRECTV
                  </Link>
                </li>
                <li>
                  <Link to="/providers/dish" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    DISH
                  </Link>
                </li>
                <li>
                  <Link to="/providers/spectrum" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Spectrum
                  </Link>
                </li>
                <li>
                  <Link to="/providers/xfinity" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Xfinity
                  </Link>
                </li>
                <li>
                  <Link to="/providers/optimum" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Optimum
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/resources/buying-guides" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Buying Guides
                  </Link>
                </li>
                <li>
                  <Link to="/resources/faq" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/resources/educational-articles" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Educational Articles
                  </Link>
                </li>
                <li>
                  <Link to="/resources/speed-test" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Internet Speed Test
                  </Link>
                </li>
                <li>
                  <Link to="/sign-up" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                &copy; {currentYear} Konnectorr. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <Link to="/privacy-policy" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="text-xs text-gray-500 dark:text-gray-400">Powered by</span>
              <Link to="/" className="flex items-center">
                <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Konnectorr
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}