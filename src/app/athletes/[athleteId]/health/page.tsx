import { getAthleteById } from "@/data/mock-athletes";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AthleteHealthPage({
  params,
}: {
  params: Promise<{ athleteId: string }>;
}) {
  const { athleteId } = await params;
  const athlete = getAthleteById(athleteId);
  if (!athlete) notFound();

  const metrics = [
    { label: "HRV", value: "62 ms", trend: "↑" },
    { label: "Sleep", value: "7h 20m", trend: "—" },
    { label: "Stress", value: "Low", trend: "—" },
    { label: "Soreness", value: "2/5", trend: "—" },
    { label: "Readiness", value: athlete.readiness === "green" ? "Good" : athlete.readiness === "yellow" ? "Attention" : "Needs attention", trend: "—" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-title text-foreground">Health</h2>
      <p className="text-body-sm text-foreground-muted">
        HRV, sleep, stress, soreness, illness flags, readiness (mocked).
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <Card key={m.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-body-sm font-medium text-foreground-muted">
                {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-body font-semibold text-foreground">{m.value}</p>
              {m.trend && m.trend !== "—" && (
                <p className="text-caption text-emerald-400">{m.trend} vs last week</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
