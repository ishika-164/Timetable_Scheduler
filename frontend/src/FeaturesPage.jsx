import React from "react";
import Navbar from "./Navbar";

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="fw-bold text-primary mb-4">Platform Features</h2>
        <p className="text-muted">
          Smart Scheduler solves the complex scheduling needs of higher education institutions 
          by considering faculty availability, classrooms, electives, and workload distribution.
        </p>

        <ul className="list-group">
          <li className="list-group-item">✔ Optimized Timetable Generation</li>
          <li className="list-group-item">✔ Clash-free Scheduling</li>
          <li className="list-group-item">✔ Multi-department & Multi-shift Support</li>
          <li className="list-group-item">✔ Review & Approval Workflow</li>
          <li className="list-group-item">✔ Suggestions for Rearrangements</li>
        </ul>
      </div>
    </>
  );
}
