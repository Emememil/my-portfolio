import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaGitAlt, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiVite, SiTailwindcss, SiFramer, SiTypescript, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si';
import AnimatedTitle from '../common/AnimatedTitle.jsx';

const skills = [
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React / Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Framer Motion', icon: <SiFramer /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <AnimatedTitle as="h2" text="Technical Stack" className="section-title" />
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
