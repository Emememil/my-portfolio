import React from 'react';

const ProjectCard = ({ project, onOpenModal }) => {
  return (
    <div className="project-card"> 
      <div className="project-image-container">
        <img src={project.image} alt={`${project.title} mockup`} />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        
        {/* --- 3-ACTION LAYOUT: UNIFIED ROW --- */}
        <div className="project-actions">
          <div className="project-actions-row">
            
            {/* 1. Live Demo / Video Demo */}
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                {/* CONDITIONAL TEXT: Check if it's Cinera (ID 1) */}
                {project.id === 1 ? 'Video Demo' : 'Live Demo'}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            )}
            
            {/* 2. View Code */}
            {project.repoLink && (
              <a 
                href={project.repoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
              >
                View Code
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </a>
            )}

            {/* 3. View Case Study (Updated from 'Read') */}
            <button 
              className="btn-tertiary" 
              onClick={() => onOpenModal(project)}
            >
              View Case Study
            </button>
            
          </div>
        </div>
        {/* ----------------------------------------- */}

      </div>
    </div>
  );
};

export default ProjectCard;
