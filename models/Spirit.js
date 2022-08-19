import mongoose from "mongoose";

const SpiritSchema = new mongoose.Schema(
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
    type: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0,
    },
    productType: {
      type: String,
      // enum: [
      //   "beer",
      //   "cocktail",
      //   "spirit",
      //   "wine-sparkling",
      //   "wine-white",
      //   "wine-orange",
      //   "wine-rose",
      //   "wine-chilled-red",
      //   "wine-red",
      // ],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user."],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Spirit", SpiritSchema);
