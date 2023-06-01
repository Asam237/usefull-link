import * as http from "http";
import express from "express";
import { setupRestEndpoint } from "./src/server";
import { PORT } from "./src/shared/core/config";
import { connectToDB } from "./src/shared/core/database";

const startServer = () => {
  const app = express();
  setupRestEndpoint(app);
  const server: http.Server = http.createServer(app);
  server.listen(PORT, async () => {
    await connectToDB();
    console.log(`[server]: is running ${PORT}`);
  });
};

void (() => {
  startServer();
})();
