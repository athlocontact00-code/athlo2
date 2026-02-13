import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background-muted">
        <FileQuestion className="h-7 w-7 text-foreground-muted" />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-title text-foreground">Page not found</h2>
        <p className="text-body-sm text-foreground-muted max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
        </p>
      </div>
      <Button asChild>
        <Link href="/dashboard">Back to dashboard</Link>
      </Button>
    </div>
  );
}
