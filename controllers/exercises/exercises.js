const Exercise = require("../../models/exercise");

exports.index = async function (req, res) {
  const exercises = await Exercise.find().lean();
  return res.json({ data: { exercises } });
};

exports.create = async function (req, res) {
  const { exerciseName, exerciseLength } = req.body;
  const exercise = new Exercise({
    exerciseName,
    exerciseLength,
  });
  await exercise.save();

  return res.json({ data: { exercise } });
};

exports.delete = async function (req, res) {
  const { id } = req.params;
  const exercise = await Exercise.findByIdAndDelete(id);

  return res.json({ data: { exercise } });
};
