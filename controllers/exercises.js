const Exercise = require("../models/exercise");
const Program = require("../models/program");

exports.index = async function (req, res) {
  const exercises = await Exercise.find().lean();
  return res.json({ data: { exercises } });
};

exports.create = async function (req, res) {
  const { exerciseName, exerciseLength } = req.body;

  if (exerciseName.trim() == "") {
    return res.json({
      error: { code: 400, message: "Exercise Name must not be empty" },
    });
  }

  const alreadyPresentExercise = await Exercise.findOne({ exerciseName });
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

  const programs = await Program.find({
    exercises: [id],
  });

  for (const program of programs) {
    const newExercises = program.exercises.filter((e) => e.id != id);
    program.exercises = newExercises;
    await program.save();
  }

  const exercise = await Exercise.findByIdAndDelete(id);

  if (!exercise) {
    return res.json({
      error: { code: 404, message: "Exercise does not exist" },
    });
  }

  return res.json({ data: { exercise } });
};
