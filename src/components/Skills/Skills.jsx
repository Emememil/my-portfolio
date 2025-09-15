import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiVite, SiTailwindcss, SiFramer } from 'react-icons/si';
import AnimatedTitle from '../common/AnimatedTitle.jsx';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> }, { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript (ES6+)', icon: <SiJavascript /> }, { name: 'React', icon: <FaReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> }, { name: 'Framer Motion', icon: <SiFramer /> },
  { name: 'Vite', icon: <SiVite /> }, { name: 'Figma', icon: <FaFigma /> }, { name: 'Git', icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <AnimatedTitle as="h2" text="My Tech Stack" className="section-title" />
        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
