import { Request } from "express";

export interface IUploadService {
  uploadFile(req: Request): Promise<string>;
}
