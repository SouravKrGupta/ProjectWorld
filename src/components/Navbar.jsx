import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; // Adjust path accordingly

const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-8 sm:h-8">
    <circle cx="16" cy="16" r="14" stroke="url(#gradient)" strokeWidth="4" />
    <path d="M16 8L24 20H8L16 8Z" fill="url(#gradient)" />
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563eb" />
        <stop offset="1" stopColor="#9333ea" />
      </linearGradient>
    </defs>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Get theme and toggleTheme from context
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinks = ['/', '/about','/college-projects', '/dsa-sheets', '/mnc-questions', '/b2b-pages','/contact' ];
  const labels = ['Home', 'About', 'College Projects',  'DSA Sheets', 'MNC Questions', 'B2B Pages', 'Contact'];

  return (
    <nav
      className={`shadow-md sticky top-0 z-50 transition-colors duration-500 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link to="/" className="flex items-center space-x-1.5 sm:space-x-2">
            <Logo />
            <span className="text-lg sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zypject
            </span>
        
          </Link>

          {/* Desktop Menu + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((path, index) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? `font-semibold border-b-2 border-blue-600 dark:border-blue-400 text-sm lg:text-base ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`
                    : `${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base`
                }
              >
                {labels[index]}
              </NavLink>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-transform transform hover:scale-110 duration-300 ease-in-out"
              aria-label="Toggle theme"
            >
              <div className="absolute transition-opacity duration-300 ease-in-out">
                {theme === 'light' ? (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 animate-spin-slow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 3v1M12 20v1M4.22 4.22l.7.7M18.36 18.36l.7.7M1 12h1M22 12h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 animate-ping-once"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 sm:space-x-4">
            {/* Theme toggle for mobile */}
            <button
              onClick={toggleTheme}
              className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              <div className="absolute transition-opacity duration-300 ease-in-out">
                {theme === 'light' ? (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v1M12 20v1M4.22 4.22l.7.7M18.36 18.36l.7.7M1 12h1M22 12h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </button>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center focus:outline-none border-2 ${isOpen ? (theme === 'dark' ? 'border-blue-400' : 'border-blue-600') : 'border-transparent'} transition-all duration-300 bg-purple-600 dark:bg-gray-800 rounded-lg shadow-md`}
              aria-label="Toggle navigation menu"
            >
              <div className="absolute transition-opacity duration-300 ease-in-out">
                {isOpen ? (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden py-2 sm:py-4`}>
          <div className="flex flex-col space-y-1 sm:space-y-2">
            {navLinks.map((path, index) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => {
                  if (isActive) {
                    return `font-semibold px-3 sm:px-4 py-2 rounded-lg text-sm ${theme === 'dark' ? 'text-gray-100 bg-gray-800' : 'text-gray-900 bg-blue-100'} `;
                  }
                  return `${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'} hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-800 px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-sm`;
                }}
              >
                {labels[index]}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
