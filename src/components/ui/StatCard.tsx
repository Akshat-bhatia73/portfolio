import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/data/resume";
import { easeOut, itemVariants } from "@/lib/motion";

export function StatCard({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const controls = animate(0, stat.countTo, {
      duration: 1,
      ease: easeOut,
      onUpdate: setValue,
    });

    return () => controls.stop();
  }, [inView, reduceMotion, stat.countTo]);

  const display = reduceMotion || !inView ? stat.value : `${stat.prefix}${formatValue(value, stat.countTo)}${stat.suffix}`;

  return (
    <motion.article
      ref={ref}
      variants={itemVariants}
      className="min-h-48 border border-[var(--color-line)] bg-[var(--color-panel-deep)] p-5 [border-radius:18px]"
    >
      <div className="font-mono text-[clamp(2.125rem,5vw,3.5rem)] leading-none text-[var(--color-accent-orange)]">
        {display}
      </div>
      <h3 className="mt-4 text-lg font-extrabold text-[var(--color-ink)]">{stat.label}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{stat.sublabel}</p>
    </motion.article>
  );
}

function formatValue(current: number, target: number) {
  return Number.isInteger(target) ? Math.round(current).toString() : current.toFixed(1);
}
