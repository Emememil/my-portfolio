import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import ProjectSection from './components/ProjectSection/ProjectSection';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Resume from './components/Resume.jsx';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';
import MetaManager from './components/MetaManager/MetaManager';
import './App.css';

function MainLayout({ mode, onOpenModal }) {
  return (
    <>
      <MetaManager mode={mode} />
      <Navbar mode={mode} />
      <Hero mode={mode} />
      <Experience mode={mode} />
      <ProjectSection mode={mode} onOpenModal={onOpenModal} />
      <Skills mode={mode} />
      <About mode={mode} />
      <Resume mode={mode} />
      <Footer />
    </>
  );
}

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
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout mode="default" onOpenModal={openModal} />} />
          <Route path="/solutions" element={<MainLayout mode="solutions" onOpenModal={openModal} />} />
        </Routes>
        
        {selectedProject && <Modal project={selectedProject} onClose={closeModal} />}
      </div>
    </Router>
  );
}

export default App;
