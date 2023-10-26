
// Module dependencies
import express from "express";
import middlewares from "./middlewares";
import router from "./router";

// express app
const app = express();

//middlewares useing
app.use(middlewares);
app.use(router);

export default app;