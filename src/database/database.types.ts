import type { RankedPlayerData } from "../models/leaderboardModel.js";

export type Database = {
  public: {
    Tables: {
      ranked_player_data: {
        Row: RankedPlayerData;
        Insert: RankedPlayerData;
        Update: Partial<RankedPlayerData>;
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};