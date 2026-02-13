import { getAthleteById } from "@/data/mock-athletes";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AthleteTrainingPage({
  params,
}: {
  params: Promise<{ athleteId: string }>;
}) {
  const { athleteId } = await params;
  const athlete = getAthleteById(athleteId);
  if (!athlete) notFound();

  return (
    <div className="space-y-6">
      <h2 className="text-title text-foreground">Training</h2>
      <Card>
        <CardHeader>
          <CardTitle>Current plan</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-body-sm text-foreground-muted">
            Base phase · 4 weeks remaining. Planned vs actual and compliance (stub).
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-background-muted/50 p-3 text-center">
              <p className="text-2xl font-semibold text-foreground">87%</p>
              <p className="text-caption">Compliance</p>
            </div>
            <div className="rounded-lg bg-background-muted/50 p-3 text-center">
              <p className="text-2xl font-semibold text-foreground">12.2h</p>
              <p className="text-caption">Planned</p>
            </div>
            <div className="rounded-lg bg-background-muted/50 p-3 text-center">
              <p className="text-2xl font-semibold text-foreground">10.6h</p>
              <p className="text-caption">Actual</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
