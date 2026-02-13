# Phase 02 — Athletes: list + favorites + drill-in profile

## Scope
Implement Athletes area that works for Coach + athlete contexts.

## Deliverables
A) Athletes list page (/athletes)
- Search input (filter by name)
- Favorite toggle (star)
- Athlete card shows:
  - name, sport (optional), status pill (e.g., "Ready", "Tired" mock)
  - last check-in summary mock
- Favorites view:
  - either a “Favorites” section or a filter toggle

B) Athlete drill-in
Coach must be able to click an athlete and view profile with tabs:
- Calendar
- Training
- Health
- Progress
- Diary

Implementation constraints:
- No backend; use in-memory mock dataset.
- Drill-in can be:
  - /athletes/[id]
  - or a panel inside /athletes
But MUST support deep linking (URL preferred).

C) Athlete data model (mock)
Create a small mock store in src/data or src/lib:
- athletes array with ids
- per-athlete: calendar items, diary check-ins, health metrics placeholders, training history placeholders

D) Mode behavior
- Coach mode: athletes list is primary, drill-in enabled
- Athlete modes: /athletes should still exist, but show either:
  - “My profile” (single athlete view), or
  - locked/limited messaging (but do not break navigation)

## Checklist
- [ ] /athletes list + search
- [ ] favorites toggle persisted in local state
- [ ] drill-in page/panel with tabs
- [ ] mock data structure created
- [ ] mode behavior correct
- [ ] pnpm lint/typecheck/build pass
