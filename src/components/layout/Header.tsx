import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { motion } from 'framer-motion';
import AnimatedButton from '../common/AnimatedButton';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: any) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  // Анимация для навигационных ссылок
  const navLinkAnimation = {
    hover: {
      y: -2,
      color: "#FF6B35",
      transition: { duration: 0.2 }
    },
    tap: {
      y: 0,
      transition: { duration: 0.1 }
    }
  };

  // Анимация для логотипа
  const logoAnimation = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header 
      className="bg-white shadow"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
    >
      <div className="container-custom mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.div
              whileHover={logoAnimation.hover}
            >
              <Link to="/" className="text-2xl font-bold text-primary">
                Receptoria
              </Link>
            </motion.div>
            <nav className="ml-8">
              <ul className="flex space-x-6">
                <motion.li whileHover={navLinkAnimation.hover} whileTap={navLinkAnimation.tap}>
                  <Link to="/" className="text-text-primary transition-colors">
                    Home
                  </Link>
                </motion.li>
                <motion.li whileHover={navLinkAnimation.hover} whileTap={navLinkAnimation.tap}>
                  <Link to="/categories" className="text-text-primary transition-colors">
                    Categories
                  </Link>
                </motion.li>
                <motion.li whileHover={navLinkAnimation.hover} whileTap={navLinkAnimation.tap}>
                  <Link to="/favorites" className="text-text-primary transition-colors">
                    Favorites
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <motion.div whileHover={navLinkAnimation.hover} whileTap={navLinkAnimation.tap}>
                  <Link to="/profile" className="text-text-primary transition-colors">
                    {user?.username || 'Profile'}
                  </Link>
                </motion.div>
                <AnimatedButton 
                  variant="secondary" 
                  onClick={handleLogout}
                >
                  Logout
                </AnimatedButton>
              </>
            ) : (
              <>
                <motion.div whileHover={navLinkAnimation.hover} whileTap={navLinkAnimation.tap}>
                  <Link to="/login" className="text-text-primary transition-colors">
                    Login
                  </Link>
                </motion.div>
                <AnimatedButton variant="primary">
                  <Link to="/register">
                    Register
                  </Link>
                </AnimatedButton>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 