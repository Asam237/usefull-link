import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { CreateUserInput, LoginType } from "../shared/types/models";
import userService from "../domain/services/user.service";
import { TokenPayload } from "../shared/types/commons";
import { EXPIRES, JWT_SECRET } from "../shared/core/config";

const create = async (req: Request, res: Response) => {
  const {
    avatar,
    createdAt,
    email,
    fullname,
    userType,
    link,
  }: CreateUserInput = req.body;
  const password: string = bcrypt.hashSync(req.body.password, 10);
  const createUser = await userService.create({
    avatar,
    createdAt,
    email,
    fullname,
    link,
    password,
    userType,
  });
  return res.status(200).json({ user: createUser });
};

const login = async (req: Request, res: Response) => {
  const { email, password }: LoginType = req.body;
  const user = await userService.findByEmail(email);
  if (!user) {
    return res.status(400).json({ message: "Login failed !" });
  }
  const isMatch: boolean = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Login failed !" });
  }
  const { _id } = user;
  const tokenPayload: TokenPayload = {
    id: _id,
  };
  const token: string = jwt.sign(tokenPayload, JWT_SECRET!!, {
    expiresIn: EXPIRES
  });
  return res.status(200).json({ ...user._doc, token });
};

export { create, login };
