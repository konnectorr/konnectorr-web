import React from "react";
import { Link } from "wouter";
import { 
  Tv, 
  Globe, 
  Tv2, 
  Zap, 
  Globe2,
  ShieldCheck,
  Award,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const IPTVPage: React.FC = () => {
  const services = [
    {
      id: "qwicktv",
      name: "QwickTV",
      description: "Our premium IPTV service with 8,000+ channels from around the world, HD & 4K quality streaming, and flexible subscription options.",
      icon: <Tv className="w-8 h-8 text-primary" />,
      badge: "POPULAR",
      featured: true,
      link: "/iptv/qwicktv"
    },
    {
      id: "cable-alternative",
      name: "Cable Alternative",
      description: "Looking to cut the cord? Our IPTV solutions offer a perfect alternative to traditional cable at a fraction of the cost.",
      icon: <Tv2 className="w-8 h-8 text-primary" />,
      badge: null,
      featured: false,
      link: "/iptv/qwicktv"
    },
    {
      id: "international",
      name: "International TV",
      description: "Access channels from 50+ countries without satellite dishes or extra equipment. Perfect for international viewers.",
      icon: <Globe2 className="w-8 h-8 text-primary" />,
      badge: null,
      featured: false,
      link: "/iptv/qwicktv"
    },
    {
      id: "business",
      name: "Business Solutions",
      description: "Custom IPTV solutions for hotels, restaurants, offices, and other commercial establishments with dedicated support.",
      icon: <Award className="w-8 h-8 text-primary" />,
      badge: "ENTERPRISE",
      featured: false,
      link: "/iptv/qwicktv"
    }
  ];

  const features = [
    {
      title: "Extensive Channel Selection",
      description: "Access to 8,000+ live TV channels from around the world, including premium sports, movies, news, and more.",
      icon: <Tv className="w-6 h-6 text-primary" />
    },
    {
      title: "HD & 4K Streaming",
      description: "Enjoy crystal clear picture quality with HD, Full HD, and 4K content on compatible devices.",
      icon: <Zap className="w-6 h-6 text-primary" />
    },
    {
      title: "Multi-Device Support",
      description: "Watch on Smart TVs, phones, tablets, computers, and streaming devices with seamless switching.",
      icon: <Tv2 className="w-6 h-6 text-primary" />
    },
    {
      title: "Global Coverage",
      description: "Content from 50+ countries and regions around the world, with multiple language options.",
      icon: <Globe className="w-6 h-6 text-primary" />
    },
    {
      title: "Secure & Legal",
      description: "Fully legal service with end-to-end encryption for complete privacy and security.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Premium IPTV Services by Konnectorr
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Stream thousands of channels from around the world with our cutting-edge IPTV solutions. Unlimited entertainment, anywhere, anytime.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/iptv/qwicktv">
                Explore QwickTV
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Compare Plans
            </Button>
          </div>
        </div>
        <div className="bg-muted rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <Badge className="mb-2">FEATURED</Badge>
                <h2 className="text-2xl font-bold">QwickTV Premium</h2>
                <p className="text-muted-foreground">Our flagship IPTV service</p>
              </div>
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold">
                $39.99/mo
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <Tv className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>8,000+ live TV channels worldwide</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>HD, 4K & HDR quality streaming</span>
              </li>
              <li className="flex items-start gap-2">
                <Tv2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>5 devices simultaneously</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Premium sports & movie packages</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>24/7 VIP customer support</span>
              </li>
            </ul>
            <Button className="w-full" asChild>
              <Link href="/iptv/qwicktv">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Our IPTV Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of IPTV solutions to meet your entertainment needs, whether you're looking for personal viewing or business solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className={`${service.featured ? 'border-primary shadow-md' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  {service.icon}
                  {service.badge && (
                    <Badge variant={service.badge === "ENTERPRISE" ? "outline" : "default"}>
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-4">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant={service.featured ? "default" : "outline"} className="w-full" asChild>
                  <Link href={service.link}>
                    <span className="flex items-center justify-center gap-2">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-muted py-12 px-6 rounded-2xl mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Why Choose Our IPTV Services?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Konnectorr provides the most reliable and feature-rich IPTV experience in the market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="bg-primary/10 rounded-full p-3 h-fit">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Television?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Join thousands of satisfied customers who have upgraded their TV experience with our premium IPTV services.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/iptv/qwicktv">
              Get Started with QwickTV
            </Link>
          </Button>
          <Button size="lg" variant="outline">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IPTVPage;