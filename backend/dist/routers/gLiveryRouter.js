"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gLiveryHedler_1 = require("../controllers/gLiveryHedler");
const gLiveryServices_1 = require("../services/gLiveryServices");
const multer_1 = __importDefault(require("../utils/multer"));
const router = express_1.default.Router();
router.post("/", multer_1.default === null || multer_1.default === void 0 ? void 0 : multer_1.default.single("book_cover_image"), gLiveryServices_1.gLiveryBookCtrateServices);
router.get("/", gLiveryHedler_1.getAllGenarelLiveryBook);
router.get("/:id", gLiveryHedler_1.getSingleGenarelLiveryBook);
router.delete("/:id", gLiveryHedler_1.deleteSingleGenareliveryBook);
router.put("/:id", multer_1.default === null || multer_1.default === void 0 ? void 0 : multer_1.default.single("book_cover_image"), gLiveryHedler_1.putSingleGenarelLiveryBook);
exports.default = router;
//# sourceMappingURL=gLiveryRouter.js.map