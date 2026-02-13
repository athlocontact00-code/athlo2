import { getAthleteById } from "@/data/mock-athletes";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default async function AthleteOverviewPage({
  params,
}: {
  params: Promise<{ athleteId: string }>;
}) {
  const { athleteId } = await params;
  const athlete = getAthleteById(athleteId);
  if (!athlete) notFound();

  const readinessStyles = {
    green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    yellow: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    red: "bg-red-500/15 text-red-400 border-red-500/30",
  };

  return (
    <div className="space-y-6">
      <h2 className="text-title text-foreground">Overview</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-body-sm font-medium text-foreground-muted">
              Readiness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span
              className={cn(
                "inline-flex rounded-full border px-2.5 py-1 text-sm font-medium capitalize",
                readinessStyles[athlete.readiness]
              )}
            >
              {athlete.readiness === "green" ? "Good" : athlete.readiness === "yellow" ? "Attention" : "Needs attention"}
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-body-sm font-medium text-foreground-muted">
              Next workout
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-body font-medium text-foreground">Easy run, 45 min</p>
            <p className="text-caption">Tomorrow 7:00 AM</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-body-sm font-medium text-foreground-muted">
              Recent note
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-body-sm text-foreground line-clamp-2">
              Felt strong on intervals. Slight calf tightness in the evening.
            </p>
            <p className="mt-1 text-caption">2 days ago</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
