import mongoose from "mongoose";

const CocktailSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide product name."],
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

export default mongoose.model("Cocktail", CocktailSchema);
