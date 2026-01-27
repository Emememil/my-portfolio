import React from 'react';
import AnimatedTitle from '../common/AnimatedTitle.jsx';
import AnimatedContent from '../common/AnimatedContent.jsx';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <AnimatedTitle as="h2" text="Selected Professional Projects" className="section-title" />
        
        <AnimatedContent>
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="role-title">Technical Residency (Full-Stack)</h3>
                <p className="company-name">DODOX STUDIO</p>
              </div>
              <div className="experience-date">WINTER 2026</div>
            </div>

            <div className="project-engagement">
              <span className="project-name">Livora | E-commerce Infrastructure</span>
              <ul className="experience-list">
                <li>
                  Refactored backend pricing architecture to separate <strong>Subtotal and GST calculations</strong>, implementing <strong>Paise-based integer math</strong> to ensure 100% historical financial accuracy.
                </li>
                <li>
                  Re-engineered <strong>Role-Based Access Control (RBAC)</strong> middleware for Admin and Kitchen flows, hardening API security while maintaining frontend compatibility.
                </li>
              </ul>
            </div>

            <div className="project-engagement">
              <span className="project-name">Studio Mirae | Interaction Engineering</span>
              <ul className="experience-list">
                <li>
                  Developed a high-performance Hero Reveal utilizing <strong>Anchor-Lock Architecture</strong> and GPU-accelerated spring transitions to achieve sub-pixel precision.
                </li>
                <li>
                  Achieved <strong>1:1 parity</strong> with Figma easing curves via Framer Motion parameters for high-fidelity component transitions across multiple modules.
                </li>
              </ul>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Experience;
