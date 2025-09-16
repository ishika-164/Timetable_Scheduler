import React, { useState } from 'react';

const AnalyticsCharts = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('utilization');

  // Sample analytics data
  const analyticsData = {
    utilization: {
      classrooms: [
        { name: 'LH-1', utilization: 85, capacity: 50, hoursUsed: 34 },
        { name: 'LH-2', utilization: 72, capacity: 60, hoursUsed: 29 },
        { name: 'Lab-1', utilization: 90, capacity: 30, hoursUsed: 36 },
        { name: 'Lab-2', utilization: 68, capacity: 30, hoursUsed: 27 },
        { name: 'Seminar Hall', utilization: 45, capacity: 100, hoursUsed: 18 }
      ],
      faculty: [
        { name: 'Dr. Smith', workload: 18, maxHours: 20, subjects: 3 },
        { name: 'Prof. Johnson', workload: 16, maxHours: 20, subjects: 2 },
        { name: 'Dr. Wilson', workload: 20, maxHours: 20, subjects: 4 },
        { name: 'Dr. Brown', workload: 14, maxHours: 18, subjects: 2 },
        { name: 'Prof. Davis', workload: 12, maxHours: 16, subjects: 2 }
      ]
    },
    trends: {
      weeklyUtilization: [
        { week: 'Week 1', utilization: 78 },
        { week: 'Week 2', utilization: 82 },
        { week: 'Week 3', utilization: 85 },
        { week: 'Week 4', utilization: 79 },
        { week: 'Week 5', utilization: 88 }
      ],
      conflictTrends: [
        { week: 'Week 1', conflicts: 12 },
        { week: 'Week 2', conflicts: 8 },
        { week: 'Week 3', conflicts: 5 },
        { week: 'Week 4', conflicts: 3 },
        { week: 'Week 5', conflicts: 2 }
      ]
    },
    performance: {
      optimizationScore: 92,
      conflictResolutionRate: 95,
      userSatisfaction: 4.6,
      systemEfficiency: 89
    }
  };

  // Simple bar chart component
  const BarChart = ({ data, dataKey, nameKey, color }) => {
    const maxValue = Math.max(...data.map(item => item[dataKey]));
    
    return (
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-20 text-sm text-gray-600 font-medium">
              {item[nameKey]}
            </div>
            <div className="flex-1 relative">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-700"
                  style={{
                    width: `${(item[dataKey] / maxValue) * 100}%`,
                    backgroundColor: color
                  }}
                ></div>
              </div>
              <span className="absolute right-0 top-0 -mt-6 text-xs font-semibold text-gray-700">
                {item[dataKey]}%
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Line chart component (simplified)
  const LineChart = ({ data, height = 200 }) => {
    const maxValue = Math.max(...data.map(item => item.utilization || item.conflicts));
    const points = data.map((item, index) => ({
      x: (index / (data.length - 1)) * 100,
      y: 100 - ((item.utilization || item.conflicts) / maxValue) * 100
    }));

    const pathData = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;

    return (
      <div className="relative">
        <svg width="100%" height={height} className="overflow-visible">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map(y => (
            <line key={y} x1="0" x2="100%" y1={y} y2={y} stroke="#f3f4f6" strokeWidth="1"/>
          ))}
          
          {/* Line */}
          <path
            d={pathData}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Data points */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#3b82f6"
              className="hover:r-6 cursor-pointer transition-all"
            />
          ))}
        </svg>
        
        {/* X-axis labels */}
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          {data.map((item, index) => (
            <span key={index}>{item.week}</span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <i className="fas fa-chart-line text-blue-600"></i>
            Analytics & Insights
          </h3>
          <p className="text-gray-600 text-sm">Performance metrics and trends</p>
        </div>
        
        {/* Time Range Selector */}
        <div className="flex gap-2">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            {['week', 'month'].map(range => (
              <button
                key={range}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  timeRange === range 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setTimeRange(range)}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Key Performance Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          {
            label: 'Optimization Score',
            value: analyticsData.performance.optimizationScore,
            suffix: '%',
            color: 'bg-green-500',
            icon: 'fas fa-trophy'
          },
          {
            label: 'Conflict Resolution',
            value: analyticsData.performance.conflictResolutionRate,
            suffix: '%',
            color: 'bg-blue-500',
            icon: 'fas fa-check-circle'
          },
          {
            label: 'User Satisfaction',
            value: analyticsData.performance.userSatisfaction,
            suffix: '/5',
            color: 'bg-purple-500',
            icon: 'fas fa-star'
          },
          {
            label: 'System Efficiency',
            value: analyticsData.performance.systemEfficiency,
            suffix: '%',
            color: 'bg-amber-500',
            icon: 'fas fa-bolt'
          }
        ].map((metric, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className={`w-8 h-8 ${metric.color} rounded-lg flex items-center justify-center`}>
                <i className={`${metric.icon} text-white text-sm`}></i>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {metric.value}{metric.suffix}
              </span>
            </div>
            <p className="text-sm text-gray-600 font-medium">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Classroom Utilization */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <i className="fas fa-building text-blue-600"></i>
            Classroom Utilization
          </h4>
          <BarChart
            data={analyticsData.utilization.classrooms}
            dataKey="utilization"
            nameKey="name"
            color="#3b82f6"
          />
        </div>

        {/* Faculty Workload */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <i className="fas fa-users text-green-600"></i>
            Faculty Workload
          </h4>
          <BarChart
            data={analyticsData.utilization.faculty.map(f => ({
              name: f.name,
              utilization: Math.round((f.workload / f.maxHours) * 100)
            }))}
            dataKey="utilization"
            nameKey="name"
            color="#10b981"
          />
        </div>

        {/* Weekly Trends */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <i className="fas fa-chart-line text-purple-600"></i>
            Utilization Trends
          </h4>
          <LineChart data={analyticsData.trends.weeklyUtilization} />
        </div>

        {/* Conflict Resolution */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <i className="fas fa-exclamation-triangle text-amber-600"></i>
            Conflict Trends
          </h4>
          <LineChart data={analyticsData.trends.conflictTrends} />
        </div>
      </div>

      {/* Insights Panel */}
      <div className="mt-8 bg-blue-50 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
          <i className="fas fa-lightbulb text-blue-600"></i>
          AI-Generated Insights
        </h4>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-blue-800 mb-2">📈 Performance Highlights</h5>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• Lab-1 shows highest utilization at 90%</li>
              <li>• Conflict rate decreased by 83% over 5 weeks</li>
              <li>• Dr. Wilson approaching maximum workload capacity</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-blue-800 mb-2">💡 Recommendations</h5>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• Consider additional lab sessions for high-demand periods</li>
              <li>• Redistribute some classes from Dr. Wilson to other faculty</li>
              <li>• Seminar Hall has 55% unused capacity - opportunity for expansion</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <i className="fas fa-download"></i>
            Export PDF
          </button>
          <button className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <i className="fas fa-share"></i>
            Share Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts;