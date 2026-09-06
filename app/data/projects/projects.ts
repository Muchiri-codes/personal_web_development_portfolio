import { Project } from "@/app/types/ProjectTypes";

export const projects: Project[] = [
  {
    slug: "ndvi-analysis",
    title: "NDVI Analysis",
    category: "Remote sensing",

    shortDescription:
      "Assessment of vegetation condition using Sentinel-2 imagery.",

    description:
      "A remote sensing analysis using NDVI to evaluate vegetation patterns and spatial variability.",

    thumbnail: "/projects/ndvi/thumbnail.webp",

    software: [
      "Google Earth Engine",
      "ArcGIS Pro",
    ],

    technologies: [
      "Sentinel-2",
      "Remote Sensing",
      "NDVI",
    ],

    status: "Completed",

    date: "2026",

    overview:
      "This project demonstrates the derivation, visualization and interpretation of NDVI from satellite imagery.",

    objectives: [
      "Acquire satellite imagery",
      "Preprocess the imagery",
      "Calculate NDVI",
      "Visualize vegetation patterns",
      "Interpret the results",
    ],

    datasets: [
      "Sentinel-2",
    ],

    methodology: [
      "Image acquisition",
      "Cloud filtering",
      "Image compositing",
      "NDVI calculation",
      "Spatial analysis",
      "Visualization",
    ],

    results: [
      {
        title: "NDVI Map",
        description:
          "Spatial distribution of vegetation index values.",
        image: "/projects/ndvi/map.webp",
      },
    ],

    conclusion:
      "The analysis demonstrates how satellite-derived vegetation indices can support spatial environmental assessment.",
  },

  {
    slug: "bsi-analysis",
    title: "Bare Soil Index Analysis",
    category: "Remote sensing",

    shortDescription:
      "Identification and analysis of exposed bare surfaces using satellite imagery.",

    description:
      "A remote sensing workflow for deriving and interpreting the Bare Soil Index.",

    thumbnail: "/projects/bsi/thumbnail.webp",

    software: [
      "Google Earth Engine",
      "ArcGIS Pro",
    ],

    technologies: [
      "Sentinel-2",
      "BSI",
      "Remote Sensing",
    ],

    status: "In Progress",

    date: "2026",
  },

  {
    slug: "site-suitability-analysis",
    title: "Site Suitability Analysis",
    category: "Suitability analysis",
    shortDescription:
      "Multi-criteria GIS analysis for identifying suitable locations.",

    description:
      "A GIS-based multi-criteria decision analysis combining spatial datasets to identify suitable locations.",

    thumbnail: "/projects/site-suitability/thumbnail.webp",

    software: [
      "ArcGIS Pro",
    ],

    technologies: [
      "MCDA",
      "Raster Analysis",
      "Weighted Overlay",
    ],

    status: "In Progress",

    date: "2026",
  },
];