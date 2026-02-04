import React from 'react';
import { motion } from 'framer-motion';
import { getProjects } from './projects';
import ProjectCard from './ProjectCard';
import AnimatedTitle from '../common/AnimatedTitle.jsx';

const ProjectSection = ({ onOpenModal, mode = 'default' }) => {
  const projects = getProjects(mode);
  const isSolutions = mode === 'solutions';

  return (
    <section id="projects" className="section">
      <div className="container">
        <AnimatedTitle 
          as="h2" 
          text={isSolutions ? "Technical Implementation Proofs" : "Selected Works"} 
          className="section-title" 
        />
        <div className="projects-wrapper">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            >
              <ProjectCard project={project} onOpenModal={onOpenModal} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
