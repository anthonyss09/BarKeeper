import mongoose from "mongoose";

const InventorySpiritSchema = new mongoose.Schema({
  inventory: [
    {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "Spirit",
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

export default mongoose.model("InventorySpirit", InventorySpiritSchema);
