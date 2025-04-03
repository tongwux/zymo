import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FiHome } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard after a short delay
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
                <h1>Welcome to ZYMO</h1>
                <p>Redirecting to dashboard...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 