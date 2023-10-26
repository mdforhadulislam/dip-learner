import { Request, Response } from "express";
import {
  dLiveryBookCtrateServices,
  dLiveryBookGetServices,
  dLiverySingleBookGetServices,
  dLiverySingleBookPutServices,
} from "../services/dLiveryServices";

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
export const createDiplomaLiveryBook: FuncationType = (req, res) => {
  try {
    dLiveryBookCtrateServices(req, res);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "there was an server said error",
      data: {},
      status: 500,
    });
  }
};

/*******************************
 * Get all diploma livery book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
export const getAllDiplomaLiveryBook: FuncationType = (req, res) => {
  try {
    dLiveryBookGetServices(req, res);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "there was an server said error",
      data: {},
      status: 500,
    });
  }
};

/*******************************
 * Get Single diploma book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
export const getSingleDiplomaLiveryBook: FuncationType = (req, res) => {
  try {
    dLiverySingleBookGetServices(req, res);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "there was an server said error",
      data: {},
      status: 500,
    });
  }
};



/*******************************
 * Get Single diploma book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
export const putSingleDiplomaLiveryBook: FuncationType = (req, res) => {
  try {
    dLiverySingleBookPutServices(req, res);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "there was an server said error",
      data: {},
      status: 500,
    });
  }
};

