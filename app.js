require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const mongoose = require("mongoose");
const exercisesRouter = require("./routes/exercises");
const programsRouter = require("./routes/programs");

//connect to mongodb
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Connection error:"));

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/exercises", exercisesRouter);
app.use("/api/programs", programsRouter);

module.exports = app;
