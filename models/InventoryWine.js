import mongoose from "mongoose";

const InventoryWineSchema = new mongoose.Schema({
  inventory: [
    {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "Wine",
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
    },
  ],
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
});

export default mongoose.model("InventoryWine", InventoryWineSchema);
