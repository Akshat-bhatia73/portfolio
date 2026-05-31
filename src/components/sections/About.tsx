import { motion, useReducedMotion } from "framer-motion";
import { personal, stats } from "@/data/resume";
import { sectionVariants } from "@/lib/motion";
import { StatCard } from "@/components/ui/StatCard";

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section id="about" className="py-20" initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
      <div className="section-grid items-start">
        <div>
          <p className="font-mono text-xs uppercase text-[var(--color-muted)]">01 / About</p>
          <h2 className="mt-3 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none">About</h2>
        </div>
        <div className="text-lg leading-8 text-[var(--color-muted-strong)]">
          <p>{personal.tagline}</p>
        </div>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.value} stat={stat} />
        ))}
      </div>
    </motion.section>
  );
}
