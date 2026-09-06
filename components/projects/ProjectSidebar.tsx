"use client";

import Link from "next/link";
import { categories } from "@/app/data/projects/categories";

export default function ProjectSidebar() {
  return (
    <aside className="w-64 shrink-0 mt-30">
      <div className="sticky top-24">

        <h2 className="mb-4 text-sm font-semibold">
          PROJECTS
        </h2>

        <nav className="space-y-1">

          {categories.map((category) => (
            <Link
              key={category.id}
              href={
                category.id === "all"
                  ? "/projects"
                  : `/projects?category=${category.id}`
              }
              className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
            >
              {category.name}
            </Link>
          ))}

        </nav>

      </div>
    </aside>
  );
}