import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const FacultyDetails = ({ tasks }) => {
  const { facultyId } = useParams();

  // Sample faculty details with a corresponding ID to match
  const facultyDetails = {
    id: "101", // Match this ID with your task's faculty ID
    name: "Jack",
    department: "AI&DS",
    tasks: [
      {
        id: "T001",
        title: "Self Details",
        assignedDate: "2024-10-01",
        status: "Initiated",
        description: "Complete personal information and contact details.",
      },
      {
        id: "T002",
        title: "Project Proposal",
        assignedDate: "2024-10-15",
        status: "In Progress",
        description: "Draft the proposal for the upcoming AI project.",
      },
    
    ],
  };

  // Log the facultyId to check if it's being captured correctly
  console.log("Faculty ID from URL:", facultyId);

  // Check if the faculty ID matches
  const isFacultyMatched = facultyId === facultyDetails.id;

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="faculty-detail-view">
        <h2>Faculty Details</h2>
        {isFacultyMatched ? (
          <>
            <div className="faculty-info">
              <p>ID: {facultyDetails.id}</p>
              <p>Name: {facultyDetails.name}</p>
              <p>Department: {facultyDetails.department}</p>
            </div>

            <h3>Assigned Tasks</h3>
            <ul>
              {facultyDetails.tasks.length > 0 ? (
                facultyDetails.tasks.map((task) => (
                  <li key={task.id} className="task-item">
                    <p><strong>Title:</strong> {task.title}</p>
                    <p><strong>Assigned Date:</strong> {new Date(task.assignedDate).toLocaleDateString()}</p>
                    <p><strong>Status:</strong> {task.status}</p>
                    <p><strong>Description:</strong> {task.description}</p>
                  </li>
                ))
              ) : (
                <p>No tasks assigned for this faculty.</p>
              )}
            </ul>
          </>
        ) : (
          <p>No faculty found with this ID.</p>
        )}

        {/* Internal CSS with new colors */}
        <style>
          {`
            .dashboard-container {
              display: flex;
              height: 100vh; /* Full height of the viewport */
              background-color: #e2e2e2; /* Light gray background for the whole dashboard */
            }
            .faculty-detail-view {
              flex: 1; /* Take the remaining space */
              padding: 20px; /* Add some padding */
              background-color: #ffffff; /* White background for the details */
              border-radius: 10px; /* Rounded corners */
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Slightly darker shadow */
              margin: 20px; /* Margin around the container */
            }
            .faculty-info {
              padding: 15px;
              background-color: #f0f8ff; /* Light blue background for faculty info */
              border-radius: 8px; /* Rounded corners */
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Slight shadow */
              margin-bottom: 20px; /* Space below the info box */
            }
            .task-item {
              background-color: #ffe4e1; /* Light coral background for list items */
              border-radius: 6px; /* Rounded corners */
              padding: 10px; /* Padding inside the list items */
              margin-bottom: 15px; /* Space below each item */
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow */
            }
            p {
              margin: 5px 0; /* Space above and below paragraphs */
              color: #333; /* Darker text color for better readability */
            }
            h2, h3 {
              color: #2c3e50; /* Dark blue color for headings */
            }
            @media (max-width: 768px) {
              .faculty-detail-view {
                padding: 10px; /* Less padding on smaller screens */
              }
              h2 {
                font-size: 20px; /* Smaller font size for smaller screens */
              }
              .task-item {
                padding: 8px; /* Less padding in list items */
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default FacultyDetails;
