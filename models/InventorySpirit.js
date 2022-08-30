import mongoose from "mongoose";

const InventorySpiritSchema = new mongoose.Schema({
  inventory: [
    {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "Spirit",
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
      },
    },
  ],
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
});

export default mongoose.model("InventorySpirit", InventorySpiritSchema);
