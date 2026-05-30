import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/data/resume";
import { SkillPill } from "@/components/ui/SkillPill";
import { itemVariants, sectionVariants } from "@/lib/motion";

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section id="skills" className="py-20" initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <h2 className="text-[clamp(2.25rem,6vw,4.625rem)] font-black leading-[0.9]">Skills</h2>
        <p className="text-lg leading-8 text-[var(--color-muted)]">{skills.map((group) => group.category).join(" / ")}</p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {skills.map((group) => (
          <motion.article className="border border-[var(--color-line)] bg-[var(--color-panel)] p-5 [border-radius:18px]" key={group.category} variants={itemVariants}>
            <h3 className="font-mono text-sm text-[var(--color-accent-blue)]">{group.category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
