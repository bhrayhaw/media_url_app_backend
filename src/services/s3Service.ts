import s3 from "../config/s3Config";
import { IUploadService } from "../interfaces/IUploadService";
import { Request } from "express";
import { v4 as uuidv4 } from "uuid";

class S3Service implements IUploadService {
  public async uploadFile(req: Request): Promise<string> {
    const file = req.file;
    if (!file) throw new Error("No file provided");

    const params = {
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: `${uuidv4()}-${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read",
    };

    const data = await s3.upload(params).promise();
    return data.Location;
  }
}

export default S3Service;
