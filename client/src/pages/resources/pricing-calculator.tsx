import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Wifi, WifiOff, Tv, Phone, Package, Home, DollarSign, Plus, Minus, Info } from "lucide-react";

const PricingCalculator: React.FC = () => {
  // Provider selection
  const [selectedProvider, setSelectedProvider] = useState<string>("xfinity");

  // Internet options
  const [internetIncluded, setInternetIncluded] = useState<boolean>(true);
  const [internetSpeed, setInternetSpeed] = useState<number>(300);
  const [internetUnlimitedData, setInternetUnlimitedData] = useState<boolean>(false);
  
  // TV options
  const [tvIncluded, setTvIncluded] = useState<boolean>(false);
  const [tvPackage, setTvPackage] = useState<string>("basic");
  const [tvAddons, setTvAddons] = useState<string[]>([]);
  
  // Phone options
  const [phoneIncluded, setPhoneIncluded] = useState<boolean>(false);
  const [phoneLines, setPhoneLines] = useState<number>(1);
  
  // Equipment options
  const [ownModem, setOwnModem] = useState<boolean>(false);
  const [wifiExtenders, setWifiExtenders] = useState<number>(0);
  const [dvr, setDvr] = useState<boolean>(false);
  const [additionalTvBoxes, setAdditionalTvBoxes] = useState<number>(0);
  
  // Contract options
  const [contractLength, setContractLength] = useState<number>(12);
  
  // Final price calculation
  const [monthlyPrice, setMonthlyPrice] = useState<number>(0);
  const [oneTimePrice, setOneTimePrice] = useState<number>(0);
  const [savings, setSavings] = useState<number>(0);

  // Price calculation logic
  useEffect(() => {
    let monthly = 0;
    let oneTime = 0;
    
    // Provider-specific base prices
    const providers = {
      xfinity: {
        internetBase: 45,
        internetPricePerSpeed: 0.15,
        unlimitedData: 30,
        tvBasic: 40,
        tvPreferred: 70,
        tvPremium: 90,
        phoneBase: 25,
        additionalPhoneLine: 15,
        modemRental: 14,
        wifiExtender: 5,
        dvr: 10,
        tvBox: 7.5,
        installationFee: 99,
        contractSavingsPerMonth: 10,
        addons: {
          "sports": 10,
          "hbo": 15,
          "showtime": 12,
          "starz": 9,
          "kids": 7
        }
      },
      spectrum: {
        internetBase: 50,
        internetPricePerSpeed: 0.12,
        unlimitedData: 0, // Included
        tvBasic: 45,
        tvPreferred: 75,
        tvPremium: 95,
        phoneBase: 20,
        additionalPhoneLine: 15,
        modemRental: 5, // WiFi router only
        wifiExtender: 4,
        dvr: 13,
        tvBox: 8.5,
        installationFee: 49,
        contractSavingsPerMonth: 0, // No contracts
        addons: {
          "sports": 11,
          "hbo": 15,
          "showtime": 11,
          "starz": 9,
          "kids": 6
        }
      },
      optimum: {
        internetBase: 40,
        internetPricePerSpeed: 0.14,
        unlimitedData: 25,
        tvBasic: 35,
        tvPreferred: 65,
        tvPremium: 85,
        phoneBase: 20,
        additionalPhoneLine: 12,
        modemRental: 10,
        wifiExtender: 3,
        dvr: 12,
        tvBox: 6,
        installationFee: 79,
        contractSavingsPerMonth: 5,
        addons: {
          "sports": 9,
          "hbo": 14.99,
          "showtime": 10.99,
          "starz": 8.99,
          "kids": 5.99
        }
      },
      directv: {
        internetBase: 0, // No internet service
        internetPricePerSpeed: 0,
        unlimitedData: 0,
        tvBasic: 65,
        tvPreferred: 85,
        tvPremium: 135,
        phoneBase: 0, // No phone service
        additionalPhoneLine: 0,
        modemRental: 0,
        wifiExtender: 0,
        dvr: 15,
        tvBox: 7,
        installationFee: 99,
        contractSavingsPerMonth: 15,
        addons: {
          "sports": 15,
          "hbo": 15,
          "showtime": 11,
          "starz": 9,
          "kids": 5
        }
      },
      dish: {
        internetBase: 0, // No internet service
        internetPricePerSpeed: 0,
        unlimitedData: 0,
        tvBasic: 60,
        tvPreferred: 80,
        tvPremium: 120,
        phoneBase: 0, // No phone service
        additionalPhoneLine: 0,
        modemRental: 0,
        wifiExtender: 0,
        dvr: 15,
        tvBox: 7,
        installationFee: 99,
        contractSavingsPerMonth: 10,
        addons: {
          "sports": 13,
          "hbo": 15,
          "showtime": 10,
          "starz": 9,
          "kids": 5
        }
      }
    };
    
    const currentProvider = providers[selectedProvider as keyof typeof providers];

    // Calculate Internet costs
    if (internetIncluded && currentProvider.internetBase > 0) {
      monthly += currentProvider.internetBase;
      monthly += internetSpeed * currentProvider.internetPricePerSpeed;
      
      if (internetUnlimitedData) {
        monthly += currentProvider.unlimitedData;
      }
      
      if (!ownModem) {
        monthly += currentProvider.modemRental;
      }
      
      monthly += wifiExtenders * currentProvider.wifiExtender;
    }
    
    // Calculate TV costs
    if (tvIncluded) {
      switch (tvPackage) {
        case "basic":
          monthly += currentProvider.tvBasic;
          break;
        case "preferred":
          monthly += currentProvider.tvPreferred;
          break;
        case "premium":
          monthly += currentProvider.tvPremium;
          break;
      }
      
      // Add TV add-ons
      for (const addon of tvAddons) {
        monthly += currentProvider.addons[addon as keyof typeof currentProvider.addons];
      }
      
      // Equipment
      if (dvr) {
        monthly += currentProvider.dvr;
      }
      
      monthly += additionalTvBoxes * currentProvider.tvBox;
    }
    
    // Calculate Phone costs
    if (phoneIncluded && currentProvider.phoneBase > 0) {
      monthly += currentProvider.phoneBase;
      if (phoneLines > 1) {
        monthly += (phoneLines - 1) * currentProvider.additionalPhoneLine;
      }
    }
    
    // One-time costs
    oneTime = currentProvider.installationFee;
    
    // Contract savings
    let contractDiscount = 0;
    if (contractLength === 24) {
      contractDiscount = currentProvider.contractSavingsPerMonth * 2;
    } else if (contractLength === 12) {
      contractDiscount = currentProvider.contractSavingsPerMonth;
    }
    
    // Apply contract discount
    if (selectedProvider !== "spectrum") { // Spectrum doesn't do contracts
      monthly -= contractDiscount;
      setSavings(contractDiscount * contractLength);
    } else {
      setSavings(0);
    }
    
    // Update final prices
    setMonthlyPrice(parseFloat(monthly.toFixed(2)));
    setOneTimePrice(oneTime);
  }, [
    selectedProvider, 
    internetIncluded, 
    internetSpeed, 
    internetUnlimitedData, 
    tvIncluded, 
    tvPackage, 
    tvAddons, 
    phoneIncluded, 
    phoneLines, 
    ownModem, 
    wifiExtenders, 
    dvr, 
    additionalTvBoxes, 
    contractLength
  ]);

  const internetSpeedOptions = [
    { value: 100, label: "100 Mbps" },
    { value: 300, label: "300 Mbps" },
    { value: 500, label: "500 Mbps" },
    { value: 940, label: "940 Mbps (Gigabit)" },
    { value: 2000, label: "2 Gbps" }
  ];

  const handleProviderChange = (provider: string) => {
    setSelectedProvider(provider);
    
    // Reset options based on provider selection
    if (provider === "directv" || provider === "dish") {
      setInternetIncluded(false);
      setPhoneIncluded(false);
      setTvIncluded(true);
    } else {
      setInternetIncluded(true);
    }
  };

  const handleTvAddonToggle = (addon: string) => {
    if (tvAddons.includes(addon)) {
      setTvAddons(tvAddons.filter(a => a !== addon));
    } else {
      setTvAddons([...tvAddons, addon]);
    }
  };

  // Speed color calculation
  const getSpeedColor = (speed: number) => {
    if (speed <= 100) return "bg-yellow-500";
    if (speed <= 300) return "bg-green-500";
    if (speed <= 500) return "bg-blue-500";
    if (speed <= 940) return "bg-indigo-500";
    return "bg-violet-500";
  };

  // Price tier calculation
  const getPriceTier = (price: number) => {
    if (price < 70) return "Budget";
    if (price < 120) return "Standard";
    if (price < 170) return "Premium";
    return "Luxury";
  };

  // Handle WiFi extender increment/decrement
  const handleExtenderChange = (increment: boolean) => {
    if (increment && wifiExtenders < 5) {
      setWifiExtenders(wifiExtenders + 1);
    } else if (!increment && wifiExtenders > 0) {
      setWifiExtenders(wifiExtenders - 1);
    }
  };

  // Handle TV boxes increment/decrement
  const handleTvBoxChange = (increment: boolean) => {
    if (increment && additionalTvBoxes < 5) {
      setAdditionalTvBoxes(additionalTvBoxes + 1);
    } else if (!increment && additionalTvBoxes > 0) {
      setAdditionalTvBoxes(additionalTvBoxes - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interactive Pricing Calculator</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estimate your monthly costs for TV, internet, and phone services with our interactive calculator. Customize your services and equipment to see real-time price changes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Provider Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  Select Provider
                </CardTitle>
                <CardDescription>Choose your preferred service provider</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <Button 
                    variant={selectedProvider === "xfinity" ? "default" : "outline"}
                    className={`h-24 flex flex-col items-center justify-center gap-2 ${selectedProvider === "xfinity" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                    onClick={() => handleProviderChange("xfinity")}
                  >
                    <span className="text-xl font-bold">Xfinity</span>
                  </Button>
                  <Button 
                    variant={selectedProvider === "spectrum" ? "default" : "outline"}
                    className={`h-24 flex flex-col items-center justify-center gap-2 ${selectedProvider === "spectrum" ? "bg-blue-500 hover:bg-blue-600" : ""}`}
                    onClick={() => handleProviderChange("spectrum")}
                  >
                    <span className="text-xl font-bold">Spectrum</span>
                  </Button>
                  <Button 
                    variant={selectedProvider === "optimum" ? "default" : "outline"}
                    className={`h-24 flex flex-col items-center justify-center gap-2 ${selectedProvider === "optimum" ? "bg-orange-600 hover:bg-orange-700" : ""}`}
                    onClick={() => handleProviderChange("optimum")}
                  >
                    <span className="text-xl font-bold">Optimum</span>
                  </Button>
                  <Button 
                    variant={selectedProvider === "directv" ? "default" : "outline"}
                    className={`h-24 flex flex-col items-center justify-center gap-2 ${selectedProvider === "directv" ? "bg-blue-800 hover:bg-blue-900" : ""}`}
                    onClick={() => handleProviderChange("directv")}
                  >
                    <span className="text-xl font-bold">DIRECTV</span>
                  </Button>
                  <Button 
                    variant={selectedProvider === "dish" ? "default" : "outline"}
                    className={`h-24 flex flex-col items-center justify-center gap-2 ${selectedProvider === "dish" ? "bg-red-600 hover:bg-red-700" : ""}`}
                    onClick={() => handleProviderChange("dish")}
                  >
                    <span className="text-xl font-bold">DISH</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Services Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Services
                </CardTitle>
                <CardDescription>Choose which services you want to include</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Internet Options */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Wifi className={`h-5 w-5 ${internetIncluded ? "text-primary" : "text-gray-400"}`} />
                      <Label htmlFor="internet-toggle" className="text-lg font-medium">Internet</Label>
                    </div>
                    <Switch 
                      id="internet-toggle" 
                      checked={internetIncluded} 
                      onCheckedChange={setInternetIncluded}
                      disabled={selectedProvider === "directv" || selectedProvider === "dish"}
                    />
                  </div>

                  {internetIncluded && (
                    <div className="pl-8 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="internet-speed">Internet Speed</Label>
                        <Select 
                          value={internetSpeed.toString()} 
                          onValueChange={(value: string) => setInternetSpeed(parseInt(value))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Internet Speed" />
                          </SelectTrigger>
                          <SelectContent>
                            {internetSpeedOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value.toString()}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <div className="mt-2">
                          <Progress value={internetSpeed / 20} className={`h-2 ${getSpeedColor(internetSpeed)}`} />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Basic</span>
                            <span>Fast</span>
                            <span>Super Fast</span>
                            <span>Gigabit</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="unlimited-data" className="cursor-pointer">Unlimited Data</Label>
                        <Switch 
                          id="unlimited-data" 
                          checked={internetUnlimitedData} 
                          onCheckedChange={setInternetUnlimitedData}
                          disabled={selectedProvider === "spectrum"} // Spectrum includes unlimited data
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="own-modem" className="cursor-pointer">I own my modem/router</Label>
                        <Switch 
                          id="own-modem" 
                          checked={ownModem} 
                          onCheckedChange={setOwnModem}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>WiFi Extenders</Label>
                        <div className="flex items-center">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={() => handleExtenderChange(false)}
                            disabled={wifiExtenders === 0}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="mx-4 font-medium text-lg">{wifiExtenders}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={() => handleExtenderChange(true)}
                            disabled={wifiExtenders === 5}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Separator />

                {/* TV Options */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Tv className={`h-5 w-5 ${tvIncluded ? "text-primary" : "text-gray-400"}`} />
                      <Label htmlFor="tv-toggle" className="text-lg font-medium">Television</Label>
                    </div>
                    <Switch 
                      id="tv-toggle" 
                      checked={tvIncluded} 
                      onCheckedChange={setTvIncluded}
                    />
                  </div>

                  {tvIncluded && (
                    <div className="pl-8 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="tv-package">TV Package</Label>
                        <Select 
                          value={tvPackage} 
                          onValueChange={setTvPackage}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select TV Package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Basic (60-125+ channels)</SelectItem>
                            <SelectItem value="preferred">Preferred (125-175+ channels)</SelectItem>
                            <SelectItem value="premium">Premium (200+ channels)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="block mb-2">Add-ons</Label>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="sports-addon" 
                              checked={tvAddons.includes("sports")} 
                              onCheckedChange={() => handleTvAddonToggle("sports")}
                            />
                            <Label htmlFor="sports-addon">Sports Package</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="hbo-addon" 
                              checked={tvAddons.includes("hbo")} 
                              onCheckedChange={() => handleTvAddonToggle("hbo")}
                            />
                            <Label htmlFor="hbo-addon">HBO Max</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="showtime-addon" 
                              checked={tvAddons.includes("showtime")} 
                              onCheckedChange={() => handleTvAddonToggle("showtime")}
                            />
                            <Label htmlFor="showtime-addon">SHOWTIME</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="starz-addon" 
                              checked={tvAddons.includes("starz")} 
                              onCheckedChange={() => handleTvAddonToggle("starz")}
                            />
                            <Label htmlFor="starz-addon">STARZ</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="kids-addon" 
                              checked={tvAddons.includes("kids")} 
                              onCheckedChange={() => handleTvAddonToggle("kids")}
                            />
                            <Label htmlFor="kids-addon">Kids & Family</Label>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="dvr-toggle" className="cursor-pointer">DVR Service</Label>
                        <Switch 
                          id="dvr-toggle" 
                          checked={dvr} 
                          onCheckedChange={setDvr}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Additional TV Boxes</Label>
                        <div className="flex items-center">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={() => handleTvBoxChange(false)}
                            disabled={additionalTvBoxes === 0}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="mx-4 font-medium text-lg">{additionalTvBoxes}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={() => handleTvBoxChange(true)}
                            disabled={additionalTvBoxes === 5}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Phone Options */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Phone className={`h-5 w-5 ${phoneIncluded ? "text-primary" : "text-gray-400"}`} />
                      <Label htmlFor="phone-toggle" className="text-lg font-medium">Home Phone</Label>
                    </div>
                    <Switch 
                      id="phone-toggle" 
                      checked={phoneIncluded} 
                      onCheckedChange={setPhoneIncluded}
                      disabled={selectedProvider === "directv" || selectedProvider === "dish"}
                    />
                  </div>

                  {phoneIncluded && (
                    <div className="pl-8 space-y-4">
                      <div className="space-y-2">
                        <Label>Phone Lines</Label>
                        <div className="flex items-center">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={() => setPhoneLines(Math.max(1, phoneLines - 1))}
                            disabled={phoneLines === 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="mx-4 font-medium text-lg">{phoneLines}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={() => setPhoneLines(Math.min(4, phoneLines + 1))}
                            disabled={phoneLines === 4}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Contract Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Contract Options
                </CardTitle>
                <CardDescription>Choose your contract length for potential savings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <Button 
                      variant={contractLength === 0 ? "default" : "outline"}
                      className={contractLength === 0 ? "bg-primary" : ""}
                      onClick={() => setContractLength(0)}
                    >
                      No Contract
                    </Button>
                    <Button 
                      variant={contractLength === 12 ? "default" : "outline"}
                      className={contractLength === 12 ? "bg-primary" : ""}
                      onClick={() => setContractLength(12)}
                    >
                      12 Months
                    </Button>
                    <Button 
                      variant={contractLength === 24 ? "default" : "outline"}
                      className={contractLength === 24 ? "bg-primary" : ""}
                      onClick={() => setContractLength(24)}
                    >
                      24 Months
                    </Button>
                  </div>
                  
                  {selectedProvider === "spectrum" && (
                    <div className="text-sm text-amber-600 flex items-center gap-2 mt-2">
                      <Info className="h-4 w-4" />
                      <span>Spectrum does not require long-term contracts.</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-4">
              <Card className="border-2 border-primary/30">
                <CardHeader className="bg-primary/5">
                  <CardTitle>Your Estimated Price</CardTitle>
                  <CardDescription>Based on your selected options</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">MONTHLY PRICE</p>
                    <div className="text-4xl font-bold text-primary">${monthlyPrice.toFixed(2)}</div>
                    <p className="text-xs text-gray-500 mt-1">Plus taxes & fees</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">One-time setup fees</span>
                      <span className="font-medium">${oneTimePrice.toFixed(2)}</span>
                    </div>
                    
                    {savings > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Contract savings over {contractLength} months</span>
                        <span className="font-medium">-${savings.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Price tier</span>
                      <span className="font-medium bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {getPriceTier(monthlyPrice)}
                      </span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Your Package Includes:</h4>
                    <ul className="space-y-2 text-sm">
                      {internetIncluded && (
                        <li className="flex items-center gap-2">
                          <Wifi className="h-4 w-4 text-green-500" />
                          <span>{internetSpeed} Mbps Internet {internetUnlimitedData ? "with Unlimited Data" : ""}</span>
                        </li>
                      )}
                      {tvIncluded && (
                        <li className="flex items-center gap-2">
                          <Tv className="h-4 w-4 text-green-500" />
                          <span>
                            {tvPackage === "basic" ? "Basic" : tvPackage === "preferred" ? "Preferred" : "Premium"} TV Package
                            {tvAddons.length > 0 && ` + ${tvAddons.length} add-ons`}
                          </span>
                        </li>
                      )}
                      {phoneIncluded && (
                        <li className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-green-500" />
                          <span>Home Phone ({phoneLines} {phoneLines === 1 ? "line" : "lines"})</span>
                        </li>
                      )}
                      {!internetIncluded && !tvIncluded && !phoneIncluded && (
                        <li className="flex items-center gap-2">
                          <WifiOff className="h-4 w-4 text-red-500" />
                          <span>No services selected</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">Check Availability</Button>
                  <p className="text-xs text-gray-500 text-center">
                    Actual prices may vary based on available promotions and your specific location. Contact the provider for exact pricing details.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;