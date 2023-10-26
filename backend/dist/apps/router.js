"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accountsRouter_1 = __importDefault(require("../routers/accountsRouter"));
const authRouter_1 = __importDefault(require("../routers/authRouter"));
const comonRouter_1 = __importDefault(require("../routers/comonRouter"));
const dLiveryRouter_1 = __importDefault(require("../routers/dLiveryRouter"));
const gLiveryRouter_1 = __importDefault(require("../routers/gLiveryRouter"));
const paymentsRouter_1 = __importDefault(require("../routers/paymentsRouter"));
const router = express_1.default.Router();
router.use("/auth/", authRouter_1.default);
router.use("/d/livery/", dLiveryRouter_1.default);
router.use("/g/livery/", gLiveryRouter_1.default);
router.use("/accounts/", accountsRouter_1.default);
router.use("/payments/", paymentsRouter_1.default);
router.use("/", comonRouter_1.default);
router.use("/health", (_req, res) => {
    res.status(200).json({
        message: "success",
        data: {},
        status: 200,
    });
});
exports.default = router;
//# sourceMappingURL=router.js.map