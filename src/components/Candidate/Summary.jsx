import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Summary = () => {
  const { id } = useParams();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const allResponses = JSON.parse(localStorage.getItem("responses") || "[]");
    const testResponse = allResponses.find((r) => r.testId === Number(id));
    setResponse(testResponse || null);
  }, [id]);

  if (!response) {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>No submission found for this test.</h2>
        <Link to="/tests">Go Back</Link>
      </div>
    );
  }

  const { testName, mcqAnswers, codingAnswers } = response;

  return (
    <div style={{ padding: "1rem", backgroundColor: "#F4F4F8", color: "#2C2C2C" }}>
      <h2>Summary of: {testName}</h2>
      <p><strong>Submitted on:</strong> {new Date(response.submittedAt).toLocaleString()}</p>

      <h3>MCQ Answers</h3>
      {Object.keys(mcqAnswers).length === 0 ? (
        <p>No MCQs answered.</p>
      ) : (
        Object.entries(mcqAnswers).map(([index, answer], i) => (
          <div key={i} style={{ marginBottom: "1rem", padding: "0.5rem", backgroundColor: "#EDE7F6", borderRadius: "5px" }}>
            <p><strong>Q{+index + 1}:</strong> Selected: {answer}</p>
          </div>
        ))
      )}

      <h3>Coding Answers</h3>
      {Object.keys(codingAnswers).length === 0 ? (
        <p>No coding questions answered.</p>
      ) : (
        Object.entries(codingAnswers).map(([index, code], i) => (
          <div key={i} style={{ marginBottom: "1rem", padding: "0.5rem", backgroundColor: "#EDE7F6", borderRadius: "5px" }}>
            <p><strong>Q{+index + 1}:</strong></p>
            <pre style={{ background: "#fff", padding: "0.5rem", borderRadius: "5px", fontFamily: "monospace" }}>{code}</pre>
          </div>
        ))
      )}

      <Link
        to="/tests"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          backgroundColor: "#6F42C1",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Back to Tests
      </Link>
    </div>
  );
};

export default Summary;
