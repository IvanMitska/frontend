import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Temporary data for demonstration
const CATEGORIES = [
  { 
    id: 1, 
    name: 'Breakfasts', 
    description: 'Delicious and nutritious dishes to start the day', 
    count: 42,
    imageUrl: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800&h=300'
  },
  { 
    id: 2, 
    name: 'Soups', 
    description: 'Hot and warming first courses', 
    count: 28,
    imageUrl: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c291cHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&h=300'
  },
  { 
    id: 3, 
    name: 'Salads', 
    description: 'Fresh and light dishes made of vegetables and more', 
    count: 36,
    imageUrl: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=800&h=300'
  },
  { 
    id: 4, 
    name: 'Desserts', 
    description: 'Sweet treats for real gourmets', 
    count: 65,
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=300'
  },
  { 
    id: 5, 
    name: 'Pastry', 
    description: 'Homemade pies, bread and other delicious baked goods', 
    count: 47,
    imageUrl: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=800&h=300'
  },
  { 
    id: 6, 
    name: 'Vegetarian', 
    description: 'Meatless dishes for plant food lovers', 
    count: 39,
    imageUrl: 'https://images.pexels.com/photos/1580466/pexels-photo-1580466.jpeg?auto=compress&cs=tinysrgb&w=800&h=300'
  },
  { 
    id: 7, 
    name: 'Meat Dishes', 
    description: 'Various recipes with meat and poultry', 
    count: 54,
    imageUrl: 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=800&h=300'
  },
  { 
    id: 8, 
    name: 'Fish and Seafood', 
    description: 'Recipes with gifts from the sea', 
    count: 33,
    imageUrl: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=800&h=300'
  },
];

const CategoriesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(CATEGORIES);

  useEffect(() => {
    if (searchTerm) {
      const filtered = CATEGORIES.filter(category => 
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(CATEGORIES);
    }
  }, [searchTerm]);

  return (
    <div className="bg-background py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8 text-center">Recipe Categories</h1>
        
        {/* Search */}
        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <label htmlFor="search" className="sr-only">Search categories</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                id="search"
                type="text"
                placeholder="Find a category..."
                className="form-input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {/* Categories */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCategories.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.id}`}
                className="card hover:shadow-lg transition-shadow overflow-hidden"
              >
                <img 
                  src={category.imageUrl} 
                  alt={category.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                  <p className="text-text-secondary mb-3 line-clamp-2">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">{category.count} recipes</span>
                    <span className="text-primary hover:text-dark-primary">View &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-text-secondary text-lg">
              No categories found. Try changing your search query.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage; 