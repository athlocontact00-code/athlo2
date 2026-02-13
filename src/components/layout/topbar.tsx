"use client";

import { cn } from "@/lib/utils";

interface TopbarProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export function Topbar({ title, children, className }: TopbarProps) {
  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center justify-between border-b border-border-soft bg-background-elevated px-4 md:px-6",
        className
      )}
    >
      <h1 className="text-title text-foreground">{title}</h1>
      <div className="flex items-center gap-2">{children}</div>
    </header>
  );
}
