import type { MatchService } from "../services/matchService.js";

export class MatchController {
    constructor(private matchService: MatchService) {}
    async getMatchesByPuuid(puuid: string) {
        console.log(await this.matchService.getMatchesByPuuid(puuid));
    }
}