import { motion, useReducedMotion } from "framer-motion";
import { personal } from "@/data/resume";
import { duration, easeOut } from "@/lib/motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function SiteNav() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(17,16,14,0.84)] backdrop-blur-md"
      initial={reduceMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: duration.base, ease: easeOut }}
    >
      <nav className="mx-auto flex min-h-16 w-[min(1220px,calc(100%-32px))] items-center justify-between gap-4 font-mono text-[0.75rem] text-[var(--color-muted)]">
        <a className="font-semibold text-[var(--color-ink)]" href="#top" aria-label={`${personal.name} home`}>
          {personal.name}
        </a>
        <div className="hidden items-center gap-4 sm:flex">
          {navItems.map((item) => (
            <a className="transition-colors hover:text-[var(--color-accent-acid)]" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
