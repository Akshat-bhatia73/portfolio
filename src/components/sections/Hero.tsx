import { ArrowDown, Calendar, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { experience, personal, skills, stats } from "@/data/resume";
import { easeOut, itemVariants, sectionVariants } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const primaryExperience = experience[0];
  const primarySkills = skills.flatMap((group) => group.skills).slice(0, 7);

  return (
    <motion.section
      id="top"
      className="grid min-h-svh gap-6 py-24 sm:py-28 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-center"
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      variants={sectionVariants}
    >
      <motion.div className="relative" variants={itemVariants}>
        <p className="font-mono text-xs uppercase text-[var(--color-muted)]">Portfolio / {personal.location}</p>
        <h1 className="mt-7 max-w-5xl text-[clamp(4.25rem,10vw,8.5rem)] font-medium leading-[0.92] text-[var(--color-ink)]">
          {personal.name.split(" ").map((word, index) => (
            <span className="block overflow-hidden" key={word}>
              <motion.span
                className={index === 1 ? "font-display inline-block text-[var(--accent-red)]" : "inline-block"}
                initial={reduceMotion ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.68, delay: index * 0.08, ease: easeOut }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>
        <div className="mt-8 max-w-4xl border-l border-[var(--color-line)] pl-5">
          <p className="text-lg leading-8 text-[var(--color-muted-strong)]">{personal.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="mechanical-button mechanical-button-primary" href="#projects">
              Work <ArrowDown size={16} strokeWidth={1.6} />
            </a>
            <a className="mechanical-button" href={personal.bookCallUrl} rel="noreferrer" target="_blank">
              Book a Call <Calendar size={16} strokeWidth={1.6} />
            </a>
            <a className="mechanical-button" href={personal.resumePdfUrl}>
              Resume <FileText size={16} strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.aside className="grid gap-4" variants={itemVariants}>
        <div className="shine-surface glass-shell interactive-card rounded-2xl p-5">
          <div className="flex justify-between gap-4 font-mono text-xs uppercase text-[var(--color-muted)]">
            <span>{primaryExperience.company}</span>
            <span>{primaryExperience.location}</span>
          </div>
          <p className="mt-5 font-mono text-sm leading-7 text-[var(--color-muted-strong)]">
            <span className="text-[var(--accent-red)]">role:</span> {primaryExperience.role}
            <br />
            <span className="text-[var(--accent-red)]">stack:</span> {primarySkills.join(", ")}
          </p>
        </div>
        <div className="shine-surface interactive-card rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-5">
          <p className="font-mono text-xs uppercase text-[var(--color-muted)]">{stats[0].label}</p>
          <p className="mt-3 font-mono text-5xl leading-none text-[var(--accent-red)]">{stats[0].value}</p>
          <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">{stats[0].sublabel}</p>
        </div>
      </motion.aside>
    </motion.section>
  );
}
