import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUser } from './store/slices/authSlice';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RecipePage from './pages/RecipePage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { PrivateRoute } from './components/auth/PrivateRoute';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import CreateRecipePage from './pages/CreateRecipePage';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Проверяем, есть ли токен в localStorage при загрузке приложения
    if (localStorage.getItem('token')) {
      dispatch(loadUser() as any);
    }
  }, [dispatch]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/recipes/:id" element={<RecipePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:id" element={<CategoryPage />} />
            <Route path="/profile" element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            } />
            <Route 
              path="/recipes/create" 
              element={
                <PrivateRoute>
                  <CreateRecipePage />
                </PrivateRoute>
              } 
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
