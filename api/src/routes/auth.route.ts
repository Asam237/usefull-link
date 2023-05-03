import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { Validator } from "../validator";
import userValidator from "../validator/user.validator";

const { user }: any = Validator.method;

class AuthRoute {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes = () => {
    const prefix: string = "/auth";
    this.router.post(
      `${prefix}/create`,
      userValidator.validate(user.createUser),
      AuthController.create
    );
    this.router.post(`${prefix}/login`, AuthController.login);
  };
}

export { AuthRoute };
