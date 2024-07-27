import { J as JWT_SECRET } from "../../../chunks/private.js";
import { r as redirect } from "../../../chunks/index.js";
import jwt from "jsonwebtoken";
const load = async ({ cookies }) => {
  const token = cookies.get("key");
  if (!token) {
    redirect(302, "/login");
  }
  const jwt_verify = jwt.verify(token, JWT_SECRET);
  if (!jwt_verify) {
    cookies.delete("key", { path: "/" });
    redirect(302, "/login");
  }
  return { username: jwt_verify.username };
};
export {
  load
};
