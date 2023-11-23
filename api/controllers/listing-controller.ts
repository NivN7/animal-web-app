import { Request, Response, NextFunction } from "express";

import Listing, { IListing } from "../models/listing-model";
import { errorHandler } from "../utils/error";
import { RequestWithUser } from "./user-controller";

export const createListing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only delete your own listings!"));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only update your own listings!"));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }

    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getListings = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, species, color, sort } = req.query;
    const queryObject: Record<string, any> = {};

    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }

    if (species) {
      queryObject.species = species;
    }

    if (color) {
      queryObject.color = { $regex: color, $options: "i" };
    }

    let result = Listing.find(queryObject);

    if (sort) {
      const sortString = typeof sort === "string" && sort;

      const sortList = sortString.split(",").join(" ");
      result = result.sort(sortList);
    } else {
      result = result.sort("createdAt");
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const listings: IListing[] = await result;

    res.status(200).json({ listings, nbHits: listings.length });
  } catch (error) {
    next(error);
  }
};
