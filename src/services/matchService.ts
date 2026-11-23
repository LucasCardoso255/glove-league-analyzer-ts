import type { RankedLeagueRepository } from "../repositories/rankedleagueRepository.js";
import type { Match } from "../models/matchModel.js";
import type { RiotClient } from "../client/http/riotClient.js";

export class MatchService {
    constructor(private repository: RankedLeagueRepository, private riotClient: RiotClient) {}
    
    async getMatchesByPuuid(puuid: string) {

    }

    async getMatchDetais(matchID: string) {

    }

    async insertMatchesByPuuid(match: Match) {

    }

    async searchPlayers(match: Match) {

    }
}