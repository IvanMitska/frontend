import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import AnimatedButton from '../components/common/AnimatedButton';
import AnimatedList from '../components/common/AnimatedList';
import Loader from '../components/common/Loader';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../components/common/animations';

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated, user } = useSelector((state: any) => state.auth);
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Temporary data for demonstration
  useEffect(() => {
    // Simulating data loading from server
    setTimeout(() => {
      let recipeData = null;
      
      // Based on the ID parameter, return different recipe data
      switch(id) {
        case '1': // Mushroom Cream Soup
          recipeData = {
            id: 1,
            name: 'Mushroom Cream Soup',
            shortDescription: 'Delicate creamy soup with wild and cultivated mushrooms',
            fullDescription: 'This luxurious mushroom cream soup combines both wild and cultivated mushrooms for a deep, earthy flavor. The addition of cream and herbs creates a silky texture and rich taste that makes it perfect as a starter or light main course.',
            cookingTime: 40,
            difficultyLevel: 'easy',
            portions: 4,
            status: 'published',
            createdAt: '2023-05-15',
            updatedAt: '2023-05-15',
            viewCount: 132,
            rating: 4.9,
            category: {
              id: 2,
              name: 'Soups',
            },
            author: {
              id: 5,
              username: 'Emily Roberts',
            },
            ingredients: [
              { id: 1, name: 'Mixed mushrooms (shiitake, cremini, button)', quantity: '500', unit: 'g' },
              { id: 2, name: 'Onion', quantity: '1', unit: 'medium' },
              { id: 3, name: 'Garlic', quantity: '3', unit: 'cloves' },
              { id: 4, name: 'Vegetable broth', quantity: '750', unit: 'ml' },
              { id: 5, name: 'Heavy cream', quantity: '200', unit: 'ml' },
              { id: 6, name: 'Butter', quantity: '2', unit: 'tbsp' },
              { id: 7, name: 'Olive oil', quantity: '1', unit: 'tbsp' },
              { id: 8, name: 'Fresh thyme', quantity: '1', unit: 'tbsp' },
              { id: 9, name: 'Fresh parsley', quantity: '2', unit: 'tbsp' },
              { id: 10, name: 'Salt', quantity: '', unit: 'to taste' },
              { id: 11, name: 'Black pepper', quantity: '', unit: 'to taste' },
              { id: 12, name: 'Truffle oil (optional)', quantity: '1', unit: 'tsp' },
            ],
            steps: [
              {
                id: 1,
                stepNumber: 1,
                description: 'Clean the mushrooms and slice them. Set aside a few slices for garnishing.',
                imageUrl: 'https://cdn.pixabay.com/photo/2016/11/22/18/52/mushroom-1850087_1280.jpg',
              },
              {
                id: 2,
                stepNumber: 2,
                description: 'Finely chop the onion and mince the garlic.',
                imageUrl: 'https://cdn.pixabay.com/photo/2015/03/20/13/42/food-682087_1280.jpg',
              },
              {
                id: 3,
                stepNumber: 3,
                description: 'In a large pot, heat the butter and olive oil over medium heat. Add the onions and cook until translucent, about 3-4 minutes.',
                imageUrl: 'https://cdn.pixabay.com/photo/2015/10/01/14/26/pot-967997_1280.jpg',
              },
              {
                id: 4,
                stepNumber: 4,
                description: 'Add the garlic and cook for another minute until fragrant.',
                imageUrl: 'https://cdn.pixabay.com/photo/2018/07/25/00/32/garlic-3560956_1280.jpg',
              },
              {
                id: 5,
                stepNumber: 5,
                description: 'Add the sliced mushrooms and thyme, cook until mushrooms have released their moisture and begun to brown, about 8-10 minutes.',
                imageUrl: 'https://cdn.pixabay.com/photo/2016/11/18/19/00/bread-1836411_1280.jpg',
              },
              {
                id: 6,
                stepNumber: 6,
                description: 'Pour in the vegetable broth and bring to a simmer. Cook for 15 minutes.',
                imageUrl: 'https://cdn.pixabay.com/photo/2020/02/01/10/26/soup-4809266_1280.jpg',
              },
              {
                id: 7,
                stepNumber: 7,
                description: 'Transfer about 3/4 of the soup to a blender and blend until smooth, or use an immersion blender directly in the pot.',
                imageUrl: 'https://cdn.pixabay.com/photo/2018/11/30/21/47/soup-3848756_1280.jpg',
              },
              {
                id: 8,
                stepNumber: 8,
                description: 'Return the blended soup to the pot if using a stand blender, add the cream, and stir well.',
                imageUrl: 'https://cdn.pixabay.com/photo/2018/01/08/14/16/soup-3069622_1280.jpg',
              },
              {
                id: 9,
                stepNumber: 9,
                description: 'Season with salt and pepper to taste, and heat until warm but not boiling.',
                imageUrl: 'https://cdn.pixabay.com/photo/2019/03/28/22/22/food-4087553_1280.jpg',
              },
              {
                id: 10,
                stepNumber: 10,
                description: 'Serve garnished with reserved mushroom slices, fresh parsley, and a drizzle of truffle oil if using.',
                imageUrl: 'https://cdn.pixabay.com/photo/2018/10/14/18/29/cranberry-beans-3747589_1280.jpg',
              },
            ],
            images: [
              {
                id: 1,
                imageUrl: 'https://cdn.pixabay.com/photo/2018/01/08/14/16/soup-3069622_1280.jpg',
                isMain: true,
              },
              {
                id: 2,
                imageUrl: 'https://cdn.pixabay.com/photo/2021/01/16/09/05/meal-5921491_1280.jpg',
                isMain: false,
              },
            ],
            comments: [
              {
                id: 1,
                user: { id: 2, username: 'Sarah Brown' },
                text: 'Absolutely delicious! I added a bit of white wine during the mushroom cooking step, and it added a wonderful flavor.',
                createdAt: '2023-05-18',
              },
              {
                id: 2,
                user: { id: 3, username: 'Thomas Miller' },
                text: 'My family loved this soup! The truffle oil drizzle at the end really elevates it to restaurant quality.',
                createdAt: '2023-05-20',
              },
              {
                id: 3,
                user: { id: 4, username: 'Jessica Wilson' },
                text: 'This has become my go-to soup recipe for fall evenings. So comforting!',
                createdAt: '2023-05-25',
              },
            ],
          };
          break;
          
        case '16': // Grilled Salmon
          recipeData = {
            id: 16,
            name: 'Grilled Salmon',
            shortDescription: 'Grilled salmon fillet with lemon and herbs',
            fullDescription: 'This simple and delicious grilled salmon recipe is perfect for a quick and healthy dinner. The combination of fresh herbs, lemon and perfectly cooked salmon makes for an impressive dish.',
            cookingTime: 25,
            difficultyLevel: 'easy',
            portions: 4,
            status: 'published',
            createdAt: '2023-05-10',
            updatedAt: '2023-05-10',
            viewCount: 95,
            rating: 4.9,
            category: {
              id: 8,
              name: 'Fish and Seafood',
            },
            author: {
              id: 7,
              username: 'Mark Adams',
            },
            ingredients: [
              { id: 1, name: 'Salmon fillets', quantity: '4', unit: 'pcs (150g each)' },
              { id: 2, name: 'Olive oil', quantity: '2', unit: 'tbsp' },
              { id: 3, name: 'Lemon', quantity: '1', unit: 'pc' },
              { id: 4, name: 'Fresh dill', quantity: '1', unit: 'bunch' },
              { id: 5, name: 'Garlic', quantity: '2', unit: 'cloves' },
              { id: 6, name: 'Salt', quantity: '', unit: 'to taste' },
              { id: 7, name: 'Black pepper', quantity: '', unit: 'to taste' },
            ],
            steps: [
              {
                id: 1,
                stepNumber: 1,
                description: 'Preheat the grill to medium-high heat.',
                imageUrl: 'https://cdn.pixabay.com/photo/2019/08/31/15/32/bbq-4443792_1280.jpg',
              },
              {
                id: 2,
                stepNumber: 2,
                description: 'Pat the salmon fillets dry with paper towels and brush them with olive oil.',
                imageUrl: 'https://cdn.pixabay.com/photo/2014/06/16/14/20/salmon-369767_1280.jpg',
              },
              {
                id: 3,
                stepNumber: 3,
                description: 'Season with salt, pepper, and minced garlic.',
                imageUrl: 'https://cdn.pixabay.com/photo/2015/10/26/07/21/fish-1006009_1280.jpg',
              },
              {
                id: 4,
                stepNumber: 4,
                description: 'Place the salmon skin-side down on the grill and cook for 4-5 minutes.',
                imageUrl: 'https://cdn.pixabay.com/photo/2022/05/19/15/04/salmon-7207622_1280.jpg',
              },
              {
                id: 5,
                stepNumber: 5,
                description: 'Carefully flip and grill for another 3-4 minutes until the salmon is cooked through.',
                imageUrl: 'https://cdn.pixabay.com/photo/2016/03/05/22/23/salmon-1239198_1280.jpg',
              },
              {
                id: 6,
                stepNumber: 6,
                description: 'Squeeze fresh lemon juice over the salmon and sprinkle with chopped dill.',
                imageUrl: 'https://cdn.pixabay.com/photo/2016/03/05/19/24/salmon-1238248_1280.jpg',
              },
              {
                id: 7,
                stepNumber: 7,
                description: 'Serve with lemon wedges and fresh salad.',
                imageUrl: 'https://cdn.pixabay.com/photo/2016/06/28/17/32/salmon-1485014_1280.jpg',
              }
            ],
            images: [
              {
                id: 1,
                imageUrl: 'https://cdn.pixabay.com/photo/2016/06/28/17/32/salmon-1485014_1280.jpg',
                isMain: true,
              },
              {
                id: 2,
                imageUrl: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
                isMain: false,
              },
            ],
            comments: [
              {
                id: 1,
                user: { id: 2, username: 'Sarah Johnson' },
                text: 'Perfect recipe! The salmon came out so moist and flavorful.',
                createdAt: '2023-05-12',
              },
              {
                id: 2,
                user: { id: 3, username: 'Michael Brown' },
                text: 'Made this for dinner last night. Everyone loved it!',
                createdAt: '2023-05-15',
              },
            ],
          };
          break;
          
        case '17': // Seafood Paella
          recipeData = {
            id: 17,
            name: 'Seafood Paella',
            shortDescription: 'Spanish rice dish with various seafood',
            fullDescription: 'Paella is a classic Spanish rice dish that originated in Valencia. This seafood version combines a variety of seafood with aromatic saffron rice for a delicious and impressive dinner option.',
            cookingTime: 60,
            difficultyLevel: 'medium',
            portions: 6,
            status: 'published',
            createdAt: '2023-04-20',
            updatedAt: '2023-04-20',
            viewCount: 120,
            rating: 4.8,
            category: {
              id: 8,
              name: 'Fish and Seafood',
            },
            author: {
              id: 8,
              username: 'Maria Garcia',
            },
            ingredients: [
              { id: 1, name: 'Arborio rice', quantity: '500', unit: 'g' },
              { id: 2, name: 'Shrimp', quantity: '300', unit: 'g' },
              { id: 3, name: 'Mussels', quantity: '300', unit: 'g' },
              { id: 4, name: 'Squid', quantity: '200', unit: 'g' },
              { id: 5, name: 'Saffron threads', quantity: '1', unit: 'pinch' },
              { id: 6, name: 'Chicken broth', quantity: '1', unit: 'L' },
              { id: 7, name: 'Bell peppers', quantity: '2', unit: 'pcs' },
              { id: 8, name: 'Onion', quantity: '1', unit: 'large' },
              { id: 9, name: 'Garlic', quantity: '3', unit: 'cloves' },
              { id: 10, name: 'Tomatoes', quantity: '2', unit: 'pcs' },
              { id: 11, name: 'Olive oil', quantity: '4', unit: 'tbsp' },
              { id: 12, name: 'Paprika', quantity: '1', unit: 'tbsp' },
              { id: 13, name: 'Salt and pepper', quantity: '', unit: 'to taste' },
              { id: 14, name: 'Fresh parsley', quantity: '1', unit: 'bunch' },
              { id: 15, name: 'Lemon wedges', quantity: '', unit: 'for serving' },
            ],
            steps: [
              {
                id: 1,
                stepNumber: 1,
                description: 'Heat olive oil in a large paella pan or wide shallow skillet over medium heat.',
                imageUrl: 'https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-preparation-2069021_1280.jpg',
              },
              {
                id: 2,
                stepNumber: 2,
                description: 'Add chopped onion and bell peppers and cook until softened, about 5 minutes.',
                imageUrl: 'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg',
              },
              {
                id: 3,
                stepNumber: 3,
                description: 'Add minced garlic and diced tomatoes, and cook for 2 more minutes.',
                imageUrl: 'https://cdn.pixabay.com/photo/2015/09/09/20/17/tomatoes-933906_1280.jpg',
              },
              {
                id: 4,
                stepNumber: 4,
                description: 'Stir in the rice, paprika, and saffron. Toast for 1-2 minutes.',
                imageUrl: 'https://cdn.pixabay.com/photo/2014/10/22/17/50/rice-498688_1280.jpg',
              },
              {
                id: 5,
                stepNumber: 5,
                description: 'Pour in the broth, bring to a boil, then reduce to a simmer. Cook uncovered for 10 minutes.',
                imageUrl: 'https://cdn.pixabay.com/photo/2018/02/08/11/42/food-3139641_1280.jpg',
              },
              {
                id: 6,
                stepNumber: 6,
                description: 'Arrange the seafood on top of the rice. Continue cooking for 10-15 minutes.',
                imageUrl: 'https://cdn.pixabay.com/photo/2019/01/29/19/02/paella-3963108_1280.jpg',
              },
              {
                id: 7,
                stepNumber: 7,
                description: 'Remove from heat, cover with a cloth, and let rest for 5 minutes.',
                imageUrl: 'https://cdn.pixabay.com/photo/2018/07/16/16/08/paella-3542811_1280.jpg',
              },
              {
                id: 8,
                stepNumber: 8,
                description: 'Garnish with fresh parsley and serve with lemon wedges.',
                imageUrl: 'https://cdn.pixabay.com/photo/2019/06/03/22/06/seafood-4250411_1280.jpg',
              }
            ],
            images: [
              {
                id: 1,
                imageUrl: 'https://cdn.pixabay.com/photo/2018/07/16/16/08/paella-3542811_1280.jpg',
                isMain: true,
              },
              {
                id: 2,
                imageUrl: 'https://cdn.pixabay.com/photo/2021/02/08/12/40/paella-5997035_1280.jpg',
                isMain: false,
              },
            ],
            comments: [
              {
                id: 1,
                user: { id: 2, username: 'David Johnson' },
                text: 'Made this for a dinner party and it was a hit!',
                createdAt: '2023-04-22',
              },
              {
                id: 2,
                user: { id: 3, username: 'Laura Smith' },
                text: 'Great recipe, but I added a bit more saffron for extra flavor.',
                createdAt: '2023-04-25',
              },
            ],
          };
          break;
          
        // Add default case to handle other recipes
        default:
          // Generic recipe details for other IDs
          recipeData = {
            id: Number(id),
            name: `Recipe ${id}`,
            shortDescription: 'This is a sample recipe',
            fullDescription: 'This is a generic recipe description for demonstration purposes.',
            cookingTime: 30,
            difficultyLevel: 'medium',
            portions: 4,
            status: 'published',
            createdAt: '2023-05-01',
            updatedAt: '2023-05-01',
            viewCount: 50,
            rating: 4.5,
            category: {
              id: 1,
              name: 'Various',
            },
            author: {
              id: 1,
              username: 'Chef Admin',
            },
            ingredients: [
              { id: 1, name: 'Main ingredient', quantity: '500', unit: 'g' },
              { id: 2, name: 'Secondary ingredient', quantity: '2', unit: 'pcs' },
              { id: 3, name: 'Seasoning', quantity: '', unit: 'to taste' },
            ],
            steps: [
              {
                id: 1,
                stepNumber: 1,
                description: 'Prepare the ingredients.',
                imageUrl: 'https://via.placeholder.com/400x250?text=Step+1',
              },
              {
                id: 2,
                stepNumber: 2,
                description: 'Cook according to instructions.',
                imageUrl: 'https://via.placeholder.com/400x250?text=Step+2',
              },
              {
                id: 3,
                stepNumber: 3,
                description: 'Serve and enjoy!',
                imageUrl: 'https://via.placeholder.com/400x250?text=Step+3',
              },
            ],
            images: [
              {
                id: 1,
                imageUrl: 'https://via.placeholder.com/800x600?text=Recipe+Image',
                isMain: true,
              },
            ],
            comments: [
              {
                id: 1,
                user: { id: 2, username: 'User Example' },
                text: 'This is a sample comment.',
                createdAt: '2023-05-02',
              },
            ],
          };
          break;
      }
      
      if (recipeData) {
        setRecipe(recipeData);
        setLoading(false);
      } else {
        setError('Recipe not found');
        setLoading(false);
      }
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader size={60} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-custom py-8">
        <motion.div 
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>{error}</p>
        </motion.div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="container-custom py-8">
        <motion.div 
          className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>Recipe not found</p>
        </motion.div>
      </div>
    );
  }

  return (
    <PageTransition>
    <div className="bg-background">
        {/* Recipe Header with Image */}
        <section className="relative">
          <motion.div 
            className="h-80 md:h-96 w-full relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {recipe.images && recipe.images.length > 0 && (
              <img
                src={recipe.images.find((img: any) => img.isMain)?.imageUrl || recipe.images[0].imageUrl}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </motion.div>
          <div className="container-custom relative -mt-24 md:-mt-32">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {recipe.name}
              </motion.h1>
              <motion.div 
                className="flex flex-wrap items-center gap-4 text-text-secondary mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                    <span className="flex items-center">
                  <motion.span 
                    className="text-yellow-500 mr-1"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    ★
                  </motion.span> 
                  {recipe.rating} ({recipe.comments?.length || 0} reviews)
                    </span>
                <span>Time: {recipe.cookingTime} min</span>
                <span>Difficulty: {recipe.difficultyLevel}</span>
                <span>Portions: {recipe.portions}</span>
                <span>Category: {recipe.category.name}</span>
              </motion.div>
              <motion.p 
                className="text-lg mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {recipe.fullDescription}
              </motion.p>
              <motion.div 
                className="flex items-center text-text-secondary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <span>By {recipe.author.username}</span>
                <span className="mx-2">•</span>
                <span>Published: {new Date(recipe.createdAt).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>Views: {recipe.viewCount}</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Recipe Content */}
        <section className="py-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ingredients */}
              <motion.div 
                className="md:col-span-1"
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
              >
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                  <AnimatedList className="space-y-2" delay={0.9} staggerDelay={0.05}>
                  {recipe.ingredients.map((ingredient: any) => (
                      <div key={ingredient.id} className="flex justify-between">
                      <span>{ingredient.name}</span>
                      <span className="text-text-secondary">
                        {ingredient.quantity} {ingredient.unit}
                      </span>
                      </div>
                    ))}
                  </AnimatedList>
                </div>
              </motion.div>

              {/* Steps */}
              <motion.div 
                className="md:col-span-2"
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
              >
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-2xl font-bold mb-4">Steps</h2>
                  <AnimatedList className="space-y-6" delay={0.9} staggerDelay={0.1}>
                  {recipe.steps.map((step: any) => (
                      <div key={step.id} className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div className="md:col-span-1 flex items-center justify-center">
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {step.stepNumber}
                          </motion.div>
                        </div>
                        <div className="md:col-span-4">
                          <p className="mb-2">{step.description}</p>
                          {step.imageUrl && (
                            <motion.img 
                          src={step.imageUrl}
                          alt={`Step ${step.stepNumber}`}
                          className="w-full h-48 object-cover rounded-lg"
                              whileHover={{ scale: 1.03 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
              </div>
                    </div>
                  ))}
                  </AnimatedList>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comments */}
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <motion.h2 
              className="text-2xl font-bold mb-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Comments ({recipe.comments?.length || 0})
            </motion.h2>
            
            {isAuthenticated ? (
              <motion.div 
                className="bg-white p-6 rounded-lg shadow mb-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">Leave a comment</h3>
                <textarea
                  className="form-input w-full h-32 mb-4"
                  placeholder="Share your experience with this recipe..."
                />
                <AnimatedButton variant="primary">Submit Comment</AnimatedButton>
              </motion.div>
            ) : (
              <motion.div 
                className="bg-white p-6 rounded-lg shadow mb-8 text-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="mb-4">Please log in to leave a comment</p>
                <AnimatedButton variant="primary">
                  <Link to="/login">Login</Link>
                </AnimatedButton>
              </motion.div>
            )}
            
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {recipe.comments && recipe.comments.map((comment: any) => (
                <motion.div 
                  key={comment.id} 
                  className="bg-white p-6 rounded-lg shadow"
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">{comment.user.username}</h4>
                    <span className="text-text-secondary text-sm">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p>{comment.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        </div>
    </PageTransition>
  );
};

export default RecipePage; 