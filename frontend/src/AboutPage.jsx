import React from "react";
import Navbar from "./Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="fw-bold text-primary mb-4">About SmartScheduler</h2>
        <p className="text-muted">
          In most colleges, timetables are still created manually using spreadsheets or basic tools. 
          This leads to clashes, underutilized classrooms, and uneven faculty workload.
        </p>
        <p className="text-muted">
          With NEP 2020 promoting multidisciplinary learning, scheduling has become even more complex. 
          SmartScheduler is designed to make this process efficient, automated, and adaptive.
        </p>
      </div>
    </>
  );
}
