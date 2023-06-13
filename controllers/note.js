const Note = require("../models/note");

const createNote = async (req, res) => {
  try {
    const note = new Note(req.body);
    await note.save();
    res.status(200).json({
      success: true,
      note,
      message: "Note Create Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const getNote = async (req, res) => {
  try {
    const userId = req.body.userId;

    const notes = await Note.find({ userId });
    if (notes) {
      return res.status(200).json({
        success: true,
        notes,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.headers;
    const note = await Note.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      note,
      message: "Note Delete Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const editeNote = async (req, res) => {
  try {
    const { id } = req.headers;
    const note = await Note.findByIdAndUpdate({ _id: id }, req.body);

    res.status(200).json({
      success: true,
      note,
      message: "Note Edit Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createNote, getNote, deleteNote, editeNote };
