import React, { useState } from 'react';
import './TaskForm.css'; // Optional, for custom styling
import Sidebar12 from './Sidebar12';

const TimeExtendForm = () => {
  const [facultyId, setFacultyId] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [newEndDate, setNewEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the time extension request here
    console.log({ facultyId, facultyName, taskTitle, newEndDate });
  };

  return (
    <div className="form-container">
      <Sidebar12/>
      <h2>Time Extension Form</h2>
      <form onSubmit={handleSubmit}>
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

        <label htmlFor="task-title">Task Title</label>
        <input
          type="text"
          id="task-title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
        />

        <label htmlFor="new-end-date">New End Date</label>
        <input
          type="date"
          id="new-end-date"
          value={newEndDate}
          onChange={(e) => setNewEndDate(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TimeExtendForm;
