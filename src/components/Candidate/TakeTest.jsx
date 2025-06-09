import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import sampleTests from "../../data/tests.json";

const TakeTest = () => {
  const { id } = useParams();
  const [test, setTest] = useState(null);
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [codingAnswers, setCodingAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    let tests = JSON.parse(localStorage.getItem("tests") || "[]");

    if (tests.length === 0) {
      tests = sampleTests;
      localStorage.setItem("tests", JSON.stringify(sampleTests));
    }

    const currentTest = tests.find((t) => t.id === Number(id));
    setTest(currentTest || null);
  }, [id]);

  const handleMcqChange = (qIndex, option) => {
    setMcqAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleCodingChange = (qIndex, code) => {
    setCodingAnswers((prev) => ({ ...prev, [qIndex]: code }));
  };

  const handleSubmit = () => {
    if (!test) return;

    const response = {
      testId: test.id,
      testName: test.testName,
      mcqAnswers,
      codingAnswers,
      submittedAt: new Date().toISOString(),
    };

    // Save response
    let allResponses = JSON.parse(localStorage.getItem("responses") || "[]");
    allResponses.push(response);
    localStorage.setItem("responses", JSON.stringify(allResponses));

    // Mark test as taken
    let takenTests = JSON.parse(localStorage.getItem("takenTests") || "[]");
    if (!takenTests.includes(test.id)) {
      takenTests.push(test.id);
      localStorage.setItem("takenTests", JSON.stringify(takenTests));
    }

    alert("Test submitted! Thank you.");
    navigate("/tests");
  };

  if (!test) {
    return <div>Loading test or test not found.</div>;
  }

  return (
    <div style={{ padding: "1rem", backgroundColor: "#F4F4F8", color: "#2C2C2C" }}>
      <h2>{test.testName}</h2>
      <p>{test.description}</p>

      <h3>MCQs</h3>
      {test.mcqs.length === 0 && <p>No MCQs in this test.</p>}
      {test.mcqs.map((mcq, index) => (
        <div key={index} style={{ marginBottom: "1rem", padding: "0.5rem", backgroundColor: "#EDE7F6", borderRadius: "5px" }}>
          <p><strong>{index + 1}. {mcq.question}</strong></p>
          {mcq.options.map((opt, i) => (
            <label key={i} style={{ display: "block", marginLeft: "1rem", cursor: "pointer" }}>
              <input
                type="radio"
                name={`mcq-${index}`}
                value={opt}
                checked={mcqAnswers[index] === opt}
                onChange={() => handleMcqChange(index, opt)}
                style={{ marginRight: "0.5rem" }}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <h3>Coding Questions</h3>
      {test.codingQuestions.length === 0 && <p>No coding questions in this test.</p>}
      {test.codingQuestions.map((cq, index) => (
        <div key={index} style={{ marginBottom: "1rem", padding: "0.5rem", backgroundColor: "#EDE7F6", borderRadius: "5px" }}>
          <p><strong>{index + 1}. {cq.problem}</strong></p>
          <textarea
            rows="6"
            placeholder="Write your code here..."
            value={codingAnswers[index] || ""}
            onChange={(e) => handleCodingChange(index, e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #C3B1E1",
              fontFamily: "monospace",
            }}
          />
        </div>
      ))}

      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#6F42C1",
          color: "#EDE7F6",
          border: "none",
          padding: "0.75rem 1.5rem",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Submit Test
      </button>
    </div>
  );
};

export default TakeTest;
