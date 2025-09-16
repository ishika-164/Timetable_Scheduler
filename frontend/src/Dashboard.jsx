import React from "react";
import TimetableCalendar from "./components/TimetableCalendar";
import AnalyticsCharts from "./components/AnalyticsCharts";

export default function Dashboard() {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      {/* Modern Sidebar + Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: '#1e293b' }}>
        <div className="container-fluid px-4">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
            <div 
              className="rounded me-2 d-flex align-items-center justify-content-center"
              style={{ width: '32px', height: '32px', backgroundColor: '#3b82f6' }}
            >
              <i className="fas fa-calendar-alt text-white" style={{ fontSize: '14px' }}></i>
            </div>
            Smart Scheduler
          </a>
          
          <div className="d-flex align-items-center gap-3">
            <div className="dropdown">
              <button 
                className="btn btn-link text-white p-1"
                type="button"
                data-bs-toggle="dropdown"
              >
                <i className="fas fa-bell" style={{ fontSize: '18px' }}></i>
                <span 
                  className="position-absolute translate-middle badge rounded-pill"
                  style={{ 
                    backgroundColor: '#ef4444',
                    fontSize: '10px',
                    top: '8px',
                    left: '20px'
                  }}
                >
                  3
                </span>
              </button>
            </div>
            
            <div className="dropdown">
              <button 
                className="btn btn-link text-white d-flex align-items-center gap-2 text-decoration-none p-0"
                type="button"
                data-bs-toggle="dropdown"
              >
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '36px', height: '36px', backgroundColor: '#3b82f6' }}
                >
                  <i className="fas fa-user text-white" style={{ fontSize: '14px' }}></i>
                </div>
                <span className="fw-medium">Admin</span>
                <i className="fas fa-chevron-down" style={{ fontSize: '12px' }}></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid px-4 py-4">
        {/* Welcome Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h1 className="h3 fw-bold mb-1" style={{ color: '#1e293b' }}>
                  Welcome back, Admin 👋
                </h1>
                <p className="text-muted mb-0">
                  Here's your institution's scheduling overview for today
                </p>
              </div>
              <button 
                className="btn btn-primary px-4 py-2 rounded-pill fw-medium"
                style={{ backgroundColor: '#3b82f6', borderColor: '#3b82f6' }}
              >
                <i className="fas fa-plus me-2"></i>
                New Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="row g-4 mb-5">
          <div className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '48px', height: '48px', backgroundColor: '#dbeafe' }}
                  >
                    <i className="fas fa-building text-primary" style={{ fontSize: '20px' }}></i>
                  </div>
                  <span className="badge bg-success-subtle text-success px-2 py-1 rounded-pill">
                    +5.2%
                  </span>
                </div>
                <h3 className="fw-bold mb-1" style={{ color: '#1e293b' }}>82%</h3>
                <p className="text-muted mb-0 fw-medium">Classroom Utilization</p>
                <small className="text-success">Optimal usage maintained</small>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '48px', height: '48px', backgroundColor: '#dcfce7' }}
                  >
                    <i className="fas fa-users" style={{ fontSize: '20px', color: '#16a34a' }}></i>
                  </div>
                  <span className="badge bg-success-subtle text-success px-2 py-1 rounded-pill">
                    Balanced
                  </span>
                </div>
                <h3 className="fw-bold mb-1" style={{ color: '#1e293b' }}>28</h3>
                <p className="text-muted mb-0 fw-medium">Active Faculty</p>
                <small className="text-success">No overload detected</small>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '48px', height: '48px', backgroundColor: '#fef3c7' }}
                  >
                    <i className="fas fa-exclamation-triangle" style={{ fontSize: '20px', color: '#d97706' }}></i>
                  </div>
                  <span className="badge bg-warning-subtle text-warning px-2 py-1 rounded-pill">
                    Action needed
                  </span>
                </div>
                <h3 className="fw-bold mb-1" style={{ color: '#1e293b' }}>3</h3>
                <p className="text-muted mb-0 fw-medium">Schedule Conflicts</p>
                <small className="text-warning">Requires resolution</small>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '48px', height: '48px', backgroundColor: '#e0e7ff' }}
                  >
                    <i className="fas fa-graduation-cap" style={{ fontSize: '20px', color: '#6366f1' }}></i>
                  </div>
                  <span className="badge bg-info-subtle text-info px-2 py-1 rounded-pill">
                    Multi-dept
                  </span>
                </div>
                <h3 className="fw-bold mb-1" style={{ color: '#1e293b' }}>12</h3>
                <p className="text-muted mb-0 fw-medium">Electives</p>
                <small className="text-info">Cross-department managed</small>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="row g-4">
          {/* Timetable Section */}
          <div className="col-xl-8">
            <TimetableCalendar />

            {/* Analytics Section */}
            <div className="mb-4">
              <AnalyticsCharts />
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="col-xl-4">
            {/* Curriculum Progress */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white border-0 p-4">
                <h5 className="fw-bold mb-1" style={{ color: '#1e293b' }}>
                  <i className="fas fa-book text-primary me-2"></i>
                  Curriculum Progress
                </h5>
                <p className="text-muted mb-0 small">Course delivery tracking</p>
              </div>
              <div className="card-body p-4">
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-medium" style={{ color: '#1e293b' }}>Mathematics</span>
                    <span className="text-primary fw-medium">70%</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div 
                      className="progress-bar rounded-pill"
                      style={{ width: '70%', backgroundColor: '#3b82f6' }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-medium" style={{ color: '#1e293b' }}>Physics</span>
                    <span className="text-warning fw-medium">40%</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div 
                      className="progress-bar rounded-pill"
                      style={{ width: '40%', backgroundColor: '#f59e0b' }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-medium" style={{ color: '#1e293b' }}>Computer Science</span>
                    <span className="text-success fw-medium">85%</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div 
                      className="progress-bar rounded-pill"
                      style={{ width: '85%', backgroundColor: '#10b981' }}
                    ></div>
                  </div>
                </div>

                <button className="btn btn-outline-primary w-100 rounded-pill">
                  <i className="fas fa-plus me-2"></i>
                  Add Course
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-0 p-4">
                <h5 className="fw-bold mb-1" style={{ color: '#1e293b' }}>
                  <i className="fas fa-bell text-primary me-2"></i>
                  Recent Activity
                </h5>
              </div>
              <div className="card-body p-4">
                <div className="d-flex mb-3">
                  <div 
                    className="rounded-circle me-3 flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px', backgroundColor: '#fef3c7' }}
                  >
                    <i className="fas fa-exclamation-triangle" style={{ fontSize: '14px', color: '#d97706' }}></i>
                  </div>
                  <div>
                    <p className="mb-1 fw-medium" style={{ color: '#1e293b' }}>Schedule Conflict</p>
                    <p className="text-muted small mb-1">CS101 & MA102 clash on Monday 10 AM</p>
                    <small className="text-muted">2 hours ago</small>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <div 
                    className="rounded-circle me-3 flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px', backgroundColor: '#dcfce7' }}
                  >
                    <i className="fas fa-check" style={{ fontSize: '14px', color: '#16a34a' }}></i>
                  </div>
                  <div>
                    <p className="mb-1 fw-medium" style={{ color: '#1e293b' }}>Room Freed</p>
                    <p className="text-muted small mb-1">Classroom LH-2 available after reschedule</p>
                    <small className="text-muted">4 hours ago</small>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <div 
                    className="rounded-circle me-3 flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px', backgroundColor: '#dbeafe' }}
                  >
                    <i className="fas fa-plus" style={{ fontSize: '14px', color: '#3b82f6' }}></i>
                  </div>
                  <div>
                    <p className="mb-1 fw-medium" style={{ color: '#1e293b' }}>New Elective</p>
                    <p className="text-muted small mb-1">AI & Data Science course requested</p>
                    <small className="text-muted">1 day ago</small>
                  </div>
                </div>

                <button className="btn btn-link p-0 text-primary fw-medium">
                  View all activity <i className="fas fa-arrow-right ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}