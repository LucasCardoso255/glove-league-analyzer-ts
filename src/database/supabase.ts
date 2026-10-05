import { createClient } from "@supabase/supabase-js";
import { Credentials } from "../env.js";

const credentials = new Credentials()
const env = credentials.loadSupabaseCredentials();

const supabase = createClient(
    env.supabase_key,
    env.supabase_url
);

await supabase.from()