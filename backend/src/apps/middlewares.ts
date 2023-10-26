/*
 * Title: Middlewares File
 * Description: This file working connecting middlewares
 * Author: Forhadul Islam
 * Date: 26/09/2022
 *
 */

// Module dependencies
import cors from "cors";
import express from "express";
import loger from "morgan";

// middlewares
const middlewares: any = [
  cors(),
  loger("dev"),
  express.json(),
  express.urlencoded({ extended: false }),
  
];

export default middlewares;