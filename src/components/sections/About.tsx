import { motion, useReducedMotion } from "framer-motion";
import { experience, personal, stats } from "@/data/resume";
import { sectionVariants } from "@/lib/motion";
import { StatCard } from "@/components/ui/StatCard";

export function About() {
  const reduceMotion = useReducedMotion();
  const topBullets = experience.flatMap((item) => item.bullets).slice(0, 3);

  return (
    <motion.section id="about" className="py-20" initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <h2 className="text-[clamp(2.25rem,6vw,4.625rem)] font-black leading-[0.9]">About</h2>
        <div className="text-lg leading-8 text-[var(--color-muted-strong)]">
          <p>{personal.tagline}</p>
          <div className="mt-5 grid gap-3 text-base">
            {topBullets.map((bullet) => (
              <p key={bullet.text}>{bullet.text}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.value} stat={stat} />
        ))}
      </div>
    </motion.section>
  );
}
