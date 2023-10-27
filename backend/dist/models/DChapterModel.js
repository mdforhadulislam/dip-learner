"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const DChapterSchema = new mongoose.Schema({
    chapter_name: {
        type: String,
        trim: true,
        require: true,
    },
    chapter_number: {
        type: Number,
        require: true,
    },
    book_id: {
        type: String,
        require: true,
    },
}, { timestamps: true });
exports.default = mongoose.model("Diploma-Books-Chapter", DChapterSchema);
//# sourceMappingURL=DChapterModel.js.map