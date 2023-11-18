const express = require("express");
const router = express.Router();
const { Task } = require("../models/model");

//Create a task
router.post("/tasks", async (req, res) => {
  //res.send("Post API");
  const data = new Task({
    title: req.body.title,
    description: req.body.description,
    status: false,
    dueDate: req.body.dueDate, //Math.floor(Date.now() / 1000 + req.body.dueDate),
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const data = await Task.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get spacific task by ID
router.get("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Task.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Modify task by ID
router.put("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await Task.findByIdAndUpdate(id, updatedData, options);
    res.status(204).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete a task by ID
router.delete("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Task.findByIdAndDelete(id);
    res.send(`The document with ${data.name} has been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
