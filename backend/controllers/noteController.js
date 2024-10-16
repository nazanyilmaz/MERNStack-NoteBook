const NoteModel = require("../models/noteModel");
const mongoose = require("mongoose");

const allNotes = async (req, res) => {
  const notes = await NoteModel.find().sort({ createdAt: -1 });
  console.log(notes);
  res.status(200).json(notes);
};
const noteAdd = async (req, res) => {
  const { title, description } = req.body;
  try {
    const note = await NoteModel.create({ title, description });
    res.status(200).json({ message: "A Note is created", note });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const aNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "ID invalid" });
  }
  const note = await NoteModel.findById(id);
  if (!id) {
    return res.status(404).json({ error: "Not is not found" });
  } else {
    res.status(200).json({ message: "Note is found", note });
  }
};
const deleteNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "ID invalid" });
  }
  const note = await NoteModel.findOneAndDelete({ _id: id });
  if (!id) {
    return res.status(404).json({ error: "Not is not found" });
  } else {
    res.status(200).json({ message: "Note is deleted", note });
  }
};
const updateNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "ID invalid" });
  }
  const note = await NoteModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );
  if (!id) {
    return res.status(404).json({ error: "Not is not found" });
  } else {
    res.status(200).json({ message: "Note is updated", note });
  }
};

module.exports = { noteAdd, allNotes, aNote, deleteNote, updateNote };
