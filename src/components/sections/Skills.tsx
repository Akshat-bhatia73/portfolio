import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/data/resume";
import { SkillPill } from "@/components/ui/SkillPill";
import { itemVariants, sectionVariants } from "@/lib/motion";

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section id="skills" className="py-20" initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
      <div className="section-grid items-end">
        <div>
          <p className="font-mono text-xs uppercase text-[var(--color-muted)]">03 / Skills</p>
          <h2 className="mt-3 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none">Skills</h2>
        </div>
        <p className="font-mono text-sm uppercase leading-7 text-[var(--color-muted)]">{skills.map((group) => group.category).join(" / ")}</p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {skills.map((group, index) => (
          <motion.article
            className={index === 0 ? "shine-surface glass-shell interactive-card rounded-2xl p-5" : "shine-surface interactive-card rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-5"}
            key={group.category}
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <h3 className="font-mono text-xs uppercase text-[var(--accent-red)]">{group.category}</h3>
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
