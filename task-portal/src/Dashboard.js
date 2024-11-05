// Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FaEye } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/gettasks');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks: ' + response.statusText);
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError('Error fetching tasks: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleViewTask = (taskId) => {
    navigate(`/taskdetails/${taskId}`);
  };

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <header className="header">
          <input type="text" placeholder="Search" />
        </header>
        <section className="task-table">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Faculty Name</th>
                <th>Department</th>
                <th>Task Title</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id}>
                  <td>{task.facultyId}</td>
                  <td>{task.facultyName}</td>
                  <td>{task.department}</td>
                  <td>{task.title}</td>
                  <td>
                    <span className={`status ${task.status?.toLowerCase() || 'pending'}`}>
                      {task.status || 'Pending'}
                    </span>
                  </td>
                  <td>
                    <FaEye
                      title={`View task ${task._id}`}
                      onClick={() => handleViewTask(task._id)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
