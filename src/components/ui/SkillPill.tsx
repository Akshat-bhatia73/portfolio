export function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex min-h-8 items-center rounded-md border border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-panel)_72%,transparent)] px-3 py-1.5 font-mono text-[0.76rem] uppercase text-[var(--color-muted-strong)] transition-colors hover:border-[var(--accent-red)] hover:bg-[var(--accent-red)] hover:text-white">
      {label}
    </span>
  );
}
