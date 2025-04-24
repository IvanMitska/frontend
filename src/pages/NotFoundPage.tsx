import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container-custom py-16 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-text-secondary mb-8 max-w-md mx-auto">
        Sorry, but the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="button-primary inline-block">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFoundPage; 