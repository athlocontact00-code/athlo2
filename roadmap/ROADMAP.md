# ATHLO2 Roadmap

## Vision
Premium training platform with WHOOP-style minimal dark UI + TrainingPeaks-like structure (plan vs done, metrics depth), with 4 modes:

1) Coach (trener)  
- Has athletes list (+ favorites)
- Private coach tasks + private coach diary
- Coach can drill into any athlete and see: Calendar / Training / Health / Progress / Diary

2) Athlete + Coach  
- Full access (as in paid/managed by coach)
- Athlete can edit “done” fields visible to coach (plan vs done flow)

3) Self-coached Athlete  
- Free + Pro ($5/mo) unlocks (feature gating)
- With Pro: near-parity with Athlete+Coach for analytics + health depth

4) Athlete + ATHLO AI  
- Same as (2) plus AI Coach (TrainingPeaks-style guidance + structured outputs)

## Day 1 Goal (no backend)
Deliver a cohesive foundation:
- App shell + navigation
- Mode switcher + locked states (clear UX)
- Athletes list + favorites + drill-in profile tabs
- Calendar v1 (week/day/month) with plan vs done + post-training feedback
- Diary/Health check-in + readiness + simple trends
- Coach area stubs: groups/meetings/polls/club + “create workout → athlete approve → appears in calendar” (in-memory)

## Quality bar (non-negotiable)
- Premium spacing, dark minimal, consistent components
- No broken routes
- All quality gates pass: pnpm lint && pnpm typecheck && pnpm build
- No node_modules/.next committed (gitignore enforced)
