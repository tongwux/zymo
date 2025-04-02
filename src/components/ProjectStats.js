import React from 'react';
import './ProjectStats.css';

const ProjectStats = () => {
  const stats = [
    { title: 'Total Projects', value: '12', trend: '+2', color: '#4CAF50' },
    { title: 'Active Projects', value: '8', trend: '+1', color: '#2196F3' },
    { title: 'Completed', value: '4', trend: '0', color: '#9C27B0' },
    { title: 'On Hold', value: '2', trend: '-1', color: '#FF9800' },
  ];

  return (
    <div className="project-stats">
      <h2>Project Overview</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="stat-trend" style={{ color: stat.color }}>
              {stat.trend}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStats; 