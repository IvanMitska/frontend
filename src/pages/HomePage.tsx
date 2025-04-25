import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import AnimatedList from '../components/common/AnimatedList';
import AnimatedButton from '../components/common/AnimatedButton';
import { fadeInUp, fadeInLeft, fadeInRight, hoverScale, staggerContainer } from '../components/common/animations';

// Temporary data for demonstration
const FEATURED_RECIPES = [
  {
    id: 1,
    name: 'Mushroom Cream Soup',
    shortDescription: 'Rich and creamy soup with fresh mushrooms and herbs',
    cookingTime: 40,
    difficultyLevel: 'easy',
    imageUrl: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Pasta Carbonara',
    shortDescription: 'Italian pasta with bacon, eggs and cheese',
    cookingTime: 30,
    difficultyLevel: 'easy',
    imageUrl: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Chicken Caesar',
    shortDescription: 'Classic salad with chicken breast, croutons and sauce',
    cookingTime: 45,
    difficultyLevel: 'easy',
    imageUrl: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Pizza Margherita',
    shortDescription: 'Traditional Italian pizza with tomatoes and mozzarella',
    cookingTime: 60,
    difficultyLevel: 'medium',
    imageUrl: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
    rating: 4.6,
  },
];

const CATEGORIES = [
  { id: 1, name: 'Breakfasts', count: 42, imageUrl: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800&h=300' },
  { id: 2, name: 'Soups', count: 28, imageUrl: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c291cHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&h=300' },
  { id: 3, name: 'Salads', count: 36, imageUrl: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=800&h=300' },
  { id: 4, name: 'Desserts', count: 65, imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=300' },
  { id: 5, name: 'Pastry', count: 47, imageUrl: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=800&h=300' },
  { id: 6, name: 'Vegetarian', count: 39, imageUrl: 'https://images.pexels.com/photos/1580466/pexels-photo-1580466.jpeg?auto=compress&cs=tinysrgb&w=800&h=300' },
  { id: 7, name: 'Meat Dishes', count: 54, imageUrl: 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=800&h=300' },
  { id: 8, name: 'Fish and Seafood', count: 33, imageUrl: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=800&h=300' },
];

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-background">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-primary to-dark-primary text-white py-16">
          <div className="container-custom">
            <div className="max-w-2xl">
              <motion.h1 
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Discover the world of delicious recipes
              </motion.h1>
              <motion.p 
                className="text-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Thousands of tested recipes that will help you cook delicious dishes every day
              </motion.p>
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Link to="/register" className="block">
                  <AnimatedButton variant="primary" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                    Join
                  </AnimatedButton>
                </Link>
                <Link to="/categories" className="block">
                  <AnimatedButton variant="outline" className="bg-transparent hover:bg-white/10 border border-white px-6 py-3 rounded-lg font-medium transition-colors text-white">
                    View recipes
                  </AnimatedButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search */}
        <motion.section 
          className="py-8 bg-white shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                type="text"
                placeholder="Find a recipe..."
                className="form-input flex-grow"
              />
              <AnimatedButton variant="primary" className="md:w-auto">
                Search
              </AnimatedButton>
            </div>
          </div>
        </motion.section>

        {/* Popular recipes */}
        <section className="py-12">
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Popular Recipes
            </motion.h2>
            <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURED_RECIPES.map((recipe) => (
                <motion.div 
                  key={recipe.id} 
                  className="card hover:shadow-lg transition-shadow"
                  whileHover={hoverScale}
                >
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
                    <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                    <p className="text-text-secondary mb-4">
                      {recipe.shortDescription}
                    </p>
                    <div className="flex justify-between items-center text-sm text-text-secondary">
                      <span>Time: {recipe.cookingTime} min</span>
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
                </motion.div>
              ))}
            </AnimatedList>
            <motion.div 
              className="text-center mt-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link to="/categories" className="block inline-block">
                <AnimatedButton variant="secondary">
                  View all recipes
                </AnimatedButton>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Recipe Categories
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {CATEGORIES.map((category, index) => (
                <motion.div
                  key={category.id}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  whileHover={hoverScale}
                >
                  <Link
                    to={`/categories/${category.id}`}
                    className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow block"
                  >
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={category.imageUrl} 
                        alt={category.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                      <p className="text-text-secondary">{category.count} recipes</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <motion.section 
          className="py-16 bg-primary text-white text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to share your recipe?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join our cooking community and share your culinary masterpieces
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to="/register" className="block inline-block">
                <AnimatedButton variant="primary" className="bg-white !text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                  Create account
                </AnimatedButton>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default HomePage; 