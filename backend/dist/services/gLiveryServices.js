"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gLiverySingleBookDeleteServices = exports.gLiverySingleBookPutServices = exports.gLiverySingleBookGetServices = exports.gLiveryBookGetServices = exports.gLiveryBookCtrateServices = void 0;
const GLiveryModel_1 = __importDefault(require("../models/GLiveryModel"));
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
/**
 * Creates a diploma livery book services.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
const gLiveryBookCtrateServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        let { book_name, publisher_name, } = req.body;
        book_name = book_name.length > 0 ? book_name.trim() : book_name.trim();
        req.body;
        publisher_name =
            publisher_name.length > 0 ? publisher_name.trim() : publisher_name.trim();
        if (book_name && publisher_name) {
            if (req.file) {
                const book_cover_image = yield ((_a = cloudinary_1.default === null || cloudinary_1.default === void 0 ? void 0 : cloudinary_1.default.uploader) === null || _a === void 0 ? void 0 : _a.upload((_b = req === null || req === void 0 ? void 0 : req.file) === null || _b === void 0 ? void 0 : _b.path));
                const createBook = new GLiveryModel_1.default({
                    book_name,
                    publisher_name,
                    book_cover_image: book_cover_image.url,
                });
                const newBook = yield createBook.save();
                res.status(200).json({
                    message: "successfuly add book",
                    data: newBook,
                    status: 200,
                });
            }
            const createBook = new GLiveryModel_1.default({
                book_name,
                publisher_name,
            });
            const newBook = yield createBook.save();
            res
                .status(200)
                .json({ message: "successfuly add book", data: newBook, status: 200 });
        }
        else {
            res
                .status(200)
                .json({ message: "plz! send valid data", data: {}, status: 400 });
        }
    }
    catch (error) {
        res
            .status(200)
            .json({ message: "plz! send valid data", data: {}, status: 400 });
    }
});
exports.gLiveryBookCtrateServices = gLiveryBookCtrateServices;
/**
 * get  diploma livery all books services.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
const gLiveryBookGetServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBooks = yield GLiveryModel_1.default.find();
        res.status(200).json({
            message: "successfuly find all book",
            data: allBooks,
            status: 200,
        });
    }
    catch (error) {
        res
            .status(200)
            .json({ message: "plz! send valid data", data: {}, status: 400 });
    }
});
exports.gLiveryBookGetServices = gLiveryBookGetServices;
/**
 * get single diploma  book services.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
const gLiverySingleBookGetServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const singleBooks = yield GLiveryModel_1.default.findOne({ _id: id });
        if (singleBooks) {
            res.status(200).json({
                message: "successfuly find book",
                data: singleBooks,
                status: 200,
            });
        }
        else {
            res.status(200).json({
                message: "Book not found",
                data: {},
                status: 404,
            });
        }
    }
    catch (error) {
        res
            .status(200)
            .json({ message: "plz! send valid data", data: {}, status: 400 });
    }
});
exports.gLiverySingleBookGetServices = gLiverySingleBookGetServices;
/**
 * Creates a diploma livery book services.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
const gLiverySingleBookPutServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    try {
        let { id } = req.params;
        let { book_name, publisher_name, } = req.body;
        const find_book = yield GLiveryModel_1.default.findOne({ _id: id });
        if (find_book) {
            book_name = (book_name === null || book_name === void 0 ? void 0 : book_name.length) > 0 ? book_name === null || book_name === void 0 ? void 0 : book_name.trim() : book_name === null || book_name === void 0 ? void 0 : book_name.trim();
            publisher_name =
                (publisher_name === null || publisher_name === void 0 ? void 0 : publisher_name.length) > 0
                    ? publisher_name === null || publisher_name === void 0 ? void 0 : publisher_name.trim()
                    : publisher_name === null || publisher_name === void 0 ? void 0 : publisher_name.trim();
            if (req.file) {
                const book_cover_image = yield ((_c = cloudinary_1.default === null || cloudinary_1.default === void 0 ? void 0 : cloudinary_1.default.uploader) === null || _c === void 0 ? void 0 : _c.upload((_d = req === null || req === void 0 ? void 0 : req.file) === null || _d === void 0 ? void 0 : _d.path));
                find_book.book_name = book_name || find_book.book_name;
                find_book.publisher_name = publisher_name || find_book.publisher_name;
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
            find_book.save();
            return res.status(200).json({
                message: "successfuly update book",
                data: find_book,
                status: 200,
            });
        }
        else {
            res
                .status(200)
                .json({ message: "book not found", data: {}, status: 400 });
        }
    }
    catch (error) {
        console.log(error);
        res
            .status(200)
            .json({ message: "plz! send valid data", data: {}, status: 400 });
    }
});
exports.gLiverySingleBookPutServices = gLiverySingleBookPutServices;
/**
 * Creates a diploma livery book services.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
const gLiverySingleBookDeleteServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const singleBooks = yield GLiveryModel_1.default.findOne({ _id: id });
        if (singleBooks) {
            const deleteBook = yield GLiveryModel_1.default.findByIdAndDelete({ _id: id });
            res.status(200).json({
                message: "successfuly delete book",
                data: deleteBook,
                status: 200,
            });
        }
        else {
            res.status(200).json({
                message: "Book not found",
                data: {},
                status: 404,
            });
        }
    }
    catch (error) {
        res
            .status(200)
            .json({ message: "plz! send valid data", data: {}, status: 400 });
    }
});
exports.gLiverySingleBookDeleteServices = gLiverySingleBookDeleteServices;
//# sourceMappingURL=gLiveryServices.js.map