import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/empty-state";

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <p className="text-body text-foreground-muted">
        Trends and performance over time.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="No progress data yet"
            description="Complete workouts and sync data to see trends."
            variant="default"
          />
        </CardContent>
      </Card>
    </div>
  );
}
