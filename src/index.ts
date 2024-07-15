import express from "express";
import dotenv from "dotenv";
import uploadRoutes from "./routes/uploadRoutes";
import connectDB from "./config/db";
import cors from "cors";

dotenv.config();

const app = express();

connectDB();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", uploadRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
