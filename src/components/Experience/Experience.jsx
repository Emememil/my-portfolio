import React from 'react';
import AnimatedTitle from '../common/AnimatedTitle.jsx';
import AnimatedContent from '../common/AnimatedContent.jsx';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <AnimatedTitle as="h2" text="Technical Residency" className="section-title" />
        
        <AnimatedContent>
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="role-title">Full-Stack Developer</h3>
                <p className="company-name">DODOX STUDIO</p>
              </div>
              <div className="experience-date">JAN 2026</div>
            </div>

            <div className="project-engagement">
              <span className="project-name">Livora | E-commerce</span>
              <ul className="experience-list">
                <li>
                  Refactored backend pricing architecture to separate <strong>Subtotal and GST calculations</strong>, implementing <strong>Paise-based integer math</strong> to ensure 100% historical accuracy.
                </li>
                <li>
                  Re-engineered <strong>Role-Based Access Control (RBAC)</strong> middleware for Admin and Kitchen flows, hardening API security while maintaining frontend compatibility.
                </li>
                <li>
                  Centralized mission-critical constants and <strong>eliminated magic numbers</strong> in the controller to improve long-term architectural maintainability.
                </li>
              </ul>
            </div>

            <div className="project-engagement">
              <span className="project-name">Studio Mirae | Creative Agency</span>
              <ul className="experience-list">
                <li>
                  Developed a high-performance Hero Reveal utilizing <strong>Anchor-Lock Architecture</strong> and GPU-accelerated spring transitions to achieve sub-pixel precision.
                </li>
              </ul>
            </div>

            <div className="project-engagement">
              <span className="project-name">evolv | Social Impact</span>
              <ul className="experience-list">
                <li>
                  Achieved <strong>1:1 parity</strong> with Figma easing curves and timing via Framer Motion parameters for high-fidelity component transitions.
                </li>
                <li>
                  Resolved critical layout collisions on <strong>iPad Pro viewports</strong> by recalibrating grid systems and implementing conditional line-break logic.
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
