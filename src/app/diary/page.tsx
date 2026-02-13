import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/empty-state";

export default function DiaryPage() {
  return (
    <div className="space-y-6">
      <p className="text-body text-foreground-muted">
        Notes and reflections.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Diary</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="No entries yet"
            description="Add a note about how you felt or how the session went."
            variant="default"
          />
        </CardContent>
      </Card>
    </div>
  );
}
