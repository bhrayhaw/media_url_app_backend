"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const s3Config_1 = __importDefault(require("../config/s3Config"));
const uuid_1 = require("uuid");
class S3Service {
    uploadFile(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = req.file;
            if (!file)
                throw new Error("No file provided");
            const params = {
                Bucket: process.env.S3_BUCKET_NAME,
                Key: `${(0, uuid_1.v4)()}-${file.originalname}`,
                Body: file.buffer,
                ContentType: file.mimetype,
                ACL: "public-read",
            };
            const data = yield s3Config_1.default.upload(params).promise();
            return data.Location;
        });
    }
}
exports.default = S3Service;
