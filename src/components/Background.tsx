"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      {/* Slow drifting accent glows */}
      <motion.div
        className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.14), transparent 65%)",
        }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-0 h-[30rem] w-[30rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.10), transparent 65%)",
        }}
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% -10%, transparent 55%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}
