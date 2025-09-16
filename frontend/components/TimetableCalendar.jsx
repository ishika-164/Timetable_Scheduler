import React, { useState } from 'react';

const TimetableCalendar = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [viewMode, setViewMode] = useState('week'); // 'week' or 'day'

  // Sample timetable data
  const timetableData = [
    {
      id: 1,
      subject: "Data Structures",
      faculty: "Dr. Smith",
      room: "LH-1",
      batch: "CSE-A",
      time: "09:00-10:30",
      day: "Monday",
      color: "#3b82f6"
    },
    {
      id: 2,
      subject: "Mathematics",
      faculty: "Prof. Johnson",
      room: "LH-2",
      batch: "CSE-A",
      time: "10:45-12:15",
      day: "Monday",
      color: "#10b981"
    },
    {
      id: 3,
      subject: "Database Systems",
      faculty: "Dr. Wilson",
      room: "Lab-1",
      batch: "CSE-A",
      time: "14:00-15:30",
      day: "Monday",
      color: "#f59e0b"
    },
    {
      id: 4,
      subject: "Operating Systems",
      faculty: "Dr. Brown",
      room: "LH-3",
      batch: "CSE-A",
      time: "09:00-10:30",
      day: "Tuesday",
      color: "#ef4444"
    },
    {
      id: 5,
      subject: "Web Development",
      faculty: "Prof. Davis",
      room: "Lab-2",
      batch: "CSE-A",
      time: "11:00-12:30",
      day: "Wednesday",
      color: "#8b5cf6"
    }
  ];

  const timeSlots = [
    "09:00-10:30",
    "10:45-12:15", 
    "14:00-15:30",
    "15:45-17:15"
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const getClassForSlot = (day, timeSlot) => {
    return timetableData.find(item => item.day === day && item.time === timeSlot);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Weekly Timetable</h3>
          <p className="text-gray-600 text-sm">Auto-optimized scheduling overview</p>
        </div>
        
        <div className="flex gap-3 items-center">
          {/* View Mode Toggle */}
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                viewMode === 'week' 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setViewMode('week')}
            >
              Week
            </button>
            <button
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                viewMode === 'day' 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setViewMode('day')}
            >
              Day
            </button>
          </div>

          {/* Filter Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
            <i className="fas fa-filter text-sm"></i>
            <span className="font-medium">Filter</span>
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="overflow-hidden rounded-xl border border-gray-200">
        {/* Time Header */}
        <div className="grid grid-cols-6 bg-gray-50">
          <div className="p-4 border-r border-gray-200">
            <span className="font-semibold text-gray-700">Time</span>
          </div>
          {days.map(day => (
            <div key={day} className="p-4 border-r border-gray-200 last:border-r-0">
              <div className="text-center">
                <div className="font-semibold text-gray-900">{day.slice(0, 3)}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {new Date(2024, 0, days.indexOf(day) + 1).getDate()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Time Slots */}
        {timeSlots.map((timeSlot, index) => (
          <div key={timeSlot} className="grid grid-cols-6 border-t border-gray-200">
            {/* Time Column */}
            <div className="p-4 border-r border-gray-200 bg-gray-50/50">
              <div className="text-sm font-medium text-gray-700">{timeSlot}</div>
            </div>
            
            {/* Day Columns */}
            {days.map(day => {
              const classData = getClassForSlot(day, timeSlot);
              return (
                <div key={`${day}-${timeSlot}`} className="p-2 border-r border-gray-200 last:border-r-0 min-h-[80px]">
                  {classData ? (
                    <div 
                      className="h-full rounded-lg p-3 text-white text-xs cursor-pointer hover:shadow-lg transition-all transform hover:scale-105"
                      style={{ backgroundColor: classData.color }}
                    >
                      <div className="font-semibold mb-1">{classData.subject}</div>
                      <div className="opacity-90">{classData.faculty}</div>
                      <div className="opacity-75 mt-1">
                        <i className="fas fa-map-marker-alt mr-1"></i>
                        {classData.room}
                      </div>
                      <div className="opacity-75">
                        <i className="fas fa-users mr-1"></i>
                        {classData.batch}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center hover:border-blue-300 hover:bg-blue-50/30 transition-colors cursor-pointer group">
                      <span className="text-gray-400 text-xs group-hover:text-blue-500">
                        <i className="fas fa-plus"></i>
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-blue-500"></div>
          <span className="text-sm text-gray-600">Theory Classes</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-amber-500"></div>
          <span className="text-sm text-gray-600">Lab Sessions</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-green-500"></div>
          <span className="text-sm text-gray-600">Tutorials</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-purple-500"></div>
          <span className="text-sm text-gray-600">Electives</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <i className="fas fa-plus"></i>
          <span>Add Class</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <i className="fas fa-download"></i>
          <span>Export</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <i className="fas fa-sync"></i>
          <span>Auto-Optimize</span>
        </button>
      </div>
    </div>
  );
};

export default TimetableCalendar;