import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './animations';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeIn}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 