import mongoose from "mongoose";

const InventoryBeerSchema = new mongoose.Schema({
  inventory: [
    {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "Beer",
      },
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
      createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
    },
  ],
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
});

export default mongoose.model("InventoryBeer", InventoryBeerSchema);
