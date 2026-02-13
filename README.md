# ATHLO2

Next.js (App Router) + TypeScript + Tailwind + shadcn-style UI. Premium dark theme, role-based nav (Coach / Athlete), and placeholder pages with empty states.

## Setup

```bash
pnpm install
```

## Develop

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Root redirects to `/dashboard`.

## Scripts

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm start` — start production server
- `pnpm lint` — ESLint
- `pnpm typecheck` — TypeScript check

## Structure

- **Layout**: Persistent sidebar (desktop/tablet), mobile drawer, topbar with page title and quick actions placeholder.
- **Routes**: `/dashboard`, `/calendar`, `/training`, `/health`, `/progress`, `/diary`, `/messages`, `/athletes` (coach), `/coach` (coach workspace), `/settings`.
- **Role modes**: Toggle Coach / Athlete in the topbar. For Athlete: Solo (Free), Solo (Pro), With Coach, With AI Coach. Nav items and empty states (e.g. locked/upgrade) reflect the current mode.
- **Design**: Dark theme, typography scale, spacing tokens, card and button variants in `src/app/globals.css` and `src/components/ui/`.
- **Mock data**: `src/data/mock.ts` (one athlete, sample week calendar).

## Checks

```bash
pnpm lint && pnpm typecheck && pnpm build
```
