// Module dependencies
import express from "express";
import middlewares from "./middlewares";
import router from "./router";

// express app
const app = express();

//middlewares useing
app.use(router);
app.use(middlewares);

export default app;
