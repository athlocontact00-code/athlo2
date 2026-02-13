/**
 * Mock athlete list data for Coach view. No backend.
 */

export type ReadinessStatus = "green" | "yellow" | "red";

export interface MockAthlete {
  id: string;
  name: string;
  email: string;
  sport: string;
  readiness: ReadinessStatus;
  lastCheckIn: string; // ISO
  compliance: number; // 0–100
  favorite: boolean;
}

const now = new Date();
const day = (d: number) => new Date(now);
day.setDate(day.getDate() - d);
const toISO = (d: Date, h: number, m: number) => {
  const x = new Date(d);
  x.setHours(h, m, 0, 0);
  return x.toISOString();
};

export const MOCK_ATHLETES: MockAthlete[] = [
  {
    id: "1",
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    sport: "Running",
    readiness: "green",
    lastCheckIn: toISO(day(0), 8, 15),
    compliance: 94,
    favorite: true,
  },
  {
    id: "2",
    name: "Jordan Lee",
    email: "jordan.lee@example.com",
    sport: "Cycling",
    readiness: "yellow",
    lastCheckIn: toISO(day(1), 7, 0),
    compliance: 78,
    favorite: false,
  },
  {
    id: "3",
    name: "Sam Taylor",
    email: "sam.taylor@example.com",
    sport: "Triathlon",
    readiness: "green",
    lastCheckIn: toISO(day(0), 6, 45),
    compliance: 88,
    favorite: true,
  },
  {
    id: "4",
    name: "Casey Rivera",
    email: "casey.rivera@example.com",
    sport: "Swimming",
    readiness: "red",
    lastCheckIn: toISO(day(3), 9, 0),
    compliance: 62,
    favorite: false,
  },
  {
    id: "5",
    name: "Morgan Blake",
    email: "morgan.blake@example.com",
    sport: "Running",
    readiness: "yellow",
    lastCheckIn: toISO(day(1), 18, 30),
    compliance: 71,
    favorite: true,
  },
  {
    id: "6",
    name: "Riley Chen",
    email: "riley.chen@example.com",
    sport: "Strength",
    readiness: "green",
    lastCheckIn: toISO(day(0), 7, 20),
    compliance: 96,
    favorite: false,
  },
  {
    id: "7",
    name: "Jamie Walsh",
    email: "jamie.walsh@example.com",
    sport: "Cycling",
    readiness: "red",
    lastCheckIn: toISO(day(5), 8, 0),
    compliance: 55,
    favorite: false,
  },
];

const STORAGE_KEY = "athlo-athlete-favorites";

function loadFavorites(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw) as string[];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

export function getAthletesWithFavorites(): MockAthlete[] {
  const fav = typeof window !== "undefined" ? loadFavorites() : new Set();
  return MOCK_ATHLETES.map((a) => ({ ...a, favorite: fav.has(a.id) }));
}

export function getAthleteById(id: string): MockAthlete | undefined {
  return MOCK_ATHLETES.find((a) => a.id === id);
}

export function setAthleteFavorite(id: string, favorite: boolean): void {
  const fav = loadFavorites();
  if (favorite) fav.add(id);
  else fav.delete(id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...fav]));
  } catch {
    // ignore
  }
}
