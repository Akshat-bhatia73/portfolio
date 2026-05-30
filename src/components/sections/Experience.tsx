import { motion, useReducedMotion } from "framer-motion";
import { consulting, experience } from "@/data/resume";
import { sectionVariants } from "@/lib/motion";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Experience() {
  const reduceMotion = useReducedMotion();
  const items = [...experience, ...consulting];

  return (
    <motion.section id="experience" className="py-20" initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <h2 className="text-[clamp(2.25rem,6vw,4.625rem)] font-black leading-[0.9]">Experience</h2>
        <p className="text-lg leading-8 text-[var(--color-muted)]">{experience[0].bullets[0].text}</p>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <TimelineItem key={`${item.company}-${item.role}`} item={item} />
        ))}
      </div>
    </motion.section>
  );
}
