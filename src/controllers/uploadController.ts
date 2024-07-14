import { Request, Response } from "express";
import S3Service from "../services/s3Service";

const s3Service = new S3Service();

export const uploadFile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const url = await s3Service.uploadFile(req);
    res.json({ url });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("An unknown error occurred.");
    }
  }
};
