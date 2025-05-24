import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" stroke="url(#gradient)" strokeWidth="4"/>
    <path d="M16 8L24 20H8L16 8Z" fill="url(#gradient)"/>
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563eb"/>
        <stop offset="1" stopColor="#9333ea"/>
      </linearGradient>
    </defs>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Project World!
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                isActive 
                  ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600 transition-colors duration-200'
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                isActive 
                  ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600 transition-colors duration-200'
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({isActive}) => 
                isActive 
                  ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600 transition-colors duration-200'
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                isActive 
                  ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600 transition-colors duration-200'
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="flex flex-col space-y-2">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                isActive 
                  ? 'text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-lg' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors duration-200'
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                isActive 
                  ? 'text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-lg' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors duration-200'
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({isActive}) => 
                isActive 
                  ? 'text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-lg' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors duration-200'
              }
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                isActive 
                  ? 'text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-lg' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors duration-200'
              }
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
