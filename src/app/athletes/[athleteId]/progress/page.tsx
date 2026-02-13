import { getAthleteById } from "@/data/mock-athletes";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AthleteProgressPage({
  params,
}: {
  params: Promise<{ athleteId: string }>;
}) {
  const { athleteId } = await params;
  const athlete = getAthleteById(athleteId);
  if (!athlete) notFound();

  return (
    <div className="space-y-6">
      <h2 className="text-title text-foreground">Progress</h2>
      <p className="text-body-sm text-foreground-muted">
        Targets vs actual, time-in-zones, compliance (TrainingPeaks-style, mocked).
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Load & compliance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-background-muted/50 p-4">
              <p className="text-caption text-foreground-muted">Last 7 days</p>
              <p className="mt-1 text-xl font-semibold text-foreground">8.2 h · 94% compliance</p>
            </div>
            <div className="rounded-lg bg-background-muted/50 p-4">
              <p className="text-caption text-foreground-muted">Zones (this week)</p>
              <p className="mt-1 text-body-sm text-foreground">Z1 45% · Z2 35% · Z3 20%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
