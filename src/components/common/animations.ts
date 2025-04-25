import { Variants } from 'framer-motion';

// Анимация появления с фейдом
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Анимация появления с фейдом и сдвигом снизу
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0.3 }
  }
};

// Анимация появления с фейдом и сдвигом слева
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: { duration: 0.3 }
  }
};

// Анимация появления с фейдом и сдвигом справа
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: { duration: 0.3 }
  }
};

// Анимация масштабирования
export const scale: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: { duration: 0.3 }
  }
};

// Анимация для карточек при наведении
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

// Анимация для кнопок при наведении
export const hoverButton = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

// Анимация для стaggered эффекта (последовательное появление элементов)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Пульсирующая анимация (например для лайков или кнопок добавления)
export const pulse: Variants = {
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

// Анимация загрузки (спиннер)
export const rotate: Variants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: "linear"
    }
  }
}; 