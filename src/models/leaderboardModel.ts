export type RankedLeagueData = {
  puuid: string;
  tier: string;
  queue: string;
  league_points: number;
  rank: string;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  fresh_blood: boolean;
  hot_streak: boolean;
  player_rank: string;
};

// adicionar o tipo antes do entries e colocar que o service pega "entries." e aí sim o tipo 