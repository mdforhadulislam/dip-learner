"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSingleGenareliveryBook = exports.putSingleGenarelLiveryBook = exports.getSingleGenarelLiveryBook = exports.getAllGenarelLiveryBook = exports.createGenarelLiveryBook = void 0;
const gLiveryServices_1 = require("../services/gLiveryServices");
/*******************************
 * Creates a diploma livery book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
const createGenarelLiveryBook = (req, res) => {
    try {
        (0, gLiveryServices_1.gLiveryBookCtrateServices)(req, res);
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
exports.createGenarelLiveryBook = createGenarelLiveryBook;
/*******************************
 * Get all diploma livery book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
const getAllGenarelLiveryBook = (req, res) => {
    try {
        (0, gLiveryServices_1.gLiveryBookGetServices)(req, res);
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
exports.getAllGenarelLiveryBook = getAllGenarelLiveryBook;
/*******************************
 * Get Single diploma book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
const getSingleGenarelLiveryBook = (req, res) => {
    try {
        (0, gLiveryServices_1.gLiverySingleBookGetServices)(req, res);
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
exports.getSingleGenarelLiveryBook = getSingleGenarelLiveryBook;
/*******************************
 * update  diploma book deatils.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
const putSingleGenarelLiveryBook = (req, res) => {
    try {
        (0, gLiveryServices_1.gLiverySingleBookPutServices)(req, res);
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
exports.putSingleGenarelLiveryBook = putSingleGenarelLiveryBook;
/*******************************
 * Get Single diploma book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
const deleteSingleGenareliveryBook = (req, res) => {
    try {
        (0, gLiveryServices_1.gLiverySingleBookDeleteServices)(req, res);
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
exports.deleteSingleGenareliveryBook = deleteSingleGenareliveryBook;
//# sourceMappingURL=gLiveryHedler.js.map