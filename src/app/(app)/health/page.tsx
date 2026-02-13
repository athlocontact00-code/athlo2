import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/empty-state";

export default function HealthPage() {
  return (
    <div className="space-y-6">
      <p className="text-body text-foreground-muted">
        Sleep, HRV, and recovery metrics.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Health metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="No health data yet"
            description="Connect a wearable or add manual entries."
            variant="default"
          />
        </CardContent>
      </Card>
    </div>
  );
}
