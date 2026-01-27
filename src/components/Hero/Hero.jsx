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
          <h1 className="hero-title">Frontend Engineer • UI/UX Specialist</h1>
        </AnimatedContent>
        
        <AnimatedContent triggerOnLoad={true} delay={0.2}>
          <p className="hero-tagline">
            I am a Product Engineer specializing in 1:1 design-to-code parity. I bridge the gap between mission-critical architectural logic and premium, high-fidelity user interfaces.
          </p>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Hero;
