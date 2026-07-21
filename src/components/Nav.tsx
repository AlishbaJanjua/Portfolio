"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Home,
  Layers,
  Mail,
  Sparkles,
  User,
  type LucideIcon,
} from "lucide-react";
import { navItems, type NavItem } from "@/data/site";

const iconMap: Record<NavItem["icon"], LucideIcon> = {
  home: Home,
  user: User,
  education: GraduationCap,
  skills: Sparkles,
  projects: Layers,
  contact: Mail,
};

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function NavButton({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick: () => void;
}) {
  const Icon = iconMap[item.icon];
  return (
    <button
      onClick={onClick}
      aria-label={item.label}
      aria-current={active ? "true" : undefined}
      className="group relative flex items-center justify-center rounded-xl p-2.5 outline-none transition-colors md:p-3"
    >
      {active && (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-0 rounded-xl bg-accent/15 ring-1 ring-accent/40"
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
        />
      )}
      <Icon
        strokeWidth={1.9}
        className={`relative h-5 w-5 transition-colors ${
          active ? "text-accent" : "text-muted group-hover:text-white"
        }`}
      />
      {/* Desktop tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 hidden -translate-x-1 whitespace-nowrap rounded-md bg-surface-2 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        {item.label}
      </span>
    </button>
  );
}

export function Nav() {
  const ids = navItems.map((n) => n.id);
  const active = useActiveSection(ids);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop: right vertical dock */}
      <nav
        aria-label="Primary"
        className="glass fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-1 rounded-2xl p-1.5 md:flex lg:right-10"
      >
        {navItems.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            active={active === item.id}
            onClick={() => go(item.id)}
          />
        ))}
      </nav>

      {/* Mobile: bottom pill */}
      <nav
        aria-label="Primary"
        className="glass fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-2xl p-1.5 md:hidden"
      >
        {navItems.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            active={active === item.id}
            onClick={() => go(item.id)}
          />
        ))}
      </nav>
    </>
  );
}
