import Link from "next/link";
import { Project } from "@/app/types/ProjectTypes";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">

        <div className={`mb-2 text-sm font-medium ${project.status === "Completed" ? "text-green-600"
            : project.status === "In Progress" ? "text-yellow-600"
              : project.status === "Planned" ? "text-blue-600"
                : "text-gray-600"
          }`}>
          {project.status}
        </div>


        <h3 className="text-xl font-semibold text-emerald-800">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.software.map((software) => (
            <span
              key={software}
              className="rounded-full border px-2 py-1 text-xs"
            >
              {software}
            </span>
          ))}
        </div>

      </div>
    </Link>
  );
}