import type { RankedLeagueData } from "../models/leaderboardModel.js";

export type Database = {
  public: {
    Tables: {
      ranked_league_data: {
        Row: RankedLeagueData;
        Insert: RankedLeagueData;
        Update: Partial<RankedLeagueData>;
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};