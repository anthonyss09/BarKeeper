import mongoose from "mongoose";

const SpiritSchema = new mongoose.Schema({
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
      region: {
        type: String,
      },
      type: {
        type: String,
      },
      stock: {
        type: Number,
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
export default mongoose.model("Spirit", SpiritSchema);
