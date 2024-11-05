const Task = require('../models/Task');

// Add a new task
exports.createTask = async (req, res) => {
  const { facultyId, facultyName, department, title, taskDesc, startDate, endDate, proof } = req.body;

  try {
    // Create a new task instance
    const newTask = new Task({
      facultyId,
      facultyName,
      department,
      title,
      taskDesc,
      startDate,
      endDate,
      proof,
    });

    // Save the task to the database
    const savedTask = await newTask.save();
    res.status(201).json(savedTask); // Respond with the created task
  } catch (error) {
    console.error('Error creating task:', error); // Log the error for debugging
    res.status(500).json({ error: 'Failed to create task' }); // Send error response
  }
};

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetch all tasks from the database
    res.status(200).json(tasks); // Respond with the list of tasks
  } catch (error) {
    console.error('Error fetching tasks:', error); // Log the error for debugging
    res.status(500).json({ error: 'Failed to fetch tasks' }); // Send error response
  }
};
