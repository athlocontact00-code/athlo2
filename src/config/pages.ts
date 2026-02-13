export const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/calendar": "Calendar",
  "/training": "Training",
  "/health": "Health",
  "/progress": "Progress",
  "/diary": "Diary",
  "/messages": "Messages",
  "/athletes": "Athletes",
  "/coach": "Coach",
  "/settings": "Settings",
};

export function getPageTitle(pathname: string): string {
  return PAGE_TITLES[pathname] ?? "ATHLO2";
}
