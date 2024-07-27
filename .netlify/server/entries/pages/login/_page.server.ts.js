import { f as fail, r as redirect } from "../../../chunks/index.js";
import { c as connect } from "../../../chunks/connect.js";
import bcrypt from "bcryptjs";
import { U as User } from "../../../chunks/user.model.js";
import jwt from "jsonwebtoken";
import { J as JWT_SECRET } from "../../../chunks/private.js";
const actions = {
  login: async ({ request, cookies }) => {
    const formData = await request.formData();
    const password = formData.get("password");
    const email = formData.get("email");
    if (!password || !email) {
      return fail(400, {
        message: " password and email are required."
      });
    }
    connect();
    const user = await User.findOne({ email });
    if (!user) {
      return fail(401, {
        message: `no user found with email ${email}`
      });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return fail(401, {
        message: "Invalid username or password."
      });
    }
    const jwt_token = jwt.sign({ id: user?.id, username: user?.username }, JWT_SECRET, { expiresIn: "30d" });
    cookies.set("key", jwt_token, { maxAge: 30 * 24 * 60 * 60 * 1e3, path: "/", httpOnly: true });
    redirect(300, "/");
  }
};
export {
  actions
};
