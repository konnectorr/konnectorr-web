import React, { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Tv, Menu, X, ChevronDown, ChevronRight, Phone } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { KonnectorrLogo } from "@/assets/KonnectorrLogo";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    tv: false,
    internet: false,
    streaming: false,
    resources: false,
  });

  const toggleMobileDropdown = (dropdownName: keyof typeof mobileDropdowns) => {
    setMobileDropdowns({
      ...mobileDropdowns,
      [dropdownName]: !mobileDropdowns[dropdownName],
    });
  };

  return (
    <header className="bg-white dark:bg-black sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800 shadow-lg">
      <div className="bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-black py-1 hidden md:block">
        <div className="container mx-auto px-4 flex justify-end items-center text-sm">
          <div className="flex gap-4 items-center">
            <a href="mailto:info@konnectorr.com" className="text-gray-600 dark:text-gray-300 hover:text-primary flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              info@konnectorr.com
            </a>
            <a href="tel:8887886930" className="text-gray-600 dark:text-gray-300 hover:text-primary flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              888-788-6930
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <KonnectorrLogo className="h-24 md:h-32 dark:hidden" />
              <KonnectorrLogo className="h-24 md:h-32 hidden dark:block" dark={true} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 hover:bg-primary/5 dark:hover:bg-primary/20 font-medium text-black dark:text-white">
                  TV Providers
                  <ChevronDown className="h-4 w-4 text-primary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 p-1 shadow-lg rounded-lg border border-gray-100 dark:border-gray-800 dark:bg-gray-950">
                <DropdownMenuItem>
                  <Link href="/providers/directv" className="w-full">DIRECTV</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/providers/dish" className="w-full">DISH</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/providers/spectrum" className="w-full">Spectrum</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/providers/xfinity" className="w-full">Xfinity</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/providers/optimum" className="w-full">Optimum</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 hover:bg-primary/5 dark:hover:bg-primary/20 font-medium text-black dark:text-white">
                  Internet
                  <ChevronDown className="h-4 w-4 text-primary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 p-1 shadow-lg rounded-lg border border-gray-100 dark:border-gray-800 dark:bg-gray-950">
                <DropdownMenuItem>
                  <Link href="/internet/fiber" className="w-full">Fiber Internet</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/internet/cable" className="w-full">Cable Internet</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/internet/dsl" className="w-full">DSL Internet</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/internet/satellite" className="w-full">Satellite Internet</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/internet/comparison" className="w-full">Internet Comparison</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/internet/esim" className="w-full">eSIM Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/internet" className="w-full">All Internet Types</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 hover:bg-primary/5 dark:hover:bg-primary/20 font-medium text-black dark:text-white">
                  Streaming
                  <ChevronDown className="h-4 w-4 text-primary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 p-1 shadow-lg rounded-lg border border-gray-100 dark:border-gray-800 dark:bg-gray-950">
                <DropdownMenuItem>
                  <Link href="/iptv" className="w-full">IPTV Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/iptv/qwicktv" className="w-full">QwickTV</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="#" className="w-full">Netflix</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">Hulu</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">Disney+</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">HBO Max</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary font-medium dark:border-primary dark:text-white dark:hover:bg-primary/20">
              <Link href="/availability-checker" className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Check Availability
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 hover:bg-primary/5 dark:hover:bg-primary/20 font-medium text-black dark:text-white">
                  Resources
                  <ChevronDown className="h-4 w-4 text-primary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-1 shadow-lg rounded-lg border border-gray-100 dark:border-gray-800 dark:bg-gray-950">
                <DropdownMenuItem>
                  <Link href="/weather-impact" className="w-full">Weather Impact Predictor</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources/buying-guides" className="w-full">Buying Guides</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources/educational-articles" className="w-full">Educational Articles</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources/tools" className="w-full">Tools & Calculators</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources/speed-test" className="w-full">Internet Speed Test</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources/industry-news" className="w-full">Industry News</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources/faq" className="w-full">FAQ & Guides</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources" className="w-full">All Resources</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Call Now and Sign Up Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild variant="ghost" size="sm" className="text-gray-500 hover:text-primary">
              <Link href="/admin">Admin</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 font-medium dark:border-primary dark:text-white dark:hover:bg-primary/20">
              <Link href="/sign-up" className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                Sign Up
              </Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 dark:text-white">
              <a href="tel:8887886930" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call: 888-788-6930
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden p-2 text-black dark:text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 dark:bg-black dark:border-gray-800">
              <div className="px-4 py-5 space-y-6">
                <div className="flex justify-between items-center">
                  <Link href="/" className="text-xl font-bold flex items-center">
                    <KonnectorrLogo className="h-20 dark:hidden" />
                    <KonnectorrLogo className="h-20 hidden dark:block" dark={true} />
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-black dark:text-white">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>

                <div className="mobile-dropdown">
                  <Button
                    variant="ghost"
                    className="flex justify-between w-full py-2 text-black dark:text-white"
                    onClick={() => toggleMobileDropdown("tv")}
                  >
                    <span>TV Providers</span>
                    {mobileDropdowns.tv ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                  {mobileDropdowns.tv && (
                    <div className="pl-4 py-2 space-y-2">
                      <Link href="/providers/directv" className="block text-black dark:text-white hover:text-primary py-1">DIRECTV</Link>
                      <Link href="/providers/dish" className="block text-black dark:text-white hover:text-primary py-1">DISH</Link>
                      <Link href="/providers/spectrum" className="block text-black dark:text-white hover:text-primary py-1">Spectrum</Link>
                      <Link href="/providers/xfinity" className="block text-black dark:text-white hover:text-primary py-1">Xfinity</Link>
                      <Link href="/providers/optimum" className="block text-black dark:text-white hover:text-primary py-1">Optimum</Link>
                    </div>
                  )}
                </div>

                <div className="mobile-dropdown">
                  <Button
                    variant="ghost"
                    className="flex justify-between w-full py-2 text-black dark:text-white"
                    onClick={() => toggleMobileDropdown("internet")}
                  >
                    <span>Internet</span>
                    {mobileDropdowns.internet ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                  {mobileDropdowns.internet && (
                    <div className="pl-4 py-2 space-y-2">
                      <Link href="/internet/fiber" className="block text-black dark:text-white hover:text-primary py-1">Fiber Internet</Link>
                      <Link href="/internet/cable" className="block text-black dark:text-white hover:text-primary py-1">Cable Internet</Link>
                      <Link href="/internet/dsl" className="block text-black dark:text-white hover:text-primary py-1">DSL Internet</Link>
                      <Link href="/internet/satellite" className="block text-black dark:text-white hover:text-primary py-1">Satellite Internet</Link>
                      <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                      <Link href="/internet/comparison" className="block text-black dark:text-white hover:text-primary py-1">Internet Comparison</Link>
                      <Link href="/internet/esim" className="block text-black dark:text-white hover:text-primary py-1">eSIM Services</Link>
                      <Link href="/internet" className="block text-black dark:text-white hover:text-primary py-1">All Internet Types</Link>
                    </div>
                  )}
                </div>

                <div className="mobile-dropdown">
                  <Button
                    variant="ghost"
                    className="flex justify-between w-full py-2 text-black dark:text-white"
                    onClick={() => toggleMobileDropdown("streaming")}
                  >
                    <span>Streaming</span>
                    {mobileDropdowns.streaming ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                  {mobileDropdowns.streaming && (
                    <div className="pl-4 py-2 space-y-2">
                      <Link href="/iptv" className="block text-black dark:text-white hover:text-primary py-1">IPTV Services</Link>
                      <Link href="/iptv/qwicktv" className="block text-black dark:text-white hover:text-primary py-1">QwickTV</Link>
                      <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                      <Link href="#" className="block text-black dark:text-white hover:text-primary py-1">Netflix</Link>
                      <Link href="#" className="block text-black dark:text-white hover:text-primary py-1">Hulu</Link>
                      <Link href="#" className="block text-black dark:text-white hover:text-primary py-1">Disney+</Link>
                      <Link href="#" className="block text-black dark:text-white hover:text-primary py-1">HBO Max</Link>
                    </div>
                  )}
                </div>

                <div className="mobile-dropdown">
                  <Button
                    variant="ghost"
                    className="flex justify-between w-full py-2 text-black dark:text-white"
                    onClick={() => toggleMobileDropdown("resources")}
                  >
                    <span>Resources</span>
                    {mobileDropdowns.resources ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                  {mobileDropdowns.resources && (
                    <div className="pl-4 py-2 space-y-2">
                      <Link href="/weather-impact" className="block text-black dark:text-white hover:text-primary py-1">Weather Impact Predictor</Link>
                      <Link href="/resources/buying-guides" className="block text-black dark:text-white hover:text-primary py-1">Buying Guides</Link>
                      <Link href="/resources/educational-articles" className="block text-black dark:text-white hover:text-primary py-1">Educational Articles</Link>
                      <Link href="/resources/tools" className="block text-black dark:text-white hover:text-primary py-1">Tools & Calculators</Link>
                      <Link href="/resources/speed-test" className="block text-black dark:text-white hover:text-primary py-1">Internet Speed Test</Link>
                      <Link href="/resources/industry-news" className="block text-black dark:text-white hover:text-primary py-1">Industry News</Link>
                      <Link href="/resources/faq" className="block text-black dark:text-white hover:text-primary py-1">FAQ & Guides</Link>
                      <Link href="/resources" className="block text-black dark:text-white hover:text-primary py-1">All Resources</Link>
                    </div>
                  )}
                </div>

                <div className="py-2">
                  <Button asChild className="w-full bg-primary/10 border border-primary hover:bg-primary/20 text-primary font-medium dark:bg-primary/20 dark:hover:bg-primary/30">
                    <Link href="/availability-checker" className="flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Check Availability
                    </Link>
                  </Button>
                </div>

                <div className="py-2">
                  <Button asChild className="w-full border border-primary text-primary bg-white hover:bg-primary/5 dark:bg-black dark:text-white dark:hover:bg-primary/20">
                    <Link href="/sign-up" className="flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      Sign Up for Service
                    </Link>
                  </Button>
                </div>

                <div className="py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-black dark:text-white font-medium">Theme</span>
                  <ThemeToggle />
                </div>
                
                <div className="py-2 border-b border-gray-100 dark:border-gray-800">
                  <Button asChild variant="ghost" className="w-full justify-start text-gray-500 hover:text-primary">
                    <Link href="/admin">Admin Dashboard</Link>
                  </Button>
                </div>

                <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 dark:text-white">
                  <a href="tel:8887886930" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call: 888-788-6930
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;
