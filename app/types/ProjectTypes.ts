export type category = [
  'Remote sensing',
  'Suitability analysis',
  'Machine learning',
  'Web mapping',
  'Cartography',
  'CAD ',
  'Topographical mapping'
]


export interface Project {
  slug: string;
  title: string;
  category:category;
  shortDescription: string;
  description: string;
  thumbnail: string;
  software: string[];
  technologies?: string[];
  status: "Completed" | "In Progress" | "Planned";
  date: string;
  overview?: string;
  objectives?: string[];
  datasets?: string[];
  methodology?: string[];
  results?: {
    title: string;
    description: string;
    image?: string;
  }[];

  code?: {
    language: string;
    content: string;
  };

  challenges?: string[];
  conclusion?: string;
}