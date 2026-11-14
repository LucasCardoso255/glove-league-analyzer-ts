import { LeaderboardService } from "../services/leaderboardService.js"; 
import type { envCredentials } from "../env.js";

export class LeagueDataController {
    constructor(private leaderboardService: LeaderboardService, private credentials: envCredentials) {}
    
    async insertEntries() {
        try {
            let res = await this.leaderboardService.requestLeagueData(this.credentials.korean_league_data_url);
            res = await this.leaderboardService.mapEntries(res.entries);
            await this.leaderboardService.insertLeaderboardEntry(res);
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