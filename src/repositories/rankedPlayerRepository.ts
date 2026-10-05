import { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../database/database.types.js";

export class RankedPlayerRepository {
    async findAll(db: SupabaseClient<Database>) {
        db.from("ranked_player_data").select("*");
    }
}