"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/empty-state";
import { LockedFeature } from "@/components/locked-feature";
import { useRole } from "@/contexts/role-context";

export default function CoachPage() {
  const { isCoach } = useRole();

  if (!isCoach) {
    return (
      <div className="space-y-6">
        <LockedFeature
          title="Coach only"
          description="This workspace is for coaches. Switch to Coach role in Settings to access."
          variant="locked"
          ctaLabel="Go to Settings"
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-body text-foreground-muted">
        Tasks, Coach Diary (private), and community: Groups, meetings, polls, training proposal → approval → Calendar (stub).
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <EmptyState
              title="No tasks yet"
              description="Coach to-dos will appear here."
              variant="default"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Coach Diary</CardTitle>
          </CardHeader>
          <CardContent>
            <EmptyState
              title="Private notes"
              description="Your coach-only diary (not visible to athletes)."
              variant="default"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Groups</CardTitle>
          </CardHeader>
          <CardContent>
            <EmptyState
              title="No groups yet"
              description="Create a group to organize athletes."
              variant="default"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Meetings & polls</CardTitle>
          </CardHeader>
          <CardContent>
            <EmptyState
              title="Nothing scheduled"
              description="Schedule a meeting or create a poll."
              variant="default"
            />
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Training proposal → Athlete approval → Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <EmptyState
              title="No pending approvals"
              description="Proposals awaiting athlete approval will auto-add to Calendar (stub)."
              variant="default"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
