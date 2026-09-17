import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "../data/projects/projects";
import { Suspense } from "react";

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl mt-20 px-6 pb-5"
    >
      <div className="flex gap-10">
        <Suspense fallback={<div>Loading filters...</div>}>
        </Suspense>

        <div className="min-w-0 flex-1">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-yellow-600">
              Explore my GIS & Spatial Analysis Portfolio
            </h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              A collection of GIS, remote sensing, spatial analysis,
              programming and geospatial research projects. These are real
              projects I have handled and others are in progress.
            </p>
          </div>

          <ProjectGrid projects={projects} />
        </div>
      </div>
    </section>

  );
}