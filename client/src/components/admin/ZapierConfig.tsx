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

interface ZapierConfigState {
  serviceSignupWebhook?: string;
  esimCallbackWebhook?: string;
  iptvSignupWebhook?: string;
}

export default function ZapierConfig() {
  const [config, setConfig] = useState<ZapierConfigState>({});
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
      const response = await apiRequest('GET', '/api/zapier/config');
      const data = await response.json();
      
      if (data && typeof data === 'object' && 'success' in data && 'config' in data) {
        setConfig(data.config as ZapierConfigState);
      }
    } catch (error) {
      console.error('Error loading Zapier configuration:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load Zapier configuration",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveConfig = async () => {
    setIsSaving(true);
    try {
      const response = await apiRequest('POST', '/api/zapier/config', config);
      const data = await response.json();
      
      if (data && typeof data === 'object' && 'success' in data) {
        toast({
          title: "Success",
          description: data.message || "Zapier configuration updated",
        });
      }
    } catch (error) {
      console.error('Error saving Zapier configuration:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save Zapier configuration",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const sendRecentToZapier = async () => {
    setIsSendingTest(true);
    try {
      const response = await apiRequest('POST', '/api/zapier/send-recent', { daysBack });
      const data = await response.json();
      
      if (data && typeof data === 'object' && 'success' in data && 'result' in data) {
        const result = data.result;
        if (result) {
          toast({
            title: "Success",
            description: `Sent to Zapier: ${result.serviceSignups} service signups, ${result.esimCallbacks} eSIM callbacks, ${result.iptvSignups} IPTV signups`,
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

  const handleConfigChange = (field: keyof ZapierConfigState, value: string) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Zapier Integration</CardTitle>
        <CardDescription>
          Configure webhooks to send customer submissions to Zapier
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
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  value={config.serviceSignupWebhook || ''}
                  onChange={(e) => handleConfigChange('serviceSignupWebhook', e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Zapier will be notified when a new service signup is submitted
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="esimCallbackWebhook">eSIM Callback Webhook URL</Label>
                <Input 
                  id="esimCallbackWebhook"
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  value={config.esimCallbackWebhook || ''}
                  onChange={(e) => handleConfigChange('esimCallbackWebhook', e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Zapier will be notified when a new eSIM callback request is received
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="iptvSignupWebhook">QwickTV Signup Webhook URL</Label>
                <Input 
                  id="iptvSignupWebhook"
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  value={config.iptvSignupWebhook || ''}
                  onChange={(e) => handleConfigChange('iptvSignupWebhook', e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Zapier will be notified when a new QwickTV signup is submitted
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
                    incoming requests from Zapier and is set in the environment variables.
                  </p>
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
                  onClick={sendRecentToZapier} 
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
                  This will send all customer submissions from the past {daysBack} days to Zapier.
                  Use this to test your Zapier integration or to resend notifications that may have been missed.
                </p>
              </div>
              
              <div className="flex items-center p-4 my-4 rounded-md bg-primary/10">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                <p className="text-sm">
                  Make sure you've set up your Zapier webhooks above before sending test notifications.
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