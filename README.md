# Aegis Oilfield Services Limited — Homepage

A single-page marketing site built as a developer intern assessment.

## Tech Stack

- **React 18 + TypeScript** — component structure, typed props/data
- **Vite** — build tooling and dev server
- **Tailwind CSS v4** (`@tailwindcss/vite` plugin) — utility-first styling, custom design tokens (`navy`, `steel`, `amber`) extended in the Tailwind config
- **lucide-react** — icon set (per spec: "crisp, uniform vector strokes")
- **Inter** (Google Fonts) — typeface specified in the design system

No backend, router, or state management library was used — the brief is a single static page.

## Assumptions Made

- **Contact form** submits nowhere yet — it's wired up with local state and validation-ready markup, but needs a real endpoint (e.g. Formspree, a serverless function, or a CRM webhook).
- **Certification badges** (ISO 9001, ISO 45001) are treated as text/visual claims only, not linked to verifiable certificates.
- Interpreted "Why Choose Us" as warranting its own component (`WhyUs.tsx`) since it's structurally and visually distinct from Services in the document specifications.
- Assumed desktop-first content priority with the mobile breakpoint collapsing to single-column stacks.

## What I'd Improve With More Time

- **Real content**: licensed photography, verified certifications, and legal copy (privacy policy/terms currently link to `#`).
- **Form backend + validation**: server-side handling, inline field validation, honeypot/spam protection.
- **Accessibility pass**: full keyboard-navigation testing, ARIA labeling audit, and color-contrast verification against WCAG AAA (the spec asks for it explicitly on the hero).
- **Motion**: subtle scroll-triggered reveals for sections (e.g. Framer Motion) to match the "premium corporate" feel the spec is going for — currently the only interactivity is hover/focus states.
- **Testing**: component tests (Vitest + React Testing Library) and a basic Lighthouse/CI check for performance and accessibility regressions.
- **Content management**: move copy (services, stats, offices) out of `constants.ts`/`services.ts` into a CMS or JSON-driven config if this were to be maintained by non-developers.
- **SEO/meta**: `<title>`, meta description, Open Graph tags, and a favicon — none of which were in scope of the visual spec but matter for a real launch.
