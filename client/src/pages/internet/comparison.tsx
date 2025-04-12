import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";
import {
  Wifi,
  WifiOff,
  Zap,
  Download,
  Upload,
  Globe,
  Home,
  Cloud,
  Server,
  Check,
  X,
  AlertTriangle,
  Radio,
  Satellite,
  Router,
  Monitor,
  MapPin,
  Smartphone,
  Laptop,
  Tv,
  ShieldCheck,
  Building,
  BarChart2,
  Phone
} from "lucide-react";

interface SpeedRating {
  type: string;
  download: number;
  upload: number;
  latency: number;
  reliability: number;
  value: number;
  coverage: number;
  deviceSupport: number;
}

interface ComparisonData {
  fiber: SpeedRating;
  cable: SpeedRating;
  dsl: SpeedRating;
  satellite: SpeedRating;
}

const InternetComparisonPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("fiber");
  const [animateChart, setAnimateChart] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [prevInternetType, setPrevInternetType] = useState<string | null>(null);

  // Data for the speed comparison chart
  const speedData = [
    {
      name: "Fiber",
      downloadSpeed: 940,
      uploadSpeed: 880,
      "Download Speed": 940,
      "Upload Speed": 880,
      fill: "#4f46e5"
    },
    {
      name: "Cable",
      downloadSpeed: 500,
      uploadSpeed: 50,
      "Download Speed": 500,
      "Upload Speed": 50,
      fill: "#2563eb"
    },
    {
      name: "DSL",
      downloadSpeed: 100,
      uploadSpeed: 20,
      "Download Speed": 100,
      "Upload Speed": 20,
      fill: "#0ea5e9"
    },
    {
      name: "Satellite",
      downloadSpeed: 150,
      uploadSpeed: 10,
      "Download Speed": 150,
      "Upload Speed": 10,
      fill: "#6366f1"
    }
  ];

  // Data for the latency comparison chart
  const latencyData = [
    {
      name: "Fiber",
      value: 20,
      color: "#4f46e5"
    },
    {
      name: "Cable",
      value: 50,
      color: "#2563eb"
    },
    {
      name: "DSL",
      value: 100,
      color: "#0ea5e9"
    },
    {
      name: "Satellite",
      value: 600,
      color: "#6366f1"
    }
  ];

  // Data for the radar chart comparing all features
  const radarData = [
    {
      subject: "Speed",
      fiber: 95,
      cable: 75,
      dsl: 40,
      satellite: 50,
      fullMark: 100
    },
    {
      subject: "Reliability",
      fiber: 98,
      cable: 85,
      dsl: 80,
      satellite: 65,
      fullMark: 100
    },
    {
      subject: "Latency",
      fiber: 90,
      cable: 75,
      dsl: 65,
      satellite: 30,
      fullMark: 100
    },
    {
      subject: "Coverage",
      fiber: 50,
      cable: 75,
      dsl: 85,
      satellite: 95,
      fullMark: 100
    },
    {
      subject: "Value",
      fiber: 70,
      cable: 85,
      dsl: 90,
      satellite: 65,
      fullMark: 100
    },
    {
      subject: "Consistency",
      fiber: 95,
      cable: 80,
      dsl: 70,
      satellite: 60,
      fullMark: 100
    }
  ];

  // Data for the cost comparison
  const costData = [
    {
      name: "Fiber",
      "Monthly Cost": 80,
      color: "#4f46e5"
    },
    {
      name: "Cable",
      "Monthly Cost": 65,
      color: "#2563eb"
    },
    {
      name: "DSL",
      "Monthly Cost": 45,
      color: "#0ea5e9"
    },
    {
      name: "Satellite",
      "Monthly Cost": 110,
      color: "#6366f1"
    }
  ];

  // Data for availability chart
  const availabilityData = [
    {
      name: "Fiber",
      value: 32,
      color: "#4f46e5"
    },
    {
      name: "Cable",
      value: 89,
      color: "#2563eb"
    },
    {
      name: "DSL",
      value: 92,
      color: "#0ea5e9"
    },
    {
      name: "Satellite",
      value: 99,
      color: "#6366f1"
    }
  ];

  // Detailed information for each internet type
  const internetTypeData: ComparisonData = {
    fiber: {
      type: "Fiber",
      download: 940,
      upload: 880,
      latency: 20,
      reliability: 99.9,
      value: 4.5,
      coverage: 32,
      deviceSupport: 100
    },
    cable: {
      type: "Cable",
      download: 500,
      upload: 50,
      latency: 50,
      reliability: 98.5,
      value: 4.8,
      coverage: 89,
      deviceSupport: 100
    },
    dsl: {
      type: "DSL",
      download: 100,
      upload: 20,
      latency: 100,
      reliability: 97.5,
      value: 4.9,
      coverage: 92,
      deviceSupport: 100
    },
    satellite: {
      type: "Satellite",
      download: 150,
      upload: 10,
      latency: 600,
      reliability: 96,
      value: 3.9,
      coverage: 99,
      deviceSupport: 100
    }
  };

  // Use cases scenarios for each connection type
  const useCaseData = {
    fiber: [
      { use: "4K Streaming", suitable: true, icon: <Tv className="h-5 w-5" /> },
      { use: "8K Streaming", suitable: true, icon: <Tv className="h-5 w-5" /> },
      { use: "Large File Downloads", suitable: true, icon: <Download className="h-5 w-5" /> },
      { use: "Multiple HD Streams", suitable: true, icon: <Tv className="h-5 w-5" /> },
      { use: "Online Gaming", suitable: true, icon: <Laptop className="h-5 w-5" /> },
      { use: "Video Conferencing", suitable: true, icon: <Monitor className="h-5 w-5" /> },
      { use: "Cloud Backup", suitable: true, icon: <Cloud className="h-5 w-5" /> },
      { use: "Smart Home Devices", suitable: true, icon: <Home className="h-5 w-5" /> },
      { use: "Remote Work", suitable: true, icon: <Laptop className="h-5 w-5" /> }
    ],
    cable: [
      { use: "4K Streaming", suitable: true, icon: <Tv className="h-5 w-5" /> },
      { use: "8K Streaming", suitable: false, icon: <Tv className="h-5 w-5" /> },
      { use: "Large File Downloads", suitable: true, icon: <Download className="h-5 w-5" /> },
      { use: "Multiple HD Streams", suitable: true, icon: <Tv className="h-5 w-5" /> },
      { use: "Online Gaming", suitable: true, icon: <Laptop className="h-5 w-5" /> },
      { use: "Video Conferencing", suitable: true, icon: <Monitor className="h-5 w-5" /> },
      { use: "Cloud Backup", suitable: true, icon: <Cloud className="h-5 w-5" /> },
      { use: "Smart Home Devices", suitable: true, icon: <Home className="h-5 w-5" /> },
      { use: "Remote Work", suitable: true, icon: <Laptop className="h-5 w-5" /> }
    ],
    dsl: [
      { use: "4K Streaming", suitable: false, icon: <Tv className="h-5 w-5" /> },
      { use: "8K Streaming", suitable: false, icon: <Tv className="h-5 w-5" /> },
      { use: "Large File Downloads", suitable: false, icon: <Download className="h-5 w-5" /> },
      { use: "Multiple HD Streams", suitable: false, icon: <Tv className="h-5 w-5" /> },
      { use: "Online Gaming", suitable: true, icon: <Laptop className="h-5 w-5" /> },
      { use: "Video Conferencing", suitable: true, icon: <Monitor className="h-5 w-5" /> },
      { use: "Cloud Backup", suitable: false, icon: <Cloud className="h-5 w-5" /> },
      { use: "Smart Home Devices", suitable: true, icon: <Home className="h-5 w-5" /> },
      { use: "Remote Work", suitable: true, icon: <Laptop className="h-5 w-5" /> }
    ],
    satellite: [
      { use: "4K Streaming", suitable: false, icon: <Tv className="h-5 w-5" /> },
      { use: "8K Streaming", suitable: false, icon: <Tv className="h-5 w-5" /> },
      { use: "Large File Downloads", suitable: false, icon: <Download className="h-5 w-5" /> },
      { use: "Multiple HD Streams", suitable: false, icon: <Tv className="h-5 w-5" /> },
      { use: "Online Gaming", suitable: false, icon: <Laptop className="h-5 w-5" /> },
      { use: "Video Conferencing", suitable: true, icon: <Monitor className="h-5 w-5" /> },
      { use: "Cloud Backup", suitable: false, icon: <Cloud className="h-5 w-5" /> },
      { use: "Smart Home Devices", suitable: true, icon: <Home className="h-5 w-5" /> },
      { use: "Remote Work", suitable: true, icon: <Laptop className="h-5 w-5" /> }
    ]
  };

  // Technology illustration components
  const FiberIllustration = () => (
    <div className="flex items-center justify-center py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-full max-w-lg h-20 flex items-center justify-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 }}
            className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full absolute z-10"
          ></motion.div>
          <div className="h-6 w-full bg-blue-100 rounded-full"></div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex flex-col items-center">
            <Building className="h-8 w-8 text-gray-600" />
            <span className="text-xs mt-1">Internet Provider</span>
          </div>
          <div className="flex flex-col items-center">
            <Home className="h-8 w-8 text-gray-600" />
            <span className="text-xs mt-1">Your Home</span>
          </div>
        </div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 200, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
          className="absolute top-6"
        >
          <Zap className="h-6 w-6 text-yellow-500" />
        </motion.div>
      </motion.div>
    </div>
  );

  const CableIllustration = () => (
    <div className="flex items-center justify-center py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-full max-w-lg h-20 flex items-center justify-center">
          <div className="h-6 w-full bg-blue-100 rounded-full relative overflow-hidden">
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 400 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
              className="h-4 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full absolute top-1"
            ></motion.div>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex flex-col items-center">
            <Server className="h-8 w-8 text-gray-600" />
            <span className="text-xs mt-1">Cable Headend</span>
          </div>
          <div className="flex flex-col items-center">
            <Router className="h-8 w-8 text-gray-600" />
            <span className="text-xs mt-1">Your Modem</span>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const DslIllustration = () => (
    <div className="flex items-center justify-center py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-full max-w-lg h-20 flex items-center justify-center">
          <div className="h-4 w-full bg-gray-300 rounded-full relative overflow-hidden">
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 400 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
              className="h-2 w-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full absolute top-1"
            ></motion.div>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex flex-col items-center">
            <MapPin className="h-8 w-8 text-gray-600" />
            <span className="text-xs mt-1">Phone Exchange</span>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="h-8 w-8 text-gray-600" />
            <span className="text-xs mt-1">Phone Line</span>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const SatelliteIllustration = () => (
    <div className="flex items-center justify-center py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-40"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
          className="absolute left-1/2 -ml-8 -top-4"
        >
          <Satellite className="h-16 w-16 text-gray-600" />
        </motion.div>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 60, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 }}
          className="absolute left-1/2 top-16 w-1 bg-gradient-to-b from-indigo-500 to-transparent"
          style={{ transformOrigin: 'top' }}
        ></motion.div>
        
        <div className="absolute bottom-0 left-1/2 -ml-4">
          <div className="flex flex-col items-center">
            <Radio className="h-8 w-8 text-gray-600" />
            <span className="text-xs mt-1">Satellite Dish</span>
          </div>
        </div>
      </motion.div>
    </div>
  );

  // Animation effect when changing tabs
  useEffect(() => {
    setPrevInternetType(activeTab);
    setAnimateChart(true);
    const timer = setTimeout(() => {
      setAnimateChart(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Animated download speed counter
  useEffect(() => {
    const targetSpeed = internetTypeData[activeTab as keyof ComparisonData].download;
    let startSpeed = 0;
    
    if (prevInternetType) {
      startSpeed = internetTypeData[prevInternetType as keyof ComparisonData].download;
    }
    
    const step = (targetSpeed - startSpeed) / 30;
    let currentSpeedVal = startSpeed;
    
    const interval = setInterval(() => {
      if (currentSpeedVal < targetSpeed) {
        currentSpeedVal += step;
        setCurrentSpeed(Math.min(currentSpeedVal, targetSpeed));
      } else {
        clearInterval(interval);
      }
    }, 20);
    
    return () => clearInterval(interval);
  }, [activeTab, prevInternetType]);

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2 px-3 py-1 bg-indigo-50 text-indigo-700 border-indigo-200">
            COMPARISON GUIDE
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            Internet Connection Types Compared
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore different internet technologies and find out which one best suits your needs with our comprehensive comparison guide.
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="fiber" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="fiber" className="text-sm md:text-base">
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                <Zap className="h-4 w-4 mb-1 md:mb-0" />
                <span>Fiber Internet</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="cable" className="text-sm md:text-base">
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                <Tv className="h-4 w-4 mb-1 md:mb-0" />
                <span>Cable Internet</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="dsl" className="text-sm md:text-base">
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                <Phone className="h-4 w-4 mb-1 md:mb-0" />
                <span>DSL Internet</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="satellite" className="text-sm md:text-base">
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                <Satellite className="h-4 w-4 mb-1 md:mb-0" />
                <span>Satellite Internet</span>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Fiber Internet Content */}
          <TabsContent value="fiber" className="space-y-8">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-6 w-6" />
                  Fiber Optic Internet
                </CardTitle>
                <CardDescription className="text-indigo-100">
                  The fastest and most reliable internet technology using light signals through glass fibers
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">How Fiber Internet Works</h3>
                    <p className="text-gray-600 mb-4">
                      Fiber-optic internet transmits data as pulses of light through strands of fiber made of glass or plastic. This technology allows for significantly faster speeds and higher bandwidth compared to traditional copper-based connections.
                    </p>
                    <h4 className="font-semibold mt-6 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Symmetrical upload and download speeds (nearly equal)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Extremely low latency (as low as 10-20ms)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Not affected by electromagnetic interference</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Less susceptible to weather-related outages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Limited availability (mainly in urban areas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Generally more expensive than DSL or cable</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Visual Representation</h3>
                    <FiberIllustration />
                    
                    <div className="bg-indigo-50 rounded-xl p-4 mt-6">
                      <h4 className="font-semibold mb-2 text-indigo-900">Speed Demonstration</h4>
                      <div className="mb-2">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-indigo-800">Download Speed</span>
                          <span className="text-sm font-medium text-indigo-800">{Math.round(currentSpeed)} Mbps</span>
                        </div>
                        <div className="h-2.5 bg-indigo-200 rounded-full w-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                            style={{ width: `${(currentSpeed / 1000) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-xs text-indigo-700 mt-2">
                        A 4K movie (100GB) would download in approximately {Math.round(100 * 8 * 1000 / internetTypeData[activeTab as keyof ComparisonData].download / 60)} minutes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Ideal Uses for Fiber Internet</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {useCaseData.fiber.map((useCase, index) => (
                      <div 
                        key={index} 
                        className={`rounded-lg p-4 flex flex-col items-center text-center ${useCase.suitable ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}
                      >
                        <div className={`mb-2 ${useCase.suitable ? 'text-green-600' : 'text-red-500'}`}>
                          {useCase.icon}
                        </div>
                        <span className="text-sm font-medium">{useCase.use}</span>
                        <span className={`text-xs mt-1 ${useCase.suitable ? 'text-green-600' : 'text-red-500'}`}>
                          {useCase.suitable ? 'Excellent' : 'Not Recommended'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Major Providers</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/att.com" alt="AT&T" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/att-logo.svg" }} />
                      <span className="font-medium">AT&T Fiber</span>
                    </div>
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/verizon.com" alt="Verizon" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/verizon-logo.svg" }} />
                      <span className="font-medium">Verizon Fios</span>
                    </div>
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/googlefiber.net" alt="Google Fiber" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/google-fiber-logo.svg" }} />
                      <span className="font-medium">Google Fiber</span>
                    </div>
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/frontier.com" alt="Frontier" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/frontier-logo.svg" }} />
                      <span className="font-medium">Frontier Fiber</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison with Previous Internet Type */}
            <Card>
              <CardHeader>
                <CardTitle>Fiber vs. Other Internet Types</CardTitle>
                <CardDescription>See how fiber compares to other internet technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Speed Comparison</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={speedData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis label={{ value: 'Speed (Mbps)', angle: -90, position: 'insideLeft' }} />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="downloadSpeed" name="Download Speed" fill="#4f46e5" />
                          <Bar dataKey="uploadSpeed" name="Upload Speed" fill="#818cf8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Latency Comparison</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={latencyData}
                            layout="vertical"
                            margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" label={{ value: 'Latency (ms)', position: 'insideBottom', offset: -5 }} />
                            <YAxis type="category" dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="value" name="Latency (ms)">
                              {latencyData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Lower latency means better responsiveness.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Coverage Across US</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={availabilityData}
                            layout="vertical"
                            margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" label={{ value: 'Coverage (%)', position: 'insideBottom', offset: -5 }} />
                            <YAxis type="category" dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="value" name="US Household Coverage (%)">
                              {availabilityData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Percentage of US households with access to each type.</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Comprehensive Comparison</h3>
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="subject" />
                          <PolarRadiusAxis angle={30} domain={[0, 100]} />
                          <Radar name="Fiber" dataKey="fiber" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.6} />
                          <Radar name="Cable" dataKey="cable" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
                          <Radar name="DSL" dataKey="dsl" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.6} />
                          <Radar name="Satellite" dataKey="satellite" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
                          <Legend />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cable Internet Content */}
          <TabsContent value="cable" className="space-y-8">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Tv className="h-6 w-6" />
                  Cable Internet
                </CardTitle>
                <CardDescription className="text-blue-100">
                  High-speed internet delivered through the same coaxial cable lines that deliver cable television
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">How Cable Internet Works</h3>
                    <p className="text-gray-600 mb-4">
                      Cable internet uses the same coaxial cables that deliver television service to transmit data. These cables are made of copper and can carry large amounts of data quickly, though not as fast as fiber optic cables.
                    </p>
                    <h4 className="font-semibold mt-6 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Fast download speeds (up to 1 Gbps in some areas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Widely available in urban and suburban areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Relatively good reliability and uptime</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Asymmetrical speeds (upload much slower than download)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Shared bandwidth (speeds may slow during peak usage times)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>Moderate latency (typically 15-60ms)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Visual Representation</h3>
                    <CableIllustration />
                    
                    <div className="bg-blue-50 rounded-xl p-4 mt-6">
                      <h4 className="font-semibold mb-2 text-blue-900">Speed Demonstration</h4>
                      <div className="mb-2">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blue-800">Download Speed</span>
                          <span className="text-sm font-medium text-blue-800">{Math.round(currentSpeed)} Mbps</span>
                        </div>
                        <div className="h-2.5 bg-blue-200 rounded-full w-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                            style={{ width: `${(currentSpeed / 1000) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-xs text-blue-700 mt-2">
                        A 4K movie (100GB) would download in approximately {Math.round(100 * 8 * 1000 / internetTypeData[activeTab as keyof ComparisonData].download / 60)} minutes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Ideal Uses for Cable Internet</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {useCaseData.cable.map((useCase, index) => (
                      <div 
                        key={index} 
                        className={`rounded-lg p-4 flex flex-col items-center text-center ${useCase.suitable ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}
                      >
                        <div className={`mb-2 ${useCase.suitable ? 'text-green-600' : 'text-red-500'}`}>
                          {useCase.icon}
                        </div>
                        <span className="text-sm font-medium">{useCase.use}</span>
                        <span className={`text-xs mt-1 ${useCase.suitable ? 'text-green-600' : 'text-red-500'}`}>
                          {useCase.suitable ? 'Good' : 'Not Recommended'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Major Providers</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/xfinity.com" alt="Xfinity" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/xfinity-logo.svg" }} />
                      <span className="font-medium">Xfinity</span>
                    </div>
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/spectrum.com" alt="Spectrum" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/spectrum-logo.svg" }} />
                      <span className="font-medium">Spectrum</span>
                    </div>
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/cox.com" alt="Cox" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/cox-logo.svg" }} />
                      <span className="font-medium">Cox</span>
                    </div>
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/optimum.com" alt="Optimum" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/optimum-logo.svg" }} />
                      <span className="font-medium">Optimum</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison with Fiber Internet */}
            <Card>
              <CardHeader>
                <CardTitle>Cable vs. Fiber Internet</CardTitle>
                <CardDescription>How cable internet compares to fiber optic technology</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Speed Comparison</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Download Speed</span>
                          </div>
                          <div className="relative h-8">
                            <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
                            <div className="absolute h-full bg-blue-600 rounded-full" style={{ width: "53%" }}></div>
                            <div className="absolute inset-0 flex items-center justify-between px-4">
                              <span className="text-xs font-medium text-white">Cable: 500 Mbps</span>
                              <span className="text-xs font-medium text-gray-700">Fiber: 940 Mbps</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Upload Speed</span>
                          </div>
                          <div className="relative h-8">
                            <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
                            <div className="absolute h-full bg-blue-600 rounded-full" style={{ width: "6%" }}></div>
                            <div className="absolute inset-0 flex items-center justify-between px-4">
                              <span className="text-xs font-medium text-white">Cable: 50 Mbps</span>
                              <span className="text-xs font-medium text-gray-700">Fiber: 880 Mbps</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Latency</span>
                          </div>
                          <div className="relative h-8">
                            <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
                            <div className="absolute h-full bg-blue-600 rounded-full" style={{ width: "40%" }}></div>
                            <div className="absolute inset-0 flex items-center justify-between px-4">
                              <span className="text-xs font-medium text-white">Cable: 50ms</span>
                              <span className="text-xs font-medium text-gray-700">Fiber: 20ms</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Key Differences</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
                          <div className="mt-1 text-blue-600">
                            <Building className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-900">Availability</h4>
                            <p className="text-sm text-blue-700">Cable internet is more widely available than fiber, covering approximately 89% of US households compared to fiber's 32%.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
                          <div className="mt-1 text-blue-600">
                            <BarChart2 className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-900">Bandwidth Sharing</h4>
                            <p className="text-sm text-blue-700">Cable uses shared neighborhood bandwidth that can slow during peak times, while fiber maintains consistent speeds.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
                          <div className="mt-1 text-blue-600">
                            <Upload className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-900">Upload Performance</h4>
                            <p className="text-sm text-blue-700">Cable offers asymmetrical speeds with much slower uploads, while fiber provides symmetrical upload and download speeds.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Monthly Cost Comparison</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={costData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis label={{ value: 'Cost ($)', angle: -90, position: 'insideLeft' }} />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="Monthly Cost" name="Average Monthly Cost ($)">
                            {costData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Average monthly costs for comparable speed tiers across different internet types.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* DSL Internet Content */}
          <TabsContent value="dsl" className="space-y-8">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-6 w-6" />
                  DSL Internet
                </CardTitle>
                <CardDescription className="text-cyan-100">
                  Internet connection that works through existing telephone lines using dedicated frequencies
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">How DSL Internet Works</h3>
                    <p className="text-gray-600 mb-4">
                      Digital Subscriber Line (DSL) technology delivers internet service through standard telephone lines but uses frequencies that don't interfere with voice services. This allows you to use the phone and internet simultaneously.
                    </p>
                    <h4 className="font-semibold mt-6 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Widely available, especially in rural areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Dedicated line (not shared with neighbors)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>More affordable than fiber or cable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Significantly slower speeds (typically 5-100 Mbps)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Speed decreases with distance from the provider's facility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Higher latency than fiber or cable (typically 75-100ms)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Visual Representation</h3>
                    <DslIllustration />
                    
                    <div className="bg-cyan-50 rounded-xl p-4 mt-6">
                      <h4 className="font-semibold mb-2 text-cyan-900">Speed Demonstration</h4>
                      <div className="mb-2">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-cyan-800">Download Speed</span>
                          <span className="text-sm font-medium text-cyan-800">{Math.round(currentSpeed)} Mbps</span>
                        </div>
                        <div className="h-2.5 bg-cyan-200 rounded-full w-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"
                            style={{ width: `${(currentSpeed / 1000) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-xs text-cyan-700 mt-2">
                        A 4K movie (100GB) would download in approximately {Math.round(100 * 8 * 1000 / internetTypeData[activeTab as keyof ComparisonData].download / 60)} minutes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Ideal Uses for DSL Internet</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {useCaseData.dsl.map((useCase, index) => (
                      <div 
                        key={index} 
                        className={`rounded-lg p-4 flex flex-col items-center text-center ${useCase.suitable ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}
                      >
                        <div className={`mb-2 ${useCase.suitable ? 'text-green-600' : 'text-red-500'}`}>
                          {useCase.icon}
                        </div>
                        <span className="text-sm font-medium">{useCase.use}</span>
                        <span className={`text-xs mt-1 ${useCase.suitable ? 'text-green-600' : 'text-red-500'}`}>
                          {useCase.suitable ? 'Suitable' : 'Not Recommended'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Major Providers</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/att.com" alt="AT&T" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/att-logo.svg" }} />
                      <span className="font-medium">AT&T DSL</span>
                    </div>
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/centurylink.com" alt="CenturyLink" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/centurylink-logo.svg" }} />
                      <span className="font-medium">CenturyLink</span>
                    </div>
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/earthlink.net" alt="EarthLink" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/earthlink-logo.svg" }} />
                      <span className="font-medium">EarthLink</span>
                    </div>
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/windstream.com" alt="Windstream" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/windstream-logo.svg" }} />
                      <span className="font-medium">Windstream</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison with Cable Internet */}
            <Card>
              <CardHeader>
                <CardTitle>DSL vs. Cable Internet</CardTitle>
                <CardDescription>How DSL internet compares to cable technology</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Speed & Performance Comparison</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Download Speed</span>
                          </div>
                          <div className="relative h-8">
                            <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
                            <div className="absolute h-full bg-cyan-600 rounded-full" style={{ width: "20%" }}></div>
                            <div className="absolute inset-0 flex items-center justify-between px-4">
                              <span className="text-xs font-medium text-white">DSL: 100 Mbps</span>
                              <span className="text-xs font-medium text-gray-700">Cable: 500 Mbps</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Upload Speed</span>
                          </div>
                          <div className="relative h-8">
                            <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
                            <div className="absolute h-full bg-cyan-600 rounded-full" style={{ width: "40%" }}></div>
                            <div className="absolute inset-0 flex items-center justify-between px-4">
                              <span className="text-xs font-medium text-white">DSL: 20 Mbps</span>
                              <span className="text-xs font-medium text-gray-700">Cable: 50 Mbps</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Consistency</span>
                          </div>
                          <div className="relative h-8">
                            <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
                            <div className="absolute h-full bg-cyan-600 rounded-full" style={{ width: "90%" }}></div>
                            <div className="absolute inset-0 flex items-center justify-between px-4">
                              <span className="text-xs font-medium text-white">DSL: Dedicated Line</span>
                              <span className="text-xs font-medium text-gray-700">Cable: Shared Bandwidth</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Key Advantages of DSL</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-cyan-50">
                          <div className="mt-1 text-cyan-600">
                            <Check className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-cyan-900">Price</h4>
                            <p className="text-sm text-cyan-700">DSL is typically $15-20 less expensive per month than comparable cable internet plans.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-cyan-50">
                          <div className="mt-1 text-cyan-600">
                            <Check className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-cyan-900">Dedicated Line</h4>
                            <p className="text-sm text-cyan-700">Unlike cable, DSL provides a dedicated connection not shared with neighbors, resulting in more consistent performance during peak hours.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-cyan-50">
                          <div className="mt-1 text-cyan-600">
                            <Check className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-cyan-900">Availability</h4>
                            <p className="text-sm text-cyan-700">DSL has slightly better coverage than cable (92% vs 89% of US households), especially in semi-rural areas.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">When to Choose DSL Over Cable</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4">
                        <h4 className="font-semibold text-cyan-900 mb-2">Budget-Conscious Users</h4>
                        <p className="text-sm text-cyan-700">If you're primarily browsing the web, checking email, and occasionally streaming videos, DSL offers sufficient speed at a lower cost than cable.</p>
                      </div>
                      
                      <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4">
                        <h4 className="font-semibold text-cyan-900 mb-2">Single-User Households</h4>
                        <p className="text-sm text-cyan-700">For households with 1-2 people where multiple devices aren't streaming simultaneously, DSL provides adequate performance.</p>
                      </div>
                      
                      <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4">
                        <h4 className="font-semibold text-cyan-900 mb-2">Consistent Speed Needs</h4>
                        <p className="text-sm text-cyan-700">If you prefer a more consistent connection that doesn't fluctuate during peak hours, DSL's dedicated line may be preferable.</p>
                      </div>
                      
                      <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4">
                        <h4 className="font-semibold text-cyan-900 mb-2">Rural Locations</h4>
                        <p className="text-sm text-cyan-700">In areas where cable infrastructure is limited or non-existent, DSL may be the best high-speed option available.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Satellite Internet Content */}
          <TabsContent value="satellite" className="space-y-8">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Satellite className="h-6 w-6" />
                  Satellite Internet
                </CardTitle>
                <CardDescription className="text-indigo-100">
                  Internet connection that uses satellites orbiting the Earth to provide service to remote areas
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">How Satellite Internet Works</h3>
                    <p className="text-gray-600 mb-4">
                      Satellite internet connects you by sending and receiving signals to a satellite in orbit. Your home satellite dish communicates with satellites positioned thousands of miles above Earth, which then communicate with ground stations connected to the internet.
                    </p>
                    <h4 className="font-semibold mt-6 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Available virtually anywhere with a clear view of the sky</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>No need for ground infrastructure like cables or phone lines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Speeds have improved significantly with new LEO satellites</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>High latency (500-600ms traditional, 20-40ms with new LEO)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>More expensive than wired options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Weather-sensitive (rain, snow, heavy cloud cover)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Visual Representation</h3>
                    <SatelliteIllustration />
                    
                    <div className="bg-indigo-50 rounded-xl p-4 mt-6">
                      <h4 className="font-semibold mb-2 text-indigo-900">Speed Demonstration</h4>
                      <div className="mb-2">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-indigo-800">Download Speed</span>
                          <span className="text-sm font-medium text-indigo-800">{Math.round(currentSpeed)} Mbps</span>
                        </div>
                        <div className="h-2.5 bg-indigo-200 rounded-full w-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                            style={{ width: `${(currentSpeed / 1000) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-xs text-indigo-700 mt-2">
                        A 4K movie (100GB) would download in approximately {Math.round(100 * 8 * 1000 / internetTypeData[activeTab as keyof ComparisonData].download / 60)} minutes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Ideal Uses for Satellite Internet</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {useCaseData.satellite.map((useCase, index) => (
                      <div 
                        key={index} 
                        className={`rounded-lg p-4 flex flex-col items-center text-center ${useCase.suitable ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}
                      >
                        <div className={`mb-2 ${useCase.suitable ? 'text-green-600' : 'text-red-500'}`}>
                          {useCase.icon}
                        </div>
                        <span className="text-sm font-medium">{useCase.use}</span>
                        <span className={`text-xs mt-1 ${useCase.suitable ? 'text-green-600' : 'text-red-500'}`}>
                          {useCase.suitable ? 'Acceptable' : 'Not Recommended'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Major Providers</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/viasat.com" alt="Viasat" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/viasat-logo.svg" }} />
                      <span className="font-medium">Viasat</span>
                    </div>
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/hughesnet.com" alt="HughesNet" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/hughesnet-logo.svg" }} />
                      <span className="font-medium">HughesNet</span>
                    </div>
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/starlink.com" alt="Starlink" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/starlink-logo.svg" }} />
                      <span className="font-medium">Starlink</span>
                    </div>
                    <div className="rounded-lg border p-4 flex flex-col items-center text-center">
                      <img src="https://logo.clearbit.com/oneweb.net" alt="OneWeb" className="h-10 w-10 mb-2" onError={(e) => { e.currentTarget.src = "/logos/oneweb-logo.svg" }} />
                      <span className="font-medium">OneWeb</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison with DSL Internet */}
            <Card>
              <CardHeader>
                <CardTitle>Satellite vs. DSL Internet</CardTitle>
                <CardDescription>How satellite internet compares to DSL technology</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Performance Comparison</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Download Speed</span>
                          </div>
                          <div className="relative h-8">
                            <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
                            <div className="absolute h-full bg-indigo-600 rounded-full" style={{ width: "150%" }}></div>
                            <div className="absolute inset-0 flex items-center justify-between px-4">
                              <span className="text-xs font-medium text-white">Satellite: 150 Mbps</span>
                              <span className="text-xs font-medium text-white">DSL: 100 Mbps</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Latency</span>
                          </div>
                          <div className="relative h-8">
                            <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
                            <div className="absolute h-full bg-indigo-600 rounded-full" style={{ width: "17%" }}></div>
                            <div className="absolute inset-0 flex items-center justify-between px-4">
                              <span className="text-xs font-medium text-white">Satellite: 600ms</span>
                              <span className="text-xs font-medium text-gray-700">DSL: 100ms</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Lower latency is better. Satellite has significantly higher latency.</p>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Reliability</span>
                          </div>
                          <div className="relative h-8">
                            <div className="absolute w-full h-full bg-gray-200 rounded-full"></div>
                            <div className="absolute h-full bg-indigo-600 rounded-full" style={{ width: "98%" }}></div>
                            <div className="absolute inset-0 flex items-center justify-between px-4">
                              <span className="text-xs font-medium text-white">Satellite: 96%</span>
                              <span className="text-xs font-medium text-white">DSL: 97.5%</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Satellite can be affected by weather conditions.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">When to Choose Satellite Over DSL</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50">
                          <div className="mt-1 text-indigo-600">
                            <MapPin className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-indigo-900">Location</h4>
                            <p className="text-sm text-indigo-700">If you live in a remote or rural area where DSL isn't available, satellite may be your only high-speed option.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50">
                          <div className="mt-1 text-indigo-600">
                            <Download className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-indigo-900">Higher Speed Needs</h4>
                            <p className="text-sm text-indigo-700">New satellite systems like Starlink can offer faster speeds than the DSL available in some areas.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50">
                          <div className="mt-1 text-indigo-600">
                            <Globe className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-indigo-900">Off-Grid Living</h4>
                            <p className="text-sm text-indigo-700">For homes without wired infrastructure or those in extremely remote locations, satellite is often the only option.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3">Cost Comparison</h3>
                        <div className="p-4 bg-indigo-50 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium text-indigo-900">Average Monthly Cost</span>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>DSL Internet</span>
                                <span className="font-medium">$45/month</span>
                              </div>
                              <div className="w-full bg-indigo-200 h-2 rounded-full mt-1">
                                <div className="bg-cyan-600 h-2 rounded-full" style={{ width: "41%" }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>Satellite Internet</span>
                                <span className="font-medium">$110/month</span>
                              </div>
                              <div className="w-full bg-indigo-200 h-2 rounded-full mt-1">
                                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                              </div>
                            </div>
                          </div>
                          <p className="text-xs text-indigo-700 mt-3">Satellite internet typically has higher monthly costs and may include equipment costs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Final Comparison Section */}
        <div className="mt-12 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ultimate Internet Connection Comparison</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See at a glance how each internet technology compares across key performance metrics.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="text-left border-b border-indigo-200">
                  <th className="pb-3 pl-2 pr-4 font-semibold text-indigo-900">Internet Type</th>
                  <th className="pb-3 px-4 font-semibold text-indigo-900">Download Speed</th>
                  <th className="pb-3 px-4 font-semibold text-indigo-900">Upload Speed</th>
                  <th className="pb-3 px-4 font-semibold text-indigo-900">Latency</th>
                  <th className="pb-3 px-4 font-semibold text-indigo-900">Reliability</th>
                  <th className="pb-3 px-4 font-semibold text-indigo-900">US Coverage</th>
                  <th className="pb-3 px-4 font-semibold text-indigo-900">Avg. Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-indigo-100">
                  <td className="py-4 pl-2 pr-4">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-indigo-600" />
                      <span className="font-medium">Fiber</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
                    <div className="text-sm mt-1">Up to 5 Gbps</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
                    <div className="text-sm mt-1">Up to 5 Gbps</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
                    <div className="text-sm mt-1">10-20ms</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
                    <div className="text-sm mt-1">99.9%</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Limited</Badge>
                    <div className="text-sm mt-1">32%</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Moderate</Badge>
                    <div className="text-sm mt-1">$60-100</div>
                  </td>
                </tr>
                <tr className="border-b border-indigo-100">
                  <td className="py-4 pl-2 pr-4">
                    <div className="flex items-center gap-2">
                      <Tv className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Cable</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Very Good</Badge>
                    <div className="text-sm mt-1">Up to 1 Gbps</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Moderate</Badge>
                    <div className="text-sm mt-1">Up to 50 Mbps</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Good</Badge>
                    <div className="text-sm mt-1">15-50ms</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Good</Badge>
                    <div className="text-sm mt-1">98.5%</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Good</Badge>
                    <div className="text-sm mt-1">89%</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Moderate</Badge>
                    <div className="text-sm mt-1">$50-80</div>
                  </td>
                </tr>
                <tr className="border-b border-indigo-100">
                  <td className="py-4 pl-2 pr-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-cyan-600" />
                      <span className="font-medium">DSL</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Moderate</Badge>
                    <div className="text-sm mt-1">5-100 Mbps</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Low</Badge>
                    <div className="text-sm mt-1">1-20 Mbps</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Moderate</Badge>
                    <div className="text-sm mt-1">75-100ms</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Good</Badge>
                    <div className="text-sm mt-1">97.5%</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
                    <div className="text-sm mt-1">92%</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Affordable</Badge>
                    <div className="text-sm mt-1">$35-55</div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pl-2 pr-4">
                    <div className="flex items-center gap-2">
                      <Satellite className="h-5 w-5 text-indigo-600" />
                      <span className="font-medium">Satellite</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Moderate</Badge>
                    <div className="text-sm mt-1">12-150 Mbps</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Low</Badge>
                    <div className="text-sm mt-1">3-10 Mbps</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>
                    <div className="text-sm mt-1">500-600ms</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Moderate</Badge>
                    <div className="text-sm mt-1">96%</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
                    <div className="text-sm mt-1">99%</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Expensive</Badge>
                    <div className="text-sm mt-1">$80-150</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Finding the Right Internet Service?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our experts can help you determine which internet technology is best for your specific needs, budget, and location.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
              Check Availability in Your Area
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600">
              Compare Internet Providers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetComparisonPage;