import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FiCode, 
  FiSmartphone, 
  FiLayout, 
  FiDatabase, 
  FiCloud, 
  FiShield,
  FiArrowLeft,
  FiDna
} from 'react-icons/fi';
import Sidebar from './Sidebar';
import NotificationBar from './NotificationBar';
import { useCart } from '../context/CartContext';
import './AmpliconSequencing.css';

const AmpliconSequencing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showPrice, setShowPrice] = useState(false);
  const [notifications] = useState([
    { id: 1, message: 'Service added to cart successfully', type: 'success' },
  ]);

  const services = {
    1: {
      title: '16S/ITS Amplicon Sequencing',
      icon: <FiCode />,
      color: '#00843D',
      description: 'Comprehensive 16S/ITS amplicon sequencing services with bioinformatics analysis.',
      basePrice: 5000
    },
    2: {
      title: 'Mobile Development',
      icon: <FiSmartphone />,
      color: '#2196F3',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      basePrice: 8000
    },
    3: {
      title: 'UI/UX Design',
      icon: <FiLayout />,
      color: '#9C27B0',
      description: 'User-centered design solutions that create engaging and intuitive experiences.',
      basePrice: 3000
    },
    4: {
      title: 'Database Solutions',
      icon: <FiDatabase />,
      color: '#FF9800',
      description: 'Efficient database design and optimization for better performance and scalability.',
      basePrice: 4000
    },
    5: {
      title: 'Cloud Services',
      icon: <FiCloud />,
      color: '#00BCD4',
      description: 'Cloud infrastructure setup and management for reliable and scalable solutions.',
      basePrice: 6000
    },
    6: {
      title: 'Security Services',
      icon: <FiShield />,
      color: '#F44336',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      basePrice: 7000
    }
  };

  const service = services[id];

  const [formData, setFormData] = useState({
    sampleFormat: '',
    numberOfSamples: '',
    sampleType: '',
    services: [],
    targetRegion: [],
    customForwardPrimer: '',
    customReversePrimer: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, value]
        : prev.services.filter(service => service !== value)
    }));
  };

  const handleTargetRegionChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      targetRegion: checked 
        ? [...prev.targetRegion, value]
        : prev.targetRegion.filter(region => region !== value)
    }));
  };

  const calculatePrice = () => {
    const basePrice = service.basePrice;
    const samplePrice = formData.numberOfSamples ? parseInt(formData.numberOfSamples) * 50 : 0;
    const servicePrice = formData.services.includes('all-inclusive') ? 200 : 0;
    const customPrimerPrice = (formData.customForwardPrimer && formData.customReversePrimer) ? 150 : 0;
    
    return basePrice + samplePrice + servicePrice + customPrimerPrice;
  };

  const handleReviewPrice = (e) => {
    e.preventDefault();
    setShowPrice(true);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: Date.now(),
      serviceId: id,
      serviceName: service.title,
      sampleFormat: formData.sampleFormat,
      numberOfSamples: formData.numberOfSamples,
      sampleType: formData.sampleType,
      services: formData.services,
      targetRegion: formData.targetRegion,
      customForwardPrimer: formData.customForwardPrimer,
      customReversePrimer: formData.customReversePrimer,
      price: calculatePrice()
    };

    addToCart(cartItem);
    navigate('/cart');
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <NotificationBar notifications={notifications} />
        <div className="dashboard-content">
          <div className="service-detail">
            <button className="back-button" onClick={() => navigate('/services')}>
              <FiArrowLeft /> Back to Services
            </button>
            
            <div className="service-header">
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <div className="service-info">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>

            <div className="service-form-container">
              <div className="form-grid">
                <div className="form-section">
                  <h2>Sample Information</h2>
                  <div className="form-group">
                    <label htmlFor="sampleFormat">Sample Format</label>
                    <select
                      id="sampleFormat"
                      name="sampleFormat"
                      value={formData.sampleFormat}
                      onChange={handleInputChange}
                    >
                      <option value="">Select format</option>
                      <option value="dna">DNA</option>
                      <option value="tissue">Tissue</option>
                      <option value="swab">Swab</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="numberOfSamples">Number of Samples</label>
                      <input
                        type="number"
                        id="numberOfSamples"
                        name="numberOfSamples"
                        value={formData.numberOfSamples}
                        onChange={handleInputChange}
                        min="1"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="sampleType">Sample Type</label>
                      <select
                        id="sampleType"
                        name="sampleType"
                        value={formData.sampleType}
                        onChange={handleInputChange}
                      >
                        <option value="">Select type</option>
                        <option value="bacterial">Bacterial</option>
                        <option value="fungal">Fungal</option>
                        <option value="archaeal">Archaeal</option>
                        <option value="mixed">Mixed Community</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Services</label>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          value="all-inclusive"
                          checked={formData.services.includes('all-inclusive')}
                          onChange={handleServiceChange}
                        />
                        All-inclusive Package
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          value="data-analysis"
                          checked={formData.services.includes('data-analysis')}
                          onChange={handleServiceChange}
                        />
                        Data Analysis
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          value="report-generation"
                          checked={formData.services.includes('report-generation')}
                          onChange={handleServiceChange}
                        />
                        Report Generation
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Target Regions</label>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          value="V3-V4"
                          checked={formData.targetRegion.includes('V3-V4')}
                          onChange={handleTargetRegionChange}
                        />
                        V3-V4
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          value="V4"
                          checked={formData.targetRegion.includes('V4')}
                          onChange={handleTargetRegionChange}
                        />
                        V4
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          value="ITS1"
                          checked={formData.targetRegion.includes('ITS1')}
                          onChange={handleTargetRegionChange}
                        />
                        ITS1
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          value="ITS2"
                          checked={formData.targetRegion.includes('ITS2')}
                          onChange={handleTargetRegionChange}
                        />
                        ITS2
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="customForwardPrimer">Custom Forward Primer</label>
                    <input
                      type="text"
                      id="customForwardPrimer"
                      name="customForwardPrimer"
                      value={formData.customForwardPrimer}
                      onChange={handleInputChange}
                      placeholder="Enter custom forward primer sequence"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="customReversePrimer">Custom Reverse Primer</label>
                    <input
                      type="text"
                      id="customReversePrimer"
                      name="customReversePrimer"
                      value={formData.customReversePrimer}
                      onChange={handleInputChange}
                      placeholder="Enter custom reverse primer sequence"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h2>Review Price</h2>
                  <div className="price-summary">
                    <div className="price-details">
                      <div className="price-item">
                        <span>Base Price:</span>
                        <span>${service.basePrice.toLocaleString()}</span>
                      </div>
                      <div className="price-item">
                        <span>Sample Price ({formData.numberOfSamples || 0} samples):</span>
                        <span>${formData.numberOfSamples ? parseInt(formData.numberOfSamples) * 50 : 0}</span>
                      </div>
                      <div className="price-item">
                        <span>All-inclusive Package:</span>
                        <span>{formData.services.includes('all-inclusive') ? '$200' : '$0'}</span>
                      </div>
                      <div className="price-item">
                        <span>Custom Primers:</span>
                        <span>{(formData.customForwardPrimer && formData.customReversePrimer) ? '$150' : '$0'}</span>
                      </div>
                      <div className="price-item total">
                        <span>Total:</span>
                        <span>${calculatePrice().toLocaleString()}</span>
                      </div>
                    </div>
                    <button className="add-to-cart-button" onClick={handleAddToCart}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmpliconSequencing; 