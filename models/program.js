const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const programSchema = new Schema({
  exercises: [{ type: Schema.Types.ObjectId, ref: "Exercise" }],
  programName: { type: String },
});

const Program = mongoose.model("Program", programSchema);
module.exports = Program;
