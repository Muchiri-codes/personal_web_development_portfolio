"use client";

import Link from "next/link";
import { categories } from "@/app/data/projects/categories";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { LucideSlidersHorizontal } from "lucide-react";

export default function ProjectSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") ;
  return (
    <>
      <div className="relative left-0 top-0 z-10 flex flex-col items-center">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className=" flex h-8 w-8 items-center justify-center rounded-full bg-background shadow-md transition hover:bg-muted mt-10 text-green-700 hover:scale-120 hover:text-yellow-500" 
          aria-label="Toggle project categories"
        >
          <LucideSlidersHorizontal size={17} strokeWidth={2.5} />
        </button>

        <div className="h-110 w-6 bg-gray-300" />
      </div>
      {sidebarOpen && (
        <aside
          className={`shrink-0 overflow-hidden transition-all duration-300 ${sidebarOpen ? "w-56 mr-8" : "w-0 mr-0"
            }`}
        >
          <div className="sticky  top-10 w-56">
            <h2 className="mb-4 text-sm font-semibold">
              CATEGORIES
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
                  className={`block rounded-full px-4 py-2 text-sm transition ${selectedCategory === category.id
                    ? "bg-green-600 text-white"
                    : "hover:bg-muted"
                    }`}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
      )}

    </>
  );
}