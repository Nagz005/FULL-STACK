import React, { useEffect, useState } from 'react';
import './Userfaculty.css';
import Sidebar12 from './Sidebar12';

const UserFaculty = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks from the backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/gettasks');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Fetched tasks:', data); // Debugging line
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setError('Failed to load tasks. Please try again later.'); // Set error message
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="task-container">
      <Sidebar12 />
      <div className="task-content">
        <h2 className="task-heading">Assigned Tasks</h2>
        {loading ? (
          <p>Loading tasks...</p> // Display loading message
        ) : error ? (
          <p>{error}</p> // Display error message if any
        ) : tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="task-details">
              <h2>{new Date(task.startDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</h2> {/* Display formatted task start date */}
              <h3>TASK Title:</h3>
              <p>{task.title}</p>
              <h3>TASK Description:</h3>
              <p>{task.taskDesc || 'No Description Available'}</p> {/* Check for taskDesc */}
            </div>
          ))
        ) : (
          <p>No tasks assigned yet.</p> // Show message if there are no tasks
        )}
      </div>
    </div>
  );
};

export default UserFaculty;
