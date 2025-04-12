import React from "react";
import { Link } from "wouter";
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
          question: "Can I self-install my internet service?",
          answer: "Many providers offer self-installation kits for internet service, which can save you money on installation fees. Self-installation is typically straightforward for cable and DSL internet services. However, fiber optic and satellite installations usually require professional technicians due to their complexity."
        },
        {
          question: "What equipment do I need to provide versus what the provider supplies?",
          answer: "Typically, service providers will supply the main connection equipment (modem, satellite dish, fiber ONT, etc.) either for free or for a monthly rental fee. You may need to provide your own router (though many providers offer combo modem/routers), streaming devices, computers, and TVs. Some providers now allow you to use your own modem/router to avoid rental fees, but compatibility should be confirmed first."
        },
        {
          question: "Do I need to be home for the entire installation?",
          answer: "Yes, an adult (18 or older) needs to be present for the entire installation process. The technician will need access to various areas of your home, may need to make decisions about equipment placement, and will need to demonstrate how the service works before completing the installation."
        },
        {
          question: "What should I do to prepare for my installation appointment?",
          answer: "Clear pathways to areas where equipment will be installed, ensure easy access to cable outlets and the exterior of your home, secure pets away from work areas, make sure someone 18 or older will be home, and have a clear idea of where you want equipment placed. It's also helpful to prepare questions you have about using your new service."
        }
      ]
    },
    {
      id: 2,
      title: "Billing & Payments",
      description: "Understanding your bill and payment options",
      items: [
        {
          question: "Why did my bill increase after my promotional period ended?",
          answer: "Promotional pricing typically lasts for 12-24 months, after which standard rates apply. These standard rates are higher than promotional prices and reflect the regular cost of service. You can contact customer service to inquire about new promotions or loyalty discounts once your initial promotion ends."
        },
        {
          question: "What payment methods do most providers accept?",
          answer: "Most providers accept credit/debit cards, electronic checks (ACH), bank account payments, and paper checks by mail. Many also offer automatic payment options that can sometimes qualify for additional discounts. Some local providers may also accept cash payments at their physical locations."
        },
        {
          question: "Can I combine my TV and internet services on one bill?",
          answer: "Yes, bundling services typically results in a single monthly bill for all services from that provider. This not only simplifies your billing but often comes with cost savings compared to purchasing services separately."
        },
        {
          question: "Are there fees for late payments?",
          answer: "Yes, most providers charge late fees if payment isn't received by the due date. These fees typically range from $5-$15 depending on the provider. Multiple late payments may also result in service interruption and potential reconnection fees."
        },
        {
          question: "What taxes and fees can I expect on my bill?",
          answer: "Common charges include regulatory recovery fees, broadcast TV fees, regional sports fees, equipment rental fees, and various state and local taxes. These can add 10-20% to your advertised rate. When comparing providers, it's important to ask about all additional fees that will appear on your monthly bill."
        }
      ]
    },
    {
      id: 3,
      title: "Technical Support",
      description: "Troubleshooting common issues with your services",
      items: [
        {
          question: "What should I do if my internet connection is slow?",
          answer: "First, try restarting your modem and router by unplugging them for 30 seconds and plugging them back in. Run a speed test at different times of day. Check if the slow speeds occur on all devices or just one. Move closer to your router if using WiFi. If problems persist, contact your provider as there may be signal issues or equipment problems that need addressing."
        },
        {
          question: "Why does my TV picture quality sometimes degrade?",
          answer: "For cable and satellite, picture quality issues are often related to signal strength, which can be affected by weather, physical obstructions, or equipment issues. For streaming services, picture quality varies based on your internet connection speed. In all cases, checking connections, restarting devices, and ensuring equipment is properly ventilated are good first steps."
        },
        {
          question: "How often should I reset my modem/router?",
          answer: "As a preventative measure, resetting your modem and router about once a month can help maintain performance. If you notice connectivity issues, slow speeds, or devices unable to connect to WiFi, a reset should be your first troubleshooting step."
        },
        {
          question: "What is the difference between 2.4GHz and 5GHz WiFi?",
          answer: "The 2.4GHz band offers wider coverage but slower speeds and is more prone to interference from other household devices. The 5GHz band provides faster speeds but shorter range and less ability to penetrate walls. Modern routers offer both, and you should connect devices that need speed and are close to the router to 5GHz, while devices farther away or that don't need high speeds can use 2.4GHz."
        },
        {
          question: "When should I contact technical support versus trying to fix issues myself?",
          answer: "Try basic troubleshooting first: restart equipment, check connections, and verify the problem occurs on multiple devices. If basic steps don't work, if you notice patterns (certain times of day, weather conditions), or if diagnostic lights on your equipment indicate problems, it's time to contact technical support. Most providers also offer troubleshooting guides on their websites and apps."
        }
      ]
    },
    {
      id: 4,
      title: "Moving & Service Transfers",
      description: "How to manage your services when relocating",
      items: [
        {
          question: "How far in advance should I notify my provider about a move?",
          answer: "Ideally, notify your provider 2-4 weeks before your move date. This gives enough time to schedule disconnection at your current address and installation at your new location. It also allows time to check service availability at your new address and make alternative arrangements if your current provider doesn't service that area."
        },
        {
          question: "Will my promotional rate transfer to my new address?",
          answer: "Policies vary by provider. Some will transfer existing promotional rates if you're moving within their service area. Others may require you to sign up for new promotions available at your new address. Always ask specifically about how your move will affect your current rate, contract obligations, and any potential early termination fees."
        },
        {
          question: "Can I take my equipment to my new address?",
          answer: "In most cases, you can take leased equipment (modems, routers, set-top boxes) to your new address if it's within the same provider's service area. Some equipment may need to be exchanged depending on the technology available at your new location. For moves outside your provider's service area, you'll need to return all equipment to avoid fees."
        },
        {
          question: "Is there a fee for transferring service to a new address?",
          answer: "Many providers charge a service transfer or installation fee for setting up service at your new address, typically between $50-$100. However, these fees are often negotiable or may be waived, especially for customers with good payment history or who bundle multiple services."
        },
        {
          question: "What if my current provider doesn't serve my new address?",
          answer: "If moving outside your provider's service area, you'll need to cancel service and potentially pay early termination fees if under contract. Some providers have partnerships allowing them to refer you to alternative services in your new area, potentially with special offers. We can also help you find and compare available providers at your new address."
        }
      ]
    },
    {
      id: 5,
      title: "Service Comparisons",
      description: "Comparing different types of TV and internet technologies",
      items: [
        {
          question: "What's the difference between cable and fiber internet?",
          answer: "Cable internet uses coaxial cable lines to deliver data, offering speeds typically up to 1Gbps download but much slower upload speeds. Fiber internet uses fiber-optic lines to transmit data via light signals, providing symmetrical speeds (same upload and download) up to 10Gbps. Fiber generally offers better reliability, lower latency, and faster upload speeds, but has more limited availability and sometimes higher costs."
        },
        {
          question: "How does streaming TV compare to traditional cable or satellite?",
          answer: "Streaming TV services deliver content over the internet rather than through dedicated cable lines or satellite signals. Advantages include no equipment rental fees, more flexible packages, and the ability to watch on multiple devices. Disadvantages can include reliance on good internet connection, potential for buffering during peak usage times, and sometimes limited local channel availability. Cost savings compared to traditional services vary depending on which and how many streaming services you subscribe to."
        },
        {
          question: "Is satellite internet a good option for rural areas?",
          answer: "Satellite internet is often the only viable option in remote rural areas without access to cable, DSL, or fiber infrastructure. Modern satellite internet can provide download speeds up to 100Mbps. Drawbacks include higher latency (delay), potential weather-related disruptions, and more restrictive data caps compared to wired internet options. New low-Earth orbit satellite services like Starlink offer improved performance but at premium prices."
        },
        {
          question: "What factors should I consider when choosing between different TV providers?",
          answer: "Key considerations include: channel lineup (especially sports and premium channels), equipment fees, DVR capabilities and storage, picture quality (HD/4K availability), contract terms, promotional and regular pricing, bundling options with internet service, app availability for streaming on mobile devices, and user interface/experience. Reliability of service and quality of customer support are also important factors to research."
        },
        {
          question: "How do I determine which internet speed is right for my household?",
          answer: "Consider the number of connected devices, types of online activities, and number of simultaneous users. For basic browsing and email with 1-2 users, 25-50Mbps may suffice. For streaming video on multiple devices, online gaming, or working from home, 100-300Mbps is recommended. Households with many connected devices, 4K streaming on multiple TVs, or professional uploading/downloading may need 500+Mbps. Remember that actual needs depend on your specific usage patterns."
        }
      ]
    }
  ];

  return (
    <main className="bg-gray-50">
      <div className="container py-8 px-4 mx-auto">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="font-medium">Frequently Asked Questions</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about TV and internet services
          </p>
        </header>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faqCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:border-primary/20 transition-all">
                <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <a href={`#category-${category.id}`} className="flex items-center justify-center">
                    <span>View Questions</span>
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {faqCategories.map((category) => (
          <section key={category.id} id={`category-${category.id}`} className="mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-6">
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              <div className="p-6">
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-gray-100 rounded-lg shadow-sm">
                      <AccordionTrigger className="px-4 py-3 text-left font-medium hover:bg-gray-50">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <p className="text-muted-foreground">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        ))}

        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl py-12 px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
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
      </div>
    </main>
  );
};

export default FAQResourcePage;