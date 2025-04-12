import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { downloadCSV, createGoogleSheetsLink } from "@/lib/exportUtils";
import ZapierConfig from "@/components/admin/ZapierConfig";
import IFTTTConfig from "@/components/admin/IFTTTConfig";
import { 
  RefreshCw, 
  User, 
  Smartphone, 
  PieChart, 
  Users, 
  ChevronUp, 
  Phone, 
  Clock,
  Calendar,
  Shield,
  Lock,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Download,
  FileSpreadsheet,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function AdminPage() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("service-signups");
  const [serviceSignups, setServiceSignups] = useState<any[]>([]);
  const [esimCallbacks, setEsimCallbacks] = useState<any[]>([]);
  const [iptvSignups, setIptvSignups] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [twoFactorSetupVisible, setTwoFactorSetupVisible] = useState(false);
  const [twoFactorQrCode, setTwoFactorQrCode] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [setupLoading, setSetupLoading] = useState(false);
  
  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      // Redirect to login page if not authenticated
      setLocation('/login');
      return;
    }
    
    // Fetch user profile
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('/api/user/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Authentication error:', error);
        // Clear token and redirect to login on auth error
        localStorage.removeItem('authToken');
        setLocation('/login');
      }
    };
    
    fetchUserProfile();
  }, [setLocation]);
  
  // Fetch data based on active tab
  const fetchData = async (tab = activeTab) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setLocation('/login');
      return;
    }
    
    setLoading(true);
    try {
      if (tab === "service-signups") {
        const response = await fetch('/api/service-signups', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          // Handling both the old and new response format
          setServiceSignups(Array.isArray(data) ? data : (data.signups || []));
        } else if (response.status === 401 || response.status === 403) {
          localStorage.removeItem('authToken');
          setLocation('/login');
          throw new Error('Authentication required');
        } else {
          throw new Error('Failed to fetch service signups');
        }
      } else if (tab === "esim-callbacks") {
        const response = await fetch('/api/esim-callbacks', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          // Handling both the old and new response format 
          setEsimCallbacks(Array.isArray(data) ? data : (data.callbacks || []));
        } else if (response.status === 401 || response.status === 403) {
          localStorage.removeItem('authToken');
          setLocation('/login');
          throw new Error('Authentication required');
        } else {
          throw new Error('Failed to fetch eSIM callbacks');
        }
      } else if (tab === "iptv-signups") {
        const response = await fetch('/api/iptv-signups', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          // Handling both the old and new response format
          setIptvSignups(Array.isArray(data) ? data : (data.signups || []));
        } else if (response.status === 401 || response.status === 403) {
          localStorage.removeItem('authToken');
          setLocation('/login');
          throw new Error('Authentication required');
        } else {
          throw new Error('Failed to fetch QwickTV signups');
        }
      }
    } catch (error) {
      console.error(`Error fetching ${tab}:`, error);
      
      let errorDescription = "Unknown error occurred.";
      if (tab === "service-signups") {
        errorDescription = "Failed to load service submissions.";
      } else if (tab === "esim-callbacks") {
        errorDescription = "Failed to load eSIM callback requests.";
      } else if (tab === "iptv-signups") {
        errorDescription = "Failed to load QwickTV subscription data.";
      }
      
      toast({
        title: "Error",
        description: errorDescription,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [activeTab, user]);
  
  // Refresh the data
  const handleRefresh = () => {
    fetchData(activeTab);
    toast({
      title: "Refreshing data",
      description: "Getting the latest submissions..."
    });
  };
  
  // Handle CSV export
  const handleExportCSV = (data: any[], filename: string) => {
    try {
      // Remove sensitive data if necessary before export
      const exportData = data.map(item => {
        const { password, ...rest } = item;
        return rest;
      });
      
      downloadCSV(exportData, filename);
      
      toast({
        title: "Export Successful",
        description: `Data has been exported to ${filename}.csv`,
      });
    } catch (error) {
      console.error('Export error:', error);
      toast({
        title: "Export Failed",
        description: "There was an error exporting your data.",
        variant: "destructive",
      });
    }
  };
  
  // Handle Google Sheets export
  const handleExportGoogleSheets = (data: any[], title: string) => {
    try {
      // Remove sensitive data if necessary before export
      const exportData = data.map(item => {
        const { password, ...rest } = item;
        return rest;
      });
      
      const dataUrl = createGoogleSheetsLink(exportData, title);
      
      // Open in new tab
      const newWindow = window.open(dataUrl, '_blank');
      
      if (newWindow) {
        toast({
          title: "Data Prepared for Google Sheets",
          description: "Your data is ready to be copied to Google Sheets.",
        });
      } else {
        toast({
          title: "Popup Blocked",
          description: "Please allow popups to open the data for Google Sheets.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Google Sheets export error:', error);
      toast({
        title: "Export Failed",
        description: "There was an error preparing your data for Google Sheets.",
        variant: "destructive",
      });
    }
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Calculate statistics
  const totalServiceSignups = serviceSignups.length;
  const totalEsimCallbacks = esimCallbacks.length;
  const totalIptvSignups = iptvSignups.length;
  const totalSubmissions = totalServiceSignups + totalEsimCallbacks + totalIptvSignups;
  
  // Calculate last 24 hours submissions
  const last24Hours = new Date();
  last24Hours.setHours(last24Hours.getHours() - 24);
  
  const recentServiceSignups = serviceSignups.filter(
    signup => new Date(signup.createdAt) > last24Hours
  ).length;
  
  const recentEsimCallbacks = esimCallbacks.filter(
    callback => new Date(callback.createdAt) > last24Hours
  ).length;
  
  const recentIptvSignups = iptvSignups.filter(
    signup => new Date(signup.createdAt) > last24Hours
  ).length;
  
  const recentSubmissions = recentServiceSignups + recentEsimCallbacks + recentIptvSignups;
  
  // Calculate provider distribution (example)
  const providerCounts = serviceSignups.reduce((acc: {[key: string]: number}, signup) => {
    const provider = signup.preferredProvider || 'Not specified';
    acc[provider] = (acc[provider] || 0) + 1;
    return acc;
  }, {});
  
  // Calculate speed tier distribution
  const speedCounts = serviceSignups.reduce((acc: {[key: string]: number}, signup) => {
    const speed = signup.speedRequirement || 'basic';
    acc[speed] = (acc[speed] || 0) + 1;
    return acc;
  }, {});
  
  // Enable 2FA after verification
  const handleEnableTwoFactor = async () => {
    if (!verificationCode || verificationCode.length !== 6) {
      toast({
        title: 'Validation Error',
        description: 'Please enter a valid 6-digit verification code',
        variant: 'destructive'
      });
      return;
    }
    
    setSetupLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('/api/auth/enable-2fa', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: verificationCode })
      });
      
      if (!response.ok) {
        throw new Error('Failed to verify 2FA code');
      }
      
      const result = await response.json();
      
      // Update user state
      setUser({...user, twoFactorEnabled: true});
      
      // Reset and close dialog
      setVerificationCode('');
      setTwoFactorSetupVisible(false);
      
      toast({
        title: 'Success',
        description: 'Two-factor authentication enabled successfully',
      });
    } catch (error) {
      console.error('Error enabling 2FA:', error);
      toast({
        title: 'Verification Failed',
        description: 'Invalid verification code. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setSetupLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* 2FA Setup Dialog */}
      <Dialog open={twoFactorSetupVisible} onOpenChange={setTwoFactorSetupVisible}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Two-Factor Authentication Setup</DialogTitle>
            <DialogDescription>
              Enhance the security of your account with two-factor authentication
            </DialogDescription>
          </DialogHeader>
          
          {setupLoading && !twoFactorQrCode ? (
            <div className="flex flex-col items-center justify-center py-8">
              <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Generating your 2FA credentials...</p>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              <div className="border rounded-lg p-4 bg-secondary/20">
                <div className="flex items-start mb-4">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Scan the QR code below with an authenticator app like Google Authenticator, 
                    Microsoft Authenticator, or Authy to set up two-factor authentication.
                  </p>
                </div>
                
                {twoFactorQrCode && (
                  <div className="flex justify-center mb-4">
                    <div className="border-8 border-white bg-white rounded-lg shadow-md">
                      <img 
                        src={twoFactorQrCode} 
                        alt="Two-factor authentication QR code" 
                        className="w-48 h-48"
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Once you've scanned the QR code, enter the 6-digit verification code from your
                    authenticator app below to complete setup.
                  </p>
                </div>
              </div>
              
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="verification-code">Verification Code</Label>
                  <Input 
                    id="verification-code" 
                    placeholder="Enter 6-digit code" 
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    maxLength={6}
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setTwoFactorSetupVisible(false);
                setVerificationCode('');
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleEnableTwoFactor}
              disabled={!twoFactorQrCode || setupLoading || verificationCode.length !== 6}
            >
              {setupLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                'Enable 2FA'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            View and manage customer form submissions
          </p>
        </div>
        <Button 
          onClick={handleRefresh} 
          variant="outline" 
          className="mt-4 md:mt-0 hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh Data
        </Button>
      </div>
      
      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-md transition-shadow border-l-4 border-l-primary">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span>Total Submissions</span>
              <Users className="h-5 w-5 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {totalSubmissions}
            </div>
            <p className="text-sm text-muted-foreground">
              All time customer form submissions
            </p>
          </CardContent>
          <CardFooter className="pt-0 border-t text-xs text-muted-foreground">
            <div className="flex items-center gap-1 text-green-600">
              <ChevronUp className="h-4 w-4" />
              <span>{recentSubmissions} new in last 24 hours</span>
            </div>
          </CardFooter>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span>Service Sign-ups</span>
              <User className="h-5 w-5 text-blue-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {totalServiceSignups}
            </div>
            <p className="text-sm text-muted-foreground">
              Total service requests
            </p>
            <div className="h-2 mt-3">
              <Progress value={totalServiceSignups ? (totalServiceSignups / totalSubmissions) * 100 : 0} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
            </div>
          </CardContent>
          <CardFooter className="pt-0 border-t text-xs text-muted-foreground">
            <div className="flex items-center gap-1 text-green-600">
              <ChevronUp className="h-4 w-4" />
              <span>{recentServiceSignups} new in last 24 hours</span>
            </div>
          </CardFooter>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span>eSIM Callbacks</span>
              <Phone className="h-5 w-5 text-purple-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {totalEsimCallbacks}
            </div>
            <p className="text-sm text-muted-foreground">
              Total callback requests
            </p>
            <div className="h-2 mt-3">
              <Progress value={totalEsimCallbacks ? (totalEsimCallbacks / totalSubmissions) * 100 : 0} className="h-2 bg-purple-100" indicatorClassName="bg-purple-500" />
            </div>
          </CardContent>
          <CardFooter className="pt-0 border-t text-xs text-muted-foreground">
            <div className="flex items-center gap-1 text-green-600">
              <ChevronUp className="h-4 w-4" />
              <span>{recentEsimCallbacks} new in last 24 hours</span>
            </div>
          </CardFooter>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow border-l-4 border-l-red-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span>QwickTV Sign-ups</span>
              <PieChart className="h-5 w-5 text-red-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {totalIptvSignups}
            </div>
            <p className="text-sm text-muted-foreground">
              Total IPTV subscriptions
            </p>
            <div className="h-2 mt-3">
              <Progress value={totalIptvSignups ? (totalIptvSignups / totalSubmissions) * 100 : 0} className="h-2 bg-red-100" indicatorClassName="bg-red-500" />
            </div>
          </CardContent>
          <CardFooter className="pt-0 border-t text-xs text-muted-foreground">
            <div className="flex items-center gap-1 text-green-600">
              <ChevronUp className="h-4 w-4" />
              <span>{recentIptvSignups} new in last 24 hours</span>
            </div>
          </CardFooter>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow border-l-4 border-l-emerald-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span>Admin Security</span>
              <Shield className="h-5 w-5 text-emerald-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-lg font-semibold mb-1 flex items-center gap-2">
                  {user?.username && <span>Welcome, {user.username}</span>}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={user?.twoFactorEnabled ? "default" : "destructive"}>
                    {user?.twoFactorEnabled ? "2FA Enabled" : "2FA Disabled"}
                  </Badge>
                  {!user?.twoFactorEnabled && (
                    <span className="text-xs text-destructive">Security Risk</span>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                {!user?.twoFactorEnabled ? (
                  <Button 
                    size="sm" 
                    onClick={() => {
                      setTwoFactorSetupVisible(true);
                      setSetupLoading(true);
                      
                      // Fetch 2FA setup data
                      const token = localStorage.getItem('authToken');
                      fetch('/api/auth/setup-2fa', {
                        method: 'POST',
                        headers: {
                          'Authorization': `Bearer ${token}`
                        }
                      })
                      .then(response => {
                        if (!response.ok) throw new Error('Failed to setup 2FA');
                        return response.json();
                      })
                      .then(data => {
                        setTwoFactorQrCode(data.qrCode);
                        setSetupLoading(false);
                      })
                      .catch(error => {
                        console.error('Error setting up 2FA:', error);
                        toast({
                          title: 'Error',
                          description: 'Failed to setup two-factor authentication',
                          variant: 'destructive'
                        });
                        setTwoFactorSetupVisible(false);
                        setSetupLoading(false);
                      });
                    }}
                    className="gap-2 bg-emerald-500 hover:bg-emerald-600"
                  >
                    <Lock className="h-4 w-4" />
                    Setup 2FA Security
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      const token = localStorage.getItem('authToken');
                      fetch('/api/auth/disable-2fa', {
                        method: 'POST',
                        headers: {
                          'Authorization': `Bearer ${token}`
                        }
                      })
                      .then(response => {
                        if (!response.ok) throw new Error('Failed to disable 2FA');
                        return response.json();
                      })
                      .then(() => {
                        setUser({...user, twoFactorEnabled: false});
                        toast({
                          title: 'Success',
                          description: 'Two-factor authentication disabled'
                        });
                      })
                      .catch(error => {
                        console.error('Error disabling 2FA:', error);
                        toast({
                          title: 'Error',
                          description: 'Failed to disable two-factor authentication',
                          variant: 'destructive'
                        });
                      });
                    }}
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Disable 2FA
                  </Button>
                )}
                
                <Button 
                  size="sm" 
                  variant="destructive"
                  onClick={() => {
                    const token = localStorage.getItem('authToken');
                    fetch('/api/auth/logout', {
                      method: 'POST',
                      headers: {
                        'Authorization': `Bearer ${token}`
                      }
                    })
                    .then(() => {
                      localStorage.removeItem('authToken');
                      setLocation('/login');
                      toast({
                        title: 'Logged out',
                        description: 'You have been logged out successfully'
                      });
                    })
                    .catch(error => {
                      console.error('Logout error:', error);
                      // Even if API fails, clear local storage and redirect
                      localStorage.removeItem('authToken');
                      setLocation('/login');
                    });
                  }}
                >
                  Logout
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0 border-t text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>Last activity: just now</span>
            </div>
          </CardFooter>
        </Card>
      </div>
      
      <Tabs defaultValue="service-signups" onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md grid-cols-4 mb-8">
          <TabsTrigger value="service-signups" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Service Signups</span>
          </TabsTrigger>
          <TabsTrigger value="esim-callbacks" className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            <span>eSIM Callbacks</span>
          </TabsTrigger>
          <TabsTrigger value="iptv-signups" className="flex items-center gap-2">
            <PieChart className="h-4 w-4" />
            <span>QwickTV Signups</span>
          </TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span>Integrations</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="service-signups" className="space-y-4">
          {/* Summary Cards */}
          {!loading && serviceSignups.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Provider Distribution */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-blue-500" />
                    <span>Provider Distribution</span>
                  </CardTitle>
                  <CardDescription>
                    Breakdown of customer provider preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(providerCounts).map(([provider, count]) => (
                      <div key={provider} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{provider}</span>
                          <span className="text-sm text-muted-foreground">{count} customers ({Math.round((count / totalServiceSignups) * 100)}%)</span>
                        </div>
                        <Progress 
                          value={(count / totalServiceSignups) * 100} 
                          className="h-2" 
                          indicatorClassName={
                            provider === "Optimum" ? "bg-[#2C74B3]" :
                            provider === "Spectrum" ? "bg-[#0056A4]" :
                            provider === "Xfinity" ? "bg-[#FF0022]" :
                            provider === "DIRECTV" ? "bg-[#00A6D6]" :
                            provider === "DISH" ? "bg-[#ED1D24]" :
                            "bg-gray-500"
                          }
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Speed Tier Distribution */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-green-600"
                    >
                      <line x1="12" y1="2" x2="12" y2="6"></line>
                      <line x1="12" y1="18" x2="12" y2="22"></line>
                      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                      <line x1="2" y1="12" x2="6" y2="12"></line>
                      <line x1="18" y1="12" x2="22" y2="12"></line>
                      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                    <span>Speed Tier Analysis</span>
                  </CardTitle>
                  <CardDescription>
                    What speed tiers customers are requesting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(speedCounts).map(([speed, count]) => (
                      <div key={speed} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant={
                              speed === "premium" ? "default" : 
                              speed === "standard" ? "secondary" : 
                              "outline"
                            }>
                              {speed}
                            </Badge>
                            {speed === "premium" && <span className="text-xs text-muted-foreground">(500+ Mbps)</span>}
                            {speed === "standard" && <span className="text-xs text-muted-foreground">(100-300 Mbps)</span>}
                            {speed === "basic" && <span className="text-xs text-muted-foreground">(25-75 Mbps)</span>}
                          </div>
                          <span className="text-sm text-muted-foreground">{count} customers ({Math.round((count / totalServiceSignups) * 100)}%)</span>
                        </div>
                        <Progress 
                          value={(count / totalServiceSignups) * 100} 
                          className="h-2" 
                          indicatorClassName={
                            speed === "premium" ? "bg-primary" :
                            speed === "standard" ? "bg-blue-500" :
                            "bg-gray-400"
                          }
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        
          <Card className="border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-500" />
                <span>Customer Service Sign-ups</span>
              </CardTitle>
              <CardDescription>
                Detailed information about customers who have signed up for services
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex flex-col justify-center items-center py-12">
                  <RefreshCw className="h-10 w-10 animate-spin text-primary/70 mb-4" />
                  <p className="text-muted-foreground">Loading customer data...</p>
                </div>
              ) : serviceSignups.length === 0 ? (
                <div className="py-12 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg">
                  <User className="h-12 w-12 text-muted-foreground mb-3 opacity-20" />
                  <p className="text-muted-foreground">No service sign-ups have been submitted yet.</p>
                  <p className="text-xs text-muted-foreground mt-1">Service sign-ups will appear here when customers submit the form.</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-md border">
                  <Table>
                    <TableCaption className="pb-4 flex items-center justify-between">
                      <span>A list of all {serviceSignups.length} service sign-up submissions</span>
                      {serviceSignups.length > 0 && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="ml-auto">
                              <Download className="h-4 w-4 mr-2" />
                              Export Data
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Choose Format</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleExportCSV(serviceSignups, "service-signups")}>
                              <Download className="h-4 w-4 mr-2" />
                              Export as CSV
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleExportGoogleSheets(serviceSignups, "Service Signups")}>
                              <FileSpreadsheet className="h-4 w-4 mr-2" />
                              Export to Google Sheets
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </TableCaption>
                    <TableHeader>
                      <TableRow className="bg-gray-50 dark:bg-gray-900">
                        <TableHead className="font-semibold">Customer</TableHead>
                        <TableHead className="font-semibold">Contact</TableHead>
                        <TableHead className="font-semibold">Location</TableHead>
                        <TableHead className="font-semibold">Speed Tier</TableHead>
                        <TableHead className="font-semibold">Provider</TableHead>
                        <TableHead className="font-semibold">Submitted</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {serviceSignups.map((signup, index) => {
                        // Check if this signup is from the last 24 hours
                        const isRecent = new Date(signup.createdAt) > last24Hours;
                        
                        return (
                          <TableRow 
                            key={signup.id} 
                            className={`
                              ${index % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50/50 dark:bg-gray-900/30'} 
                              hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors
                            `}
                          >
                            <TableCell className="p-0 w-1">
                              {isRecent && <div className="w-1 h-full bg-green-500"></div>}
                            </TableCell>
                            <TableCell className="font-medium">
                              {signup.firstName} {signup.lastName}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Phone className="h-3 w-3 text-muted-foreground" />
                                <span>{signup.phone}</span>
                              </div>
                              {signup.email && (
                                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                  <span>{signup.email}</span>
                                </div>
                              )}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <span>{signup.city}, {signup.state}</span>
                              </div>
                              <div className="text-xs text-muted-foreground ml-5 mt-1">{signup.zipCode}</div>
                            </TableCell>
                            <TableCell>
                              <Badge variant={
                                signup.speedRequirement === "premium" ? "default" : 
                                signup.speedRequirement === "standard" ? "secondary" : 
                                "outline"
                              } className="rounded-sm uppercase text-xs">
                                {signup.speedRequirement}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <span className={`
                                px-2 py-1 rounded-sm text-xs font-medium
                                ${signup.preferredProvider === "Optimum" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : ""}
                                ${signup.preferredProvider === "Spectrum" ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300" : ""}
                                ${signup.preferredProvider === "Xfinity" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" : ""}
                                ${signup.preferredProvider === "DIRECTV" ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300" : ""}
                                ${signup.preferredProvider === "DISH" ? "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300" : ""}
                                ${!signup.preferredProvider || signup.preferredProvider === "Not specified" ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300" : ""}
                              `}>
                                {signup.preferredProvider || 'Not specified'}
                              </span>
                            </TableCell>
                            <TableCell className="text-xs">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-3 w-3 text-muted-foreground" />
                                {formatDate(signup.createdAt)}
                              </div>
                              {isRecent && (
                                <span className="inline-flex items-center mt-1 px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                  New
                                </span>
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
            <CardFooter className="border-t pt-4 text-sm text-muted-foreground flex justify-between">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>Data is encrypted and secure</span>
              </div>
              <div>Total: {serviceSignups.length} records</div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="esim-callbacks" className="space-y-4">
          {/* Summary Analysis */}
          {!loading && esimCallbacks.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Time Distribution */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-500" />
                    <span>Callback Request Timing</span>
                  </CardTitle>
                  <CardDescription>
                    When customers are requesting eSIM callbacks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Weekly Distribution */}
                    <div className="pt-4">
                      <h4 className="text-sm font-medium mb-2">Weekly Distribution</h4>
                      <div className="grid grid-cols-7 gap-1 h-20">
                        {Array.from({ length: 7 }).map((_, i) => {
                          // Count callbacks for each day of the week
                          const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][i];
                          const count = esimCallbacks.filter(c => new Date(c.createdAt).getDay() === i).length;
                          const percentage = esimCallbacks.length > 0 ? (count / esimCallbacks.length) * 100 : 0;
                          
                          return (
                            <div key={i} className="flex flex-col items-center">
                              <div className="flex-1 w-full flex items-end">
                                <div 
                                  className="w-full bg-purple-500/80 rounded-t"
                                  style={{ height: `${Math.max(percentage, 5)}%` }}
                                ></div>
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {day.substring(0, 1)}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Recent vs. Past */}
                    <div className="pt-2">
                      <h4 className="text-sm font-medium mb-2">Recent Activity</h4>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Last 24 Hours</span>
                          <span className="text-sm text-muted-foreground">{recentEsimCallbacks} requests</span>
                        </div>
                        <Progress 
                          value={esimCallbacks.length ? (recentEsimCallbacks / esimCallbacks.length) * 100 : 0} 
                          className="h-2" 
                          indicatorClassName="bg-purple-500"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Contact Method Analysis */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>Preferred Contact Method</span>
                  </CardTitle>
                  <CardDescription>
                    How customers prefer to be contacted
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/10 p-4 rounded-lg flex flex-col items-center justify-center border border-purple-200 dark:border-purple-800">
                      <div className="rounded-full bg-white dark:bg-black w-16 h-16 flex items-center justify-center mb-2 shadow-sm">
                        <Phone className="h-8 w-8 text-purple-500" />
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{esimCallbacks.length}</div>
                        <div className="text-sm text-muted-foreground">Phone Callbacks</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/20 dark:to-emerald-900/10 p-4 rounded-lg flex flex-col items-center justify-center border border-emerald-200 dark:border-emerald-800">
                      <div className="rounded-full bg-white dark:bg-black w-16 h-16 flex items-center justify-center mb-2 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{esimCallbacks.filter(c => c.email).length}</div>
                        <div className="text-sm text-muted-foreground">With Email</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center text-sm text-muted-foreground">
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-md">
                      {Math.round((recentEsimCallbacks / (esimCallbacks.length || 1)) * 100)}% increase in callback requests over the last 24 hours
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <Card className="border-t-4 border-t-purple-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-purple-500" />
                <span>eSIM Callback Requests</span>
              </CardTitle>
              <CardDescription>
                Customers who requested callbacks about eSIM services
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex flex-col justify-center items-center py-12">
                  <RefreshCw className="h-10 w-10 animate-spin text-primary/70 mb-4" />
                  <p className="text-muted-foreground">Loading eSIM callback data...</p>
                </div>
              ) : esimCallbacks.length === 0 ? (
                <div className="py-12 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg">
                  <Smartphone className="h-12 w-12 text-muted-foreground mb-3 opacity-20" />
                  <p className="text-muted-foreground">No eSIM callback requests have been submitted yet.</p>
                  <p className="text-xs text-muted-foreground mt-1">Callback requests will appear here when customers submit the form.</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-md border">
                  <Table>
                    <TableCaption className="pb-4 flex items-center justify-between">
                      <span>A list of all {esimCallbacks.length} eSIM callback requests</span>
                      {esimCallbacks.length > 0 && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="ml-auto">
                              <Download className="h-4 w-4 mr-2" />
                              Export Data
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Choose Format</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleExportCSV(esimCallbacks, "esim-callbacks")}>
                              <Download className="h-4 w-4 mr-2" />
                              Export as CSV
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleExportGoogleSheets(esimCallbacks, "eSIM Callbacks")}>
                              <FileSpreadsheet className="h-4 w-4 mr-2" />
                              Export to Google Sheets
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </TableCaption>
                    <TableHeader>
                      <TableRow className="bg-gray-50 dark:bg-gray-900">
                        <TableHead className="font-semibold">Name</TableHead>
                        <TableHead className="font-semibold">Phone</TableHead>
                        <TableHead className="font-semibold">Email</TableHead>
                        <TableHead className="font-semibold">Requested At</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {esimCallbacks.map((callback, index) => {
                        // Check if this callback is from the last 24 hours
                        const isRecent = new Date(callback.createdAt) > last24Hours;
                        
                        return (
                          <TableRow 
                            key={callback.id} 
                            className={`
                              ${index % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50/50 dark:bg-gray-900/30'} 
                              ${isRecent ? 'relative overflow-hidden' : ''}
                              hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors
                            `}
                          >
                            {isRecent && (
                              <TableCell className="p-0 w-1">
                                <div className="w-1 h-full bg-green-500"></div>
                              </TableCell>
                            )}
                            {!isRecent && <TableCell className="p-0 w-1"></TableCell>}
                            <TableCell className="font-medium">
                              {callback.firstName} {callback.lastName}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Phone className="h-3 w-3 text-purple-500" />
                                <span>{callback.phone}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              {callback.email ? (
                                <div className="flex items-center gap-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                  </svg>
                                  <span>{callback.email}</span>
                                </div>
                              ) : (
                                <span className="text-muted-foreground text-xs italic">No email provided</span>
                              )}
                            </TableCell>
                            <TableCell className="text-xs">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-3 w-3 text-muted-foreground" />
                                {formatDate(callback.createdAt)}
                              </div>
                              {isRecent && (
                                <span className="inline-flex items-center mt-1 px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                  New
                                </span>
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
            <CardFooter className="border-t pt-4 text-sm text-muted-foreground flex justify-between">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>All customer data is encrypted</span>
              </div>
              <div>Total: {esimCallbacks.length} records</div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="iptv-signups" className="space-y-4">
          <Card className="border-t-4 border-t-red-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-red-500" />
                <span>QwickTV Sign-ups</span>
              </CardTitle>
              <CardDescription>
                Detailed information about customers who have signed up for QwickTV IPTV service
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex flex-col justify-center items-center py-12">
                  <RefreshCw className="h-10 w-10 animate-spin text-primary/70 mb-4" />
                  <p className="text-muted-foreground">Loading QwickTV subscriber data...</p>
                </div>
              ) : iptvSignups.length === 0 ? (
                <div className="py-12 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg">
                  <PieChart className="h-12 w-12 text-muted-foreground mb-3 opacity-20" />
                  <p className="text-muted-foreground">No QwickTV sign-ups have been submitted yet.</p>
                  <p className="text-xs text-muted-foreground mt-1">QwickTV sign-ups will appear here when customers subscribe.</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-md border">
                  <Table>
                    <TableCaption className="pb-4 flex items-center justify-between">
                      <span>A list of all {iptvSignups.length} QwickTV subscription sign-ups</span>
                      {iptvSignups.length > 0 && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="ml-auto">
                              <Download className="h-4 w-4 mr-2" />
                              Export Data
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Choose Format</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleExportCSV(iptvSignups, "qwicktv-signups")}>
                              <Download className="h-4 w-4 mr-2" />
                              Export as CSV
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleExportGoogleSheets(iptvSignups, "QwickTV Subscriptions")}>
                              <FileSpreadsheet className="h-4 w-4 mr-2" />
                              Export to Google Sheets
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </TableCaption>
                    <TableHeader>
                      <TableRow className="bg-gray-50 dark:bg-gray-900">
                        <TableHead className="font-semibold">Customer</TableHead>
                        <TableHead className="font-semibold">Contact</TableHead>
                        <TableHead className="font-semibold">Plan</TableHead>
                        <TableHead className="font-semibold">Duration</TableHead>
                        <TableHead className="font-semibold">Payment</TableHead>
                        <TableHead className="font-semibold">Submitted</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {iptvSignups.map((signup, index) => {
                        // Check if this signup is from the last 24 hours
                        const isRecent = new Date(signup.createdAt) > last24Hours;
                        
                        return (
                          <TableRow 
                            key={signup.id} 
                            className={`
                              ${index % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50/50 dark:bg-gray-900/30'} 
                              hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors
                            `}
                          >
                            <TableCell className="p-0 w-1">
                              {isRecent && <div className="w-1 h-full bg-green-500"></div>}
                            </TableCell>
                            <TableCell className="font-medium">
                              {signup.firstName} {signup.lastName}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Phone className="h-3 w-3 text-muted-foreground" />
                                <span>{signup.phone}</span>
                              </div>
                              {signup.email && (
                                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                  <span>{signup.email}</span>
                                </div>
                              )}
                            </TableCell>
                            <TableCell>
                              <Badge variant="default" className="bg-red-500">
                                {signup.planName}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm">
                                {signup.duration}
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className={`
                                px-2 py-1 rounded-sm text-xs font-medium
                                ${signup.paymentType === "subscription" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : ""}
                                ${signup.paymentType === "one-time" ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300" : ""}
                              `}>
                                {signup.paymentType === "subscription" ? "Subscription" : "One-time"}
                              </span>
                            </TableCell>
                            <TableCell className="text-xs">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-3 w-3 text-muted-foreground" />
                                {formatDate(signup.createdAt)}
                              </div>
                              {isRecent && (
                                <span className="inline-flex items-center mt-1 px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                  New
                                </span>
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
            <CardFooter className="border-t pt-4 text-sm text-muted-foreground flex justify-between">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>Data is encrypted and secure</span>
              </div>
              <div>Total: {iptvSignups.length} records</div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Integrations Tab */}
        <TabsContent value="integrations" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {/* IFTTT Integration Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">IFTTT Integration</h2>
              <p className="text-muted-foreground mb-6">
                Configure webhooks to connect Konnectorr with IFTTT (If This Then That) for automating 
                data flows to Google Sheets, notifications, and other services.
              </p>
              <IFTTTConfig />
            </div>
            
            {/* Zapier Integration Section (Legacy) */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Zapier Integration (Legacy)</h2>
              <p className="text-muted-foreground mb-6">
                Legacy Zapier integration settings. We recommend using the IFTTT integration above for new automations.
              </p>
              <ZapierConfig />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}