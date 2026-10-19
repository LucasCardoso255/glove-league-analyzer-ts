import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types.js";

export function getConnection(supabase_url: string, supabase_key: string) {
    return createClient<Database>(supabase_url, supabase_key);
}