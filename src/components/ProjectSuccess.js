import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import Sidebar from './Sidebar';
import NotificationBar from './NotificationBar';
import './ProjectSuccess.css';

const ProjectSuccess = () => {
  const navigate = useNavigate();
  const [notifications] = React.useState([
    {
      id: 1,
      type: 'success',
      message: 'Project started successfully',
      time: 'Just now'
    }
  ]);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <NotificationBar notifications={notifications} />
        <div className="dashboard-content">
          <div className="success-container">
            <div className="success-icon">
              <FiCheckCircle />
            </div>
            <h1>Project Started Successfully!</h1>
            <p>Your project has been initiated and is now in progress.</p>
            <p>You can track the progress of your project in the Projects dashboard.</p>
            <div className="success-actions">
              <button 
                className="primary-button"
                onClick={() => navigate('/projects')}
              >
                View All Projects
              </button>
              <button 
                className="secondary-button"
                onClick={() => navigate('/dashboard')}
              >
                <FiArrowLeft /> Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSuccess; 