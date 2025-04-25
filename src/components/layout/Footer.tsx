import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Анимация для ссылок в футере
  const linkAnimation = {
    hover: {
      x: 5, 
      color: '#FF6B35',
      transition: { duration: 0.2 }
    }
  };

  // Анимация для заголовков в футере
  const headerAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <motion.footer 
      className="bg-gray-800 text-white py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={headerAnimation.initial}
            whileInView={headerAnimation.whileInView}
            viewport={headerAnimation.viewport}
            transition={headerAnimation.transition}
          >
            <h3 className="text-xl font-semibold mb-4">Receptoria</h3>
            <p className="text-gray-300">
              Your guide to the culinary world. Find, create and share delicious recipes.
            </p>
          </motion.div>
          <motion.div
            initial={headerAnimation.initial}
            whileInView={headerAnimation.whileInView}
            viewport={headerAnimation.viewport}
            transition={{ ...headerAnimation.transition, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <motion.li whileHover={linkAnimation.hover}>
                <Link to="/" className="text-gray-300 transition-colors">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={linkAnimation.hover}>
                <Link to="/categories" className="text-gray-300 transition-colors">
                  Categories
                </Link>
              </motion.li>
              <motion.li whileHover={linkAnimation.hover}>
                <Link to="/about" className="text-gray-300 transition-colors">
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={linkAnimation.hover}>
                <Link to="/contact" className="text-gray-300 transition-colors">
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            initial={headerAnimation.initial}
            whileInView={headerAnimation.whileInView}
            viewport={headerAnimation.viewport}
            transition={{ ...headerAnimation.transition, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <motion.li 
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                Email: info@receptoria.com
              </motion.li>
              <motion.li 
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                Phone: +7 (XXX) XXX-XX-XX
              </motion.li>
              <motion.li 
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                Address: PSU COC
              </motion.li>
            </ul>
          </motion.div>
        </div>
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-400">
            &copy; {currentYear} Receptoria. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 