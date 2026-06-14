import {
  BadgeCheck,
  Banknote,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Cpu,
  DatabaseZap,
  Download,
  Fingerprint,
  GitBranch,
  GraduationCap,
  Landmark,
  LayoutGrid,
  Linkedin,
  Mail,
  MonitorSmartphone,
  Network,
  Rocket,
  Scale3d,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound,
  WalletCards,
  Workflow
} from "lucide-react";
import type { CardItem, Experience, Metric, Project, Recommendation } from "@/types/portfolio";

export const navItems = ["Home", "Experience", "Projects", "Expertise", "Tech Stack", "Writing", "Contact"];

export const techChips = ["Kotlin", "Jetpack Compose", "Android", "Clean Architecture"];

export const metrics: Metric[] = [
  { value: "20M+", label: "Total App Downloads", accent: "green", icon: Download },
  { value: "67+", label: "Major Production Features", accent: "gold", icon: Rocket },
  { value: "5+", label: "Years in Mobile Development", accent: "blue", icon: BriefcaseBusiness },
  { value: "4", label: "Large Scale Financial Products", accent: "purple", icon: LayoutGrid }
];

export const experiences: Experience[] = [
  {
    company: "PT Infosys Solusi Terpadu",
    role: "Android Engineer / Mobile Developer",
    period: "Aug 2020 - Present",
    highlights: [
      "Built fintech and mobile banking apps used by millions",
      "Delivered onboarding, payments, QRIS, lending, investment, and authentication flows",
      "Specialized in Kotlin, Jetpack Compose, reusable UI systems, and scalable architecture",
      "Owned features end-to-end across product, backend, QA, design, and release coordination",
      "Drove technical discussions, production debugging, issue triage, and reliability improvements"
    ],
    responsibilities: ["Assistant Squad Lead", "Co-Tech Lead", "Technical Reviews", "Delivery Coordination"],
    responsibilityDescription:
      "In addition to delivering production features, I contribute to technical reviews, engineering alignment, delivery coordination, and team collaboration across multiple initiatives.",
    projects: ["Tring!", "Hi by hibank", "BTN Mobile Banking", "PermataMobile X"]
  },
  {
    company: "PT Visionet Data Internasional",
    role: "Junior Developer",
    period: "Jul 2019 - Jun 2020",
    highlights: [
      "Maintained internal web systems with ASP.NET and SQL, handling issues and change requests",
      "Developed a React Native app for seminar and event management",
      "Worked on registration, QR scanning, reporting, and operational workflows"
    ]
  }
];

export const recommendations: Recommendation[] = [
  {
    name: "Wahyudi Setiaji",
    role: "Android Engineer / Android Tech Lead",
    relationship: "Managed Tasya directly",
    quote:
      "As her Tech Lead, I worked closely with Tasya on our Android project, where she consistently delivered high-quality results. She excels in technical implementation, especially in app security and UI/UX optimization. Tasya is proactive, reliable, focused under pressure, and strong at solving complex problems.",
    href: "https://www.linkedin.com/in/tasya-amalia-salsabila/details/recommendations/?detailScreenTabIndex=0",
    accent: "green"
  },
  {
    name: "Michael Iskandar",
    role: "iOS Developer",
    relationship: "Worked with Tasya on the same team",
    quote:
      "Tasya approaches challenges with a solutions-minded attitude, proactively identifying problems and mapping practical ways to solve them. Her attention to detail, pursuit of polished work, and collaborative nature made her someone I could count on throughout complex project delivery.",
    href: "https://www.linkedin.com/in/tasya-amalia-salsabila/details/recommendations/?detailScreenTabIndex=0",
    accent: "blue"
  },
  {
    name: "Helmi Yogantara",
    role: "Frontend Developer / Team Lead",
    relationship: "Worked with Tasya as teammate and team lead",
    quote:
      "Tasya has strong programming skills, especially in Flutter, and consistently delivered high-quality work throughout our projects together. She learns quickly, takes responsibility, keeps improving, and brings a dedicated, positive attitude to the team.",
    href: "https://www.linkedin.com/in/tasya-amalia-salsabila/details/recommendations/?detailScreenTabIndex=0",
    accent: "gold"
  },
  {
    name: "Mutiara Hikmah Nofitasari",
    role: "iOS Developer",
    relationship: "Worked with Tasya on the same team",
    quote:
      "Tasya has strong hands-on expertise in Kotlin and Jetpack Compose, and consistently demonstrates a deep understanding of modern Android development practices. She is diligent, proactive, eager to learn, and reliably delivers clean, thoughtful solutions on time.",
    href: "https://www.linkedin.com/in/tasya-amalia-salsabila/details/recommendations/?detailScreenTabIndex=0",
    accent: "blue"
  },
  {
    name: "Sisca Threecya Agatha",
    role: "Project Manager",
    relationship: "Worked with Tasya on the same team",
    quote:
      "Tasya communicates clearly, pays attention to detail, and delivers good quality work. Her proactive attitude makes collaboration smooth, and she understands requirements, proposes effective solutions, and is willing to go the extra mile to ensure the best result.",
    href: "https://www.linkedin.com/in/tasya-amalia-salsabila/details/recommendations/?detailScreenTabIndex=0",
    accent: "gold"
  },
  {
    name: "Sulis Tiyono",
    role: "Frontend Developer / Tech Lead",
    relationship: "Managed Tasya directly",
    quote:
      "On the Hi Bank mobile banking project, Tasya demonstrated strong technical capability, reliability, clean coding practices, and fast adaptation to new requirements. During intense SIT and UAT phases, she stayed steady, organized, and collaborated smoothly with backend, QA, and product teams.",
    href: "https://www.linkedin.com/in/tasya-amalia-salsabila/details/recommendations/?detailScreenTabIndex=0",
    accent: "purple"
  }
];

export const projects: Project[] = [
  {
    name: "Tring! by Pegadaian",
    description: "Fintech Investment & Financial Services Platform",
    impact:
      "Worked across investment, financing, referral, guest mode, and security initiatives for a fintech platform with more than 10 million downloads.",
    image: "/projects/tring.png",
    href: "https://play.google.com/store/apps/details?id=com.pegadaiandigital&hl=en_US",
    workedOn: [
      "Gold savings journeys",
      "Gold buying and selling experiences",
      "Gold transfer flows",
      "Gold installment products",
      "Referral experiences",
      "Guest mode architecture",
      "Hajj financing",
      "Vehicle financing",
      "Business financing",
      "Multipurpose financing",
      "Security enhancements",
      "Shared Compose infrastructure"
    ],
    tech: ["Kotlin", "Jetpack Compose", "MVVM/MVI", "Clean Architecture", "Coroutines", "Flow", "Retrofit", "Firebase"],
    accent: "green"
  },
  {
    name: "Hi by hibank",
    description: "Digital Banking Platform for MSMEs",
    impact:
      "Delivered digital banking journeys across onboarding, KYC, transfers, financing, payments, and security integrations.",
    image: "/projects/hibank.png",
    href: "https://play.google.com/store/apps/details?id=com.hibank.mobile&hl=en_US",
    workedOn: [
      "User registration",
      "OCR onboarding",
      "Face recognition KYC",
      "Transfers",
      "Loan simulation",
      "Payments",
      "Top-up products",
      "Security integrations",
      "Recovery journeys"
    ],
    tech: ["Flutter", "Dart", "Clean Architecture", "REST API", "Firebase", "Third-Party SDKs"],
    accent: "blue"
  },
  {
    name: "BTN Mobile Banking",
    description: "Enterprise Mobile Banking Application",
    impact:
      "Worked across onboarding, authentication, account management, investment products, and enterprise banking journeys.",
    image: "/projects/btn-mobile.png",
    imagePosition: "object-left",
    href: "https://play.google.com/store/apps/details?id=id.co.btn.mobilebanking.android&hl=en_US",
    workedOn: [
      "ATM registration",
      "Re-registration flows",
      "KTP registration",
      "Online onboarding",
      "Account opening",
      "Savings products",
      "Deposits",
      "Foreign currency products",
      "Mutual funds",
      "Authentication flows",
      "Forgot password",
      "Forgot user ID",
      "Forgot PIN",
      "Biometric authentication",
      "Face recognition integration",
      "Cashflow tracker",
      "Profile and account management"
    ],
    tech: ["Kotlin", "Android SDK", "XML", "Retrofit", "Firebase Crashlytics"],
    accent: "gold"
  },
  {
    name: "PermataMobile X",
    description: "Enterprise Mobile Banking Application",
    impact: "Contributed to transaction-focused banking features and production stability initiatives.",
    image: "/projects/permata-mobile-x.png",
    imagePosition: "object-right",
    href: "https://play.google.com/store/apps/details?id=net.myinfosys.PermataMobileX&hl=en_US",
    workedOn: ["E-wallet functionality", "Production support", "Stability improvements"],
    tech: ["Kony Framework", "JavaScript", "REST API", "Mobile Banking Systems"],
    accent: "purple"
  }
];

export const buildItems: CardItem[] = [
  { title: "Mobile Banking & Fintech Apps", accent: "green", icon: Landmark },
  { title: "Transaction & Payment Systems", accent: "gold", icon: WalletCards },
  { title: "Investment & Financing Features", accent: "gold", icon: Scale3d },
  { title: "Security & Reliability", accent: "blue", icon: ShieldCheck },
  { title: "Reusable Compose Systems", accent: "purple", icon: Boxes }
];

export const domainGroups = [
  {
    title: "Banking",
    accent: "green",
    items: ["Mobile Banking", "Digital Banking", "Payments", "Transfers"]
  },
  {
    title: "Identity & Security",
    accent: "blue",
    items: ["Digital Onboarding", "OCR & Face Recognition", "Authentication", "Security & App Protection"]
  },
  {
    title: "Investment & Financing",
    accent: "gold",
    items: [
      "Gold Investment",
      "Mutual Funds",
      "Vehicle Financing",
      "Business Financing",
      "Lending & Credit"
    ]
  },
  {
    title: "Platform Excellence",
    accent: "purple",
    items: ["Production Reliability"]
  }
];

export const workStyle: CardItem[] = [
  {
    title: "Reliable Delivery",
    description: "Deliver production features with clear scope, steady execution, and attention to release quality.",
    accent: "green",
    icon: BadgeCheck
  },
  {
    title: "Cross Functional Collaboration",
    description: "Work closely with Product, Backend, QA, Design, and stakeholders to turn requirements into shipped journeys.",
    accent: "blue",
    icon: UsersRound
  },
  {
    title: "Ownership Mindset",
    description: "Own features beyond implementation, including edge cases, debugging, release readiness, and follow-through.",
    accent: "purple",
    icon: Sparkles
  },
  {
    title: "Scalable Thinking",
    description: "Favor maintainable architecture, reusable UI patterns, and implementation choices that support future changes.",
    accent: "gold",
    icon: Workflow
  },
  {
    title: "User Focused Engineering",
    description: "Build critical financial journeys with attention to clarity, trust, accessibility, and user confidence.",
    accent: "green",
    icon: MonitorSmartphone
  },
  {
    title: "Leadership Support",
    description: "Support technical discussions, trade-offs, team alignment, and delivery planning when projects get complex.",
    accent: "blue",
    icon: Network
  }
];

export const beyondItems: CardItem[] = [
  {
    title: "Collaborating with Product, Backend, QA, Design, and stakeholders",
    accent: "gold",
    icon: UsersRound
  },
  {
    title: "Supporting technical discussions and implementation trade-offs",
    accent: "green",
    icon: Workflow
  },
  {
    title: "Contributing to reusable systems and shared infrastructure",
    accent: "blue",
    icon: DatabaseZap
  },
  {
    title: "Helping maintain production quality and delivery excellence",
    accent: "purple",
    icon: Rocket
  },
  {
    title: "Supporting engineering alignment and delivery planning",
    accent: "green",
    icon: Network
  }
];

export const stack = [
  "Kotlin",
  "Java",
  "Compose",
  "Android XML",
  "Flutter",
  "React Native",
  "Dart",
  "JavaScript",
  "Coroutines",
  "Flow",
  "StateFlow",
  "Hilt",
  "Dagger",
  "Firebase",
  "Crashlytics",
  "Unit Testing",
  "Retrofit",
  "OkHttp",
  "Room",
  "DataStore",
  "Git",
  "Clean Architecture"
];

export const footerLinks = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/tasya-amalia-salsabila/" },
  { label: "GitHub", icon: GitBranch, href: "https://github.com/tasyamalia" },
  { label: "Email", icon: Mail, href: "mailto:tasyaamaliasalsa@gmail.com" }
];

export const academic = {
  icon: GraduationCap,
  education: [
    {
      school: "Bina Nusantara University",
      href: "https://www.linkedin.com/school/binus-online/posts/?feedView=all",
      degree: "Bachelor of Science",
      major: "Information Systems",
      campus: "BINUS Online",
      period: "Mar 2020 - Mar 2024",
      gpa: "3.93 / 4.00",
      honor: "Summa Cum Laude",
      achievement: "Outstanding Student Award 2022",
      focus: ["Information Systems", "Software Engineering", "Mobile Development"]
    },
    {
      school: "SMK Telkom Malang",
      href: "https://www.linkedin.com/school/smktelkommalang/posts/?feedView=all",
      level: "Vocational High School",
      degree: "Software Engineering",
      period: "2016 - 2019",
      highlights: [
        "Specialized in Software Engineering",
        "Early exposure to software development fundamentals",
        "Built strong foundation in programming and engineering concepts"
      ],
      achievement: "Best 10th Graduates"
    }
  ] as const
};

export const projectIcons = [Banknote, MonitorSmartphone, Building2, Cpu];
