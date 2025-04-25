import React from 'react';
import { motion } from 'framer-motion';
import { rotate } from './animations';

interface LoaderProps {
  size?: number;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ 
  size = 40, 
  color = '#FF6B35' 
}) => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        variants={rotate}
        animate="animate"
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: `3px solid ${color}`,
          borderTopColor: 'transparent'
        }}
      />
    </div>
  );
};

export default Loader; 