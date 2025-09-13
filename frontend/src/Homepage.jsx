import React from "react";

export default function Homepage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="/">
            Smart Scheduler
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/FeaturesPage">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            {/* Login + Signup Buttons */}
            <div className="d-flex gap-2">
              <a href="/LoginPage" className="btn btn-outline-primary">Login</a>
              <a href="/SignUp" className="btn btn-primary">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></div>

        <div className="position-relative px-3" style={{ maxWidth: "700px" }}>
          <h1 className="display-4 fw-bold">
            Smarter Curriculum, Better Scheduling
          </h1>
          <p className="lead mb-4">
            Organize classes, manage workloads, and optimize your academic
            journey with our Smart Curriculum & Timetable Scheduler.
          </p>
          <a href="/LoginPage" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
