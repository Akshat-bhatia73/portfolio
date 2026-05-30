# Repository Instructions

- Use the resume content in `src/data/resume.ts` as the single source of truth for portfolio copy.
- Do not invent or infer portfolio content that is not present in the resume data.
- The consulting engagement must never show dates anywhere on the site.
- The consulting client name must read exactly `Confidential U.S. Client`.
- For GitHub actions such as pulling, editing repository descriptions, opening issues, or raising PRs, use the locally configured PAT with the GitHub CLI:
  `source .env.gh.local && <github cli command>`
- Before posting anything to GitHub, verify the authenticated username is `Akshat-bhatia73`.
- Keep implementation TypeScript-strict, performant, accessible, and consistent with a TanStack Start + Vite stack unless the project is explicitly switched to plain Vite.
