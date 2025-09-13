import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiVite, SiTailwindcss, SiFramer } from 'react-icons/si';
import AnimatedTitle from '../common/AnimatedTitle';
import './Skills.css';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Framer Motion', icon: <SiFramer /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

const Skills = () => {
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Time between each card animation
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" className="skills-container">
      <AnimatedTitle text="My Tech Stack" className="skills-title" />
      <motion.div
        className="skills-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} className="skill-card" variants={cardVariants}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
