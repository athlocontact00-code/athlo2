import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/empty-state";

export default function CoachPage() {
  return (
    <div className="space-y-6">
      <p className="text-body text-foreground-muted">
        Groups, meetings, polls & training approval.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
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
            <CardTitle>Training approval</CardTitle>
          </CardHeader>
          <CardContent>
            <EmptyState
              title="No pending approvals"
              description="Athlete training plans awaiting your approval will appear here."
              variant="default"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
