import { getAthleteById } from "@/data/mock-athletes";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AthleteDiaryPage({
  params,
}: {
  params: Promise<{ athleteId: string }>;
}) {
  const { athleteId } = await params;
  const athlete = getAthleteById(athleteId);
  if (!athlete) notFound();

  const entries = [
    { date: "Today", note: "Felt strong on intervals. Slight calf tightness in the evening." },
    { date: "Yesterday", note: "Recovery run. Legs fresh." },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-title text-foreground">Diary</h2>
      <Card>
        <CardHeader>
          <CardTitle>Recent entries</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {entries.map((e, i) => (
              <li key={i} className="border-b border-border-soft pb-4 last:border-0 last:pb-0">
                <p className="text-caption text-foreground-muted">{e.date}</p>
                <p className="mt-1 text-body-sm text-foreground">{e.note}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
