import { motion, useReducedMotion } from "framer-motion";
import { consulting, experience } from "@/data/resume";
import { sectionVariants } from "@/lib/motion";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Experience() {
  const reduceMotion = useReducedMotion();
  const items = [...experience, ...consulting];

  return (
    <motion.section id="experience" className="py-20" initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
      <div className="section-grid items-end">
        <div>
          <p className="font-mono text-xs uppercase text-[var(--color-muted)]">02 / Experience</p>
          <h2 className="mt-3 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none">Experience</h2>
        </div>
        <p className="text-lg leading-8 text-[var(--color-muted)]">{experience[0].bullets[1].text}</p>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <TimelineItem key={`${item.company}-${item.role}`} item={item} />
        ))}
      </div>
    </motion.section>
  );
}
