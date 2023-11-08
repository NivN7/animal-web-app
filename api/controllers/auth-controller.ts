import bcryptjs from "bcryptjs";
import { Request, Response, NextFunction } from "express";

import User from "../models/user-model.ts";
import { errorHandler } from "../utils/error.ts";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return next(errorHandler(400, "Please provide all details."));

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};
