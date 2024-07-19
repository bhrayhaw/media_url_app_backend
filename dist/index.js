"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const uploadRoutes_1 = __importDefault(require("./routes/uploadRoutes"));
const fetchFiles_1 = __importDefault(require("./routes/fetchFiles"));
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, db_1.default)();
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use("/api", uploadRoutes_1.default);
app.use("/api", fetchFiles_1.default);
console.log("Routes registered: /api"); // Debugging line
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
