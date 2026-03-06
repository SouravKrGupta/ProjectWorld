import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ProjectPopup = ({ isOpen, onClose, projects }) => {
  const { theme } = useContext(ThemeContext);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  if (!isOpen || !projects || projects.length === 0) return null;

  useEffect(() => {
    // Auto cycle through projects every 5 seconds
    const cycleTimer = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    // Auto close popup after 15 seconds
    const closeTimer = setTimeout(() => {
      localStorage.setItem('hasClosedPopup', 'true');
      onClose();
    }, 15000);

    return () => {
      clearInterval(cycleTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose, projects.length]);

  const currentProject = projects[currentProjectIndex];

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      localStorage.setItem('hasClosedPopup', 'true');
      onClose();
    }
  };

  const handleClose = () => {
    localStorage.setItem('hasClosedPopup', 'true');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={handleOverlayClick}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${theme === 'dark' ? 'bg-black/60' : 'bg-black/40'}`} />
      
      {/* Modal */}
      <div
        className={`relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {currentProject.name}
            </h2>
            <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Complete Project for Sale
            </p>
          </div>
          <button
            onClick={handleClose}
            className={`p-2 rounded-lg transition-colors duration-200 ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="space-y-4">
            {/* Image */}
            <div className="rounded-lg overflow-hidden h-36">
              <img
                src={currentProject.image}
                alt={currentProject.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Price */}
            <div className="text-center">
              <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {currentProject.discountPrice || currentProject.price}
              </div>
              {currentProject.discountPrice && (
                <>
                  <div className="mt-1 text-sm text-gray-500 line-through">{currentProject.price}</div>
                  <div className="mt-1 text-green-600 text-sm font-semibold">
                    {Math.round(((parseInt(currentProject.price.replace('₹', '')) - parseInt(currentProject.discountPrice.replace('₹', ''))) / parseInt(currentProject.price.replace('₹', ''))) * 100)}% OFF
                  </div>
                </>
              )}
            </div>

            {/* Description */}
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {currentProject.description}
            </p>

            {/* CTA Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc5OmqXL8-JOnoRU5brsJandVHrulaKH7J-SOZLLBV1v9AzOg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:-translate-y-0.5 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-700 to-purple-700 text-white hover:from-blue-800 hover:to-purple-800' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'}`}
            >
              Buy Now
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
