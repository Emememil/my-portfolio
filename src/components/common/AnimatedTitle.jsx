import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTitle = ({ text, as: Component = 'h2', className = '' }) => {
  return (
    <div className={`section-title ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Component>{text}</Component>
      </motion.div>
    </div>
  );
};

export default AnimatedTitle;
