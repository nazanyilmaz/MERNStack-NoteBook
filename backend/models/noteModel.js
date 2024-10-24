const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Title is require"],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", notSchema);
