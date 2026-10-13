import { LogoutButton } from "@/components/logout-button";
import Link from "next/link";

export default function AdminForbiddenPage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-semibold tracking-tight">Access denied</h1>
      <p className="max-w-md text-center text-sm text-muted-foreground">
        This account is signed in but is not an authorized KAVTET partner.
        Partner access is granted only by an existing operator in the database.
      </p>
      <div className="flex items-center gap-3">
        <Link href="/" className="text-sm underline underline-offset-4">
          Back to store
        </Link>
        <LogoutButton />
      </div>
    </main>
  );
}
