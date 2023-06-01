import { Router } from "express";
import * as linkController from "../controllers/link.controller";
import { verifyToken } from "../utils/verifyToken";

const LinkRoute = () => {
  const router = Router();
  const prefix: string = "/links";
  router.post(`${prefix}/create`, linkController.create);
  router.put(`${prefix}/:id`, linkController.update);
  router.get(`${prefix}`, linkController.links);
  router.get(`${prefix}/all`, verifyToken, linkController.all);
  router.get(`${prefix}/:id`, linkController.one);
  router.delete(`${prefix}/:id`, linkController.destroy);
  return router;
};

export { LinkRoute };
