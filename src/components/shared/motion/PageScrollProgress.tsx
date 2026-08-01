"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

type PageScrollProgressProps = {
  className?: string;
};

export default function PageScrollProgress({
  className = "",
}: PageScrollProgressProps) {
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.22,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX: shouldReduceMotion ? scrollYProgress : smoothProgress,
      }}
      className={`fixed top-[var(--site-header-height)] right-0 left-0 z-[69] h-[3px] origin-left bg-[linear-gradient(90deg,#00A4E4_0%,#0077B6_55%,#123B56_100%)] shadow-[0_2px_8px_rgba(0,119,182,0.18)] ${className}`}
    />
  );
}
