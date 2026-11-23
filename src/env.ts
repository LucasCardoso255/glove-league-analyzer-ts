import dotenv from 'dotenv';

export type envCredentials = {
    riot_api_key: string,
    korean_league_data_url: string,
    korean_player_data_url: string,
    korean_matches_url: string,
    korean_match_details_url: string,
    supabase_url: string,
    supabase_key: string
    supabase_autenticated_key: string
}

export class Credentials {
    loadCredentials() {
        dotenv.config()
        const credentials: envCredentials = {
            riot_api_key: process.env.RIOT_API_KEY!,
            korean_league_data_url: process.env.KOREAN_LEAGUE_DATA_URL!,
            korean_player_data_url: process.env.KOREAN_PLAYER_DATA_URL!,
            korean_matches_url: process.env.KOREAN_MATCHES_URL!,
            korean_match_details_url: process.env.KOREAN_MATCH_DETAILS_URL!,
            supabase_url: process.env.SUPABASE_URL!,
            supabase_key: process.env.SUPABASE_KEY!,
            supabase_autenticated_key: process.env.SUPABASE_AUTENTICATED_KEY!
        };
        Object.entries(credentials).forEach(([key, value]) => {
            if (!value) {
                throw new Error("Enviroment Key missing from .env: " + key);        
            }
        });
        console.log("Environment variables loaded successfully.");
        return credentials;
    }
}

