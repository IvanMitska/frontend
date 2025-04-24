import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import { isFunctionOrConstructorTypeNode } from 'typescript';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  to?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  loading = false,
  to,
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex justify-center items-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-dark-primary focus:ring-primary',
    secondary: 'bg-gray-200 text-text-primary hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    link: 'text-primary hover:text-dark-primary underline focus:ring-primary bg-transparent',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const disabledClasses = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClass} ${className}`;
  
  // Если предоставлен to, это Link из react-router-dom
  if (to) {
    return (
      <Link to={to} className={classes}>
        {loading ? <Spinner size="small" color="white" /> : children}
      </Link>
    );
  }
  
  // В противном случае это кнопка
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && (
        <div className="mr-2">
          <Spinner size="small" color={variant === 'outline' ? 'primary' : 'white'} />
        </div>
      )}
      {children}
    </button>
  );
};

export default Button; 

