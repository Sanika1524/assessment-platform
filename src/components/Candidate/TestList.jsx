import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import sampleTests from "../../data/tests.json";

const TestList = () => {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [takenTests, setTakenTests] = useState([]);

  useEffect(() => {
    // Load tests from localStorage or fallback to sampleTests
    let storedTests = JSON.parse(localStorage.getItem("tests") || "[]");
    if (storedTests.length === 0) {
      storedTests = sampleTests;
      localStorage.setItem("tests", JSON.stringify(sampleTests));
    }
    setTests(storedTests);

    // Load tests that have been taken
    const taken = JSON.parse(localStorage.getItem("takenTests") || "[]");
    setTakenTests(taken);
  }, []);

  const handleStartTest = (id) => {
    navigate(`/take-test/${id}`);
  };

  const handleRetakeTest = (id) => {
    // Remove the test id from takenTests
    const updatedTakenTests = takenTests.filter((testId) => testId !== id);
    setTakenTests(updatedTakenTests);
    localStorage.setItem("takenTests", JSON.stringify(updatedTakenTests));
    // Navigate to test page
    navigate(`/take-test/${id}`);
  };

  return (
    <div style={{ padding: "1rem", backgroundColor: "#F4F4F8", color: "#2C2C2C" }}>
      <h2>Available Tests</h2>
      {tests.length === 0 && <p>No tests available.</p>}

      {tests.map((test) => {
        const isTaken = takenTests.includes(test.id);
        return (
          <div
            key={test.id}
            style={{
              marginBottom: "1rem",
              padding: "0.75rem",
              backgroundColor: isTaken ? "#CCC" : "#EDE7F6",
              borderRadius: "5px",
              opacity: isTaken ? 0.6 : 1,
            }}
          >
            <h3>{test.testName}</h3>
            <p>{test.description}</p>
            {!isTaken && (
              <button
                onClick={() => handleStartTest(test.id)}
                style={{
                  backgroundColor: "#6F42C1",
                  color: "#EDE7F6",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Start Test
              </button>
            )}

            {isTaken && (
              <>
                <button
                  onClick={() => handleRetakeTest(test.id)}
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "#EDE7F6",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "600",
                    marginRight: "1rem",
                  }}
                >
                  Retake Test
                </button>
                <Link
                  to={`/summary/${test.id}`}
                  style={{
                    color: "#6F42C1",
                    textDecoration: "underline",
                    fontWeight: "500",
                  }}
                >
                  View Summary
                </Link>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TestList;
