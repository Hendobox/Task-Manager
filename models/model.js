const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: Boolean,
  dueDate: Date,
});

module.exports = { Task: mongoose.model("Task", taskSchema) };
