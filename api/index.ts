import express from "express";
import * as http from "http";
import { PORT } from "./src/core/config";
import { connectToDB } from "./src/core/connect/db";
import { Routes } from "./src/routes";

const app = express();
const server: http.Server = http.createServer(app);
Routes.init(app);

server.listen(PORT, async () => {
  try {
    await connectToDB();
    console.log(`[server]: connected to ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
