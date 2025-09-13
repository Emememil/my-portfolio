import React from 'react';
import { motion } from 'framer-motion';
import { projects } from './projects';
import ProjectCard from './ProjectCard';
import AnimatedTitle from '../common/AnimatedTitle';
import './ProjectSection.css';

const ProjectSection = ({ onOpenModal }) => {
  return (
    <section id="projects" className="project-section-container">
      <AnimatedTitle text="Selected Works" className="section-title" />
      <div className="projects-wrapper">
        
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="animated-card-wrapper"
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.1 
            }}
          >
            <ProjectCard project={project} onOpenModal={onOpenModal} />
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default ProjectSection;
