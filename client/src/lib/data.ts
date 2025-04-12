// TV & Internet Providers
export const providers = [
  {
    id: 1,
    name: "DIRECTV",
    logoIcon: "SiDirectv",
    logoColor: "#00a1e1",
    rating: 4.5,
    description: "330+ channels with 99% signal reliability",
    price: "$49.99/mo",
    link: "#"
  },
  {
    id: 2,
    name: "Xfinity",
    logoIcon: "SiXfinity",
    logoColor: "#f28d00",
    rating: 4.0,
    description: "Fast internet with flexible TV packages",
    price: "$39.99/mo",
    link: "#"
  },
  {
    id: 3,
    name: "Spectrum",
    logoIcon: "SiSpectrum",
    logoColor: "#0076ce",
    rating: 3.5,
    description: "No contracts with free HD and DVR service",
    price: "$44.99/mo",
    link: "#"
  },
  {
    id: 4,
    name: "DISH",
    logoIcon: "SiDish",
    logoColor: "#ec1944",
    rating: 4.0,
    description: "2-year price guarantee with free installation",
    price: "$59.99/mo",
    link: "#"
  },
  {
    id: 5,
    name: "Optimum",
    logoIcon: "SiAlticeusa",
    logoColor: "#D74620",
    rating: 4.2,
    description: "Fast fiber internet and cable TV with no annual contract",
    price: "$39.99/mo",
    link: "#"
  },
  {
    id: 6,
    name: "Earthlink",
    logoIcon: "SiInternetexplorer", // Using closest available icon
    logoColor: "#0078D7",
    rating: 4.3,
    description: "High-speed internet with no data caps",
    price: "$49.95/mo",
    link: "#"
  },
  {
    id: 7,
    name: "Viasat",
    logoIcon: "SiSatellite", // Using conceptual icon
    logoColor: "#0057B8",
    rating: 3.8,
    description: "Satellite internet available virtually anywhere",
    price: "$65.00/mo",
    link: "#"
  },
  {
    id: 8,
    name: "HughesNet",
    logoIcon: "SiSatellite", // Using conceptual icon
    logoColor: "#5e2750",
    rating: 3.7,
    description: "Satellite internet with nationwide coverage",
    price: "$59.99/mo",
    link: "#"
  }
];

// TV & Internet Packages
export const packages = [
  {
    id: 1,
    provider: "DIRECTV",
    providerLogoIcon: "SiDirectv",
    providerLogoColor: "#00a1e1",
    packageName: "Entertainment",
    channels: "160+",
    internetSpeed: "N/A",
    price: "$64.99/mo",
    features: [
      "Free HD included",
      "NFL Sunday Ticket available"
    ],
    link: "#"
  },
  {
    id: 2,
    provider: "Xfinity",
    providerLogoIcon: "SiXfinity",
    providerLogoColor: "#f28d00",
    packageName: "Starter Pro+",
    channels: "140+",
    internetSpeed: "200 Mbps",
    price: "$89.99/mo",
    features: [
      "Free X1 DVR service",
      "Access to Peacock Premium"
    ],
    link: "#"
  },
  {
    id: 3,
    provider: "Spectrum",
    providerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    packageName: "Triple Play Silver",
    channels: "175+",
    internetSpeed: "400 Mbps",
    price: "$109.99/mo",
    features: [
      "No contracts required",
      "Free HD & DVR",
      "Unlimited calling"
    ],
    link: "#"
  },
  {
    id: 4,
    provider: "DISH",
    providerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    packageName: "America's Top 120+",
    channels: "190+",
    internetSpeed: "N/A",
    price: "$69.99/mo",
    features: [
      "2-year price guarantee",
      "Free Hopper Duo DVR",
      "Smart HD DVR included"
    ],
    link: "#"
  },
  {
    id: 5,
    provider: "Cox",
    providerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    packageName: "Contour TV Preferred",
    channels: "140+",
    internetSpeed: "150 Mbps",
    price: "$99.99/mo",
    features: [
      "Voice Remote included",
      "On Demand library",
      "Stream on multiple devices"
    ],
    link: "#"
  },
  {
    id: 6,
    provider: "AT&T TV",
    providerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    packageName: "Choice",
    channels: "185+",
    internetSpeed: "N/A",
    price: "$84.99/mo",
    features: [
      "Regional Sports Networks",
      "HBO Max included for 1 year",
      "Access to 40,000+ On Demand titles"
    ],
    link: "#"
  },
  {
    id: 7,
    provider: "Optimum",
    providerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    packageName: "Core Internet & TV",
    channels: "220+",
    internetSpeed: "300 Mbps",
    price: "$79.99/mo",
    features: [
      "No annual contract required",
      "Free installation",
      "Smart WiFi included"
    ],
    link: "#"
  },
  {
    id: 8,
    provider: "Optimum",
    providerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    packageName: "Optimum Fiber Internet 1 Gig",
    channels: "N/A",
    internetSpeed: "1 Gig (940 Mbps)",
    price: "$59.99/mo",
    features: [
      "Unlimited data",
      "Free installation with select packages",
      "No annual contract"
    ],
    link: "#"
  },
  {
    id: 9,
    provider: "Earthlink",
    providerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    packageName: "HyperLink Internet",
    channels: "N/A",
    internetSpeed: "1 Gbps",
    price: "$59.95/mo",
    features: [
      "Unlimited data",
      "No throttling",
      "Free installation"
    ],
    link: "#"
  },
  {
    id: 10,
    provider: "Earthlink",
    providerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    packageName: "Standard Internet",
    channels: "N/A",
    internetSpeed: "100 Mbps",
    price: "$39.95/mo",
    features: [
      "Unlimited data",
      "Free equipment",
      "No contracts"
    ],
    link: "#"
  },
  {
    id: 11,
    provider: "Viasat",
    providerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    packageName: "Unlimited Silver 25",
    channels: "N/A",
    internetSpeed: "25 Mbps",
    price: "$65.00/mo",
    features: [
      "60 GB priority data",
      "Video streaming at DVD quality",
      "Nationwide coverage"
    ],
    link: "#"
  },
  {
    id: 12,
    provider: "Viasat",
    providerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    packageName: "Unlimited Gold 50",
    channels: "N/A",
    internetSpeed: "50 Mbps",
    price: "$100.00/mo",
    features: [
      "100 GB priority data",
      "HD video streaming",
      "Nationwide coverage"
    ],
    link: "#"
  },
  {
    id: 13,
    provider: "HughesNet",
    providerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    packageName: "HughesNet Gen5 20GB",
    channels: "N/A",
    internetSpeed: "25 Mbps",
    price: "$59.99/mo",
    features: [
      "20 GB data per month",
      "Built-in WiFi",
      "Available nationwide"
    ],
    link: "#"
  },
  {
    id: 14,
    provider: "HughesNet",
    providerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    packageName: "HughesNet Gen5 50GB",
    channels: "N/A",
    internetSpeed: "25 Mbps",
    price: "$99.99/mo",
    features: [
      "50 GB data per month",
      "Built-in WiFi",
      "No hard data limits"
    ],
    link: "#"
  }
];

// Streaming Services
export const streamingServices = [
  {
    id: 1,
    name: "Netflix",
    logoIcon: "SiNetflix",
    logoColor: "#E50914",
    price: "From $9.99/mo",
    link: "#"
  },
  {
    id: 2,
    name: "Hulu",
    logoIcon: "SiHulu",
    logoColor: "#1CE783",
    price: "From $6.99/mo",
    link: "#"
  },
  {
    id: 3,
    name: "Disney+",
    logoIcon: "SiDisneyplus",
    logoColor: "#0063E5",
    price: "From $7.99/mo",
    link: "#"
  },
  {
    id: 4,
    name: "HBO Max",
    logoIcon: "SiHbo",
    logoColor: "#5822B4",
    price: "From $14.99/mo",
    link: "#"
  },
  {
    id: 5,
    name: "Amazon Prime Video",
    logoIcon: "SiPrimevideo",
    logoColor: "#00A8E1",
    price: "From $8.99/mo",
    link: "#"
  },
  {
    id: 6,
    name: "Apple TV+",
    logoIcon: "SiAppletv",
    logoColor: "#000000",
    price: "From $6.99/mo",
    link: "#"
  }
];

// Streaming Devices
export const streamingDevices = [
  {
    id: 1,
    name: "Roku Streaming Stick+",
    logoIcon: "SiRoku",
    logoColor: "#662D91",
    description: "4K HDR streaming with voice remote",
    price: "$49.99",
    link: "#"
  },
  {
    id: 2,
    name: "Amazon Fire TV Stick 4K",
    logoIcon: "SiAmazonfiretvstick",
    logoColor: "#FF9900",
    description: "Alexa Voice Remote included",
    price: "$39.99",
    link: "#"
  },
  {
    id: 3,
    name: "Apple TV 4K",
    logoIcon: "SiAppletv",
    logoColor: "#A2AAAD",
    description: "Dolby Vision and Dolby Atmos support",
    price: "$179.99",
    link: "#"
  },
  {
    id: 4,
    name: "Google Chromecast with Google TV",
    logoIcon: "SiGoogletv",
    logoColor: "#4285F4",
    description: "Voice remote with Google Assistant",
    price: "$49.99",
    link: "#"
  },
  {
    id: 5,
    name: "NVIDIA Shield TV Pro",
    logoIcon: "SiNvidia",
    logoColor: "#76B900",
    description: "Advanced AI upscaling for 4K content",
    price: "$199.99",
    link: "#"
  }
];

// FAQ Items
export const faqItems = [
  {
    id: 1,
    question: "How do I choose the right TV package?",
    answer: "To choose the right TV package, consider these factors: the number of channels you want, specific networks or shows you can't miss, your budget, contract requirements, and additional features like DVR service. Compare multiple providers in your area to find the best value for your viewing habits."
  },
  {
    id: 2,
    question: "What internet speed do I need?",
    answer: "The internet speed you need depends on your household usage. For basic browsing and email, 25 Mbps is sufficient. For HD streaming on multiple devices, aim for 50-100 Mbps. If you have many connected devices, work from home, or are a gamer, consider 200+ Mbps. Large households with heavy streaming and gaming needs might require 500+ Mbps."
  },
  {
    id: 3,
    question: "Is it cheaper to bundle TV and internet services?",
    answer: "Yes, bundling TV and internet typically saves money compared to purchasing services separately. Providers offer bundle discounts of 10-30% off the individual service prices. Bundles often include additional perks like free installation, premium channels, or upgraded equipment. However, always compare the total cost against your specific needs to ensure you're not paying for unwanted services."
  },
  {
    id: 4,
    question: "What's the difference between cable and satellite TV?",
    answer: "Cable TV is delivered through wired connections and is typically more reliable in adverse weather but has limited availability based on infrastructure. Satellite TV uses dish receivers to capture signals from satellites and is available virtually anywhere with a clear view of the southern sky but may experience interruptions during severe weather. Satellite often offers more channels and better HD options, while cable may provide better bundling options with internet service."
  },
  {
    id: 5,
    question: "Can I use streaming services instead of traditional TV?",
    answer: "Yes, many consumers are \"cutting the cord\" and using streaming services instead of traditional TV. Services like YouTube TV, Hulu + Live TV, and Sling TV offer live channels similar to cable packages. Other platforms like Netflix, Amazon Prime Video, and Disney+ offer on-demand content. To switch completely, you'll need a reliable internet connection (at least 25 Mbps) and a streaming device such as a smart TV, Roku, or Apple TV. Consider that subscribing to multiple streaming services can sometimes add up to a cost similar to a cable package."
  },
  {
    id: 6,
    question: "What is Optimum Fiber Internet and how does it differ from cable internet?",
    answer: "Optimum Fiber Internet delivers internet service via fiber-optic lines, which use light signals through glass or plastic cables. This technology provides faster speeds, more reliable connections, and symmetrical upload and download speeds up to 1 Gig (940 Mbps). Compared to traditional cable internet, fiber offers lower latency, greater bandwidth, and better performance during peak usage times. Optimum Fiber plans typically come with unlimited data, smart WiFi capabilities, and no annual contracts, making them ideal for heavy internet users, gamers, and households with multiple streaming devices."
  },
  {
    id: 7,
    question: "How does Earthlink Internet compare to other providers?",
    answer: "Earthlink Internet stands out for its commitment to no data caps on any plans and strong customer privacy policies. Their HyperLink service offers fiber speeds up to 1 Gbps in select areas, while their standard service is available more widely through partnerships with other infrastructure providers. Unlike many competitors, Earthlink typically offers fixed pricing without sudden increases after promotional periods, and they don't require annual contracts on most plans. Their service particularly excels for customers who prioritize consistent pricing and unlimited data usage."
  },
  {
    id: 8,
    question: "What are the advantages and disadvantages of satellite internet like Viasat and HughesNet?",
    answer: "Satellite internet's main advantage is availability—it can reach virtually any location with a clear view of the southern sky, making it crucial for rural areas without cable or fiber infrastructure. Providers like Viasat and HughesNet offer speeds from 25-100 Mbps depending on the plan. The disadvantages include higher latency (signal delay) which can affect online gaming and video calls, data limitations with most plans that can result in slower speeds after reaching monthly thresholds, and potential weather-related disruptions. Satellite internet typically costs more per Mbps than cable or fiber options, but remains an essential connectivity solution for areas where other options don't exist."
  },
  {
    id: 9,
    question: "What's the difference between Viasat and HughesNet satellite internet?",
    answer: "Viasat and HughesNet are the two major satellite internet providers in the US, but they differ in several ways. Viasat generally offers higher maximum speeds (up to 100 Mbps in some areas compared to HughesNet's consistent 25 Mbps across all plans). HughesNet structures their plans around data allowances (10-50 GB) while maintaining the same speed, whereas Viasat varies both speed and data allowances by plan. Viasat typically provides more peak-time data before throttling speeds, but HughesNet offers a unique 'Bonus Zone' with 50 GB of additional data during off-peak hours (2am-8am). Pricing varies by location, but Viasat's higher-tier plans tend to be more expensive, while offering better video streaming quality for heavy users."
  }
];

// Blog Posts
export const blogPosts = [
  {
    id: 1,
    title: "Cable vs. Streaming: Which is Right for You in 2023?",
    date: "October 15, 2023",
    summary: "Compare the pros and cons of traditional cable services against modern streaming platforms to find your best option.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    link: "#"
  },
  {
    id: 2,
    title: "Ultimate Guide to Internet Speeds: How Much Do You Really Need?",
    date: "October 10, 2023",
    summary: "Learn about different internet speeds, what activities require more bandwidth, and how to determine the right speed for your household.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    link: "#"
  },
  {
    id: 3,
    title: "5 Must-Have Streaming Devices for Your Home Entertainment Setup",
    date: "October 5, 2023",
    summary: "Discover the top streaming devices that will transform your viewing experience with advanced features and compatibility.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    link: "#"
  },
  {
    id: 4,
    title: "Optimum Fiber vs. Cable: Is Upgrading to Fiber Worth It?",
    date: "March 18, 2023",
    summary: "Explore the differences between Optimum's fiber and cable internet options, and find out if the upgrade to fiber is right for your home.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    link: "#"
  },
  {
    id: 5,
    title: "Satellite Internet in Rural Areas: Viasat vs. HughesNet Compared",
    date: "October 18, 2023",
    summary: "For rural homes without access to fiber or cable, we compare the two leading satellite internet providers to help you make an informed choice.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    link: "#"
  },
  {
    id: 6,
    title: "Why Earthlink is Making a Comeback in the ISP Market",
    date: "October 1, 2023",
    summary: "Learn how this veteran internet service provider is reinventing itself with customer-friendly policies and competitive high-speed options.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    link: "#"
  },
  {
    id: 7,
    title: "Internet Options for Remote Workers: From Fiber to Satellite",
    date: "September 25, 2023",
    summary: "Working remotely requires reliable internet. We compare options from high-speed fiber providers like Earthlink to satellite services like Viasat and HughesNet for every location.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder SVG
    link: "#"
  }
];

// Feature Items
export const features = [
  {
    id: 1,
    icon: "search",
    title: "Easy Comparison",
    description: "Compare dozens of TV and internet providers to find the best service for your needs."
  },
  {
    id: 2,
    icon: "tags",
    title: "Exclusive Deals",
    description: "Access special promotions and discounts not available elsewhere."
  },
  {
    id: 3,
    icon: "user-friends",
    title: "Expert Support",
    description: "Our TV and internet experts are available to help you choose the right package."
  },
  {
    id: 4,
    icon: "map-marker-alt",
    title: "Local Availability",
    description: "Find providers and packages available specifically in your area."
  },
  {
    id: 5,
    icon: "star",
    title: "Trusted Reviews",
    description: "Read honest reviews and ratings from real customers like you."
  },
  {
    id: 6,
    icon: "dollar-sign",
    title: "No Extra Costs",
    description: "Our service is 100% free to use with no hidden fees or charges."
  }
];
