import mongoose from "mongoose";

interface DocumentResult<T> {
  _doc: T;
}

interface IUser extends DocumentResult<IUser> {
  username: string;
  email: string;
  password: string;
  avatar: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: [true, "Please provide username."],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide email."],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide valid email.",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password."],
    },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
