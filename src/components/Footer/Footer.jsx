import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer id="footer" className="section">
      <div className="container">
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
            <a href="https://www.linkedin.com/in/emil-william" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Emil. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;
