import { Briefcase } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const experience: {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}[] = [
  {
    role: "AI Automation Intern",
    company: "Matrix AE",
    duration: "June 2026 — Present",
    responsibilities: [
      "Design and implement AI-powered automation workflows for business processes.",
      "Build and maintain intelligent assistants and integration pipelines.",
      "Support data-driven automation initiatives across client projects.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional timeline."
        subtitle="Building hands-on experience through applied AI and analytics projects."
      />

      {experience.length > 0 ? (
        <div className="relative border-l border-white/10 pl-8">
          {experience.map((item, i) => (
            <Reveal key={item.role + i} delay={i}>
              <div className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-accent/15 text-accent">
                  <Briefcase className="h-3.5 w-3.5" />
                </span>
                <div className="glass-card rounded-2xl p-6">
                  <span className="text-sm font-medium text-accent">
                    {item.duration}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.company}</p>
                  <ul className="mt-4 space-y-2">
                    {item.responsibilities.map((r) => (
                      <li
                        key={r}
                        className="flex gap-2 text-sm leading-relaxed text-white/80"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <div className="glass-card flex flex-col items-start gap-4 rounded-2xl border-dashed p-8">
            <span className="inline-flex rounded-xl border border-white/10 bg-accent/10 p-3 text-accent">
              <Briefcase className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                Open to opportunities
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                Actively seeking roles in AI automation and business data
                analytics. Professional experience will be added here as it
                grows.
              </p>
            </div>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
