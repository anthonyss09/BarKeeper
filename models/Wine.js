import mongoose from "mongoose";

const WineSchema = new mongoose.Schema({
  name: { type: String },
  products: [
    {
      nname: {
        type: String,
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
      },
    },
    { timestamps: true },
  ],
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
});
export default mongoose.model("Wine", WineSchema);
