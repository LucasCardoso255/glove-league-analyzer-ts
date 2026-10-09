import { RankedPlayerRepository } from "../repositories/rankedPlayerRepository.js";
import { database } from "../database/supabase.js";
import type { RankedPlayerData } from "../models/leaderboardModel.js";

export class LeaderboardService {
    repository = new RankedPlayerRepository()
    async getLeaderboard() {
        try {
            await this.repository.findAll(database);
        } catch (error) {
            throw new Error("Search failed: " + error);
        }
    }
    async getLeaderboardPlayerById(playerUuid: string) {
        try {
            await this.repository.findById(database, playerUuid);
        } catch (error) {
            throw new Error("Search failed: " + error);
        }
    }
    async insertLeaderboardEntry(obj: RankedPlayerData) {
        try {
            await this.repository.create(database, obj);
        } catch (error) {
            throw new Error("Insertion failed: " + error);
        }
    }
}