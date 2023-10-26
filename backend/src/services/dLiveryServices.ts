import { Request, Response } from "express";
import DLiveryModel from "../models/DLiveryModel";
import cloudinary from "../utils/cloudinary";

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
export const dLiveryBookGetServices: FuncationType = async (
  req: Request,
  res: Response
) => {
  try {
    const allBooks = await DLiveryModel.find();

    res.status(200).json({
      message: "successfuly find all book",
      data: allBooks,
      status: 200,
    });
  } catch (error) {
    res
      .status(200)
      .json({ message: "plz! send valid data", data: {}, status: 400 });
  }
};

/**
 * get single diploma  book services.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
export const dLiverySingleBookGetServices: FuncationType = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const singleBooks = await DLiveryModel.findOne({ _id: id });

    if (singleBooks) {
      res.status(200).json({
        message: "successfuly find book",
        data: singleBooks,
        status: 200,
      });
    } else {
      res.status(200).json({
        message: "Book not found",
        data: {},
        status: 404,
      });
    }
  } catch (error) {
    res
      .status(200)
      .json({ message: "plz! send valid data", data: {}, status: 400 });
  }
};

/**
 * Creates a diploma livery book services.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
export const dLiveryBookCtrateServices: FuncationType = async (
  req: Request,
  res: Response
) => {
  try {
    let {
      book_name,
      publisher_name,
      probidhan_name,
    }: { book_name: string; publisher_name: string; probidhan_name: string } =
      req.body;

    book_name = book_name.length > 0 ? book_name.trim() : book_name.trim();
    req.body;
    publisher_name =
      publisher_name.length > 0 ? publisher_name.trim() : publisher_name.trim();
    probidhan_name =
      probidhan_name.length > 0 ? probidhan_name.trim() : probidhan_name.trim();

    if (book_name && publisher_name && probidhan_name) {
      if (req.file) {
        const book_cover_image = await cloudinary?.uploader?.upload(
          req?.file?.path
        );

        const createBook = new DLiveryModel({
          book_name,
          publisher_name,
          probidhan_name,
          book_cover_image: book_cover_image.url,
        });

        const newBook = await createBook.save();
        res.status(200).json({
          message: "successfuly add book",
          data: newBook,
          status: 200,
        });
      }

      const createBook = new DLiveryModel({
        book_name,
        publisher_name,
        probidhan_name,
      });

      const newBook = await createBook.save();
      res
        .status(200)
        .json({ message: "successfuly add book", data: newBook, status: 200 });
    } else {
      res
        .status(200)
        .json({ message: "plz! send valid data", data: {}, status: 400 });
    }
  } catch (error) {
    res
      .status(200)
      .json({ message: "plz! send valid data", data: {}, status: 400 });
  }
};

/**
 * Creates a diploma livery book services.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
export const dLiverySingleBookPutServices: FuncationType = async (
  req: Request,
  res: Response
) => {
  try {
    let { id }: { id: string } = req.params;

    let {
      book_name,
      publisher_name,
      probidhan_name,
    }: {
      book_name: string;
      publisher_name: string;
      probidhan_name: string;
    } = req.body;

    const find_book = await DLiveryModel.findOne({ _id: id });

    if (find_book) {
      book_name = book_name?.length > 0 ? book_name?.trim() : book_name?.trim();
      publisher_name =
        publisher_name?.length > 0
          ? publisher_name?.trim()
          : publisher_name?.trim();
      probidhan_name =
        probidhan_name?.length > 0
          ? probidhan_name?.trim()
          : probidhan_name?.trim();

      if (req.file) {
        const book_cover_image = await cloudinary?.uploader?.upload(
          req?.file?.path
        );
        find_book.book_name = book_name || find_book.book_name;
        find_book.publisher_name = publisher_name || find_book.publisher_name;
        find_book.probidhan_name = probidhan_name || find_book.probidhan_name;
        find_book.book_cover_image = book_cover_image.url || "";

        find_book.save();

        return res.status(200).json({
          message: "successfuly update book",
          data: find_book,
          status: 200,
        });
      }
      find_book.book_name = book_name || find_book.book_name;
      find_book.publisher_name = publisher_name || find_book.publisher_name;
      find_book.probidhan_name = probidhan_name || find_book.probidhan_name;

      find_book.save();

      return res.status(200).json({
        message: "successfuly update book",
        data: find_book,
        status: 200,
      });
    } else {
      res
        .status(200)
        .json({ message: "book not found", data: {}, status: 400 });
    }
  } catch (error) {
    console.log(error);

    res
      .status(200)
      .json({ message: "plz! send valid data", data: {}, status: 400 });
  }
};

/**
 * Creates a diploma livery book services.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
export const dLiverySingleBookDeleteServices: FuncationType = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const singleBooks = await DLiveryModel.findOne({ _id: id });

    if (singleBooks) {
      const deleteBook = await DLiveryModel.findByIdAndDelete({ _id: id });
      res.status(200).json({
        message: "successfuly delete book",
        data: deleteBook,
        status: 200,
      });
    } else {
      res.status(200).json({
        message: "Book not found",
        data: {},
        status: 404,
      });
    }
  } catch (error) {
    res
      .status(200)
      .json({ message: "plz! send valid data", data: {}, status: 400 });
  }
};
