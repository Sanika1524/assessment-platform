import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Common/Home";
import AdminLogin from "./components/Auth/AdminLogin";
import CandidateLogin from "./components/Auth/CandidateLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import CreateTest from "./components/Admin/CreateTest";
import TestList from "./components/Candidate/TestList";
import TakeTest from "./components/Candidate/TakeTest";
import Summary from "./components/Candidate/Summary";
import ViewAllTests from "./components/Admin/ViewAllTest";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/candidate/login" element={<CandidateLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/create-test" element={<CreateTest />} />
      <Route path="/admin/view-tests" element={<ViewAllTests />} />
      <Route path="/tests" element={<TestList />} />
      <Route path="/take-test/:id" element={<TakeTest />} />
      <Route path="/summary/:id" element={<Summary />} />
    </Routes>
  );
};

export default AppRoutes;
