const Program = require("../models/program");

exports.index = async function (req, res) {
  const programs = await Program.find().lean();
  return res.json({ data: { programs } });
};

exports.detail = async function (req, res) {
  const { id } = req.params;
  try {
    const program = await Program.findById(id).populate("exercises").lean();
    return res.json({ data: { program } });
  } catch (e) {
    console.error(e);
    return res.json({ error: { code: 500, message: "unknown error" } });
  }
};

exports.create = async function (req, res) {
  const programName = req.body.programName;
  const exercises = JSON.parse(req.body.exercises);

  if (programName.trim() == "") {
    return res.json({
      error: { code: 400, message: "Program Name must not be empty" },
    });
  }

  const alreadyPresentProgram = await Program.findOne({ programName });
  if (alreadyPresentProgram) {
    return res.json({
      error: { code: 403, message: "Program Name already exists" },
    });
  }

  const program = new Program({
    programName,
    exercises,
  });
  await program.save();

  return res.json({ data: { program } });
};

exports.update = async function (req, res) {
  const id = req.body.id;
  const programName = req.body.programName;
  const exercises = JSON.parse(req.body.exercises);

  const program = await Program.findById(id);
  if (!program) {
    return res.json({
      error: { code: 404, message: "Program does not exist" },
    });
  }

  program.programName = programName;
  program.exercises = exercises;

  await program.save();

  return res.json({ data: { program } });
};

exports.delete = async function (req, res) {
  const { id } = req.params;
  const program = await Program.findByIdAndDelete(id);

  if (!program) {
    return res.json({
      error: { code: 404, message: "Program does not exist" },
    });
  }

  return res.json({ data: { program } });
};
