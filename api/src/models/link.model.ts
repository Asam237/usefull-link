import mongoose from "mongoose";

const linkSchema: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  report: {
    type: Boolean,
    default: false,
    required: true,
  },
  status: {
    type: String,
    enum: ["VALID", "REPORTED", "REVIEWING"],
    default: "REVIEWING",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const LinkModel: any = mongoose.model("Link", linkSchema);
const linkUpdateParams: string[] = ["name", "description", "url"];

export { LinkModel, linkUpdateParams };
