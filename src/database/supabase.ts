import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types.js";

export function getConnection(supabase_url: string, supabase_key?: string, supabase_autenticated_key?: string) {
    const key = supabase_autenticated_key ?? supabase_key;

    if (!key) {
        throw new Error("Supabase key not provided.");
    }

    return createClient<Database>(supabase_url, key);
}