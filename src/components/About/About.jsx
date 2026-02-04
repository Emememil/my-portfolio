import React from 'react';
import AnimatedTitle from '../common/AnimatedTitle.jsx';
import AnimatedContent from '../common/AnimatedContent.jsx';

const About = ({ mode = 'default' }) => {
  const isSolutions = mode === 'solutions';

  const containerStyle = { 
    maxWidth: '800px', 
    margin: '0 auto', 
    textAlign: 'center', 
    padding: '0 20px' 
  };
  
  const paragraphStyle = { 
    marginBottom: '2rem', 
    lineHeight: '1.8',    
    fontSize: '1.05rem',
    color: 'rgba(255, 255, 255, 0.8)' 
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <AnimatedTitle as="h2" text={isSolutions ? "Implementation Philosophy" : "About Me"} className="section-title" />
        <AnimatedContent>
          <div style={containerStyle}>
            <p style={paragraphStyle}>
              {isSolutions 
                ? <>I am an <strong>Implementation Reliability Engineer</strong> who views software as a system of integrity, specializing in the resolution of <strong>technical bottlenecks</strong> and <strong>systemic logic</strong>.</>
                : <>I am a <strong>Design-Forward Product Engineer</strong> who views software as a craft, specializing in the intersection of <strong>architectural logic</strong> and <strong>pixel-perfect design</strong>.</>
              }
            </p>
            <p style={paragraphStyle}>
              {isSolutions
                ? <>My approach is defined by a commitment to <strong>Data Integrity</strong> and robust system health—principles I’ve refined while resolving critical discrepancies in high-velocity production environments. Whether migrating core pricing modules to <strong>integer-based math</strong> for 100% accuracy or hardening <strong>multi-tenant security middleware</strong>, I focus on building systems that are both resilient and performant.</>
                : <>My approach is defined by a commitment to <strong>1:1 design-to-code fidelity</strong> and robust systems—principles I’ve refined while shipping mission-critical features in high-velocity production environments. Whether architecting secure backend systems or engineering high-fidelity motion, I focus on merging <strong>complex logic</strong> with <strong>elegant, performant user experiences</strong>.</>
              }
            </p>
            <p style={{ ...paragraphStyle, marginBottom: 0 }}>
              {isSolutions
                ? <>I believe the most impactful solutions are born at the perfect blend of <strong>analytical troubleshooting and engineering logic</strong>. Outside of technical architecture, I express my creative discipline through <strong>music and composition</strong>, always looking for the next systemic challenge to solve.</>
                : <>When I’m not coding, I express my creativity through <strong>music</strong> and singing. I believe the most impactful solutions are born at the perfect blend of <strong>creativity and logic</strong>, and I am always looking for the next challenge to build something exceptional.</>
              }
            </p>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default About;
