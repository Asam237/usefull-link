import { Router } from "express";
import { LinkController } from "../controllers/link.controller";
import { Validator } from "../validator";
import linkValidator from "../validator/link.validator";

const { link }: any = Validator.method;

class LinkRoute {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes = () => {
    const prefix: string = "/links";
    this.router.post(
      `${prefix}/create`,
      linkValidator.validate(link.createLink),
      LinkController.create
    );
    this.router.get(`${prefix}/all`, LinkController.all);
    this.router.get(`${prefix}/:id`, LinkController.one);
  };
}

export { LinkRoute };