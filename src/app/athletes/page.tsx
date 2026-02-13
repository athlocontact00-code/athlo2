"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MOCK_ATHLETES } from "@/data/mock";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRole } from "@/contexts/role-context";

export default function AthletesPage() {
  const { isCoach } = useRole();

  if (!isCoach) {
    return null; // Nav hidden for athletes, but route could be hit directly
  }

  return (
    <div className="space-y-6">
      <p className="text-body text-foreground-muted">
        Your athletes. Star favorites for quick access.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Athletes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-border-soft">
            {MOCK_ATHLETES.map((athlete) => (
              <li
                key={athlete.id}
                className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background-muted text-body font-medium text-foreground-muted">
                    {athlete.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{athlete.name}</p>
                    <p className="text-caption">{athlete.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className={cn(
                    "rounded p-1.5 transition-colors",
                    athlete.favorite
                      ? "text-primary"
                      : "text-foreground-muted hover:text-foreground"
                  )}
                  aria-label={athlete.favorite ? "Unstar" : "Star"}
                >
                  <Star
                    className="h-5 w-5"
                    fill={athlete.favorite ? "currentColor" : "none"}
                  />
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
