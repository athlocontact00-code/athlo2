# Phase 01 — Foundation: App shell + routes scaffold

## Goal
Premium app shell like WHOOP: dark, minimal, clean spacing, with a desktop sidebar and mobile drawer. Scaffold all core routes.

## Scope (in-scope)
- Create layout shell for `(app)` group:
  - Desktop sidebar nav
  - Mobile drawer nav
  - Topbar with page title
- Add routes (pages can be minimal but real):
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
- Add a small UI kit foundation (Button/Card/etc) if missing
- Add a single source of truth for nav config

## Out of scope
- Backend, auth, DB
- Real integrations (Strava/Garmin/etc)
- Full feature logic (only scaffold)

## Checklist
- [ ] App shell layout created and used by all app routes
- [ ] Sidebar + mobile drawer working
- [ ] All routes render without errors
- [ ] Nav config centralized
- [ ] `pnpm lint` passes
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` passes
- [ ] Phase doc updated to DONE
