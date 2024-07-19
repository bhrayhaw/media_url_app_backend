import express, { Request, Response } from "express";
import Url from "../models/urlModel";

const router = express.Router();

console.log("fetchFiles router initialized"); // Debugging line

// Fetch URLs from DB
router.get("/urls", async (req: Request, res: Response) => {
  console.log("Received request to /api/urls"); // Debugging line
  try {
    const urls = await Url.find();
    console.log("Fetched URLs from DB:", urls); // Debugging line
    res.json({ urls: urls.map((urlObj) => urlObj.url) });
  } catch (error) {
    console.error("Error fetching URLs:", error); // Debugging line
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred." });
    }
  }
});

export default router;
