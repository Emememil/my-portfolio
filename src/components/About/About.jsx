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
                I'm a Front-End Developer who designs and builds beautiful, responsive, and intuitive web experiences. My journey is all about turning complex problems into elegant, user-friendly solutions. I love what I do, and it shows in my work on projects like the Cinera App, Expense Splitter Pro, and Spotify Dashboard.
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
