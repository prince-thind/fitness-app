const express = require("express");
const router = express.Router();

const programsController = require("../controllers/programs");

router.get("/", programsController.index);
router.get("/:id", programsController.detail);

router.post("/create", programsController.create);
router.put("/update", programsController.create);
router.delete("/delete/:id", programsController.delete);

module.exports = router;
