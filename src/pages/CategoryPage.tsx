import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

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
  }
];

const RECIPES = [
  {
    id: 1,
    categoryId: 2,
    name: 'Mushroom Cream Soup',
    shortDescription: 'Delicate creamy soup with wild and cultivated mushrooms',
    cookingTime: 40,
    difficultyLevel: 'easy',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/01/08/14/16/soup-3069622_1280.jpg',
    rating: 4.9,
    author: 'Emily Roberts',
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Cheese and Herb Omelette',
    shortDescription: 'Soft omelette with cheese, herbs and tomatoes',
    cookingTime: 15,
    difficultyLevel: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250',
    rating: 4.5,
    author: 'Mary Johnson',
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Oatmeal with Fruits',
    shortDescription: 'Healthy oatmeal with apples and cinnamon',
    cookingTime: 20,
    difficultyLevel: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1571748982800-fa51082c2224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250',
    rating: 4.3,
    author: 'Alex Brown',
  },
  {
    id: 4,
    categoryId: 2,
    name: 'Pumpkin Soup',
    shortDescription: 'Creamy pumpkin soup with croutons',
    cookingTime: 45,
    difficultyLevel: 'medium',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/08/31/19/13/pumpkin-soup-3645375_1280.jpg',
    rating: 4.8,
    author: 'Helen Wilson',
  },
  {
    id: 5,
    categoryId: 2,
    name: 'Chicken Noodle Soup',
    shortDescription: 'Classic chicken soup with homemade noodles',
    cookingTime: 60,
    difficultyLevel: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1569494315581-abddb8d41cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250',
    rating: 4.6,
    author: 'Olivia Davis',
  },
  // Salads (category 3)
  {
    id: 6,
    categoryId: 3,
    name: 'Greek Salad',
    shortDescription: 'Fresh salad with cucumber, tomato, olives and feta cheese',
    cookingTime: 15,
    difficultyLevel: 'easy',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/08/09/10/30/tomatoes-1580273_1280.jpg',
    rating: 4.7,
    author: 'Michael Brown',
  },
  {
    id: 7,
    categoryId: 3,
    name: 'Caesar Salad',
    shortDescription: 'Classic salad with chicken, croutons and special sauce',
    cookingTime: 25,
    difficultyLevel: 'easy',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_1280.jpg',
    rating: 4.8,
    author: 'Emily Davis',
  },
  // Desserts (category 4)
  {
    id: 8,
    categoryId: 4,
    name: 'Chocolate Cake',
    shortDescription: 'Rich chocolate cake with creamy frosting',
    cookingTime: 90,
    difficultyLevel: 'medium',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_1280.jpg',
    rating: 4.9,
    author: 'Jessica Wilson',
  },
  {
    id: 9,
    categoryId: 4,
    name: 'Berry Cheesecake',
    shortDescription: 'Creamy cheesecake with mixed berry topping',
    cookingTime: 120,
    difficultyLevel: 'medium',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/11/38/cake-1869227_1280.jpg',
    rating: 4.8,
    author: 'David Johnson',
  },
  // Pastry (category 5)
  {
    id: 10,
    categoryId: 5,
    name: 'Apple Pie',
    shortDescription: 'Traditional apple pie with cinnamon',
    cookingTime: 90,
    difficultyLevel: 'medium',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/09/09/18/40/apple-pie-932994_1280.jpg',
    rating: 4.6,
    author: 'Anna Smith',
  },
  {
    id: 11,
    categoryId: 5,
    name: 'Croissants',
    shortDescription: 'Buttery flaky French pastry',
    cookingTime: 180,
    difficultyLevel: 'hard',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/03/24/14/23/bread-4077812_1280.jpg',
    rating: 4.7,
    author: 'Paul Martin',
  },
  // Vegetarian (category 6)
  {
    id: 12,
    categoryId: 6,
    name: 'Vegetable Curry',
    shortDescription: 'Spicy vegetable curry with coconut milk',
    cookingTime: 40,
    difficultyLevel: 'medium',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/abstract-1238247_1280.jpg',
    rating: 4.6,
    author: 'Robert Green',
  },
  {
    id: 13,
    categoryId: 6,
    name: 'Stuffed Bell Peppers',
    shortDescription: 'Bell peppers stuffed with rice, vegetables and cheese',
    cookingTime: 60,
    difficultyLevel: 'medium',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/06/30/18/49/stuffed-peppers-1489280_1280.jpg',
    rating: 4.5,
    author: 'Lisa Taylor',
  },
  // Meat Dishes (category 7)
  {
    id: 14,
    categoryId: 7,
    name: 'Beef Stroganoff',
    shortDescription: 'Classic beef stroganoff with mushrooms and sour cream sauce',
    cookingTime: 45,
    difficultyLevel: 'medium',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/07/16/11/57/beef-2509104_1280.jpg',
    rating: 4.8,
    author: 'Thomas Wilson',
  },
  {
    id: 15,
    categoryId: 7,
    name: 'Roast Chicken',
    shortDescription: 'Whole roasted chicken with herbs and vegetables',
    cookingTime: 90,
    difficultyLevel: 'medium',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/09/16/20/10/roast-chicken-943507_1280.jpg',
    rating: 4.7,
    author: 'Sarah Johnson',
  },
  // Fish and Seafood (category 8)
  {
    id: 16,
    categoryId: 8,
    name: 'Grilled Salmon',
    shortDescription: 'Grilled salmon fillet with lemon and herbs',
    cookingTime: 25,
    difficultyLevel: 'easy',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/06/28/17/32/salmon-1485014_1280.jpg',
    rating: 4.9,
    author: 'Mark Adams',
  },
  {
    id: 17,
    categoryId: 8,
    name: 'Seafood Paella',
    shortDescription: 'Spanish rice dish with various seafood',
    cookingTime: 60,
    difficultyLevel: 'medium',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/07/16/16/08/paella-3542811_1280.jpg',
    rating: 4.8,
    author: 'Maria Garcia',
  }
];

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<any>(null);
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sortBy, setSortBy] = useState('popular'); // 'popular', 'new', 'cooking-time'

  useEffect(() => {
    // Simulation of data loading from server
    setTimeout(() => {
      const categoryId = Number(id);
      const foundCategory = CATEGORIES.find(cat => cat.id === categoryId);
      
      if (foundCategory) {
        setCategory(foundCategory);
        
        // Getting recipes for the category
        const categoryRecipes = RECIPES.filter(recipe => recipe.categoryId === categoryId);
        setRecipes(categoryRecipes);
        setLoading(false);
      } else {
        setError('Category not found');
        setLoading(false);
      }
    }, 500);
  }, [id]);

  useEffect(() => {
    if (recipes.length) {
      let sortedRecipes = [...recipes];
      
      switch (sortBy) {
        case 'popular':
          sortedRecipes.sort((a, b) => b.rating - a.rating);
          break;
        case 'new':
          // For demonstration using reverse sort by id
          sortedRecipes.sort((a, b) => b.id - a.id);
          break;
        case 'cooking-time':
          sortedRecipes.sort((a, b) => a.cookingTime - b.cookingTime);
          break;
        default:
          break;
      }
      
      setRecipes(sortedRecipes);
    }
  }, [sortBy]);

  if (loading) {
    return (
      <div className="container-custom py-16 text-center">
        <p className="text-lg">Loading category...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-lg mb-6">{error}</p>
        <Link to="/categories" className="button-primary">Return to categories</Link>
      </div>
    );
  }

  return (
    <div className="bg-background py-8">
      {category && (
        <div className="container-custom">
          {/* Category header */}
          <div className="relative mb-8 rounded-lg overflow-hidden">
            <img 
              src={category.imageUrl} 
              alt={category.name} 
              className="w-full h-64 object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-2">{category.name}</h1>
                <p className="text-white text-opacity-90 max-w-2xl mx-auto">{category.description}</p>
              </div>
            </div>
          </div>

          {/* Filters and sorting */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-wrap items-center justify-between">
              <h2 className="text-lg font-semibold mb-2 md:mb-0">
                Recipes found: {recipes.length}
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-text-secondary">Sort by:</span>
                <select 
                  className="form-input py-1" 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">By popularity</option>
                  <option value="new">Newest first</option>
                  <option value="cooking-time">By cooking time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Recipe list */}
          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="card hover:shadow-lg transition-shadow h-full flex flex-col">
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
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
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
                      className="button-primary w-full text-center block mt-auto"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-text-secondary text-lg">
                There are no recipes in this category yet.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryPage; 