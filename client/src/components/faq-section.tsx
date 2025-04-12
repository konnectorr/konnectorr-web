import React, { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Headset, HelpCircle, Search, Phone, MessageSquare, ChevronRight } from "lucide-react";
import { faqItems } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const FaqSection: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(faqItems);
  
  // Filter FAQs based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredFaqs(faqItems);
      return;
    }
    
    const filtered = faqItems.filter(item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredFaqs(filtered);
  }, [searchTerm]);
  
  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('faq-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // FAQ categories
  const categories = [
    { id: 1, name: "TV Services", icon: <Tv className="h-5 w-5" /> },
    { id: 2, name: "Internet", icon: <Wifi className="h-5 w-5" /> },
    { id: 3, name: "Satellite", icon: <Satellite className="h-5 w-5" /> },
    { id: 4, name: "Streaming", icon: <Film className="h-5 w-5" /> }
  ];
  
  return (
    <section id="faq-section" className="py-20 bg-gradient-to-b from-white to-blue-50 relative">
      {/* Background decorations */}
      <div className="absolute -top-10 right-0 w-full h-20 bg-white transform skew-y-2"></div>
      <div className="absolute left-0 top-1/4 w-48 h-48 bg-primary/5 rounded-full -translate-x-1/2"></div>
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-primary/5 rounded-full translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 transform ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about TV and internet services.
          </p>
        </div>
        
        {/* Search bar */}
        <div className={`max-w-xl mx-auto mb-10 transition-all duration-700 transform ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 rounded-full border-2 border-blue-100 focus:border-primary transition-all duration-300 shadow-sm focus:shadow-md"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")} 
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
          {/* Left sidebar - Categories on larger screens */}
          <div className={`hidden md:block transition-all duration-700 transform ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '300ms' }}>
            <div className="sticky top-20">
              <h3 className="font-medium text-gray-900 mb-4">FAQ Categories</h3>
              <div className="space-y-2">
                {['All Questions', ...categories.map(c => c.name)].map((cat, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center px-4 py-2 rounded-lg text-left transition-all duration-200 ${
                      index === 0 ? 'bg-primary text-white' : 'hover:bg-blue-50 text-gray-700'
                    }`}
                  >
                    {index === 0 ? <HelpCircle className="h-4 w-4 mr-2" /> : categories[index-1].icon}
                    <span className={`${index === 0 ? 'font-medium' : ''}`}>{cat}</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-8 bg-gradient-to-br from-primary/10 to-blue-100/50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Need more help?</h3>
                <p className="text-sm text-gray-600 mb-4">Our team is ready to answer your questions</p>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                  <a href="tel:8887886930" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* FAQs */}
          <div className={`md:col-span-3 transition-all duration-700 transform ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-8">
                <div className="mb-4 bg-blue-50 inline-flex items-center justify-center w-16 h-16 rounded-full">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
                <p className="text-gray-600">Try a different search term or browse all questions.</p>
                <Button 
                  variant="link" 
                  className="mt-2 text-primary"
                  onClick={() => setSearchTerm("")}
                >
                  Clear search
                </Button>
              </div>
            ) : (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((item, index) => (
                  <AccordionItem 
                    key={item.id} 
                    value={`item-${item.id}`}
                    className={`border border-blue-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <AccordionTrigger className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-blue-50 font-medium text-gray-800 focus:outline-none transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                          Q
                        </span>
                        <span>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-5 pt-0 bg-white border-t border-blue-50">
                      <div className="flex items-start gap-3 pt-5">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5">
                          A
                        </span>
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
            
            {/* Help section - below FAQs */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: '800ms' }}>
              <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-100 rounded-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Still have questions?</h3>
                      <p className="text-gray-600 mb-6">
                        Our TV and internet experts are ready to help. Call us directly at{' '}
                        <a href="tel:8887886930" className="text-primary font-semibold hover:underline transition-colors">
                          888-788-6930
                        </a>{' '}
                        for immediate assistance.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild className="inline-flex items-center bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                          <a href="#" className="px-6">
                            <Headset className="mr-2 h-5 w-5" />
                            Contact Support
                          </a>
                        </Button>
                        <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary/10 rounded-full transition-all duration-300">
                          <a href="tel:8887886930" className="flex items-center gap-2 px-6">
                            <div className="relative">
                              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"></div>
                              <Phone className="h-5 w-5 relative z-10" />
                            </div>
                            Call: 888-788-6930
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                      <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center animate-pulse-slow">
                        <MessageSquare className="h-16 w-16 text-primary" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import additional icons
import { Wifi, Tv, Satellite, Film } from "lucide-react";

export default FaqSection;
