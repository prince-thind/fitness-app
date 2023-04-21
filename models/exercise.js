const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  //for all practical purposes we can use mongoose's default provided id(_id) as id
  exerciseName: { type: String },
  exerciseLength: { type: Number },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
