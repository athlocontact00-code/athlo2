"use client";

import { Lock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type LockedFeatureVariant = "locked" | "upgrade";

interface LockedFeatureProps {
  /** Short title (e.g. "Coach only", "Upgrade to access training plans") */
  title: string;
  /** Optional explanation */
  description?: string;
  variant: LockedFeatureVariant;
  /** CTA label (placeholder; no real action yet) */
  ctaLabel?: string;
  /** Optional CTA click (e.g. scroll to Settings) */
  onCtaClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Premium locked/upgrade state for role or mode gating.
 * Use everywhere we show "locked" or "upgrade" so the UI looks intentional, not broken.
 */
export function LockedFeature({
  title,
  description,
  variant,
  ctaLabel,
  onCtaClick,
  className,
  children,
}: LockedFeatureProps) {
  const isLocked = variant === "locked";
  const isUpgrade = variant === "upgrade";

  const defaultCta = isLocked ? "Go to Settings" : "Upgrade";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-border-soft bg-background-card py-14 px-6 text-center shadow-sm transition-shadow",
        "min-h-[200px]",
        className
      )}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-background-elevated ring-1 ring-border-soft">
        {isLocked ? (
          <Lock className="h-7 w-7 text-foreground-muted" />
        ) : (
          <Sparkles className="h-7 w-7 text-primary" />
        )}
      </div>
      <h3 className="text-heading text-foreground">{title}</h3>
      {description && (
        <p className="mt-2 max-w-sm text-body-sm text-foreground-muted">
          {description}
        </p>
      )}
      {(ctaLabel ?? defaultCta) && (
        <Button
          className="mt-6"
          size="sm"
          variant={isUpgrade ? "default" : "outline"}
          onClick={onCtaClick}
        >
          {ctaLabel ?? defaultCta}
        </Button>
      )}
      {children}
    </div>
  );
}
