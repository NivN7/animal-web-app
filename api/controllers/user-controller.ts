import { Request, Response, NextFunction } from "express";
import bcryptjs from "bcryptjs";

import User from "../models/user-model.js";
import Listing from "../models/listing-model.js";
import { errorHandler } from "../utils/error.js";

export const test = (req: Request, res: Response) => {
  res.json({
    message: "Api route is working!",
  });
};

interface RequestWithUser extends Request {
  user: {
    id: string;
  };
}

export const updateUser = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account!"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only delete your own account!"));

  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const getUserListings = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (req.user.id === req.params.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, "You can only view your own listings!"));
  }
};
