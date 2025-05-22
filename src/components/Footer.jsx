import React from 'react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 mt-8 shadow-inner">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-2 md:mb-0 font-semibold">&copy; {new Date().getFullYear()} Project World. All rights reserved.</div>
      <div className="space-x-4 text-lg">
        <a href="mailto:projectworld@example.com" className="hover:underline hover:text-yellow-300 transition">Email</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-yellow-300 transition">LinkedIn</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-yellow-300 transition">Instagram</a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-yellow-300 transition">YouTube</a>
      </div>
    </div>
  </footer>
);

export default Footer;
