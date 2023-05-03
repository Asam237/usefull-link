import { Request, Response, NextFunction } from "express";
import { LinkModel } from "../models/link.model";
import { UserModel } from "../models/user.model";

class LinkController {
  public static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { name, description, url, report, status }: any = req.body;
      const user = await UserModel.findById({ _id: req.body.user });
      const linkParams: any = { name, description, url, report, status, user };
      const link: any = new LinkModel(linkParams);
      user.links.push(link._id);
      await link.save();
      return res.status(200).json({ user });
    } catch (error) {
      console.log(error);
    }
  }
  public static async all(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const links: any = await LinkModel.find({});
      return res.status(200).json({ links });
    } catch (error) {
      console.log(error);
    }
  }
  public static async one(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const link: any = await LinkModel.findOne({ _id: req.params.id });
      return res.status(200).json({ link });
    } catch (error) {
      console.log(error);
    }
  }
}

export { LinkController };
