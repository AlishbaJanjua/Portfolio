import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Layers, Lightbulb, Target, Workflow } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { SkillIcon, GithubIcon } from "@/lib/icons";
import { Background } from "@/components/Background";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Background />

      {/* Top bar */}
      <header className="sticky top-0 z-40">
        <div className="glass mx-auto mt-4 flex max-w-4xl items-center justify-between rounded-2xl px-4 py-3 md:px-5">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-3.5 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-28 pt-10">
        {/* Hero */}
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-white/10 bg-surface px-3 py-1 text-xs font-medium text-accent">
            {project.category}
          </span>
        </div>
        <h1 className="heading-gradient font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Hero image placeholder */}
        <div className="relative mt-10 aspect-[16/8] w-full overflow-hidden rounded-3xl border border-white/10 bg-surface">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(139,92,246,0.22), transparent 65%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Layers className="h-14 w-14 text-white/30" strokeWidth={1.2} />
          </div>
        </div>

        {/* Overview */}
        <Block title="Overview">
          <p>{project.overview}</p>
        </Block>

        {/* Problem + Solution */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <InfoCard icon={Target} title="Problem" body={project.problem} />
          <InfoCard icon={Lightbulb} title="Solution" body={project.solution} />
        </div>

        {/* Workflow */}
        <Block title="Workflow / Architecture" icon={Workflow}>
          <ol className="mt-2 space-y-4">
            {project.workflow.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-accent/15 text-sm font-semibold text-accent">
                  {i + 1}
                </span>
                <span className="pt-1 text-white/85">{step}</span>
              </li>
            ))}
          </ol>
        </Block>

        {/* Tech stack */}
        <Block title="Technology Stack">
          <div className="mt-2 flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 rounded-xl border border-white/8 bg-surface px-3.5 py-2.5 text-sm font-medium text-white/90"
              >
                <SkillIcon name={tech} className="h-[18px] w-[18px] text-muted" />
                {tech}
              </span>
            ))}
          </div>
        </Block>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-surface p-10 text-center">
          <h3 className="font-display text-2xl font-semibold text-white">
            Want to see the code?
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-soft accent-glow"
          >
            <GithubIcon className="h-4 w-4" /> View on GitHub
          </a>
        </div>
      </main>
    </>
  );
}

function Block({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 flex items-center gap-2.5 font-display text-2xl font-semibold text-white">
        {Icon && <Icon className="h-5 w-5 text-accent" strokeWidth={1.8} />}
        {title}
      </h2>
      <div className="text-base leading-relaxed text-muted">{children}</div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: string;
}) {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-accent/10 p-2.5 text-accent">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
