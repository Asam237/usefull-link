import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { Result, ValidationError, validationResult } from "express-validator";
import { ParsedQs } from "qs";
import { ValidationMethod } from "../core/types";

interface IValidator {
  handleValidation(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | NextFunction | void;
}

type ValidationResultError = {
  [string: string]: [string];
};

class Validator implements IValidator {
  handleValidation(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): void | Response<any, Record<string, any>> | NextFunction {
    const errors: Result<ValidationError> = validationResult(req);
    const results: ValidationResultError = {};
    if (!errors.isEmpty()) {
      errors.array().forEach((items: Object) => {
        const { msg, param }: any = items;
        if (results[param]) {
          results[param].push(msg);
        } else {
          results[param] = [msg];
        }
      });
      return res.status(403).json({ errors: results });
    }
    return next();
  }
  public static method: ValidationMethod = {
    user: {
      createUser: "createUser",
    },
  };
}

export { Validator };
