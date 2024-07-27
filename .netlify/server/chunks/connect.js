import { D as DATABASE_URI } from "./private.js";
import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("mongodb connected successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};
export {
  connect as c
};
