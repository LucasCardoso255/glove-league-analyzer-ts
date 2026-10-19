import Fastify from "fastify";
import { leaderboardController } from "./container.js";

const puuid_test = '-tiIArwYLerlIZtNySuMswYJj-j8cc3dSsEIi_rrOevrE2UwEBUMt_vkb5LOt-I9rWP9gzBoXH-eqw'
const app = Fastify();

console.log(await leaderboardController.insertEntries());
console.log(await leaderboardController.getEntries());

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