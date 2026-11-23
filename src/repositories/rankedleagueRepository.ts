import { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../database/database.types.js";
import type { RankedLeagueData } from "../models/leaderboardModel.js";

export class RankedLeagueRepository {
    constructor(private db: SupabaseClient<Database>) {}
    async findAll() {
        const { data: result, error } = await this.db.from("ranked_league_data").select("*");
        if (error) throw error;
        return result;
    }
    async findById(playerUuid: string) {
        const { data: result, error } = await this.db.from("ranked_league_data").select("*").eq("puuid", playerUuid);
        if (error) throw error;
        return result;
    }
    async create(data: RankedLeagueData) {
        const { data: result, error } = await this.db.from("ranked_league_data").upsert(data);
        if (error) throw error;
        return result;
    }
}