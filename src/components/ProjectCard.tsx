import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group glass-card relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40"
    >
      {/* hover sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--x,50%) 0%, rgba(139,92,246,0.10), transparent 60%)",
        }}
      />
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full border border-white/10 bg-surface px-3 py-1 text-xs font-medium text-accent">
          {project.category}
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>

      <h3 className="font-display text-xl font-semibold text-white">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/8 bg-surface px-2.5 py-1 text-xs text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        View Project
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
