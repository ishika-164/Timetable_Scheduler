import React from "react";

export default function LoginPage() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="card shadow-sm p-4" style={{ maxWidth: "400px", margin: "auto" }}>
          <h3 className="text-center mb-4 text-primary fw-bold">Login</h3>

          <form>
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

            {/* Login button */}
            <a href="/Dashboard" className="btn btn-primary w-100 mb-3">
  Login
</a>


            {/* Forgot + Sign Up */}
            <div className="d-flex justify-content-between">
              <a href="#forgot" className="text-decoration-none">
                Forgot password?
              </a>
              <a href="/signup" className="text-decoration-none">
                Sign Up
              </a>
            </div>
          </form>

          {/* ✅ Back to Home */}
          <a href="/" className="btn btn-link mt-3 w-100 text-decoration-none">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
