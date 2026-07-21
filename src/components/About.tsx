import { GraduationCap, Sparkles, Workflow } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "Business Data Analytics student building a strong analytical foundation.",
  },
  {
    icon: Sparkles,
    title: "Focus",
    body: "AI automation, intelligent assistants, and data-driven business solutions.",
  },
  {
    icon: Workflow,
    title: "Approach",
    body: "Turn repetitive work into reliable, automated, measurable workflows.",
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Data-driven work, powered by AI automation."
      />
      <Reveal className="max-w-3xl">
        <p className="text-lg leading-relaxed text-muted md:text-xl">
          {site.degree.replace("Bachelor's in ", "")} student focused on building
          AI automation workflows, intelligent assistants, and{" "}
          <span className="text-white">data-driven business solutions</span>.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i + 1}>
            <div className="glass-card group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <div className="mb-5 inline-flex rounded-xl border border-white/10 bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent/20">
                <card.icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{card.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
