import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaGitAlt, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiVite, SiTailwindcss, SiFramer, SiTypescript, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si';
import AnimatedTitle from '../common/AnimatedTitle.jsx';

const skillCategories = [
  { 
    name: 'Frontend Core', 
    description: 'React, Next.js, TypeScript',
    icon: <SiNextdotjs /> 
  },
  { 
    name: 'Systems & Tools', 
    description: 'Vite, Git, GitHub Actions',
    icon: <SiVite /> 
  },
  { 
    name: 'Backend & Data', 
    description: 'Node.js, Express, MongoDB',
    icon: <FaNodeJs /> 
  },
  { 
    name: 'Architecture', 
    description: 'RBAC Security, Middleware',
    icon: <SiExpress /> 
  },
  { 
    name: 'Premium UI/UX', 
    description: 'Framer Motion, Tailwind CSS',
    icon: <SiFramer /> 
  },
  { 
    name: 'Engineering Design', 
    description: 'Figma, Design-to-Code Parity',
    icon: <FaFigma /> 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <AnimatedTitle as="h2" text="Technical Stack & Architecture" className="section-title" />
        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              className="skill-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <div className="skill-icon">{category.icon}</div>
              <h4 className="skill-category-name" style={{ fontWeight: 600, fontSize: '14px', marginTop: '12px' }}>{category.name}</h4>
              <p className="skill-name" style={{ fontSize: '12px', opacity: 0.8 }}>{category.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
