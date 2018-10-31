var mongoose = require("mongoose");

// create schema
var Schema = mongoose.Schema;


var noteSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  date: {
    type: Date,
    default: Date.now
  },
  noteText: String
});

// create note model
var Note = mongoose.model("Note", noteSchema);

module.exports = Note;
