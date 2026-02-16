export type ProjectStack = "laravel" | "wordpress";

export interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  imageUrl: string;
  tags?: string[];
  /** Override for Laravel/WordPress tab; if not set, derived from role */
  stack?: ProjectStack;
  // Detailed project information
  fullDescription?: string;
  scope?: string[];
  techStack?: string[];
  features?: string[];
  duration?: string;
  role?: string;
  category?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "vadu",
    title: "VADU",
    description: "Connecting General Contractors with top-rated Sub-Contractors.",
    liveUrl: "https://vadu.io/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://vadu.io/",
    tags: ["Marketplace", "Laravel", "Contractors"],
    stack: "laravel",
    fullDescription: "VADU bridges trust between General Contractors and Sub-Contractors, providing transparency for both parties. A marketplace for services, top-rated professionals, and trending services—built to end fake reviews and help people find the right contractor.",
    scope: [
      "Marketplace platform development",
      "Service categories and listings",
      "Sub-contractor onboarding and profiles",
      "Search and discovery",
      "Multi-language support (English, Spanish)"
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS"],
    features: [
      "Top-rated sub-contractors of the month",
      "Service categories and trending services",
      "Contractor search and discovery",
      "Professional and customer FAQs",
      "User accounts and authentication"
    ],
    duration: "Ongoing",
    role: "Full Stack Developer",
    category: "Marketplace",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://vadu.io/",
      "https://image.thum.io/get/width/600/crop/800/https://vadu.io/"
    ]
  },
  {
    id: "outriderx",
    title: "OutriderX",
    description: "High-performance marketing platform.",
    liveUrl: "https://outriderx.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://outriderx.com/",
    tags: ["Marketing", "Platform"],
    fullDescription: "OutriderX is a cutting-edge marketing platform designed to help businesses scale their digital presence. Built with modern web technologies, it offers seamless user experience and powerful analytics.",
    scope: [
      "Full-stack web application development",
      "Responsive design for all devices",
      "SEO optimization and performance tuning",
      "Integration with third-party marketing tools",
      "Analytics dashboard implementation"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    features: [
      "Real-time analytics dashboard",
      "Campaign management system",
      "Multi-channel marketing automation",
      "Custom reporting tools",
      "Team collaboration features"
    ],
    duration: "3 months",
    role: "Full Stack Developer",
    category: "Marketing Platform",
    stack: "wordpress",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://outriderx.com/",
      "https://image.thum.io/get/width/600/crop/800/https://outriderx.com/"
    ]
  },
  {
    id: "hqpt",
    title: "HQPT",
    description: "Premium fitness and training connection.",
    liveUrl: "https://hqpt.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://hqpt.com/",
    tags: ["Health", "Fitness"],
    fullDescription: "HQPT connects fitness enthusiasts with professional trainers, offering personalized training programs and nutrition guidance. The platform streamlines the entire fitness journey from goal setting to achievement tracking.",
    scope: [
      "User authentication and profile management",
      "Trainer-client matching algorithm",
      "Workout and nutrition plan creation",
      "Progress tracking and analytics",
      "Payment gateway integration"
    ],
    features: [
      "Personalized workout plans",
      "Video call integration for virtual training",
      "Progress tracking with charts",
      "Nutrition calculator and meal planning",
      "Booking and scheduling system"
    ],
    duration: "4 months",
    role: "Lead Web Developer",
    category: "Fitness & Health",
    stack: "wordpress",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://hqpt.com/",
      "https://image.thum.io/get/width/600/crop/800/https://hqpt.com/"
    ]
  },
  {
    id: "themindfulc",
    title: "The Mindful C",
    description: "Mindfulness and coaching platform.",
    liveUrl: "https://themindfulc.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://themindfulc.com/",
    tags: ["Coaching", "Wellness"],
    fullDescription: "A comprehensive mindfulness and life coaching platform that helps users achieve mental clarity and personal growth through guided sessions, meditation, and one-on-one coaching.",
    scope: [
      "Content management system for courses",
      "Live session booking and management",
      "User progress tracking",
      "Community forum development",
      "Mobile-responsive design"
    ],
    features: [
      "Guided meditation library",
      "Live coaching sessions",
      "Progress journals and reflections",
      "Community discussion forums",
      "Personalized coaching programs"
    ],
    duration: "2 months",
    role: "WordPress Developer",
    category: "Wellness & Coaching",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://themindfulc.com/",
      "https://image.thum.io/get/width/600/crop/800/https://themindfulc.com/"
    ]
  },
  {
    id: "refreshlifepro",
    title: "Refresh Life Pro",
    description: "Interactive lifestyle management tool.",
    liveUrl: "https://refreshlifepro.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://refreshlifepro.com/",
    tags: ["Lifestyle", "Web App"],
    fullDescription: "Refresh Life Pro is an all-in-one lifestyle management platform helping users organize their daily routines, set goals, and maintain work-life balance through smart scheduling and habit tracking.",
    scope: [
      "Goal setting and tracking system",
      "Habit formation tools",
      "Calendar integration",
      "Reminder and notification system",
      "Data visualization and insights"
    ],
    features: [
      "Smart goal tracking",
      "Habit streaks and reminders",
      "Calendar sync (Google, Outlook)",
      "Weekly/monthly insights",
      "Customizable dashboards"
    ],
    duration: "3 months",
    role: "Full Stack Developer",
    category: "Productivity",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://refreshlifepro.com/",
      "https://image.thum.io/get/width/600/crop/800/https://refreshlifepro.com/"
    ]
  },
  {
    id: "lampo",
    title: "Lampo Shop",
    description: "E-commerce solution for lighting.",
    liveUrl: "https://en.lamposhop.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://en.lamposhop.com/",
    tags: ["E-commerce", "Lighting"],
    fullDescription: "Lampo Shop is a premium e-commerce platform specializing in designer lighting solutions. Features include advanced product filtering, 3D product previews, and seamless checkout experience.",
    scope: [
      "E-commerce platform development",
      "Product catalog with advanced filters",
      "Shopping cart and checkout flow",
      "Payment gateway integration",
      "Inventory management system"
    ],
    features: [
      "Advanced product search and filters",
      "Wishlist and favorites",
      "Multi-currency support",
      "Customer reviews and ratings",
      "Order tracking system"
    ],
    duration: "2 months",
    role: "Shopify Developer",
    category: "E-commerce",
    stack: "wordpress",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://en.lamposhop.com/",
      "https://image.thum.io/get/width/600/crop/800/https://en.lamposhop.com/"
    ]
  },
  {
    id: "timeless",
    title: "Timeless Touch Ceramics",
    description: "Artisan ceramics showcase and store.",
    liveUrl: "https://www.timelesstouchceramics.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://www.timelesstouchceramics.com/",
    tags: ["Art", "Store"],
    fullDescription: "An elegant online gallery and store for handcrafted ceramic art pieces. The platform beautifully showcases artisan work while providing a smooth purchasing experience.",
    scope: [
      "Portfolio gallery design",
      "E-commerce functionality",
      "Artist story and about pages",
      "Custom product pages",
      "Blog integration"
    ],
    features: [
      "Beautiful product galleries",
      "Custom product variations",
      "Artist biography section",
      "Blog for ceramic techniques",
      "Secure checkout with multiple payment options"
    ],
    duration: "1.5 months",
    role: "WordPress & WooCommerce Developer",
    category: "E-commerce & Art",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://www.timelesstouchceramics.com/",
      "https://image.thum.io/get/width/600/crop/800/https://www.timelesstouchceramics.com/"
    ]
  },
  {
    id: "anphie",
    title: "Anphie Jewels",
    description: "Luxury jewelry brand website.",
    liveUrl: "https://anphiejewels.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://anphiejewels.com/",
    tags: ["Luxury", "Fashion"],
    fullDescription: "Anphie Jewels is a luxury jewelry e-commerce platform featuring high-end collections with stunning visuals, detailed product information, and premium user experience.",
    scope: [
      "Luxury brand website design",
      "High-resolution image galleries",
      "Product customization options",
      "Secure payment processing",
      "Customer account management"
    ],
    features: [
      "360° product views",
      "Virtual try-on feature",
      "Gift wrapping options",
      "Personalization services",
      "VIP customer portal"
    ],
    duration: "3 months",
    role: "Shopify Plus Developer",
    category: "Luxury E-commerce",
    stack: "wordpress",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://anphiejewels.com/",
      "https://image.thum.io/get/width/600/crop/800/https://anphiejewels.com/"
    ]
  },
  {
    id: "rightways",
    title: "Rightways",
    description: "Corporate consulting and strategy.",
    liveUrl: "https://rightways.com/",
    imageUrl: "/images/right-ways-imge.png",
    tags: ["Corporate", "Strategies"],
    fullDescription: "Rightways is a corporate consulting firm's website showcasing their services, case studies, and thought leadership in business strategy and organizational development.",
    scope: [
      "Corporate website development",
      "Service pages and case studies",
      "Team member profiles",
      "Contact and inquiry forms",
      "Blog and resources section"
    ],
    features: [
      "Service portfolio showcase",
      "Client testimonials",
      "Case study library",
      "Team directory",
      "Resource center with whitepapers"
    ],
    duration: "2 months",
    role: "WordPress Developer",
    category: "Corporate Website",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://rightways.com/",
      "https://image.thum.io/get/width/600/crop/800/https://rightways.com/"
    ]
  },
  {
    id: "taxformhero",
    title: "Tax Form Hero",
    description: "Automated tax form processing.",
    liveUrl: "https://taxformhero.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://taxformhero.com/",
    tags: ["Finance", "SaaS"],
    fullDescription: "Tax Form Hero automates the complex process of tax form generation and filing, making tax season stress-free for individuals and small businesses.",
    scope: [
      "Tax form automation system",
      "User data security and encryption",
      "PDF generation and e-filing",
      "Payment processing",
      "Customer support portal"
    ],
    features: [
      "Automated form filling",
      "Tax calculation engine",
      "E-filing integration",
      "Document storage and retrieval",
      "Multi-year tax history"
    ],
    duration: "5 months",
    role: "Full Stack Developer",
    category: "FinTech SaaS",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://taxformhero.com/",
      "https://image.thum.io/get/width/600/crop/800/https://taxformhero.com/"
    ]
  },
  {
    id: "khebrati",
    title: "Khebrati",
    description: "Professional expertise sharing platform.",
    liveUrl: "https://khebrati.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://khebrati.com/",
    tags: ["Education", "LMS"],
    fullDescription: "Khebrati connects professionals with learners, enabling knowledge sharing through courses, mentorship programs, and interactive workshops.",
    scope: [
      "Learning management system",
      "Course creation tools",
      "Video streaming integration",
      "Payment and subscription system",
      "Student progress tracking"
    ],
    features: [
      "Course marketplace",
      "Live video sessions",
      "Quizzes and assessments",
      "Certificates of completion",
      "Discussion forums"
    ],
    duration: "4 months",
    role: "Lead Developer",
    category: "EdTech Platform",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://khebrati.com/",
      "https://image.thum.io/get/width/600/crop/800/https://khebrati.com/"
    ]
  },
  {
    id: "vara",
    title: "Vara Corp",
    description: "Enterprise corporate solutions.",
    liveUrl: "https://www.vara-corp.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://www.vara-corp.com/",
    tags: ["Enterprise", "Solutions"],
    fullDescription: "Vara Corp provides enterprise-level corporate solutions with a focus on digital transformation and business process optimization.",
    scope: [
      "Enterprise website development",
      "Multi-language support",
      "Service catalog",
      "Client portal",
      "Resource library"
    ],
    features: [
      "Multi-language website",
      "Service request system",
      "Client testimonials",
      "News and updates blog",
      "Contact management"
    ],
    duration: "2.5 months",
    role: "WordPress Developer",
    category: "Enterprise Website",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://www.vara-corp.com/",
      "https://image.thum.io/get/width/600/crop/800/https://www.vara-corp.com/"
    ]
  },
  {
    id: "xaigent",
    title: "Xaigent",
    description: "AI-driven business intelligence.",
    liveUrl: "https://xaigent.net/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://xaigent.net/",
    tags: ["AI", "Analytics"],
    fullDescription: "Xaigent leverages artificial intelligence to provide businesses with actionable insights, predictive analytics, and automated decision-making tools.",
    scope: [
      "AI dashboard development",
      "Data visualization",
      "API integrations",
      "Real-time analytics",
      "Machine learning model integration"
    ],
    features: [
      "Predictive analytics dashboard",
      "Custom AI models",
      "Real-time data processing",
      "Automated reporting",
      "API for third-party integrations"
    ],
    duration: "6 months",
    role: "Full Stack Developer",
    category: "AI & Analytics",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://xaigent.net/",
      "https://image.thum.io/get/width/600/crop/800/https://xaigent.net/"
    ]
  },
  {
    id: "dokanat",
    title: "Dokanat",
    description: "Online marketplace platform.",
    liveUrl: "https://www.dokanat.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://www.dokanat.com/",
    tags: ["Marketplace", "Store"],
    fullDescription: "Dokanat is a comprehensive online marketplace connecting buyers and sellers across multiple categories with secure transactions and reliable delivery.",
    scope: [
      "Multi-vendor marketplace development",
      "Vendor dashboard",
      "Product listing and management",
      "Order processing system",
      "Review and rating system"
    ],
    features: [
      "Multi-vendor support",
      "Advanced search and filters",
      "Seller analytics",
      "Escrow payment system",
      "Dispute resolution"
    ],
    duration: "5 months",
    role: "Backend Developer",
    category: "Marketplace Platform",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://www.dokanat.com/",
      "https://image.thum.io/get/width/600/crop/800/https://www.dokanat.com/"
    ]
  },
  {
    id: "hajiq",
    title: "Hajiq",
    description: "Pilgrimage services and logistics.",
    liveUrl: "https://hajiq.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://hajiq.com/",
    tags: ["Logistics", "Services"],
    fullDescription: "Hajiq provides comprehensive pilgrimage services including travel arrangements, accommodation booking, and guided tours for religious journeys.",
    scope: [
      "Booking management system",
      "Travel package creation",
      "Payment processing",
      "Customer communication portal",
      "Itinerary management"
    ],
    features: [
      "Package booking system",
      "Group management",
      "Travel itineraries",
      "Document management",
      "Customer support chat"
    ],
    duration: "3 months",
    role: "WordPress & WooCommerce Developer",
    category: "Travel & Services",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://hajiq.com/",
      "https://image.thum.io/get/width/600/crop/800/https://hajiq.com/"
    ]
  },
  {
    id: "marisavaz",
    title: "Marisa Vaz",
    description: "Personal brand and portfolio.",
    liveUrl: "https://marisavaz.co.mz/home/en/home/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://marisavaz.co.mz/home/en/home/",
    tags: ["Portfolio", "Creative"],
    fullDescription: "A stunning personal brand website showcasing professional achievements, portfolio work, and thought leadership in the industry.",
    scope: [
      "Personal branding website",
      "Portfolio showcase",
      "Blog integration",
      "Contact and inquiry system",
      "Multi-language support"
    ],
    features: [
      "Portfolio gallery",
      "Blog and articles",
      "Speaking engagements",
      "Media appearances",
      "Contact form"
    ],
    duration: "1.5 months",
    role: "WordPress Developer",
    category: "Personal Portfolio",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://marisavaz.co.mz/home/en/home/",
      "https://image.thum.io/get/width/600/crop/800/https://marisavaz.co.mz/home/en/home/"
    ]
  },
  {
    id: "landology",
    title: "Landology",
    description: "Real estate and land development.",
    liveUrl: "https://landologyinc.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://landologyinc.com/",
    tags: ["Real Estate", "Web"],
    fullDescription: "Landology specializes in land development and real estate investment, providing comprehensive property listings and development project showcases.",
    scope: [
      "Property listing platform",
      "Interactive map integration",
      "Project showcase pages",
      "Inquiry and lead management",
      "Virtual property tours"
    ],
    features: [
      "Property search with maps",
      "Virtual tours",
      "Investment calculator",
      "Project timelines",
      "Lead capture forms"
    ],
    duration: "4 months",
    role: "Full Stack Developer",
    category: "Real Estate",
    stack: "wordpress",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://landologyinc.com/",
      "https://image.thum.io/get/width/600/crop/800/https://landologyinc.com/"
    ]
  },
  {
    id: "finalchoice",
    title: "Final Choice",
    description: "Consumer choice awards and rankings.",
    liveUrl: "https://www.finalchoice.ca/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://www.finalchoice.ca/",
    tags: ["Directory", "Awards"],
    fullDescription: "Final Choice is a consumer choice awards platform that recognizes excellence in various industries through public voting and expert reviews.",
    scope: [
      "Voting system development",
      "Business directory",
      "Review and rating system",
      "Award categories management",
      "Results and analytics"
    ],
    features: [
      "Public voting system",
      "Business profiles",
      "Review submissions",
      "Award badges",
      "Winners showcase"
    ],
    duration: "3 months",
    role: "WordPress Developer",
    category: "Awards Platform",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://www.finalchoice.ca/",
      "https://image.thum.io/get/width/600/crop/800/https://www.finalchoice.ca/"
    ]
  },
  {
    id: "rxdirect",
    title: "RX Direct",
    description: "Direct to consumer pharmacy services.",
    liveUrl: "https://rx-direct.co.uk/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://rx-direct.co.uk/",
    tags: ["Health", "E-commerce"],
    fullDescription: "RX Direct provides direct-to-consumer pharmacy services with online prescription management, medication delivery, and health consultations.",
    scope: [
      "E-commerce pharmacy platform",
      "Prescription upload and verification",
      "Secure payment processing",
      "Order tracking system",
      "Customer health records"
    ],
    features: [
      "Prescription management",
      "Medication reminders",
      "Auto-refill options",
      "Health consultations",
      "Secure delivery tracking"
    ],
    duration: "3.5 months",
    role: "Shopify Developer",
    category: "Healthcare E-commerce",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://rx-direct.co.uk/",
      "https://image.thum.io/get/width/600/crop/800/https://rx-direct.co.uk/"
    ]
  },
  {
    id: "easyrevie",
    title: "Easy Revie",
    description: "Review management system.",
    liveUrl: "https://easyrevie.sg/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://easyrevie.sg/",
    tags: ["SaaS", "Business"],
    fullDescription: "Easy Revie is a comprehensive review management platform helping businesses collect, manage, and showcase customer reviews across multiple platforms.",
    scope: [
      "Review aggregation system",
      "Multi-platform integration",
      "Analytics dashboard",
      "Review response tools",
      "Widget generation"
    ],
    features: [
      "Multi-platform review sync",
      "Sentiment analysis",
      "Automated review requests",
      "Response templates",
      "Embeddable widgets"
    ],
    duration: "4 months",
    role: "Full Stack Developer",
    category: "SaaS Platform",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://easyrevie.sg/",
      "https://image.thum.io/get/width/600/crop/800/https://easyrevie.sg/"
    ]
  },
  {
    id: "fulham",
    title: "Fulham Health",
    description: "Healthcare provider information.",
    liveUrl: "https://fulhamhealth.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://fulhamhealth.com/",
    tags: ["Healthcare", "Medical"],
    fullDescription: "Fulham Health provides comprehensive healthcare information, doctor directories, and appointment booking services for patients seeking quality medical care.",
    scope: [
      "Healthcare information portal",
      "Doctor directory and profiles",
      "Appointment booking system",
      "Patient resources library",
      "Contact and inquiry forms"
    ],
    features: [
      "Doctor search and profiles",
      "Online appointment booking",
      "Health articles and resources",
      "Patient testimonials",
      "Insurance information"
    ],
    duration: "2 months",
    role: "WordPress Developer",
    category: "Healthcare Website",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://fulhamhealth.com/",
      "https://image.thum.io/get/width/600/crop/800/https://fulhamhealth.com/"
    ]
  },
  {
    id: "valuesofgolf",
    title: "Values of Golf",
    description: "Golfing community and values.",
    liveUrl: "https://www.valuesofgolf.com/",
    imageUrl: "https://image.thum.io/get/width/600/crop/800/https://www.valuesofgolf.com/",
    tags: ["Sports", "Community"],
    fullDescription: "Values of Golf is a community platform celebrating the sport's traditions, values, and culture while connecting golf enthusiasts worldwide.",
    scope: [
      "Community website development",
      "Content management system",
      "Member profiles and forums",
      "Event calendar",
      "Newsletter integration"
    ],
    features: [
      "Community forums",
      "Member directory",
      "Event listings",
      "Blog and articles",
      "Photo galleries"
    ],
    duration: "2 months",
    role: "WordPress Developer",
    category: "Community Website",
    gallery: [
      "https://image.thum.io/get/width/800/crop/600/https://www.valuesofgolf.com/",
      "https://image.thum.io/get/width/600/crop/800/https://www.valuesofgolf.com/"
    ]
  }
];

/** Laravel vs WordPress for tabs: use explicit stack if set, else derive from role */
export function getProjectStack(project: Project): ProjectStack {
  if (project.stack) return project.stack;
  const r = project.role?.toLowerCase() ?? "";
  return r.includes("wordpress") ? "wordpress" : "laravel";
}
