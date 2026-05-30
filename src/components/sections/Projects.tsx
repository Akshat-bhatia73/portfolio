import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/resume";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { sectionVariants } from "@/lib/motion";

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section id="projects" className="py-20" initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <h2 className="text-[clamp(2.25rem,6vw,4.625rem)] font-black leading-[0.9]">Projects</h2>
        <p className="text-lg leading-8 text-[var(--color-muted)]">{projects[0].description}</p>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        {projects.map((project, index) => (
          <ProjectCard featured={index === 0} key={project.name} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
