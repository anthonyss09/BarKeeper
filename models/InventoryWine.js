import mongoose from "mongoose";

const InventoryWineSchema = new mongoose.Schema({
  inventory: [
    {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "Wine",
      },
      stock: {
        type: Number,
      },
      color: {
        type: String,
      },
      productType: {
        type: String,
      },
    },
  ],
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
});

export default mongoose.model("InventoryWine", InventoryWineSchema);
