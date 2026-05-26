import mongoose from "mongoose";

// 1 - create a schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }, // createdAt, updatedAt
);

// 2 - Model based off that schema
const Note = mongoose.model("Task", noteSchema);

export default Note;
