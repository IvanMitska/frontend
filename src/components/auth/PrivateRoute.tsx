import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state: any) => state.auth);

  // Если данные загружаются, можно показать спиннер
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Загрузка...</div>;
  }

  // Если не аутентифицирован, редирект на страницу логина
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Если аутентифицирован, отображаем дочерние компоненты
  return <>{children}</>;
}; 