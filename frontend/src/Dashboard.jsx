import React from "react";

export default function Dashboard() {
  return (
    <div>
      {/* 🔹 Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            Smart Scheduler
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">My Timetable</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">My Curriculum</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Analytics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Logout</a>
              </li>
              {/* ✅ Profile Icon */}
              <li className="nav-item ms-3">
                <a className="nav-link" href="#">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Profile"
                    width="32"
                    height="32"
                    className="rounded-circle border"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 🔹 Main Content */}
      <div className="container mt-4">
        {/* Welcome Section */}
        <h2 className="fw-bold">Welcome back, Admin 👋</h2>
        <p className="text-muted">
          Here’s an overview of your institution’s timetable health, workload balance, and curriculum insights.
        </p>

        {/* Key Highlights */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card shadow-sm text-center p-3">
              <h6 className="text-muted">Classroom Utilization</h6>
              <h3 className="text-primary">82%</h3>
              <small>Optimal usage</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm text-center p-3">
              <h6 className="text-muted">Faculty Workload</h6>
              <h3 className="text-success">Balanced</h3>
              <small>No overload detected</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm text-center p-3">
              <h6 className="text-muted">Class Clashes</h6>
              <h3 className="text-danger">3</h3>
              <small>Resolve required</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm text-center p-3">
              <h6 className="text-muted">Electives Managed</h6>
              <h3 className="text-warning">12</h3>
              <small>Cross-department</small>
            </div>
          </div>
        </div>

        {/* Timetable */}
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h4 className="fw-bold">📅 Weekly Timetable</h4>
            <p className="text-muted">Auto-optimized based on faculty and classroom availability.</p>
            <div className="border p-3 bg-light" style={{ minHeight: "200px" }}>
              [ Timetable Grid will be shown here ]
            </div>
            <button className="btn btn-primary mt-3">+ Add / Adjust Class</button>
          </div>
        </div>

        {/* Curriculum */}
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h4 className="fw-bold">📚 Curriculum Progress</h4>
            <p className="text-muted">Track course delivery and student workload under NEP 2020 flexibility.</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                Mathematics
                <div className="progress mt-1">
                  <div className="progress-bar bg-primary" style={{ width: "70%" }}>70%</div>
                </div>
              </li>
              <li className="mb-2">
                Physics
                <div className="progress mt-1">
                  <div className="progress-bar bg-warning" style={{ width: "40%" }}>40%</div>
                </div>
              </li>
              <li className="mb-2">
                Computer Science
                <div className="progress mt-1">
                  <div className="progress-bar bg-success" style={{ width: "85%" }}>85%</div>
                </div>
              </li>
            </ul>
            <button className="btn btn-primary mt-2">+ Add Course</button>
          </div>
        </div>

        {/* Analytics */}
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h4 className="fw-bold">📊 Analytics & Insights</h4>
            <p className="text-muted">
              Visualize workload distribution, clash hotspots, and classroom usage patterns.
            </p>
            <div className="border p-3 bg-light" style={{ minHeight: "200px" }}>
              [ Analytics Charts will be displayed here ]
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h4 className="fw-bold">🔔 Notifications</h4>
            <ul>
              <li>⚠️ Clash detected: CS101 & MA102 on Monday 10 AM</li>
              <li>✅ Classroom LH-2 freed after rescheduling</li>
              <li>📢 New elective request: AI & Data Science</li>
              <li>📅 Faculty workload rebalanced for Dr. Sharma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
