# Phase 01 — Foundation: App Shell + Mode Switcher + Locked States

## Scope
Implement the skeleton that everything else relies on.

## Deliverables
A) App shell (dark premium)
- Desktop: left sidebar (fixed) + content area
- Mobile: top bar + drawer nav
- Consistent page container and typography scale

B) Routes (must exist and render)
- /dashboard
- /calendar
- /training
- /health
- /progress
- /diary
- /athletes
- /messages
- /coach
- /settings

C) Mode switcher (client-side)
Modes:
- coach
- athlete_coached
- athlete_self
- athlete_ai

The switcher must:
- be visible globally (topbar area)
- switch mode instantly
- persist in localStorage

D) Feature gating + Locked UX
- Create a reusable <LockedFeature/> component:
  - title
  - why locked (copy)
  - CTA label (e.g., “Upgrade to Pro” or “Enable ATHLO AI”)
- Define a gating map so each route can declare:
  - allowed modes
  - locked reason/cta for disallowed modes
- For disallowed routes: render LockedFeature instead of blank page.

E) Design constraints
- Premium dark theme by default
- Minimal cards, soft borders, plenty spacing
- No giant refactors later: set patterns now (layout components, UI primitives)

## Non-goals
- No real auth
- No database
- No integrations

## Checklist
- [ ] App shell implemented (desktop sidebar + mobile drawer)
- [ ] All routes render within shell
- [ ] Mode switcher works + persisted
- [ ] LockedFeature component done
- [ ] Gating map implemented + applied to all routes
- [ ] pnpm lint/typecheck/build pass
