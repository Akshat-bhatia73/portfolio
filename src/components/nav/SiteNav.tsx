import { BriefcaseBusiness, CircleUserRound, FolderCode, Mail, Moon, Sun, Wrench } from "lucide-react";
import { useState } from "react";
import { personal } from "@/data/resume";
import { LiquidGlass } from "@/components/ui/LiquidGlass";

const navItems = [
  { label: "About", href: "#about", icon: CircleUserRound },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Projects", href: "#projects", icon: FolderCode },
  { label: "Contact", href: "#contact", icon: Mail },
] as const;

type Theme = "light" | "dark";

export function SiteNav() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== "undefined" && document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 hidden px-4 sm:block">
        <LiquidGlass
          as="nav"
          className="glass-shell mx-auto flex min-h-14 w-[min(1120px,calc(100%-32px))] items-center justify-between gap-5 rounded-full px-5 font-mono text-[0.72rem] uppercase tracking-normal text-[var(--color-muted)]"
          refraction={{ radius: 34, blur: 4, bezelWidth: 18, specularOpacity: 0.42 }}
        >
          <a className="flex items-center gap-3 text-[var(--color-ink)]" href="#top" aria-label={`${personal.name} home`}>
            <span className="size-2 rounded-full bg-[var(--accent-red)]" />
            <span>{personal.name}</span>
          </a>
          <div className="flex items-center gap-5">
            {navItems.map((item) => (
              <a className="transition-colors hover:text-[var(--color-ink)]" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </LiquidGlass>
      </header>

      <nav className="fixed inset-x-0 bottom-3 z-50 px-3 sm:hidden" aria-label="Primary">
        <LiquidGlass
          className="glass-shell mx-auto grid max-w-[27rem] grid-cols-6 items-center rounded-full px-2 py-2"
          refraction={{ radius: 30, blur: 5, bezelWidth: 18, specularOpacity: 0.5 }}
        >
          {navItems.map(({ href, label, icon: Icon }) => (
            <a className="grid min-h-11 place-items-center rounded-full text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]" href={href} key={href} aria-label={label}>
              <Icon size={18} strokeWidth={1.6} />
            </a>
          ))}
          <ThemeToggle compact theme={theme} onToggle={toggleTheme} />
        </LiquidGlass>
      </nav>
    </>
  );
}

function ThemeToggle({ compact = false, theme, onToggle }: { compact?: boolean; theme: Theme; onToggle: () => void }) {
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={
        compact
          ? "grid min-h-11 place-items-center rounded-full text-[var(--color-ink)]"
          : "shine-surface inline-flex min-h-9 items-center gap-2 overflow-hidden rounded-full border border-[var(--color-line)] px-3 text-[var(--color-ink)] transition-colors hover:border-[var(--accent-red)]"
      }
      type="button"
      onClick={onToggle}
    >
      <Icon size={16} strokeWidth={1.6} />
      {compact ? null : <span>{theme}</span>}
    </button>
  );
}
