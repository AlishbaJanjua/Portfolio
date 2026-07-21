import { ArrowUpRight, Mail } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { GithubIcon, LinkedinIcon } from "@/lib/icons";
import { site } from "@/data/site";

const links = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    value: "@AlishbaJanjua",
    href: site.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "alishba-arshadd",
    href: site.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <div className="glass-card relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-16 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
          }}
        />
        <Reveal>
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </span>
          <h2 className="heading-gradient mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s build intelligent solutions together.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            Have a workflow to automate or data to make sense of? Let&apos;s
            talk.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-2"
              >
                <span className="inline-flex rounded-xl border border-white/10 bg-accent/10 p-3 text-accent">
                  <link.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <span className="text-xs uppercase tracking-wider text-muted">
                  {link.label}
                </span>
                <span className="flex items-center gap-1 text-sm font-medium text-white">
                  {link.value}
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  );
}
