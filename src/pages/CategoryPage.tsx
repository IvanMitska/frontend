import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Временные данные для демонстрации
const CATEGORIES = [
  { 
    id: 1, 
    name: 'Завтраки', 
    description: 'Вкусные и питательные блюда для начала дня', 
    count: 42,
    imageUrl: 'https://via.placeholder.com/800x300?text=Завтраки'
  },
  { 
    id: 2, 
    name: 'Супы', 
    description: 'Горячие и согревающие первые блюда', 
    count: 28,
    imageUrl: 'https://via.placeholder.com/800x300?text=Супы'
  }
];

const RECIPES = [
  {
    id: 1,
    categoryId: 2,
    name: 'Борщ классический',
    shortDescription: 'Традиционный украинский борщ с мясом и сметаной',
    cookingTime: 120,
    difficultyLevel: 'medium',
    imageUrl: 'https://via.placeholder.com/300x200?text=Борщ',
    rating: 4.7,
    author: 'Иван Иванов',
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Омлет с сыром и зеленью',
    shortDescription: 'Нежный омлет с сыром, зеленью и помидорами',
    cookingTime: 15,
    difficultyLevel: 'easy',
    imageUrl: 'https://via.placeholder.com/300x200?text=Омлет',
    rating: 4.5,
    author: 'Мария Петрова',
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Каша овсяная с фруктами',
    shortDescription: 'Полезная овсяная каша с яблоками и корицей',
    cookingTime: 20,
    difficultyLevel: 'easy',
    imageUrl: 'https://via.placeholder.com/300x200?text=Каша',
    rating: 4.3,
    author: 'Алексей Смирнов',
  },
  {
    id: 4,
    categoryId: 2,
    name: 'Суп-пюре из тыквы',
    shortDescription: 'Нежный крем-суп из тыквы с гренками',
    cookingTime: 45,
    difficultyLevel: 'medium',
    imageUrl: 'https://via.placeholder.com/300x200?text=Тыквенный+суп',
    rating: 4.8,
    author: 'Елена Сидорова',
  },
  {
    id: 5,
    categoryId: 2,
    name: 'Куриный суп с лапшой',
    shortDescription: 'Классический куриный суп с домашней лапшой',
    cookingTime: 60,
    difficultyLevel: 'easy',
    imageUrl: 'https://via.placeholder.com/300x200?text=Куриный+суп',
    rating: 4.6,
    author: 'Ольга Иванова',
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
    // Имитация загрузки данных с сервера
    setTimeout(() => {
      const categoryId = Number(id);
      const foundCategory = CATEGORIES.find(cat => cat.id === categoryId);
      
      if (foundCategory) {
        setCategory(foundCategory);
        
        // Получение рецептов для категории
        const categoryRecipes = RECIPES.filter(recipe => recipe.categoryId === categoryId);
        setRecipes(categoryRecipes);
        setLoading(false);
      } else {
        setError('Категория не найдена');
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
          // Для демонстрации используем обратную сортировку по id
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
        <p className="text-lg">Загрузка категории...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Ошибка</h1>
        <p className="text-lg mb-6">{error}</p>
        <Link to="/categories" className="button-primary">Вернуться к категориям</Link>
      </div>
    );
  }

  return (
    <div className="bg-background py-8">
      {category && (
        <div className="container-custom">
          {/* Заголовок категории */}
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

          {/* Фильтры и сортировка */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-wrap items-center justify-between">
              <h2 className="text-lg font-semibold mb-2 md:mb-0">
                Найдено рецептов: {recipes.length}
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-text-secondary">Сортировать:</span>
                <select 
                  className="form-input py-1" 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">По популярности</option>
                  <option value="new">Сначала новые</option>
                  <option value="cooking-time">По времени приготовления</option>
                </select>
              </div>
            </div>
          </div>

          {/* Список рецептов */}
          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="card hover:shadow-lg transition-shadow">
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                    <p className="text-text-secondary mb-4 line-clamp-2">
                      {recipe.shortDescription}
                    </p>
                    <div className="flex justify-between items-center text-sm text-text-secondary mb-4">
                      <span>Автор: {recipe.author}</span>
                      <span className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        {recipe.rating}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-text-secondary mb-4">
                      <span>Время: {recipe.cookingTime} мин</span>
                      <span className="capitalize">
                        {recipe.difficultyLevel === 'easy'
                          ? 'Легко'
                          : recipe.difficultyLevel === 'medium'
                          ? 'Средне'
                          : 'Сложно'}
                      </span>
                    </div>
                    <Link
                      to={`/recipes/${recipe.id}`}
                      className="button-primary w-full text-center block"
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-text-secondary text-lg">
                В этой категории пока нет рецептов.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryPage; 