const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  facultyId: { type: String, required: true },
  facultyName: { type: String, required: true },
  department: { type: String, required: true },
  title: { type: String, required: true },
  taskDesc: { type: String },
  startDate: { type: Date, required: true }, // Ensure date is stored as Date type
  endDate: { type: Date }, // End date is optional but must also be a Date type
  proof: { type: String },
  status: { type: String, default: 'Pending' }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
