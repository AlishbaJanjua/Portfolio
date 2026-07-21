import { GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const education = [
  {
    degree: "Bachelor's Degree",
    field: "Business Data Analytics",
    org: "Comsats University, Islamabad",
    duration: "2022 — 2026",
  },
];

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Academic background." />

      <div className="relative border-l border-white/10 pl-8">
        {education.map((item, i) => (
          <Reveal key={item.field} delay={i}>
            <div className="relative pb-2">
              <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-accent/15 text-accent">
                <GraduationCap className="h-3.5 w-3.5" />
              </span>
              <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <span className="text-sm font-medium text-accent">
                  {item.duration}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">
                  {item.field}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.degree}</p>
                <p className="mt-3 text-sm text-white/80">{item.org}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
