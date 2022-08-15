import mongoose from "mongoose";

const BeerSchema = new mongoose.Schema({
  name: { type: String },
  products: [
    {
      name: {
        type: String,
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
      },
    },
    { timestamps: true },
  ],
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
});
export default mongoose.model("Beer", BeerSchema);
