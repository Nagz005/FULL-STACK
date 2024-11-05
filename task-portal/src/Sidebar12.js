import React from 'react';
import './Sidebar12.css'; // Optional, for custom styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faClipboardCheck, faClipboardList, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar12 = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-header">
        <h2>Task Board</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="/userfaculty">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </a>
        </li>
        <li>
          <a href="/taskform">
            <FontAwesomeIcon icon={faClipboardCheck} /> Task Submission
          </a>
        </li>
        <li>
          <a href="/leaveform">
            <FontAwesomeIcon icon={faClipboardList} /> Leave Form
          </a>
        </li>
        <li>
          <a href="/leaveform">
            <FontAwesomeIcon icon={faClipboardList} /> TimeExtendForm
          </a>
        </li>
      </ul>
      <div className="sidebar-footer">
        <ul>
          <li>
            <a href="/settings">
              <FontAwesomeIcon icon={faCog} /> Settings
            </a>
          </li>
          <li>
            <a href="/logout">
              <FontAwesomeIcon icon={faSignOutAlt} /> 
              <Link to='/'>Logout</Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar12;
