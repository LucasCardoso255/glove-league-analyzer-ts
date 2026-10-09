import { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../database/database.types.js";
import type { RankedPlayerData } from "../models/leaderboardModel.js";

export class RankedPlayerRepository {
    async findAll(db: SupabaseClient<Database>) {
        return await db.from("ranked_player_data").select("*");
    }
    async findById(db: SupabaseClient<Database>, playerUuid: string) {
        return await db.from("ranked_player_data").select("*").eq("puuid", playerUuid)
    }
    async create(db: SupabaseClient<Database>, data: RankedPlayerData) {
        return await db.from("ranked_player_data").upsert(data);
    }
}