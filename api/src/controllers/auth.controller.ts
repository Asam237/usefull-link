import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model";
import { TokenInfo } from "../core/types";
import { EXPIRES, JWT_SECRET } from "../core/config";

class AuthController {
  public static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { fullname, email, userType, avatar }: any = req.body;
      const password: string = bcrypt.hashSync(req.body.password, 10);
      const userParams: any = { fullname, email, userType, avatar, password };
      const user = new UserModel(userParams);
      await user.save();
      return res.status(200).json({ user });
    } catch (error) {
      console.log(error);
    }
  }
  public static async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { email, password }: any = req.body;
    try {
      const user: any = await UserModel.findOne({ email });
      if (!user) {
        return res.status(403).json({ message: "login failed !" });
      }
      const isMatch: boolean = bcrypt.compareSync(user.password, password);
      if (!isMatch) {
        return res.status(403).json({ message: "login failed !" });
      }
      const { _id } = user;
      const tokenInfo: TokenInfo = {
        id: _id,
      };
      const token: string = jwt.sign(tokenInfo, JWT_SECRET!!, {
        expiresIn: EXPIRES,
      });
      return res.status(200).json({ ...user, token: token });
    } catch (error) {
      console.log(error);
    }
  }
}

export { AuthController };
