import { Router } from "express";
import Booking from "../models/Booking";

const router = Router();

// Get all bookings
router.get("/", async (req, res) => {
  const bookings = await Booking.find().populate("user offer");
  res.json(bookings);
});

// Create booking
router.post("/", async (req, res) => {
  const newBooking = await Booking.create(req.body);
  res.status(201).json(newBooking);
});

export default router;