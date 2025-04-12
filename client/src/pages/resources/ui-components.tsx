import React from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  InteractiveCard, 
  HoverEffectCard, 
  FlipCard,
  GlassCard,
  PulsingCard
} from "@/components/ui/interactive-card";
import { InteractiveButton, AnimatedButton } from "@/components/ui/interactive-button";
import { 
  ChevronRight, 
  Phone, 
  Tv,
  Wifi,
  Info,
  Layers,
  ArrowRight,
  Sparkles,
  ThumbsUp,
  Zap,
  Download,
  ExternalLink,
  MousePointerClick,
  Palette
} from "lucide-react";

const UIComponentsPage: React.FC = () => {
  return (
    <PageLayout>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
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
                    <BreadcrumbLink className="text-white font-medium">Interactive UI Components</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Interactive UI Components
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Explore our enhanced UI components with animations and interactive effects
              </p>
            </div>
          </div>
        </section>
        
        {/* Components Demo Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="cards" className="space-y-8">
              <div className="flex justify-center mb-4">
                <TabsList className="bg-gray-100 dark:bg-gray-800">
                  <TabsTrigger value="cards" className="flex items-center gap-2">
                    <Layers className="h-4 w-4" />
                    <span>Interactive Cards</span>
                  </TabsTrigger>
                  <TabsTrigger value="buttons" className="flex items-center gap-2">
                    <MousePointerClick className="h-4 w-4" />
                    <span>Interactive Buttons</span>
                  </TabsTrigger>
                  <TabsTrigger value="glass" className="flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    <span>Glassmorphism</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Interactive Cards */}
              <TabsContent value="cards" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Regular card with hover effects */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Hover Scale Effect</p>
                    <InteractiveCard hoverEffect="scale" className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Wifi className="h-5 w-5 text-primary" />
                          Fiber Internet
                        </CardTitle>
                        <CardDescription>
                          Ultra-fast fiber optic internet connection
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">
                          Enjoy speeds up to 1 Gbps with our premium fiber optic internet service.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Learn More</Button>
                      </CardFooter>
                    </InteractiveCard>
                  </div>
                  
                  {/* Card with lift effect */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Hover Lift Effect</p>
                    <InteractiveCard hoverEffect="lift" className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Tv className="h-5 w-5 text-primary" />
                          Premium TV
                        </CardTitle>
                        <CardDescription>
                          Access to 200+ live channels
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">
                          Get access to premium channels, on-demand content, and 4K quality.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">View Packages</Button>
                      </CardFooter>
                    </InteractiveCard>
                  </div>
                  
                  {/* Card with glow effect */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Hover Glow Effect</p>
                    <InteractiveCard hoverEffect="glow" className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Phone className="h-5 w-5 text-primary" />
                          Mobile Service
                        </CardTitle>
                        <CardDescription>
                          Nationwide coverage with 5G
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">
                          Unlimited data, calls, and texts with our premium mobile service plans.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Explore Plans</Button>
                      </CardFooter>
                    </InteractiveCard>
                  </div>
                  
                  {/* Hover Effect Card (Before/After) */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Hover Content Reveal</p>
                    <HoverEffectCard 
                      transitionType="fade"
                      hoverContent={
                        <div className="text-center">
                          <h3 className="font-bold text-xl mb-2">Special Offer!</h3>
                          <p className="mb-4">Get 3 months free when you bundle services</p>
                          <Button variant="outline" className="bg-white/20 border-white hover:bg-white/30">
                            View Deal
                          </Button>
                        </div>
                      }
                    >
                      <Card className="h-full">
                        <CardHeader>
                          <CardTitle>Bundle & Save</CardTitle>
                          <CardDescription>
                            Combine services for the best value
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 dark:text-gray-300">
                            Our bundles offer significant savings compared to individual services.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <p className="text-sm text-muted-foreground">Hover to see special offer</p>
                        </CardFooter>
                      </Card>
                    </HoverEffectCard>
                  </div>
                  
                  {/* Flip Card */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Flip Card (Click to Flip)</p>
                    <div className="h-64">
                      <FlipCard
                        frontContent={
                          <Card className="h-full flex flex-col">
                            <CardHeader>
                              <CardTitle className="flex items-center justify-center">
                                <Info className="mr-2 h-5 w-5 text-primary" />
                                Service Comparison
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex items-center justify-center">
                              <p className="text-center text-gray-600 dark:text-gray-300">
                                Click to compare our internet service options
                              </p>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                              <p className="text-xs text-gray-500">Click to flip</p>
                            </CardFooter>
                          </Card>
                        }
                        backContent={
                          <Card className="h-full">
                            <CardHeader>
                              <CardTitle className="text-center">Service Comparison</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="flex justify-between">
                                <span>Fiber</span>
                                <span className="font-bold">Up to 1 Gbps</span>
                              </div>
                              <Separator />
                              <div className="flex justify-between">
                                <span>Cable</span>
                                <span className="font-bold">Up to 500 Mbps</span>
                              </div>
                              <Separator />
                              <div className="flex justify-between">
                                <span>DSL</span>
                                <span className="font-bold">Up to 100 Mbps</span>
                              </div>
                            </CardContent>
                          </Card>
                        }
                      />
                    </div>
                  </div>
                  
                  {/* Pulsing Card */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pulsing Attention Card</p>
                    <PulsingCard pulseColor="primary" pulseIntensity="medium" pulseSpeed="medium">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-primary" />
                          Featured Deal
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xl font-bold text-center mb-2">$89.99/mo</p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Wifi className="h-4 w-4 text-primary" />
                            <span>Fiber Internet 500 Mbps</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Tv className="h-4 w-4 text-primary" />
                            <span>Premium TV (150+ channels)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>Unlimited Phone</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Get This Deal</Button>
                      </CardFooter>
                    </PulsingCard>
                  </div>
                </div>
              </TabsContent>
              
              {/* Interactive Buttons */}
              <TabsContent value="buttons" className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Standard interactive buttons */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Hover & Press Effects</CardTitle>
                      <CardDescription>
                        Buttons with hover scale and press animations
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Scale on Hover + Press Effect</p>
                        <div className="flex flex-wrap gap-4">
                          <InteractiveButton hoverScale pressEffect>
                            Default Button
                          </InteractiveButton>
                          <InteractiveButton variant="secondary" hoverScale pressEffect>
                            Secondary
                          </InteractiveButton>
                          <InteractiveButton variant="outline" hoverScale pressEffect>
                            Outline
                          </InteractiveButton>
                          <InteractiveButton variant="destructive" hoverScale pressEffect>
                            Destructive
                          </InteractiveButton>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Ripple Effect</p>
                        <div className="flex flex-wrap gap-4">
                          <InteractiveButton ripple>
                            Ripple Effect
                          </InteractiveButton>
                          <InteractiveButton variant="secondary" ripple>
                            With Ripple
                          </InteractiveButton>
                          <InteractiveButton variant="outline" ripple>
                            Click Me
                          </InteractiveButton>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Custom Variants</p>
                        <div className="flex flex-wrap gap-4">
                          <InteractiveButton variant="glow" ripple>
                            <Sparkles className="mr-2 h-4 w-4" />
                            Glow Button
                          </InteractiveButton>
                          <InteractiveButton variant="gradient" ripple>
                            <Zap className="mr-2 h-4 w-4" />
                            Gradient
                          </InteractiveButton>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Animated buttons with state transitions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Animated State Buttons</CardTitle>
                      <CardDescription>
                        Buttons with loading and success state animations
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Slide Animation</p>
                        <div className="flex flex-wrap gap-4">
                          <AnimatedButton 
                            onClick={() => new Promise(resolve => setTimeout(resolve, 1500))}
                            loadingText="Processing..."
                            successText="Success!"
                            icon={<Download className="h-4 w-4" />}
                            iconPosition="left"
                            animationType="slide"
                          >
                            Download
                          </AnimatedButton>
                          
                          <AnimatedButton 
                            variant="secondary"
                            onClick={() => new Promise(resolve => setTimeout(resolve, 1500))}
                            loadingText="Saving..."
                            successText="Saved!"
                            icon={<ThumbsUp className="h-4 w-4" />}
                            iconPosition="right"
                            animationType="slide"
                          >
                            Save Changes
                          </AnimatedButton>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fade Animation</p>
                        <div className="flex flex-wrap gap-4">
                          <AnimatedButton 
                            variant="outline"
                            onClick={() => new Promise(resolve => setTimeout(resolve, 1500))}
                            loadingText="Connecting..."
                            successText="Connected!"
                            icon={<ExternalLink className="h-4 w-4" />}
                            animationType="fade"
                          >
                            Connect
                          </AnimatedButton>
                          
                          <AnimatedButton 
                            variant="destructive"
                            onClick={() => new Promise(resolve => setTimeout(resolve, 1500))}
                            loadingText="Submitting..."
                            successText="Submitted!"
                            animationType="fade"
                          >
                            Submit
                          </AnimatedButton>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Scale Animation</p>
                        <div className="flex flex-wrap gap-4">
                          <AnimatedButton 
                            variant="glow"
                            onClick={() => new Promise(resolve => setTimeout(resolve, 1500))}
                            loadingText="Loading..."
                            successText="Ready!"
                            icon={<ArrowRight className="h-4 w-4" />}
                            iconPosition="right"
                            animationType="scale"
                          >
                            Get Started
                          </AnimatedButton>
                          
                          <AnimatedButton 
                            variant="gradient"
                            onClick={() => new Promise(resolve => setTimeout(resolve, 1500))}
                            loadingText="Please wait..."
                            successText="Confirmed!"
                            animationType="scale"
                          >
                            Confirm
                          </AnimatedButton>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Glassmorphism UI */}
              <TabsContent value="glass" className="space-y-6">
                <div className="relative py-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/images/network-pattern.svg')] opacity-10"></div>
                    <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-40 h-40 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-10 left-1/2 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                  </div>
                  
                  <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                    {/* Glass Card 1 */}
                    <GlassCard className="p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-white mb-3">Fiber Internet</h3>
                      <p className="text-white/80 mb-4">
                        Ultra-fast fiber optic connections with symmetrical upload and download speeds.
                      </p>
                      <div className="bg-white/20 rounded-lg p-3 mb-4">
                        <p className="text-white font-bold text-center text-2xl">1 Gbps</p>
                        <p className="text-white/70 text-center text-sm">Download Speed</p>
                      </div>
                      <Button variant="outline" className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20">
                        Learn More
                      </Button>
                    </GlassCard>
                    
                    {/* Glass Card 2 */}
                    <GlassCard className="p-6 rounded-xl backdrop-blur-lg bg-white/20">
                      <div className="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">Premium TV</h3>
                      <p className="text-white/80 mb-4">
                        Access to 200+ channels including premium sports, movies, and entertainment.
                      </p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center text-white/90 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                          4K Ultra HD Quality
                        </li>
                        <li className="flex items-center text-white/90 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                          Cloud DVR Included
                        </li>
                        <li className="flex items-center text-white/90 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                          On-Demand Library
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20">
                        View Packages
                      </Button>
                    </GlassCard>
                    
                    {/* Glass Card 3 */}
                    <GlassCard className="p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-white mb-3">Mobile Service</h3>
                      <p className="text-white/80 mb-4">
                        Nationwide coverage with 5G access and unlimited data plans.
                      </p>
                      <div className="bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-lg p-4 mb-4">
                        <p className="text-white font-bold mb-1">Unlimited Everything</p>
                        <p className="text-white/70 text-sm">Data, Talk & Text</p>
                        <p className="text-white/90 text-lg font-bold mt-2">$39.99/mo</p>
                      </div>
                      <Button variant="outline" className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20">
                        Explore Plans
                      </Button>
                    </GlassCard>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default UIComponentsPage;