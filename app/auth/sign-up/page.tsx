import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm space-y-4 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign-up is closed
        </h1>
        <p className="text-sm text-muted-foreground">
          KAVTET admin access is invitation-only. Partner records are created by
          an operator; you cannot grant yourself access.
        </p>
        <Link href="/auth/login" className="text-sm underline underline-offset-4">
          Partner login
        </Link>
      </div>
    </div>
  );
}
