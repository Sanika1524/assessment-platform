import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CandidateLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "candidate" && password === "candidate123") {
      localStorage.setItem("role", "candidate");
      navigate("/tests");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Candidate Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default CandidateLogin;
