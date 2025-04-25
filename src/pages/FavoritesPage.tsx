import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Temporary data for demonstration
const FAVORITES = [
  {
    id: 1,
    name: 'Classic Borsch',
    shortDescription: 'Traditional Ukrainian borsch with meat and sour cream',
    cookingTime: 120,
    difficultyLevel: 'medium',
    imageUrl: 'https://assets.epicurious.com/photos/60f210e45a8e254cd822a1e6/1:1/w_1600,c_limit/BorshchWith%20Beef%20and%20Beets_RECIPE_071521_18193.jpg',
    rating: 4.7,
    author: 'John Smith',
    addedAt: '2023-12-15'
  },
  {
    id: 4,
    name: 'Pumpkin Soup',
    shortDescription: 'Creamy pumpkin soup with croutons',
    cookingTime: 45,
    difficultyLevel: 'medium',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/08/31/19/13/pumpkin-soup-3645375_1280.jpg',
    rating: 4.8,
    author: 'Helen Wilson',
    addedAt: '2023-12-10'
  },
  {
    id: 9,
    name: 'Chocolate Cake',
    shortDescription: 'Rich chocolate cake with ganache frosting',
    cookingTime: 90,
    difficultyLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250',
    rating: 4.9,
    author: 'Emily Johnson',
    addedAt: '2023-12-05'
  }
];

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState(FAVORITES);
  const [sortBy, setSortBy] = useState('date'); // 'date', 'name', 'rating'
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // In a real app, we would fetch favorites from API
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (favorites.length) {
      let sortedFavorites = [...favorites];
      
      switch (sortBy) {
        case 'date':
          sortedFavorites.sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime());
          break;
        case 'name':
          sortedFavorites.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'rating':
          sortedFavorites.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
      
      setFavorites(sortedFavorites);
    }
  }, [sortBy]);

  const handleRemoveFavorite = (id: number) => {
    setFavorites(favorites.filter(favorite => favorite.id !== id));
  };

  if (loading) {
    return (
      <div className="container-custom py-16 text-center">
        <p className="text-lg">Loading favorites...</p>
      </div>
    );
  }

  return (
    <div className="bg-background py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8 text-center">My Favorite Recipes</h1>
        
        {/* Filters and sorting */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-wrap items-center justify-between">
            <h2 className="text-lg font-semibold mb-2 md:mb-0">
              Favorite recipes: {favorites.length}
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-text-secondary">Sort by:</span>
              <select 
                className="form-input py-1" 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date">Date added</option>
                <option value="name">Name</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Favorites list */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((recipe) => (
              <div key={recipe.id} className="card hover:shadow-lg transition-shadow">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://via.placeholder.com/400x250?text=Recipe+Image';
                  }}
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{recipe.name}</h3>
                    <button 
                      onClick={() => handleRemoveFavorite(recipe.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Remove from favorites"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-text-secondary mb-4 line-clamp-2">
                    {recipe.shortDescription}
                  </p>
                  <div className="flex justify-between items-center text-sm text-text-secondary mb-4">
                    <span>Author: {recipe.author}</span>
                    <span className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      {recipe.rating}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-text-secondary mb-4">
                    <span>Time: {recipe.cookingTime} min</span>
                    <span className="capitalize">
                      {recipe.difficultyLevel === 'easy'
                        ? 'Easy'
                        : recipe.difficultyLevel === 'medium'
                        ? 'Medium'
                        : 'Hard'}
                    </span>
                  </div>
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="button-primary w-full text-center block"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-white rounded-lg shadow-md">
            <p className="text-text-secondary text-lg mb-4">
              You haven't added any recipes to favorites yet.
            </p>
            <Link to="/categories" className="button-primary">
              Browse Categories
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage; 