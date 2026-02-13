# Phase 02 — Role/Mode gating + locked states

## Goal
Client-side role/mode switcher that gates features & shows a clear "locked" UI state.

## Modes
1) Coach
2) Athlete+Coach
3) Self-coached athlete (with Pro locks)
4) Athlete+ATHLO AI (AI coach unlocked)

## Scope
- Role/mode context stored client-side (localStorage ok)
- Switcher UI in topbar/settings
- LockedFeature component with consistent styling
- Per-route gating rules (simple initial rules, documented)

## Checklist
- [ ] Mode context implemented
- [ ] Switcher UI implemented
- [ ] LockedFeature component implemented
- [ ] Gating rules applied on key pages
- [ ] Quality gates pass
- [ ] Phase doc updated to DONE
