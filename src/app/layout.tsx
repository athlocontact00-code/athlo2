import type { Metadata } from "next";
import { RoleProvider } from "@/contexts/role-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATHLO2",
  description: "Training, health & progress",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <RoleProvider>{children}</RoleProvider>
      </body>
    </html>
  );
}
