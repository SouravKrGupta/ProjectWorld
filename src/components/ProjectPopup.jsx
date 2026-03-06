import React from "react";
import { ThemeContext } from "../context/ThemeContext";

const ProjectPopup = ({ isOpen, onClose, project }) => {
  const { theme } = React.useContext(ThemeContext);

  if (!isOpen || !project) return null;

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
              {project.name}
            </h2>
            <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Complete Full-Stack Project
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
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Price */}
            <div className="text-center">
              <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {project.discountPrice || project.price}
              </div>
              {project.discountPrice && (
                <>
                  <div className="mt-1 text-sm text-gray-500 line-through">{project.price}</div>
                  <div className="mt-1 text-green-600 text-sm font-semibold">
                    {Math.round(((parseInt(project.price.replace('₹', '')) - parseInt(project.discountPrice.replace('₹', ''))) / parseInt(project.price.replace('₹', ''))) * 100)}% OFF
                  </div>
                </>
              )}
            </div>

            {/* Description */}
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 text-xs font-medium rounded-full ${theme === 'dark' ? 'bg-blue-900/50 text-blue-400' : 'bg-white text-gray-700 border border-gray-200'}`}
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${theme === 'dark' ? 'bg-blue-900/50 text-blue-400' : 'bg-white text-gray-700 border border-gray-200'}`}>
                  +{project.tech.length - 3} more
                </span>
              )}
            </div>

            {/* CTA Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc5OmqXL8-JOnoRU5brsJandVHrulaKH7J-SOZLLBV1v9AzOg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:-translate-y-0.5 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-700 to-purple-700 text-white hover:from-blue-800 hover:to-purple-800' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'}`}
            >
              Purchase Now
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
