import React, { useState, useEffect } from 'react';
import './ProjectSection.css';

// Import assets
import cineraHero from '../assets/cinera-hero.png'; 
import spotifyHero from '../assets/spotify-hero.png';
import expensesHero from '../assets/expenses-hero.png';

import cineraCaseStudy from '../assets/project-cinera.png';
import spotifyCaseStudy from '../assets/project-spotify.png';
import expensesCaseStudy from '../assets/project-expenses.png';

const projects = [
  { 
    id: 1, 
    title: 'Cinera App', 
    description: 'A sleek and modern movie tracker, bringing the cinematic universe to your fingertips.',
    heroImage: cineraHero, 
    caseStudyImage: cineraCaseStudy 
  },
  { 
    id: 2, 
    title: 'Spotify Dashboard', 
    description: 'A dynamic web application that transforms raw listening data into a rich, visual narrative.',
    heroImage: spotifyHero, 
    caseStudyImage: spotifyCaseStudy 
  },
  { 
    id: 3, 
    title: 'Expense Splitter Pro', 
    description: 'A production-quality app designed to solve the common headache of managing group expenses.',
    heroImage: expensesHero, 
    caseStudyImage: expensesCaseStudy 
  }
];

const ProjectSection = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  // All modal logic remains the same
  const openModal = (project) => { setActiveCaseStudy(project); setIsClosing(false); };
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => { setActiveCaseStudy(null); setIsClosing(false); }, 400); 
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (activeCaseStudy && event.key === 'Escape') { closeModal(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown); };
  }, [activeCaseStudy]);

  return (
    <>
      <section className="project-section-parallax">
        {projects.map((project, index) => (
          <div key={project.id} className="project-story-item">
            <div className="project-text-container">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button onClick={() => openModal(project)} className="case-study-button">
                View Case Study
              </button>
            </div>
            <div className="project-image-container">
              <img src={project.heroImage} alt={`${project.title} hero preview`} />
            </div>
          </div>
        ))}
      </section>

      {/* The Modal logic remains the same */}
      <div 
        className={`case-study-modal ${activeCaseStudy ? 'visible' : ''} ${isClosing ? 'closing' : ''}`} 
        onClick={closeModal}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {activeCaseStudy && (
            <>
              <img src={activeCaseStudy.caseStudyImage} alt="Case study details" />
              <button className="close-button" onClick={closeModal}>Close</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
```eof



