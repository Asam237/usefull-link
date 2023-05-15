import { Router } from "express";
import { UserController } from "../controllers/user.controller";

class UserRoute {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  routes = () => {
    const prefix: string = "/users";
    this.router.get(`${prefix}/:id`, UserController.me);
  };
}

export { UserRoute };
