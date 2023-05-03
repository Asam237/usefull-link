import { check, ValidationChain } from "express-validator";
import { Request, Response, NextFunction } from "express";
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
      case "createUser":
        return [
          check("fullname")
            .not()
            .isEmpty()
            .withMessage(() => "Full name is reuqired"),
          check("email")
            .not()
            .isEmpty()
            .withMessage(() => "Email is reuqired"),
          check("password")
            .not()
            .isEmpty()
            .withMessage(() => "Password is reuqired"),
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
