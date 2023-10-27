import { Request, Response } from "express";
import { dChapterCreateServices } from "../services/dChapterServices";

/******************************
 * funcation type dectlaration
 *****************************/
type FuncationType = (req: Request, res: Response) => void;

export const dCreateChapterHandler: FuncationType = (req, res) => {
  try {
    dChapterCreateServices(req, res);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "there was an server said error",
      data: {},
      status: 500,
    });
  }
};
