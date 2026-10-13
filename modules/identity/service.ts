import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { AuthUser, Partner } from "./domain";
import { findActivePartnerByUserId } from "./repo";

const ADMIN_LOGIN_PATH = "/auth/login";
const ADMIN_FORBIDDEN_PATH = "/admin/forbidden";

export async function getCurrentAuthUser(): Promise<AuthUser | null> {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  const userId = data?.claims?.sub;

  if (error || typeof userId !== "string" || userId.length === 0) {
    return null;
  }

  const email =
    typeof data?.claims?.email === "string" ? data.claims.email : undefined;

  return { userId, email };
}

export async function requireAuthenticated(): Promise<AuthUser> {
  const user = await getCurrentAuthUser();
  if (!user) {
    redirect(ADMIN_LOGIN_PATH);
  }
  return user;
}

export async function getCurrentPartner(): Promise<Partner | null> {
  const user = await getCurrentAuthUser();
  if (!user) {
    return null;
  }
  return findActivePartnerByUserId(user.userId);
}

/** Call from every admin page and server action. Layouts are not a security boundary. */
export async function requirePartner(): Promise<Partner> {
  const user = await requireAuthenticated();
  const partner = await findActivePartnerByUserId(user.userId);
  if (!partner) {
    redirect(ADMIN_FORBIDDEN_PATH);
  }
  return partner;
}
