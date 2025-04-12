import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/layout/page-layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight, Phone, HelpCircle } from "lucide-react";

const FAQResourcePage: React.FC = () => {
  // FAQ categories with questions and answers
  const faqCategories = [
    {
      id: 1,
      title: "Installation & Setup",
      description: "Everything you need to know about setting up your TV and internet services",
      items: [
        {
          question: "How long does professional installation typically take?",
          answer: "Professional installation usually takes 2-3 hours depending on the complexity of your setup. This includes installing equipment, running necessary cables, activating your service, and demonstrating how to use the equipment. For more complex installations (multiple TVs, whole-home networking), it may take up to 4-5 hours."
        },
        {
          question: "Can I install my internet service myself?",
          answer: "Many providers now offer self-installation kits for internet service. These kits include step-by-step instructions, necessary equipment (modem, router, cables), and access to online or phone support. Self-installation works best if your home is already wired for the service type and you're comfortable with basic technology setup. However, some service types like fiber may still require professional installation."
        },
        {
          question: "What equipment do I need to provide versus what the provider supplies?",
          answer: "Typically, service providers supply the main connection equipment (cable boxes, satellite dishes, modems). You generally need to provide TVs, computers, and internal networking equipment like mesh WiFi systems (though many providers now offer these for rent or purchase). Some providers charge monthly rental fees for their equipment, while others include it in the service price. You may have the option to purchase your own modem/router to avoid rental fees with some providers."
        }
      ]
    },
    {
      id: 2,
      title: "Billing & Contracts",
      description: "Information about billing cycles, contracts, and service agreements",
      items: [
        {
          question: "Are there early termination fees if I cancel my service?",
          answer: "Most providers with term contracts charge early termination fees (ETFs) if you cancel before your commitment period ends. These typically range from $10-$20 per month remaining on your contract, with maximum fees between $120 and $480 depending on the provider. Some providers like Spectrum and Optimum offer no-contract options, while others may waive ETFs in certain circumstances (moving to an area they don't service, significant service issues, etc.)."
        },
        {
          question: "Why did my bill increase after the promotional period?",
          answer: "Promotional pricing typically lasts 12-24 months, after which rates increase to the standard pricing. This increase can range from $20 to $60+ per month depending on your package. To avoid surprise increases, ask your provider about both promotional and standard rates when signing up. When your promotion ends, you can often negotiate a new promotional rate by calling customer retention or exploring other providers' offers."
        },
        {
          question: "How can I reduce my monthly bill?",
          answer: "To reduce your monthly bill: 1) Review your usage and downgrade to a smaller package if possible, 2) Purchase your own equipment instead of renting, 3) Look for bundle discounts by combining services, 4) Ask about loyalty discounts or retention offers, 5) Remove premium channels or features you don't use regularly, 6) Check if you qualify for low-income or senior discount programs, 7) Consider switching providers if better promotions are available."
        }
      ]
    },
    {
      id: 3,
      title: "Troubleshooting",
      description: "Common issues and how to resolve them",
      items: [
        {
          question: "What should I do if my internet connection is slow?",
          answer: "If your internet is slow: 1) Restart your modem and router, 2) Check your speed using a reliable speed test and compare to what you're paying for, 3) Connect directly to your modem with an ethernet cable to see if it's a WiFi issue, 4) Check for interference sources (other electronics, neighboring networks), 5) Position your router centrally and away from obstructions, 6) Update router firmware and device drivers, 7) Contact your provider if speeds remain significantly below what you're paying for."
        },
        {
          question: "My TV says 'No Signal' or 'Not Authorized' - how do I fix this?",
          answer: "For 'No Signal' or 'Not Authorized' errors: 1) Verify all cables are securely connected, 2) Check that your TV is on the correct input source, 3) Restart your cable/satellite box by unplugging for 30 seconds, 4) Check for service outages by calling your provider or checking their app/website, 5) Verify your account is in good standing (no missed payments), 6) Try resetting your box through the provider's app or website, 7) If problems persist, contact technical support as you may need a signal refresh sent to your equipment or hardware replacement."
        },
        {
          question: "Why does my WiFi work in some rooms but not others?",
          answer: "WiFi dead zones are typically caused by: 1) Distance from the router, 2) Physical obstructions like walls, especially those containing metal, concrete, or brick, 3) Interference from other electronics or neighboring networks. Solutions include: 1) Relocating your router to a central location, 2) Adding WiFi extenders, mesh systems, or access points, 3) Switching to a dual-band or tri-band router and using the 5GHz band for less interference, 4) Upgrading to a more powerful router with better range, 5) Using wired connections in problem areas if possible."
        }
      ]
    }
  ];

  return (
    <PageLayout>
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
                    <BreadcrumbLink className="text-white font-medium">FAQ & Guides</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions & Guides
              </h1>
              <p className="text-white/90 mb-2">
                Find answers to common questions about TV, internet, and streaming services. Our comprehensive FAQs cover everything from installation to troubleshooting.
              </p>
              <p className="text-white/90">
                Have a specific question? Call <a href="tel:8887886930" className="font-semibold text-white underline hover:text-white/80">888-788-6930</a> for immediate assistance.
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQ Categories Section */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            {faqCategories.map((category) => (
              <div key={category.id} className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="h-8 w-8 text-primary" />
                  <div>
                    <h2 className="text-2xl font-bold text-dark">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${category.id}-${index}`}
                      className="border border-gray-light rounded-md overflow-hidden"
                    >
                      <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left bg-light hover:bg-gray-50 font-medium text-dark focus:outline-none transition-colors">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="p-4 bg-white">
                        <p className="text-gray-600">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-8">
                Our TV and internet experts are ready to answer any questions you might have about choosing the right services for your needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-secondary">
                  <a href="tel:8887886930" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Us: 888-788-6930
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  <Link href="/resources" className="flex items-center gap-2">
                    Explore More Resources
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default FAQResourcePage;