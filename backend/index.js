import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import protect from "./middleware/authMiddleware.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

// protected route
app.get("/api/profile", protect, (req, res) => {
  res.json({
    msg: "Protected route data",
    user: req.user,
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});