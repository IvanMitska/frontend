import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Временные данные для демонстрации
const CATEGORIES = [
  { 
    id: 1, 
    name: 'Завтраки', 
    description: 'Вкусные и питательные блюда для начала дня', 
    count: 42,
    imageUrl: 'https://via.placeholder.com/400x300?text=Завтраки'
  },
  { 
    id: 2, 
    name: 'Супы', 
    description: 'Горячие и согревающие первые блюда', 
    count: 28,
    imageUrl: 'https://via.placeholder.com/400x300?text=Супы'
  },
  { 
    id: 3, 
    name: 'Салаты', 
    description: 'Свежие и легкие блюда из овощей и не только', 
    count: 36,
    imageUrl: 'https://via.placeholder.com/400x300?text=Салаты'
  },
  { 
    id: 4, 
    name: 'Десерты', 
    description: 'Сладкие угощения для настоящих гурманов', 
    count: 65,
    imageUrl: 'https://via.placeholder.com/400x300?text=Десерты'
  },
  { 
    id: 5, 
    name: 'Выпечка', 
    description: 'Домашние пироги, хлеб и другая вкусная выпечка', 
    count: 47,
    imageUrl: 'https://via.placeholder.com/400x300?text=Выпечка'
  },
  { 
    id: 6, 
    name: 'Вегетарианское', 
    description: 'Блюда без мяса для любителей растительной пищи', 
    count: 39,
    imageUrl: 'https://via.placeholder.com/400x300?text=Вегетарианское'
  },
  { 
    id: 7, 
    name: 'Мясные блюда', 
    description: 'Разнообразные рецепты из мяса и птицы', 
    count: 54,
    imageUrl: 'https://via.placeholder.com/400x300?text=Мясные+блюда'
  },
  { 
    id: 8, 
    name: 'Рыба и морепродукты', 
    description: 'Рецепты из даров моря', 
    count: 33,
    imageUrl: 'https://via.placeholder.com/400x300?text=Рыба+и+морепродукты'
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
        <h1 className="text-3xl font-bold mb-8 text-center">Категории рецептов</h1>
        
        {/* Поиск */}
        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <label htmlFor="search" className="sr-only">Поиск категорий</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                id="search"
                type="text"
                placeholder="Найти категорию..."
                className="form-input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {/* Категории */}
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
                    <span className="text-sm text-text-secondary">{category.count} рецептов</span>
                    <span className="text-primary hover:text-dark-primary">Смотреть &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-text-secondary text-lg">
              Категории не найдены. Попробуйте изменить поисковый запрос.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage; 