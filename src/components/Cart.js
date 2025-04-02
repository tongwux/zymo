import React, { useState } from 'react';
import Sidebar from './Sidebar';
import NotificationBar from './NotificationBar';
import { useCart } from '../context/CartContext';
import { FiTrash2, FiChevronDown, FiChevronUp, FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, getCartTotal, clearCart, addToCart } = useCart();
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [notifications] = useState([
    { id: 1, message: 'Cart updated successfully', type: 'success' },
  ]);

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
    // Remove from selected items if it was selected
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(itemId);
      return newSet;
    });
  };

  const toggleExpand = (itemId) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleSelectItem = (itemId) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleSelectAll = () => {
    if (selectedItems.size === cartItems.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(cartItems.map(item => item.id)));
    }
  };

  const getSelectedTotal = () => {
    return cartItems
      .filter(item => selectedItems.has(item.id))
      .reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    // Remove selected items from cart
    const remainingItems = cartItems.filter(item => !selectedItems.has(item.id));
    clearCart();
    remainingItems.forEach(item => {
      addToCart(item);
    });
    
    // Navigate to success page
    navigate('/order-success');
  };

  const renderAmpliconSequencingDetails = (item) => {
    return (
      <div className="amplicon-details">
        <div className="detail-row">
          <span className="label">Sample Format:</span>
          <span className="value">{item.sampleFormat}</span>
        </div>
        <div className="detail-row">
          <span className="label">Number of Samples:</span>
          <span className="value">{item.numberOfSamples}</span>
        </div>
        <div className="detail-row">
          <span className="label">Sample Type:</span>
          <span className="value">{item.sampleType}</span>
        </div>
        <div className="detail-row">
          <span className="label">Services:</span>
          <span className="value">
            {item.services.includes('all-inclusive') 
              ? 'All-inclusive Package'
              : item.services.join(', ')}
          </span>
        </div>
        <div className="detail-row">
          <span className="label">Target Regions:</span>
          <span className="value">{item.targetRegion.join(', ')}</span>
        </div>
        {item.customForwardPrimer && item.customReversePrimer && (
          <>
            <div className="detail-row">
              <span className="label">Custom Forward Primer:</span>
              <span className="value">{item.customForwardPrimer}</span>
            </div>
            <div className="detail-row">
              <span className="label">Custom Reverse Primer:</span>
              <span className="value">{item.customReversePrimer}</span>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <NotificationBar notifications={notifications} />
        <div className="dashboard-content">
          <div className="service-detail">
            <div className="service-header">
              <div className="service-icon" style={{ color: '#00843D' }}>
                <FiShoppingCart />
              </div>
              <div className="service-info">
                <h1>Shopping Cart</h1>
                <p>Review and manage your selected services</p>
              </div>
            </div>

            <div className="service-form-container">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="cart-table-container">
                    <table className="cart-table">
                      <thead>
                        <tr>
                          <th className="checkbox-column">
                            <input
                              type="checkbox"
                              checked={selectedItems.size === cartItems.length}
                              onChange={handleSelectAll}
                            />
                          </th>
                          <th>Service</th>
                          <th>Samples</th>
                          <th>Services</th>
                          <th>Target Regions</th>
                          <th>Price</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <React.Fragment key={item.id}>
                            <tr className={`cart-table-row ${selectedItems.has(item.id) ? 'selected' : ''}`}>
                              <td className="checkbox-column">
                                <input
                                  type="checkbox"
                                  checked={selectedItems.has(item.id)}
                                  onChange={() => handleSelectItem(item.id)}
                                />
                              </td>
                              <td>{item.serviceName}</td>
                              <td>
                                {item.serviceId === 'amplicon-sequencing' && (
                                  <div className="summary-info">
                                    <span>{item.numberOfSamples} samples</span>
                                    <span>{item.sampleType}</span>
                                    <span>{item.sampleFormat}</span>
                                  </div>
                                )}
                              </td>
                              <td>
                                {item.serviceId === 'amplicon-sequencing' && (
                                  <div className="summary-info">
                                    <span>
                                      {item.services.includes('all-inclusive') 
                                        ? 'All-inclusive Package'
                                        : item.services.join(', ')}
                                    </span>
                                  </div>
                                )}
                              </td>
                              <td>
                                {item.serviceId === 'amplicon-sequencing' && (
                                  <div className="summary-info">
                                    <span>{item.targetRegion.join(', ')}</span>
                                  </div>
                                )}
                              </td>
                              <td>${item.price.toLocaleString()}</td>
                              <td className="action-buttons">
                                <button 
                                  className="expand-button"
                                  onClick={() => toggleExpand(item.id)}
                                >
                                  {expandedItems.has(item.id) ? <FiChevronUp /> : <FiChevronDown />}
                                </button>
                                <button 
                                  className="remove-item-button"
                                  onClick={() => handleRemoveItem(item.id)}
                                >
                                  <FiTrash2 />
                                </button>
                              </td>
                            </tr>
                            {expandedItems.has(item.id) && (
                              <tr className="expanded-details">
                                <td colSpan="7">
                                  {item.serviceId === 'amplicon-sequencing' 
                                    ? renderAmpliconSequencingDetails(item)
                                    : <div className="service-details">Service details will be displayed here</div>
                                  }
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="price-summary">
                    <h2>Order Summary</h2>
                    <div className="price-details">
                      <div className="price-item">
                        <span>Selected Items ({selectedItems.size}):</span>
                        <span>${getSelectedTotal().toLocaleString()}</span>
                      </div>
                      <div className="price-item">
                        <span>Tax (10%):</span>
                        <span>${(getSelectedTotal() * 0.1).toLocaleString()}</span>
                      </div>
                      <div className="price-item total">
                        <span>Total:</span>
                        <span>${(getSelectedTotal() * 1.1).toLocaleString()}</span>
                      </div>
                    </div>
                    <button 
                      className="add-to-cart-button"
                      disabled={selectedItems.size === 0}
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout ({selectedItems.size} items)
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 