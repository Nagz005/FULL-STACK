import React from 'react';
import { FaTachometerAlt, FaTasks, FaCog, FaSignOutAlt, FaUsers } from 'react-icons/fa'; // Import FaUsers icon
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Task Management</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <FaTachometerAlt />
          <Link to="/dashboard">Dashboard</Link> {/* Link to Dashboard */}
        </li>
        <li>
          <FaTasks />
          <Link to="/addtask">Add-Task</Link> {/* Link to Add Task */}
        </li>
        <li>
          <FaUsers />
          <Link to="/faculties">Faculties</Link> {/* Link to Faculties */}
        </li>
      </ul>
      <div className="sidebar-footer">
        <button>
          <FaCog /> Settings
        </button>
        <button>
          <FaSignOutAlt /> 
          <Link to='/'>Log out</Link>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
