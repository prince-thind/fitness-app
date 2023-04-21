const Program = require("../models/program");

exports.index = async function (req, res) {
  const programs = await Program.find().lean();
  return res.json({ data: { programs } });
};

exports.detail = async function (req, res) {
  return res.json({ data: "TODO" });
};

exports.create = async function (req, res) {
  return res.json({ data: "TODO" });
};

exports.update = async function (req, res) {
  return res.json({ data: "TODO" });
};

exports.delete = async function (req, res) {
  return res.json({ data: "TODO" });
};
