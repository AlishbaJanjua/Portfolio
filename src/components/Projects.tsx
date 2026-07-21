import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work."
        subtitle="AI assistants, automation engines, and analytics — built to solve real business problems."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i % 3}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
