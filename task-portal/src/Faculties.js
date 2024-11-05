import React from "react";
import { useNavigate } from "react-router-dom";
import "./Faculties.css";
import Sidebar from "./Sidebar";
import downloadImage from "./download.png";

const Faculties = () => {
  const navigate = useNavigate();

  const facultyData = [
    { id: 101, name: "Jack", dept: "CSBS", image: downloadImage },
    { id: 102, name: "Jane", dept: "CSBS", image: downloadImage },
    { id: 101, name: "Jack", dept: "CSBS", image: downloadImage },
    { id: 102, name: "Jane", dept: "CSBS", image: downloadImage },
    { id: 101, name: "Jack", dept: "CSBS", image: downloadImage },
    { id: 102, name: "Jane", dept: "CSBS", image: downloadImage },
    { id: 101, name: "Jack", dept: "CSBS", image: downloadImage },
    { id: 102, name: "Jane", dept: "CSBS", image: downloadImage },
    // add additional faculty members here
  ];

  const handleFacultyClick = (facultyId) => {
    navigate(`/facultydetails/${facultyId}`); // Ensure the path matches your App component
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="faculties-container">
        <div className="search-bar">
          <input type="text" placeholder="search" />
        </div>

        <div className="faculty-list">
          {facultyData.map((faculty) => (
            <div
              key={faculty.id}
              className="faculty-card"
              onClick={() => handleFacultyClick(faculty.id)}
            >
              <img src={faculty.image} alt={faculty.name} className="faculty-image" />
              <div className="faculty-details">
                <p>ID: {faculty.id}</p>
                <p>Name: {faculty.name}</p>
                <p>Dept: {faculty.dept}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculties;
