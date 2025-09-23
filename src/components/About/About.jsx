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
                I'm a developer who believes that great software is a craft. For me, it's not just about writing code; it's about shaping an experience. I build with modern, performant tools like React and TypeScript because they allow me to create applications that are not only robust but also intuitive and genuinely helpful to the user. From feature-rich web apps like my Expense Splitter Pro to exploring the high-performance world of desktop apps with Tauri and Rust, my work is a reflection of my commitment to quality and user-centric design. My goal is always the same: to take a complex problem and build a simple, elegant solution.
              </p>
              <p>
                When I'm not coding, you can find me expressing my creativity through music, whether it's singing, playing guitar, or composing. I believe the best solutions are a perfect blend of creativity and logic, and I am always looking for the next challenge to build something amazing.
              </p>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};
export default About;
