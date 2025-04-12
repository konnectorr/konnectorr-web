import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, CheckCircle, RefreshCw, Send } from "lucide-react";
import { toast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Switch } from "@/components/ui/switch";

interface IFTTTConfigState {
  serviceSignupWebhook?: string;
  esimCallbackWebhook?: string;
  iptvSignupWebhook?: string;
}

export default function IFTTTConfig() {
  const [config, setConfig] = useState<IFTTTConfigState>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSendingTest, setIsSendingTest] = useState(false);
  const [daysBack, setDaysBack] = useState(7);
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  // Load current config when component mounts
  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    setIsLoading(true);
    try {
      const response = await apiRequest('GET', '/api/ifttt/config');
      const data = await response.json();
      
      if (data && typeof data === 'object' && 'success' in data && 'config' in data) {
        setConfig(data.config as IFTTTConfigState);
      }
    } catch (error) {
      console.error('Error loading IFTTT configuration:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load IFTTT configuration",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveConfig = async () => {
    setIsSaving(true);
    try {
      const response = await apiRequest('POST', '/api/ifttt/config', config);
      const data = await response.json();
      
      if (data && typeof data === 'object' && 'success' in data) {
        toast({
          title: "Success",
          description: data.message || "IFTTT configuration updated",
        });
      }
    } catch (error) {
      console.error('Error saving IFTTT configuration:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save IFTTT configuration",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const sendRecentToIFTTT = async () => {
    setIsSendingTest(true);
    try {
      const response = await apiRequest('POST', '/api/ifttt/send-recent', { daysBack });
      const data = await response.json();
      
      if (data && typeof data === 'object' && 'success' in data && 'result' in data) {
        const result = data.result;
        if (result) {
          toast({
            title: "Success",
            description: `Sent to IFTTT: ${result.serviceSignups} service signups, ${result.esimCallbacks} eSIM callbacks, ${result.iptvSignups} IPTV signups`,
          });
        }
      }
    } catch (error) {
      console.error('Error sending test notifications:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send test notifications",
      });
    } finally {
      setIsSendingTest(false);
    }
  };

  const handleConfigChange = (field: keyof IFTTTConfigState, value: string) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">IFTTT Integration</CardTitle>
        <CardDescription>
          Configure webhooks to send customer submissions to IFTTT
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="webhooks">
          <TabsList className="mb-4">
            <TabsTrigger value="webhooks">Webhook Configuration</TabsTrigger>
            <TabsTrigger value="test">Testing & History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="webhooks">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="serviceSignupWebhook">Service Signup Webhook URL</Label>
                <Input 
                  id="serviceSignupWebhook"
                  placeholder="https://maker.ifttt.com/trigger/new_service_signup/with/key/..."
                  value={config.serviceSignupWebhook || ''}
                  onChange={(e) => handleConfigChange('serviceSignupWebhook', e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  IFTTT will be notified when a new service signup is submitted
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="esimCallbackWebhook">eSIM Callback Webhook URL</Label>
                <Input 
                  id="esimCallbackWebhook"
                  placeholder="https://maker.ifttt.com/trigger/new_esim_callback/with/key/..."
                  value={config.esimCallbackWebhook || ''}
                  onChange={(e) => handleConfigChange('esimCallbackWebhook', e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  IFTTT will be notified when a new eSIM callback request is received
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="iptvSignupWebhook">QwickTV Signup Webhook URL</Label>
                <Input 
                  id="iptvSignupWebhook"
                  placeholder="https://maker.ifttt.com/trigger/new_iptv_signup/with/key/..."
                  value={config.iptvSignupWebhook || ''}
                  onChange={(e) => handleConfigChange('iptvSignupWebhook', e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  IFTTT will be notified when a new QwickTV signup is submitted
                </p>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Switch
                  id="advanced-mode"
                  checked={showAdvanced}
                  onCheckedChange={setShowAdvanced}
                />
                <Label htmlFor="advanced-mode">Show Advanced Options</Label>
              </div>
              
              {showAdvanced && (
                <div className="pt-2 space-y-4">
                  <Separator />
                  <p className="text-sm font-medium">
                    Advanced Settings
                  </p>
                  <p className="text-sm text-muted-foreground">
                    These settings are for developer use only. The webhook secret is used to validate 
                    incoming requests from IFTTT and is set in the environment variables.
                  </p>
                  <div className="p-4 rounded-md bg-amber-50 border border-amber-200 dark:bg-amber-950 dark:border-amber-900">
                    <h4 className="text-sm font-medium text-amber-800 dark:text-amber-400 mb-2">IFTTT Webhook Setup Instructions</h4>
                    <ol className="list-decimal pl-5 text-sm text-amber-700 dark:text-amber-300 space-y-1">
                      <li>Create a new applet in IFTTT</li>
                      <li>For the trigger ("If This"), choose the "Webhooks" service and select "Receive a web request"</li>
                      <li>Name your event (e.g., "new_service_signup", "new_esim_callback", or "new_iptv_signup")</li>
                      <li>For the action ("Then That"), choose Google Sheets or your preferred destination</li>
                      <li>Configure the action to use the data from the webhook (typically available as Value1)</li>
                      <li>Complete the applet setup and copy the webhook URL into the appropriate field above</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="test">
            <div className="space-y-4">
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 sm:items-end">
                <div className="space-y-2 flex-grow">
                  <Label htmlFor="daysBack">Send Recent Submissions (days back)</Label>
                  <Input 
                    id="daysBack"
                    type="number"
                    min="1"
                    max="30"
                    value={daysBack}
                    onChange={(e) => setDaysBack(parseInt(e.target.value, 10))}
                  />
                </div>
                <Button 
                  onClick={sendRecentToIFTTT} 
                  disabled={isSendingTest}
                  className="min-w-[120px]"
                >
                  {isSendingTest ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send
                    </>
                  )}
                </Button>
              </div>
              
              <div className="pt-2">
                <p className="text-sm text-muted-foreground">
                  This will send all customer submissions from the past {daysBack} days to IFTTT.
                  Use this to test your IFTTT integration or to resend notifications that may have been missed.
                </p>
              </div>
              
              <div className="flex items-center p-4 my-4 rounded-md bg-primary/10">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                <p className="text-sm">
                  Make sure you've set up your IFTTT webhooks above before sending test notifications.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={loadConfig}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </>
          )}
        </Button>
        <Button
          onClick={saveConfig}
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Save Configuration
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}