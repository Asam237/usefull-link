import { config } from "dotenv";

config();

export const MONGO_URI: string | undefined = process.env.MONGO_URI;
export const PORT = process.env.PORT;
export const JWT_SECRET: string | undefined = process.env.JWT_SECRET;
export const EXPIRES = process.env.EXPIRES;
