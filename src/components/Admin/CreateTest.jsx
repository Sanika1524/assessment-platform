import React, { useState } from "react";
import "./CreateTest.css";
import { useNavigate } from "react-router-dom";

const CreateTest = () => {
  const [testName, setTestName] = useState("");
  const [description, setDescription] = useState("");
  const [mcqs, setMcqs] = useState([]);
  const [codingQuestions, setCodingQuestions] = useState([]);

  const [mcqInput, setMcqInput] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  });

  const [codingInput, setCodingInput] = useState({
    problem: "",
    expectedOutput: "",
  });

  const navigate = useNavigate();

  const addMcq = () => {
    if (
      mcqInput.question.trim() === "" ||
      mcqInput.options.some((opt) => opt.trim() === "") ||
      mcqInput.correctAnswer.trim() === ""
    ) {
      alert("Please fill all MCQ fields before adding.");
      return;
    }

    setMcqs([...mcqs, mcqInput]);
    setMcqInput({ question: "", options: ["", "", "", ""], correctAnswer: "" });
  };

  const addCoding = () => {
    if (
      codingInput.problem.trim() === "" ||
      codingInput.expectedOutput.trim() === ""
    ) {
      alert("Please fill all coding question fields before adding.");
      return;
    }

    setCodingQuestions([...codingQuestions, codingInput]);
    setCodingInput({ problem: "", expectedOutput: "" });
  };

  const saveTest = () => {
    if (testName.trim() === "") {
      alert("Please enter a test name.");
      return;
    }

    const newTest = {
      id: Date.now(),
      testName,
      description,
      mcqs,
      codingQuestions,
    };

    const existingTests = JSON.parse(localStorage.getItem("tests") || "[]");
    existingTests.push(newTest);
    localStorage.setItem("tests", JSON.stringify(existingTests));

    alert("Test Saved!");

    // Clear form
    setTestName("");
    setDescription("");
    setMcqs([]);
    setCodingQuestions([]);

    // Navigate to admin dashboard
    navigate("/admin");
  };

  return (
    <div className="container">
      <h2>Create New Test</h2>

      {/* Test Details */}
      <div className="section">
        <h3>Test Details</h3>
        <input
          type="text"
          placeholder="Test Name"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Add MCQ */}
      <div className="section">
        <h3>Add MCQ</h3>
        <input
          type="text"
          placeholder="MCQ Question"
          value={mcqInput.question}
          onChange={(e) =>
            setMcqInput({ ...mcqInput, question: e.target.value })
          }
        />
        {mcqInput.options.map((opt, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => {
              const newOptions = [...mcqInput.options];
              newOptions[i] = e.target.value;
              setMcqInput({ ...mcqInput, options: newOptions });
            }}
          />
        ))}
        <input
          type="text"
          placeholder="Correct Answer"
          value={mcqInput.correctAnswer}
          onChange={(e) =>
            setMcqInput({ ...mcqInput, correctAnswer: e.target.value })
          }
        />
        <button onClick={addMcq}>Add MCQ</button>
      </div>

      {/* Add Coding Question */}
      <div className="section">
        <h3>Add Coding Question</h3>
        <input
          type="text"
          placeholder="Problem Statement"
          value={codingInput.problem}
          onChange={(e) =>
            setCodingInput({ ...codingInput, problem: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Expected Output"
          value={codingInput.expectedOutput}
          onChange={(e) =>
            setCodingInput({ ...codingInput, expectedOutput: e.target.value })
          }
        />
        <button onClick={addCoding}>Add Coding Question</button>
      </div>

      <button className="save-button" onClick={saveTest}>
        Save Test
      </button>
    </div>
  );
};

export default CreateTest;
