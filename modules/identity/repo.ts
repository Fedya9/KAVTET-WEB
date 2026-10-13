import { createClient } from "@/lib/supabase/server";
import type { Partner } from "./domain";

type PartnerRow = {
  user_id: string;
  display_name: string | null;
  is_active: boolean;
};

function toPartner(row: PartnerRow): Partner {
  return {
    userId: row.user_id,
    displayName: row.display_name,
    isActive: row.is_active,
  };
}

export async function findActivePartnerByUserId(
  userId: string,
): Promise<Partner | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("partners")
    .select("user_id, display_name, is_active")
    .eq("user_id", userId)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  const row = data as PartnerRow;
  if (!row.is_active) {
    return null;
  }

  return toPartner(row);
}
