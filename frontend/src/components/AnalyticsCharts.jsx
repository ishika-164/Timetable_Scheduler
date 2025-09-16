import React from "react";

export default function AnalyticsCharts() {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-header bg-white border-0 p-4">
        <h5 className="fw-bold mb-0" style={{ color: '#1e293b' }}>
          <i className="fas fa-chart-line text-primary me-2"></i>
          Analytics
        </h5>
      </div>
      <div className="card-body p-4">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="p-4 bg-light rounded-3 text-center text-muted">
              Utilization chart placeholder
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-light rounded-3 text-center text-muted">
              Conflicts trend placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


