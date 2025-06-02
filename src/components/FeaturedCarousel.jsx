import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const FeaturedCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        // Get featured or latest projects
        const featuredProjects = data.slice(0, 5);
        setProjects(featuredProjects);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-white">
      {/* Main Carousel */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-all duration-700 transform ${
              index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/90 via-purple-100/80 to-white/60 z-10" />
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center z-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full lg:w-1/2">
                  {/* Category Badge */}
                  <div className="inline-block mb-3 sm:mb-4 lg:mb-6">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
                      <div className="relative px-2 sm:px-3 lg:px-5 py-1 sm:py-1.5 lg:py-2 bg-white rounded-full flex items-center gap-1.5 sm:gap-2 border border-blue-100/50">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></span>
                        <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 lg:mb-8">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium rounded-full bg-white/80 text-gray-800 backdrop-blur-sm border border-blue-100 shadow-sm hover:bg-white hover:shadow transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-6 text-gray-800 leading-tight">
                    {project.name}
                  </h2>

                  <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-8 line-clamp-2 sm:line-clamp-3 text-gray-600">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 lg:mb-8">
                    <span className="text-lg sm:text-xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {project.price}
                    </span>
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg text-white bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 transition-all duration-200 text-xs sm:text-sm lg:text-lg font-medium group shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    View Project
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-1.5 sm:ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-3 sm:bottom-4 lg:bottom-8 right-3 sm:right-4 lg:right-8 flex space-x-1.5 sm:space-x-2 lg:space-x-3 z-30">
        <button
          onClick={prevSlide}
          className="p-1.5 sm:p-2 lg:p-3 rounded-full bg-white/80 hover:bg-white/90 text-blue-600 backdrop-blur-sm border border-blue-100 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="p-1.5 sm:p-2 lg:p-3 rounded-full bg-white/80 hover:bg-white/90 text-blue-600 backdrop-blur-sm border border-blue-100 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 sm:bottom-4 lg:bottom-8 left-3 sm:left-4 lg:left-8 flex space-x-1 sm:space-x-1.5 lg:space-x-2 z-30">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-200 ${
              index === currentIndex
                ? 'w-6 sm:w-8 lg:w-12 h-0.5 sm:h-1 lg:h-1.5 bg-gradient-to-r from-blue-400 to-purple-400'
                : 'w-1.5 sm:w-2 lg:w-3 h-0.5 sm:h-1 lg:h-1.5 bg-gray-300 hover:bg-gray-400'
            }`}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
