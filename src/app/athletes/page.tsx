"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRole } from "@/contexts/role-context";
import { LockedFeature } from "@/components/locked-feature";
import {
  MOCK_ATHLETES,
  getAthletesWithFavorites,
  setAthleteFavorite,
  type MockAthlete,
  type ReadinessStatus,
} from "@/data/mock-athletes";
import { cn } from "@/lib/utils";
import { Star, Search } from "lucide-react";

type Filter = "all" | "favorites" | "needs_attention";

function ReadinessBadge({ status }: { status: ReadinessStatus }) {
  const styles = {
    green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    yellow: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    red: "bg-red-500/15 text-red-400 border-red-500/30",
  };
  const labels = { green: "Good", yellow: "Attention", red: "Needs attention" };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium capitalize",
        styles[status]
      )}
    >
      {labels[status]}
    </span>
  );
}

function formatLastCheckIn(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - d.getTime()) / (24 * 60 * 60 * 1000));
  if (diffDays === 0) return "Today " + d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  return d.toLocaleDateString();
}

export default function AthletesPage() {
  const { isCoach } = useRole();
  const [athletes, setAthletes] = useState<MockAthlete[]>(() =>
    typeof window !== "undefined" ? getAthletesWithFavorites() : MOCK_ATHLETES.map((a) => ({ ...a }))
  );
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    setAthletes(getAthletesWithFavorites());
  }, []);

  const toggleFavorite = useCallback((id: string, current: boolean) => {
    setAthleteFavorite(id, !current);
    setAthletes((prev) =>
      prev.map((a) => (a.id === id ? { ...a, favorite: !current } : a))
    );
  }, []);

  const filtered = useMemo(() => {
    let list = athletes;
    if (filter === "favorites") list = list.filter((a) => a.favorite);
    if (filter === "needs_attention") list = list.filter((a) => a.readiness === "red" || a.readiness === "yellow");
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.email.toLowerCase().includes(q) ||
          a.sport.toLowerCase().includes(q)
      );
    }
    return list;
  }, [athletes, filter, search]);

  if (!isCoach) {
    return (
      <div className="space-y-6">
        <LockedFeature
          title="Coach only"
          description="Athlete list is for coaches. Switch to Coach role in Settings."
          ctaLabel="Go to Settings"
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-body text-foreground-muted">
        Your athletes. Star favorites for quick access.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted" />
          <input
            type="search"
            placeholder="Search by name, email, sport…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-border-soft bg-background-elevated py-2 pl-9 pr-3 text-body-sm text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div className="flex gap-1 rounded-lg border border-border-soft bg-background-elevated p-1">
          {(["all", "favorites", "needs_attention"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors",
                filter === f
                  ? "bg-background-muted text-foreground"
                  : "text-foreground-muted hover:text-foreground"
              )}
            >
              {f.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border-soft bg-background-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-body-sm">
            <thead>
              <tr className="border-b border-border-soft bg-background-muted/50">
                <th className="w-10 px-4 py-3"></th>
                <th className="px-4 py-3 font-medium text-foreground">Name</th>
                <th className="px-4 py-3 font-medium text-foreground">Sport</th>
                <th className="px-4 py-3 font-medium text-foreground">Readiness</th>
                <th className="px-4 py-3 font-medium text-foreground">Last check-in</th>
                <th className="px-4 py-3 font-medium text-foreground">Compliance</th>
                <th className="w-20 px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-foreground-muted">
                    No athletes match your filters.
                  </td>
                </tr>
              ) : (
                filtered.map((athlete) => (
                  <tr
                    key={athlete.id}
                    className="border-b border-border-soft last:border-0 hover:bg-background-muted/30 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => toggleFavorite(athlete.id, athlete.favorite)}
                        className={cn(
                          "rounded p-1.5 transition-colors",
                          athlete.favorite ? "text-primary" : "text-foreground-muted hover:text-foreground"
                        )}
                        aria-label={athlete.favorite ? "Unstar" : "Star"}
                      >
                        <Star
                          className="h-5 w-5"
                          fill={athlete.favorite ? "currentColor" : "none"}
                        />
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/athletes/${athlete.id}`}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {athlete.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-foreground-muted">{athlete.sport}</td>
                    <td className="px-4 py-3">
                      <ReadinessBadge status={athlete.readiness} />
                    </td>
                    <td className="px-4 py-3 text-foreground-muted">
                      {formatLastCheckIn(athlete.lastCheckIn)}
                    </td>
                    <td className="px-4 py-3">
                      <span className={cn(
                        athlete.compliance >= 80 ? "text-emerald-400" : athlete.compliance >= 60 ? "text-amber-400" : "text-red-400"
                      )}>
                        {athlete.compliance}%
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/athletes/${athlete.id}`}
                        className="text-xs font-medium text-primary hover:underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
