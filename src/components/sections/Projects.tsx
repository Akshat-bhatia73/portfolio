import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/resume";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { sectionVariants } from "@/lib/motion";

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section id="projects" className="py-20" initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
      <div className="section-grid items-end">
        <div>
          <p className="font-mono text-xs uppercase text-[var(--color-muted)]">04 / Projects</p>
          <h2 className="mt-3 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none">Projects</h2>
        </div>
        <p className="text-lg leading-8 text-[var(--color-muted)]">{projects[0].description}</p>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
        {projects.map((project, index) => (
          <ProjectCard featured={index === 0} key={project.name} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
