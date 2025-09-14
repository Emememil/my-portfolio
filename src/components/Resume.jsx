import React from 'react';
import AnimatedTitle from '../common/AnimatedTitle';
import AnimatedContent from '../common/AnimatedContent';
import './Resume.css'; // Corrected CSS import

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <AnimatedTitle text="My Resume" className="resume-title" />
      
      <AnimatedContent>
        <div className="download-container">
          <a href="/emil_william_resume.pdf" download className="download-btn">
            <span>Download PDF</span>
            <svg className="download-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16L7 11L8.4 9.6L11 12.2V4H13V12.2L15.6 9.6L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="currentColor"/>
            </svg>
          </a>
        </div>

        <div className="resume-grid">
          <div className="resume-card">
            <h3 className="card-title">Work Experience</h3>
            <div className="resume-item">
              <h4 className="item-title">Front-End Developer</h4>
              <p className="item-subtitle">Align Ad, Software & Creative Studio</p>
              <p className="item-duration">March 2023 – February 2024</p>
              <p className="item-description">
                Translated high-fidelity Figma designs into responsive, pixel-perfect web applications using React and Tailwind CSS, achieving 98%+ design accuracy and reducing time-to-market for new features.
              </p>
            </div>
          </div>

          <div className="resume-card">
            <h3 className="card-title">Education</h3>
            <div className="resume-item">
              <h4 className="item-title">Bachelor of Computer Applications (BCA)</h4>
              <p className="item-subtitle">AMRITA VISHWA VIDYAPEETHAM</p>
              <p className="item-duration">2022-2025 (Expected)</p>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default Resume;
