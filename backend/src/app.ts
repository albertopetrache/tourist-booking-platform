import express, { Application } from "express";
import cors from "cors";
import connectDB from "./config/db";

const app: Application = express();

// conectare DB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (_req, res) => {
  res.send("Backend TypeScript is running");
});

export default app;