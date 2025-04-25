import React from 'react';
import { motion } from 'framer-motion';
import { hoverButton } from './animations';

interface AnimatedButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  onClick,
  type = 'button',
  children,
  className = '',
  disabled = false,
  variant = 'primary'
}) => {
  // Базовые классы для всех кнопок
  let buttonClasses = 'px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ';
  
  // Добавляем классы в зависимости от варианта
  switch (variant) {
    case 'primary':
      buttonClasses += 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/50';
      break;
    case 'secondary':
      buttonClasses += 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary/50';
      break;
    case 'outline':
      buttonClasses += 'border border-primary text-primary hover:bg-primary/10 focus:ring-primary/30';
      break;
    default:
      buttonClasses += 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/50';
  }
  
  // Добавляем классы для состояния disabled
  if (disabled) {
    buttonClasses += ' opacity-50 cursor-not-allowed';
  }
  
  // Добавляем пользовательские классы
  buttonClasses += ` ${className}`;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      whileHover={disabled ? {} : hoverButton}
      whileTap={disabled ? {} : { scale: 0.95, transition: { duration: 0.1 } }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton; 