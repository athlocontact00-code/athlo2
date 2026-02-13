# ATHLO2 Phases (Day 1 = 4 PRs)

Rules:
- One phase = one branch + one PR.
- Start each phase from main: `git checkout main && git pull`.
- Branch naming: `agent/nightshift-YYYYMMDD-HHMM-<phaseSlug>`.
- After EVERY meaningful change run:
  - `pnpm lint`
  - `pnpm typecheck`
  - `pnpm build`
  Fix immediately.
- No backend, no external integrations. Use in-memory mocks.
- Keep UI cohesive: same layout system, same card styles, same typography scale.

Order:
1) Phase 01 — Foundation App Shell + Mode Switcher + Locked States
   File: roadmap/phases/phase-01-foundation-shell.md

2) Phase 02 — Athletes (list + favorites + drill-in profile with tabs)
   File: roadmap/phases/phase-02-athletes.md

3) Phase 03 — Calendar v1 (week/day/month + plan vs done + feedback drawer)
   File: roadmap/phases/phase-03-calendar-v1.md

4) Phase 04 — Diary/Health + Coach stubs (groups/meetings/polls/club + create workout approval)
   File: roadmap/phases/phase-04-diary-health-coach.md
