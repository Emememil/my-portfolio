import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { title: 'Work', href: '#projects' },
    { title: 'Resume', href: '#resume' },
    { title: 'Contact', href: '#footer' },
  ];

  // Animation variants for the hamburger lines
  const hamburgerVariants = {
    closed: {
      top: { rotate: 0, y: 0 },
      middle: { opacity: 1, scaleX: 1 },
      bottom: { rotate: 0, y: 0 }
    },
    open: {
      top: { rotate: 45, y: 8 },
      middle: { opacity: 0, scaleX: 0 },
      bottom: { rotate: -45, y: -8 }
    }
  };

  const transition = {
    duration: 0.4,
    ease: [0.4, 0, 0.2, 1] // Premium cubic-bezier easing
  };

  return (
    <>
      <nav className={`navbar ${scrolled || isMobileMenuOpen ? 'scrolled' : ''}`}>
        <div className="navbar-logo"><a href="#">Emil William</a></div>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.title}><a href={link.href}>{link.title}</a></li>
          ))}
        </ul>
        <button className="hamburger-menu" onClick={toggleMobileMenu} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <motion.path
              d="M4 6H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              variants={hamburgerVariants.top}
              animate={isMobileMenuOpen ? "open" : "closed"}
              transition={transition}
            />
            <motion.path
              d="M4 12H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              variants={hamburgerVariants.middle}
              animate={isMobileMenuOpen ? "open" : "closed"}
              transition={transition}
            />
            <motion.path
              d="M4 18H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              variants={hamburgerVariants.bottom}
              animate={isMobileMenuOpen ? "open" : "closed"}
              transition={transition}
            />
          </svg>
        </button>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1, 
              transition: { 
                duration: 0.4, 
                ease: [0.4, 0, 0.2, 1] 
              } 
            }}
            exit={{ 
              opacity: 0, 
              transition: { 
                duration: 0.3, 
                ease: [0.4, 0, 0.2, 1] 
              } 
            }}
          >
            <motion.ul 
              className="mobile-nav-links"
              initial={{ y: 20 }}
              animate={{ 
                y: 0, 
                transition: { 
                  duration: 0.5, 
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.1
                } 
              }}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.title}
                  initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    filter: 'blur(0px)',
                    transition: { 
                      delay: i * 0.08 + 0.2, 
                      duration: 0.6, 
                      ease: [0.4, 0, 0.2, 1] 
                    } 
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -20, 
                    filter: 'blur(2px)',
                    transition: { 
                      delay: (navLinks.length - 1 - i) * 0.05, 
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1] 
                    } 
                  }}
                  whileHover={{ 
                    y: -2,
                    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
                >
                  <a href={link.href} onClick={toggleMobileMenu}>{link.title}</a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
