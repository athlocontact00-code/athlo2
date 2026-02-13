# ATHLO product spec — Day 1 foundation

Concise spec for roles, modes, navigation, gating, and core coach/athlete requirements. No backend; UI and stubs only.

---

## 1. Roles and modes

### Roles

- **Coach** — Manages athletes, groups, meetings, training approval, and private coach workspace.
- **Athlete** — Single account type; experience varies by **mode** (see below).

### Athlete modes

| Mode | Description |
|------|-------------|
| **Solo Free** | Limited depth: core tabs visible, some features locked or shallow (e.g. training plans require upgrade). |
| **Solo Pro** | Full data depth for a solo athlete; no coach. |
| **With Coach** | Full access; paid by coach. Coach sees athlete data; athlete can edit execution of planned training (stub). |
| **With AI Coach** | Everything from With Coach plus AI Coach UI (stub). |

Coach role has no “mode”; they always see Coach and Athletes tabs and full coach workspace.

---

## 2. Navigation tabs

Global nav (sidebar / mobile drawer):

- **Dashboard** — Overview, today’s focus.
- **Calendar** — Planned sessions and events.
- **Training** — Workouts, plans, load.
- **Health** — HRV, sleep, stress, soreness, illness, readiness (core module).
- **Progress** — Trends, analytics (TrainingPeaks-style: targets vs actual, zones, compliance — mocked).
- **Diary** — Notes and reflections.
- **Messages** — Chat with coach/team.
- **Athletes** — Coach only: list with favorites ⭐ (no separate favorites tab).
- **Coach** — Coach only: workspace (Tasks, Coach Diary, community stub).
- **Settings** — Account and preferences; role/mode switcher (dev-only OK).

---

## 3. Gating rules

- **Athletes** and **Coach** tabs are visible only for **Coach** role. Athletes do not see these in nav.
- **Athlete** sees the same core tabs (Dashboard, Calendar, Training, Health, Progress, Diary, Messages, Settings). Free vs Pro controls **depth** (what’s available inside each tab); With Coach and With AI Coach imply **full data depth**.
- **Locked / upgrade states** must look **premium** (intentional, not broken): use a shared **LockedFeature** (or equivalent) component with clear copy and a CTA placeholder (e.g. “Upgrade” or “Go to Settings”).

---

## 4. Coach requirements

- **Athletes page**
  - Single list of athletes.
  - **Favorites** ⭐ toggle **inside the list** (per row). No separate “Favorites” tab.
- **Coach workspace (Coach tab)**
  - **Tasks** — Coach to-dos (stub).
  - **Coach Diary** — Private coach notes (stub).
  - **Coach community**
    - Groups / Meetings / Polls (stub).
    - **Training proposal → Athlete approval → auto-add to Calendar** — stub only (no backend).

---

## 5. Athlete requirements

- **Training execution**
  - Athlete can edit “execution” of planned training (e.g. completed vs skipped, notes). Coach sees changes. **Stub model only** (no API).
- **Health (core module)**
  - HRV, sleep, stress, soreness, illness flags, readiness. All **mocked** for Day 1.
- **Training analytics (Progress / Training)**
  - TrainingPeaks vibe: **targets vs actual**, **time-in-zones**, **compliance**. **Mocked** for Day 1.

---

## 6. Implementation notes (Day 1)

- **Role + athlete mode** are held in existing **role context** (and athlete mode in same or sibling context). No backend; client state only.
- **Sidebar and nav** use this context everywhere: hide Athletes/Coach for Athlete role; Free vs Pro vs With Coach affects depth and locked/upgrade states inside pages.
- **LockedFeature** (or shared locked/upgrade component) used for all locked and upgrade states, with a CTA placeholder.
- **Role/mode switcher** in Settings (and optionally in topbar) is consistent and available; dev-only usage is acceptable for Day 1.
