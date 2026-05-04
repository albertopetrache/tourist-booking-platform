import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();

 
app.use(cors());
 

app.use(express.json());


connectDB();

// route test 
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// auth routes
app.use("/api/auth", authRoutes);

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});