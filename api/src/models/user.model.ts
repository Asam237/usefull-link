import mongoose from "mongoose";

const userSchema: mongoose.Schema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["NORMAL", "ADMIN"],
    default: "NORMAL",
    required: true,
  },
  avatar: {
    type: String,
  },
});

const UserModel: any = mongoose.model("User", userSchema);
const userUpdateParams: string[] = ["fullname", "avatar", "userType"];

export { UserModel, userUpdateParams };
