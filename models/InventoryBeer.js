import mongoose from "mongoose";

const InventoryBeerSchema = new mongoose.Schema({
  inventory: [
    {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "Beer",
      },
      stock: {
        type: Number,
      },
      productType: {
        type: String,
      },
    },
  ],
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
});

export default mongoose.model("InventoryBeer", InventoryBeerSchema);
