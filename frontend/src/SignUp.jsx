import React from "react";

export default function SignupPage() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div
          className="card shadow-sm p-4"
          style={{ maxWidth: "400px", margin: "auto" }}
        >
          <h3 className="text-center mb-4 text-primary fw-bold">Sign Up</h3>

          <form>
            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
              />
            </div>

            {/* Signup button */}
            <a href="/Dashboard" className="btn btn-primary w-100 mb-3"> SignUp</a>

            {/* Already have an account? */}
            <div className="text-center">
                Already have an account? 
              <a href="/LoginPage" className="text-decoration-none">
                Login
              </a>
            </div>
          </form>

          {/* ✅ Back to Home */}
          <a
            href="/"
            className="btn btn-link mt-3 w-100 text-decoration-none"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
