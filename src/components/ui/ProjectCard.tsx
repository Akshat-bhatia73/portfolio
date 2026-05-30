import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/resume";
import { itemVariants } from "@/lib/motion";
import { SkillPill } from "./SkillPill";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -6 }}
      className={`flex min-h-[360px] flex-col justify-between border p-6 transition-colors [border-radius:28px_8px_28px_8px] ${
        featured
          ? "border-[rgba(242,234,215,0.26)] bg-[var(--color-paper)] text-[var(--color-bg)]"
          : "border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-ink)]"
      }`}
    >
      <div>
        <div className="mb-5 flex min-h-8 items-center justify-between gap-3">
          <span className="rounded-[0_18px_18px_18px] border border-current px-3 py-1 font-mono text-[0.75rem] opacity-75">
            {project.badge ?? project.metric}
          </span>
          <div className="flex gap-2">
            {project.liveUrl ? (
              <a aria-label={`${project.name} live site`} className="p-2 transition-colors hover:text-[var(--color-accent-orange)]" href={project.liveUrl} rel="noreferrer" target="_blank">
                <ExternalLink size={18} />
              </a>
            ) : null}
            {project.githubUrl ? (
              <a aria-label={`${project.name} GitHub repository`} className="p-2 transition-colors hover:text-[var(--color-accent-orange)]" href={project.githubUrl} rel="noreferrer" target="_blank">
                <Github size={18} />
              </a>
            ) : null}
          </div>
        </div>
        <h3 className="text-[clamp(1.875rem,4vw,3rem)] font-black leading-[0.95]">{project.name}</h3>
        <p className="mt-5 text-base leading-7 opacity-80">{project.description}</p>
      </div>
      <div>
        <p className="mt-7 font-mono text-3xl leading-none text-[var(--color-accent-orange)]">{project.metric}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <SkillPill key={tech} label={tech} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}
