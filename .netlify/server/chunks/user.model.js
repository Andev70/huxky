import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false }
});
const User = mongoose.models.User || mongoose.model("User", userSchema);
export {
  User as U
};
