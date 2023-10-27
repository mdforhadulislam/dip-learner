import express from "express";
import {
  deleteSingleGenareliveryBook,
  getAllGenarelLiveryBook,
  getSingleGenarelLiveryBook,
  putSingleGenarelLiveryBook,
} from "../controllers/gLiveryHedler";
import { gLiveryBookCtrateServices } from "../services/gLiveryServices";
import fileUpload from "../utils/multer";

const router = express.Router();

router.post(
  "/",
  fileUpload?.single("book_cover_image"),
  gLiveryBookCtrateServices
);
router.get("/", getAllGenarelLiveryBook);
router.get("/:id", getSingleGenarelLiveryBook);
router.delete("/:id", deleteSingleGenareliveryBook);
router.put(
  "/:id",
  fileUpload?.single("book_cover_image"),
  putSingleGenarelLiveryBook
);

export default router;
