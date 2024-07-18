import { Request, Response } from "express";
import S3Service from "../services/s3Service";
import Url from "../models/urlModel"

const s3Service = new S3Service();

export const uploadFile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const url = await s3Service.uploadFile(req);
    const savedUrl = await Url.create({ url });
    res.json({ savedUrl });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("An unknown error occurred.");
    }
  }
};
