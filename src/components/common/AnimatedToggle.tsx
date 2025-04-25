import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedToggleProps {
  isOn: boolean;
  onToggle: () => void;
  size?: 'sm' | 'md' | 'lg';
  primaryColor?: string;
  secondaryColor?: string;
  disabled?: boolean;
  label?: string;
}

const AnimatedToggle: React.FC<AnimatedToggleProps> = ({
  isOn,
  onToggle,
  size = 'md',
  primaryColor = '#FF6B35',
  secondaryColor = '#cccccc',
  disabled = false,
  label
}) => {
  // Определяем размеры в зависимости от переданного размера
  const getSize = () => {
    switch (size) {
      case 'sm': return { width: 36, height: 20, circle: 16 };
      case 'lg': return { width: 60, height: 32, circle: 28 };
      case 'md':
      default: return { width: 48, height: 26, circle: 22 };
    }
  };

  const { width, height, circle } = getSize();
  const padding = (height - circle) / 2;
  
  return (
    <div className="flex items-center">
      {label && (
        <span className="mr-2 text-text-primary">{label}</span>
      )}
      <motion.div
        className={`cursor-pointer flex items-center rounded-full p-[2px] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={disabled ? undefined : onToggle}
        style={{ 
          width: width,
          height: height,
          backgroundColor: isOn ? primaryColor : secondaryColor,
          padding
        }}
        animate={{ backgroundColor: isOn ? primaryColor : secondaryColor }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="bg-white rounded-full shadow-md"
          style={{ 
            width: circle, 
            height: circle 
          }}
          animate={{ 
            x: isOn ? width - circle - padding * 2 : 0
          }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30
          }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedToggle; 