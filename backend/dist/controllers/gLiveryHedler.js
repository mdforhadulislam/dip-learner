"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGenarelLiveryBook = void 0;
/*******************************
 * Creates a diploma livery book.
 *
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 ******************************/
const createGenarelLiveryBook = (req, res) => {
    try {
        gLiveryBookCtrateServices(req, res);
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
//# sourceMappingURL=gLiveryHedler.js.map