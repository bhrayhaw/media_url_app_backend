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
const express_1 = __importDefault(require("express"));
const urlModel_1 = __importDefault(require("../models/urlModel"));
const router = express_1.default.Router();
console.log("fetchFiles router initialized"); // Debugging line
// Fetch URLs from DB
router.get("/urls", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Received request to /api/urls"); // Debugging line
    try {
        const urls = yield urlModel_1.default.find();
        console.log("Fetched URLs from DB:", urls); // Debugging line
        res.json({ urls: urls.map((urlObj) => urlObj.url) });
    }
    catch (error) {
        console.error("Error fetching URLs:", error); // Debugging line
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "An unknown error occurred." });
        }
    }
}));
exports.default = router;
