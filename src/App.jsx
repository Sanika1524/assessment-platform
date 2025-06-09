// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Common/Navbar";
import AppRoutes from "./routes";

const App = () => {
  const [userRole, setUserRole] = useState(null); // or 'admin', 'candidate'

  return (
    <>
      <Navbar userRole={userRole} />
      <AppRoutes />
    </>
  );
};

export default App;
