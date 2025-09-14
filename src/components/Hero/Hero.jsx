import React from 'react';
import AnimatedContent from '../common/AnimatedContent';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* FIX: Using AnimatedContent for the title for a more stable load-in animation */}
        <AnimatedContent triggerOnLoad={true} delay={0.1}>
          <h1 className="hero-title">Front-End Developer</h1>
        </AnimatedContent>
        
        <AnimatedContent triggerOnLoad={true} delay={0.2}>
          <p className="hero-tagline">
            I design and build beautiful, responsive, and intuitive web experiences. Turning complex problems into elegant solutions is my passion.
          </p>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Hero;
