"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dCreateChapterHandler = void 0;
const dChapterServices_1 = require("../services/dChapterServices");
const dCreateChapterHandler = (req, res) => {
    try {
        (0, dChapterServices_1.dChapterCreateServices)(req, res);
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
exports.dCreateChapterHandler = dCreateChapterHandler;
//# sourceMappingURL=dChapterHendler.js.map