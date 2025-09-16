import React from "react";
import Navbar from "./Navbar";
import "./animations.css";

export default function Homepage() {
  return (
    <div className="min-vh-100" style={{ backgroundColor: '#fafbfc' }}>
      {/* Use Common Navbar */}
      <Navbar />

      {/* Enhanced Hero Section */}
      <div className="container-fluid px-0">
        <div 
          className="d-flex align-items-center justify-content-center text-center position-relative overflow-hidden animate-gradient"
          style={{ 
            minHeight: '90vh', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #3b82f6 100%)',
            backgroundSize: '400% 400%'
          }}
        >
          {/* Animated background elements */}
          <div 
            className="position-absolute animate-float"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              top: '10%',
              right: '10%'
            }}
          ></div>
          <div 
            className="position-absolute animate-float-reverse"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              bottom: '15%',
              left: '15%'
            }}
          ></div>
          
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="text-white">
                  <h1 
                    className="display-4 fw-bold mb-4 lh-1 fade-in"
                    style={{ 
                      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    Effortless Academic
                    <span 
                      className="d-block text-gradient" 
                      style={{ 
                        background: 'linear-gradient(135deg, #a7f3d0, #34d399)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Scheduling
                    </span>
                  </h1>
                  <p 
                    className="lead mb-5 opacity-90"
                    style={{ 
                      fontSize: '1.25rem',
                      lineHeight: '1.6',
                      maxWidth: '600px',
                      margin: '0 auto 2rem'
                    }}
                  >
                    Transform your institution's timetable management with AI-powered scheduling that eliminates conflicts and optimizes resources.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <a 
                      href="/login" 
                      className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold"
                      style={{ 
                        color: '#2563eb',
                        minWidth: '180px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Start Free Trial
                    </a>
                    <a 
                      href="/features" 
                      className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-medium"
                      style={{ 
                        minWidth: '180px',
                        borderWidth: '2px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      View Features
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Preview - Minimalist Cards */}
      <div className="container py-5 my-5">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="display-6 fw-bold mb-3" style={{ color: '#1e293b' }}>
              Why Choose Smart Scheduler?
            </h2>
            <p className="lead text-muted">
              Designed for modern educational institutions seeking efficiency and innovation.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ 
                transition: 'all 0.3s ease',
                backgroundColor: 'white'
              }}
            >
              <div className="card-body p-4 text-center">
                <div 
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    backgroundColor: '#dbeafe',
                    color: '#2563eb'
                  }}
                >
                  <i className="fas fa-robot" style={{ fontSize: '1.5rem' }}></i>
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#1e293b' }}>AI-Powered</h5>
                <p className="text-muted mb-0">
                  Advanced algorithms automatically resolve scheduling conflicts and optimize resource allocation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ 
                transition: 'all 0.3s ease',
                backgroundColor: 'white'
              }}
            >
              <div className="card-body p-4 text-center">
                <div 
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    backgroundColor: '#dcfce7',
                    color: '#16a34a'
                  }}
                >
                  <i className="fas fa-clock" style={{ fontSize: '1.5rem' }}></i>
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#1e293b' }}>Real-time Updates</h5>
                <p className="text-muted mb-0">
                  Instant notifications and live synchronization across all departments and faculty members.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ 
                transition: 'all 0.3s ease',
                backgroundColor: 'white'
              }}
            >
              <div className="card-body p-4 text-center">
                <div 
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    backgroundColor: '#fef3c7',
                    color: '#d97706'
                  }}
                >
                  <i className="fas fa-chart-bar" style={{ fontSize: '1.5rem' }}></i>
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#1e293b' }}>Analytics Dashboard</h5>
                <p className="text-muted mb-0">
                  Comprehensive insights into utilization rates, workload distribution, and performance metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        className="py-5 text-center"
        style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          borderTop: '1px solid #e2e8f0'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h3 className="fw-bold mb-3" style={{ color: '#1e293b' }}>
                Ready to Transform Your Scheduling?
              </h3>
              <p className="text-muted mb-4">
                Join hundreds of institutions already using Smart Scheduler to optimize their academic operations.
              </p>
              <a 
                href="/signup" 
                className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-semibold"
                style={{ 
                  backgroundColor: '#2563eb',
                  borderColor: '#2563eb',
                  minWidth: '200px'
                }}
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

