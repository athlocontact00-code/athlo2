import { Lock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description?: string;
  variant?: "default" | "locked" | "upgrade";
  className?: string;
  action?: { label: string; onClick?: () => void };
  children?: React.ReactNode;
}

export function EmptyState({
  title,
  description,
  variant = "default",
  className,
  action,
  children,
}: EmptyStateProps) {
  const isLocked = variant === "locked";
  const isUpgrade = variant === "upgrade";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border-soft bg-background-muted/50 py-16 px-6 text-center",
        className
      )}
    >
      {(isLocked || isUpgrade) && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background-elevated">
          {isLocked ? (
            <Lock className="h-6 w-6 text-foreground-muted" />
          ) : (
            <Sparkles className="h-6 w-6 text-primary" />
          )}
        </div>
      )}
      <h3 className="text-heading text-foreground">{title}</h3>
      {description && (
        <p className="mt-2 max-w-sm text-body-sm text-foreground-muted">
          {description}
        </p>
      )}
      {action && (
        <Button className="mt-6" size="sm" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
      {children}
    </div>
  );
}
