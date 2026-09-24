import { serviceDetails } from './service-details';
export const services = serviceDetails;

export type CaseStudySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: { title: string; text: string; items?: string[] }[];
  steps?: string[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  label: string;
  title: string;
  description: string;
  tools: string[];
  number: string;
  color: string;
  image?: string;
  detailTitle?: string;
  detailIntro?: string;
  workflow?: string[];
  sections?: CaseStudySection[];
  ctaTitle?: string;
  ctaText?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug:'employee-super-app',
    client:'People.',
    label:'AI AGENTS & AUTOMATION',
    title:'AI Agents Powering an Employee Super App',
    description:'An employee super app powered by AI agents, with 300 hours saved per month and a 60% reduction in HR and IT service desk tickets.',
    tools:['AI Agents','Employee Experience'],
    number:'01',
    color:'mint',
    image:'/images/ai-glass.webp'
  },
  {
    slug:'intelligent-ebook-management',
    client:'Publish.',
    label:'INTELLIGENT WORKFLOWS',
    title:'Intelligent Ebook Management',
    description:'Parallel workflows that support a five-times faster ebook turnaround, helping teams move work forward together.',
    tools:['Automation','Parallel Workflows'],
    number:'02',
    color:'blue',
    image:'/images/product-glass.webp'
  },
  {
    slug:'microsoft-365-migration',
    client:'Connect.',
    label:'MICROSOFT 365 MIGRATION',
    title:'Google Workspace to Microsoft 365 Migration',
    description:'A move from Google Workspace to Microsoft 365 with 99.9% mailbox migration accuracy.',
    tools:['Microsoft 365','Cloud Migration'],
    number:'03',
    color:'lilac',
    image:'/images/service-cloud.webp'
  },
  {
    slug:'astro-app',
    client:'Astro.',
    label:'MOBILE APP & DIGITAL EXPERIENCE',
    title:'Astro App – Personalized Astrology at Your Fingertips',
    description:'A modern astrology and spiritual guidance platform that brings personalized astrology, consultations, content and digital services into one intuitive mobile experience.',
    tools:['Mobile App','Personalization','Digital Consultations','Payments'],
    number:'04',
    color:'mint',
    image:'/images/products/astro-app.jpg',
    detailTitle:'Personalized astrology at your fingertips.',
    detailIntro:'The Astro App is a modern astrology and spiritual guidance platform designed to make personalized astrological services accessible through a simple, intuitive mobile experience. It connects users with astrology-based insights, personalized predictions, horoscope information, consultations and spiritual services through one digital platform.',
    workflow:['Register','Create Profile','Enter Birth Details','Explore Horoscope','Select Astrology Service','Choose Astrologer','Schedule Consultation','Make Payment','Attend Consultation','Receive Updates'],
    sections:[
      {
        title:'The Challenge',
        paragraphs:['Traditional astrology services often require users to schedule appointments, visit astrologers in person, or depend on fragmented sources for horoscope and astrological information. The objective was to create a scalable digital solution that could bring astrologers and users together while providing a seamless and personalized experience.'],
        bullets:['Limited accessibility to professional astrologers','Difficulty scheduling and managing consultations','Lack of personalized digital astrology experiences','Manual handling of customer and consultation information','Limited engagement between users and astrologers','Lack of a centralized platform for astrology-related services']
      },
      {
        title:'Our Solution',
        paragraphs:['We developed a feature-rich Astro App that brings astrology services into a single digital ecosystem. The application gives users access to personalized astrology information, horoscope services, astrologer profiles, consultations, notifications and digital content, with a focus on simplicity, personalization, security and scalability.']
      },
      {
        title:'Key Features',
        cards:[
          {title:'User Registration & Profile',text:'Users can create and manage personal profiles and provide the information required for personalized astrology services.'},
          {title:'Birth Details Management',text:'Users can securely enter the details needed for astrology services.',items:['Date of birth','Time of birth','Place of birth','Other relevant astrological information']},
          {title:'Daily Horoscope',text:'Users can access horoscope information based on their zodiac sign, creating a useful reason to return regularly.'},
          {title:'Personalized Astrology',text:'Astrology content and insights can be tailored to each user’s profile and birth information.'},
          {title:'Astrologer Directory',text:'Users can explore astrologer profiles, expertise, experience and available services.'},
          {title:'Online Consultation',text:'The platform can facilitate digital consultations and make it easier to request or schedule sessions.'},
          {title:'Appointment Management',text:'Users can view consultation availability, schedule appointments and manage upcoming or previous consultations.'},
          {title:'Notifications & Reminders',text:'Push notifications keep users informed.',items:['Appointment reminders','Consultation updates','Horoscope updates','New content','Offers and announcements']},
          {title:'Digital Payments',text:'Secure online payments can be integrated for consultations and other paid astrology services.'},
          {title:'Content Management',text:'Administrators can manage articles, blogs, videos, notifications, promotions and other content from an administrative interface.'},
          {title:'Admin Dashboard',text:'A centralized administrative portal gives teams visibility and control.',items:['Users','Astrologers','Appointments','Services','Payments','Content','Notifications','Reports and analytics']}
        ]
      },
      {
        title:'Technology Approach',
        paragraphs:['The application was designed using a scalable architecture capable of supporting mobile users, astrologers, administrators and backend services.'],
        bullets:['Mobile application','Web-based administration portal','Secure backend APIs','Database management','Cloud infrastructure','Push notification services','Payment gateway integration','Analytics and reporting']
      },
      {
        title:'Business Benefits',
        cards:[
          {title:'Improved Accessibility',text:'Users can access astrology services from anywhere through their mobile devices.'},
          {title:'Better Customer Engagement',text:'Horoscope updates, notifications, content and personalized services encourage continued engagement.'},
          {title:'Streamlined Operations',text:'Automated appointment, user, payment and content management reduces administrative effort.'},
          {title:'New Revenue Opportunities',text:'The platform can support multiple monetization models.',items:['Paid consultations','Premium astrology reports','Subscription plans','Personalized reports','Digital content','Featured astrologer listings']},
          {title:'Scalable Platform',text:'The architecture can expand with additional astrologers, users, services and geographical markets.'}
        ]
      },
      {
        title:'Outcome',
        paragraphs:['The Astro App creates a centralized digital ecosystem connecting astrology professionals with users seeking personalized astrological services. By combining personalized experiences, online consultations, appointment management, digital payments, content and administration into one platform, the solution helps modernize traditional astrology services and create opportunities for broader digital reach.']
      },
      {
        title:'Conclusion',
        paragraphs:['The Astro App demonstrates how technology can transform a traditional service into a convenient, accessible and scalable digital platform. With a user-friendly interface, personalized services, online consultations, secure payments and centralized administration, the platform provides a strong foundation for building a modern astrology and spiritual services business.']
      }
    ],
    ctaTitle:'Looking to build a customized astrology, horoscope, or spiritual services application?',
    ctaText:'Our team can help you design and develop a scalable solution tailored to your business requirements—from UI/UX and mobile app development to backend systems, payment integration, notifications and administration.'
  },
  {
    slug:'invoice-automation-workflow',
    client:'Finance.',
    label:'INTELLIGENT WORKFLOW AUTOMATION',
    title:'Invoice Automation Workflow',
    description:'An end-to-end invoice workflow that captures, extracts, validates, approves, tracks and reconciles invoices with less manual effort and greater financial visibility.',
    tools:['Invoice Automation','Document Processing','Approvals','Finance Operations'],
    number:'05',
    color:'blue',
    image:'/images/service-ai.webp',
    detailTitle:'Streamlining invoice processing through intelligent automation.',
    detailIntro:'Manual invoice processing can be time-consuming, error-prone and difficult to scale. Our Invoice Automation Workflow transforms invoice receipt, data capture, validation, approvals, payment tracking and reporting into one structured digital process.',
    workflow:['Invoice Received','Invoice Capture','Data Extraction','Validation','Duplicate Check','Approval Workflow','Finance Review','Payment Processing','Reconciliation','Reporting'],
    sections:[
      {
        title:'The Challenge',
        paragraphs:['The client was managing invoices through a combination of emails, spreadsheets, paper documents and manual data entry. This created delays, errors and limited visibility across the finance process.'],
        bullets:['High volume of manual invoice data entry','Delays in invoice verification and approval','Data-entry errors and duplicate invoices','Difficulty tracking invoice status','Limited visibility for finance and management teams','Delayed payment processing','Time-consuming reconciliation and reporting','Increased dependency on individual employees']
      },
      {
        title:'Our Solution',
        paragraphs:['We designed and implemented an end-to-end invoice automation workflow that digitizes the complete invoice lifecycle—from receipt to payment. Invoices can be captured from multiple sources, relevant information can be extracted automatically, data is validated against business rules, invoices are routed for approval, and teams gain real-time status visibility.']
      },
      {
        title:'Key Features',
        cards:[
          {title:'Invoice Capture',text:'Invoices can be centralized from multiple channels.',items:['Email','Web portal','Document upload','Mobile application','System/API integration']},
          {title:'Intelligent Data Extraction',text:'The system extracts important invoice information and turns it into structured data.',items:['Vendor name','Invoice number','Invoice date','Due date','Purchase order number','Tax details','Line items','Subtotal','Discount','Total invoice value']},
          {title:'Automated Validation',text:'Extracted data is checked against predefined business rules and available records.',items:['Vendor information','Invoice number','Purchase order','Tax information','Invoice amount','Mandatory fields','Payment terms']},
          {title:'Duplicate Invoice Detection',text:'Potential duplicates can be identified using criteria such as vendor, invoice number, date and amount.'},
          {title:'Approval Workflow',text:'Invoices are routed to appropriate approvers using configurable rules.',items:['Invoice amount','Department','Project','Vendor','Cost center','Business unit','Approval hierarchy']},
          {title:'Exception Management',text:'Invoices that fail validation are placed in an exception queue where finance teams can review, correct and continue the workflow without losing history.'},
          {title:'Payment Processing',text:'Approved invoices move into the payment stage and can integrate with accounting or ERP platforms.'},
          {title:'Real-Time Tracking',text:'Teams can track each invoice throughout its lifecycle.',items:['Received','Processing','Validation','Pending Approval','Approved','Payment Pending','Paid','Closed']},
          {title:'Notifications & Alerts',text:'Automated notifications can be triggered for operational events.',items:['New invoices','Pending approvals','Approval delays','Rejected invoices','Payment due dates','Exceptions','Failed processing']},
          {title:'Dashboard & Reporting',text:'Centralized dashboards provide visibility into processing performance.',items:['Invoices received','Pending invoices','Approved invoices','Rejected invoices','Paid invoices','Overdue invoices','Processing time','Approval turnaround time','Invoice value by vendor','Department-wise analysis']}
        ]
      },
      {
        title:'Detailed Workflow',
        steps:['Invoice submission through email, portal, upload or integration','Capture and securely store the original invoice document','Extract invoice information into structured data','Validate information against business rules and master data','Check whether the invoice has already been submitted or processed','Route the invoice to the required approver','Finance reviews the approved invoice and prepares it for payment','Process payment through the integrated financial system','Match payment information back to the invoice','Expose transaction information through dashboards and reports']
      },
      {
        title:'Technology & Integration',
        paragraphs:['The solution can connect with the existing systems already used by finance and business teams, allowing automation without requiring a complete platform replacement.'],
        bullets:['ERP systems','Accounting software','Banking/payment platforms','CRM systems','Email platforms','Document management systems','HR and procurement systems','REST APIs and third-party applications']
      },
      {
        title:'Business Impact',
        bullets:['Reduce manual invoice processing','Minimize data-entry errors','Improve approval turnaround time','Reduce duplicate payments','Improve financial visibility','Strengthen compliance and auditability','Track invoices in real time','Improve finance-team productivity','Reduce operational costs','Scale invoice processing as business volume grows']
      },
      {
        title:'Results',
        bullets:['Faster invoice processing','Reduced manual intervention','Improved data accuracy','Better approval visibility','Reduced invoice-processing bottlenecks','Improved payment tracking','Centralized invoice records','Better reporting and management visibility']
      },
      {
        title:'Conclusion',
        paragraphs:['The Invoice Automation Workflow demonstrates how intelligent automation can transform a traditionally manual finance process into a faster, more accurate and transparent digital operation. By automating invoice capture, data extraction, validation, approvals, payment processing and reporting, finance teams can focus more time on higher-value work while maintaining stronger controls.']
      }
    ]
  },
  {
    slug:'procure-to-pay-workflow',
    client:'Procure.',
    label:'PROCURE-TO-PAY AUTOMATION',
    title:'Procure-to-Pay (P2P) Workflow',
    description:'An end-to-end procurement workflow connecting purchase requests, approvals, suppliers, purchase orders, receipts, invoices, matching, payment and reconciliation.',
    tools:['Procurement Automation','Three-Way Matching','Supplier Management','Finance Integration'],
    number:'06',
    color:'lilac',
    image:'/images/glass-flow.webp',
    detailTitle:'Transforming procurement and payments through end-to-end automation.',
    detailIntro:'Our Procure-to-Pay Workflow Automation Solution helps organizations digitize and streamline the complete procurement lifecycle—from identifying a business requirement to completing supplier payment. Procurement, finance, employees, approvers and suppliers are connected through one centralized workflow.',
    workflow:['Purchase Request','Approval','Supplier Selection','Quotation','Purchase Order','Goods/Service Receipt','Invoice','Three-Way Match','Invoice Approval','Payment','Reconciliation','Reporting'],
    sections:[
      {
        title:'The Challenge',
        paragraphs:['The client was managing procurement through multiple disconnected processes and systems. Purchase requests, supplier quotations, purchase orders, invoices and payments required significant manual intervention and offered limited end-to-end visibility.'],
        bullets:['Manual purchase request processing','Lengthy approval cycles','Limited visibility into procurement status','Manual supplier and quotation comparison','Purchase order processing delays','Invoice matching issues','Duplicate or incorrect invoices','Difficulty tracking supplier payments','Limited procurement analytics','Lack of centralized documentation','Increased administrative workload']
      },
      {
        title:'Our Solution',
        paragraphs:['We implemented an end-to-end Procure-to-Pay workflow that connects purchasing and finance operations into a single digital process. The solution automates procurement requests, approvals, supplier selection, purchase orders, goods receipt, invoice processing, three-way matching, payment approvals and reconciliation.']
      },
      {
        title:'Key Features',
        cards:[
          {title:'Purchase Requisition',text:'Employees or authorized users can create purchase requests through a centralized portal.',items:['Product or service details','Quantity','Estimated cost','Department','Project','Cost center','Required delivery date','Business justification','Supporting documents']},
          {title:'Automated Approval Workflow',text:'Purchase requests are routed according to configurable business rules.',items:['Purchase amount','Department','Project','Cost center','Business unit','Category','Employee hierarchy']},
          {title:'Supplier Management',text:'Centralized supplier information supports a structured procurement process.',items:['Supplier profile','Contact details','Tax information','Banking details','Products/services','Contracts','Performance information','Compliance documents']},
          {title:'Quotation Management',text:'Procurement teams can collect and compare supplier quotations.',items:['Request quotations','Receive supplier responses','Compare prices','Compare delivery timelines','Review commercial terms','Evaluate proposals','Select supplier']},
          {title:'Purchase Order Management',text:'Approved requests can generate purchase orders containing supplier, pricing, tax, delivery and payment information.'},
          {title:'Goods & Service Receipt',text:'Receiving teams can record delivery or service completion against the purchase order.',items:['Ordered quantity','Received quantity','Pending quantity','Delivery date','Damaged or rejected items','Service completion','Supporting documents']},
          {title:'Invoice Processing',text:'Supplier invoices can be captured through email, upload, portal or system integration and validated against PO and receipt information.'},
          {title:'Three-Way Matching',text:'The system compares Purchase Order ↔ Goods/Service Receipt ↔ Supplier Invoice.',items:['Supplier','PO number','Quantity','Unit price','Tax','Total amount','Receipt status']},
          {title:'Exception Management',text:'Transactions that do not meet predefined rules are flagged for review.',items:['Price mismatch','Quantity mismatch','Missing PO','Missing receipt','Incorrect supplier','Duplicate invoice','Tax discrepancy']},
          {title:'Payment Approval',text:'Validated invoices move through configurable payment approval rules based on value, supplier, terms, department, business unit and hierarchy.'},
          {title:'Payment Processing',text:'The solution can integrate with accounting, ERP or banking systems and synchronize payment status.'},
          {title:'Reconciliation',text:'After payment, procurement, invoice and payment records are reconciled to provide a complete audit trail.'}
        ]
      },
      {
        title:'Detailed Workflow',
        steps:['Submit a purchase requisition','Check budget and route the request for approval','Identify suppliers and collect quotations where required','Evaluate quotations and select the supplier','Generate and send the purchase order','Record receipt of goods or completion of services','Receive the supplier invoice','Capture and validate invoice information','Match invoice against the PO and receipt','Complete required finance or business approvals','Process the approved invoice for payment','Reconcile payment and close the procurement transaction']
      },
      {
        title:'Business Impact',
        bullets:['Reduced manual procurement activities','Faster purchase approvals','Improved purchase order control','Better supplier management','Reduced invoice-processing errors','Improved invoice matching','Reduced duplicate payments','Greater spend visibility','Faster payment processing','Better compliance and auditability','Centralized procurement documentation','Improved collaboration between procurement and finance']
      },
      {
        title:'Dashboard & Analytics',
        bullets:['Purchase requests','Pending approvals','Purchase orders','Supplier spend','Open POs','Goods received','Pending invoices','Invoice exceptions','Payments','Department-wise spending','Supplier-wise spending','Procurement cycle time']
      },
      {
        title:'Integration Capabilities',
        paragraphs:['The P2P solution can connect with existing enterprise applications, helping organizations build a connected procurement ecosystem without disrupting the technology landscape already in place.'],
        bullets:['ERP systems','Accounting platforms','Procurement systems','Banking/payment platforms','Supplier portals','Document management systems','Email platforms','Inventory management systems','HR systems','REST APIs and third-party applications']
      },
      {
        title:'Technology-Driven Transformation',
        paragraphs:['By combining workflow automation, digital approvals, intelligent document processing, validation rules, integrations and real-time dashboards, the solution transforms procurement from a fragmented manual process into a connected, transparent and scalable digital workflow.']
      },
      {
        title:'Conclusion',
        paragraphs:['The Procure-to-Pay workflow provides a structured way to manage the complete procurement lifecycle. From the initial purchase request through supplier selection, purchase order creation, goods receipt, invoice matching, payment and reconciliation, every stage can be managed through one centralized and automated platform. The result is improved visibility, stronger controls, reduced manual effort and better collaboration between business, procurement, suppliers and finance teams.']
      }
    ]
  }
];

export const faqs = [
 ['What services does Elevix provide?','We work across Microsoft 365 Solutions, AI & ML Services, Smart App Engineering, Next-Gen App Development, and Cloud services. We can help with a focused project or a broader digital transformation.'],
 ['Do you work with startups and enterprises?','Yes. Our approach adapts to the stage of your business, from defining a first product to improving the platforms an established team relies on.'],
 ['Can you improve our existing applications?','Yes. Application modernization starts with understanding your existing systems, business requirements, and constraints. Together we can identify a practical path for improvements and migration.'],
 ['How do we get started?','Tell us about your idea, the problem you want to solve, and where you are today. We’ll use an initial conversation to understand your goals and discuss the next steps.'],
 ['Can you help with Microsoft 365 and automation?','Yes. We develop solutions using SharePoint, Teams, Power Apps, and Power Automate, and help businesses explore useful applications of Microsoft Copilot.'],
];
