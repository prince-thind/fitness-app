const express = require("express");
const router = express.Router();

const exercisesController = require("../controllers/exercises/exercises");

router.get("/", exercisesController.index);
router.post("/create", exercisesController.create);
router.delete("/delete/:id", exercisesController.delete);

module.exports = router;
