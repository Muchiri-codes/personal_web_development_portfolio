import { Project } from "@/app/types/ProjectTypes";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({
  projects,
}: ProjectGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
        />
      ))}
    </div>
  );
}