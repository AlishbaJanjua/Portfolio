"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { SkillIcon } from "@/lib/icons";
import { skillCategories, type Skill } from "@/data/skills";

function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div className="group/chip relative">
      <div className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-surface px-3.5 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface-2">
        <SkillIcon
          name={skill.name}
          className="h-[18px] w-[18px] shrink-0 text-muted transition-colors group-hover/chip:text-white"
        />
        <span className="text-sm font-medium text-white/90">{skill.name}</span>
      </div>
      {/* Hover description */}
      <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-max max-w-[220px] -translate-x-1/2 translate-y-1 rounded-lg bg-surface-2 px-3 py-2 text-center text-xs leading-snug text-muted opacity-0 shadow-xl ring-1 ring-white/10 transition-all duration-200 group-hover/chip:translate-y-0 group-hover/chip:opacity-100">
        {skill.desc}
        <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-surface-2 ring-1 ring-white/10" />
      </div>
    </div>
  );
}

export function Skills() {
  const [active, setActive] = useState<string>("all");

  const filters = useMemo(
    () => [
      { id: "all", title: "All" },
      ...skillCategories.map((c) => ({ id: c.id, title: c.title })),
    ],
    []
  );

  const visible =
    active === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === active);

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A full-stack AI & data skill ecosystem."
        subtitle="From automation and analytics to machine learning and backend — the toolkit behind data-driven solutions."
      />

      {/* Filters */}
      <div className="mb-12 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-all sm:text-sm ${
              active === f.id
                ? "border-accent/50 bg-accent/15 text-white"
                : "border-white/10 bg-surface text-muted hover:border-white/25 hover:text-white"
            }`}
          >
            {f.id === "all" ? "All" : shortTitle(f.title)}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        <AnimatePresence mode="popLayout">
          {visible.map((cat) => (
            <motion.div
              key={cat.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="mb-5">
                <h3 className="font-display text-xl font-semibold text-white">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{cat.tagline}</p>
              </div>

              {cat.core.length > 0 && (
                <div className="mb-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted/70">
                    Core Skills
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.core.map((s) => (
                      <SkillChip key={s.name} skill={s} />
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted/70">
                  Tools
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {cat.tools.map((s) => (
                    <SkillChip key={s.name + cat.id} skill={s} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function shortTitle(title: string): string {
  return title.split(" & ")[0].split(" (")[0];
}
