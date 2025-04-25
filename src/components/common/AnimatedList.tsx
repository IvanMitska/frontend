import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const AnimatedList: React.FC<AnimatedListProps> = ({ 
  children, 
  className = '',
  delay = 0.1,
  staggerDelay = 0.1
}) => {
  // Создаем новый вариант анимации без обращения к transition свойству
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={fadeInUp}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedList; 