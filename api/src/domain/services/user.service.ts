import { CreateUserInput } from "../../shared/types/models";
import { UserModel } from "../models/user.model";

const create = async (input: CreateUserInput) => {
  return await UserModel.create(input);
};

const findByUsername = async (username: any) => {
  return await UserModel.findOne({ username });
};

export default { create, findByUsername };
