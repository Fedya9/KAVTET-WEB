import { requireAuthenticated } from "@/modules/identity";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAuthenticated();
  return <>{children}</>;
}
