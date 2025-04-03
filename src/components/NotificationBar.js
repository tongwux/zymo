import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiSearch, 
  FiSettings, 
  FiBell, 
  FiUser,
  FiChevronRight,
  FiHome,
  FiX,
  FiCheckCircle,
  FiAlertCircle,
  FiInfo
} from 'react-icons/fi';
import './NotificationBar.css';

const NotificationBar = ({ notifications }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Implement search functionality here
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return <FiCheckCircle className="notification-icon success" />;
      case 'warning':
        return <FiAlertCircle className="notification-icon warning" />;
      default:
        return <FiInfo className="notification-icon info" />;
    }
  };

  const handleNotificationClick = (notification) => {
    // Handle notification click - could navigate to relevant page
    setIsOpen(false);
  };

  const handleSettingsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Settings icon clicked');
    navigate('/settings');
  };

  return (
    <div className="notification-bar">
      <div className="notification-left">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-item">
            <FiHome className="icon" />
            <span>Home</span>
          </Link>
          <FiChevronRight className="breadcrumb-separator" />
          <span className="breadcrumb-item active">Dashboard</span>
        </div>
      </div>
      
      <div className="notification-center">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </div>

      <div className="notification-right">
        <div className="notification-icons">
          <button 
            className="icon-button"
            onClick={handleSettingsClick}
            aria-label="Go to settings"
            type="button"
          >
            <FiSettings className="icon" />
          </button>
          <div className="notifications-container" ref={dropdownRef}>
            <button 
              className="icon-button notification-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="View notifications"
              type="button"
            >
              <FiBell className="icon" />
              {notifications.length > 0 && (
                <span className="notification-badge">{notifications.length}</span>
              )}
            </button>
            
            {isOpen && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <h3>Notifications</h3>
                  <button 
                    className="clear-all"
                    onClick={() => {
                      // Clear all notifications
                      setIsOpen(false);
                    }}
                  >
                    Clear all
                  </button>
                </div>
                <div className="notification-list">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="notification-item"
                      onClick={() => handleNotificationClick(notification)}
                    >
                      {getNotificationIcon(notification.type)}
                      <div className="notification-content">
                        <p>{notification.message}</p>
                        <span className="notification-time">{notification.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/account" className="icon-button">
            <FiUser className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar; 