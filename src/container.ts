import { LeaderboardService } from "./services/leaderboardService.js";
import { RiotClient } from "./client/http/riotClient.js";
import { LeagueDataController } from "./controllers/leagueDataController.js";
import { Credentials } from "./env.js";
import { getConnection } from "./database/supabase.js";


export const credentials = new Credentials().loadCredentials();
const database = getConnection(credentials.supabase_url, credentials.supabase_key);
const riotClient = new RiotClient(credentials);
const leaderboardService = new LeaderboardService(riotClient, database);
export const leaderboardController =  new LeagueDataController(leaderboardService, credentials)