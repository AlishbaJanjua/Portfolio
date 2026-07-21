"use client";

import { useState } from "react";
import { site } from "@/data/site";

export function ProfileImage() {
  const [broken, setBroken] = useState(false);
  const initials = site.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="relative">
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2rem] opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(139,92,246,0.35), transparent 70%)",
        }}
      />
      <div className="relative h-[220px] w-[220px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface-2 shadow-2xl md:h-[280px] md:w-[280px]">
        {!broken ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/profile.png"
            alt={site.name}
            className="h-full w-full object-cover"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface-2 to-surface">
            <span className="font-display text-6xl font-bold text-white/90">
              {initials}
            </span>
            <span className="text-xs uppercase tracking-widest text-muted">
              profile-placeholder
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
