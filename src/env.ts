import dotenv from 'dotenv';

export type envCredentials = {
    riot_api_key: string,
    korean_game_data_url: string,
    korean_player_data_url: string,
    supabase_url: string,
    supabase_key: string
}

export class Credentials {
    loadCredentials() {
        dotenv.config()
        const credentials: envCredentials = {
            riot_api_key: process.env.RIOT_API_KEY!,
            korean_game_data_url: process.env.KOREAN_GAME_DATA_URL!,
            korean_player_data_url: process.env.KOREAN_PLAYER_DATA_URL!,
            supabase_url: process.env.SUPABASE_URL!,
            supabase_key: process.env.SUPABASE_KEY!
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

