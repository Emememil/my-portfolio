import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto'; // Cleanup on component unmount
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { title: 'Work', href: '#projects' },
    { title: 'Resume', href: '#resume' },
    { title: 'Contact', href: '#footer' },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <>
      <nav className={`navbar ${scrolled || isMobileMenuOpen ? 'scrolled' : ''}`}>
        <div className="navbar-logo"><a href="#">Emil William</a></div>
        
        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.title}><a href={link.href}>{link.title}</a></li>
          ))}
        </ul>

        {/* Hamburger Menu Button */}
        <button className="hamburger-menu" onClick={toggleMobileMenu} aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={isMobileMenuOpen ? "M18 6L6 18M6 6L18 18" : "M4 6H20M4 12H20M4 18H20"} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.title}
                  variants={mobileLinkVariants}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                >
                  <a href={link.href} onClick={toggleMobileMenu}>{link.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
