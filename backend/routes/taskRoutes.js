// taskRoutes.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Route to add a new task
router.post('/addtask', async (req, res) => {
  const { facultyId, facultyName, department, title, taskDesc, startDate, endDate, proof } = req.body;

  try {
    const task = new Task({
      facultyId,
      facultyName,
      department,
      title,
      taskDesc,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : null,
      proof,
    });

    await task.save();
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// Route to get all tasks
router.get('/gettasks', async (req, res) => {
  try {
    const tasks = await Task.find({}, 'facultyId facultyName department title taskDesc status startDate endDate');
    res.json(tasks);
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    res.status(500).json({ error: 'Failed to retrieve tasks' });
  }
});

// Route to get a specific task by ID
router.get('/gettask/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    console.error('Error retrieving task:', error);
    res.status(500).json({ error: 'Failed to retrieve task' });
  }
});

// Route to update task status by ID
router.put('/updatetask/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Failed to update task' });
  }
});

module.exports = router;
