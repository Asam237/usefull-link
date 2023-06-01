import express, { Application } from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import { UserRoute } from "./routes/user.route";
import { LinkRoute } from "./routes/link.route";

export const setupRestEndpoint = (app: Application) => {
  const router = express.Router();
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(cors());
  app.use("/", router);
  app.use("/", UserRoute());
  app.use("/", LinkRoute());
};
