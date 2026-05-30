# Repository Instructions

- Use the resume content in `src/data/resume.ts` as the single source of truth for portfolio copy.
- Do not invent or infer portfolio content that is not present in the resume data.
- The consulting engagement must never show dates anywhere on the site.
- The consulting client name must read exactly `Confidential U.S. Client`.
- For GitHub actions such as pulling, editing repository descriptions, opening issues, or raising PRs, use the locally configured PAT with the GitHub CLI:
  `source .env.gh.local && <github cli command>`
- Before posting anything to GitHub, verify the authenticated username is `Akshat-bhatia73`.
- Use Bun as the package manager for this repository. Prefer `bun install`, `bun run <script>`, and `bun add` over npm/yarn/pnpm commands.
- Keep dependency versions exact in `package.json`; do not use semver ranges such as `^` or `~`.
- Enforce Bun's minimum package release age at 10 days or more for installs, including the initial install.
- Keep implementation TypeScript-strict, performant, accessible, and consistent with a TanStack Start + Vite stack unless the project is explicitly switched to plain Vite.
- Follow the Code Couture design direction in `docs/design-guide/design-guide.md` and the selected concept in `docs/design-guide/code-couture.html` for colors, typography, component shapes, layout, and animation behavior.
- The visual language should show UI development craft: expressive editorial composition, asymmetric components, code-art details, and bold but disciplined accent use. Avoid generic dark SaaS layouts and plain rounded-rectangle button styles.
- Implement animations with Framer Motion using crisp editorial motion: section fade-up reveals, restrained hover lift, one-time count-up stats, and reduced-motion fallbacks. Avoid parallax, bouncy easing, and continuous distracting motion.
