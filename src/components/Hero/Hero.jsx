import React from 'react';
import AnimatedTitle from '../common/AnimatedTitle';
import AnimatedContent from '../common/AnimatedContent';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* REVERTED: Using AnimatedTitle again for the sophisticated stagger effect */}
        <AnimatedTitle text="Front-End Developer" as="h1" className="hero-title" triggerOnLoad={true} />
        
        <AnimatedContent triggerOnLoad={true} delay={0.4}>
          <p className="hero-tagline">
            I design and build beautiful, responsive, and intuitive web experiences. Turning complex problems into elegant solutions is my passion.
          </p>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Hero;
