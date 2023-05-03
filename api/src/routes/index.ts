import * as express from "express";
import * as bodyParser from "body-parser";
import { AuthRoute } from "./auth.route";

class Routes {
  public static init(app: express.Application) {
    const router: express.Router = express.Router();
    app.use(bodyParser.json());
    app.use("/", router);
    app.use("/", new AuthRoute().router);
  }
}

export { Routes };
