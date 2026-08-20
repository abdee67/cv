import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Abdulaziz Muhammed",
  initials: "AM",
  location: "Addis Abeba, Ethiopia",
  locationLink: "https://www.google.com/maps/place/addis",
  about: "FullStack & Flutter Developer building products from the ground up.",
  summary:
    "Full Stack and Flutter Developer with 1+ years of experience. Building high-performance mobile and web applications.",
  avatarUrl: "https://avatars.githubusercontent.com/u/142771187?v=44",
  personalWebsiteUrl: "https://abdulaziiz.dev",
  contact: {
    email: "alaziizz67@gmail.com",
    tel: "+251977764845",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/abdee67",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdulaziz-ibn-muhammed/",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/Alaziiz_67",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Arba Minch University",
      degree: "Bachelor's Degree in Information Technology",
      start: "20021",
      end: "2024",
    },
  ],
  work: [
    {
      company: "TechEquations",
      link: "https://techequations.com/",
      badges: ["Onsite", "Mobile", "Cross-Platform", "Flutter", "Dart", "Android"],
      title: "Intermediate Software Developer",
      start: "2025",
      end: null,
      description:
        "Building a mobile and desktop application.",
    },
  ],
  skills: [
    "Java",
    "Flutter",
    "Supabase",
    "SQLite",
    "MYSQL",
    "PostgreSQL",
    "React/Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "System Architecture",
  ],
  projects: [
    {
      title: "URS Beauty",
      techStack: ["Flutter", "Supabase", "Stripe", "Chapa"],
      description: "Uber but for beauty salon for both genders and childrens(User app)",
      link: {
        label: "URS Beauty",
        href: "https://github.com/abdee67/URS-beauty",
      },
    },
    {
      title: "UR Stylist",
      techStack: ["Flutter", "Supabase", "Stripe", "Chapa", ""],
      description: "A stylsit app for UR beauty platform",
      link: {
        label: "UR Stylist",
        href: "https://github.com/abdee67/ur_stylist",
      },
    },
    {
      title: "Outreach",
      techStack: ["Flutter", "AI", "CSV", "SQLite", "Google map", "API"],
      description: "A feature-rich Customer Relationship Management (CRM) application built with Flutter, designed for managing business outreach with CSV import/export capabilities, dynamic categorization, and an intuitive mobile interface.",
      link: {
        label: "Outreach",
        href: "https://github.com/abdee67/outreach",
      },
    },
    {
      title: "UR Player",
      techStack: ["Flutter", "Shared Preferrence", "API"],
      description:
        "A music player with synced lyrics fetched from api and save the lyric for offline use",
      link: {
        label: "UR Player",
        href: "https://github.com/abdee67/my_player",
      },
    },
    {
      title: "Savvy Attendance",
      techStack: ["Flutter", "AI", "Tensroflowlite", "SQLite", "API"],
      description: "A mobile and desktop application that automates employee/student attendance tracking using facial recognition and geolocation verification.",
      link: {
        label: "Savyy Attendance",
        href: "https://github.com/abdee67/Simple-Attendance--Face-Recognition-Attendance-System",
      },
    },

    {
      title: "URS Breaker",
      techStack: ["Flutter", "Shadcn-UI", "AI", "Gemini", "SQLite", "API"],
      description: "URS Breaker is a cross-platform application that converts your big ideas into step-by-step actionable plans using Gemini 2.5-Flash AI.",
      link: {
        label: "URS Breaker",
        href: "https://github.com/abdee67/urs_breaker",
      },
    },
    {
      title: "Oil-Site-Management-system",
      techStack: ["Flutter", "SQLite", "API"],
      description: "This project is part of a larger system for managing site infrastructure and configurations. It supports rich UI interactions and communicates with a backend API connected to a relational MySQL database.",
      link: {
        label: "Savyy Attendance",
        href: "https://github.com/abdee67/Oil-Site-Management-system",
      },
    },
    {
      title: "DIR-THE FOUNDATION",
      techStack: ["Next JS", "Typscript", "Supabase", "Tailwind CSS", "Postgres"],
      description: "DIR (ድር) THE FOUNDATION is a premium single-store clothing ecommerce application for Ethiopia. It combines a polished customer storefront with a focused operations panel for catalog, stock, order, payment, delivery-cost, media, and storefront management.",
      link: {
        label: "DIR THE FOUNDATION",
        href: "https://dir-the-foundation.vercel.app/",
      },
    },
    {
      title: "Mika Creation Studio",
      techStack: ["React",
        "Vite",
        "Tailwind CSS",
        "GSAP",
        "@gsap/react",
        "React Icons",
        "React Hook Form",
        "ESLint"],
      description: "A cinematic service Website for a creative studio offering video production, event coverage, brand development, and Software development services.The site is built around strong motion, video-led storytelling, scroll interactions, and bold visual sections designed for a premium agency-style presentation.",
      link: {
        label: "Mika Creation Studio",
        href: "https://mika-creation.vercel.app/",
      },
    },
    {
      title: "Beauty Vault",
      techStack: ["Next JS", "React", "Typscript", "FormBricks"],
      description: "A boutique salon site built for booking and showcase. Highlights services, gallery work, customer testimonials, and clear contact paths via WhatsApp and embedded maps. Animated hero, mobile-first navigation, and Schema.org Local Business markup for SEO.",
      link: {
        label: "Beauty Vault",
        href: "https://liha-s-beauty.vercel.app/",
      },
    },
    {
      title: "Cord Consultancy",
      techStack: ["Next JS", "SQLite", "API"],
      description: "A landing page for CORD Nutrition and Health Consultancy.",
      link: {
        label: "Cord Consultancy",
        href: "https://www.cordconsultancy.com/",
      },
    },
  ],
} as const;
