"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module dependencies
const express_1 = __importDefault(require("express"));
const middlewares_1 = __importDefault(require("./middlewares"));
const router_1 = __importDefault(require("./router"));
// express app
const app = (0, express_1.default)();
//middlewares useing
app.use(router_1.default);
app.use(middlewares_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map