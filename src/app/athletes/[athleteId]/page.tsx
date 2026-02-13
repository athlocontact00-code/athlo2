import { redirect } from "next/navigation";

export default function AthleteContextPage({
  params,
}: {
  params: Promise<{ athleteId: string }>;
}) {
  const { athleteId } = await params;
  redirect(`/athletes/${athleteId}/overview`);
}
