import mongoose from "mongoose";

const WineSchema = new mongoose.Schema(
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
    region: {
      type: String,
    },
    varietal: {
      type: String,
    },
    color: {
      type: String,
    },
    vintage: {
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

export default mongoose.model("Wine", WineSchema);
