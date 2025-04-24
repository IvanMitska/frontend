import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated, user } = useSelector((state: any) => state.auth);
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Временные данные для демонстрации
  useEffect(() => {
    // Имитация загрузки данных с сервера
    setTimeout(() => {
      if (id === '1') {
        setRecipe({
          id: 1,
          name: 'Борщ классический',
          shortDescription: 'Традиционный украинский борщ с мясом и сметаной',
          fullDescription: 'Борщ — традиционное блюдо восточноевропейской кухни, которое готовится на основе свеклы, что придает ему характерный красный цвет. Этот рецепт представляет собой классический вариант приготовления украинского борща с говядиной.',
          cookingTime: 120,
          difficultyLevel: 'medium',
          portions: 6,
          status: 'published',
          createdAt: '2023-04-15',
          updatedAt: '2023-04-15',
          viewCount: 142,
          rating: 4.7,
          category: {
            id: 2,
            name: 'Супы',
          },
          author: {
            id: 1,
            username: 'Иван Иванов',
          },
          ingredients: [
            { id: 1, name: 'Говядина (мякоть)', quantity: '500', unit: 'г' },
            { id: 2, name: 'Свекла', quantity: '2', unit: 'шт' },
            { id: 3, name: 'Капуста белокочанная', quantity: '300', unit: 'г' },
            { id: 4, name: 'Картофель', quantity: '3-4', unit: 'шт' },
            { id: 5, name: 'Морковь', quantity: '1', unit: 'шт' },
            { id: 6, name: 'Лук репчатый', quantity: '1', unit: 'шт' },
            { id: 7, name: 'Томатная паста', quantity: '2', unit: 'ст. л.' },
            { id: 8, name: 'Чеснок', quantity: '3', unit: 'зубчика' },
            { id: 9, name: 'Соль', quantity: '', unit: 'по вкусу' },
            { id: 10, name: 'Перец черный молотый', quantity: '', unit: 'по вкусу' },
            { id: 11, name: 'Лавровый лист', quantity: '2', unit: 'шт' },
            { id: 12, name: 'Зелень (укроп, петрушка)', quantity: '1', unit: 'пучок' },
            { id: 13, name: 'Сметана для подачи', quantity: '', unit: 'по вкусу' },
          ],
          steps: [
            {
              id: 1,
              stepNumber: 1,
              description: 'Говядину промыть, залить холодной водой и варить на медленном огне 1-1,5 часа до готовности, периодически снимая пену.',
              imageUrl: 'https://via.placeholder.com/300x200?text=Шаг+1',
            },
            {
              id: 2,
              stepNumber: 2,
              description: 'Свеклу очистить, натереть на крупной терке. Добавить томатную пасту, перемешать и тушить на сковороде с небольшим количеством масла 5-7 минут.',
              imageUrl: 'https://via.placeholder.com/300x200?text=Шаг+2',
            },
            {
              id: 3,
              stepNumber: 3,
              description: 'Морковь натереть, лук нарезать кубиками и обжарить на растительном масле до золотистого цвета.',
              imageUrl: 'https://via.placeholder.com/300x200?text=Шаг+3',
            },
            {
              id: 4,
              stepNumber: 4,
              description: 'Картофель нарезать кубиками и добавить в кипящий бульон. Варить 10 минут.',
              imageUrl: 'https://via.placeholder.com/300x200?text=Шаг+4',
            },
            {
              id: 5,
              stepNumber: 5,
              description: 'Добавить нашинкованную капусту и варить еще 5-7 минут.',
              imageUrl: 'https://via.placeholder.com/300x200?text=Шаг+5',
            },
            {
              id: 6,
              stepNumber: 6,
              description: 'Добавить обжаренные овощи и свеклу с томатной пастой в борщ. Варить 5-7 минут.',
              imageUrl: 'https://via.placeholder.com/300x200?text=Шаг+6',
            },
            {
              id: 7,
              stepNumber: 7,
              description: 'Добавить лавровый лист, соль, перец по вкусу и варить еще 5 минут.',
              imageUrl: 'https://via.placeholder.com/300x200?text=Шаг+7',
            },
            {
              id: 8,
              stepNumber: 8,
              description: 'В конце добавить измельченный чеснок и зелень. Дать настояться 10-15 минут.',
              imageUrl: 'https://via.placeholder.com/300x200?text=Шаг+8',
            },
            {
              id: 9,
              stepNumber: 9,
              description: 'Подавать со сметаной и свежей зеленью.',
              imageUrl: 'https://via.placeholder.com/300x200?text=Шаг+9',
            },
          ],
          images: [
            {
              id: 1,
              imageUrl: 'https://via.placeholder.com/800x600?text=Борщ+классический',
              isMain: true,
            },
            {
              id: 2,
              imageUrl: 'https://via.placeholder.com/800x600?text=Борщ+в+тарелке',
              isMain: false,
            },
          ],
          comments: [
            {
              id: 1,
              user: { id: 2, username: 'Мария Сидорова' },
              text: 'Отличный рецепт! Борщ получился очень вкусным и насыщенным.',
              createdAt: '2023-04-16',
            },
            {
              id: 2,
              user: { id: 3, username: 'Алексей Петров' },
              text: 'Спасибо за подробное описание. Получилось с первого раза!',
              createdAt: '2023-04-17',
            },
          ],
        });
        setLoading(false);
      } else {
        setError('Рецепт не найден');
        setLoading(false);
      }
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="container-custom py-16 text-center">
        <p className="text-lg">Загрузка рецепта...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Ошибка</h1>
        <p className="text-lg mb-6">{error}</p>
        <Link to="/" className="button-primary">Вернуться на главную</Link>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {recipe && (
        <div className="container-custom py-8">
          {/* Заголовок и основная информация */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="relative">
              <img
                src={recipe.images[0].imageUrl}
                alt={recipe.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <div className="flex items-center mb-2">
                  <Link to={`/categories/${recipe.category.id}`} className="text-white/80 hover:text-white text-sm">
                    {recipe.category.name}
                  </Link>
                  <span className="mx-2">•</span>
                  <span className="text-white/80 text-sm">
                    {new Date(recipe.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-2">{recipe.name}</h1>
                <p className="text-xl text-white/90 mb-4">{recipe.shortDescription}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center">
                    <span className="text-white/80 mr-2">Автор:</span>
                    <Link to={`/users/${recipe.author.id}`} className="text-white hover:underline">
                      {recipe.author.username}
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <span className="text-white/80 mr-2">Время:</span>
                    <span>{recipe.cookingTime} мин</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-white/80 mr-2">Сложность:</span>
                    <span className="capitalize">
                      {recipe.difficultyLevel === 'easy'
                        ? 'Легкая'
                        : recipe.difficultyLevel === 'medium'
                        ? 'Средняя'
                        : 'Сложная'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-white/80 mr-2">Порции:</span>
                    <span>{recipe.portions}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-white/80 mr-2">Рейтинг:</span>
                    <span className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      {recipe.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Основное содержание */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ингредиенты */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Ингредиенты</h2>
                <p className="text-sm text-text-secondary mb-4">На {recipe.portions} порций</p>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient: any) => (
                    <li key={ingredient.id} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                      <span>{ingredient.name}</span>
                      <span className="text-text-secondary">
                        {ingredient.quantity} {ingredient.unit}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex space-x-4">
                  <button className="button-primary flex-grow">Добавить в список покупок</button>
                  <button className="button-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Шаги приготовления */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-6">Инструкция приготовления</h2>
                <div className="space-y-8">
                  {recipe.steps.map((step: any) => (
                    <div key={step.id} className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src={step.imageUrl}
                          alt={`Шаг ${step.stepNumber}`}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-lg font-semibold mb-2">
                          Шаг {step.stepNumber}
                        </h3>
                        <p className="text-text-primary">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Комментарии */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-6">Комментарии ({recipe.comments.length})</h2>
            
            {isAuthenticated ? (
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">Оставить комментарий</h3>
                <textarea
                  className="form-input h-32 resize-none mb-3"
                  placeholder="Напишите ваш комментарий здесь..."
                ></textarea>
                <button className="button-primary">Отправить</button>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg mb-8">
                <p className="text-text-secondary">
                  Чтобы оставить комментарий, пожалуйста,{' '}
                  <Link to="/login" className="text-primary hover:underline">
                    войдите
                  </Link>{' '}
                  или{' '}
                  <Link to="/register" className="text-primary hover:underline">
                    зарегистрируйтесь
                  </Link>
                  .
                </p>
              </div>
            )}

            {recipe.comments.length > 0 ? (
              <div className="space-y-6">
                {recipe.comments.map((comment: any) => (
                  <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-0">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">{comment.user.username}</h4>
                      <span className="text-sm text-text-secondary">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-text-primary">{comment.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-text-secondary text-center py-4">
                Еще нет комментариев. Будьте первым, кто оставит комментарий!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipePage; 