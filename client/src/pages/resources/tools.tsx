import React, { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight, Phone, Calculator, Wifi, Tv, PieChart, DollarSign, Users, Laptop, Smartphone, Gamepad2, VideoIcon, Database, Mail, Globe, Music, FileText, Sparkles } from "lucide-react";

const ToolsCalculatorsPage: React.FC = () => {
  // Internet Speed Calculator State
  const [people, setPeople] = useState<number>(2);
  const [devices, setDevices] = useState<number>(5);
  const [streamers, setStreamers] = useState<number>(1);
  const [gamers, setGamers] = useState<number>(0);
  const [workFromHome, setWorkFromHome] = useState<number>(1);
  const [videoQuality, setVideoQuality] = useState<string>("hd");
  
  // Cost Comparison Calculator State
  const [currentTvCost, setCurrentTvCost] = useState<string>("80");
  const [currentInternetCost, setCurrentInternetCost] = useState<string>("60");
  const [currentPhoneCost, setCurrentPhoneCost] = useState<string>("0");
  const [currentStreamingCost, setCurrentStreamingCost] = useState<string>("30");
  const [bundleOption, setBundleOption] = useState<string>("triple");
  
  // Pricing Calculator State
  const [selectedProvider, setSelectedProvider] = useState<string>("optimum");
  const [selectedSpeed, setSelectedSpeed] = useState<string>("300mbps");
  const [selectedTvPackage, setSelectedTvPackage] = useState<string>("none");
  const [selectedEquipment, setSelectedEquipment] = useState<{
    modem: boolean;
    dvr: boolean;
    extender: boolean;
    multiroom: boolean;
  }>({
    modem: false,
    dvr: false,
    extender: false,
    multiroom: false,
  });
  
  // Data Usage Calculator State
  const [emailsPerDay, setEmailsPerDay] = useState<number>(10);
  const [browsingHours, setBrowsingHours] = useState<number>(2);
  const [musicHours, setMusicHours] = useState<number>(1);
  const [sdVideoHours, setSdVideoHours] = useState<number>(0);
  const [hdVideoHours, setHdVideoHours] = useState<number>(2);
  const [fourKVideoHours, setFourKVideoHours] = useState<number>(0);
  const [videoCallsHours, setVideoCallsHours] = useState<number>(1);
  const [socialMediaHours, setSocialMediaHours] = useState<number>(2);
  const [downloadGBs, setDownloadGBs] = useState<number>(5);

  // Calculate recommended internet speed
  const calculateRecommendedSpeed = (): { speed: number; description: string } => {
    let baseSpeed = 25;
    
    // Add per person
    baseSpeed += (people - 1) * 10;
    
    // Add for devices
    baseSpeed += Math.max(0, devices - 3) * 5;
    
    // Add for streaming
    if (videoQuality === "sd") {
      baseSpeed += streamers * 5;
    } else if (videoQuality === "hd") {
      baseSpeed += streamers * 10;
    } else if (videoQuality === "4k") {
      baseSpeed += streamers * 25;
    }
    
    // Add for gaming
    baseSpeed += gamers * 15;
    
    // Add for work from home
    baseSpeed += workFromHome * 10;
    
    // Determine speed tier
    const speed = Math.ceil(baseSpeed / 25) * 25;
    
    // Description based on the speed
    let description = "";
    if (speed <= 50) {
      description = "Suitable for basic browsing, email, and occasional SD streaming.";
    } else if (speed <= 100) {
      description = "Good for regular HD streaming, social media, and light work from home.";
    } else if (speed <= 200) {
      description = "Great for multiple users, HD streaming, video conferencing, and gaming.";
    } else if (speed <= 400) {
      description = "Excellent for households with heavy internet usage, multiple 4K streams, and competitive gaming.";
    } else {
      description = "Ideal for tech-heavy households with simultaneous 4K streaming, large file downloads, and multiple online gamers.";
    }
    
    return { speed, description };
  };

  // Calculate bundle savings
  const calculateBundleSavings = (): { 
    currentTotal: number; 
    bundlePrice: number; 
    savings: number; 
    percentSavings: number;
    bundleName: string;
  } => {
    const tv = parseFloat(currentTvCost) || 0;
    const internet = parseFloat(currentInternetCost) || 0;
    const phone = parseFloat(currentPhoneCost) || 0;
    const streaming = parseFloat(currentStreamingCost) || 0;
    
    const currentTotal = tv + internet + phone + streaming;
    
    let bundlePrice = 0;
    let bundleName = "";
    
    if (bundleOption === "double") {
      // Double play (TV + Internet)
      bundlePrice = (tv + internet) * 0.85;
      bundleName = "Double Play (TV + Internet)";
    } else if (bundleOption === "triple") {
      // Triple play (TV + Internet + Phone)
      bundlePrice = (tv + internet + phone) * 0.8;
      bundleName = "Triple Play (TV + Internet + Phone)";
    } else if (bundleOption === "quadruple") {
      // Quadruple play (TV + Internet + Phone + Streaming)
      bundlePrice = (tv + internet + phone + streaming) * 0.75;
      bundleName = "Quadruple Play (TV + Internet + Phone + Streaming)";
    }
    
    const savings = currentTotal - bundlePrice;
    const percentSavings = (savings / currentTotal) * 100;
    
    return { currentTotal, bundlePrice, savings, percentSavings, bundleName };
  };

  // Calculate monthly data usage
  const calculateDataUsage = (): {
    totalGB: number;
    usageBreakdown: { name: string; usage: number; icon: React.ReactNode }[];
    planRecommendation: string;
  } => {
    // Estimated data usage for each activity (in GB)
    const emailUsage = emailsPerDay * 30 * 0.001; // 1 MB per email average
    const browsingUsage = browsingHours * 30 * 0.05; // 50 MB per hour
    const musicUsage = musicHours * 30 * 0.1; // 100 MB per hour of streaming
    const sdVideoUsage = sdVideoHours * 30 * 0.7; // 700 MB per hour
    const hdVideoUsage = hdVideoHours * 30 * 3; // 3 GB per hour
    const fourKVideoUsage = fourKVideoHours * 30 * 7; // 7 GB per hour
    const videoCallsUsage = videoCallsHours * 30 * 0.5; // 500 MB per hour
    const socialMediaUsage = socialMediaHours * 30 * 0.1; // 100 MB per hour
    
    // Total monthly data usage
    const totalGB = emailUsage + browsingUsage + musicUsage + sdVideoUsage + 
                   hdVideoUsage + fourKVideoUsage + videoCallsUsage + 
                   socialMediaUsage + downloadGBs;
    
    // Create usage breakdown
    const usageBreakdown = [
      { 
        name: "Email", 
        usage: Math.round(emailUsage * 10) / 10,
        icon: <Mail className="h-4 w-4 text-primary" />
      },
      { 
        name: "Web Browsing", 
        usage: Math.round(browsingUsage * 10) / 10,
        icon: <Globe className="h-4 w-4 text-primary" />
      },
      { 
        name: "Music Streaming", 
        usage: Math.round(musicUsage * 10) / 10,
        icon: <Music className="h-4 w-4 text-primary" />
      },
      { 
        name: "SD Video", 
        usage: Math.round(sdVideoUsage * 10) / 10,
        icon: <Tv className="h-4 w-4 text-primary" />
      },
      { 
        name: "HD Video", 
        usage: Math.round(hdVideoUsage * 10) / 10,
        icon: <Tv className="h-4 w-4 text-primary" />
      },
      { 
        name: "4K Video", 
        usage: Math.round(fourKVideoUsage * 10) / 10,
        icon: <Tv className="h-4 w-4 text-primary" />
      },
      { 
        name: "Video Calls", 
        usage: Math.round(videoCallsUsage * 10) / 10,
        icon: <VideoIcon className="h-4 w-4 text-primary" />
      },
      { 
        name: "Social Media", 
        usage: Math.round(socialMediaUsage * 10) / 10,
        icon: <Smartphone className="h-4 w-4 text-primary" />
      },
      { 
        name: "Downloads", 
        usage: downloadGBs,
        icon: <Database className="h-4 w-4 text-primary" />
      }
    ].filter(item => item.usage > 0).sort((a, b) => b.usage - a.usage);
    
    // Determine plan recommendation based on usage
    let planRecommendation = "";
    if (totalGB < 100) {
      planRecommendation = "Basic Internet Plan (100GB)";
    } else if (totalGB < 250) {
      planRecommendation = "Standard Internet Plan (250GB)";
    } else if (totalGB < 500) {
      planRecommendation = "Premium Internet Plan (500GB)";
    } else if (totalGB < 1000) {
      planRecommendation = "Ultra Internet Plan (1TB)";
    } else {
      planRecommendation = "Unlimited Data Plan";
    }
    
    return { totalGB: Math.round(totalGB * 10) / 10, usageBreakdown, planRecommendation };
  };

  // Calculate provider-specific pricing
  const calculatePackagePrice = () => {
    // Provider-specific internet pricing
    const internetPricing: Record<string, Record<string, number>> = {
      optimum: {
        "100mbps": 39.99,
        "300mbps": 59.99,
        "500mbps": 79.99,
        "1gig": 99.99
      },
      spectrum: {
        "100mbps": 49.99,
        "300mbps": 69.99,
        "500mbps": 89.99,
        "1gig": 109.99
      },
      xfinity: {
        "100mbps": 44.99,
        "300mbps": 64.99,
        "500mbps": 84.99,
        "1gig": 94.99
      }
    };

    // Provider-specific TV pricing
    const tvPricing: Record<string, Record<string, number>> = {
      optimum: {
        "none": 0,
        "basic": 29.99,
        "select": 49.99,
        "premier": 79.99
      },
      spectrum: {
        "none": 0,
        "basic": 34.99,
        "select": 54.99,
        "premier": 84.99
      },
      xfinity: {
        "none": 0,
        "basic": 30.99,
        "select": 50.99,
        "premier": 80.99
      }
    };

    // Equipment pricing (same across providers for simplicity)
    const equipmentPricing = {
      modem: 14,
      dvr: 10,
      extender: 5,
      multiroom: 7
    };

    // Calculate base internet price
    const internetPrice = internetPricing[selectedProvider]?.[selectedSpeed] || 59.99;
    
    // Calculate TV price
    const tvPrice = tvPricing[selectedProvider]?.[selectedTvPackage] || 0;
    
    // Calculate equipment total
    let equipmentTotal = 0;
    if (selectedEquipment.modem) equipmentTotal += equipmentPricing.modem;
    if (selectedEquipment.dvr) equipmentTotal += equipmentPricing.dvr;
    if (selectedEquipment.extender) equipmentTotal += equipmentPricing.extender;
    if (selectedEquipment.multiroom) equipmentTotal += equipmentPricing.multiroom;

    // Calculate subtotal before discounts
    const subtotal = internetPrice + tvPrice;
    
    // Bundle discount logic (if TV package is selected)
    let bundleDiscount = 0;
    if (selectedTvPackage !== "none") {
      bundleDiscount = subtotal * 0.1; // 10% discount for bundle
    }
    
    // Final price
    const totalPrice = subtotal + equipmentTotal - bundleDiscount;
    
    // Internet information 
    const internetInfo = {
      name: `${selectedSpeed === "1gig" ? "1 Gig" : selectedSpeed.replace("mbps", " Mbps")}`,
      price: internetPrice,
      speedValue: selectedSpeed === "1gig" ? 1000 : parseInt(selectedSpeed.replace("mbps", ""))
    };
    
    // TV package information if selected
    const tvInfo = selectedTvPackage !== "none" ? {
      name: selectedTvPackage.charAt(0).toUpperCase() + selectedTvPackage.slice(1),
      price: tvPrice
    } : null;
    
    return {
      internetInfo,
      tvInfo,
      equipmentTotal,
      subtotal,
      bundleDiscount,
      totalPrice
    };
  };

  const { speed, description } = calculateRecommendedSpeed();
  const bundleCalculation = calculateBundleSavings();
  const dataUsage = calculateDataUsage();
  const pricingDetails = calculatePackagePrice();
  
  return (
    <>
      <Header />
      
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
                    <BreadcrumbLink className="text-white font-medium">Tools & Calculators</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                TV & Internet Tools & Calculators
              </h1>
              <p className="text-white/90 mb-2">
                Interactive tools to help you estimate your internet speed needs, potential savings with bundles, and more.
              </p>
              <p className="text-white/90">
                Need assistance interpreting these results? Call <a href="tel:8885698194" className="font-semibold text-white underline hover:text-white/80">888-569-8194</a> for expert guidance.
              </p>
            </div>
          </div>
        </section>
        
        {/* Tools & Calculators Tabs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="bill" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-5">
                  <TabsTrigger value="bill" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" /> Bill
                  </TabsTrigger>
                  <TabsTrigger value="internet" className="flex items-center gap-2">
                    <Wifi className="h-4 w-4" /> Speed
                  </TabsTrigger>
                  <TabsTrigger value="bundle" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" /> Bundle
                  </TabsTrigger>
                  <TabsTrigger value="data" className="flex items-center gap-2">
                    <Database className="h-4 w-4" /> Data
                  </TabsTrigger>
                  <TabsTrigger value="pricing" className="flex items-center gap-2">
                    <Calculator className="h-4 w-4" /> Pricing
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Bill Analyzer Tool */}
              <TabsContent value="bill" className="space-y-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="flex items-center gap-2">
                      <FileText className="h-6 w-6 text-primary" />
                      Bill Analysis Tool
                    </span>
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Upload your current telecom bill or enter the details manually to identify potential savings, hidden fees, and better alternatives for your service needs.
                  </p>
                </div>
                
                <div className="max-w-3xl mx-auto space-y-8">
                  <div className="bg-gradient-to-r from-primary/90 to-primary/60 rounded-lg p-6 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none">
                        <Sparkles className="h-3.5 w-3.5 mr-1" />
                        <span>New Feature</span>
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Our users save an average of 30% on their monthly bills</h3>
                    <p className="text-white/80 mb-4">
                      Our bill analyzer identifies unnecessary charges, overpayments, and helps you find better-value alternatives based on your actual usage patterns.
                    </p>
                    <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                      <Link href="/resources/bill-analyzer">
                        Use Full Bill Analysis Tool
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-primary" />
                          Common Hidden Fees
                        </CardTitle>
                        <CardDescription>
                          Charges many customers don't realize they're paying
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-medium">Equipment Rental</span>
                            <span className="text-red-500">$10-15/mo</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">HD Technology Fee</span>
                            <span className="text-red-500">$10/mo</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Broadcast TV Fee</span>
                            <span className="text-red-500">$15-20/mo</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Regional Sports Fee</span>
                            <span className="text-red-500">$8-10/mo</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Internet Infrastructure Fee</span>
                            <span className="text-red-500">$3-7/mo</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Administrative Fees</span>
                            <span className="text-red-500">$2-5/mo</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <p className="text-sm text-gray-500">
                          These fees can add up to over $50/month in unnecessary charges on your bill!
                        </p>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <PieChart className="h-5 w-5 text-primary" />
                          Average Bill Breakdown
                        </CardTitle>
                        <CardDescription>
                          Where your money typically goes each month
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Base Service Cost</span>
                              <span className="text-sm">60%</span>
                            </div>
                            <Progress value={60} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Equipment Fees</span>
                              <span className="text-sm">15%</span>
                            </div>
                            <Progress value={15} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Broadcast/Sports Fees</span>
                              <span className="text-sm">12%</span>
                            </div>
                            <Progress value={12} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Taxes</span>
                              <span className="text-sm">8%</span>
                            </div>
                            <Progress value={8} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Administrative Fees</span>
                              <span className="text-sm">5%</span>
                            </div>
                            <Progress value={5} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <p className="text-sm text-gray-500">
                          Many customers are surprised to learn that up to 40% of their bill goes to fees and charges beyond the advertised price.
                        </p>
                      </CardFooter>
                    </Card>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border text-center">
                    <h3 className="text-xl font-bold mb-4">Ready to analyze your bill?</h3>
                    <p className="text-gray-600 mb-6">
                      Use our full Bill Analysis Tool to upload your bill or enter details manually.
                      Our experts will help you identify savings opportunities and find better plans.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild className="flex-1">
                        <Link href="/resources/bill-analyzer">
                          Analyze My Bill Now
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <a href="tel:8885698194" className="flex items-center justify-center gap-2">
                          <Phone className="h-4 w-4" />
                          Get Expert Help
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Internet Speed Calculator */}
              <TabsContent value="internet" className="space-y-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Internet Speed Calculator</h2>
                  <p className="text-gray-600 mb-8">
                    Adjust the parameters below to get a personalized internet speed recommendation based on your household's usage.
                  </p>
                </div>
                
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          People in Household: {people}
                        </Label>
                        <span className="text-sm text-gray-500">{people}</span>
                      </div>
                      <Slider 
                        value={[people]} 
                        min={1} 
                        max={8} 
                        step={1} 
                        onValueChange={(val) => setPeople(val[0])} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Laptop className="h-4 w-4 text-primary" />
                          Connected Devices: {devices}
                        </Label>
                        <span className="text-sm text-gray-500">{devices}</span>
                      </div>
                      <Slider 
                        value={[devices]} 
                        min={1} 
                        max={20} 
                        step={1} 
                        onValueChange={(val) => setDevices(val[0])} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <VideoIcon className="h-4 w-4 text-primary" />
                          Simultaneous Streamers: {streamers}
                        </Label>
                        <span className="text-sm text-gray-500">{streamers}</span>
                      </div>
                      <Slider 
                        value={[streamers]} 
                        min={0} 
                        max={8} 
                        step={1} 
                        onValueChange={(val) => setStreamers(val[0])} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Gamepad2 className="h-4 w-4 text-primary" />
                          Online Gamers: {gamers}
                        </Label>
                        <span className="text-sm text-gray-500">{gamers}</span>
                      </div>
                      <Slider 
                        value={[gamers]} 
                        min={0} 
                        max={5} 
                        step={1} 
                        onValueChange={(val) => setGamers(val[0])} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Laptop className="h-4 w-4 text-primary" />
                          Remote Workers: {workFromHome}
                        </Label>
                        <span className="text-sm text-gray-500">{workFromHome}</span>
                      </div>
                      <Slider 
                        value={[workFromHome]} 
                        min={0} 
                        max={5} 
                        step={1} 
                        onValueChange={(val) => setWorkFromHome(val[0])} 
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Streaming Video Quality</Label>
                      <RadioGroup 
                        value={videoQuality} 
                        onValueChange={setVideoQuality}
                        className="flex space-x-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sd" id="sd" />
                          <Label htmlFor="sd" className="text-sm">SD</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hd" id="hd" />
                          <Label htmlFor="hd" className="text-sm">HD</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="4k" id="4k" />
                          <Label htmlFor="4k" className="text-sm">4K</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold mb-3">Your Recommended Speed</h3>
                    
                    <div className="flex items-end gap-1 mb-3">
                      <span className="text-4xl font-bold text-primary">{speed}</span>
                      <span className="text-xl font-medium text-gray-700 mb-1">Mbps</span>
                    </div>
                    
                    <Progress value={(speed / 500) * 100} className="h-2 mb-4" />
                    
                    <div className="space-y-4">
                      <p className="text-gray-600 text-sm">{description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Suitable Provider Plans:</h4>
                        <div className="flex flex-wrap gap-2">
                          {speed <= 100 && (
                            <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">Optimum 100</Badge>
                          )}
                          {speed <= 200 && speed > 50 && (
                            <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">Optimum 200</Badge>
                          )}
                          {speed <= 400 && speed > 100 && (
                            <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">Optimum 300</Badge>
                          )}
                          {speed > 200 && (
                            <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">Optimum 500</Badge>
                          )}
                          {speed > 400 && (
                            <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">Optimum 1 Gig</Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <p className="text-sm text-gray-500 mb-4">Looking for a plan that matches these needs?</p>
                        <Button asChild className="w-full">
                          <a href="tel:8885698194" className="flex items-center justify-center gap-2">
                            <Phone className="h-4 w-4" />
                            Call for Expert Recommendations
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Data Usage Calculator */}
              <TabsContent value="data" className="space-y-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Data Usage Calculator</h2>
                  <p className="text-gray-600 mb-8">
                    Estimate your monthly internet data usage based on your online activities to help choose the right data plan.
                  </p>
                </div>
                
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          Emails per day: {emailsPerDay}
                        </Label>
                        <span className="text-sm text-gray-500">{emailsPerDay}</span>
                      </div>
                      <Slider 
                        value={[emailsPerDay]} 
                        min={0} 
                        max={50} 
                        step={1} 
                        onValueChange={(val) => setEmailsPerDay(val[0])} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Globe className="h-4 w-4 text-primary" />
                          Web browsing (hours/day): {browsingHours}
                        </Label>
                        <span className="text-sm text-gray-500">{browsingHours}</span>
                      </div>
                      <Slider 
                        value={[browsingHours]} 
                        min={0} 
                        max={10} 
                        step={1} 
                        onValueChange={(val) => setBrowsingHours(val[0])} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Music className="h-4 w-4 text-primary" />
                          Music streaming (hours/day): {musicHours}
                        </Label>
                        <span className="text-sm text-gray-500">{musicHours}</span>
                      </div>
                      <Slider 
                        value={[musicHours]} 
                        min={0} 
                        max={8} 
                        step={1} 
                        onValueChange={(val) => setMusicHours(val[0])} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Tv className="h-4 w-4 text-primary" />
                          SD video streaming (hours/day): {sdVideoHours}
                        </Label>
                        <span className="text-sm text-gray-500">{sdVideoHours}</span>
                      </div>
                      <Slider 
                        value={[sdVideoHours]} 
                        min={0} 
                        max={8} 
                        step={1} 
                        onValueChange={(val) => setSdVideoHours(val[0])} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Tv className="h-4 w-4 text-primary" />
                          HD video streaming (hours/day): {hdVideoHours}
                        </Label>
                        <span className="text-sm text-gray-500">{hdVideoHours}</span>
                      </div>
                      <Slider 
                        value={[hdVideoHours]} 
                        min={0} 
                        max={8} 
                        step={1} 
                        onValueChange={(val) => setHdVideoHours(val[0])} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Tv className="h-4 w-4 text-primary" />
                          4K video streaming (hours/day): {fourKVideoHours}
                        </Label>
                        <span className="text-sm text-gray-500">{fourKVideoHours}</span>
                      </div>
                      <Slider 
                        value={[fourKVideoHours]} 
                        min={0} 
                        max={8} 
                        step={1} 
                        onValueChange={(val) => setFourKVideoHours(val[0])} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <VideoIcon className="h-4 w-4 text-primary" />
                          Video calls (hours/day): {videoCallsHours}
                        </Label>
                        <span className="text-sm text-gray-500">{videoCallsHours}</span>
                      </div>
                      <Slider 
                        value={[videoCallsHours]} 
                        min={0} 
                        max={8} 
                        step={1} 
                        onValueChange={(val) => setVideoCallsHours(val[0])} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Smartphone className="h-4 w-4 text-primary" />
                          Social media (hours/day): {socialMediaHours}
                        </Label>
                        <span className="text-sm text-gray-500">{socialMediaHours}</span>
                      </div>
                      <Slider 
                        value={[socialMediaHours]} 
                        min={0} 
                        max={8} 
                        step={1} 
                        onValueChange={(val) => setSocialMediaHours(val[0])} 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          <Database className="h-4 w-4 text-primary" />
                          Downloads (GB/month): {downloadGBs}
                        </Label>
                        <span className="text-sm text-gray-500">{downloadGBs}GB</span>
                      </div>
                      <Slider 
                        value={[downloadGBs]} 
                        min={0} 
                        max={100} 
                        step={5} 
                        onValueChange={(val) => setDownloadGBs(val[0])} 
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold mb-3">Your Estimated Data Usage</h3>
                    
                    <div className="flex items-end gap-1 mb-3">
                      <span className="text-4xl font-bold text-primary">{dataUsage.totalGB}</span>
                      <span className="text-xl font-medium text-gray-700 mb-1">GB/month</span>
                    </div>
                    
                    <Progress value={(dataUsage.totalGB / 1000) * 100} className="h-2 mb-6" />
                    
                    <div className="space-y-5">
                      <div>
                        <h4 className="font-medium mb-2">Usage Breakdown:</h4>
                        <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2">
                          {dataUsage.usageBreakdown.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                {item.icon}
                                <span className="text-sm">{item.name}</span>
                              </div>
                              <div className="text-sm font-medium">
                                {item.usage} GB
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-1">Recommended Plan:</h4>
                        <div className="text-lg font-semibold text-primary">
                          {dataUsage.planRecommendation}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Based on your estimated monthly usage of {dataUsage.totalGB}GB
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <p className="text-sm text-gray-500 mb-4">Need help finding a plan with the right data allocation?</p>
                        <Button asChild className="w-full">
                          <a href="tel:8885698194" className="flex items-center justify-center gap-2">
                            <Phone className="h-4 w-4" />
                            Call for Plan Recommendations
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Bundle Savings Calculator */}
              <TabsContent value="bundle" className="space-y-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Bundle Savings Calculator</h2>
                  <p className="text-gray-600 mb-8">
                    Enter your current monthly costs and see how much you could save with different bundle options.
                  </p>
                </div>
                
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="tv-cost" className="flex items-center gap-2">
                        <Tv className="h-4 w-4 text-primary" />
                        TV Service Monthly Cost ($)
                      </Label>
                      <Input 
                        id="tv-cost" 
                        type="number" 
                        value={currentTvCost}
                        onChange={(e) => setCurrentTvCost(e.target.value)}
                        placeholder="e.g., 80"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="internet-cost" className="flex items-center gap-2">
                        <Wifi className="h-4 w-4 text-primary" />
                        Internet Service Monthly Cost ($)
                      </Label>
                      <Input 
                        id="internet-cost" 
                        type="number" 
                        value={currentInternetCost}
                        onChange={(e) => setCurrentInternetCost(e.target.value)}
                        placeholder="e.g., 60"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone-cost" className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        Phone Service Monthly Cost ($)
                      </Label>
                      <Input 
                        id="phone-cost" 
                        type="number" 
                        value={currentPhoneCost}
                        onChange={(e) => setCurrentPhoneCost(e.target.value)}
                        placeholder="e.g., 20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="streaming-cost" className="flex items-center gap-2">
                        <VideoIcon className="h-4 w-4 text-primary" />
                        Streaming Services Monthly Cost ($)
                      </Label>
                      <Input 
                        id="streaming-cost" 
                        type="number" 
                        value={currentStreamingCost}
                        onChange={(e) => setCurrentStreamingCost(e.target.value)}
                        placeholder="e.g., 30"
                      />
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t">
                      <Label className="text-sm font-medium">Select Bundle Option</Label>
                      <RadioGroup 
                        value={bundleOption} 
                        onValueChange={setBundleOption}
                        className="space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="double" id="double" />
                          <Label htmlFor="double">Double Play (TV + Internet)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="triple" id="triple" />
                          <Label htmlFor="triple">Triple Play (TV + Internet + Phone)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="quadruple" id="quadruple" />
                          <Label htmlFor="quadruple">All Services Bundle</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold mb-3">Your Potential Savings</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Current Monthly Total:</h4>
                        <div className="text-2xl font-bold">${bundleCalculation.currentTotal.toFixed(2)}</div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Estimated Bundle Price:</h4>
                        <div className="text-2xl font-bold text-primary">${bundleCalculation.bundlePrice.toFixed(2)}</div>
                        <div className="text-sm text-gray-500">{bundleCalculation.bundleName}</div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h4 className="text-sm font-medium text-gray-500">Monthly Savings:</h4>
                        <div className="text-3xl font-bold text-green-600">${bundleCalculation.savings.toFixed(2)}</div>
                        <div className="text-sm text-green-600">Save approximately {bundleCalculation.percentSavings.toFixed(1)}% on your monthly bill</div>
                        
                        <div className="mt-1 text-sm text-gray-500">
                          Annual Savings: ${(bundleCalculation.savings * 12).toFixed(2)}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <p className="text-sm text-gray-500 mb-4">Ready to explore bundle options that could save you money?</p>
                        <Button asChild className="w-full">
                          <a href="tel:8885698194" className="flex items-center justify-center gap-2">
                            <Phone className="h-4 w-4" />
                            Call to Discuss Bundle Options
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Pricing Calculator */}
              <TabsContent value="pricing" className="space-y-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Pricing Calculator</h2>
                  <p className="text-gray-600 mb-8">
                    Compare different internet and TV packages to find the perfect combination for your needs and budget.
                  </p>
                </div>
                
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium block mb-3">Select Provider</Label>
                      <RadioGroup 
                        value={selectedProvider}
                        className="grid grid-cols-3 gap-2"
                        onValueChange={(value) => setSelectedProvider(value)}
                      >
                        <div className="flex items-center space-x-2 bg-blue-50 p-3 rounded-md border border-blue-100">
                          <RadioGroupItem value="optimum" id="optimum" />
                          <Label htmlFor="optimum" className="text-sm">Optimum</Label>
                        </div>
                        <div className="flex items-center space-x-2 bg-red-50 p-3 rounded-md border border-red-100">
                          <RadioGroupItem value="spectrum" id="spectrum" />
                          <Label htmlFor="spectrum" className="text-sm">Spectrum</Label>
                        </div>
                        <div className="flex items-center space-x-2 bg-purple-50 p-3 rounded-md border border-purple-100">
                          <RadioGroupItem value="xfinity" id="xfinity" />
                          <Label htmlFor="xfinity" className="text-sm">Xfinity</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <Label className="text-sm font-medium mb-3 block">Internet Speed</Label>
                      <RadioGroup 
                        value={selectedSpeed}
                        onValueChange={setSelectedSpeed}
                      >
                        <div className="grid grid-cols-1 gap-3">
                          <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md border">
                            <RadioGroupItem value="100mbps" id="100mbps" />
                            <Label htmlFor="100mbps" className="flex flex-col">
                              <span className="font-medium">100 Mbps</span>
                              <span className="text-xs text-gray-500">Good for 1-3 devices</span>
                            </Label>
                            <div className="ml-auto font-medium">${pricingDetails.internetInfo.speedValue === 100 ? pricingDetails.internetInfo.price.toFixed(2) : (selectedProvider === "optimum" ? "39.99" : selectedProvider === "spectrum" ? "49.99" : "44.99")}/mo</div>
                          </div>
                          
                          <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md border">
                            <RadioGroupItem value="300mbps" id="300mbps" />
                            <Label htmlFor="300mbps" className="flex flex-col">
                              <span className="font-medium">300 Mbps</span>
                              <span className="text-xs text-gray-500">Good for 3-5 devices</span>
                            </Label>
                            <div className="ml-auto font-medium">${pricingDetails.internetInfo.speedValue === 300 ? pricingDetails.internetInfo.price.toFixed(2) : (selectedProvider === "optimum" ? "59.99" : selectedProvider === "spectrum" ? "69.99" : "64.99")}/mo</div>
                          </div>
                          
                          <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md border">
                            <RadioGroupItem value="500mbps" id="500mbps" />
                            <Label htmlFor="500mbps" className="flex flex-col">
                              <span className="font-medium">500 Mbps</span>
                              <span className="text-xs text-gray-500">Good for 5-7 devices</span>
                            </Label>
                            <div className="ml-auto font-medium">${pricingDetails.internetInfo.speedValue === 500 ? pricingDetails.internetInfo.price.toFixed(2) : (selectedProvider === "optimum" ? "79.99" : selectedProvider === "spectrum" ? "89.99" : "84.99")}/mo</div>
                          </div>
                          
                          <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md border">
                            <RadioGroupItem value="1gig" id="1gig" />
                            <Label htmlFor="1gig" className="flex flex-col">
                              <span className="font-medium">1 Gig</span>
                              <span className="text-xs text-gray-500">Good for 8+ devices</span>
                            </Label>
                            <div className="ml-auto font-medium">${pricingDetails.internetInfo.speedValue === 1000 ? pricingDetails.internetInfo.price.toFixed(2) : (selectedProvider === "optimum" ? "99.99" : selectedProvider === "spectrum" ? "109.99" : "94.99")}/mo</div>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <Label className="text-sm font-medium mb-3 block">TV Package</Label>
                      <RadioGroup 
                        value={selectedTvPackage}
                        onValueChange={setSelectedTvPackage}
                      >
                        <div className="grid grid-cols-1 gap-3">
                          <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md border">
                            <RadioGroupItem value="none" id="tv_none" />
                            <Label htmlFor="tv_none" className="flex flex-col">
                              <span className="font-medium">No TV</span>
                              <span className="text-xs text-gray-500">Internet only</span>
                            </Label>
                            <div className="ml-auto font-medium">+$0.00/mo</div>
                          </div>
                          
                          <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md border">
                            <RadioGroupItem value="basic" id="tv_basic" />
                            <Label htmlFor="tv_basic" className="flex flex-col">
                              <span className="font-medium">Basic</span>
                              <span className="text-xs text-gray-500">60+ channels</span>
                            </Label>
                            <div className="ml-auto font-medium">+${selectedProvider === "optimum" ? "29.99" : selectedProvider === "spectrum" ? "34.99" : "30.99"}/mo</div>
                          </div>
                          
                          <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md border">
                            <RadioGroupItem value="select" id="tv_select" />
                            <Label htmlFor="tv_select" className="flex flex-col">
                              <span className="font-medium">Select</span>
                              <span className="text-xs text-gray-500">125+ channels</span>
                            </Label>
                            <div className="ml-auto font-medium">+${selectedProvider === "optimum" ? "49.99" : selectedProvider === "spectrum" ? "54.99" : "50.99"}/mo</div>
                          </div>
                          
                          <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md border">
                            <RadioGroupItem value="premier" id="tv_premier" />
                            <Label htmlFor="tv_premier" className="flex flex-col">
                              <span className="font-medium">Premier</span>
                              <span className="text-xs text-gray-500">200+ channels with premium</span>
                            </Label>
                            <div className="ml-auto font-medium">+${selectedProvider === "optimum" ? "79.99" : selectedProvider === "spectrum" ? "84.99" : "80.99"}/mo</div>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <Label className="text-sm font-medium mb-3 block">Equipment & Add-ons</Label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Checkbox 
                            id="modem" 
                            checked={selectedEquipment.modem}
                            onCheckedChange={(checked) => 
                              setSelectedEquipment({...selectedEquipment, modem: !!checked})
                            }
                          />
                          <Label htmlFor="modem" className="ml-2 text-sm">WiFi Router/Modem (+$14/mo)</Label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox 
                            id="dvr" 
                            checked={selectedEquipment.dvr}
                            onCheckedChange={(checked) => 
                              setSelectedEquipment({...selectedEquipment, dvr: !!checked})
                            }
                            disabled={selectedTvPackage === "none"}
                          />
                          <Label htmlFor="dvr" className={`ml-2 text-sm ${selectedTvPackage === "none" ? "text-gray-400" : ""}`}>
                            DVR Service (+$10/mo)
                            {selectedTvPackage === "none" && <span className="text-xs ml-1">(TV package required)</span>}
                          </Label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox 
                            id="extender" 
                            checked={selectedEquipment.extender}
                            onCheckedChange={(checked) => 
                              setSelectedEquipment({...selectedEquipment, extender: !!checked})
                            }
                          />
                          <Label htmlFor="extender" className="ml-2 text-sm">WiFi Extender (+$5/mo)</Label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox 
                            id="multiroom" 
                            checked={selectedEquipment.multiroom}
                            onCheckedChange={(checked) => 
                              setSelectedEquipment({...selectedEquipment, multiroom: !!checked})
                            }
                            disabled={selectedTvPackage === "none"}
                          />
                          <Label htmlFor="multiroom" className={`ml-2 text-sm ${selectedTvPackage === "none" ? "text-gray-400" : ""}`}>
                            Multi-room Setup (+$7/mo per TV)
                            {selectedTvPackage === "none" && <span className="text-xs ml-1">(TV package required)</span>}
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold mb-4">Your Custom Package</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Internet ({pricingDetails.internetInfo.name})</span>
                          <span>${pricingDetails.internetInfo.price.toFixed(2)}/mo</span>
                        </div>
                        <Progress 
                          value={(pricingDetails.internetInfo.speedValue / 1000) * 100} 
                          className="h-2 mb-1" 
                        />
                        <p className="text-xs text-gray-500">
                          {pricingDetails.internetInfo.speedValue < 200 
                            ? "Good for basic web browsing and email" 
                            : pricingDetails.internetInfo.speedValue < 500 
                              ? "Perfect for multiple devices and streaming" 
                              : "Ideal for heavy streaming, gaming, and work from home"}
                        </p>
                        
                        {pricingDetails.tvInfo && (
                          <div className="mt-3 pt-3 border-t">
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">TV ({pricingDetails.tvInfo.name})</span>
                              <span>+${pricingDetails.tvInfo.price.toFixed(2)}/mo</span>
                            </div>
                            <p className="text-xs text-gray-500">
                              {selectedTvPackage === "basic" 
                                ? "60+ popular channels" 
                                : selectedTvPackage === "select" 
                                  ? "125+ channels with sports and entertainment" 
                                  : "200+ channels including premium content"}
                            </p>
                          </div>
                        )}
                      </div>
                      
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Subtotal</span>
                          <span>${pricingDetails.subtotal.toFixed(2)}/mo</span>
                        </div>
                        <div className="flex justify-between mb-1 text-gray-500 text-sm">
                          <span>Equipment</span>
                          <span>+${pricingDetails.equipmentTotal.toFixed(2)}/mo</span>
                        </div>
                        {pricingDetails.bundleDiscount > 0 && (
                          <div className="flex justify-between mb-1 text-green-600 text-sm">
                            <span>Bundle Discount</span>
                            <span>-${pricingDetails.bundleDiscount.toFixed(2)}/mo</span>
                          </div>
                        )}
                        <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
                          <span>Estimated Total</span>
                          <span>${pricingDetails.totalPrice.toFixed(2)}/mo</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Plus taxes and fees. Price for 12 months with 1-year agreement.</div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Included Features:</h4>
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-green-50 text-green-600">✓</Badge>
                            No data caps
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-green-50 text-green-600">✓</Badge>
                            Free installation
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-green-50 text-green-600">✓</Badge>
                            24/7 customer support
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-green-50 text-green-600">✓</Badge>
                            30-day money-back guarantee
                          </li>
                        </ul>
                      </div>
                      
                      <div className="pt-4">
                        <Button asChild className="w-full">
                          <Link to="/sign-up" className="flex items-center justify-center gap-2">
                            Get This Deal Now
                          </Link>
                        </Button>
                        <div className="mt-3 text-center">
                          <a href="tel:8885698194" className="text-primary text-sm inline-flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            Or call (888) 788-6930 for special offers
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Tips Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Tips For Using Our Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-2 text-primary">
                    <Calculator className="h-8 w-8" />
                  </div>
                  <CardTitle>Interactive Pricing Calculator</CardTitle>
                  <CardDescription>Try our newest comparison tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Compare pricing across multiple providers side-by-side</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Customize internet speeds, TV packages, and equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>See how contract terms affect your monthly pricing</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10 pointer-events-none"></div>
                <Link to="/resources/pricing-calculator" className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-primary/80 text-white font-medium transition-opacity duration-300">
                  <span className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Try the Calculator
                  </span>
                </Link>
              </Card>
            
              <Card>
                <CardHeader>
                  <div className="mb-2 text-primary">
                    <Wifi className="h-8 w-8" />
                  </div>
                  <CardTitle>Internet Speed Calculator</CardTitle>
                  <CardDescription>How to get accurate recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Count all regularly used devices, including IoT devices like smart TVs and security cameras</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Consider peak usage times when everyone in your household is online simultaneously</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>For work from home, factor in video conferencing and large file transfers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="mb-2 text-primary">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <CardTitle>Bundle Savings Calculator</CardTitle>
                  <CardDescription>Finding the best deals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Include all costs including equipment rentals and fees in your current costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Consider promotional vs. standard rates when comparing bundle options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Ask about contract terms when contacting providers about bundles</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="mb-2 text-primary">
                    <PieChart className="h-8 w-8" />
                  </div>
                  <CardTitle>Getting Personalized Help</CardTitle>
                  <CardDescription>Beyond the calculators</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Our experts can provide personalized recommendations based on your actual usage patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>We can identify promotional offers not reflected in standard bundle pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Call us for help with specific needs like home office setups or gaming optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Expert Assistance CTA */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help With Your Results?</h2>
              <p className="text-gray-600 mb-8">
                Our experts can explain what these calculations mean for your specific situation and recommend the best providers and plans.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-secondary">
                <a href="tel:8885698194" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Us: 888-569-8194
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ToolsCalculatorsPage;