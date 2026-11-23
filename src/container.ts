import { LeaderboardService } from "./services/leaderboardService.js";
import { RankedLeagueRepository } from "./repositories/rankedleagueRepository.js";
import { RiotClient } from "./client/http/riotClient.js";
import { LeaderboardController } from "./controllers/leaderboardController.js";
import { Credentials } from "./env.js";
import { getConnection } from "./database/supabase.js";


export const credentials = new Credentials().loadCredentials();
const database = getConnection(credentials.supabase_url, credentials.supabase_autenticated_key);
const repository = new RankedLeagueRepository(database)
const riotClient = new RiotClient(credentials);
const leaderboardService = new LeaderboardService(riotClient, repository);
export const leaderboardController =  new LeaderboardController(leaderboardService, credentials)