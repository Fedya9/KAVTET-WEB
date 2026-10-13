import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 p-8">
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Streetwear
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">KAVTET</h1>
        <p className="max-w-md text-sm text-muted-foreground">
          Public storefront. Catalog and checkout will be added in later
          milestones. This page does not require a login.
        </p>
      </div>
      <Link
        href="/auth/login"
        className="text-sm underline underline-offset-4"
      >
        Partner login
      </Link>
    </main>
  );
}
