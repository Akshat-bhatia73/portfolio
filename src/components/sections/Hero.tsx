import { ArrowDown, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { experience, personal, skills, stats } from "@/data/resume";
import { easeOut, itemVariants, sectionVariants } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const primaryExperience = experience[0];
  const primarySkills = skills.flatMap((group) => group.skills).slice(0, 5);

  return (
    <motion.section
      id="top"
      className="grid min-h-[calc(100svh-4rem)] gap-5 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,390px)]"
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      variants={sectionVariants}
    >
      <motion.div className="relative overflow-hidden border border-[var(--color-line)] bg-[var(--color-panel)] p-[clamp(1.625rem,5vw,3.75rem)] [border-radius:18px]" variants={itemVariants}>
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 bottom-10 size-64 rounded-[38%_62%_46%_54%] bg-[var(--color-accent-orange)] opacity-80 mix-blend-screen"
          animate={reduceMotion ? undefined : { x: [0, -8, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div className="pointer-events-none absolute inset-4 rounded-xl border border-[rgba(215,255,53,0.25)]" />
        <div className="relative z-10">
          <p className="inline-flex rounded-[0_18px_18px_18px] border border-[var(--color-line)] bg-[rgba(215,255,53,0.06)] px-3 py-2 font-mono text-xs text-[var(--color-accent-acid)]">
            {personal.title}
          </p>
          <h1 className="mt-10 max-w-[780px] text-[clamp(3.875rem,10vw,8.875rem)] font-black leading-[0.78]">
            {personal.name.split(" ").map((word, index) => (
              <span className="block overflow-hidden" key={word}>
                <motion.span
                  className={index === 1 ? "inline-block skew-x-[-8deg] text-[var(--color-bg)] [-webkit-text-stroke:1px_var(--color-paper)]" : "inline-block"}
                  initial={reduceMotion ? false : { y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.72, delay: index * 0.08, ease: easeOut }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-muted-strong)] sm:text-xl">{personal.tagline}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              className="inline-flex min-h-12 items-center gap-2 rounded-[0_18px_18px_18px] border border-[var(--color-accent-acid)] bg-[var(--color-accent-acid)] px-5 font-black text-[var(--color-bg)]"
              href="#projects"
            >
              View Work <ArrowDown size={18} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              className="inline-flex min-h-12 items-center gap-2 rounded-[0_18px_18px_18px] border border-[var(--color-line)] bg-[rgba(242,234,215,0.06)] px-5 font-black text-[var(--color-ink)]"
              href={personal.resumePdfUrl}
            >
              Resume <FileText size={18} />
            </motion.a>
          </div>
        </div>
      </motion.div>
      <motion.aside className="grid gap-5" variants={itemVariants}>
        <div className="border border-[var(--color-line)] bg-[var(--color-panel-deep)] p-5 [border-radius:18px]">
          <div className="flex justify-between gap-4 font-mono text-xs text-[var(--color-muted)]">
            <span>{primaryExperience.company}</span>
            <span>{primaryExperience.location}</span>
          </div>
          <div className="mt-5 grid gap-3 font-mono text-sm leading-7 text-[var(--color-muted-strong)]">
            <p><span className="text-[var(--color-accent-rose)]">role:</span> <span className="text-[var(--color-accent-blue)]">{primaryExperience.role}</span></p>
            <p><span className="text-[var(--color-accent-rose)]">metric:</span> <span className="text-[var(--color-accent-acid)]">{stats[0].value}</span> {stats[0].label}</p>
            <p><span className="text-[var(--color-accent-rose)]">stack:</span> {primarySkills.join(", ")}</p>
          </div>
        </div>
        {stats.slice(0, 2).map((stat) => (
          <div className="border border-[var(--color-line)] bg-[var(--color-panel)] p-5 [border-radius:18px]" key={stat.value}>
            <div className="font-mono text-[3.25rem] leading-none text-[var(--color-accent-orange)]">{stat.value}</div>
            <p className="mt-3 leading-7 text-[var(--color-muted)]">{stat.sublabel}</p>
          </div>
        ))}
      </motion.aside>
    </motion.section>
  );
}
