import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo"><a href="#">Emil William</a></div>
      <ul className="navbar-links">
        <li><a href="#projects">Work</a></li>
        {/* ADDED: Resume Link */}
        <li><a href="#resume">Resume</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;
