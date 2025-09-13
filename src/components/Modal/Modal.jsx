// src/components/Modal/Modal.jsx

import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  // 1. New state to control the entry animation
  const [isVisible, setIsVisible] = useState(false);

  // 2. This effect runs once when the modal is first created
  useEffect(() => {
    // We wait a tiny moment before triggering the animation
    // This gives the browser time to render everything before the animation starts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // 50 millisecond delay

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);


  const handleClose = () => {
    setIsClosing(true);
    // The timeout duration should match the exit animation in CSS
    setTimeout(() => {
      onClose();
    }, 400); 
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div 
      className={`modal-overlay ${isClosing ? 'closing' : ''} ${isVisible ? 'visible' : ''}`} 
      onClick={handleClose}
    >
      {/* 3. The 'visible' class is now dynamically added to trigger the animation */}
      <div 
        className={`modal-content ${isClosing ? 'closing' : ''} ${isVisible ? 'visible' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
          <button className="modal-close-button" onClick={handleClose}>
            &times; 
          </button>
        </div>
        <div className="modal-body">
          <img src={project.caseStudyImage} alt={`${project.title} case study`} />
        </div>
      </div>
    </div>
  );
};

export default Modal;