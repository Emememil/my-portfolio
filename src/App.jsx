import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import ProjectSection from './components/ProjectSection/ProjectSection';
import Resume from './components/Resume/Resume'; // Import the new component
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <ProjectSection onOpenModal={openModal} />
      <Resume /> {/* Add the new component here */}
      <Footer />
      
      {selectedProject && <Modal project={selectedProject} onClose={closeModal} />}
    </div>
  );
}

export default App;
