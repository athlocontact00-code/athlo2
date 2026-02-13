# Phase 03 — Calendar v1: week/day/month + plan vs done + feedback

## Scope
Implement usable calendar with TrainingPeaks-like structure.

## Deliverables
A) Calendar views on /calendar
- Week view (default)
- Day view
- Month view
- Navigation: prev/next + "Today"
- Today highlight
- Selected day state (month tap shows list on mobile)

B) Items: Plan vs Done
- Planned workout cards (ghost style)
- Completed activity cards (solid style)
Each item must show:
- title/type (Run/Bike/Swim/Strength)
- planned duration or distance (mock)
- completed duration or distance (mock)
- intensity placeholder (zones/RPE)

C) Interactions
- Clicking planned item:
  - opens drawer/modal to view/edit planned workout
  - allow delete planned item
- Clicking done item:
  - opens post-training feedback drawer:
    - RPE 1–10
    - feel chips (e.g., "Fresh", "Heavy legs", "Stressed")
    - comment
    - soreness/pain flag

D) Athlete edit “done” fields
- In athlete modes (coached/self/ai), allow editing done fields.
- In coach mode, allow viewing done fields (read-only is fine).
- Ensure plan vs done is clearly visible.

E) Data
- Keep it all in-memory mock store.
- Calendar must read from store and write to store.

## Checklist
- [ ] week/day/month views implemented
- [ ] navigation + today + selection
- [ ] planned vs completed rendering
- [ ] planned edit/delete
- [ ] feedback drawer controls
- [ ] athlete editing of done fields
- [ ] pnpm lint/typecheck/build pass
