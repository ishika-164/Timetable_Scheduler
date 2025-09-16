import React, { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div 
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2rem 1rem'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 col-xl-4">
            {/* Login Card */}
            <div 
              className="card border-0 shadow-lg"
              style={{ 
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)'
              }}
            >
              <div className="card-body p-5">
                {/* Logo & Header */}
                <div className="text-center mb-4">
                  <div 
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ 
                      width: '60px', 
                      height: '60px', 
                      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                    }}
                  >
                    <i className="fas fa-calendar-alt text-white" style={{ fontSize: '24px' }}></i>
                  </div>
                  <h2 className="fw-bold mb-2" style={{ color: '#1e293b' }}>Welcome Back</h2>
                  <p className="text-muted">Sign in to your Smart Scheduler account</p>
                </div>

                {/* Login Form */}
                <form>
                  {/* Email Input */}
                  <div className="mb-4">
                    <label className="form-label fw-medium text-dark">Email Address</label>
                    <div className="position-relative">
                      <input 
                        type="email" 
                        className="form-control border-0 shadow-sm py-3 ps-5"
                        placeholder="Enter your email"
                        style={{ 
                          backgroundColor: '#f8fafc',
                          borderRadius: '12px',
                          fontSize: '15px'
                        }}
                      />
                      <i 
                        className="fas fa-envelope position-absolute text-muted"
                        style={{ 
                          left: '18px', 
                          top: '50%', 
                          transform: 'translateY(-50%)'
                        }}
                      ></i>
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="mb-4">
                    <label className="form-label fw-medium text-dark">Password</label>
                    <div className="position-relative">
                      <input 
                        type={showPassword ? "text" : "password"}
                        className="form-control border-0 shadow-sm py-3 ps-5 pe-5"
                        placeholder="Enter your password"
                        style={{ 
                          backgroundColor: '#f8fafc',
                          borderRadius: '12px',
                          fontSize: '15px'
                        }}
                      />
                      <i 
                        className="fas fa-lock position-absolute text-muted"
                        style={{ 
                          left: '18px', 
                          top: '50%', 
                          transform: 'translateY(-50%)'
                        }}
                      ></i>
                      <button
                        type="button"
                        className="btn btn-link position-absolute text-muted p-0"
                        style={{ 
                          right: '18px', 
                          top: '50%', 
                          transform: 'translateY(-50%)'
                        }}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label text-muted small" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a 
                      href="#forgot" 
                      className="text-decoration-none small fw-medium"
                      style={{ color: '#3b82f6' }}
                    >
                      Forgot Password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <a 
                    href="/dashboard" 
                    className="btn btn-primary w-100 py-3 rounded-pill fw-semibold mb-4"
                    style={{ 
                      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                      border: 'none',
                      fontSize: '16px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Sign In
                  </a>

                  {/* Divider */}
                  <div className="position-relative mb-4">
                    <hr className="text-muted" />
                    <span 
                      className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small"
                    >
                      or continue with
                    </span>
                  </div>

                  {/* Social Login Buttons */}
                  <div className="row g-2 mb-4">
                    <div className="col-6">
                      <button 
                        type="button"
                        className="btn btn-outline-secondary w-100 py-2 rounded-pill"
                        style={{ borderColor: '#e2e8f0' }}
                      >
                        <i className="fab fa-google text-danger me-2"></i>
                        <span className="small">Google</span>
                      </button>
                    </div>
                    <div className="col-6">
                      <button 
                        type="button"
                        className="btn btn-outline-secondary w-100 py-2 rounded-pill"
                        style={{ borderColor: '#e2e8f0' }}
                      >
                        <i className="fab fa-microsoft text-primary me-2"></i>
                        <span className="small">Microsoft</span>
                      </button>
                    </div>
                  </div>

                  {/* Sign Up Link */}
                  <div className="text-center">
                    <p className="text-muted mb-0">
                      Don't have an account? 
                  <a 
                    href="/signup" 
                    className="text-decoration-none fw-semibold ms-1"
                    style={{ color: '#3b82f6' }}
                  >
                    Sign up
                  </a>
                    </p>
                  </div>
                </form>

                {/* Back to Home */}
                <div className="text-center mt-4 pt-3 border-top">
                  <a 
                    href="/" 
                    className="btn btn-link text-muted text-decoration-none p-0"
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back to Home
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="text-center mt-4">
              <div className="d-flex justify-content-center align-items-center gap-4 text-white opacity-75">
                <div className="d-flex align-items-center gap-1">
                  <i className="fas fa-shield-alt"></i>
                  <small>Secure</small>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <i className="fas fa-lock"></i>
                  <small>Encrypted</small>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <i className="fas fa-check-circle"></i>
                  <small>Trusted</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}