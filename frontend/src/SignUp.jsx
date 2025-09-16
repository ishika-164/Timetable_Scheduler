import React, { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
            {/* Signup Card */}
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
                    <i className="fas fa-user-plus text-white" style={{ fontSize: '24px' }}></i>
                  </div>
                  <h2 className="fw-bold mb-2" style={{ color: '#1e293b' }}>Create Account</h2>
                  <p className="text-muted">Join Smart Scheduler today</p>
                </div>

                {/* Signup Form */}
                <form>
                  {/* Full Name Input */}
                  <div className="mb-3">
                    <label className="form-label fw-medium text-dark">Full Name</label>
                    <div className="position-relative">
                      <input 
                        type="text" 
                        className="form-control border-0 shadow-sm py-3 ps-5"
                        placeholder="Enter your full name"
                        style={{ 
                          backgroundColor: '#f8fafc',
                          borderRadius: '12px',
                          fontSize: '15px'
                        }}
                      />
                      <i 
                        className="fas fa-user position-absolute text-muted"
                        style={{ 
                          left: '18px', 
                          top: '50%', 
                          transform: 'translateY(-50%)'
                        }}
                      ></i>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="mb-3">
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

                  {/* Institution/Role */}
                  <div className="mb-3">
                    <label className="form-label fw-medium text-dark">Institution Role</label>
                    <select 
                      className="form-select border-0 shadow-sm py-3 ps-5"
                      style={{ 
                        backgroundColor: '#f8fafc',
                        borderRadius: '12px',
                        fontSize: '15px'
                      }}
                    >
                      <option value="">Select your role</option>
                      <option value="admin">Administrator</option>
                      <option value="faculty">Faculty Member</option>
                      <option value="coordinator">Academic Coordinator</option>
                      <option value="staff">Staff Member</option>
                    </select>
                  </div>

                  {/* Password Input */}
                  <div className="mb-3">
                    <label className="form-label fw-medium text-dark">Password</label>
                    <div className="position-relative">
                      <input 
                        type={showPassword ? "text" : "password"}
                        className="form-control border-0 shadow-sm py-3 ps-5 pe-5"
                        placeholder="Create a strong password"
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
                    <div className="mt-2">
                      <div className="d-flex gap-1 mb-1">
                        <div className="flex-grow-1 bg-light rounded" style={{ height: '3px' }}>
                          <div className="bg-success rounded" style={{ height: '100%', width: '33%' }}></div>
                        </div>
                        <div className="flex-grow-1 bg-light rounded" style={{ height: '3px' }}></div>
                        <div className="flex-grow-1 bg-light rounded" style={{ height: '3px' }}></div>
                      </div>
                      <small className="text-muted">Use 8+ characters with letters, numbers & symbols</small>
                    </div>
                  </div>

                  {/* Confirm Password Input */}
                  <div className="mb-4">
                    <label className="form-label fw-medium text-dark">Confirm Password</label>
                    <div className="position-relative">
                      <input 
                        type={showConfirmPassword ? "text" : "password"}
                        className="form-control border-0 shadow-sm py-3 ps-5 pe-5"
                        placeholder="Confirm your password"
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
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                  </div>

                  {/* Terms and Privacy */}
                  <div className="mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="terms" />
                      <label className="form-check-label text-muted small" htmlFor="terms">
                        I agree to the <a href="#" className="text-primary text-decoration-none">Terms of Service</a> and <a href="#" className="text-primary text-decoration-none">Privacy Policy</a>
                      </label>
                    </div>
                  </div>

                  {/* Signup Button */}
                  <a 
                    href="/Dashboard" 
                    className="btn btn-primary w-100 py-3 rounded-pill fw-semibold mb-4"
                    style={{ 
                      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                      border: 'none',
                      fontSize: '16px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Create Account
                  </a>

                  {/* Divider */}
                  <div className="position-relative mb-4">
                    <hr className="text-muted" />
                    <span 
                      className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small"
                    >
                      or sign up with
                    </span>
                  </div>

                  {/* Social Signup Buttons */}
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

                  {/* Login Link */}
                  <div className="text-center">
                    <p className="text-muted mb-0">
                      Already have an account? 
                      <a 
                        href="/LoginPage" 
                        className="text-decoration-none fw-semibold ms-1"
                        style={{ color: '#3b82f6' }}
                      >
                        Sign in
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
                  <i className="fas fa-users"></i>
                  <small>10k+ Users</small>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <i className="fas fa-star"></i>
                  <small>4.9/5 Rating</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Font Awesome */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </div>
  );
}