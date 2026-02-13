export type AthleteMode =
  | "solo_free"
  | "solo_pro"
  | "with_coach"
  | "with_ai_coach";

export type Role = "coach" | "athlete";

export interface Athlete {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  favorite: boolean;
}

export interface CalendarItem {
  id: string;
  title: string;
  start: string; // ISO
  end: string;
  type: "training" | "recovery" | "race" | "other";
  color?: string;
}

export const MOCK_ATHLETE: Athlete = {
  id: "1",
  name: "Alex Morgan",
  email: "alex.morgan@example.com",
  favorite: true,
};

export const MOCK_ATHLETES: Athlete[] = [
  MOCK_ATHLETE,
  {
    id: "2",
    name: "Jordan Lee",
    email: "jordan.lee@example.com",
    favorite: false,
  },
  {
    id: "3",
    name: "Sam Taylor",
    email: "sam.taylor@example.com",
    favorite: true,
  },
];

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function toISO(date: Date, hour: number, min: number) {
  const d = new Date(date);
  d.setHours(hour, min, 0, 0);
  return d.toISOString();
}

export function getMockWeekCalendar(base = new Date()): CalendarItem[] {
  const items: CalendarItem[] = [];
  const types: CalendarItem["type"][] = ["training", "recovery", "race", "other"];
  const titles = [
    "Morning run",
    "Strength",
    "Rest day",
    "Intervals",
    "Long run",
    "Yoga",
    "Race: 10K",
  ];
  for (let i = 0; i < 7; i++) {
    const d = addDays(base, i);
    const count = i % 3 === 0 ? 2 : 1;
    for (let j = 0; j < count; j++) {
      items.push({
        id: `cal-${i}-${j}`,
        title: titles[(i + j) % titles.length],
        start: toISO(d, 7 + j * 4, 0),
        end: toISO(d, 8 + j * 4, 30),
        type: types[(i + j) % types.length],
      });
    }
  }
  return items;
}
