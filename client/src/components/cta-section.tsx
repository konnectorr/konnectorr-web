import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

const CtaSection: React.FC = () => {
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation for US zip code (5 digits)
    if (!/^\d{5}$/.test(zipCode)) {
      setError("Please enter a valid 5-digit ZIP code");
      return;
    }
    
    setError("");
    // In a real application, we would handle form submission here
    console.log("Get started with ZIP code:", zipCode);
  };

  return (
    <section className="py-16" style={{ background: "linear-gradient(90deg, rgba(0,112,201,1) 0%, rgba(0,73,121,1) 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Find Your Perfect TV & Internet Package Today</h2>
          <p className="text-xl mb-8">Enter your ZIP code to see available providers and exclusive deals in your area.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-grow">
              <Input
                type="text"
                placeholder="Enter your ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/70"
                maxLength={5}
              />
              {error && <p className="text-red-300 text-xs mt-1 text-left">{error}</p>}
            </div>
            <Button 
              type="submit" 
              className="bg-white text-primary hover:bg-white/90 font-medium py-3 px-6"
            >
              Get Started
            </Button>
          </form>
          
          <div className="mt-8 mb-8">
            <p className="mb-6 text-white/80">
              Or use one of the options below:
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-white text-primary hover:bg-white/90 font-medium">
                <Link href="/sign-up" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  Sign Up Now
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
                <a href="tel:8887886930" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Call Now: 888-788-6930
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
