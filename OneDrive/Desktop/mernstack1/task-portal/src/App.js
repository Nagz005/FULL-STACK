import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Addtask from './Addtask';
import Faculties from './Faculties';
import FacultyDetails from './FacultyDetails'; // Import FacultyDetails
import Login from './Login';
import UserFaculty from './UserFaculty';
import TaskForm from './TaskForm';
import LeaveForm from './LeaveForm';
import TimeExtendForm from './TimeExtendForm';
import TaskDetails from './TaskDetails';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: "101", faculty: 'Jack', department: 'AI&DS', title: 'Self Details', status: 'Initiated' },
    // Add any other initial tasks here if needed
  ]);

  // Function to handle adding a new task
  const handleAddTask = (newTask) => {
    const nextId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 101;
    const taskWithId = { ...newTask, id: nextId };
    setTasks((prevTasks) => [...prevTasks, taskWithId]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard tasks={tasks} setTasks={setTasks} />} />
        <Route path="/addtask" element={<Addtask onAddTask={handleAddTask} />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/userfaculty" element={<UserFaculty />} />
        <Route path="/taskform" element={<TaskForm />} />
        <Route path="/leaveform" element={<LeaveForm />} />
        <Route path="/timeextendform" element={<TimeExtendForm />} />
        <Route path="/taskdetails/:id" element={<TaskDetails tasks={tasks} setTasks={setTasks} />} />
        <Route path="/facultydetails/:facultyId" element={<FacultyDetails tasks={tasks} />} /> {/* New route for FacultyDetails */}
      </Routes>
    </Router>
  );
};

export default App;
