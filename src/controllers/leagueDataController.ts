import { LeaderboardService } from "../services/leaderboardService.js"; 
import type { envCredentials } from "../env.js";

export class LeagueDataController {
    constructor(private leaderboardService: LeaderboardService, private credentials: envCredentials) {}
    
    async insertEntries() {
        try {
            const obj = await this.leaderboardService.requestLeagueData(this.credentials.korean_league_data_url);
            await this.leaderboardService.insertLeaderboardEntry(obj);
            console.log("Insertion success");
        } catch (error) {
            console.error(error);
        }
    }
    async getEntries() {
        try {
            await this.leaderboardService.getLeaderboard()
        } catch (error) {
            console.error(error);
        }
    }
}