"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accountsRouter_1 = __importDefault(require("./accountsRouter"));
const authRouter_1 = __importDefault(require("./authRouter"));
const comonRouter_1 = __importDefault(require("./comonRouter"));
const dBookChapterRouter_1 = __importDefault(require("./dBookChapterRouter"));
const dChapterPageRouter_1 = __importDefault(require("./dChapterPageRouter"));
const dLiveryRouter_1 = __importDefault(require("./dLiveryRouter"));
const gBookChapterRouter_1 = __importDefault(require("./gBookChapterRouter"));
const gChapterPageRouter_1 = __importDefault(require("./gChapterPageRouter"));
const gLiveryRouter_1 = __importDefault(require("./gLiveryRouter"));
const paymentsRouter_1 = __importDefault(require("./paymentsRouter"));
const router = express_1.default.Router();
router.use("/auth/", authRouter_1.default);
router.use("/accounts/", accountsRouter_1.default);
router.use("/payments/", paymentsRouter_1.default);
router.use("/", comonRouter_1.default);
// admin route and user access get methord
router.use("/d/livery/", dLiveryRouter_1.default);
router.use("/g/livery/", gLiveryRouter_1.default);
router.use("/d/livery/chapter", dBookChapterRouter_1.default);
router.use("/g/livery/chapter", gBookChapterRouter_1.default);
router.use("/d/livery/:chapter_id/pages", gChapterPageRouter_1.default);
router.use("/g/livery/:chapter_id/pages", dChapterPageRouter_1.default);
// router.use("/book/");
exports.default = router;
//# sourceMappingURL=v1.js.map