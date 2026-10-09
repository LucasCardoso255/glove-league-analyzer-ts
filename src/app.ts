import Fastify from "fastify";
import { Credentials } from "./env.js";

export const credentials = new Credentials().loadCredentials();

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