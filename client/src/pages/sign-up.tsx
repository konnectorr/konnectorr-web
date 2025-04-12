import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

// Form schema with validation
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  address: z.string().min(5, { message: "Service address is required." }),
  city: z.string().min(2, { message: "City is required." }),
  state: z.string().min(2, { message: "State is required." }),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, { message: "Please enter a valid ZIP code (e.g. 12345 or 12345-6789)" }),
  phone: z.string().regex(/^\d{10}$/, { message: "Please enter a 10-digit phone number without spaces or dashes." }),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal("")),
  speedRequirement: z.string({ required_error: "Please select a speed requirement." }),
  preferredProvider: z.string().optional().or(z.literal("")),
  // Allow arrays for these fields, backend will handle conversion
  additionalEquipment: z.array(z.string()).default([]),
  streamingServices: z.array(z.string()).default([]),
  installationPreference: z.string({ required_error: "Please select an installation preference." }),
  specialRequests: z.string().optional().or(z.literal("")),
  contactConsent: z.boolean().refine((val) => val === true, { message: "You must agree to be contacted." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function SignUpPage() {
  // Initialize the form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
      email: "",
      speedRequirement: "",
      preferredProvider: "",
      additionalEquipment: [],
      streamingServices: [],
      installationPreference: "standard",
      specialRequests: "",
      contactConsent: false,
    },
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    try {
      // Log the form data being submitted for debugging
      console.log('Submitting form data:', data);
      
      // Submit directly to our API - the schema validation will handle the array conversion
      const response = await fetch('/api/service-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      console.log('Response status:', response.status);
      
      const result = await response.json();
      console.log('Response data:', result);
      
      if (result.success) {
        toast({
          title: "Sign-up information submitted!",
          description: "A representative will contact you shortly to discuss your options.",
        });
        form.reset();
      } else {
        // Handle validation errors
        console.error('Form submission validation errors:', result.errors || result.details);
        
        toast({
          title: "Error submitting form",
          description: result.message || "Please check your information and try again.",
          variant: "destructive",
        });
        
        if (result.errors || result.details) {
          // Show more detailed error to help debugging
          toast({
            title: "Validation errors",
            description: "Please check the console for detailed errors.",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your information. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-[#f9fafc] py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Sign Up for New Service</h1>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below to get started with your new TV or internet service.
          </p>

          <Card className="shadow-md border-0">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
              <CardTitle className="text-2xl">Customer Information</CardTitle>
              <CardDescription>
                Tell us about yourself so we can provide the best service options for your needs.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Address*</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City*</FormLabel>
                            <FormControl>
                              <Input placeholder="Anytown" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State*</FormLabel>
                            <FormControl>
                              <Input placeholder="NY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ZIP Code*</FormLabel>
                            <FormControl>
                              <Input placeholder="12345" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number*</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="1234567890" {...field} />
                            </FormControl>
                            <FormDescription>
                              Enter your 10-digit phone number without spaces or dashes.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address (Optional)</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Service Preferences Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Service Preferences</h3>

                    <FormField
                      control={form.control}
                      name="speedRequirement"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Internet Speed Requirements*</FormLabel>
                          <FormControl>
                            <RadioGroup 
                              onValueChange={field.onChange} 
                              value={field.value}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            >
                              <div 
                                className={`flex flex-col items-start space-x-0 space-y-1 bg-white p-4 rounded-lg border ${field.value === "basic" ? "border-primary" : "border-gray-200"} hover:border-primary/50 cursor-pointer`}
                                onClick={() => field.onChange("basic")}
                              >
                                <FormItem>
                                  <FormControl>
                                    <RadioGroupItem value="basic" checked={field.value === "basic"} />
                                  </FormControl>
                                  <div className={`transition-colors rounded-lg p-2 w-full ${field.value === "basic" ? "bg-primary/10" : ""}`}>
                                    <FormLabel className="font-bold text-base cursor-pointer">Basic (25-100 Mbps)</FormLabel>
                                    <FormDescription className="text-xs">
                                      Email, web browsing, and SD video streaming for 1-2 devices
                                    </FormDescription>
                                  </div>
                                </FormItem>
                              </div>

                              <div 
                                className={`flex flex-col items-start space-x-0 space-y-1 bg-white p-4 rounded-lg border ${field.value === "standard" ? "border-primary" : "border-gray-200"} hover:border-primary/50 cursor-pointer`}
                                onClick={() => field.onChange("standard")}
                              >
                                <FormItem>
                                  <FormControl>
                                    <RadioGroupItem value="standard" checked={field.value === "standard"} />
                                  </FormControl>
                                  <div className={`transition-colors rounded-lg p-2 w-full ${field.value === "standard" ? "bg-primary/10" : ""}`}>
                                    <FormLabel className="font-bold text-base cursor-pointer">Standard (100-300 Mbps)</FormLabel>
                                    <FormDescription className="text-xs">
                                      HD streaming, gaming, and video calls for 3-5 devices
                                    </FormDescription>
                                  </div>
                                </FormItem>
                              </div>

                              <div 
                                className={`flex flex-col items-start space-x-0 space-y-1 bg-white p-4 rounded-lg border ${field.value === "premium" ? "border-primary" : "border-gray-200"} hover:border-primary/50 cursor-pointer`}
                                onClick={() => field.onChange("premium")}
                              >
                                <FormItem>
                                  <FormControl>
                                    <RadioGroupItem value="premium" checked={field.value === "premium"} />
                                  </FormControl>
                                  <div className={`transition-colors rounded-lg p-2 w-full ${field.value === "premium" ? "bg-primary/10" : ""}`}>
                                    <FormLabel className="font-bold text-base cursor-pointer">Premium (500+ Mbps)</FormLabel>
                                    <FormDescription className="text-xs">
                                      4K streaming, competitive gaming, work from home for 5+ devices
                                    </FormDescription>
                                  </div>
                                </FormItem>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredProvider"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Provider (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a preferred provider" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="optimum">Optimum</SelectItem>
                              <SelectItem value="spectrum">Spectrum</SelectItem>
                              <SelectItem value="directv">DIRECTV</SelectItem>
                              <SelectItem value="dish">DISH</SelectItem>
                              <SelectItem value="xfinity">Xfinity</SelectItem>
                              <SelectItem value="earthlink">Earthlink</SelectItem>
                              <SelectItem value="viasat">Viasat</SelectItem>
                              <SelectItem value="hughesnet">HughesNet</SelectItem>
                              <SelectItem value="not_sure">Not sure - help me choose</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            If you already know which provider you prefer, select it here.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="additionalEquipment"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel className="text-base">Additional Equipment Needed</FormLabel>
                            <FormDescription>
                              Select any additional equipment you might need.
                            </FormDescription>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <FormField
                              control={form.control}
                              name="additionalEquipment"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes('wifi_router')}
                                        onCheckedChange={(checked) => {
                                          const values = field.value || [];
                                          return checked
                                            ? field.onChange([...values, 'wifi_router'])
                                            : field.onChange(
                                                values.filter((value) => value !== 'wifi_router')
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      WiFi Router
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                            <FormField
                              control={form.control}
                              name="additionalEquipment"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes('mesh_wifi')}
                                        onCheckedChange={(checked) => {
                                          const values = field.value || [];
                                          return checked
                                            ? field.onChange([...values, 'mesh_wifi'])
                                            : field.onChange(
                                                values.filter((value) => value !== 'mesh_wifi')
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      Mesh WiFi System
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                            <FormField
                              control={form.control}
                              name="additionalEquipment"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes('tv_box')}
                                        onCheckedChange={(checked) => {
                                          const values = field.value || [];
                                          return checked
                                            ? field.onChange([...values, 'tv_box'])
                                            : field.onChange(
                                                values.filter((value) => value !== 'tv_box')
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      TV Box/Receiver
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                            <FormField
                              control={form.control}
                              name="additionalEquipment"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes('dvr')}
                                        onCheckedChange={(checked) => {
                                          const values = field.value || [];
                                          return checked
                                            ? field.onChange([...values, 'dvr'])
                                            : field.onChange(
                                                values.filter((value) => value !== 'dvr')
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      DVR
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="streamingServices"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel className="text-base">Streaming Services Interest</FormLabel>
                            <FormDescription>
                              Select any streaming services you're interested in.
                            </FormDescription>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <FormField
                              control={form.control}
                              name="streamingServices"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes('netflix')}
                                        onCheckedChange={(checked) => {
                                          const values = field.value || [];
                                          return checked
                                            ? field.onChange([...values, 'netflix'])
                                            : field.onChange(
                                                values.filter((value) => value !== 'netflix')
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      Netflix
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                            <FormField
                              control={form.control}
                              name="streamingServices"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes('hulu')}
                                        onCheckedChange={(checked) => {
                                          const values = field.value || [];
                                          return checked
                                            ? field.onChange([...values, 'hulu'])
                                            : field.onChange(
                                                values.filter((value) => value !== 'hulu')
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      Hulu
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                            <FormField
                              control={form.control}
                              name="streamingServices"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes('disney')}
                                        onCheckedChange={(checked) => {
                                          const values = field.value || [];
                                          return checked
                                            ? field.onChange([...values, 'disney'])
                                            : field.onChange(
                                                values.filter((value) => value !== 'disney')
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      Disney+
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                            <FormField
                              control={form.control}
                              name="streamingServices"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes('hbo')}
                                        onCheckedChange={(checked) => {
                                          const values = field.value || [];
                                          return checked
                                            ? field.onChange([...values, 'hbo'])
                                            : field.onChange(
                                                values.filter((value) => value !== 'hbo')
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      HBO Max
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                            <FormField
                              control={form.control}
                              name="streamingServices"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes('qwicktv')}
                                        onCheckedChange={(checked) => {
                                          const values = field.value || [];
                                          return checked
                                            ? field.onChange([...values, 'qwicktv'])
                                            : field.onChange(
                                                values.filter((value) => value !== 'qwicktv')
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      QwickTV
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="installationPreference"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Installation Preference*</FormLabel>
                          <FormControl>
                            <RadioGroup 
                              onValueChange={field.onChange} 
                              value={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <div 
                                className="flex items-center space-x-3 space-y-0 cursor-pointer"
                                onClick={() => field.onChange("standard")}
                              >
                                <FormItem>
                                  <FormControl>
                                    <RadioGroupItem value="standard" checked={field.value === "standard"} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Standard Installation (3-5 business days)
                                  </FormLabel>
                                </FormItem>
                              </div>
                              <div 
                                className="flex items-center space-x-3 space-y-0 cursor-pointer"
                                onClick={() => field.onChange("express")}
                              >
                                <FormItem>
                                  <FormControl>
                                    <RadioGroupItem value="express" checked={field.value === "express"} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Express Installation (1-2 business days, additional fees may apply)
                                  </FormLabel>
                                </FormItem>
                              </div>
                              <div 
                                className="flex items-center space-x-3 space-y-0 cursor-pointer"
                                onClick={() => field.onChange("self")}
                              >
                                <FormItem>
                                  <FormControl>
                                    <RadioGroupItem value="self" checked={field.value === "self"} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Self-Installation (equipment shipped to you)
                                  </FormLabel>
                                </FormItem>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="specialRequests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requests or Comments (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Let us know if you have any special requirements or questions."
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Separator />

                  {/* Consent Section */}
                  <FormField
                    control={form.control}
                    name="contactConsent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="cursor-pointer">
                            I consent to be contacted by TelecomXpertz and its partners regarding my service request.*
                          </FormLabel>
                          <FormDescription>
                            We'll use your information to provide the services you've requested and to contact you about offers that may interest you.
                          </FormDescription>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col sm:flex-row items-center justify-between pt-4">
                    <p className="text-sm text-gray-500 mb-4 sm:mb-0">* Required fields</p>
                    <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                      Submit Request <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>

            <CardFooter className="bg-gray-50 border-t flex flex-col sm:flex-row items-center justify-center p-6 text-center gap-2">
              <p className="text-sm text-gray-600">
                Need help? Call us at <a href="tel:8887886930" className="text-primary font-medium">888-788-6930</a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}