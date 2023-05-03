import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/user.model";

class UserController {
  public static async all(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const users: any = await UserModel.find({
        user: req.params.user,
      }).populate("link");
      return res.status(200).json({ users });
    } catch (error) {
      console.log(error);
    }
  }
}

export { UserController };
