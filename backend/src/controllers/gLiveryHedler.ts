import { Request, Response } from "express";

/******************************
 * funcation type dectlaration
 *****************************/
type FuncationType = (req: Request, res: Response) => void;

/*******************************
 * Creates a diploma livery book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
export const createGenarelLiveryBook: FuncationType = (req, res) => {
  try {
    gLiveryBookCtrateServices(req, res);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "there was an server said error",
      data: {},
      status: 500,
    });
  }
};
