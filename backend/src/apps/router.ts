import express, { Request, Response } from "express";
import RouterV1 from "../routers/v1";

const router = express.Router();

router.use("/api/v1/", RouterV1);

// router.use("*", (_req: Request, res: Response) => {
//   res.status(200).send({
//     message: "not found",
//     data: {},
//     status: 404,
//   });
// });

router.use("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "success",
    data: {},
    status: 200,
  });
});

export default router;
