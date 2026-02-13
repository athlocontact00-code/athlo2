# Phase 04 — Diary/Health + Coach stubs + workout approval flow

## Scope
Implement daily check-in + readiness + trends, plus Coach area stubs and an in-memory approval loop.

## Deliverables

A) Diary (/diary)
Daily check-in form:
- sleep (hours + quality)
- soreness (1–10)
- stress (1–10)
- mood (1–10)
- motivation (1–10)
- illness flag
- injury flag
- notes

Outputs:
- readiness score (simple weighted calc)
- status label (e.g., Green/Yellow/Red)
- 7-day mini trends cards (sleep/stress/soreness)

B) Health (/health)
Health dashboard:
- readiness card
- HRV/resting HR placeholders
- sleep summary card
- injury/illness flags summary
(All mock data is fine but should look real.)

C) Coach area (/coach)
Tabs/sections (stubs UI ok):
- Groups
- Meetings
- Polls
- Club

D) Create workout → athlete approve → calendar
Implement an in-memory flow:
- Coach creates planned workout draft (type/date/title/duration)
- Athlete sees “Pending approvals” somewhere (e.g., /training or /calendar header)
- Athlete can approve
- Approved workout appears in calendar as planned item

Mode behavior:
- Only Coach can create
- Athlete modes can approve their own

## Checklist
- [ ] diary check-in + readiness + trends
- [ ] health dashboard placeholders
- [ ] coach stubs sections
- [ ] workout approval flow implemented
- [ ] pnpm lint/typecheck/build pass
