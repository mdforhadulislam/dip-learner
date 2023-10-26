const multer = require("multer");
const path = require("path");
// Multer config
const fileUpload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (_req: any, file: any, cb: Function) => {
    let ext = path.extname(file.originalname);
    if (ext == ".jpg" || ext == ".jpeg" || ext == ".png") {
      cb(null, true);
      return;
    }
    cb(new Error("Unsupported file type!"), false);
  },
});

export default fileUpload;
