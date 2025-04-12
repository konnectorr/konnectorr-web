import React, { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight, Phone, Wifi, ArrowDown, ArrowUp, Gauge, Clock, Info, CheckCircle2, AlertCircle } from "lucide-react";

const SpeedTestPage: React.FC = () => {
  // Speed test states
  const [testStarted, setTestStarted] = useState<boolean>(false);
  const [testCompleted, setTestCompleted] = useState<boolean>(false);
  const [testInProgress, setTestInProgress] = useState<boolean>(false);
  const [downloadSpeed, setDownloadSpeed] = useState<number | null>(null);
  const [uploadSpeed, setUploadSpeed] = useState<number | null>(null);
  const [ping, setPing] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState<number>(0);
  const [currentTestPhase, setCurrentTestPhase] = useState<string>("");
  
  // Simulated speed test function
  const runSpeedTest = () => {
    if (testInProgress) return;
    
    // Reset states
    setTestStarted(true);
    setTestCompleted(false);
    setTestInProgress(true);
    setDownloadSpeed(null);
    setUploadSpeed(null);
    setPing(null);
    setProgressValue(0);
    
    // Simulate ping test (10% of progress)
    setCurrentTestPhase("Measuring ping...");
    
    let progress = 0;
    const pingInterval = setInterval(() => {
      progress += 2;
      setProgressValue(progress);
      if (progress >= 10) {
        clearInterval(pingInterval);
        // Generate random ping between 10-60ms
        setPing(Math.floor(Math.random() * 50) + 10);
        startDownloadTest();
      }
    }, 100);
    
    // Simulate download test (60% of progress)
    const startDownloadTest = () => {
      setCurrentTestPhase("Testing download speed...");
      const downloadInterval = setInterval(() => {
        progress += 2;
        setProgressValue(progress);
        if (progress >= 70) {
          clearInterval(downloadInterval);
          // Generate random download speed between 20-500 Mbps
          setDownloadSpeed(Math.floor(Math.random() * 480) + 20);
          startUploadTest();
        }
      }, 100);
    };
    
    // Simulate upload test (30% of progress)
    const startUploadTest = () => {
      setCurrentTestPhase("Testing upload speed...");
      const uploadInterval = setInterval(() => {
        progress += 2;
        setProgressValue(progress);
        if (progress >= 100) {
          clearInterval(uploadInterval);
          // Generate random upload speed between 5-100 Mbps
          setUploadSpeed(Math.floor(Math.random() * 95) + 5);
          completeTest();
        }
      }, 100);
    };
    
    // Complete the test
    const completeTest = () => {
      setTestInProgress(false);
      setTestCompleted(true);
      setCurrentTestPhase("Test completed");
    };
  };
  
  // Get recommendation based on speed
  const getSpeedRecommendation = (download: number | null) => {
    if (!download) return null;
    
    if (download < 25) {
      return {
        rating: "Basic",
        description: "Suitable for light web browsing and email. May struggle with video streaming and online gaming.",
        recommendation: "Consider upgrading to a faster plan for better performance with streaming and multiple devices."
      };
    } else if (download < 100) {
      return {
        rating: "Good",
        description: "Adequate for HD streaming, video calls, and casual online gaming with 1-3 devices.",
        recommendation: "This speed works well for small households with moderate internet usage."
      };
    } else if (download < 300) {
      return {
        rating: "Fast",
        description: "Great for 4K streaming, fast downloads, online gaming, and supporting multiple devices simultaneously.",
        recommendation: "Perfect for medium to large households with high internet usage."
      };
    } else {
      return {
        rating: "Excellent",
        description: "Ultra-fast connection supporting multiple 4K streams, competitive gaming, and large file transfers.",
        recommendation: "Ideal for large households with heavy internet usage, content creators, and tech enthusiasts."
      };
    }
  };
  
  // Helper function to determine speed quality color
  const getSpeedColor = (speed: number | null, type: 'download' | 'upload' | 'ping') => {
    if (speed === null) return 'bg-gray-300';
    
    if (type === 'download') {
      if (speed < 25) return 'bg-red-500';
      if (speed < 100) return 'bg-yellow-500';
      if (speed < 300) return 'bg-green-500';
      return 'bg-blue-500';
    } else if (type === 'upload') {
      if (speed < 5) return 'bg-red-500';
      if (speed < 20) return 'bg-yellow-500';
      if (speed < 50) return 'bg-green-500';
      return 'bg-blue-500';
    } else { // ping
      if (speed > 50) return 'bg-red-500';
      if (speed > 30) return 'bg-yellow-500';
      if (speed > 20) return 'bg-green-500';
      return 'bg-blue-500';
    }
  };
  
  const recommendation = downloadSpeed ? getSpeedRecommendation(downloadSpeed) : null;
  
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
          <div className="absolute inset-0 bg-[url('/esim-world-connected.svg')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-20 px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="text-white/80 hover:text-white">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/50">
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/resources" className="text-white/80 hover:text-white">Resources</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white/50">
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="text-white font-medium">Internet Speed Test</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Internet Speed Test
              </h1>
              <p className="text-white/90 mb-2">
                Test your connection speed to ensure you're getting the performance you're paying for. Our speed test measures your download speed, upload speed, and ping.
              </p>
              <p className="text-white/90">
                Need to upgrade your service? Call <a href="tel:8887886930" className="font-semibold text-white underline hover:text-white/80">888-788-6930</a> to speak with our experts.
              </p>
            </div>
          </div>
        </section>
        
        {/* Speed Test Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Speed Test Card */}
              <Card className="shadow-lg border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 flex flex-col items-center">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-2">Test Your Connection Speed</h2>
                    <p className="text-gray-600 max-w-md">
                      Click the button below to start the test. Make sure you're not downloading files or streaming for the most accurate results.
                    </p>
                  </div>
                  
                  {/* Speed Test Button */}
                  <div className="text-center">
                    <Button 
                      onClick={runSpeedTest}
                      disabled={testInProgress}
                      size="lg"
                      className={`
                        relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary 
                        text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 shadow-lg
                        border border-white/10 backdrop-blur-sm
                      `}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 font-mono tracking-wider">
                        {testInProgress ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            ANALYZING CONNECTION
                          </>
                        ) : testCompleted ? (
                          <>
                            <CheckCircle2 className="h-5 w-5" />
                            RUN TEST AGAIN
                          </>
                        ) : (
                          <>
                            <Gauge className="h-5 w-5" />
                            START SPEED TEST
                          </>
                        )}
                      </span>
                    </Button>
                  </div>
                  
                  {/* Progress display */}
                  {testStarted && (
                    <div className="w-full mt-6">
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                        <span>{currentTestPhase}</span>
                        <span>{progressValue}%</span>
                      </div>
                      <Progress value={progressValue} className="h-2" />
                    </div>
                  )}
                  
                  {/* Results display */}
                  {testCompleted && (
                    <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Download Speed */}
                      <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                          <ArrowDown className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-center">
                          <h3 className="text-gray-500 font-medium mb-1">DOWNLOAD</h3>
                          <div className="text-3xl font-bold flex items-center justify-center">
                            {downloadSpeed} <span className="text-base ml-1 text-gray-500">Mbps</span>
                          </div>
                        </div>
                        <div className="w-full mt-3">
                          <div className={`h-2 rounded-full ${getSpeedColor(downloadSpeed, 'download')}`}></div>
                        </div>
                      </div>
                      
                      {/* Upload Speed */}
                      <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                          <ArrowUp className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-center">
                          <h3 className="text-gray-500 font-medium mb-1">UPLOAD</h3>
                          <div className="text-3xl font-bold flex items-center justify-center">
                            {uploadSpeed} <span className="text-base ml-1 text-gray-500">Mbps</span>
                          </div>
                        </div>
                        <div className="w-full mt-3">
                          <div className={`h-2 rounded-full ${getSpeedColor(uploadSpeed, 'upload')}`}></div>
                        </div>
                      </div>
                      
                      {/* Ping */}
                      <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                          <Clock className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-center">
                          <h3 className="text-gray-500 font-medium mb-1">PING</h3>
                          <div className="text-3xl font-bold flex items-center justify-center">
                            {ping} <span className="text-base ml-1 text-gray-500">ms</span>
                          </div>
                        </div>
                        <div className="w-full mt-3">
                          <div className={`h-2 rounded-full ${getSpeedColor(ping, 'ping')}`}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Results analysis */}
                  {recommendation && (
                    <div className="w-full mt-8">
                      <Card className="bg-white border border-gray-100">
                        <CardHeader>
                          <CardTitle className="text-xl flex items-center">
                            <Info className="mr-2 h-5 w-5 text-primary" />
                            Connection Analysis
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <span className="font-medium mr-2">Speed Rating:</span>
                              <span className={`
                                text-sm px-2 py-1 rounded-full
                                ${recommendation.rating === 'Basic' ? 'bg-red-100 text-red-800' :
                                  recommendation.rating === 'Good' ? 'bg-yellow-100 text-yellow-800' :
                                  recommendation.rating === 'Fast' ? 'bg-green-100 text-green-800' :
                                  'bg-blue-100 text-blue-800'}
                              `}>
                                {recommendation.rating}
                              </span>
                            </div>
                            
                            <div>
                              <span className="font-medium">Connection Quality:</span>
                              <p className="text-gray-600 mt-1">{recommendation.description}</p>
                            </div>
                            
                            <div>
                              <span className="font-medium">Recommendation:</span>
                              <p className="text-gray-600 mt-1">{recommendation.recommendation}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <div className="mt-6 text-center">
                        <Button asChild variant="outline" className="px-6">
                          <a href="tel:8887886930" className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            Need a faster connection? Call 888-788-6930
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
              
              {/* Connection Tips */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Tips to Improve Your Connection</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" /> Router Placement
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600">
                        Place your router in a central location, away from walls, metal objects, and electronics that can cause interference.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" /> Wired Connections
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600">
                        Use Ethernet cables for devices that need the fastest, most reliable connection, such as gaming consoles, desktop computers, and streaming devices.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" /> WiFi Extenders
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600">
                        If you have dead zones in your home, consider adding WiFi extenders or a mesh network system to improve coverage throughout your home.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Faster Plan Offerings */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Looking for Faster Internet?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a variety of high-speed internet plans to meet your needs. Whether you're streaming, gaming, or working from home, we have the perfect plan for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-1 bg-blue-500"></div>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">100 Mbps</div>
                  <div className="text-gray-500 mb-6">$49.99/mo</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Ideal for 1-3 devices</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>HD streaming</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Basic WiFi router</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>1TB monthly data</span>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-6">
                    <a href="tel:8887886930" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call to Order
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center relative overflow-hidden shadow-lg border-primary/20 scale-105 z-10">
                <div className="absolute top-0 right-0 left-0 h-1 bg-primary"></div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium bg-primary text-white px-2 py-1 rounded-full">POPULAR</span>
                </div>
                <CardHeader>
                  <CardTitle>Preferred</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">300 Mbps</div>
                  <div className="text-gray-500 mb-6">$69.99/mo</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Perfect for 3-5 devices</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>4K streaming & gaming</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Advanced WiFi router</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Unlimited data</span>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90">
                    <a href="tel:8887886930" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call to Order
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-1 bg-indigo-600"></div>
                <CardHeader>
                  <CardTitle>Ultimate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">1 Gbps</div>
                  <div className="text-gray-500 mb-6">$99.99/mo</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Unlimited devices</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Unlimited data</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Premium WiFi 6 router</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>24/7 VIP support</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Complete security suite</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Professional installation</span>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-6">
                    <a href="tel:8887886930" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call to Order
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SpeedTestPage;