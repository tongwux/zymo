import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { 
  FiActivity, 
  FiBell, 
  FiList, 
  FiClock, 
  FiCheckCircle, 
  FiAlertCircle,
  FiTrendingUp,
  FiTrendingDown,
  FiHome,
  FiBarChart2,
  FiUsers,
  FiFileText
} from 'react-icons/fi';
import './Dashboard.css';

const Dashboard = ({ addNotification }) => {
  const notifications = [
    {
      id: 1,
      message: 'Project "16S rRNA Sequencing" has been completed successfully',
      type: 'success',
      time: '2 hours ago'
    },
    {
      id: 2,
      message: 'New project "Metagenomic Analysis" has been assigned to you',
      type: 'info',
      time: '5 hours ago'
    },
    {
      id: 3,
      message: 'Sample submission deadline approaching for "ITS Sequencing" project',
      type: 'warning',
      time: '1 day ago'
    },
    {
      id: 4,
      message: 'Your report for "Shotgun Sequencing" is ready for review',
      type: 'success',
      time: '2 days ago'
    }
  ];

  // Mock project stats
  const projectStats = [
    {
      title: 'Total Projects',
      value: '12',
      trend: '+2',
      trendIcon: <FiTrendingUp />,
      color: '#4CAF50'
    },
    {
      title: 'Active Projects',
      value: '8',
      trend: '+1',
      trendIcon: <FiTrendingUp />,
      color: '#2196F3'
    },
    {
      title: 'Completed',
      value: '4',
      trend: '0',
      trendIcon: null,
      color: '#9C27B0'
    },
    {
      title: 'On Hold',
      value: '2',
      trend: '-1',
      trendIcon: <FiTrendingDown />,
      color: '#FF9800'
    }
  ];

  // Mock recent updates
  const recentUpdates = [
    {
      id: 1,
      projectId: 1,
      projectName: '16S rRNA Sequencing Project',
      type: 'status',
      message: 'Quality check completed',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      projectId: 2,
      projectName: 'ITS Sequencing Analysis',
      type: 'payment',
      message: 'Payment received',
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      projectId: 1,
      projectName: '16S rRNA Sequencing Project',
      type: 'progress',
      message: 'Analysis phase started',
      timestamp: '1 day ago'
    }
  ];

  // Mock todo list
  const todoList = [
    {
      id: 1,
      projectId: 1,
      projectName: '16S rRNA Sequencing Project',
      task: 'Review quality check results',
      dueDate: 'Today',
      priority: 'high'
    },
    {
      id: 2,
      projectId: 2,
      projectName: 'ITS Sequencing Analysis',
      task: 'Start sample processing',
      dueDate: 'Tomorrow',
      priority: 'medium'
    },
    {
      id: 3,
      projectId: 1,
      projectName: '16S rRNA Sequencing Project',
      task: 'Prepare final report',
      dueDate: 'In 3 days',
      priority: 'low'
    }
  ];

  const stats = [
    {
      title: 'Active Projects',
      value: '12',
      icon: <FiActivity />,
      color: '#00843D'
    },
    {
      title: 'Completed Projects',
      value: '45',
      icon: <FiBarChart2 />,
      color: '#00843D'
    },
    {
      title: 'Team Members',
      value: '8',
      icon: <FiUsers />,
      color: '#00843D'
    },
    {
      title: 'Reports Generated',
      value: '56',
      icon: <FiFileText />,
      color: '#00843D'
    }
  ];

  const handleStatClick = (stat) => {
    addNotification({
      type: 'info',
      message: `Viewing details for ${stat.title}`,
      time: 'Just now'
    });
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <div className="dashboard-content">
          <div className="service-detail">
            <div className="service-header">
              <div className="service-icon" style={{ color: '#00843D' }}>
                <FiHome />
              </div>
              <div className="service-info">
                <h1>Dashboard</h1>
                <p>Welcome back! Here's an overview of your projects.</p>
              </div>
            </div>

            <div className="stats-grid">
              {projectStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-card"
                  onClick={() => handleStatClick(stat)}
                >
                  <div className="stat-icon" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="stat-info">
                    <h3>{stat.title}</h3>
                    <p>{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="dashboard-grid">
              {/* Recent Updates */}
              <div className="dashboard-card updates-card">
                <div className="card-header">
                  <FiBell className="card-icon" />
                  <h3>Recent Updates</h3>
                </div>
                <div className="updates-list">
                  {recentUpdates.map(update => (
                    <div key={update.id} className="update-item">
                      <div className="update-content">
                        <span className="update-project">{update.projectName}</span>
                        <span className="update-message">{update.message}</span>
                      </div>
                      <span className="update-time">{update.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Todo List */}
              <div className="dashboard-card todo-card">
                <div className="card-header">
                  <FiList className="card-icon" />
                  <h3>To-Do List</h3>
                </div>
                <div className="todo-list">
                  {todoList.map(todo => (
                    <div key={todo.id} className={`todo-item priority-${todo.priority}`}>
                      <div className="todo-content">
                        <span className="todo-project">{todo.projectName}</span>
                        <span className="todo-task">{todo.task}</span>
                      </div>
                      <span className="todo-due">{todo.dueDate}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 