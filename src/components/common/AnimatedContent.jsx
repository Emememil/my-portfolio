import React from 'react';
import { motion } from 'framer-motion';

// UPDATED: Added triggerOnLoad and delay props
const AnimatedContent = ({ children, amount = 0.2, triggerOnLoad = false, delay = 0 }) => {
  
  // Conditionally set motion props for instant load vs. scroll trigger
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    viewport: { once: true, amount: amount },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: delay },
    ...(triggerOnLoad
      ? { animate: { opacity: 1, y: 0 } }
      : { whileInView: { opacity: 1, y: 0 } })
  };

  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
