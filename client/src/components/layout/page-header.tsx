import React from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetClose 
} from "@/components/ui/sheet";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { 
  Menu, 
  Phone, 
  Globe, 
  Home, 
  Tv, 
  Newspaper, 
  User, 
  X,
  MapPin,
  ChevronDown,
  Mail,
  Info,
  Shield
} from "lucide-react";
import { KonnectorrLogo } from "@/assets/KonnectorrLogo";

export function PageHeader() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar with contact info */}
      <div className="bg-blue-950 text-blue-200 py-1.5 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              <a href="tel:8885698194" className="text-xs hover:text-white transition-colors">888-569-8194</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <a href="mailto:info@konnectorr.com" className="text-xs hover:text-white transition-colors">info@konnectorr.com</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs hover:text-white transition-colors">About Us</a>
            <a href="#" className="text-xs hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-xs hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm backdrop-blur-sm backdrop-saturate-150 bg-white/90 dark:bg-gray-900/90 supports-[backdrop-filter]:bg-white/90 supports-[backdrop-filter]:dark:bg-gray-900/90">
        <div className="container mx-auto py-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              {/* Logo */}
              <Link to="/" className="font-bold flex items-center gap-2 group">
                <div className="flex items-center">
                  <KonnectorrLogo className="text-2xl group-hover:scale-105 transition-transform dark:hidden" />
                  <KonnectorrLogo className="text-2xl group-hover:scale-105 transition-transform hidden dark:block" dark={true} />
                </div>
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="font-medium rounded-full">
                      Internet
                      <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link to="/internet/fiber">Fiber Internet</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/internet/cable">Cable Internet</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/internet/dsl">DSL Internet</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/internet/satellite">Satellite Internet</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/internet/comparison">Internet Comparison</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/internet">All Internet Types</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="font-medium rounded-full">
                      TV Providers
                      <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link to="/providers/directv">DIRECTV</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/providers/dish">DISH</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/providers/spectrum">Spectrum</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/providers/xfinity">Xfinity</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/providers/optimum">Optimum</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="font-medium rounded-full">
                      Streaming
                      <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link to="/iptv">IPTV Services</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/iptv/qwicktv">QwickTV</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/iptv/qwicktv-plans">QwickTV Plans</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="font-medium rounded-full">
                      Resources
                      <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link to="/resources/buying-guides">Buying Guides</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/weather-impact">Weather Impact</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/resources/speed-test">Speed Test</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/resources/educational-articles">Educational Articles</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/resources/faq">FAQ</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/resources">All Resources</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Button asChild variant="ghost" className="font-medium rounded-full relative">
                  <Link to="/internet/esim" className="flex items-center gap-1.5">
                    <Globe className="h-4 w-4 text-blue-600" />
                    <span>eSIM</span>
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[10px] px-1.5 rounded-full">NEW</span>
                  </Link>
                </Button>
              </nav>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Call button and availability check */}
              <div className="hidden md:flex items-center gap-3">
                <Button asChild variant="outline" size="sm" className="rounded-full border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                  <Link to="/availability-checker" className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Check Availability</span>
                  </Link>
                </Button>
                
                <Button asChild size="sm" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="tel:8885698194" className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5" />
                    <span>888-569-8194</span>
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center">
                <ThemeToggle />
                
                {/* Admin login/dashboard link */}
                <div className="hidden md:block">
                  {typeof window !== 'undefined' && localStorage.getItem('authToken') ? (
                    <Button variant="ghost" size="icon" asChild>
                      <Link to="/admin">
                        <User className="h-5 w-5" />
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="ghost" size="icon" asChild>
                      <Link to="/login">
                        <User className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                </div>
                
                {/* Mobile Menu */}
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden ml-1">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[85%] max-w-md p-0 border-l border-l-blue-100 dark:border-l-blue-900">
                    <div className="flex flex-col h-full">
                      <div className="p-5 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBoQzY5LjM3IDAgNDQuNDUgMjQuOSA0NC4yIDU1LjUydjg4Ljk2QzQ0LjQ1IDE3NS4xIDY5LjM4IDIwMCAxMDAgMjAwczU1LjU1LTI0LjkgNTUuOC01NS41MlY1NS41MkMxNTUuNTUgMjQuOSAxMzAuNjMgMCAxMDAgMHoiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
                        <div className="flex items-center justify-between relative z-10">
                          <div className="flex items-center gap-3">
                            <KonnectorrLogo className="text-xl text-white" />
                            <span className="font-bold text-xl text-white">Menu</span>
                          </div>
                          <SheetClose asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                              <X className="h-5 w-5" />
                            </Button>
                          </SheetClose>
                        </div>
                        <div className="mt-4 flex items-center gap-3 relative z-10">
                          <Button asChild size="sm" className="w-full rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-sm">
                            <a href="tel:8885698194" className="flex items-center justify-center gap-2">
                              <Phone className="h-4 w-4" />
                              <span>Call 888-569-8194</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex-1 overflow-auto p-5 space-y-6">
                        <div className="space-y-1.5">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 px-2">Internet</h3>
                          <nav className="space-y-1">
                            <SheetClose asChild>
                              <Link to="/internet/fiber" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Fiber Internet</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/internet/cable" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Cable Internet</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/internet/dsl" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">DSL Internet</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/internet/satellite" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Satellite Internet</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/internet/esim" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                <Globe className="mr-2 h-4 w-4 text-blue-500" />
                                <span className="flex items-center gap-2">
                                  eSIM Global Data
                                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[9px] px-1.5 py-0.5 rounded-full">NEW</span>
                                </span>
                              </Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/internet" className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-500">View All Internet Types</Link>
                            </SheetClose>
                          </nav>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-1.5">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 px-2">TV Providers</h3>
                          <nav className="space-y-1">
                            <SheetClose asChild>
                              <Link to="/providers/directv" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">DIRECTV</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/providers/dish" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">DISH</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/providers/spectrum" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Spectrum</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/providers/xfinity" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Xfinity</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/providers/att" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">AT&T</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/providers/optimum" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Optimum</Link>
                            </SheetClose>
                          </nav>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-1.5">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 px-2">Streaming</h3>
                          <nav className="space-y-1">
                            <SheetClose asChild>
                              <Link to="/iptv" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">IPTV Services</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/iptv/qwicktv" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">QwickTV</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/iptv/qwicktv-plans" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">QwickTV Plans</Link>
                            </SheetClose>
                          </nav>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-1.5">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 px-2">Resources</h3>
                          <nav className="space-y-1">
                            <SheetClose asChild>
                              <Link to="/resources/buying-guides" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Buying Guides</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/weather-impact" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Weather Impact</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/resources/speed-test" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Speed Test</Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/resources" className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-500">All Resources</Link>
                            </SheetClose>
                          </nav>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-1.5">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 px-2">Company</h3>
                          <nav className="space-y-1">
                            <SheetClose asChild>
                              <Link to="/sign-up" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                <Mail className="mr-2 h-4 w-4" />
                                Contact Us
                              </Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link to="/privacy-policy" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                <Shield className="mr-2 h-4 w-4" />
                                Privacy Policy
                              </Link>
                            </SheetClose>
                            {typeof window !== 'undefined' && localStorage.getItem('authToken') ? (
                              <SheetClose asChild>
                                <Link to="/admin" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                  <User className="mr-2 h-4 w-4" />
                                  Admin Dashboard
                                </Link>
                              </SheetClose>
                            ) : (
                              <SheetClose asChild>
                                <Link to="/login" className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                                  <User className="mr-2 h-4 w-4" />
                                  Admin Login
                                </Link>
                              </SheetClose>
                            )}
                          </nav>
                        </div>
                      </div>
                      
                      <div className="p-5 border-t">
                        <Button asChild className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white">
                          <Link to="/availability-checker" className="flex items-center justify-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>Check Availability in Your Area</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}