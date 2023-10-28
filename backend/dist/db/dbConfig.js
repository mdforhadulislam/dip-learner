"use strict";
/*
 * Title: Database
 * Description: This file working connect with database server
 * Author: Forhadul Islam
 * Date: 26/09/2022
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module dependencies
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config({ path: "../../" });
// database url
const url = process.env.DBURL ||
    `mongodb+srv://mdforhadul44:PtqUkzlDxDgY9HRF@test.pogs7st.mongodb.net/?retryWrites=true&w=majority`;
const setupDB = () => {
    mongoose_1.default
        .connect(url)
        .then((response) => {
        console.log(`database connections successfull`);
    })
        .catch((error) => {
        console.log(`database not connections`);
        setupDB();
    });
};
exports.default = setupDB;
//# sourceMappingURL=dbConfig.js.map