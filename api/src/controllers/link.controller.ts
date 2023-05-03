import { Request, Response, NextFunction } from "express";
import { LinkModel } from "../models/link.model";

class LinkController {
  public static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { name, description, url, report, status, user }: any = req.body;
      const linkParams: any = { name, description, url, report, status, user };
      const link: any = new LinkModel(linkParams);
      await link.save();
      return res.status(200).json({ link });
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
