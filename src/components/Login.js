import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiLock, FiMail, FiBriefcase, FiUserPlus } from 'react-icons/fi';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('individual'); // 'individual' or 'enterprise'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    companyName: '',
    registrationNumber: ''
  });
  const [error, setError] = useState('');

  // Dummy credentials
  const DUMMY_CREDENTIALS = {
    individual: {
      email: 'user@example.com',
      password: 'password123'
    },
    enterprise: {
      email: 'enterprise@example.com',
      password: 'enterprise123',
      companyName: 'Test Company',
      registrationNumber: 'REG123456'
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const credentials = DUMMY_CREDENTIALS[userType];

    // Check if all required fields are filled
    if (userType === 'enterprise' && 
        (!formData.companyName || !formData.registrationNumber)) {
      setError('Please fill in all required fields');
      return;
    }

    // Validate credentials
    if (formData.email === credentials.email && formData.password === credentials.password) {
      if (userType === 'enterprise' && 
          formData.companyName === credentials.companyName && 
          formData.registrationNumber === credentials.registrationNumber) {
        setIsAuthenticated(true);
        navigate('/dashboard');
      } else if (userType === 'individual') {
        setIsAuthenticated(true);
        navigate('/dashboard');
      } else {
        setError('Invalid company details');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <img src="/assets/zymo-logo.svg" alt="ZYMO Logo" className="login-logo" />
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        <div className="user-type-selector">
          <button
            className={`type-button ${userType === 'individual' ? 'active' : ''}`}
            onClick={() => setUserType('individual')}
          >
            <FiUser className="type-icon" />
            Individual User
          </button>
          <button
            className={`type-button ${userType === 'enterprise' ? 'active' : ''}`}
            onClick={() => setUserType('enterprise')}
          >
            <FiBriefcase className="type-icon" />
            Enterprise User
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          {userType === 'enterprise' && (
            <>
              <div className="form-group">
                <label>
                  <FiBriefcase className="input-icon" />
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <FiUser className="input-icon" />
                  Registration Number
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your registration number"
                  required
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label>
              <FiMail className="input-icon" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>
              <FiLock className="input-icon" />
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>

          <div className="register-link">
            <p>
              Don't have an account?{' '}
              <Link to="/register" className="register-button">
                <FiUserPlus className="register-icon" />
                Register Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 