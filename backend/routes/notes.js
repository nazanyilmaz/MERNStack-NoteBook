const express = require("express");
const router = express.Router();
const {
  noteAdd,
  allNotes,
  aNote,
  deleteNote,
  updateNote,
} = require("../controllers/noteController");

router.get("/", allNotes);
router.post("/", noteAdd);
router.get("/:id", aNote);
router.delete("/:id", deleteNote);
router.patch("/:id", updateNote);

module.exports = router;
