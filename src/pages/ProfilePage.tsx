import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [activeTab, setActiveTab] = useState('profile');

  // Временные данные для демонстрации
  const myRecipes = [
    {
      id: 1,
      name: 'Домашний борщ',
      status: 'published',
      date: '2023-04-15',
      views: 142,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Пицца с грибами и сыром',
      status: 'published',
      date: '2023-03-22',
      views: 98,
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Шоколадный торт',
      status: 'draft',
      date: '2023-04-18',
      views: 0,
      rating: 0,
    },
  ];

  const favoriteRecipes = [
    {
      id: 4,
      name: 'Греческий салат',
      author: 'Елена Петрова',
      date: '2023-01-10',
      rating: 4.9,
    },
    {
      id: 5,
      name: 'Лазанья классическая',
      author: 'Иван Иванов',
      date: '2023-02-05',
      rating: 4.7,
    },
  ];

  return (
    <div className="container-custom py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-primary text-white p-6">
          <h1 className="text-3xl font-bold">Личный кабинет</h1>
          <p className="text-white/80">Добро пожаловать, {user?.username || 'Пользователь'}!</p>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap border-b mb-6">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === 'profile'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-text-secondary'
              }`}
            >
              Профиль
            </button>
            <button
              onClick={() => setActiveTab('my-recipes')}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === 'my-recipes'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-text-secondary'
              }`}
            >
              Мои рецепты
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === 'favorites'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-text-secondary'
              }`}
            >
              Избранное
            </button>
          </div>

          {activeTab === 'profile' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Информация о профиле</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-text-secondary">Имя пользователя</h3>
                  <p className="text-text-primary">{user?.username || 'Нет данных'}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-secondary">Email</h3>
                  <p className="text-text-primary">{user?.email || 'Нет данных'}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-secondary">Роль</h3>
                  <p className="text-text-primary capitalize">{user?.role || 'Пользователь'}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-secondary">Дата регистрации</h3>
                  <p className="text-text-primary">
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : 'Нет данных'}
                  </p>
                </div>
              </div>
              <button className="button-primary mt-6">Редактировать профиль</button>
            </div>
          )}

          {activeTab === 'my-recipes' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Мои рецепты</h2>
                <Link to="/recipes/create" className="button-primary">
                  Добавить рецепт
                </Link>
              </div>
              
              {myRecipes.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                          Название
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                          Статус
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                          Дата публикации
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                          Просмотры
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                          Рейтинг
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                          Действия
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {myRecipes.map((recipe) => (
                        <tr key={recipe.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                            <Link to={`/recipes/${recipe.id}`} className="hover:text-primary">
                              {recipe.name}
                            </Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                recipe.status === 'published'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {recipe.status === 'published' ? 'Опубликован' : 'Черновик'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                            {recipe.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                            {recipe.views}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                            {recipe.rating > 0 ? (
                              <span className="flex items-center">
                                <span className="text-yellow-500 mr-1">★</span>
                                {recipe.rating}
                              </span>
                            ) : (
                              'Нет оценок'
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-primary hover:text-dark-primary mr-3">
                              Редактировать
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              Удалить
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-text-secondary mb-4">
                    У вас пока нет рецептов. Создайте свой первый рецепт!
                  </p>
                  <Link to="/recipes/create" className="button-primary">
                    Добавить рецепт
                  </Link>
                </div>
              )}
            </div>
          )}

          {activeTab === 'favorites' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Избранные рецепты</h2>
              
              {favoriteRecipes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {favoriteRecipes.map((recipe) => (
                    <div key={recipe.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-4">
                        <h3 className="font-semibold text-lg">
                          <Link to={`/recipes/${recipe.id}`} className="hover:text-primary">
                            {recipe.name}
                          </Link>
                        </h3>
                        <p className="text-text-secondary text-sm">Автор: {recipe.author}</p>
                        <div className="flex justify-between mt-2 text-sm text-text-secondary">
                          <span>Добавлено: {recipe.date}</span>
                          <span className="flex items-center">
                            <span className="text-yellow-500 mr-1">★</span>
                            {recipe.rating}
                          </span>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <Link to={`/recipes/${recipe.id}`} className="text-primary hover:underline">
                            Смотреть рецепт
                          </Link>
                          <button className="text-red-600 hover:underline">
                            Удалить из избранного
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-text-secondary text-center py-8">
                  У вас пока нет избранных рецептов.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 