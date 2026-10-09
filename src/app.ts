import Fastify from "fastify";
import { Credentials } from "./env.js";
import { RiotClient } from "./client/riotClient.js";

export const credentials = new Credentials().loadCredentials();

const app = Fastify();
const riotClient = new RiotClient();

console.log(await riotClient.get(credentials.korean_player_data_url));

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