import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/resume";
import { itemVariants } from "@/lib/motion";
import { SkillPill } from "./SkillPill";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.012 }}
      className={`shine-surface interactive-card flex min-h-[360px] flex-col justify-between border p-6 transition-colors [border-radius:16px_6px_16px_6px] ${
        featured
          ? "border-[rgba(242,234,215,0.26)] bg-[var(--color-paper)] text-[var(--color-bg)]"
          : "border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-ink)]"
      }`}
    >
      <div>
        <div className="mb-5 flex min-h-8 items-center justify-between gap-3">
          <span className={featured ? "glass-badge border-black/20 bg-white/20 text-black" : "glass-badge"}>
            {project.badge ?? project.metric}
          </span>
          <div className="flex gap-2">
            {project.liveUrl ? (
              <a aria-label={`${project.name} live site`} className="rounded-full p-2 transition-colors hover:bg-[var(--accent-red)] hover:text-white" href={project.liveUrl} rel="noreferrer" target="_blank">
                <ExternalLink size={18} />
              </a>
            ) : null}
            {project.githubUrl ? (
              <a aria-label={`${project.name} GitHub repository`} className="rounded-full p-2 transition-colors hover:bg-[var(--accent-red)] hover:text-white" href={project.githubUrl} rel="noreferrer" target="_blank">
                <Github size={18} />
              </a>
            ) : null}
          </div>
        </div>
        <h3 className="text-[clamp(1.875rem,4vw,3rem)] font-medium leading-[0.98]">{project.name}</h3>
        <p className="mt-5 text-base leading-7 opacity-80">{project.description}</p>
      </div>
      <div>
        <p className="mt-7 font-mono text-3xl leading-none text-[var(--accent-red)]">{project.metric}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <SkillPill key={tech} label={tech} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}
