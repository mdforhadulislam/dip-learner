/*
 * Title: Server
 * Description: This file working server starting server
 * Author: Forhadul Islam
 * Date: 26/09/2022
 *
 */

// Module dependencies
import dotenv from "dotenv";
import http from "http";
import app from "./apps/app";
import setupDB from "./db/dbConfig";
dotenv.config({ path: "../" });

// server starting port
const port: string = process.env.PORT || "5000";

app.set("port", port);

// server createing
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, () => {
  setupDB();
  console.log(`server runing on port http://localhost:${port}`);
});
