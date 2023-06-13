const express = require("express");
const auth = require("../middleware/auth");
const {
  createNote,
  getNote,
  deleteNote,
  editeNote,
} = require("../controllers/note");

const noteRouter = express.Router();

noteRouter.post("/create", auth, createNote);
noteRouter.get("/notes", auth, getNote);
noteRouter.delete("/delete", auth, deleteNote);
noteRouter.patch("/update", auth, editeNote);

module.exports = noteRouter;
