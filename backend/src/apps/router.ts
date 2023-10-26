import express, { Request, Response } from "express";
import AccountsRouter from "../routers/accountsRouter";
import AuthRouter from "../routers/authRouter";
import ComonRouter from "../routers/comonRouter";
import DiplomaLiveryRouter from "../routers/dLiveryRouter";
import GenarelLiveryRouter from "../routers/gLiveryRouter";
import PaymentsRouter from "../routers/paymentsRouter";

const router = express.Router();

router.use("/auth/", AuthRouter);
router.use("/d/livery/", DiplomaLiveryRouter);
router.use("/g/livery/", GenarelLiveryRouter);
router.use("/accounts/", AccountsRouter);
router.use("/payments/", PaymentsRouter);
router.use("/", ComonRouter);

router.use("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "success",
    data: {},
    status: 200,
  });
});

export default router;
