"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "motion/react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealTrigger = "load" | "viewport";

type RevealProps = {
  children: ReactNode;
  className?: string;

  direction?: RevealDirection;
  trigger?: RevealTrigger;

  distance?: number;
  delay?: number;
  duration?: number;

  once?: boolean;
  amount?: number;
};

type Offset = {
  x: number;
  y: number;
};

function getOffset(direction: RevealDirection, distance: number): Offset {
  switch (direction) {
    case "up":
      return {
        x: 0,
        y: distance,
      };

    case "down":
      return {
        x: 0,
        y: -distance,
      };

    case "left":
      return {
        x: distance,
        y: 0,
      };

    case "right":
      return {
        x: -distance,
        y: 0,
      };

    case "none":
    default:
      return {
        x: 0,
        y: 0,
      };
  }
}

export default function Reveal({
  children,
  className,
  direction = "up",
  trigger = "viewport",
  distance = 28,
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.18,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const offset = getOffset(direction, distance);

  const hiddenState = shouldReduceMotion
    ? {
        opacity: 1,
        x: 0,
        y: 0,
      }
    : {
        opacity: 0,
        x: offset.x,
        y: offset.y,
      };

  const visibleState = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  const transition = shouldReduceMotion
    ? {
        duration: 0,
      }
    : {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      };

  if (trigger === "load") {
    return (
      <motion.div
        initial={hiddenState}
        animate={visibleState}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={hiddenState}
      whileInView={visibleState}
      viewport={{
        once,
        amount,
        margin: "0px 0px -8% 0px",
      }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
