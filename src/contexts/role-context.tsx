"use client";

import * as React from "react";
import type { Role, AthleteMode } from "@/data/mock";

type RoleContextValue = {
  role: Role;
  athleteMode: AthleteMode | null;
  setRole: (r: Role) => void;
  setAthleteMode: (m: AthleteMode | null) => void;
  isCoach: boolean;
  canAccess: (feature: string) => boolean;
};

const RoleContext = React.createContext<RoleContextValue | null>(null);

const COACH_ONLY_FEATURES = ["athletes", "coach"];
const ATHLETE_MODE_FEATURES: Record<AthleteMode, string[]> = {
  solo_free: ["dashboard", "calendar", "training", "health", "progress", "diary", "messages", "settings"],
  solo_pro: ["dashboard", "calendar", "training", "health", "progress", "diary", "messages", "settings"],
  with_coach: ["dashboard", "calendar", "training", "health", "progress", "diary", "messages", "settings"],
  with_ai_coach: ["dashboard", "calendar", "training", "health", "progress", "diary", "messages", "settings"],
};

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = React.useState<Role>("athlete");
  const [athleteMode, setAthleteModeState] = React.useState<AthleteMode | null>("solo_free");

  const setRole = React.useCallback((r: Role) => {
    setRoleState(r);
    if (r === "coach") setAthleteModeState(null);
    else setAthleteModeState("solo_free");
  }, []);

  const setAthleteMode = React.useCallback((m: AthleteMode | null) => {
    setAthleteModeState(m);
  }, []);

  const isCoach = role === "coach";

  const canAccess = React.useCallback(
    (feature: string) => {
      if (COACH_ONLY_FEATURES.includes(feature)) return isCoach;
      if (isCoach) return true;
      const mode = athleteMode ?? "solo_free";
      return ATHLETE_MODE_FEATURES[mode]?.includes(feature) ?? false;
    },
    [isCoach, athleteMode]
  );

  const value: RoleContextValue = {
    role,
    athleteMode,
    setRole,
    setAthleteMode,
    isCoach,
    canAccess,
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
