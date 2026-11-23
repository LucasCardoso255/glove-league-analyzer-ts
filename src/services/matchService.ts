import type { RankedLeagueRepository } from "../repositories/rankedleagueRepository.js";
import type { Match } from "../models/matchModel.js";
import type { RiotClient } from "../client/http/riotClient.js";
import type { envCredentials } from "../env.js";

export class MatchService {
    constructor(private riotClient: RiotClient, private repository: RankedLeagueRepository, private credentials: envCredentials) {}
    
    async getMatchesByPuuid(puuid: string) {
        return await this.riotClient.get(this.credentials.korean_matches_url+puuid+"/ids")
    }

    async getMatchDetails(matchID: string) {

    }

    async insertMatchesByPuuid(match: Match) {

    }

    async searchPlayers(match: Match) {

    }
}