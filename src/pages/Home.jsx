// Home page for Project World
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FeaturedCarousel from '../components/FeaturedCarousel';
import { ThemeContext } from '../context/ThemeContext';  // Adjust path as needed

const stats = [
  { label: 'Projects Sold', value: '1200+', icon: '📦' },
  { label: 'Happy Clients', value: '950+', icon: '😊' },
  { label: 'Tech Stacks', value: '3+', icon: '💻' },
];

const categories = [
  { name: 'Mini Projects', icon: '🔹', color: 'blue' },
  { name: 'Major Projects', icon: '🔸', color: 'orange' },
  { name: 'Advanced Projects', icon: '⭐', color: 'yellow' },
];

const Home = () => {
  const { theme } = useContext(ThemeContext);

  // Helper to handle bg colors for categories with dark mode fallback
  const getCategoryBg = (color) =>
    `bg-${color}-50 dark:bg-${color}-900`;

  const getCategoryTextPrimary = (color) =>
    `text-${color}-900 dark:text-${color}-300`;

  const getCategoryTextSecondary = (color) =>
    `text-${color}-600 dark:text-${color}-400`;

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <div className={`relative py-16 sm:py-24 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-900 to-gray-800'
          : 'bg-gradient-to-b from-blue-50 to-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your One-Stop Destination for Quality Software Projects
            </h1>
            <p className={`text-lg sm:text-xl mb-8 max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Discover a curated collection of ready-made software projects for students, developers, and professionals. Built with modern tech stacks and best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg"
              >
                Browse Projects
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-semibold text-lg"
              >
                Custom Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`py-16 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-200"></div>
                <div className={`relative rounded-2xl shadow-lg p-8 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-200 ${
                  theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
                }`}>
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
          }`}>Project Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, i) => (
              <div 
                key={i}
                className={`${getCategoryBg(category.color)} rounded-2xl p-8 text-center transform hover:-translate-y-1 transition-transform duration-200 cursor-pointer shadow-lg hover:shadow-xl`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className={`text-xl font-semibold ${getCategoryTextPrimary(category.color)}`}>
                  {category.name}
                </h3>
                <p className={`${getCategoryTextSecondary(category.color)} mt-2`}>
                  Perfect for {category.name === 'Mini Projects' ? 'beginners' : category.name === 'Major Projects' ? 'intermediate' : 'advanced'} developers
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <FeaturedCarousel />
        </div>
      </div>

      {/* CTA Section */}
      <div className={`py-16 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-900 to-gray-800'
          : 'bg-gradient-to-b from-white to-blue-50'
      }`}>
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}>
            <div className="p-8 sm:p-12">
              <div className="text-center">
                <h3 className={`text-3xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  Have a Unique Project Idea? 🚀
                </h3>
                <p className={`text-lg mb-8 max-w-2xl mx-auto ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Whether it's a college submission, startup MVP, or personal project, our team can bring your vision to life. Share your requirements and let's create something amazing together!
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Start Your Project
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
