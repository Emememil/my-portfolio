import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTitle = ({ text, as: Component = 'h2', className, triggerOnLoad = false }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      // UPDATED: Restored and refined the 'spring' for a sophisticated, smooth feel
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        mass: 0.8
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const motionProps = {
    initial: "hidden",
    variants: container,
    viewport: { once: true, amount: 0.5 },
    ...(triggerOnLoad ? { animate: "visible" } : { whileInView: "visible" })
  };

  return (
    <Component className={className}>
      <motion.span
        style={{ display: 'inline-block', overflow: 'hidden' }}
        {...motionProps}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
};

export default AnimatedTitle;
