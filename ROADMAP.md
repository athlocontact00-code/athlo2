# ATHLO2 — AUTOPILOT ROADMAP (Source of Truth)

Repo root: /Users/bartoszkantarowski/athlo2
Remote: https://github.com/athlocontact00-code/athlo2.git
Default branch: main

## Mission (Day 1 / Nightshift)
Build a clean, premium ATHLO foundation from scratch with strict phase execution (one PR per phase).
The app must feel WHOOP-premium (dark, minimal, microinteractions) with TrainingPeaks structure (plan vs done, metrics placeholders).

## Non-negotiable rules
- Work ONLY in /Users/bartoszkantarowski/athlo2. Never touch ~/athlo.
- Never ask questions. Choose best defaults and continue.
- One phase = one branch + one PR. Do not mix scopes.
- Before each phase:
  1) git checkout main
  2) git pull
  3) git checkout -b agent/nightshift-YYYYMMDD-HHMM-phase-XX-<slug>
- After EVERY meaningful change run:
  - pnpm lint
  - pnpm typecheck
  - pnpm build
  Fix immediately if any fails.
- No backend. No external integrations. No secrets.
  - Data is mock/in-memory only.
  - Create a single mock source: src/data/mock.ts
  - Pure selectors in src/lib/selectors.ts
- Avoid massive refactors. Additive, minimal diffs.
- No TODOs. If a section is “stub”, it must still be coherent UI with copy, empty state, locked state.
- Keep UI premium + consistent:
  - One spacing scale, consistent typography.
  - Use shared primitives in src/components/ui (no random one-offs).
  - Cards, subtle borders, minimal shadows.

## Product modes (the 4 profiles)
A “Mode” is client-side state (localStorage). It drives gating and locked features.

1) coach
- Coach has athletes list and favorites.
- Coach has private tasks and private diary.
- Coach can open athlete detail and view athlete tabs: Calendar / Training / Health / Progress / Diary.
- Coach sees athlete “plan vs done” edits.

2) athlete_with_coach
- Full access to all sections.
- Athlete can edit “done” fields that coach can later see (in-memory simulation).

3) self_coached
- Free tier: most of the app visible, but advanced analytics sections show LockedFeature.
- Pro tier ($5/mo) is a toggle (visual only) that unlocks those sections.

4) athlete_with_ai
- Same as athlete_with_coach.
- Additional AI Coach UI blocks visible (stub, coherent).

## Routes required (App)
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

## Definition of Done (for every phase)
- Implements EXACT phase scope (no scope creep).
- Includes loading/empty/error states where relevant.
- Mode gating and locked UI are respected.
- All routes render without runtime errors.
- pnpm lint, pnpm typecheck, pnpm build all pass.
- PR description includes:
  - Summary of changes
  - How to test (exact pages/steps)
  - What’s next (next phase only)
