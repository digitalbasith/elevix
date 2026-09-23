export type ProductDetail = {
  slug: string;
  title: string;
  short: string;
  eyebrow: string;
  description: string;
  intro: string;
  image: string;
  gallery?: string[];
  featuresTitle: string;
  features: { title: string; text: string }[];
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  audience?: string[];
  flow?: string[];
  closingTitle: string;
  closingText: string;
};

export const products: ProductDetail[] = [
  {
    slug: 'employee-productivity-app',
    title: 'Employee Attendance & Productivity Management App',
    short: 'Productivity App',
    eyebrow: 'TRACK ATTENDANCE. IMPROVE PERFORMANCE.',
    description: 'Track attendance, working hours, leave and productivity insights from one modern workforce platform.',
    intro: 'Give HR teams and managers real-time visibility into attendance, working hours, leave requests and productivity trends. Built for office, remote and multi-location teams, the app simplifies workforce administration while supporting better operational decisions.',
    image: '/images/products/productivity-app.jpg',
    gallery: ['/images/products/productivity-app.jpg'],
    featuresTitle: 'Workforce visibility from one dashboard',
    features: [
      { title: 'Smart Attendance Tracking', text: 'Record attendance through mobile or web check-ins with options for location-based attendance and secure authentication.' },
      { title: 'Working Hours Monitoring', text: 'Track login, logout, breaks, overtime and total working hours.' },
      { title: 'Employee Productivity Insights', text: 'Understand attendance patterns, active working hours, task progress and productivity trends.' },
      { title: 'Leave & Permission Management', text: 'Let employees request leave or permissions while managers review and approve quickly.' },
      { title: 'Real-Time Dashboard', text: 'See late arrivals, absences, working hours and productivity metrics at a glance.' },
      { title: 'Reports & Analytics', text: 'Generate daily, weekly and monthly reports for workforce planning.' },
      { title: 'Team & Employee Performance', text: 'Compare team-level trends, identify workload gaps and support data-driven performance discussions.' },
      { title: 'Secure & Reliable', text: 'Manage workforce data with reliable access and controlled visibility.' }
    ],
    benefitsTitle: 'Benefits to your business',
    benefits: [
      { title: 'Improve attendance & punctuality', text: 'Create better visibility and accountability across teams.' },
      { title: 'Reduce manual HR administration', text: 'Simplify routine attendance, leave and reporting tasks.' },
      { title: 'Identify productivity trends', text: 'Spot bottlenecks and patterns before they become bigger issues.' },
      { title: 'Make informed workforce decisions', text: 'Use real-time data to improve planning and operational efficiency.' }
    ],
    closingTitle: 'Empower your organization with better workforce visibility.',
    closingText: 'Bring attendance, analytics and productivity insights together in one platform designed for modern workplaces.'
  },
  {
    slug: 'astro-app',
    title: 'Astro App',
    short: 'Astro App',
    eyebrow: 'PERSONAL GUIDANCE. SIMPLE DIGITAL EXPERIENCE.',
    description: 'A mobile astrology experience for guided Nadi discovery, personal details and service package selection.',
    intro: 'Astro App brings the traditional Nadi consultation journey into a structured mobile experience. Users can enter the personal details needed for their journey, explore available consultation packages and move through the experience from one clear interface.',
    image: '/images/products/astro-app.jpg',
    gallery: ['/images/products/astro-app.jpg'],
    featuresTitle: 'A guided experience from discovery to consultation',
    features: [
      { title: 'Find My Nadi', text: 'Guide users through a structured personal-details flow for their Nadi journey.' },
      { title: 'Consultation Packages', text: 'Present available Kandam and consultation options in a clear mobile-friendly catalogue.' },
      { title: 'Step-by-Step Journey', text: 'Break longer information collection into simple, understandable steps.' },
      { title: 'Mobile-First Experience', text: 'Keep navigation, forms and package selection easy to use on a phone.' },
      { title: 'Profile & Service Access', text: 'Bring key account and service areas together through consistent app navigation.' },
      { title: 'Clear Calls to Action', text: 'Help users move from entering their details to selecting the service they need.' }
    ],
    benefitsTitle: 'Designed to make the consultation journey easier',
    benefits: [
      { title: 'Simpler customer onboarding', text: 'Collect the information required for a consultation through a guided digital flow.' },
      { title: 'Clear package discovery', text: 'Make consultation options and pricing easier for customers to understand.' },
      { title: 'Consistent mobile experience', text: 'Give users one place to manage the key steps in their journey.' },
      { title: 'Better digital access', text: 'Extend a traditional service through a convenient, modern application experience.' }
    ],
    flow: ['Discover', 'Enter details', 'Choose package', 'Continue journey'],
    closingTitle: 'Bring a traditional consultation journey into a modern app experience.',
    closingText: 'Astro App combines guided onboarding, service discovery and mobile-first interaction in one focused customer journey.'
  },
  {
    slug: 'ebook-library',
    title: 'eBook Library',
    short: 'eBooks',
    eyebrow: 'LEARN. EXPLORE. GROW.',
    description: 'A growing collection of practical eBooks covering technology, business, digital marketing and professional growth.',
    intro: 'Explore insightful eBooks created to help businesses, professionals and technology enthusiasts learn, improve and stay ahead in a rapidly changing digital world. Each resource brings together practical knowledge, industry insights and expert perspectives in an easy-to-understand format.',
    image: '/images/products/ebook-library.svg',
    featuresTitle: 'What you’ll find in our eBooks',
    features: [
      { title: 'Technology & Innovation', text: 'Discover technologies, digital trends, tools and innovations shaping modern businesses.' },
      { title: 'Business & Strategy', text: 'Learn practical approaches to growth, digital transformation, engagement and operational efficiency.' },
      { title: 'Digital Marketing', text: 'Explore strategies for building your online presence, reaching the right audience and growing your brand.' },
      { title: 'Emerging Technologies', text: 'Stay informed about AI, automation, cloud computing, software development and other transformative technologies.' },
      { title: 'Professional Development', text: 'Gain practical insights to improve skills, productivity and professional growth.' }
    ],
    benefitsTitle: 'Why read our eBooks?',
    benefits: [
      { title: 'Practical insights', text: 'Actionable knowledge you can apply to real-world situations.' },
      { title: 'Easy to understand', text: 'Complex topics explained in a simple and engaging way.' },
      { title: 'Industry relevant', text: 'Current trends, challenges and opportunities across technology and business.' },
      { title: 'Free resources', text: 'Valuable learning material designed to support better-informed decisions.' }
    ],
    closingTitle: 'Knowledge that helps you grow.',
    closingText: 'Build your understanding, discover new opportunities and keep learning with practical resources from Elevix.'
  },
  {
    slug: 'outreach-tool',
    title: 'Outreach Tool',
    short: 'Outreach',
    eyebrow: 'TURN EVERY EMAIL INTO AN OPPORTUNITY',
    description: 'Connect with customers, nurture leads and manage targeted outreach with automation, segmentation and analytics.',
    intro: 'From creating professional campaigns to managing contacts, automating follow-ups and tracking performance, our Outreach Tool gives you everything you need to engage the right audience at the right time.',
    image: '/images/products/outreach-tool.svg',
    featuresTitle: 'Powerful outreach made simple',
    features: [
      { title: 'Professional Email Campaigns', text: 'Create engaging campaigns using customizable templates and an intuitive campaign builder.' },
      { title: 'Contact & Audience Management', text: 'Organize contacts into lists and segments for relevant, targeted messaging.' },
      { title: 'Targeted Campaigns', text: 'Reach customer groups based on interests, behavior, demographics or other criteria.' },
      { title: 'Email Automation', text: 'Automate welcome emails, follow-ups, reminders and recurring communications.' },
      { title: 'Real-Time Campaign Analytics', text: 'Monitor deliveries, opens, clicks, bounces and unsubscribes.' },
      { title: 'Drip Campaigns', text: 'Build automated sequences that nurture prospects through the customer journey.' },
      { title: 'Easy Integration', text: 'Connect with your website, CRM, applications and business tools.' },
      { title: 'Responsive Email Templates', text: 'Create messages that look professional across desktop, tablet and mobile.' },
      { title: 'Secure & Reliable', text: 'Manage contacts and campaigns with confidence using a reliable platform foundation.' }
    ],
    benefitsTitle: 'Why choose our Outreach Tool?',
    benefits: [
      { title: 'Save time', text: 'Automate repetitive marketing activities and focus on growing your business.' },
      { title: 'Reach the right audience', text: 'Use segmentation and targeting to deliver more relevant communication.' },
      { title: 'Improve customer engagement', text: 'Build personalized campaigns that keep customers connected with your brand.' },
      { title: 'Grow your business', text: 'Convert leads, retain customers and create long-term relationships.' }
    ],
    audience: ['Small & Medium Businesses', 'Startups', 'E-commerce Businesses', 'Marketing Agencies', 'Sales Teams', 'Service Businesses', 'Educational Institutions', 'Real Estate Companies', 'Corporate & Enterprise Teams'],
    flow: ['Create', 'Target', 'Automate', 'Send', 'Analyze', 'Grow'],
    closingTitle: 'Ready to make your outreach more effective?',
    closingText: 'Build stronger customer relationships, generate more leads and accelerate growth with smarter, more consistent communication.'
  }
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
