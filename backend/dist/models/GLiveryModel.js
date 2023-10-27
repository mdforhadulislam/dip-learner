"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const GLiveryBookSchema = new mongoose.Schema({
    book_name: {
        type: String,
        trim: true,
        require: true,
    },
    publisher_name: {
        type: String,
        trim: true,
        require: true,
    },
    book_cover_image: {
        type: String,
        require: false,
        default: "",
    },
}, { timestamps: true });
exports.default = mongoose.model("Genarel-Books", GLiveryBookSchema);
//# sourceMappingURL=GLiveryModel.js.map