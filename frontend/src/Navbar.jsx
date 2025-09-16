import React, { useState, useEffect } from "react";
import "./animations.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light sticky-top"
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.12)' 
          : '0 2px 16px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: isScrolled ? '0.5rem 0' : '0.75rem 0'
      }}
    >
      <div className="container">
        {/* Enhanced Brand with Icon */}
        <a 
          className="navbar-brand fw-bold d-flex align-items-center text-decoration-none"
          href="/"
          style={{ transition: 'all 0.3s ease' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <div 
            className="rounded-3 me-3 d-flex align-items-center justify-content-center"
            style={{ 
              width: '48px', 
              height: '48px', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #3b82f6 100%)',
              boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'rotate(10deg) scale(1.1)';
              e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'rotate(0deg) scale(1)';
              e.target.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.3)';
            }}
          >
            <i className="fas fa-calendar-alt text-white" style={{ fontSize: '20px', zIndex: 2 }}></i>
          </div>
          <div>
            <span 
              style={{ 
                color: '#1e293b', 
                fontSize: '1.6rem',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                lineHeight: '1'
              }}
            >
              Smart
            </span>
            <span 
              style={{ 
                color: '#3b82f6', 
                fontSize: '1.6rem',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                marginLeft: '4px'
              }}
            >
              Scheduler
            </span>
          </div>
        </a>

        {/* Enhanced Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 p-2"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ 
            boxShadow: 'none',
            background: isMobileMenuOpen ? '#f1f5f9' : 'transparent',
            borderRadius: '12px',
            transition: 'all 0.3s ease'
          }}
        >
          <div style={{ width: '20px', height: '20px', position: 'relative' }}>
            <span 
              style={{
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: '#3b82f6',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
                position: 'absolute',
                top: '4px'
              }}
            />
            <span 
              style={{
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: '#3b82f6',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                opacity: isMobileMenuOpen ? 0 : 1,
                position: 'absolute',
                top: '9px'
              }}
            />
            <span 
              style={{
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: '#3b82f6',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                position: 'absolute',
                top: '14px'
              }}
            />
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto me-4 align-items-center">
            <li className="nav-item mx-1">
              <a 
                className="nav-link fw-medium px-4 py-2 rounded-pill position-relative"
                href="/features"
                style={{ 
                  color: '#64748b',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9';
                  e.target.style.color = '#3b82f6';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#64748b';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Features
              </a>
            </li>
            <li className="nav-item mx-1">
              <a 
                className="nav-link fw-medium px-4 py-2 rounded-pill"
                href="/about"
                style={{ 
                  color: '#64748b',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9';
                  e.target.style.color = '#3b82f6';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#64748b';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item mx-1">
              <a 
                className="nav-link fw-medium px-4 py-2 rounded-pill"
                href="/contact"
                style={{ 
                  color: '#64748b',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9';
                  e.target.style.color = '#3b82f6';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#64748b';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="d-flex gap-3 align-items-center">
            <a 
              href="/login" 
              className="btn btn-outline-primary px-4 py-2 rounded-pill fw-semibold border-2"
              style={{ 
                borderColor: '#3b82f6',
                color: '#3b82f6',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#3b82f6';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#3b82f6';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Login
            </a>
            <a 
              href="/signup" 
              className="btn btn-primary px-4 py-2 rounded-pill fw-semibold"
              style={{ 
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                border: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.2)';
              }}
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="position-absolute top-100 start-0 end-0 animate-slide-in"
            style={{ 
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '16px',
              margin: '10px',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              zIndex: 1000
            }}
          >
            <div className="p-4">
              <div className="d-flex flex-column gap-2 mb-4">
                <a 
                  href="/features"
                  className="nav-link text-center py-2 rounded-3 fw-medium"
                  style={{ color: '#64748b' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="/about"
                  className="nav-link text-center py-2 rounded-3 fw-medium"
                  style={{ color: '#64748b' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="/contact"
                  className="nav-link text-center py-2 rounded-3 fw-medium"
                  style={{ color: '#64748b' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
              
              <div className="d-flex flex-column gap-2">
                <a 
                  href="/login" 
                  className="btn btn-outline-primary rounded-pill fw-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </a>
                <a 
                  href="/signup" 
                  className="btn btn-primary rounded-pill fw-semibold"
                  style={{ 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    border: 'none'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Font Awesome */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </nav>
  );
}
