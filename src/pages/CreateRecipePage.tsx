import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Временные данные для демонстрации
const CATEGORIES = [
  { id: 1, name: 'Завтраки' },
  { id: 2, name: 'Супы' },
  { id: 3, name: 'Салаты' },
  { id: 4, name: 'Десерты' },
  { id: 5, name: 'Выпечка' },
  { id: 6, name: 'Вегетарианское' },
  { id: 7, name: 'Мясные блюда' },
  { id: 8, name: 'Рыба и морепродукты' },
];

const CreateRecipePage: React.FC = () => {
  const navigate = useNavigate();
  
  // Состояния для основной информации о рецепте
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    categoryId: '',
    difficultyLevel: 'medium',
    cookingTime: '',
    portions: '4',
    shortDescription: '',
    fullDescription: '',
  });
  
  // Ингредиенты и шаги
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '', unit: '' }]);
  const [steps, setSteps] = useState([{ description: '', imageFile: null }]);
  
  // Изображения
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);
  
  // Состояние загрузки и ошибок
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});
  
  // Обработчики изменения полей
  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBasicInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleIngredientChange = (index: number, field: string, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = { ...newIngredients[index], [field]: value };
    setIngredients(newIngredients);
  };
  
  const handleStepChange = (index: number, field: string, value: any) => {
    const newSteps = [...steps];
    newSteps[index] = { ...newSteps[index], [field]: value };
    setSteps(newSteps);
  };
  
  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMainImage(e.target.files[0]);
    }
  };
  
  const handleAdditionalImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAdditionalImages(Array.from(e.target.files));
    }
  };
  
  // Добавление/удаление ингредиентов и шагов
  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '', unit: '' }]);
  };
  
  const removeIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };
  
  const addStep = () => {
    setSteps([...steps, { description: '', imageFile: null }]);
  };
  
  const removeStep = (index: number) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };
  
  // Валидация формы
  const validateForm = () => {
    const newErrors: any = {};
    
    // Проверка основной информации
    if (!basicInfo.name.trim()) newErrors.name = 'Название рецепта обязательно';
    if (!basicInfo.categoryId) newErrors.categoryId = 'Выберите категорию';
    if (!basicInfo.cookingTime) newErrors.cookingTime = 'Укажите время приготовления';
    if (!basicInfo.shortDescription.trim()) newErrors.shortDescription = 'Краткое описание обязательно';
    
    // Проверка ингредиентов
    ingredients.forEach((ingredient, index) => {
      if (!ingredient.name.trim()) {
        newErrors[`ingredient_${index}_name`] = 'Название ингредиента обязательно';
      }
    });
    
    // Проверка шагов
    steps.forEach((step, index) => {
      if (!step.description.trim()) {
        newErrors[`step_${index}_description`] = 'Описание шага обязательно';
      }
    });
    
    // Проверка главного изображения
    if (!mainImage) newErrors.mainImage = 'Добавьте главное изображение рецепта';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Отправка формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      // Имитация отправки данных на сервер
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // После успешного создания рецепта перенаправляем на страницу с рецептами
      navigate('/profile');
    } catch (error) {
      console.error('Ошибка при создании рецепта:', error);
      setErrors({ general: 'Произошла ошибка при создании рецепта. Пожалуйста, попробуйте еще раз.' });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="bg-background py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-6 text-center">Создание нового рецепта</h1>
        
        {errors.general && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
            {errors.general}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Основная информация */}
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold mb-4">Основная информация</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Название рецепта <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={basicInfo.name}
                  onChange={handleBasicInfoChange}
                  className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Введите название рецепта"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="categoryId" className="block mb-1 font-medium">
                  Категория <span className="text-red-500">*</span>
                </label>
                <select
                  id="categoryId"
                  name="categoryId"
                  value={basicInfo.categoryId}
                  onChange={handleBasicInfoChange}
                  className={`form-input ${errors.categoryId ? 'border-red-500' : ''}`}
                >
                  <option value="">Выберите категорию</option>
                  {CATEGORIES.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {errors.categoryId && <p className="text-red-500 text-sm mt-1">{errors.categoryId}</p>}
              </div>
              
              <div>
                <label htmlFor="difficultyLevel" className="block mb-1 font-medium">
                  Сложность приготовления
                </label>
                <select
                  id="difficultyLevel"
                  name="difficultyLevel"
                  value={basicInfo.difficultyLevel}
                  onChange={handleBasicInfoChange}
                  className="form-input"
                >
                  <option value="easy">Легкая</option>
                  <option value="medium">Средняя</option>
                  <option value="hard">Сложная</option>
                </select>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="cookingTime" className="block mb-1 font-medium">
                    Время (мин) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="cookingTime"
                    name="cookingTime"
                    value={basicInfo.cookingTime}
                    onChange={handleBasicInfoChange}
                    className={`form-input ${errors.cookingTime ? 'border-red-500' : ''}`}
                    placeholder="Минуты"
                    min="1"
                  />
                  {errors.cookingTime && <p className="text-red-500 text-sm mt-1">{errors.cookingTime}</p>}
                </div>
                
                <div className="flex-1">
                  <label htmlFor="portions" className="block mb-1 font-medium">
                    Порции
                  </label>
                  <input
                    type="number"
                    id="portions"
                    name="portions"
                    value={basicInfo.portions}
                    onChange={handleBasicInfoChange}
                    className="form-input"
                    placeholder="Количество порций"
                    min="1"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="shortDescription" className="block mb-1 font-medium">
                Краткое описание <span className="text-red-500">*</span>
              </label>
              <textarea
                id="shortDescription"
                name="shortDescription"
                value={basicInfo.shortDescription}
                onChange={handleBasicInfoChange}
                className={`form-input h-20 ${errors.shortDescription ? 'border-red-500' : ''}`}
                placeholder="Введите краткое описание рецепта (до 200 символов)"
                maxLength={200}
              ></textarea>
              {errors.shortDescription && <p className="text-red-500 text-sm mt-1">{errors.shortDescription}</p>}
            </div>
            
            <div>
              <label htmlFor="fullDescription" className="block mb-1 font-medium">
                Полное описание
              </label>
              <textarea
                id="fullDescription"
                name="fullDescription"
                value={basicInfo.fullDescription}
                onChange={handleBasicInfoChange}
                className="form-input h-32"
                placeholder="Введите подробное описание рецепта"
              ></textarea>
            </div>
          </div>
          
          {/* Ингредиенты */}
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold mb-4">Ингредиенты</h2>
            
            {ingredients.map((ingredient, index) => (
              <div key={index} className="mb-4 flex flex-wrap md:flex-nowrap items-end gap-2">
                <div className="w-full md:w-2/5">
                  <label className={index === 0 ? "block mb-1 font-medium" : "sr-only"}>
                    Ингредиент {index === 0 && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="text"
                    value={ingredient.name}
                    onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                    className={`form-input ${errors[`ingredient_${index}_name`] ? 'border-red-500' : ''}`}
                    placeholder="Название ингредиента"
                  />
                  {errors[`ingredient_${index}_name`] && (
                    <p className="text-red-500 text-sm mt-1">{errors[`ingredient_${index}_name`]}</p>
                  )}
                </div>
                
                <div className="w-full md:w-1/5">
                  <label className={index === 0 ? "block mb-1 font-medium" : "sr-only"}>
                    Количество
                  </label>
                  <input
                    type="text"
                    value={ingredient.quantity}
                    onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                    className="form-input"
                    placeholder="Количество"
                  />
                </div>
                
                <div className="w-full md:w-1/5">
                  <label className={index === 0 ? "block mb-1 font-medium" : "sr-only"}>
                    Единица измерения
                  </label>
                  <input
                    type="text"
                    value={ingredient.unit}
                    onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
                    className="form-input"
                    placeholder="гр, мл, шт и т.д."
                  />
                </div>
                
                <div className="w-full md:w-auto flex-shrink-0">
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeIngredient(index)}
                      className="px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                    >
                      Удалить
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={addIngredient}
              className="button-secondary mt-2"
            >
              + Добавить ингредиент
            </button>
          </div>
          
          {/* Шаги приготовления */}
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold mb-4">Шаги приготовления</h2>
            
            {steps.map((step, index) => (
              <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-lg">Шаг {index + 1}</h3>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeStep(index)}
                      className="text-red-600 text-sm"
                    >
                      Удалить
                    </button>
                  )}
                </div>
                
                <div className="mb-3">
                  <label className="block mb-1 font-medium">
                    Описание <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={step.description}
                    onChange={(e) => handleStepChange(index, 'description', e.target.value)}
                    className={`form-input h-28 ${errors[`step_${index}_description`] ? 'border-red-500' : ''}`}
                    placeholder="Опишите этот шаг приготовления..."
                  ></textarea>
                  {errors[`step_${index}_description`] && (
                    <p className="text-red-500 text-sm mt-1">{errors[`step_${index}_description`]}</p>
                  )}
                </div>
                
                <div>
                  <label className="block mb-1 font-medium">
                    Фото (необязательно)
                  </label>
                  <input
                    type="file"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleStepChange(index, 'imageFile', e.target.files[0]);
                      }
                    }}
                    className="form-input py-2"
                    accept="image/*"
                  />
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={addStep}
              className="button-secondary mt-2"
            >
              + Добавить шаг
            </button>
          </div>
          
          {/* Изображения */}
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold mb-4">Фотографии</h2>
            
            <div className="mb-4">
              <label htmlFor="mainImage" className="block mb-1 font-medium">
                Главное фото <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="mainImage"
                onChange={handleMainImageChange}
                className={`form-input py-2 ${errors.mainImage ? 'border-red-500' : ''}`}
                accept="image/*"
              />
              {errors.mainImage && <p className="text-red-500 text-sm mt-1">{errors.mainImage}</p>}
              
              {mainImage && (
                <div className="mt-2">
                  <p className="text-sm text-text-secondary">Выбрано: {mainImage.name}</p>
                </div>
              )}
            </div>
            
            <div>
              <label htmlFor="additionalImages" className="block mb-1 font-medium">
                Дополнительные фото (до 5 фото)
              </label>
              <input
                type="file"
                id="additionalImages"
                onChange={handleAdditionalImagesChange}
                className="form-input py-2"
                accept="image/*"
                multiple
                max="5"
              />
              
              {additionalImages.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm text-text-secondary">
                    Выбрано {additionalImages.length} фото
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Кнопки формы */}
          <div className="p-6 flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              onClick={() => navigate(-1)}
            >
              Отмена
            </button>
            <button
              type="submit"
              className="button-primary"
              disabled={loading}
            >
              {loading ? 'Сохранение...' : 'Сохранить рецепт'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipePage; 