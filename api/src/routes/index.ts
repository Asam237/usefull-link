import * as express from "express";
import * as bodyParser from "body-parser";
import { AuthRoute } from "./auth.route";
import { LinkRoute } from "./link.route";
import { UserRoute } from "./user.controller";

class Routes {
  public static init(app: express.Application) {
    const router: express.Router = express.Router();
    app.use(bodyParser.json());
    app.use("/", router);
    app.use("/", new AuthRoute().router);
    app.use("/", new LinkRoute().router);
    app.use("/", new UserRoute().router);
  }
}

export { Routes };
