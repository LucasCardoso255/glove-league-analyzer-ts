import type { RankedLeagueData } from "../models/leaderboardModel.js";

export type Player = {
  puuid: string;
  game_name: string;
  tag_line: string;
  created_at: string;
  updated_at: string;
};

export type PlayerRanking = Player & {
  tier: string | null;
  rank: string;
  player_rank: string | null;
  queue: string | null;
  league_points: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  fresh_blood: boolean;
  hot_streak: boolean | null;
};

export type Database = {
  public: {
    Tables: {
      ranked_league_data: {
        Row: RankedLeagueData;
        Insert: RankedLeagueData;
        Update: Partial<RankedLeagueData>;
        Relationships: [];
      };
      players: {
        Row: Player;
        Insert: Omit<Player, "created_at" | "updated_at"> &
          Partial<Pick<Player, "created_at" | "updated_at">>;
        Update: Partial<Player>;
        Relationships: [];
      };
    };
    Views: {
      player_rankings: {
        Row: PlayerRanking;
        Relationships: [];
      };
    };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};