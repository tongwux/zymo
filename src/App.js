import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import OngoingProjects from './components/OngoingProjects';
import Reports from './components/Reports';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Account from './components/Account';
import Cart from './components/Cart';
import Login from './components/Login';
import Settings from './components/Settings';
import ProjectDetail from './components/ProjectDetail';
import AmpliconSequencing from './components/AmpliconSequencing';
import NotificationBar from './components/NotificationBar';
import { CartProvider } from './context/CartContext';
import OrderSuccess from './components/OrderSuccess';
import './App.css';

function App() {
  // Set initial authentication state to true for testing
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [notifications, setNotifications] = useState([]);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const addNotification = (notification) => {
    setNotifications(prev => [...prev, { ...notification, id: Date.now() }]);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  return (
    <Router>
      <div className="app">
        {isAuthenticated ? (
          <CartProvider>
            <Sidebar onLogout={handleLogout} />
            <div className="main-content">
              <NotificationBar 
                notifications={notifications} 
                onRemove={removeNotification}
              />
              <Routes>
                <Route path="/" element={<Dashboard addNotification={addNotification} />} />
                <Route path="/ongoing-projects" element={<OngoingProjects addNotification={addNotification} />} />
                <Route path="/reports" element={<Reports addNotification={addNotification} />} />
                <Route path="/cart" element={<Cart addNotification={addNotification} />} />
                <Route path="/services" element={<Services addNotification={addNotification} />} />
                <Route path="/services/amplicon-sequencing" element={<AmpliconSequencing addNotification={addNotification} />} />
                <Route path="/services/:id" element={<ProjectDetail addNotification={addNotification} />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/faq" element={<FAQ addNotification={addNotification} />} />
                <Route path="/account" element={<Account addNotification={addNotification} />} />
                <Route path="/settings" element={<Settings addNotification={addNotification} />} />
              </Routes>
            </div>
          </CartProvider>
        ) : (
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App; 