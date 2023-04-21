const Exercise = require("../models/exercise");

exports.index = async function (req, res) {
  const exercises = await Exercise.find().lean();
  return res.json({ data: { exercises } });
};

exports.create = async function (req, res) {
  const { exerciseName, exerciseLength } = req.body;

  const alreadyPresentExercise = await exercise.findOne({ exerciseName });
  if (alreadyPresentExercise) {
    return res.json({
      error: { code: 403, message: "Exercise Name already exists" },
    });
  }

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

  if (!exercise) {
    return res.json({
      error: { code: 404, message: "Exercise does not exist" },
    });
  }

  return res.json({ data: { exercise } });
};
