import { RankedLeagueRepository } from "../repositories/rankedleagueRepository.js";
import { RiotClient } from "../client/http/riotClient.js";
import type { RankedLeagueData, Entries, LeagueEntry } from "../models/leaderboardModel.js";
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
    async mapEntries(originalEntries: LeagueEntry[]): Promise<Entries> {
        return Promise.all(
            originalEntries.map(entry => this.mapRankedLeagueData(entry))
        );
    }
    async mapRankedLeagueData(entry: LeagueEntry): Promise<RankedLeagueData> {
        try {
            const mappedEntry: RankedLeagueData = {
                puuid: entry.puuid,
                tier: entry.tier,
                queue: entry.queueType,
                league_points: entry.leaguePoints,
                rank: entry.rank,
                wins: entry.wins,
                losses: entry.losses,
                veteran: entry.veteran,
                inactive: entry.inactive,
                fresh_blood: entry.freshBlood,
                hot_streak: entry.hotStreak,
                player_rank: ''
            };
            return mappedEntry;   
        } catch (error) {
            throw ('erro: ' + error)
        }
    }

}