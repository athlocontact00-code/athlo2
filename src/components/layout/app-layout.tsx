"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import { MobileDrawer } from "./mobile-drawer";
import { RoleSwitcher } from "./role-switcher";
import { getPageTitle } from "@/config/pages";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  return (
    <div className="flex min-h-screen flex-col bg-background md:flex-row">
      <Sidebar />
      <div className="flex flex-1 flex-col min-h-screen">
        <Topbar title={title}>
          <MobileDrawer />
          <div className="ml-2 flex items-center gap-2">
            <RoleSwitcher />
            {/* Quick actions placeholder */}
            <span className="text-caption hidden sm:inline">Quick actions</span>
          </div>
        </Topbar>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
