import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import FeaturesPage from "./FeaturesPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage"
import Navbar from "./Navbar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/FeaturesPage" element={<FeaturesPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/FeaturesPage" element={<FeaturesPage />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
}
