import { Request, Response } from "express";
import DChapterModel from "../models/DChapterModel";

/******************************
 * funcation type dectlaration
 *****************************/
type FuncationType = (req: Request, res: Response) => void;

/**
 * get  diploma livery all books services.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
export const dChapterCreateServices: FuncationType = async (
  req: Request,
  res: Response
) => {
  try {
    console.log(req.body);

    const bodyData = req.body;

    const chapter_name =
      bodyData?.chapter_name?.length > 0
        ? bodyData?.chapter_name.trim()
        : bodyData?.chapter_name;
    const book_id =
      bodyData?.book_id?.length > 0
        ? bodyData?.book_id.trim()
        : bodyData?.book_id;
    const chapter_number =
      bodyData?.chapter_number > 0
        ? bodyData?.chapter_number
        : bodyData?.chapter_number;

    if (chapter_name && book_id && chapter_number) {
      const createChapter = new DChapterModel({
        chapter_name,
        chapter_number,
        book_id,
      });
      const newChapter = await createChapter.save();

      res.status(200).json({
        message: "Successfuly add new chapter",
        data: newChapter,
        status: 500,
      });
    } else {
      res.status(200).json({
        message: "Plz! send valid data",
        data: {},
        status: 500,
      });
    }
  } catch (error) {
    res.status(200).json({
      message: "there was an server said error",
      data: {},
      status: 500,
    });
  }
};
