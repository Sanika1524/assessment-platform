import React, { useEffect, useState } from "react";

const ViewAllTests = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const storedTests = JSON.parse(localStorage.getItem("tests") || "[]");
    setTests(storedTests);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this test?")) {
      const updatedTests = tests.filter(test => test.id !== id);
      localStorage.setItem("tests", JSON.stringify(updatedTests));
      setTests(updatedTests);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>All Tests</h2>
      {tests.length === 0 ? (
        <p>No tests available.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#EDE7F6" }}>
              <th style={thStyle}>Test Name</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>MCQs</th>
              <th style={thStyle}>Coding Questions</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tests.map(test => (
              <tr key={test.id} style={{ borderBottom: "1px solid #ccc" }}>
                <td style={tdStyle}>{test.testName}</td>
                <td style={tdStyle}>{test.description || "N/A"}</td>
                <td style={tdStyle}>{test.mcqs.length}</td>
                <td style={tdStyle}>{test.codingQuestions.length}</td>
                <td style={tdStyle}>
                  {/* For now just Delete, you can add Edit/View */}
                  <button 
                    style={deleteButtonStyle} 
                    onClick={() => handleDelete(test.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const thStyle = {
  padding: "0.75rem",
  textAlign: "left",
  borderBottom: "1px solid #bbb",
};

const tdStyle = {
  padding: "0.75rem",
};

const deleteButtonStyle = {
  backgroundColor: "#d9534f",
  color: "#fff",
  border: "none",
  padding: "0.3rem 0.6rem",
  borderRadius: "4px",
  cursor: "pointer",
};

export default ViewAllTests;
