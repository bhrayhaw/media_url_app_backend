import express from "express";
import multer from "multer";
import { uploadFile } from "../controllers/uploadController";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("file"), uploadFile);

export default router;
