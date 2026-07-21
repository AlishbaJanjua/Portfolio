import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
      <h2 className="heading-gradient font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
      )}
    </Reveal>
  );
}
