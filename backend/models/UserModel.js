import mongoose from 'mongoose';

const UserShema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, uniqe: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, require: true, default: false },
  },
  { timestamps: true }
);
const User = mongoose.model('users', UserShema);
export default User;
