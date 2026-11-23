import { LeaderboardService } from "./services/leaderboardService.js";
import { RankedLeagueRepository } from "./repositories/rankedleagueRepository.js";
import { RiotClient } from "./client/http/riotClient.js";
import { LeaderboardController } from "./controllers/leaderboardController.js";
import { Credentials } from "./env.js";
import { getConnection } from "./database/supabase.js";
import { MatchService } from "./services/matchService.js";
import { MatchController } from "./controllers/matchController.js";


export const credentials = new Credentials().loadCredentials();
const database = getConnection(credentials.supabase_url, credentials.supabase_autenticated_key);
const leaderboardsRepository = new RankedLeagueRepository(database);
const riotClient = new RiotClient(credentials);

//services
const leaderboardService = new LeaderboardService(riotClient, leaderboardsRepository);
const matchService = new MatchService(riotClient, leaderboardsRepository, credentials);

//controllers
export const leaderboardController =  new LeaderboardController(leaderboardService, credentials);
export const matchController = new MatchController(matchService);