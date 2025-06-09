import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [tests, setTests] = useState([]);
  const [takenTests, setTakenTests] = useState([]);

  useEffect(() => {
    // Load all tests from localStorage or fallback to empty array
    const storedTests = JSON.parse(localStorage.getItem("tests") || "[]");
    setTests(storedTests);

    // Load taken test IDs from localStorage
    const storedTakenTests = JSON.parse(
      localStorage.getItem("takenTests") || "[]"
    );
    setTakenTests(storedTakenTests);
  }, []);

  const totalTests = tests.length;
  // For demo, assuming candidates count is hardcoded or you can fetch similarly
  const totalCandidates = 20;

  // Active tests: tests that are not taken yet by candidate(s)
  // Here active means tests not taken by anyone (no entries in takenTests)
  // You can adjust logic based on your app needs
  const activeTests = tests.filter((t) => !takenTests.includes(t.id)).length;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Welcome, Admin!</h1>

      <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
        <div style={cardStyle}>
          <h3>Total Tests</h3>
          <p>{totalTests}</p>
        </div>
        <div style={cardStyle}>
          <h3>Total Candidates</h3>
          <p>{totalCandidates}</p>
        </div>
        <div style={cardStyle}>
          <h3>Active Tests</h3>
          <p>{activeTests}</p>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Link to="/admin/create-test">
          <button style={buttonStyle}>Create New Test</button>
        </Link>
        <Link to="/admin/view-tests">
          <button style={{ ...buttonStyle, marginLeft: "1rem" }}>
            View All Tests
          </button>
        </Link>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: "#EDE7F6",
  padding: "1rem",
  borderRadius: "8px",
  flex: 1,
  textAlign: "center",
};

const buttonStyle = {
  backgroundColor: "#6F42C1",
  color: "#fff",
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default AdminDashboard;
