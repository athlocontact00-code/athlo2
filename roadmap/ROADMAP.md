# ATHLO2 Roadmap (source of truth)

This repo is built in **sequential phases**. Each phase:
- is implemented on its own branch
- produces exactly **one PR**
- must pass quality gates: `pnpm lint && pnpm typecheck && pnpm build`
- must update its own phase checklist as DONE

## Non-negotiable build rules
- Work only in this repo (`~/athlo2`)
- No external services/secrets (mock/stub only)
- Prefer small additive changes (no massive refactors)
- One phase = one PR
- Keep the app premium: clean layout, consistent components, no placeholders that break UX

## Day 1 Goal (foundation)
Deliver a premium dark minimal app foundation with:
- App shell (sidebar + mobile drawer)
- Role/mode gating (Coach / Athlete+Coach / Self-coached / Athlete+ATHLO AI)
- Core routes scaffolded
- In-memory mock data only

See `roadmap/PHASES.md` for the ordered phase list.
