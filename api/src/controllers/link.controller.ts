import { Request, Response } from "express";
import { LinkModel, linkUpdateParams } from "../domain/models/link.model";
import { UserModel } from "../domain/models/user.model";
import linkService from "../domain/services/link.service";
import { CreateLinkInput } from "../shared/types/models";
import { parseRequest } from "../utils/helpers";

const create = async (req: Request, res: Response) => {
  const {
    confidentiality,
    createdAt,
    description,
    name,
    report,
    status,
    url,
  }: CreateLinkInput = req.body;
  const user = await UserModel.findById({ _id: req.body.user });
  const createLink = await linkService.create({
    confidentiality,
    createdAt,
    description,
    name,
    report,
    status,
    url,
    user,
  });
  user.links.push(createLink._id);
  await user.save();
  await createLink.save();
  return res.status(200).json({ user });
};

const all = async (req: any, res: Response) => {
  const links: any = await linkService.all(req.user.id, "user");
  return res.status(200).json(links);
};

const one = async (req: Request, res: Response) => {
  const link: any = linkService.one(req.params.id);
  return res.status(200).json({ link });
};

const links = async (req: Request, res: Response) => {
  const links: any = await LinkModel.find({});
  return res.status(200).json(links);
};

const destroy = async (req: Request, res: Response) => {
  await linkService.destroy(req.params.id);
  return res.json({ message: "Link delete success !" });
};

const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = parseRequest(req.body, linkUpdateParams);
  const updateLink = await linkService.update(id, data);
  return res.json(updateLink);
};

export { create, all, one, links, destroy, update };
