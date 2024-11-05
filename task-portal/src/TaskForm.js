import React, { useState } from 'react';
import './TaskForm.css';
import Sidebar12 from './Sidebar12';

const TaskForm = () => {
  const [formData, setFormData] = useState({
    facultyId: '',
    facultyName: '',
    date: '',
    taskDescription: '',
    proof: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Task Submitted!');
    // Handle form submission logic here
  };

  return (
    <div className="taskform-container">
      <Sidebar12/>
      <form className="taskform" onSubmit={handleSubmit}>
        <h2 className="form-title">Task Submission :</h2>
        
        <div className="form-group">
          <label htmlFor="facultyId">Faculty Id</label>
          <input
            type="text"
            id="facultyId"
            name="facultyId"
            value={formData.facultyId}
            onChange={handleChange}
            placeholder="Enter Faculty Id"
          />
        </div>

        <div className="form-group">
          <label htmlFor="facultyName">Faculty Name</label>
          <input
            type="text"
            id="facultyName"
            name="facultyName"
            value={formData.facultyName}
            onChange={handleChange}
            placeholder="Enter Faculty Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="taskDescription">About Task</label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            value={formData.taskDescription}
            onChange={handleChange}
            placeholder="Enter Task Description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="proof">Proof<span className="required">*</span></label>
          <input
            type="file"
            id="proof"
            name="proof"
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="button" className="cansel-button">Cansel</button>
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
