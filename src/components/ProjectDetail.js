import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import NotificationBar from './NotificationBar';
import { 
  FiFolder, 
  FiCheckCircle, 
  FiCircle,
  FiArrowLeft,
  FiArrowRight,
  FiUpload,
  FiSettings,
  FiFileText,
  FiCheck,
  FiSend,
  FiCreditCard,
  FiDollarSign,
  FiCheckSquare,
  FiBarChart2
} from 'react-icons/fi';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [notifications] = useState([
    {
      id: 1,
      type: 'info',
      message: 'Project setup in progress',
      time: '2 minutes ago'
    }
  ]);

  // Mock project data
  const project = {
    id: projectId,
    name: '16S rRNA Sequencing',
    orderId: 'ORD-2024-001',
    status: 'Pending',
    date: '2024-02-20',
    samples: 5,
    type: 'Amplicon Sequencing',
    progress: 0,
    paymentStatus: 'Pending'
  };

  const steps = [
    { id: 1, title: 'Payment', icon: <FiCreditCard /> },
    { id: 2, title: 'Sample Upload', icon: <FiUpload /> },
    { id: 3, title: 'Quality Check', icon: <FiCheckSquare /> },
    { id: 4, title: 'Sequencing Setup', icon: <FiSettings /> },
    { id: 5, title: 'Analysis', icon: <FiBarChart2 /> },
    { id: 6, title: 'Report', icon: <FiFileText /> },
    { id: 7, title: 'Confirm', icon: <FiCheckCircle /> }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirm = () => {
    navigate(`/projects/${projectId}/success`);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="payment-step">
            <div className="payment-info">
              <h3>Project Payment</h3>
              <div className="payment-details">
                <div className="payment-row">
                  <span>Project Name:</span>
                  <span>{project.name}</span>
                </div>
                <div className="payment-row">
                  <span>Order ID:</span>
                  <span>{project.orderId}</span>
                </div>
                <div className="payment-row">
                  <span>Amount:</span>
                  <span>$1,500.00</span>
                </div>
                <div className="payment-row total">
                  <span>Total Amount:</span>
                  <span>$1,500.00</span>
                </div>
              </div>
              <div className="payment-methods">
                <h4>Payment Methods</h4>
                <div className="payment-options">
                  <div className="payment-option">
                    <input type="radio" id="credit-card" name="payment" defaultChecked />
                    <label htmlFor="credit-card">
                      <FiCreditCard /> Credit Card
                    </label>
                  </div>
                  <div className="payment-option">
                    <input type="radio" id="bank-transfer" name="payment" />
                    <label htmlFor="bank-transfer">
                      <FiDollarSign /> Bank Transfer
                    </label>
                  </div>
                </div>
              </div>
              <button className="pay-button" onClick={handleNext}>
                Proceed to Payment
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <h3>Sample Upload</h3>
            <p>Upload your sample files for processing</p>
            <div className="upload-area">
              <FiUpload className="upload-icon" />
              <p>Drag and drop your files here or click to browse</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            <h3>Quality Check</h3>
            <p>Review the quality of your uploaded samples</p>
            <div className="quality-check">
              <div className="quality-item">
                <span className="quality-label">Sample Integrity</span>
                <span className="quality-status pending">Pending</span>
              </div>
              <div className="quality-item">
                <span className="quality-label">Concentration</span>
                <span className="quality-status pending">Pending</span>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-content">
            <h3>Sequencing Setup</h3>
            <p>Configure sequencing parameters</p>
            <div className="setup-options">
              <div className="setup-item">
                <label>Read Length</label>
                <select>
                  <option>150bp</option>
                  <option>250bp</option>
                  <option>300bp</option>
                </select>
              </div>
              <div className="setup-item">
                <label>Sequencing Depth</label>
                <input type="number" placeholder="Enter depth" />
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="step-content">
            <h3>Analysis</h3>
            <p>Configure analysis parameters</p>
            <div className="analysis-options">
              <div className="analysis-item">
                <label>Taxonomic Classification</label>
                <select>
                  <option>RDP Classifier</option>
                  <option>QIIME2</option>
                </select>
              </div>
              <div className="analysis-item">
                <label>Diversity Analysis</label>
                <select>
                  <option>Alpha Diversity</option>
                  <option>Beta Diversity</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="step-content">
            <h3>Report Generation</h3>
            <p>Configure report settings</p>
            <div className="report-options">
              <div className="report-item">
                <label>Report Format</label>
                <select>
                  <option>PDF</option>
                  <option>Word</option>
                  <option>HTML</option>
                </select>
              </div>
              <div className="report-item">
                <label>Include Raw Data</label>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="step-content">
            <h3>Confirm Project Setup</h3>
            <p>Please review your project settings before starting</p>
            <div className="confirmation-summary">
              <div className="summary-section">
                <h4>Project Details</h4>
                <div className="summary-item">
                  <span>Project Name:</span>
                  <span>{project.name}</span>
                </div>
                <div className="summary-item">
                  <span>Order ID:</span>
                  <span>{project.orderId}</span>
                </div>
                <div className="summary-item">
                  <span>Sample Count:</span>
                  <span>{project.samples}</span>
                </div>
              </div>
              <div className="summary-section">
                <h4>Sequencing Parameters</h4>
                <div className="summary-item">
                  <span>Read Length:</span>
                  <span>250bp</span>
                </div>
                <div className="summary-item">
                  <span>Sequencing Depth:</span>
                  <span>50,000 reads/sample</span>
                </div>
              </div>
              <div className="summary-section">
                <h4>Analysis Settings</h4>
                <div className="summary-item">
                  <span>Classification:</span>
                  <span>RDP Classifier</span>
                </div>
                <div className="summary-item">
                  <span>Diversity Analysis:</span>
                  <span>Alpha & Beta Diversity</span>
                </div>
              </div>
            </div>
            <div className="confirmation-actions">
              <button className="confirm-button" onClick={handleConfirm}>
                Confirm and Start Project
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <NotificationBar notifications={notifications} />
        <div className="dashboard-content">
          <div className="service-detail">
            <button className="back-button" onClick={() => navigate('/projects')}>
              <FiArrowLeft /> Back to Projects
            </button>
            
            <div className="service-header">
              <div className="service-icon" style={{ color: '#00843D' }}>
                <FiFolder />
              </div>
              <div className="service-info">
                <h1>{project.name}</h1>
                <p>Order ID: {project.orderId}</p>
              </div>
            </div>

            <div className="step-wizard">
              {steps.map((step, index) => (
                <div key={step.id} className="step-item">
                  <div className={`step-icon ${currentStep >= step.id ? 'active' : ''}`}>
                    {currentStep > step.id ? <FiCheckCircle /> : step.icon}
                  </div>
                  <div className="step-title">{step.title}</div>
                  {index < steps.length - 1 && (
                    <div className={`step-connector ${currentStep > step.id ? 'active' : ''}`} />
                  )}
                </div>
              ))}
            </div>

            <div className="step-container">
              {renderStepContent()}
              
              <div className="step-navigation">
                <button 
                  className="nav-button back"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                >
                  <FiArrowLeft /> Back
                </button>
                {currentStep < steps.length && (
                  <button 
                    className="nav-button next"
                    onClick={handleNext}
                    disabled={currentStep === steps.length}
                  >
                    Next <FiArrowRight />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 