import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addtask.css';
import Sidebar from './Sidebar';

const AddTask = () => {
  const [facultyId, setFacultyId] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [department, setDepartment] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [proof, setProof] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      facultyId,
      facultyName,
      department,
      title: taskTitle,
      taskDesc,
      startDate,
      endDate,
      proof,
    };

    try {
      const response = await fetch('http://localhost:5000/api/addtask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        navigate('/dashboard'); // Redirect to Dashboard after adding the task
      } else {
        console.error('Failed to add task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h2>Add Task</h2>
        <form className="task-form" onSubmit={handleSubmit}>
          <label htmlFor="faculty-id">Faculty Id</label>
          <input
            type="text"
            id="faculty-id"
            value={facultyId}
            onChange={(e) => setFacultyId(e.target.value)}
            required
          />

          <label htmlFor="faculty-name">Faculty Name</label>
          <input
            type="text"
            id="faculty-name"
            value={facultyName}
            onChange={(e) => setFacultyName(e.target.value)}
            required
          />

          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />

          <label htmlFor="task-title">Task Title</label>
          <input
            type="text"
            id="task-title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            required
          />

          <label htmlFor="task-desc">Task Description</label>
          <input
            type="text"
            id="task-desc"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />

          <label htmlFor="end-date">End Date</label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />

          <label htmlFor="proof">Proof</label>
          <input
            type="text"
            id="proof"
            value={proof}
            onChange={(e) => setProof(e.target.value)}
            placeholder="Upload proof..."
          />

          <div className="form-actions">
            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate('/dashboard')}
            >
              Cancel
            </button>
            <button type="submit" className="create-button">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
