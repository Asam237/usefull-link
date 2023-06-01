import { CreateLinkInput } from "../../shared/types/models";
import { LinkModel } from "../models/link.model";

const create = async (input: CreateLinkInput) => {
  return await LinkModel.create(input);
};

const one = async (id: any) => {
  return LinkModel.findOne({ _id: id });
};

const alllinks = async () => {
  return await LinkModel.find({});
};

const destroy = async (id: any) => {
  return await LinkModel.deleteOne({ _id: id });
};

const update = async (id: any, data: any) => {
  if (data !== null) {
    await LinkModel.findOneAndUpdate({ _id: id }, data);
  }
  return await LinkModel.findOne({ _id: id });
};

const all = async (id: any, populate: any) => {
  return await LinkModel.find({ user: id }).populate(populate);
};

export default { create, one, alllinks, destroy, update, all };
