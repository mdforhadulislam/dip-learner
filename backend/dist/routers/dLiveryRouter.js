"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dLiveryHendler_1 = require("../controllers/dLiveryHendler");
const multer_1 = __importDefault(require("../utils/multer"));
const router = express_1.default.Router();
router.post("/", multer_1.default === null || multer_1.default === void 0 ? void 0 : multer_1.default.single("book_cover_image"), dLiveryHendler_1.createDiplomaLiveryBook);
router.get("/", dLiveryHendler_1.getAllDiplomaLiveryBook);
router.get("/:id", dLiveryHendler_1.getSingleDiplomaLiveryBook);
router.delete("/:id", dLiveryHendler_1.deleteSingleDiplomaLiveryBook);
router.put("/:id", multer_1.default === null || multer_1.default === void 0 ? void 0 : multer_1.default.single("book_cover_image"), dLiveryHendler_1.putSingleDiplomaLiveryBook);
exports.default = router;
//# sourceMappingURL=dLiveryRouter.js.map