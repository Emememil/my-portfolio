import React from 'react';
import AnimatedContent from '../common/AnimatedContent';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* NEW: Personal greeting */}
        <AnimatedContent triggerOnLoad={true} delay={0.05}>
          <p className="hero-greeting">Hi, I'm Emil</p>
        </AnimatedContent>
        
        {/* EXISTING: Main title (delay adjusted) */}
        <AnimatedContent triggerOnLoad={true} delay={0.1}>
          <h1 className="hero-title">Front-End Developer</h1>
        </AnimatedContent>
        
        {/* EXISTING: Tagline (delay adjusted) */}
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
