import { r as redirect } from "../../../chunks/index.js";
const load = async ({ cookies }) => {
  const cookie = cookies.get("key");
  if (cookie) {
    redirect(302, "/");
  }
};
export {
  load
};
