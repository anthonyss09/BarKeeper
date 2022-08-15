import mongoose from "mongoose";

const CocktailSchema = new mongoose.Schema({
  name: { type: String },
  products: [
    {
      name: {
        type: String,
      },
      instructions: {
        type: String,
      },
      ingredients: {
        amount: { type: Array },
        ingredient: { type: Array },
      },
      inspiration: {
        type: String,
      },
      createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide user."],
      },
    },
    { timestamps: true },
  ],
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Cocktail", CocktailSchema);
