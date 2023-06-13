const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  body: {
    type: String,
    // required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Note = new mongoose.model("Note", noteSchema);

module.exports = Note;
