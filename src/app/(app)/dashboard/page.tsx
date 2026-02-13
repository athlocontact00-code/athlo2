import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/empty-state";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-body text-foreground-muted">
          Your overview and today&apos;s focus.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Today</CardTitle>
            <CardDescription>Planned activities</CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              title="No activities today"
              description="Add a workout or rest day in Calendar."
              variant="default"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recovery</CardTitle>
            <CardDescription>Strain & sleep</CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              title="No data yet"
              description="Connect a device or log manually in Health."
              variant="default"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
