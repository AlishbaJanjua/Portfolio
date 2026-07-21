"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/lib/icons";
import { Typewriter } from "./Typewriter";
import { ProfileImage } from "./ProfileImage";

import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-6 py-28 md:flex-row md:justify-between md:gap-8 md:py-20"
    >
      {/* Left */}
      <div className="order-2 max-w-xl text-center md:order-1 md:text-left">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-1.5 text-sm text-muted"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Available for AI & data projects
        </motion.p>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg font-medium text-muted"
        >
          Hi, I&apos;m
        </motion.h2>

        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="heading-gradient font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {site.name}
        </motion.h1>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-5 flex min-h-[2.5rem] items-center justify-center text-2xl font-semibold text-white md:justify-start md:text-3xl"
        >
          <span className="mr-2 text-muted">I&apos;m a</span>
          <Typewriter words={site.roles} className="inline-flex text-accent" />
        </motion.div>

        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-6 max-w-md text-balance text-base leading-relaxed text-muted md:mx-0"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
        >
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-surface px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-white/25 hover:bg-surface-2"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-surface px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-white/25 hover:bg-surface-2"
          >
            <LinkedinIcon className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-soft accent-glow"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </motion.div>
      </div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
        className="order-1 md:order-2"
      >
        <ProfileImage />
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
