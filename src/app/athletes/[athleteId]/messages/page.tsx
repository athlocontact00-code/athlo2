import { getAthleteById } from "@/data/mock-athletes";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AthleteMessagesPage({
  params,
}: {
  params: Promise<{ athleteId: string }>;
}) {
  const { athleteId } = await params;
  const athlete = getAthleteById(athleteId);
  if (!athlete) notFound();

  return (
    <div className="space-y-6">
      <h2 className="text-title text-foreground">Messages</h2>
      <Card>
        <CardHeader>
          <CardTitle>Conversation with {athlete.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-body-sm text-foreground-muted">
            No messages yet. Chat thread will appear here (stub).
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
