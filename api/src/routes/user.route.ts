import { Router } from "express";
import * as userController from "../controllers/auth.controller";

const UserRoute = () => {
  const router = Router();
  const prefix: string = "/auth";
  router.post(`${prefix}/create`, userController.create);
  router.post(`${prefix}/login`, userController.login);
  return router;
};

export { UserRoute };
