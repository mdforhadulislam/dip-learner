"use strict";
/*
 * Title: Server
 * Description: This file working server starting server
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
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./apps/app"));
const dbConfig_1 = __importDefault(require("./db/dbConfig"));
dotenv_1.default.config({ path: "../" });
// server starting port
const port = process.env.PORT || "5000";
app_1.default.set("port", port);
// server createing
const server = http_1.default.createServer(app_1.default);
// Listen on provided port, on all network interfaces.
server.listen(port, () => {
    (0, dbConfig_1.default)();
    console.log(`server runing on port http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map