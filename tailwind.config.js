/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35', // Основной цвет бренда (оранжевый)
        'dark-primary': '#E85A2A', // Темный вариант основного цвета
        secondary: '#2EC4B6', // Вторичный цвет (бирюзовый)
        'dark-secondary': '#20A99D', // Темный вариант вторичного цвета
        background: '#F8F9FA', // Цвет фона
        'text-primary': '#333333', // Основной цвет текста
        'text-secondary': '#6C757D', // Вторичный цвет текста
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} 