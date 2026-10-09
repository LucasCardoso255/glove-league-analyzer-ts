import { createClient } from "@supabase/supabase-js";
import { credentials } from "../app.js"; 
import type { Database } from "./database.types.js";

function getConnection(supabase_url: string, supabase_key: string) {
    return createClient<Database>(supabase_url, supabase_key);
}

export const database = getConnection(credentials.supabase_url, credentials.supabase_key);