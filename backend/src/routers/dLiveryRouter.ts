import express from "express";
import {
  createDiplomaLiveryBook,
  getAllDiplomaLiveryBook,
  getSingleDiplomaLiveryBook,
  putSingleDiplomaLiveryBook,
} from "../controllers/dLiveryHendler";
import fileUpload from "../utils/multer";

const router = express.Router();

router.post(
  "/",
  fileUpload?.single("book_cover_image"),
  createDiplomaLiveryBook
);
router.get("/", getAllDiplomaLiveryBook);
router.get("/:id", getSingleDiplomaLiveryBook);
router.put(
  "/:id",
  fileUpload?.single("book_cover_image"),
  putSingleDiplomaLiveryBook
);

export default router;
