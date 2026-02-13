import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/empty-state";

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <p className="text-body text-foreground-muted">
        Chat with your coach or team.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="No messages yet"
            description="Messages will appear here when you connect with a coach."
            variant="default"
          />
        </CardContent>
      </Card>
    </div>
  );
}
