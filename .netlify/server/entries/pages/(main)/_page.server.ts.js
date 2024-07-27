import { J as JWT_SECRET } from "../../../chunks/private.js";
import { c as connect } from "../../../chunks/connect.js";
import mongoose from "mongoose";
import { r as redirect, f as fail } from "../../../chunks/index.js";
import jwt from "jsonwebtoken";
const folderSchema = new mongoose.Schema(
  {
    userid: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true }
  },
  { timestamps: true }
);
const Folder = mongoose.models.Folder || mongoose.model("Folder", folderSchema);
const load = async ({}) => {
  return {};
};
const actions = {
  createFolder: async ({ request, cookies }) => {
    const userid = cookies.get("key");
    const jwt_verify = jwt.verify(userid, JWT_SECRET);
    if (!jwt_verify) {
      cookies.delete("key", { path: "/" });
      redirect(302, "/login");
    }
    const formData = await request.formData();
    const type = formData.get("type");
    const name = formData.get("title");
    if (!userid) {
      return fail(401, { message: "unauthorized field user action" });
    }
    if (!name || !type) {
      return fail(400, { message: "empty form field detected" });
    }
    connect();
    const duplicateFolder = await Folder.findOne({ userid: jwt_verify.id, title: name });
    if (duplicateFolder) {
      return fail(400, { message: "folder already exists" });
    }
    const folder = await Folder.create({ type, userid: jwt_verify?.id, title: name });
    if (!folder) {
      return fail(400, { message: "please try later" });
    }
    redirect(302, "/");
  }
};
export {
  actions,
  load
};
