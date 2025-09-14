import React from 'react';
// FIX: Import the image directly from the assets folder
import profilePhoto from '../../assets/profile-photo.jpg';
import AnimatedTitle from '../common/AnimatedTitle';
import AnimatedContent from '../common/AnimatedContent';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-container">
      <AnimatedTitle text="About Me" className="about-title" />
      <AnimatedContent>
        <div className="about-content">
          <div className="about-image-container">
            <img 
              // FIX: Use the imported image variable as the source
              src={profilePhoto}
              alt="Emil William" 
              className="about-photo" 
            />
          </div>
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
    </section>
  );
};
export default About;
