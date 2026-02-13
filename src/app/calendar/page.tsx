import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMockWeekCalendar } from "@/data/mock";

export default function CalendarPage() {
  const items = getMockWeekCalendar();

  return (
    <div className="space-y-6">
      <p className="text-body text-foreground-muted">
        Your week at a glance.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>This week</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between rounded-lg border border-border-soft bg-background-muted/50 px-4 py-3 text-body-sm"
              >
                <span className="font-medium text-foreground">{item.title}</span>
                <span className="text-caption">
                  {new Date(item.start).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
