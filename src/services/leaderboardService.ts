import { RankedLeagueRepository } from "../repositories/rankedleagueRepository.js";
import { RiotClient } from "../client/http/riotClient.js";
import type { RankedLeagueData } from "../models/leaderboardModel.js";
import type { Database } from "../database/database.types.js";
import type { SupabaseClient } from "@supabase/supabase-js";

export class LeaderboardService {
    constructor(private riotClient: RiotClient, private database: SupabaseClient<Database>) {}
    repository = new RankedLeagueRepository()

    async getLeaderboard() {
        try {
            await this.repository.findAll(this.database);
        } catch (error) {
            throw new Error("Search failed: " + error);
        }
    }
    async getLeaderboardPlayerById(playerUuid: string) {
        try {
            await this.repository.findById(this.database, playerUuid);
        } catch (error) {
            throw error;
        }
    }
    async insertLeaderboardEntry(obj: RankedLeagueData) {
        try {
            await this.repository.create(this.database, obj);
        } catch (error) {
            throw error;
        }
    }
    async requestLeagueData(endpoint: string, pathParams?: string) { //adicionar o retorno do service sendo o tipo entries
        try {
            return await this.riotClient.get(endpoint + (pathParams ?? ""))
        } catch (error) {
            throw error;
        }
    }
}