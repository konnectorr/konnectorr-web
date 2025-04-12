import React, { useState } from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/layout/page-layout";
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
  
  // Function to simulate a speed test
  const runSpeedTest = () => {
    setTestStarted(true);
    setTestInProgress(true);
    setTestCompleted(false);
    setDownloadSpeed(null);
    setUploadSpeed(null);
    setPing(null);
    setProgressValue(0);
    setCurrentTestPhase("Initializing test...");
    
    // Simulate ping test
    setTimeout(() => {
      setCurrentTestPhase("Measuring ping...");
      setProgressValue(10);
      
      setTimeout(() => {
        // Generate a random ping between 10-80ms
        setPing(Math.floor(Math.random() * 70) + 10);
        setProgressValue(20);
        setCurrentTestPhase("Starting download test...");
        
        // Simulate download test (with animation)
        let dlProgress = 20;
        const dlInterval = setInterval(() => {
          dlProgress += 2;
          setProgressValue(dlProgress);
          
          if (dlProgress >= 60) {
            clearInterval(dlInterval);
            // Generate a random download speed between 50-300 Mbps
            setDownloadSpeed(Math.floor(Math.random() * 250) + 50);
            setCurrentTestPhase("Starting upload test...");
            
            // Simulate upload test (with animation)
            let ulProgress = 60;
            const ulInterval = setInterval(() => {
              ulProgress += 2;
              setProgressValue(ulProgress);
              
              if (ulProgress >= 100) {
                clearInterval(ulInterval);
                // Generate a random upload speed between 10-100 Mbps
                setUploadSpeed(Math.floor(Math.random() * 90) + 10);
                setCurrentTestPhase("Test completed!");
                setTestInProgress(false);
                setTestCompleted(true);
              }
            }, 100);
          }
        }, 100);
      }, 1000);
    }, 1000);
  };
  
  // Function to get a rating for the internet speed
  const getSpeedRating = (speed: number | null): {rating: string; color: string} => {
    if (speed === null) {
      return { rating: "Unknown", color: "text-gray-500" };
    }
    
    if (speed < 25) {
      return { rating: "Slow", color: "text-red-500" };
    } else if (speed < 100) {
      return { rating: "Good", color: "text-amber-500" };
    } else if (speed < 200) {
      return { rating: "Fast", color: "text-green-500" };
    } else {
      return { rating: "Excellent", color: "text-primary" };
    }
  };
  
  // Get speed ratings
  const downloadRating = getSpeedRating(downloadSpeed);
  const uploadRating = getSpeedRating(uploadSpeed);
  
  // Determine ping quality
  const getPingRating = (ping: number | null): {rating: string; color: string} => {
    if (ping === null) {
      return { rating: "Unknown", color: "text-gray-500" };
    }
    
    if (ping < 20) {
      return { rating: "Excellent", color: "text-primary" };
    } else if (ping < 50) {
      return { rating: "Good", color: "text-green-500" };
    } else if (ping < 100) {
      return { rating: "Average", color: "text-amber-500" };
    } else {
      return { rating: "Poor", color: "text-red-500" };
    }
  };
  
  const pingRating = getPingRating(ping);
  
  return (
    <PageLayout>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Breadcrumb className="mb-6">
                <BreadcrumbList className="text-white/80">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-white/80 hover:text-white">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/resources" className="text-white/80 hover:text-white">Resources</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
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
                Test your internet connection speed with our quick and accurate speed test tool.
              </p>
              <p className="text-white/90">
                Need help understanding your results? Call <a href="tel:8887886930" className="font-semibold text-white underline hover:text-white/80">888-788-6930</a> to speak with our experts.
              </p>
            </div>
          </div>
        </section>
        
        {/* Speed Test Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Speed Test Interface - Futuristic Design */}
              <div className="relative mb-16 overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-black to-gray-900 shadow-xl">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
                  <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl"></div>
                  <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-secondary/30 blur-3xl"></div>
                  <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-cyan-400/20 blur-3xl"></div>
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 opacity-10">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={`h-${i}`} className="absolute h-px w-full bg-white" style={{ top: `${i * 10}%` }}></div>
                    ))}
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={`v-${i}`} className="absolute h-full w-px bg-white" style={{ left: `${i * 10}%` }}></div>
                    ))}
                  </div>
                </div>
                
                <div className="relative z-10 p-8 md:p-10">
                  <div className="text-center mb-8">
                    <div className="mx-auto w-20 h-20 mb-5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 p-5 backdrop-blur-md border border-white/10 shadow-lg">
                      <Gauge className="h-full w-full text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white bg-clip-text bg-gradient-to-r from-white to-gray-300">
                      INTERNET SPEED TEST
                    </h2>
                    <p className="text-gray-300 max-w-md mx-auto text-sm">
                      Measure your connection's performance with our advanced diagnostic tool
                    </p>
                  </div>
                  
                  {/* Test Progress Indicator - Futuristic */}
                  {testStarted && (
                    <div className="mb-10 px-2">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-cyan-300 font-mono tracking-wider">
                          <span className="animate-pulse inline-block mr-1">⬤</span>
                          {currentTestPhase}
                        </span>
                        <span className="text-white font-mono">{progressValue}%</span>
                      </div>
                      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                          style={{ width: `${progressValue}%`, transition: 'width 0.3s ease-in-out' }}
                        ></div>
                        {/* Glowing Effect */}
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full blur-sm"
                          style={{ width: `${progressValue}%`, transition: 'width 0.3s ease-in-out' }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Results Display - Futuristic */}
                  {testCompleted && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                      <div className="p-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-white/10 shadow-lg backdrop-blur-md">
                        <div className="flex justify-center mb-2">
                          <div className="p-2 rounded-full bg-blue-900/30">
                            <ArrowDown className="h-6 w-6 text-blue-400" />
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1 font-mono tracking-wider">
                          {downloadSpeed}
                          <span className="text-blue-400 text-lg ml-1">Mbps</span>
                        </div>
                        <div className={`text-sm font-medium ${downloadRating.color} mb-1`}>
                          {downloadRating.rating}
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">Download</div>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-white/10 shadow-lg backdrop-blur-md">
                        <div className="flex justify-center mb-2">
                          <div className="p-2 rounded-full bg-green-900/30">
                            <ArrowUp className="h-6 w-6 text-green-400" />
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1 font-mono tracking-wider">
                          {uploadSpeed}
                          <span className="text-green-400 text-lg ml-1">Mbps</span>
                        </div>
                        <div className={`text-sm font-medium ${uploadRating.color} mb-1`}>
                          {uploadRating.rating}
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">Upload</div>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-white/10 shadow-lg backdrop-blur-md">
                        <div className="flex justify-center mb-2">
                          <div className="p-2 rounded-full bg-purple-900/30">
                            <Clock className="h-6 w-6 text-purple-400" />
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1 font-mono tracking-wider">
                          {ping}
                          <span className="text-purple-400 text-lg ml-1">ms</span>
                        </div>
                        <div className={`text-sm font-medium ${pingRating.color} mb-1`}>
                          {pingRating.rating}
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">Ping</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Start Test Button - Futuristic */}
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
                            <Gauge className="h-5 w-5" />
                            RUN NEW TEST
                          </>
                        ) : (
                          <>
                            <Wifi className="h-5 w-5" />
                            START SPEED TEST
                          </>
                        )}
                      </span>
                      
                      {/* Button glow effect */}
                      <span className="absolute inset-0 flex justify-center">
                        <span className={`h-full w-1/3 bg-white/30 blur-md transform ${testInProgress ? 'animate-shimmer' : ''}`}></span>
                      </span>
                    </Button>
                  </div>
                  
                  {/* Disclaimer Note */}
                  <div className="mt-6 text-xs text-gray-400 text-center font-mono">
                    <p>
                      SIMULATION ONLY • FOR DEMONSTRATION PURPOSES
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Test Results Explanation */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-4">Understanding Your Speed Test Results</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <ArrowDown className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Download Speed</h4>
                      <p className="text-gray-600 text-sm">
                        Download speed measures how quickly data travels from the internet to your device. This affects streaming quality, file downloads, and web browsing. For most households:
                      </p>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="text-red-500 font-medium">0-25 Mbps:</span> Basic browsing and email, single device streaming
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-amber-500 font-medium">25-100 Mbps:</span> HD streaming, working from home, multiple devices
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500 font-medium">100-200 Mbps:</span> 4K streaming, larger households, gaming
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-primary font-medium">200+ Mbps:</span> Multiple 4K streams, large file downloads, smart home
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <ArrowUp className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Upload Speed</h4>
                      <p className="text-gray-600 text-sm">
                        Upload speed measures how quickly data travels from your device to the internet. This affects video calls, file sharing, and social media uploads:
                      </p>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="text-red-500 font-medium">0-5 Mbps:</span> Basic email and social media
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-amber-500 font-medium">5-15 Mbps:</span> Video calls, casual photo uploading
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500 font-medium">15-50 Mbps:</span> HD video conferencing, cloud backups
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-primary font-medium">50+ Mbps:</span> Live streaming, large file uploads, content creation
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Ping</h4>
                      <p className="text-gray-600 text-sm">
                        Ping (measured in milliseconds) represents the response time between your device and the internet. Lower is better, especially for gaming and video calls:
                      </p>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="text-primary font-medium">Below 20ms:</span> Excellent, ideal for competitive gaming
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500 font-medium">20-50ms:</span> Good, suitable for online gaming and HD video calls
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-amber-500 font-medium">50-100ms:</span> Average, acceptable for most online activities
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-500 font-medium">100ms+:</span> Poor, may cause lag in real-time applications
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tips to Improve Speed */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-4">Tips to Improve Your Internet Speed</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" /> Router Placement
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600">
                        Position your router centrally in your home, elevated, and away from physical obstructions, large metal objects, and other electronic devices that could cause interference.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" /> Update Equipment
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600">
                        Older routers may not support the latest WiFi standards. Consider upgrading to a modern router that supports WiFi 6 or the latest standards for better performance.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" /> Secure Your Network
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600">
                        Ensure your WiFi is password-protected to prevent unauthorized users from consuming your bandwidth. Use WPA3 encryption when available for better security.
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
                        For larger homes, consider mesh WiFi systems or WiFi extenders to eliminate dead zones and provide consistent coverage throughout your home.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" /> Regular Restarts
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600">
                        Periodically restart your modem and router (about once a month) to clear cached data and resolve potential connectivity issues.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Need Help Section */}
              <div className="bg-gray-50 p-6 rounded-lg border">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Info className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold mb-2">Not Getting the Speed You Need?</h3>
                    <p className="text-gray-600 mb-4">
                      If your speed test results don't match what you're paying for, or if you're experiencing connectivity issues, our experts can help diagnose the problem and recommend solutions.
                    </p>
                    <Button asChild className="bg-primary hover:bg-secondary">
                      <a href="tel:8887886930" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Call for Expert Assistance: 888-788-6930
                      </a>
                    </Button>
                  </div>
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
                <div className="absolute top-0 right-0 left-0 h-1 bg-blue-400"></div>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">100 Mbps</div>
                  <p className="text-sm text-gray-600 mb-4">Perfect for browsing, email, and streaming on 1-2 devices</p>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Unlimited data</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>WiFi router included</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>24/7 technical support</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <a href="tel:8887886930" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call for Pricing
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center relative overflow-hidden border-primary">
                <div className="absolute top-0 right-0 left-0 h-1 bg-primary"></div>
                <div className="absolute top-2 right-2">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Most Popular</span>
                </div>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">300 Mbps</div>
                  <p className="text-sm text-gray-600 mb-4">Ideal for multiple devices, streaming HD content, and gaming</p>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Unlimited data</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Advanced WiFi router</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Priority technical support</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Free security software</span>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-primary hover:bg-secondary">
                    <a href="tel:8887886930" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call for Pricing
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-1 bg-purple-500"></div>
                <CardHeader>
                  <CardTitle>Ultra</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">1 Gig</div>
                  <p className="text-sm text-gray-600 mb-4">Ultimate performance for heavy users, 4K streaming, and smart homes</p>
                  <div className="space-y-2 text-sm mb-6">
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
                  <Button asChild className="w-full">
                    <a href="tel:8887886930" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call for Pricing
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default SpeedTestPage;