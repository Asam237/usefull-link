import { Request, Response, NextFunction } from "express";
import { Document } from "mongoose";
import { UserModel } from "../models/user.model";

class UserController {
  public static async me(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const id = req.params.id
      const user: Document | null = await UserModel.findOne({ _id: id })
      if (!user) {
        res.status(400).json({ message: "user not found !" })
      }
      return res.status(200).json({ user })
    } catch (error) {
      console.log(error)
    }
  }
}

export { UserController };
