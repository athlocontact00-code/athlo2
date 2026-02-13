import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "default" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild, ...props }, ref) => {
    const Comp = asChild ? "a" : "button";
    return (
      <Comp
        ref={asChild ? undefined : (ref as React.Ref<HTMLButtonElement>)}
        className={cn(
          "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "default" && "bg-primary text-primary-foreground hover:opacity-90",
          variant === "outline" && "border border-border bg-transparent hover:bg-background-muted",
          variant === "ghost" && "hover:bg-background-muted",
          size === "sm" && "h-8 px-3 text-xs",
          size === "default" && "h-10 px-4",
          size === "icon" && "h-10 w-10",
          className
        )}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
