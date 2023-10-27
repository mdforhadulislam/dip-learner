"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v1_1 = __importDefault(require("../routers/v1"));
const router = express_1.default.Router();
router.use("/api/v1/", v1_1.default);
// router.use("*", (_req: Request, res: Response) => {
//   res.status(200).send({
//     message: "not found",
//     data: {},
//     status: 404,
//   });
// });
router.use("/health", (_req, res) => {
    res.status(200).json({
        message: "success",
        data: {},
        status: 200,
    });
});
exports.default = router;
//# sourceMappingURL=router.js.map