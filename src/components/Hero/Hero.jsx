import React from 'react';
import AnimatedContent from '../common/AnimatedContent';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <AnimatedContent triggerOnLoad={true} delay={0.05}>
          <p className="hero-greeting">Hi, I'm Emil</p>
        </AnimatedContent>
        
        <AnimatedContent triggerOnLoad={true} delay={0.1}>
          <h1 className="hero-title">Full-Stack Developer</h1>
        </AnimatedContent>
        
        <AnimatedContent triggerOnLoad={true} delay={0.2}>
          <p className="hero-tagline">
            Specializing in high-fidelity interfaces and robust system architecture. I design and build production-ready applications that merge complex logic with elegant user experiences.
          </p>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Hero;
