import { Router } from "express";
import Offer from "../models/Offer";

const router = Router();

// Get all offers
router.get("/", async (req, res) => {
  const offers = await Offer.find();
  res.json(offers);
});

// Create offer
router.post("/", async (req, res) => {
  const newOffer = await Offer.create(req.body);
  res.status(201).json(newOffer);
});

export default router;