import { connect, connection } from "mongoose";
import { MONGO_URI } from "./config";

export const connectToDB = async () => {
  try {
    await connect(MONGO_URI!!);
  } catch (error) {
    console.log(error);
  }
};

connection.on("connected", () => {
  console.log(
    `[MongoDB]: connected successfuly to ${connection.db.databaseName}`
  );
});

connection.on("error", (error) => {
  console.log(`[MongoDB]: error to ${error}`);
});

connection.on("disconnected", () => {
  console.log(`[MongoDB]: disconnected successfuly`);
});
