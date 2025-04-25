import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
  loadingEffect?: boolean;
  hoverEffect?: boolean;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = '',
  placeholderColor = '#f3f4f6',
  loadingEffect = true,
  hoverEffect = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const placeholderSrc = `https://via.placeholder.com/500x300/${placeholderColor.replace('#', '')}?text=Loading...`;

  useEffect(() => {
    // При изменении src ресетим статус загрузки
    setIsLoaded(false);
    setError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true); // Считаем что загрузилась, но с ошибкой
  };

  // Варианты анимации для изображения
  const imageVariants = {
    loading: { opacity: 0 },
    loaded: { 
      opacity: 1,
      transition: { duration: 0.5 } 
    }
  };

  // Hover эффект (увеличение при наведении)
  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  // Если загрузка не удалась, показываем плейсхолдер
  const actualSrc = error ? placeholderSrc : src;

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      whileHover={hoverEffect ? hoverVariants.hover : undefined}
    >
      {loadingEffect && !isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse" 
          style={{ backgroundColor: placeholderColor }}
        />
      )}
      
      <motion.img
        src={actualSrc}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        variants={loadingEffect ? imageVariants : undefined}
        initial={loadingEffect ? "loading" : undefined}
        animate={loadingEffect ? (isLoaded ? "loaded" : "loading") : undefined}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </motion.div>
  );
};

export default AnimatedImage; 