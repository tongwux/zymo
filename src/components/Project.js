import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import NotificationBar from './NotificationBar';
import { FiFolder, FiClock, FiCheckCircle, FiAlertCircle, FiPlay, FiCreditCard } from 'react-icons/fi';
import './Project.css';

const Project = () => {
  const navigate = useNavigate();
  const [notifications] = React.useState([
    { id: 1, message: 'Project status updated', type: 'success' },
  ]);

  // Mock project data - replace with actual data from your backend
  const projects = [
    {
      id: 1,
      name: '16S rRNA Sequencing Project',
      orderId: 'ORD-001',
      status: 'In Progress',
      date: '2024-03-20',
      samples: 10,
      type: '16S/ITS Amplicon Sequencing',
      progress: 60,
      paymentStatus: 'Paid'
    },
    {
      id: 2,
      name: 'ITS Sequencing Analysis',
      orderId: 'ORD-002',
      status: 'Pending',
      date: '2024-03-19',
      samples: 5,
      type: '16S/ITS Amplicon Sequencing',
      progress: 0,
      paymentStatus: 'Pending'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'In Progress':
        return <FiClock className="status-icon in-progress" />;
      case 'Completed':
        return <FiCheckCircle className="status-icon completed" />;
      case 'Pending':
        return <FiAlertCircle className="status-icon pending" />;
      default:
        return null;
    }
  };

  const handleStartProject = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const handlePayment = (projectId) => {
    // Add your payment logic here
    console.log('Processing payment for project:', projectId);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <NotificationBar notifications={notifications} />
        <div className="dashboard-content">
          <div className="service-detail">
            <div className="service-header">
              <div className="service-icon" style={{ color: '#00843D' }}>
                <FiFolder />
              </div>
              <div className="service-info">
                <h1>Project Dashboard</h1>
                <p>Track and manage your sequencing projects</p>
              </div>
            </div>

            <div className="project-table-container">
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Order ID</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Samples</th>
                    <th>Type</th>
                    <th>Progress</th>
                    <th>Payment</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(project => (
                    <tr key={project.id} className="project-row">
                      <td>{project.name}</td>
                      <td>{project.orderId}</td>
                      <td>
                        <div className="status-cell">
                          {getStatusIcon(project.status)}
                          <span>{project.status}</span>
                        </div>
                      </td>
                      <td>{project.date}</td>
                      <td>{project.samples}</td>
                      <td>{project.type}</td>
                      <td>
                        <div className="progress-cell">
                          <div className="progress-bar">
                            <div 
                              className="progress-fill" 
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="progress-text">{project.progress}%</span>
                        </div>
                      </td>
                      <td>
                        <span className={`payment-status ${project.paymentStatus.toLowerCase()}`}>
                          {project.paymentStatus}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          {project.status === 'Pending' && (
                            <button 
                              className="action-button start-button"
                              onClick={() => handleStartProject(project.id)}
                            >
                              <FiPlay /> Start
                            </button>
                          )}
                          {project.paymentStatus === 'Pending' && (
                            <button 
                              className="action-button payment-button"
                              onClick={() => handlePayment(project.id)}
                            >
                              <FiCreditCard /> Pay
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project; 