"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dChapterHendler_1 = require("../controllers/dChapterHendler");
const router = express_1.default.Router();
router.post("/", dChapterHendler_1.dCreateChapterHandler);
// router.get("/");
// router.put('/')
// router.delete('/')
exports.default = router;
//# sourceMappingURL=dBookChapterRouter.js.map