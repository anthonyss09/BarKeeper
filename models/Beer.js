import mongoose from "mongoose";

const BeerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide product name."],
    },
    notes: {
      type: String,
    },
    producer: {
      type: String,
    },
    style: {
      type: String,
    },
    region: {
      type: String,
    },
    abv: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0,
    },
    productType: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user."],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Beer", BeerSchema);
