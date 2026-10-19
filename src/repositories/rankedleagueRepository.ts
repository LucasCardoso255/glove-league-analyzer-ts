import { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../database/database.types.js";
import type { RankedLeagueData } from "../models/leaderboardModel.js";

export class RankedLeagueRepository {
    async findAll(db: SupabaseClient<Database>) {
        const { data: result, error } = await db.from("ranked_league_data").select("*");
        if (error) throw error;
        return result;
    }
    async findById(db: SupabaseClient<Database>, playerUuid: string) {
        const { data: result, error } = await db.from("ranked_league_data").select("*").eq("puuid", playerUuid);
        if (error) throw error;
        return result;
    }
    async create(db: SupabaseClient<Database>, data: RankedLeagueData) {
        const { data: result, error } = await db.from("ranked_league_data").upsert(data);
        if (error) throw error;
        return result;
    }
}