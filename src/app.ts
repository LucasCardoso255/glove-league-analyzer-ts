import Fastify from "fastify";
import { Credentials } from "./env.js";
import { createSupabase } from "./database/supabase.js";

const credentials = new Credentials()
const env = credentials.loadCredentials();
export const supabase = createSupabase(env);

console.log(await supabase.from("ranked_player_data").select("*"));

const app = Fastify();

app.get("/", async () => {
    return {
        message: "Glove League Analyzer API"
    };
});

const start = async () => {
    try {
        await app.listen({ port: 3000 });
        app.log.info("Server listening at port 3000");
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};

start();