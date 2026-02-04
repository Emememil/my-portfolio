import React from 'react';
import AnimatedTitle from '../common/AnimatedTitle.jsx';
import AnimatedContent from '../common/AnimatedContent.jsx';
import './Experience.css';

const Experience = ({ mode = 'default' }) => {
  const isSolutions = mode === 'solutions';

  return (
    <section id="experience" className="section">
      <div className="container">
        <AnimatedTitle 
          as="h2" 
          text={isSolutions ? "Technical Implementation & Systems Logic" : "Selected Professional Projects"} 
          className="section-title" 
        />
        
        <AnimatedContent>
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="role-title">
                  {isSolutions ? "Technical Solutions Specialist (Residency)" : "Technical Residency (Full-Stack)"}
                </h3>
                <p className="company-name">DODOX STUDIO</p>
              </div>
              <div className="experience-date">WINTER 2026</div>
            </div>

            <div className="project-engagement">
              <span className="project-name">Livora | System Reliability Refactor</span>
              <ul className="experience-list">
                <li>
                  {isSolutions 
                    ? "Eliminated financial discrepancies by migrating core pricing to Paise-based integer math, ensuring 100% data integrity for audit-readiness."
                    : "Refactored backend pricing architecture to separate Subtotal and GST calculations using Paise-based integer math."}
                </li>
                <li>
                  {isSolutions
                    ? "Engineered secure RBAC middleware to manage multi-tenant kitchen/admin permissions, hardening mission-critical API routes."
                    : "Re-engineered Role-Based Access Control (RBAC) middleware for Admin and Kitchen flows."}
                </li>
              </ul>
            </div>
            
            {isSolutions && (
              <div className="system-audit-terminal">
                <div className="terminal-header">
                  <div className="terminal-status">
                    <span className="status-indicator"></span>
                    <span className="status-label">System Audit: Logic Verified</span>
                  </div>
                  <div className="terminal-timestamp">IEEE 754 Mitigation</div>
                </div>
                
                <div className="terminal-body">
                  <div className="code-block">
                    <span className="code-comment">// Preventing Float Rounding Errors (IEEE 754)</span>
                    <span className="code-line">
                      <span className="code-keyword">const</span> <span className="code-function">calculateTotal</span> = (price, tax) => &#123;<br/>
                      &nbsp;&nbsp;<span className="code-comment">// Convert to integer (Paise) to ensure precision</span><br/>
                      &nbsp;&nbsp;<span className="code-keyword">const</span> <span className="code-variable">priceInPaise</span> = Math.round(price * 100);<br/>
                      &nbsp;&nbsp;<span className="code-keyword">return</span> (priceInPaise + (priceInPaise * tax)) / 100;<br/>
                      &#125;;
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Experience;
