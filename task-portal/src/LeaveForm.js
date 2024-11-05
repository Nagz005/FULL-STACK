import React, { useState } from 'react';
import './LeaveForm.css'; // Optional, for custom styling
import Sidebar12 from './Sidebar12';

const LeaveForm = () => {
  const [facultyId, setFacultyId] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the leave form submission here
    console.log({ facultyId, facultyName, fromDate, toDate, reason });
  };

  return (
    <div className="form-container">
        <Sidebar12/>
      <h2>Leave Form</h2>
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

        <label htmlFor="from-date">From Date</label>
        <input
          type="date"
          id="from-date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          required
        />

        <label htmlFor="to-date">To Date</label>
        <input
          type="date"
          id="to-date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          required
        />

        <label htmlFor="reason">Reason</label>
        <textarea
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaveForm;
