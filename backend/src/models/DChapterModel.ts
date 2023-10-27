const mongoose = require("mongoose");

const DChapterSchema = new mongoose.Schema(
  {
    chapter_name: {
      type: String,
      trim: true,
      require: true,
    },
    chapter_number: {
      type: Number,
      require: true,
    },
    book_id: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Diploma-Books-Chapter", DChapterSchema);
