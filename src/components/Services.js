import React, { useState } from 'react';
import { 
  FiCode, 
  FiSmartphone, 
  FiLayout, 
  FiDatabase, 
  FiCloud, 
  FiShield 
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import NotificationBar from './NotificationBar';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  const [notifications] = useState([
    { id: 1, message: 'New service request received', type: 'info' },
    { id: 2, message: 'Service update available', type: 'warning' },
    { id: 3, message: 'Service completed successfully', type: 'success' },
  ]);

  const services = [
    {
      id: 1,
      title: '16S/ITS Amplicon Sequencing',
      icon: <FiCode />,
      color: '#4CAF50',
      description: 'Comprehensive 16S/ITS amplicon sequencing services with bioinformatics analysis.'
    },
    {
      id: 2,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      icon: <FiSmartphone />,
      color: '#2196F3'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive experiences.',
      icon: <FiLayout />,
      color: '#9C27B0'
    },
    {
      id: 4,
      title: 'Database Solutions',
      description: 'Efficient database design and optimization for better performance and scalability.',
      icon: <FiDatabase />,
      color: '#FF9800'
    },
    {
      id: 5,
      title: 'Cloud Services',
      description: 'Cloud infrastructure setup and management for reliable and scalable solutions.',
      icon: <FiCloud />,
      color: '#00BCD4'
    },
    {
      id: 6,
      title: 'Security Services',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      icon: <FiShield />,
      color: '#F44336'
    }
  ];

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <NotificationBar notifications={notifications} />
        <div className="dashboard-content">
          <div className="services-page">
            <div className="services-header">
              <h1>Our Services</h1>
              <p>Discover our comprehensive range of professional services</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="service-card"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="service-icon" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="service-button" style={{ backgroundColor: service.color }}>
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 