import type { Variants } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1] as const;
export const easeInOut = [0.83, 0, 0.17, 1] as const;

export const duration = {
  fast: 0.18,
  base: 0.36,
  slow: 0.62,
} as const;

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: easeOut,
      staggerChildren: 0.08,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOut },
  },
};
