import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Wifi, Globe, Smartphone, Check, MapPin } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface EsimCallbackFormProps {
  buttonText?: string;
  buttonClassName?: string;
  buttonSize?: "default" | "sm" | "lg" | "icon";
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const EsimCallbackForm: React.FC<EsimCallbackFormProps> = ({ 
  buttonText = "Get Your eSIM Today", 
  buttonClassName = "",
  buttonSize = "lg",
  buttonVariant = "default"
}) => {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      // Submit the data to our API
      const response = await fetch('/api/esim-callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Request Submitted",
          description: "We've received your request. Our team will contact you shortly to help with your eSIM order.",
        });
        
        setOpen(false);
        form.reset();
      } else {
        // Handle validation errors
        toast({
          title: "Error Submitting Request",
          description: result.message || "Please check your information and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting eSIM callback request:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={buttonSize} variant={buttonVariant} className={buttonClassName}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden bg-gradient-to-br from-indigo-50 to-white border-blue-200">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Mobile top banner - visible only on mobile */}
          <div className="block md:hidden w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white p-4">
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 flex-shrink-0" />
              <div>
                <h3 className="text-base font-bold">Global Connectivity</h3>
                <p className="text-xs text-blue-100">Access data in 190+ countries</p>
              </div>
            </div>
          </div>
          
          {/* Left side - colored sidebar with benefits - hidden on mobile */}
          <div className="hidden md:block md:col-span-2 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white p-6">
            <motion.div 
              className="h-full flex flex-col"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <motion.div variants={fadeIn} className="mb-8">
                <Globe className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold mb-2">Global Connectivity</h3>
                <p className="text-sm text-blue-100">Access data in 190+ countries</p>
              </motion.div>
              
              <motion.ul className="space-y-3 flex-1">
                <motion.li variants={fadeIn} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Instant digital delivery</span>
                </motion.li>
                <motion.li variants={fadeIn} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">No physical SIM needed</span>
                </motion.li>
                <motion.li variants={fadeIn} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Custom plans for your needs</span>
                </motion.li>
                <motion.li variants={fadeIn} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">24/7 customer support</span>
                </motion.li>
              </motion.ul>
              
              <motion.div variants={fadeIn} className="mt-auto">
                <div className="pt-4 border-t border-blue-400/30">
                  <p className="text-xs text-blue-200 italic">
                    "The perfect solution for travelers who need reliable connectivity without the hassle of physical SIMs."
                  </p>
                  <p className="text-sm font-medium mt-2">— TechTravel Magazine</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Mobile benefits strip - visible only on small screens */}
          <div className="block md:hidden w-full py-2 px-4">
            <div className="flex justify-between overflow-x-auto pb-2 gap-3 snap-x">
              <div className="flex items-start gap-1 min-w-[140px] snap-start">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-blue-800">Instant digital delivery</span>
              </div>
              <div className="flex items-start gap-1 min-w-[140px] snap-start">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-blue-800">No physical SIM needed</span>
              </div>
            </div>
          </div>
          
          {/* Right side - form content */}
          <div className="md:col-span-3 p-4 md:p-6">
            <DialogHeader className="mb-4 md:mb-6">
              <DialogTitle className="text-xl md:text-2xl font-bold text-blue-950">Request Your eSIM</DialogTitle>
              <DialogDescription className="text-blue-700 text-sm md:text-base">
                Complete the form below for a personalized eSIM solution
              </DialogDescription>
            </DialogHeader>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-800">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John" 
                            className="border-blue-200 focus-visible:ring-blue-500" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-800">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Doe" 
                            className="border-blue-200 focus-visible:ring-blue-500"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-800">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="(888) 555-1234" 
                          className="border-blue-200 focus-visible:ring-blue-500"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-800">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john.doe@example.com" 
                          className="border-blue-200 focus-visible:ring-blue-500"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                
                <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between items-center pt-4 mt-4 border-t border-blue-100">
                  <p className="text-xs text-blue-600 md:order-1">Your information is secure and will not be shared</p>
                  
                  <div className="flex gap-2 w-full md:w-auto md:order-2">
                    <DialogClose asChild>
                      <Button type="button" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex-1 md:flex-initial"
                    >
                      <Smartphone className="h-4 w-4 mr-2" />
                      Get My eSIM
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EsimCallbackForm;