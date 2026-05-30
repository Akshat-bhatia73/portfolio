export function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex min-h-8 items-center rounded-[0_18px_18px_18px] border border-[var(--color-line)] bg-[rgba(242,234,215,0.05)] px-3 py-1.5 font-mono text-[0.78rem] text-[var(--color-muted-strong)] transition-colors hover:border-[rgba(215,255,53,0.55)] hover:text-[var(--color-accent-acid)]">
      {label}
    </span>
  );
}
