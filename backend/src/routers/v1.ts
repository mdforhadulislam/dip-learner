import express from "express";
import AccountsRouter from "./accountsRouter";
import AuthRouter from "./authRouter";
import ComonRouter from "./comonRouter";
import DiplomaBookChapterRouter from "./dBookChapterRouter";
import GenarelChapterPagesRouter from "./dChapterPageRouter";
import DiplomaLiveryRouter from "./dLiveryRouter";
import GenarelBookChapterRouter from "./gBookChapterRouter";
import DiplomaChapterPagesRouter from "./gChapterPageRouter";
import GenarelLiveryRouter from "./gLiveryRouter";
import PaymentsRouter from "./paymentsRouter";

const router = express.Router();

router.use("/auth/", AuthRouter);
router.use("/accounts/", AccountsRouter);
router.use("/payments/", PaymentsRouter);
router.use("/", ComonRouter);

// admin route and user access get methord
router.use("/d/livery/", DiplomaLiveryRouter);
router.use("/g/livery/", GenarelLiveryRouter);
router.use("/d/livery/chapter", DiplomaBookChapterRouter);
router.use("/g/livery/chapter", GenarelBookChapterRouter);
router.use("/d/livery/:chapter_id/pages", DiplomaChapterPagesRouter);
router.use("/g/livery/:chapter_id/pages", GenarelChapterPagesRouter);

// router.use("/book/");

export default router;
