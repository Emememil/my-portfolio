import React from 'react';
import AnimatedTitle from '../common/AnimatedTitle.jsx';
import AnimatedContent from '../common/AnimatedContent.jsx';

const About = () => {
  // Styling constants to ensure pixel-parity with the Hero tagline
  const containerStyle = { 
    maxWidth: '800px', 
    margin: '0 auto', 
    textAlign: 'center', // Matching your Hero alignment
    padding: '0 20px' 
  };
  
  const paragraphStyle = { 
    marginBottom: '2rem', // Increased breathing room
    lineHeight: '1.8',    // Premium readability
    fontSize: '1.05rem',
    color: 'rgba(255, 255, 255, 0.8)' // Subtle professional fade
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <AnimatedTitle as="h2" text="About Me" className="section-title" />
        <AnimatedContent>
          <div style={containerStyle}>
            <p style={paragraphStyle}>
              I am a <strong>Design-Forward Product Engineer</strong> who views software as a craft, specializing in the intersection of <strong>architectural logic</strong> and <strong>pixel-perfect design</strong>.
            </p>
            <p style={paragraphStyle}>
              My approach is defined by a commitment to <strong>1:1 design-to-code fidelity</strong> and robust systems—principles I’ve refined while shipping mission-critical features in high-velocity production environments. Whether architecting secure backend systems or engineering high-fidelity motion, I focus on merging <strong>complex logic</strong> with <strong>elegant, performant user experiences</strong>.
            </p>
            <p style={{ ...paragraphStyle, marginBottom: 0 }}>
              When I’m not coding, I express my creativity through <strong>music</strong>, singing, and composing. I believe the most impactful solutions are born at the perfect blend of <strong>creativity and logic</strong>, and I am always looking for the next challenge to build something exceptional.
            </p>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default About;
