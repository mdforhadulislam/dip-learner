import { Request, Response } from "express";
import {
  gLiveryBookCtrateServices,
  gLiveryBookGetServices,
  gLiverySingleBookDeleteServices,
  gLiverySingleBookGetServices,
  gLiverySingleBookPutServices,
} from "../services/gLiveryServices";

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

/*******************************
 * Get all diploma livery book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
export const getAllGenarelLiveryBook: FuncationType = (req, res) => {
  try {
    gLiveryBookGetServices(req, res);
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
export const getSingleGenarelLiveryBook: FuncationType = (req, res) => {
  try {
    gLiverySingleBookGetServices(req, res);
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
 * update  diploma book deatils.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
export const putSingleGenarelLiveryBook: FuncationType = (req, res) => {
  try {
    gLiverySingleBookPutServices(req, res);
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
export const deleteSingleGenareliveryBook: FuncationType = (req, res) => {
  try {
    gLiverySingleBookDeleteServices(req, res);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "there was an server said error",
      data: {},
      status: 500,
    });
  }
};
