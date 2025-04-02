import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiShoppingBag, 
  FiShoppingCart, 
  FiFolder, 
  FiSettings,
  FiClock,
  FiCheckCircle
} from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: <FiHome />, label: 'Dashboard' },
    { path: '/services', icon: <FiShoppingBag />, label: 'Services' },
    { path: '/cart', icon: <FiShoppingCart />, label: 'Cart' },
    { path: '/ongoing-projects', icon: <FiClock />, label: 'Ongoing Projects' },
    { path: '/completed-projects', icon: <FiCheckCircle />, label: 'Completed Projects' },
    { path: '/settings', icon: <FiSettings />, label: 'Settings' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="logo">
          <FiFolder />
          <span>ZYMO</span>
        </Link>
      </div>
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 