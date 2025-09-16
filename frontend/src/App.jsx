import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import FeaturesPage from "./FeaturesPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Legacy routes for backward compatibility */}
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/FeaturesPage" element={<FeaturesPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
