import { getAthleteById } from "@/data/mock-athletes";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AthleteCalendarPage({
  params,
}: {
  params: Promise<{ athleteId: string }>;
}) {
  const { athleteId } = await params;
  const athlete = getAthleteById(athleteId);
  if (!athlete) notFound();

  const stubItems = [
    { title: "Morning run", date: "Mon 14", time: "7:00" },
    { title: "Strength", date: "Tue 15", time: "18:00" },
    { title: "Rest", date: "Wed 16", time: "—" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-title text-foreground">Calendar</h2>
      <Card>
        <CardHeader>
          <CardTitle>This week</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {stubItems.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-lg border border-border-soft bg-background-muted/50 px-4 py-3 text-body-sm"
              >
                <span className="font-medium text-foreground">{item.title}</span>
                <span className="text-caption">
                  {item.date} · {item.time}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
