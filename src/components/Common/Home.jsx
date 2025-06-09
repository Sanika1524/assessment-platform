// src/components/Common/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "#6F42C1",  // Professional Purple
    color: "#EDE7F6",            // Lavender text on buttons
    border: "none",
    padding: "1rem 2rem",
    margin: "1rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "600",
    boxShadow: "0 4px 6px rgba(111, 66, 193, 0.3)",
    transition: "background-color 0.3s ease",
  };

  const containerStyle = {
    backgroundColor: "#F4F4F8",  // Off White
    color: "#2C2C2C",            // Charcoal text
    minHeight: "100vh",
    padding: "3rem 2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
  };

  const featureListStyle = {
    maxWidth: "600px",
    margin: "2rem auto",
    textAlign: "left",
    fontSize: "1rem",
    color: "#2C2C2C",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "#6F42C1", marginBottom: "0.5rem" }}>
        Welcome to the Assessment Platform
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
        Create, manage, and take assessments seamlessly. Whether you’re an admin creating tests or a candidate taking them, this platform makes it easy.
      </p>

      <div>
        <button
          style={buttonStyle}
          onClick={() => navigate("/admin/login")}
          onMouseOver={e => e.currentTarget.style.backgroundColor = "#5a379f"}
          onMouseOut={e => e.currentTarget.style.backgroundColor = "#6F42C1"}
        >
          Admin Area
        </button>

        <button
          style={buttonStyle}
          onClick={() => navigate("/candidate/login")}
          onMouseOver={e => e.currentTarget.style.backgroundColor = "#5a379f"}
          onMouseOut={e => e.currentTarget.style.backgroundColor = "#6F42C1"}
        >
          Candidate Area
        </button>
      </div>

      <div style={featureListStyle}>
        <h3 style={{ color: "#6F42C1" }}>Features:</h3>
        <ul>
          <li>Easy test creation with MCQs and coding questions</li>
          <li>Manage test listings and assignments</li>
          <li>Secure and user-friendly candidate test-taking interface</li>
          <li>Instant results and summary for candidates</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
