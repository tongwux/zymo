import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiSearch, 
  FiSettings, 
  FiBell, 
  FiUser,
  FiChevronRight,
  FiHome
} from 'react-icons/fi';
import './NotificationBar.css';

const NotificationBar = ({ notifications }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Implement search functionality here
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
          <button className="icon-button">
            <FiSettings className="icon" />
          </button>
          <button className="icon-button">
            <FiBell className="icon" />
            {notifications.length > 0 && (
              <span className="notification-badge">{notifications.length}</span>
            )}
          </button>
          <button className="icon-button">
            <FiUser className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar; 