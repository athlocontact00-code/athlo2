"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/config/nav";
import { useRole } from "@/contexts/role-context";

export function Sidebar() {
  const pathname = usePathname();
  const { isCoach } = useRole();

  const items = NAV_ITEMS.filter((item) => {
    if (item.coachOnly && !isCoach) return false;
    return true;
  });

  return (
    <aside className="hidden w-56 shrink-0 flex-col border-r border-border-soft bg-background-elevated md:flex">
      <div className="flex h-14 items-center border-b border-border-soft px-6">
        <Link href="/dashboard" className="text-title font-semibold text-foreground">
          ATHLO2
        </Link>
      </div>
      <nav className="flex-1 space-y-0.5 p-3">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-body-sm font-medium transition-colors",
                active
                  ? "bg-background-muted text-foreground"
                  : "text-foreground-muted hover:bg-background-muted hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
