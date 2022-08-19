import mongoose from "mongoose";

const InventoryCocktailSchema = new mongoose.Schema({
  inventory: [
    {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "Cocktail",
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

export default mongoose.model("InventoryCocktail", InventoryCocktailSchema);
