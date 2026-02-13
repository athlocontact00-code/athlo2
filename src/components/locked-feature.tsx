"use client";

import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LockedFeatureProps {
  title: string;
  description?: string;
  ctaLabel?: string;
  className?: string;
}

export function LockedFeature({
  title,
  description,
  ctaLabel = "Go to Settings",
  className,
}: LockedFeatureProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-border-soft bg-background-card py-14 px-6 text-center shadow-sm min-h-[200px]",
        className
      )}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-background-elevated ring-1 ring-border-soft">
        <Lock className="h-7 w-7 text-foreground-muted" />
      </div>
      <h3 className="text-heading text-foreground">{title}</h3>
      {description && (
        <p className="mt-2 max-w-sm text-body-sm text-foreground-muted">
          {description}
        </p>
      )}
      <Link
        href="/settings"
        className="mt-6 inline-flex h-8 items-center justify-center rounded-lg border border-border bg-transparent px-3 text-xs font-medium hover:bg-background-muted"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
