"use client";

import { useRole } from "@/contexts/role-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  const { role, setRole } = useRole();

  return (
    <div className="space-y-6">
      <h2 className="text-title text-foreground">Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle>Role (dev)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-body-sm text-foreground-muted mb-4">
            Switch between Coach and Athlete. Only Coach can access /athletes and athlete context.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setRole("coach")}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${role === "coach" ? "bg-primary text-primary-foreground" : "bg-background-muted text-foreground-muted"}`}
            >
              Coach
            </button>
            <button
              type="button"
              onClick={() => setRole("athlete")}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${role === "athlete" ? "bg-primary text-primary-foreground" : "bg-background-muted text-foreground-muted"}`}
            >
              Athlete
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
