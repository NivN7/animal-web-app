import mongoose, { Document } from "mongoose";

export interface IListing extends Document {
  name: string;
  description: string;
  address: string;
  species: string;
  age: string;
  breed: string;
  color: string;
  contactNumber: number;
  gender: string;
  vaccination: string;
  imageUrls: Array<string>;
  userRef: string;
}

const listingSchema = new mongoose.Schema<IListing>(
  {
    name: {
      type: String,
      required: [true, "Please provide name."],
    },
    description: {
      type: String,
      required: [true, "Please provide description."],
    },
    address: {
      type: String,
      required: [true, "Please provide address."],
    },
    species: {
      type: String,
      required: [true, "Please provide species."],
    },
    age: {
      type: String,
      required: [true, "Please provide age."],
    },
    breed: {
      type: String,
      required: [true, "Please provide breed."],
    },
    color: {
      type: String,
      required: [true, "Please provide color."],
    },
    contactNumber: {
      type: Number,
      required: [true, "Please provide contact number."],
    },
    gender: {
      type: String,
      required: [true, "Please provide gender."],
    },
    vaccination: {
      type: String,
      required: [true, "Please provide vaccination."],
    },
    imageUrls: {
      type: [String],
      required: [true, "Please provide images."],
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model<IListing>("Listing", listingSchema);

export default Listing;
