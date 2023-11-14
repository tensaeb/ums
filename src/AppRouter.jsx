/* eslint-disable no-unused-vars */
// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import GradesPage from "./pages/GradesPage";
import CoursesPage from "./pages/CoursesPage";
import StudentsPage from "./pages/StudentsPage";
import AnalyticsPage from "./pages/AnalyticsPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/grades" element={<GradesPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        {/* Add additional routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
