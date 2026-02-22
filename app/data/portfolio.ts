
import { Code, Paintbrush, Layout, Video } from 'lucide-react';
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
  imagePath: "/profile.jpeg",
  socials: {
    github: "https://github.com/Muchiri-codes",
    linkedin: "https://linkedin.com/in/John_Muchiri"
  }
};

export const ABOUT_CONTENT = {
  title: "I am a multidisciplinary creator based at the intersection of logic and aesthetics.",
  description: [
    "My journey began as a graphic designer with a passion for typography, but I quickly realized I wanted to build the experiences I was designing.",
    "Today, I help businesses solve complex problems through clean code and user-centric design. Whether it's building a high-performance Next.js application or crafting a brand identity, I focus on quality and impact."
  ],
  stats: [
    { label: "Years Exp.", value: "2+" },
    { label: "Projects", value: "30+" }
  ],
  experience: [
    { year: "In Progress", role: "Web mapping", company: "Educational >> Commercial" },
    { year: "08/2024 - Present", role: "Full stack Web Developer", company: "Freelancing + Personal websites" },
    { year: "01/2024 - 08/2024", role: "Web Designer", company: "Freelancing" },
    { year: "2023 - 2024", role: "Graphic Designer", company: "Freelancing / Private" },
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
  { title: "Fullstack Apps", desc: "Building robust Next.js applications with scalable backends.", category: "Development", img: "/fullstack.png" },
  { title: "API Integration", desc: "Connecting seamless data flows between 3rd party services.", category: "Development", img: "/api.jpg" },
  { title: "Performance Opt.", desc: "Ensuring lightning fast load times and SEO excellence.", category: "Development", img: "/optimization.png" },
  
  // Web Design
  { title: "UI/UX Design", desc: "User-centric interfaces designed for conversion and flow.", category: "Design", img: "/uiux.mp4" },
  { title: "Design Systems", desc: "Modular component libraries for brand consistency.", category: "Design", img: "/system_design.mp4" },
  { title: "Responsive Layouts", desc: "Flawless experiences across mobile, tablet, and desktop.", category: "Design", img: "/responsive_layout.mp4" },

  // Graphics Design
  { title: "Visual Branding", desc: "Defining your identity through color, type, and logos.", category: "Graphics", img: "/visual_branding.jpeg" },
  { title: "Motion Graphics", desc: "Bringing static designs to life with smooth animations.", category: "Graphics", img: "/motion_graphics.mp4" },
  { title: "Digital Assets", desc: "High-quality social media and marketing campaign visuals.", category: "Graphics", img: "/digital_assets.jpeg" },

  //web mapping
  { title: "Web Mapping", desc: "Skills in analysis of geospatial data and presenting complex world data into visually understandable formats.", category: "Mapping", img: "/web_mapping.jpeg" },

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

export const CONTACT =[
  {email: "muchirijohn0018@gmail.com"},
   {location :"Remote/ Nyeri, Nakuru; Kenya"},
   {linkedIn:"https://www.linkedin.com/in/john-muchiri-3ba55724b/"},
   {twitter:""},
   {github:""}
]