import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  offer: { type: mongoose.Schema.Types.ObjectId, ref: "Offer" },
  date: { type: Date, required: true },
});

export default mongoose.model("Booking", BookingSchema);