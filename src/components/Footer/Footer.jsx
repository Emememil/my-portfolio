import React from 'react';
import { motion } from 'framer-motion';
// UPDATED: Added FaLinkedin import
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      id="footer"
      className="footer-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.0, ease: 'easeOut' }}
    >
      <div className="footer-content">
        <h3 className="footer-cta">Have a project in mind?</h3>
        <p className="footer-prompt">Let's build something amazing together.</p>
        <a href="mailto:emilwilliam66@gmail.com" className="footer-email-link">
          emilwilliam66@gmail.com
        </a>
      </div>

      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://github.com/Emememil" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          {/* ADDED: LinkedIn Profile Link */}
          <a href="https://www.linkedin.com/in/emil-william" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Emil William. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
