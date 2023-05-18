import { Request, Response, NextFunction } from "express";
import { check, ValidationChain } from "express-validator";
import { Validator } from ".";

export default {
  validate: (
    method: string
  ): (
    | ValidationChain
    | ((req: Request, res: Response, next: NextFunction) => void)
  )[] => {
    const validator = new Validator();
    switch (method) {
      case "createLink":
        return [
          check("name")
            .not()
            .isEmpty()
            .withMessage(() => "Name is required"),
          check("url")
            .not()
            .isEmpty()
            .withMessage(() => "Url is required"),
        ];
      case "updateLink":
        return [
          check("name")
            .not()
            .isEmpty()
            .withMessage(() => "Name is required"),
          check("url")
            .not()
            .isEmpty()
            .withMessage(() => "Url is required"),
        ];
      default:
        return [
          (req: Request, res: Response, next: NextFunction) => {
            validator.handleValidation(req, res, next);
          },
        ];
    }
  },
};
