import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gradient-to-r from-blue-800 to-blue-600 shadow sticky top-0 z-50">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-extrabold text-white tracking-wide drop-shadow">Project World</Link>
      <div className="space-x-6">
        <NavLink to="/" className={({isActive}) => isActive ? 'text-yellow-300 font-bold' : 'text-white hover:text-yellow-300 transition'}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-yellow-300 font-bold' : 'text-white hover:text-yellow-300 transition'}>About</NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'text-yellow-300 font-bold' : 'text-white hover:text-yellow-300 transition'}>Projects</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'text-yellow-300 font-bold' : 'text-white hover:text-yellow-300 transition'}>Contact Us</NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;
