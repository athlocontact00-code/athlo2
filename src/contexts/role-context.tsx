"use client";

import * as React from "react";

export type Role = "coach" | "athlete";

type RoleContextValue = {
  role: Role;
  setRole: (r: Role) => void;
  isCoach: boolean;
};

const RoleContext = React.createContext<RoleContextValue | null>(null);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = React.useState<Role>("coach");

  const setRole = React.useCallback((r: Role) => {
    setRoleState(r);
  }, []);

  const value: RoleContextValue = {
    role,
    setRole,
    isCoach: role === "coach",
  };

  return (
    <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
  );
}

export function useRole() {
  const ctx = React.useContext(RoleContext);
  if (!ctx) throw new Error("useRole must be used within RoleProvider");
  return ctx;
}
