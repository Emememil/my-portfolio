import React from 'react';
import { motion } from 'framer-motion';
import { FaGitAlt, FaFigma, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiVite, SiFramer, SiTypescript, SiExpress, SiNextdotjs, SiPostman } from 'react-icons/si';
import AnimatedTitle from '../common/AnimatedTitle.jsx';

const Skills = ({ mode = 'default' }) => {
  const isSolutions = mode === 'solutions';

  const skillCategories = isSolutions ? [
    { 
      name: 'Solutions & Ops', 
      description: 'Postman (API Testing), Browser DevTools, Technical Documentation',
      icon: <SiPostman /> 
    },
    { 
      name: 'Engineering Depth', 
      description: 'TypeScript, Node.js, Financial Logic (Paise/GST Integrity)',
      icon: <SiNextdotjs /> 
    },
    { 
      name: 'Systems & Security', 
      description: 'RBAC Architecture, CCNA Essentials, Middleware Logic',
      icon: <SiExpress /> 
    },
    { 
      name: 'Logic-First Design', 
      description: 'Figma-to-Code Parity, Responsive Implementation',
      icon: <FaFigma /> 
    },
    { 
      name: 'Technical Stack', 
      description: 'React, Next.js, API Orchestration, State Management',
      icon: <FaReact /> 
    },
    { 
      name: 'Workflows', 
      description: 'Git/GitHub, GitHub Actions, AI-Augmented Productivity',
      icon: <FaGitAlt /> 
    }
  ] : [
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

  return (
    <section id="skills" className="section">
      <div className="container">
        <AnimatedTitle 
          as="h2" 
          text={isSolutions ? "Technical Implementation Stack" : "Technical Stack & Architecture"} 
          className="section-title" 
        />
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
