import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Services from './components/Services';
import AmpliconSequencing from './components/AmpliconSequencing';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import OrderSuccess from './components/OrderSuccess';
import Project from './components/Project';
import ProjectDetail from './components/ProjectDetail';
import ProjectSuccess from './components/ProjectSuccess';
import OngoingProjects from './components/OngoingProjects';
import CompletedProjects from './components/CompletedProjects';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<AmpliconSequencing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/projects/:projectId/success" element={<ProjectSuccess />} />
            <Route path="/ongoing-projects" element={<OngoingProjects />} />
            <Route path="/completed-projects" element={<CompletedProjects />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App; 