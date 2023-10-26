"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putSingleDiplomaLiveryBook = exports.getSingleDiplomaLiveryBook = exports.getAllDiplomaLiveryBook = exports.createDiplomaLiveryBook = void 0;
const dLiveryServices_1 = require("../services/dLiveryServices");
/*******************************
 * Creates a diploma livery book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
const createDiplomaLiveryBook = (req, res) => {
    try {
        (0, dLiveryServices_1.dLiveryBookCtrateServices)(req, res);
    }
    catch (error) {
        console.log(error);
        res.status(200).json({
            message: "there was an server said error",
            data: {},
            status: 500,
        });
    }
};
exports.createDiplomaLiveryBook = createDiplomaLiveryBook;
/*******************************
 * Get all diploma livery book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
const getAllDiplomaLiveryBook = (req, res) => {
    try {
        (0, dLiveryServices_1.dLiveryBookGetServices)(req, res);
    }
    catch (error) {
        console.log(error);
        res.status(200).json({
            message: "there was an server said error",
            data: {},
            status: 500,
        });
    }
};
exports.getAllDiplomaLiveryBook = getAllDiplomaLiveryBook;
/*******************************
 * Get Single diploma book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
const getSingleDiplomaLiveryBook = (req, res) => {
    try {
        (0, dLiveryServices_1.dLiverySingleBookGetServices)(req, res);
    }
    catch (error) {
        console.log(error);
        res.status(200).json({
            message: "there was an server said error",
            data: {},
            status: 500,
        });
    }
};
exports.getSingleDiplomaLiveryBook = getSingleDiplomaLiveryBook;
/*******************************
 * Get Single diploma book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
const putSingleDiplomaLiveryBook = (req, res) => {
    try {
        (0, dLiveryServices_1.dLiverySingleBookPutServices)(req, res);
    }
    catch (error) {
        console.log(error);
        res.status(200).json({
            message: "there was an server said error",
            data: {},
            status: 500,
        });
    }
};
exports.putSingleDiplomaLiveryBook = putSingleDiplomaLiveryBook;
//# sourceMappingURL=dLiveryHendler.js.map