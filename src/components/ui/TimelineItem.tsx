import { motion } from "framer-motion";
import type { Experience } from "@/data/resume";
import { itemVariants } from "@/lib/motion";

export function TimelineItem({ item }: { item: Experience }) {
  const isConsulting = item.type === "consulting";
  const dates = item.endDate ? `${item.startDate} - ${item.endDate}` : `${item.startDate} - Present`;

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`shine-surface interactive-card relative border p-5 transition-colors [border-radius:16px] ${
        isConsulting ? "glass-shell border-[var(--glass-line)]" : "border-[var(--color-line)] bg-[var(--color-panel)]"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3 font-mono text-[0.75rem] text-[var(--color-muted)]">
        {item.badge ? (
          <span className="glass-badge" data-tone="red">
            {item.badge}
          </span>
        ) : null}
        {item.showDates ? <span>{dates}</span> : null}
        <span>{item.location}</span>
      </div>
      <h3 className="mt-4 text-2xl font-medium text-[var(--color-ink)]">{item.role}</h3>
      <p className="mt-1 font-mono text-sm text-[var(--color-muted-strong)]">{item.company}</p>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-[var(--color-muted-strong)]">
        {item.bullets.slice(0, 3).map((bullet) => (
          <li className="grid grid-cols-[12px_1fr] gap-3" key={bullet.text}>
            <span className="mt-2 size-1.5 bg-[var(--accent-red)]" />
            <span>{bullet.text}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
