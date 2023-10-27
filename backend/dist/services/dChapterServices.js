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
exports.dChapterCreateServices = void 0;
const DChapterModel_1 = __importDefault(require("../models/DChapterModel"));
/**
 * get  diploma livery all books services.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
const dChapterCreateServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        console.log(req.body);
        const bodyData = req.body;
        const chapter_name = ((_a = bodyData === null || bodyData === void 0 ? void 0 : bodyData.chapter_name) === null || _a === void 0 ? void 0 : _a.length) > 0
            ? bodyData === null || bodyData === void 0 ? void 0 : bodyData.chapter_name.trim()
            : bodyData === null || bodyData === void 0 ? void 0 : bodyData.chapter_name;
        const book_id = ((_b = bodyData === null || bodyData === void 0 ? void 0 : bodyData.book_id) === null || _b === void 0 ? void 0 : _b.length) > 0
            ? bodyData === null || bodyData === void 0 ? void 0 : bodyData.book_id.trim()
            : bodyData === null || bodyData === void 0 ? void 0 : bodyData.book_id;
        const chapter_number = (bodyData === null || bodyData === void 0 ? void 0 : bodyData.chapter_number) > 0
            ? bodyData === null || bodyData === void 0 ? void 0 : bodyData.chapter_number
            : bodyData === null || bodyData === void 0 ? void 0 : bodyData.chapter_number;
        if (chapter_name && book_id && chapter_number) {
            const createChapter = new DChapterModel_1.default({
                chapter_name,
                chapter_number,
                book_id,
            });
            const newChapter = yield createChapter.save();
            res.status(200).json({
                message: "Successfuly add new chapter",
                data: newChapter,
                status: 500,
            });
        }
        else {
            res.status(200).json({
                message: "Plz! send valid data",
                data: {},
                status: 500,
            });
        }
    }
    catch (error) {
        res.status(200).json({
            message: "there was an server said error",
            data: {},
            status: 500,
        });
    }
});
exports.dChapterCreateServices = dChapterCreateServices;
//# sourceMappingURL=dChapterServices.js.map