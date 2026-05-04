import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String },
});

export default mongoose.model("Offer", OfferSchema);