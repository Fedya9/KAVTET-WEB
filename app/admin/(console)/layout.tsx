import { LogoutButton } from "@/components/logout-button";
import { requirePartner } from "@/modules/identity";
import Link from "next/link";

export default async function AdminConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const partner = await requirePartner();
  const label = partner.displayName ?? "Partner";

  return (
    <div className="flex min-h-svh flex-col">
      <header className="flex h-16 items-center justify-between border-b border-border px-6">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="font-semibold tracking-tight">
            KAVTET Admin
          </Link>
          <span className="text-sm text-muted-foreground">{label}</span>
        </div>
        <LogoutButton />
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
