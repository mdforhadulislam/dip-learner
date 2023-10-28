/*
 * Title: Database
 * Description: This file working connect with database server
 * Author: Forhadul Islam
 * Date: 26/09/2022
 *
 */

// Module dependencies
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "../../" });

// database url
const url: any =
  process.env.DBURL ||
  `mongodb+srv://mdforhadul44:PtqUkzlDxDgY9HRF@test.pogs7st.mongodb.net/?retryWrites=true&w=majority`;

const setupDB = () => {
  mongoose
    .connect(url)
    .then((response) => {
      console.log(`database connections successfull`);
    })
    .catch((error) => {
      console.log(`database not connections`);
      setupDB()
    });
};

export default setupDB;
