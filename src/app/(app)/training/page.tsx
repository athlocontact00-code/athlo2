"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/empty-state";
import { LockedFeature } from "@/components/locked-feature";
import { useRole } from "@/contexts/role-context";

function TrainingContent() {
  const { athleteMode } = useRole();
  const isLocked = athleteMode === "solo_free";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Training plan</CardTitle>
      </CardHeader>
      <CardContent>
        {isLocked ? (
          <LockedFeature
            title="Upgrade to access training plans"
            description="Go Pro or connect with a coach to get structured workouts."
            variant="upgrade"
            ctaLabel="Upgrade to Pro"
          />
        ) : (
          <EmptyState
            title="No training plan yet"
            description="Your coach will assign workouts, or create one in Pro mode."
            variant="default"
          />
        )}
      </CardContent>
    </Card>
  );
}

export default function TrainingPage() {
  return (
    <div className="space-y-6">
      <p className="text-body text-foreground-muted">
        Workouts and training load.
      </p>
      <TrainingContent />
    </div>
  );
}
