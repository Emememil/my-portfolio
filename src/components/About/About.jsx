import React from 'react';
import AnimatedTitle from '../common/AnimatedTitle.jsx';
import AnimatedContent from '../common/AnimatedContent.jsx';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <AnimatedTitle as="h2" text="About Me" className="section-title" />
        <AnimatedContent>
          <div className="about-content">
            <div className="about-text-container">
              <p>
                I am a <strong>Full-Stack Developer</strong> who views software as a craft, specializing in the intersection of <strong>architectural logic</strong> and <strong>pixel-perfect design</strong>.
              </p>
              <p>
                My approach is defined by a commitment to <strong>1:1 design-to-code fidelity</strong> and robust systems. These are principles I’ve refined while shipping mission-critical features in high-intensity studio environments. Whether architecting secure backend systems or engineering high-fidelity motion, I focus on merging <strong>complex logic</strong> with <strong>elegant user experiences</strong>.
              </p>
              <p>
                When I’m not coding, I express my creativity through <strong>music</strong>, singing, playing guitar, and composing. I believe the most impactful solutions are born at the perfect blend of <strong>creativity and logic</strong>, and I am always looking for the next challenge to build something exceptional.
              </p>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};
export default About;
