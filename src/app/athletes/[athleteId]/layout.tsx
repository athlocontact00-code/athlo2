"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useRole } from "@/contexts/role-context";
import { LockedFeature } from "@/components/locked-feature";
import { getAthleteById } from "@/data/mock-athletes";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  Dumbbell,
  Heart,
  TrendingUp,
  BookOpen,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";

const SECTIONS = [
  { href: "overview", label: "Overview", icon: LayoutDashboard },
  { href: "calendar", label: "Calendar", icon: Calendar },
  { href: "training", label: "Training", icon: Dumbbell },
  { href: "health", label: "Health", icon: Heart },
  { href: "progress", label: "Progress", icon: TrendingUp },
  { href: "diary", label: "Diary", icon: BookOpen },
  { href: "messages", label: "Messages", icon: MessageSquare },
] as const;

export default function AthleteContextLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const pathname = usePathname();
  const { isCoach } = useRole();
  const athleteId = params.athleteId as string;
  const athlete = getAthleteById(athleteId);
  const base = `/athletes/${athleteId}`;

  if (!isCoach) {
    return (
      <div className="space-y-6">
        <LockedFeature
          title="Coach only"
          description="Athlete context is for coaches. Switch to Coach role in Settings."
          ctaLabel="Go to Settings"
        />
      </div>
    );
  }

  if (!athlete) {
    return (
      <div className="space-y-6">
        <p className="text-foreground-muted">Athlete not found.</p>
        <Link href="/athletes" className="text-primary hover:underline">
          ← Back to athletes
        </Link>
      </div>
    );
  }

  const currentSection = pathname?.replace(base, "").replace(/^\//, "") || "overview";

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <aside className="w-full shrink-0 md:w-52">
        <div className="sticky top-4 space-y-4">
          <Link
            href="/athletes"
            className="inline-flex items-center gap-2 text-body-sm text-foreground-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to list
          </Link>
          <div className="rounded-xl border border-border-soft bg-background-card p-3">
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-foreground-muted">
              Athlete
            </p>
            <p className="font-medium text-foreground">{athlete.name}</p>
            <p className="text-xs text-foreground-muted">{athlete.sport}</p>
          </div>
          <nav className="flex flex-col gap-0.5">
            {SECTIONS.map(({ href, label, icon: Icon }) => {
              const isActive = currentSection === href;
              return (
                <Link
                  key={href}
                  href={href === "overview" ? base : `${base}/${href}`}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-body-sm font-medium transition-colors",
                    isActive
                      ? "bg-background-muted text-foreground"
                      : "text-foreground-muted hover:bg-background-muted hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
