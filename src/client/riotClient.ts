import axios from "axios";
import { credentials } from "../app.js";

export class RiotClient {
    async get(requestUrl: string, pathParam?: string) {
        try {
            const res = await axios.get(requestUrl + (pathParam ?? ""), 
            {headers: {"X-Riot-Token": credentials.riot_api_key, 
                timeout: 10000}
            })
            return res.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`
                    \nmsg: ${error.message}
                    \nstatus: ${error.response?.status} - ${error.response?.statusText}
                    \nheaders: ${error.response?.headers}`);
            }
            throw new Error("Error: " + error);
        }
    }
}