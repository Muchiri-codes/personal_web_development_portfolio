// src/data/portfolio.ts

import { Code, Paintbrush, Layout } from 'lucide-react';
import React from 'react';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, 
  SiMongodb, SiPostgresql, SiTailwindcss, SiShadcnui, 
  SiNodedotjs, SiWebpack, SiGithub, SiHtml5, SiCss3 
} from 'react-icons/si';

export const HERO_CONTENT = {
  badge: "Available for freelance & full-time",
  title: "Crafting digital",
  titleGradient: "experiences.",
  description: "I bridge the gap between complex code and elegant design. A full-spectrum creator specializing in the modern web.",
  imagePath: "/your-portrait.jpg",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  }
};

export const ABOUT_CONTENT = {
  title: "I am a multidisciplinary creator based at the intersection of logic and aesthetics.",
  description: [
    "My journey began as a graphic designer with a passion for typography, but I quickly realized I wanted to build the experiences I was designing.",
    "Today, I help businesses solve complex problems through clean code and user-centric design. Whether it's building a high-performance Next.js application or crafting a brand identity, I focus on quality and impact."
  ],
  stats: [
    { label: "Years Exp.", value: "5+" },
    { label: "Projects", value: "120+" }
  ],
  experience: [
    { year: "2023 - Present", role: "Senior Web Developer", company: "Digital Agency X" },
    { year: "2021 - 2023", role: "Web Designer", company: "Creative Studio Y" },
    { year: "2019 - 2021", role: "Graphic Designer", company: "Startup Z" },
  ]
};

export const SERVICES = [
  {
    title: "Web Development",
    description: "Building scalable, high-performance applications with React and Next.js.",
    icon: 'Code', // We pass the string and map it in the component
    tags: ["TypeScript", "Next.js", "Node.js"]
  },
  {
    title: "Web Design",
    description: "Creating intuitive user experiences and modern interfaces that convert.",
    icon: 'Layout',
    tags: ["Figma", "UI/UX", "Responsive"]
  },
  {
    title: "Graphic Design",
    description: "Visual storytelling through branding, typography, and digital assets.",
    icon: 'Paintbrush',
    tags: ["Branding", "Illustrator", "Layout"]
  }
];
export const SERVICES_LIST = [
  // Web Development
  { title: "Fullstack Apps", desc: "Building robust Next.js applications with scalable backends.", category: "Development", img: "/dev1.jpg" },
  { title: "API Integration", desc: "Connecting seamless data flows between 3rd party services.", category: "Development", img: "/dev2.jpg" },
  { title: "Performance Opt.", desc: "Ensuring lightning fast load times and SEO excellence.", category: "Development", img: "/dev3.jpg" },
  
  // Web Design
  { title: "UI/UX Design", desc: "User-centric interfaces designed for conversion and flow.", category: "Design", img: "/design1.jpg" },
  { title: "Design Systems", desc: "Modular component libraries for brand consistency.", category: "Design", img: "/design2.jpg" },
  { title: "Responsive Layouts", desc: "Flawless experiences across mobile, tablet, and desktop.", category: "Design", img: "/design3.jpg" },

  // Graphics Design
  { title: "Visual Branding", desc: "Defining your identity through color, type, and logos.", category: "Graphics", img: "/graph1.jpg" },
  { title: "Motion Graphics", desc: "Bringing static designs to life with smooth animations.", category: "Graphics", img: "/graph2.jpg" },
  { title: "Digital Assets", desc: "High-quality social media and marketing campaign visuals.", category: "Graphics", img: "/graph3.jpg" },
];
export const TECH_STACK = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
]