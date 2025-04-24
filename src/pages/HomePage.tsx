import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Temporary data for demonstration
const FEATURED_RECIPES = [
  {
    id: 1,
    name: 'Classic Borsch',
    shortDescription: 'Traditional Ukrainian borsch with meat and sour cream',
    cookingTime: 120,
    difficultyLevel: 'medium',
    imageUrl: 'https://via.placeholder.com/300x200?text=Borsch',
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Pasta Carbonara',
    shortDescription: 'Italian pasta with bacon, eggs and cheese',
    cookingTime: 30,
    difficultyLevel: 'easy',
    imageUrl: 'https://via.placeholder.com/300x200?text=Carbonara',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Chicken Caesar',
    shortDescription: 'Classic salad with chicken breast, croutons and sauce',
    cookingTime: 45,
    difficultyLevel: 'easy',
    imageUrl: 'https://via.placeholder.com/300x200?text=Caesar',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Pizza Margherita',
    shortDescription: 'Traditional Italian pizza with tomatoes and mozzarella',
    cookingTime: 60,
    difficultyLevel: 'medium',
    imageUrl: 'https://via.placeholder.com/300x200?text=Pizza',
    rating: 4.6,
  },
];

const CATEGORIES = [
  { id: 1, name: 'Breakfasts', count: 42 },
  { id: 2, name: 'Soups', count: 28 },
  { id: 3, name: 'Salads', count: 36 },
  { id: 4, name: 'Desserts', count: 65 },
  { id: 5, name: 'Pastry', count: 47 },
  { id: 6, name: 'Vegetarian', count: 39 },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-background">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-primary to-dark-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Discover the world of delicious recipes
            </h1>
            <p className="text-xl mb-8">
              Thousands of tested recipes that will help you cook delicious dishes every day
            </p>
            <div className="flex space-x-4">
              <Link to="/register" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Join
              </Link>
              <Link to="/recipes" className="bg-transparent hover:bg-white/10 border border-white px-6 py-3 rounded-lg font-medium transition-colors">
                View recipes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-white shadow-md">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Find a recipe..."
              className="form-input flex-grow"
            />
            <button className="button-primary md:w-auto">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Popular recipes */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Popular Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_RECIPES.map((recipe) => (
              <div key={recipe.id} className="card hover:shadow-lg transition-shadow">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                  <p className="text-text-secondary mb-4">
                    {recipe.shortDescription}
                  </p>
                  <div className="flex justify-between items-center text-sm text-text-secondary">
                    <span>Time: {recipe.cookingTime} min</span>
                    <span className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      {recipe.rating}
                    </span>
                  </div>
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="button-primary w-full text-center mt-4 block"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/recipes"
              className="button-secondary inline-block"
            >
              View all recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Recipe Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.id}`}
                className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                <p className="text-text-secondary">{category.count} recipes</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">
            Ready to share your recipe?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our cooking community and share your culinary masterpieces
          </p>
          <Link
            to="/register"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            Create account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 