import { requirePartner } from "@/modules/identity";

export default async function AdminHomePage() {
  await requirePartner();

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-3">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p className="text-sm text-muted-foreground">
        Partner access is active. Catalog, inventory, and checkout land in later
        milestones.
      </p>
    </div>
  );
}
