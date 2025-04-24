import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: any) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="bg-white shadow">
      <div className="container-custom mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Receptoria
            </Link>
            <nav className="ml-8">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="text-text-primary hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="text-text-primary hover:text-primary transition-colors">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/favorites" className="text-text-primary hover:text-primary transition-colors">
                    Favorites
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="text-text-primary hover:text-primary transition-colors">
                  {user?.username || 'Profile'}
                </Link>
                <button
                  onClick={handleLogout}
                  className="button-secondary"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-text-primary hover:text-primary transition-colors">
                  Login
                </Link>
                <Link to="/register" className="button-primary">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 