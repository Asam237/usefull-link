import { Request, Response, NextFunction } from "express";
import { LinkModel, linkUpdateParams } from "../models/link.model";
import { UserModel } from "../models/user.model";
import { parseRequest } from "../utils/helpers";

class LinkController {
  public static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { name, description, url, report, status, confidentiality }: any = req.body;
      const user = await UserModel.findById({ _id: req.body.user });
      const linkParams: any = { name, description, url, report, status, user, confidentiality };
      const link: any = new LinkModel(linkParams);
      user.links.push(link._id);
      await user.save();
      await link.save();
      return res.status(200).json({ user });
    } catch (error) {
      console.log(error);
    }
  }
  public static async all(
    req: any,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const links: any = await LinkModel.find({ user: req.user.id }).populate("user")
      return res.status(200).json(links);
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

  public static async links(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const links: any = await LinkModel.find({})
      return res.status(200).json(links)
    } catch (error) {
      console.log(error)
    }
  }

  public static async destroy(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const id = req.params.id;
    try {
      await LinkModel.deleteOne({ _id: id });
      return res.json({ message: "Link delete success !" });
    } catch (error) {
      console.log(error);
    }
  }
  public static async update(req: Request, res: Response, next: NextFunction): Promise<any> {
    const id = req.params.id
    const data = parseRequest(req.body, linkUpdateParams)
    let updateLink = null;

    try {
      if (data !== null) {
        await LinkModel.findOneAndUpdate({ _id: id }, data)
      }
      updateLink = await LinkModel.findOne({ _id: id })
      return res.json(updateLink)
    } catch (error) {
      console.log(error)
    }
  }
}

export { LinkController };
