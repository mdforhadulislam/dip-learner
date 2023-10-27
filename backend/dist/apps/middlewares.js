"use strict";
/*
 * Title: Middlewares File
 * Description: This file working connecting middlewares
 * Author: Forhadul Islam
 * Date: 26/09/2022
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module dependencies
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// middlewares
const middlewares = [
    (0, cors_1.default)(),
    (0, morgan_1.default)("dev"),
    express_1.default.json(),
    express_1.default.urlencoded({ extended: false }),
    (0, helmet_1.default)(),
];
exports.default = middlewares;
//# sourceMappingURL=middlewares.js.map