// TaskDetails.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './TaskDetails.css';

const TaskDetails = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTaskDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/gettask/${id}`);
      if (response.ok) {
        const data = await response.json();
        setTask(data);
      } else {
        setError('Task not found');
      }
    } catch (error) {
      setError('Failed to fetch task details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTaskDetails();
  }, [id]);

  const handleApprove = async () => {
    if (task) {
      try {
        await fetch(`http://localhost:5000/api/updatetask/${task._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'Initiated' }),
        });
        setTasks(prevTasks => prevTasks.map(t => (t._id === task._id ? { ...t, status: 'Initiated' } : t)));
        navigate('/dashboard');
      } catch (error) {
        console.error('Error updating task status:', error);
      }
    }
  };

  const handleReject = async () => {
    if (task) {
      try {
        await fetch(`http://localhost:5000/api/updatetask/${task._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'Verified' }),
        });
        setTasks(prevTasks => prevTasks.map(t => (t._id === task._id ? { ...t, status: 'Verified' } : t)));
        navigate('/dashboard');
      } catch (error) {
        console.error('Error updating task status:', error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="task-details-container">
      <h2 className="task-details-header">Task Details</h2>
      <table className="task-details-table">
        <tbody>
          <tr>
            <th>Faculty</th>
            <td>{task.facultyName}</td>
          </tr>
          <tr>
            <th>Department</th>
            <td>{task.department}</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>{task.title}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{task.taskDesc}</td>
          </tr>
          <tr>
            <th>Proof</th>
            <td>
              {task.proof ? task.proof : "No proof provided."}
            </td>
          </tr>
          <tr>
            <th>Status</th>
            <td className={`task-status status-${task.status.toLowerCase()}`}>
              {task.status}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="task-details-footer">
        <button className="approve-button" onClick={handleApprove}>Initiated</button>
        <button className="reject-button" onClick={handleReject}>Verified</button>
        <button className="cancel-button" onClick={() => navigate('/dashboard')}>Cancel</button>
      </div>
    </div>
  );
};

export default TaskDetails;
