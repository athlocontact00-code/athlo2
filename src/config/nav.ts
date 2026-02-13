import {
  LayoutDashboard,
  Calendar,
  Dumbbell,
  Heart,
  TrendingUp,
  BookOpen,
  MessageSquare,
  Users,
  Briefcase,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  coachOnly?: boolean;
  athleteOnly?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/calendar", label: "Calendar", icon: Calendar },
  { href: "/training", label: "Training", icon: Dumbbell },
  { href: "/health", label: "Health", icon: Heart },
  { href: "/progress", label: "Progress", icon: TrendingUp },
  { href: "/diary", label: "Diary", icon: BookOpen },
  { href: "/messages", label: "Messages", icon: MessageSquare },
  { href: "/athletes", label: "Athletes", icon: Users, coachOnly: true },
  { href: "/coach", label: "Coach", icon: Briefcase, coachOnly: true },
  { href: "/settings", label: "Settings", icon: Settings },
];
