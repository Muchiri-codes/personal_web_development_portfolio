import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* ─────────────────────────────────────────────
          HERO / PROJECT HEADER
      ───────────────────────────────────────────── */}

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-28">
        {/* Back button */}
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>←</span>
          Back to Projects
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-end">
          {/* Project information */}
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border px-3 py-1 text-xs font-medium">
                {project.category.replace("-", " ")}
              </span>

              <span className="rounded-full bg-muted px-3 py-1 text-xs">
                {project.status}
              </span>

              <span className="text-xs text-muted-foreground">
                {project.date}
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {project.description}
            </p>

            {/* Software / technologies */}
            <div className="mt-7 flex flex-wrap gap-2">
              {project.software.map((item) => (
                <span
                  key={item}
                  className="rounded-md border px-3 py-1.5 text-sm"
                >
                  {item}
                </span>
              ))}

              {project.technologies?.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-muted px-3 py-1.5 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Project thumbnail */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-muted">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          PROJECT CONTENT
      ───────────────────────────────────────────── */}

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* Sticky table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Contents
              </p>

              <nav className="space-y-2 text-sm">
                {project.overview && (
                  <a
                    href="#overview"
                    className="block text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Overview
                  </a>
                )}

                {project.objectives && (
                  <a
                    href="#objectives"
                    className="block text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Objectives
                  </a>
                )}

                {project.datasets && (
                  <a
                    href="#data"
                    className="block text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Data & Sources
                  </a>
                )}

                {project.methodology && (
                  <a
                    href="#methodology"
                    className="block text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Methodology
                  </a>
                )}

                {project.results && (
                  <a
                    href="#results"
                    className="block text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Results
                  </a>
                )}

                {project.challenges && (
                  <a
                    href="#challenges"
                    className="block text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Challenges
                  </a>
                )}

                {project.conclusion && (
                  <a
                    href="#conclusion"
                    className="block text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Conclusion
                  </a>
                )}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <article className="min-w-0 space-y-20">

            {/* ─────────────────────────────────────────
                OVERVIEW
            ───────────────────────────────────────── */}

            {project.overview && (
              <section id="overview" className="scroll-mt-24">
                <SectionHeading
                  number="01"
                  title="Overview"
                />

                <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                  {project.overview}
                </p>
              </section>
            )}

            {/* ─────────────────────────────────────────
                OBJECTIVES
            ───────────────────────────────────────── */}

            {project.objectives &&
              project.objectives.length > 0 && (
                <section
                  id="objectives"
                  className="scroll-mt-24"
                >
                  <SectionHeading
                    number="02"
                    title="Objectives"
                  />

                  <div className="space-y-3">
                    {project.objectives.map(
                      (objective, index) => (
                        <div
                          key={objective}
                          className="flex gap-4 rounded-xl border p-4"
                        >
                          <span className="text-sm font-semibold text-muted-foreground">
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <p className="text-sm leading-6">
                            {objective}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}

            {/* ─────────────────────────────────────────
                DATA
            ───────────────────────────────────────── */}

            {project.datasets &&
              project.datasets.length > 0 && (
                <section
                  id="data"
                  className="scroll-mt-24"
                >
                  <SectionHeading
                    number="03"
                    title="Data & Sources"
                  />

                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.datasets.map((dataset) => (
                      <div
                        key={dataset}
                        className="rounded-xl border p-5"
                      >
                        <p className="text-sm font-medium">
                          {dataset}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

            {/* ─────────────────────────────────────────
                METHODOLOGY
            ───────────────────────────────────────── */}

            {project.methodology &&
              project.methodology.length > 0 && (
                <section
                  id="methodology"
                  className="scroll-mt-24"
                >
                  <SectionHeading
                    number="04"
                    title="Methodology"
                  />

                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[15px] top-3 h-[calc(100%-24px)] w-px bg-border" />

                    <div className="space-y-7">
                      {project.methodology.map(
                        (step, index) => (
                          <div
                            key={step}
                            className="relative flex gap-6"
                          >
                            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background text-xs font-semibold">
                              {String(index + 1).padStart(
                                2,
                                "0"
                              )}
                            </div>

                            <div className="pt-1">
                              <h3 className="font-medium">
                                {step}
                              </h3>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </section>
              )}

            {/* ─────────────────────────────────────────
                RESULTS
            ───────────────────────────────────────── */}

            {project.results &&
              project.results.length > 0 && (
                <section
                  id="results"
                  className="scroll-mt-24"
                >
                  <SectionHeading
                    number="05"
                    title="Results"
                  />

                  <div className="space-y-12">
                    {project.results.map((result) => (
                      <div key={result.title}>
                        <h3 className="mb-3 text-xl font-semibold">
                          {result.title}
                        </h3>

                        <p className="mb-5 leading-7 text-muted-foreground">
                          {result.description}
                        </p>

                        {result.image && (
                          <div className="relative aspect-video overflow-hidden rounded-2xl border bg-muted">
                            <Image
                              src={result.image}
                              alt={result.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

            {/* ─────────────────────────────────────────
                CODE
            ───────────────────────────────────────── */}

            {project.code && (
              <section className="scroll-mt-24">
                <SectionHeading
                  number="06"
                  title="Implementation"
                />

                <div className="overflow-hidden rounded-2xl border bg-muted/50">
                  <div className="flex items-center justify-between border-b px-5 py-3">
                    <span className="text-sm font-medium">
                      {project.code.language}
                    </span>

                    {project.code.filename && (
                      <span className="text-xs text-muted-foreground">
                        {project.code.filename}
                      </span>
                    )}
                  </div>

                  <pre className="overflow-x-auto p-5 text-sm leading-7">
                    <code>
                      {project.code.content}
                    </code>
                  </pre>
                </div>
              </section>
            )}

            {/* ─────────────────────────────────────────
                CHALLENGES
            ───────────────────────────────────────── */}

            {project.challenges &&
              project.challenges.length > 0 && (
                <section
                  id="challenges"
                  className="scroll-mt-24"
                >
                  <SectionHeading
                    number="07"
                    title="Challenges & Lessons"
                  />

                  <div className="space-y-3">
                    {project.challenges.map(
                      (challenge) => (
                        <div
                          key={challenge}
                          className="rounded-xl border p-5"
                        >
                          <p className="text-sm leading-7 text-muted-foreground">
                            {challenge}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}

            {/* ─────────────────────────────────────────
                CONCLUSION
            ───────────────────────────────────────── */}

            {project.conclusion && (
              <section
                id="conclusion"
                className="scroll-mt-24"
              >
                <SectionHeading
                  number="08"
                  title="Conclusion"
                />

                <div className="rounded-2xl border p-6">
                  <p className="leading-8 text-muted-foreground">
                    {project.conclusion}
                  </p>
                </div>
              </section>
            )}

          </article>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          FOOTER NAVIGATION
      ───────────────────────────────────────────── */}

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-muted-foreground"
          >
            ← View all projects
          </Link>
        </div>
      </section>
    </main>
  );
}


/* ─────────────────────────────────────────────────────
   SECTION HEADING
───────────────────────────────────────────────────── */

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-7">
      <span className="text-xs font-semibold text-muted-foreground">
        {number}
      </span>

      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

