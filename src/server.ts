import { buildApp } from "./app.js";
import { env } from "./config/env.js";

const start = async () => {
  const app = buildApp();

  try {
    await app.listen({
      port: env.PORT,
      host: "127.0.0.1",
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();