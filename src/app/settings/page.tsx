import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RoleSwitcher } from "@/components/layout/role-switcher";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <p className="text-body text-foreground-muted">
        Account and app preferences.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Role & mode</CardTitle>
          <p className="text-body-sm text-foreground-muted">
            Switch between Coach and Athlete. For Athlete, choose Solo (Free/Pro) or With Coach / AI Coach.
          </p>
        </CardHeader>
        <CardContent>
          <RoleSwitcher />
        </CardContent>
      </Card>
    </div>
  );
}
