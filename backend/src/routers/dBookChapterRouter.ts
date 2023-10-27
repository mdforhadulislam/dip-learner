import express from "express";
import { dCreateChapterHandler } from "../controllers/dChapterHendler";

const router = express.Router();

router.post("/", dCreateChapterHandler);
// router.get("/");
// router.put('/')
// router.delete('/')

export default router;
