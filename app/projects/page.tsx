import ProjectSidebar from "@/components/projects/ProjectSidebar";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "../data/projects/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">

      <div className="flex gap-10">

        <ProjectSidebar />

        <section id = "projects" className="min-w-0 flex-1">

          <div className="mb-10">
            <p className="text-sm uppercase tracking-wider">
              My Work
            </p>

            <h1 className="text-4xl font-bold">
              GIS & Spatial Analysis
            </h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              A collection of GIS, remote sensing,
              spatial analysis, programming and
              geospatial research projects.
            </p>
          </div>

          <ProjectGrid projects={projects} />

        </section>

      </div>

    </main>
  );
}