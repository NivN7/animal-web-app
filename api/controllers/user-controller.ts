import { Request, Response, NextFunction } from "express";
import bcryptjs from "bcryptjs";

import User from "../models/user-model.js";
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
