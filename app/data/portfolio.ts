
import { Code, Paintbrush, Layout, Video } from 'lucide-react';
import React from 'react';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, 
  SiMongodb, SiPostgresql, SiTailwindcss, SiShadcnui, 
  SiNodedotjs, SiWebpack, SiGithub, SiHtml5, SiCss 
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
    description: "I build scalable, high-performance applications with React and Next.js frameworks. ",
    icon: 'Code', //pass the string and map it in the component
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
 
  { title: "Fullstack Apps", desc: "Building robust Next.js applications with scalable backends. My apps are built for effective user journy and an easy to debug code that is scalable incase there is need to upgrade your website coverage.",focus_area:"scale, ease of debugging, databases, self-contained.", deliverable:"customer friendly apps", category: "Development", img: "/fullstack.png", img2:"/fullstack_2.jpg" },
  { title: "API Integration", desc: "Connecting seamless data flows between 3rd party services. Your website is not complete until there flawless transfter of data from various ends, that is how clients are able to access the data they need from your website and guess what?! That is where an experienced website develper like me is needed.",focus_area:"cost, size of data, integration", deliverable:"fast, cost effective options", category: "Development", img: "/api.jpg", img2:"/api_2.jpg" },
  { title: "Performance Opt.", desc: "Ensuring lightning fast load times and SEO excellence. Client journey in your website is a great concern, ever loading websites likely from overloaded packages will definitely discourage the client, Fast navigation is paramount when I am designing my websites. ",focus_area:"speed, customer journey", deliverable:"ultra fast apps with quick navigations", category: "Development", img: "/optimization.png", img2:"/optimization_2.jpg" },
  

  { title: "UI/UX Design", desc: "User-centric interfaces designed for conversion and flow. The visual appearance has the ability to attract and keep the client longer as they view what the website has to offer, that is where I come in.",focus_area:"visual appearance, color choice, fonts, images, videos etc.", deliverable:"visually appealing designs that hold your client for long in  your website.", category: "Design", img: "/uiux.mp4", img2:"/ui-ux_2.jpg"},
  { title: "Design Systems", desc: "Modular component libraries for brand consistency.",focus_area:"content placement, ease of use by clients, accessibility", deliverable:"proffesional designs that are not only appealing but also easy to use.", category: "Design", img: "/system_design.mp4" },
  { title: "Responsive Layouts", desc: "Flawless experiences across mobile, tablet, and desktop.", focus_area:"scales, fonts, screen sizes.", deliverable:"Apps that suit all types of screen sizes such as laptops, monitors, mobile phones, tablets etc. ",category: "Design", img: "/responsive_layout.mp4", img2:"/responsive_layout_2.jpg" },

 
  { title: "Visual Branding", desc: "Defining your identity through color, type, and logos. Your logos and choice of colors are as important as the website itself as they are able to define the brand, I balance color and graphics of your website to bring out the visual effect needed. ",focus_area:"visual appearance, scale, fonts, typography, images", deliverable:"high quality brands that are self selling.", category: "Graphics", img: "/visual_branding.jpeg", img2:"/visual_branding_2.jpg" },
  { title: "Motion Graphics", desc: "Bringing static designs to life with smooth animations. Away from the boring static apps, active graphics are not only eye appealing but also an enhancement of the marketability of your business.",focus_area:"scale, animation and screen sizes.", deliverable:"visually appealing animated graphics that altogether hold the client in yoour website long enough to see what your business has to offer", category: "Graphics", img: "/motion_graphics.mp4", },
  { title: "Digital Assets", desc: "High-quality social media and marketing campaign visuals. In this century, wealth is not just held as tangibles, but rather digital assets such as crypto or other virtually owned minerals; With such property, a system for tracking your wealth is handy and that is where I come in.", focus_area:"inclusive dashboards, security, privacy, fast, scalability and feasibility", deliverable:"Highly secure systems that quickly respons to any changes in your digital assets such as crypro-currency",category: "Graphics", img: "/digital_assets.jpeg", img2:'/digital_assets_2.jpg' },

  { title: "Web Mapping", desc: "Skills in analysis of geospatial data and presenting complex world data into visually understandable formats. By proffesion, I am a geomatics engineering and geospatial information systems from the Dedan Kimathi university of technology, therefore spatial data analysis such as web mapping is an area of specialization for me.",focus_area:"cartography, databases, speed", deliverable:"interactive web maos that are able to communicate any message that has location stamps in it.", category: "Mapping", img: "/web_mapping.jpeg", img2:'/web_mapping_2.jpg' },

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
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
]

export const CONTACT =[
  {email: "muchirijohn0018@gmail.com"},
   {location :"Remote/ Nyeri, Nakuru; Kenya"},
   {linkedIn:"https://www.linkedin.com/in/john-muchiri-3ba55724b/"},
   {twitter:""},
   {github:""}
]