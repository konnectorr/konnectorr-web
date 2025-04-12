import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

// Animated wave pattern component with multiple layers
const AnimatedWavesBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    {/* Primary wave - slow animation */}
    <svg viewBox="0 0 1200 600" className="absolute inset-0 w-full h-full opacity-20 animate-wave-slow">
      <path fill="rgba(255,255,255,0.15)" d="M0,192L48,202.7C96,213,192,235,288,245.3C384,256,480,256,576,240C672,224,768,192,864,197.3C960,203,1056,245,1152,234.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    
    {/* Secondary wave - medium animation */}
    <svg viewBox="0 0 1200 600" className="absolute inset-0 w-full h-full opacity-15 animate-wave-medium">
      <path fill="rgba(255,255,255,0.1)" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,192C672,203,768,245,864,240C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    
    {/* Third wave - fast animation */}
    <svg viewBox="0 0 1200 600" className="absolute inset-0 w-full h-full opacity-10 animate-wave-fast">
      <path fill="rgba(255,255,255,0.05)" d="M0,96L60,106.7C120,117,240,139,360,149.3C480,160,600,160,720,138.7C840,117,960,75,1080,80C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>

    {/* Dynamic gradient mesh overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-indigo-800/20 to-purple-900/30 mix-blend-overlay"></div>
  </div>
);

// Circle decoration with enhanced animation options
const CircleDecoration = ({ className, animationClass }: { className: string, animationClass?: string }) => (
  <div className={`absolute rounded-full ${className} ${animationClass || ''}`}></div>
);

// Network node component for the floating elements
const NetworkNode = ({ size, position, delay, duration }: { 
  size: string, 
  position: string, 
  delay: string,
  duration: string
}) => (
  <div 
    className={`absolute ${size} rounded-full bg-blue-400/30 backdrop-blur-sm border border-blue-300/30 ${position}`}
    style={{ 
      animation: `floating ${duration} ease-in-out infinite`,
      animationDelay: delay
    }}
  >
    <div className="absolute inset-0 rounded-full bg-blue-300/40 animate-pulse-slow"></div>
  </div>
);

// Connection line between nodes
const ConnectionLine = ({ className, style }: { className: string, style?: React.CSSProperties }) => (
  <div 
    className={`absolute ${className} bg-gradient-to-r from-blue-400/10 to-indigo-500/20`}
    style={style}
  ></div>
);

// 3D device illustration component
const Device3DElement = () => (
  <div className="absolute -right-20 top-1/4 w-72 h-72 opacity-30 pointer-events-none">
    <div className="relative w-full h-full">
      {/* Abstract device outline */}
      <div className="absolute inset-0 rounded-2xl border-2 border-blue-300/20 shadow-xl animate-floating" style={{ animationDuration: '6s' }}>
        <div className="w-full h-full bg-gradient-to-br from-blue-400/5 to-indigo-600/10 rounded-2xl"></div>
      </div>
      
      {/* Connection lines */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-t-2 border-l-2 border-blue-300/10 rounded-tl-xl transform -rotate-6 animate-floating" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border-r-2 border-b-2 border-indigo-400/10 rounded-br-xl transform rotate-12 animate-floating" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      
      {/* Circles representing connection points */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-indigo-400/30 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
    </div>
  </div>
);

const HeroSection: React.FC = () => {
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Valid ZIP code formats:
  // - 5 digits (12345)
  // - ZIP+4 with hyphen (12345-6789)
  // - ZIP+4 with space (12345 6789)
  const validateZipCode = (zip: string) => {
    // Validation for various formats
    return /^\d{5}(-\d{4})?$/.test(zip) || // 12345 or 12345-6789
           /^\d{5}(\s\d{4})?$/.test(zip);   // 12345 or 12345 6789
  };

  // Format and validate zip code on change
  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    
    // Allow only numbers, spaces, and hyphens
    input = input.replace(/[^\d\s-]/g, '');
    
    // Auto-format input for better user experience
    if (input.length > 5) {
      // If user enters 6th digit without separator, add one for them
      if (input.length === 6 && !input.includes('-') && !input.includes(' ')) {
        input = input.slice(0, 5) + '-' + input.slice(5);
      }
      
      // Ensure we don't exceed ZIP+4 format (max 10 chars with separator)
      if (input.includes('-') || input.includes(' ')) {
        const parts = input.split(/[-\s]/);
        const firstPart = parts[0].slice(0, 5);
        const secondPart = (parts[1] || '').slice(0, 4);
        const separator = input.includes('-') ? '-' : ' ';
        input = firstPart + (secondPart ? separator + secondPart : '');
      } else {
        input = input.slice(0, 9);
      }
    }
    
    setZipCode(input);
    setIsValid(validateZipCode(input));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Extract the base 5-digit zip code for the search
    let baseZip = zipCode.slice(0, 5);
    
    if (!validateZipCode(zipCode)) {
      setError("Please enter a valid ZIP code");
      return;
    }
    
    setError("");
    // Redirect to the availability checker page with the zip code
    window.location.href = `/availability-checker?zip=${zipCode}`;
  };

  // Reference to the section for parallax effect
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Only apply parallax when the section is in view
      if (scrollY > sectionTop - window.innerHeight && scrollY < sectionTop + sectionHeight) {
        const parallaxElements = sectionRef.current.querySelectorAll('.parallax');
        
        parallaxElements.forEach((elem, index) => {
          // Different speeds for different elements
          const speed = index % 3 === 0 ? 0.3 : index % 2 === 0 ? 0.2 : 0.1;
          const yOffset = (scrollY - sectionTop) * speed;
          
          // Apply transform using CSS variables for better performance
          (elem as HTMLElement).style.transform = `translateY(${yOffset}px)`;
        });
      }
    };
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set positions
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden gradient-dark"
    >
      {/* Animated background with waves */}
      <AnimatedWavesBackground />
      
      {/* Floating network elements */}
      <NetworkNode size="w-12 h-12" position="top-20 left-[15%]" delay="0s" duration="4s" />
      <NetworkNode size="w-8 h-8" position="top-40 left-[30%]" delay="0.5s" duration="5s" />
      <NetworkNode size="w-10 h-10" position="bottom-24 left-[20%]" delay="1s" duration="4.5s" />
      <NetworkNode size="w-6 h-6" position="top-32 right-[25%]" delay="1.5s" duration="3.5s" />
      <NetworkNode size="w-14 h-14" position="bottom-32 right-[15%]" delay="0.7s" duration="6s" />
      
      {/* Connection lines between nodes */}
      <ConnectionLine className="h-[1px] w-[15%] top-24 left-[20%] transform rotate-[15deg]" />
      <ConnectionLine className="h-[1px] w-[12%] top-40 left-[28%] transform rotate-[-20deg]" />
      <ConnectionLine className="h-[1px] w-[18%] bottom-40 left-[18%] transform rotate-[45deg]" />
      <ConnectionLine className="h-[1px] w-[10%] top-36 right-[20%] transform rotate-[30deg]" />
      
      {/* Circle decorations */}
      <CircleDecoration 
        className="w-64 h-64 bg-primary/10 top-16 -left-24" 
        animationClass="animate-pulse-slow parallax" 
      />
      <CircleDecoration 
        className="w-96 h-96 bg-primary/5 -bottom-20 -right-20" 
        animationClass="animate-spin-slow parallax" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-6'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight parallax">
              Find the Best TV & Internet Deals In Your Area
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-4 leading-relaxed parallax">
              Compare packages, prices, and providers to get the entertainment you want at the best value.
            </p>
            <p className="text-white/90 mb-8 parallax">
              Call us at <a href="tel:8887886930" className="font-semibold text-white underline hover:text-blue-200 transition-colors">888-788-6930</a> for personalized assistance.
            </p>
          </div>
          
          <Card className={`glass p-1 rounded-xl shadow-2xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-6'}`}>
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg">
              <CardContent className="p-0">
                <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Enter Your Zip Code to Get Started</h2>
                  <p className="text-gray-600 mb-2">We'll show you the best TV and internet providers available in your area.</p>
                  <p className="text-gray-600">Or call <a href="tel:8887886930" className="text-primary font-semibold hover:underline transition-colors">888-788-6930</a> for immediate assistance.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <div className="flex-grow relative">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 ${isFocused ? 'text-primary' : 'text-gray-400'} transition-colors`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <Input
                      type="text"
                      placeholder="Enter ZIP code (e.g. 12345 or 12345-6789)"
                      value={zipCode}
                      onChange={handleZipCodeChange}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      className={`w-full pl-12 pr-4 py-3 text-lg rounded-lg shadow-sm border-2 transition-all focus-within:ring-2 focus-within:ring-primary/30 ${
                        error ? 'border-red-500' : 
                        isValid && zipCode ? 'border-green-500' : 
                        'border-blue-100'
                      }`}
                      maxLength={10}
                    />
                    {isValid && zipCode && !error && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      </div>
                    )}
                    {error && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        {error}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Enter a 5-digit ZIP code or ZIP+4 format (12345-6789)
                    </p>
                  </div>
                  <Button 
                    type="submit" 
                    disabled={!isValid || !zipCode}
                    className={`bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                      !isValid || !zipCode ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    Find Providers
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-gray-200 text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary/10 hover:border-primary/80 transition-all duration-300">
                    <a href="tel:8887886930" className="flex items-center justify-center gap-2 py-2.5 px-4">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone relative z-10"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      </div>
                      <span className="font-medium">Call Us Now: 888-788-6930</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Animated Waves Background Component
const AnimatedWavesBackground: React.FC = () => {
  return (
    <>
      {/* First wave layer */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div 
          className="absolute inset-0 opacity-10 transform scale-125 animate-wave-slow" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23ffffff\' fill-opacity=\'1\' d=\'M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,218.7C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Second wave layer */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div 
          className="absolute inset-0 opacity-10 transform scale-125 animate-wave-medium" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23ffffff\' fill-opacity=\'1\' d=\'M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,165.3C672,160,768,192,864,176C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Third wave layer */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div 
          className="absolute inset-0 opacity-5 transform scale-110 animate-wave-fast" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23ffffff\' fill-opacity=\'1\' d=\'M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,101.3C672,107,768,181,864,176C960,171,1056,85,1152,74.7C1248,64,1344,128,1392,160L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 z-0" 
      />
    </>
  );
};

// Network Node Component
interface NetworkNodeProps {
  size: string;
  position: string;
  delay: string;
  duration: string;
}

const NetworkNode: React.FC<NetworkNodeProps> = ({ size, position, delay, duration }) => {
  return (
    <div 
      className={`absolute ${size} ${position} rounded-full bg-white/20 backdrop-blur-md z-1 animate-floating parallax`}
      style={{ 
        animationDelay: delay, 
        animationDuration: duration,
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.5)'
      }}
    >
      <div className="absolute inset-[15%] bg-primary/30 rounded-full animate-pulse-slow"></div>
    </div>
  );
};

// Connection Line Component
interface ConnectionLineProps {
  className?: string;
}

const ConnectionLine: React.FC<ConnectionLineProps> = ({ className }) => {
  return (
    <div 
      className={`absolute bg-gradient-to-r from-white/5 to-white/20 z-1 animate-pulse-slow ${className}`}
      style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)' }}
    ></div>
  );
};

// Circle Decoration Component
interface CircleDecorationProps {
  className?: string;
  animationClass?: string;
}

const CircleDecoration: React.FC<CircleDecorationProps> = ({ className, animationClass }) => {
  return (
    <div className={`absolute rounded-full ${className} ${animationClass}`}></div>
  );
};

export default HeroSection;
