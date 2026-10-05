import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types.js";
import type { envCredentials } from "../env.js";

export function createSupabase(env: envCredentials) {
    return createClient<Database>(env.supabase_url,env.supabase_key);
}
