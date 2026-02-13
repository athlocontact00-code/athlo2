"use client";

import { useRole } from "@/contexts/role-context";
import type { Role, AthleteMode } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { ChevronDown, User, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import * as React from "react";

const ATHLETE_MODES: { value: AthleteMode; label: string }[] = [
  { value: "solo_free", label: "Solo (Free)" },
  { value: "solo_pro", label: "Solo (Pro)" },
  { value: "with_coach", label: "With Coach" },
  { value: "with_ai_coach", label: "With AI Coach" },
];

export function RoleSwitcher() {
  const { role, athleteMode, setRole, setAthleteMode, isCoach } = useRole();
  const [roleOpen, setRoleOpen] = React.useState(false);
  const [modeOpen, setModeOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setRoleOpen((o) => !o)}
          className="gap-1.5"
        >
          {role === "coach" ? (
            <Users className="h-4 w-4" />
          ) : (
            <User className="h-4 w-4" />
          )}
          <span className="capitalize">{role}</span>
          <ChevronDown className="h-4 w-4 opacity-70" />
        </Button>
        {roleOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              aria-hidden
              onClick={() => setRoleOpen(false)}
            />
            <div className="absolute right-0 top-full z-50 mt-1 w-44 rounded-lg border border-border-soft bg-background-elevated py-1 shadow-lg">
              {(["athlete", "coach"] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    setRole(r as Role);
                    setRoleOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-2 text-left text-sm capitalize",
                    role === r
                      ? "bg-background-muted text-foreground"
                      : "text-foreground-muted hover:bg-background-muted hover:text-foreground"
                  )}
                >
                  {r === "coach" ? <Users className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  {r}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {!isCoach && (
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setModeOpen((o) => !o)}
            className="gap-1.5 text-foreground-muted"
          >
            {ATHLETE_MODES.find((m) => m.value === athleteMode)?.label ?? "Solo (Free)"}
            <ChevronDown className="h-4 w-4 opacity-70" />
          </Button>
          {modeOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                aria-hidden
                onClick={() => setModeOpen(false)}
              />
              <div className="absolute right-0 top-full z-50 mt-1 w-48 rounded-lg border border-border-soft bg-background-elevated py-1 shadow-lg">
                {ATHLETE_MODES.map((m) => (
                  <button
                    key={m.value}
                    type="button"
                    onClick={() => {
                      setAthleteMode(m.value);
                      setModeOpen(false);
                    }}
                    className={cn(
                      "flex w-full px-3 py-2 text-left text-sm",
                      athleteMode === m.value
                        ? "bg-background-muted text-foreground"
                        : "text-foreground-muted hover:bg-background-muted hover:text-foreground"
                    )}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
