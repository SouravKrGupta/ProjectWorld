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
      <div className="relative h-[600px] overflow-hidden">
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
              <div className="container mx-auto px-6 lg:px-8">
                <div className="w-full lg:w-1/2">
                  {/* Category Badge */}
                  <div className="inline-block mb-6">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
                      <div className="relative px-5 py-2 bg-white rounded-full flex items-center gap-2 border border-blue-100/50">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></span>
                        <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 text-sm font-medium rounded-full bg-white/80 text-gray-800 backdrop-blur-sm border border-blue-100 shadow-sm hover:bg-white hover:shadow transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-5xl font-bold mb-6 text-gray-800 leading-tight">
                    {project.name}
                  </h2>

                  <p className="text-xl mb-8 line-clamp-3 text-gray-600">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {project.price}
                    </span>
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center px-8 py-4 rounded-lg text-white bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 transition-all duration-200 text-lg font-medium group shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    View Project
                    <svg className="w-6 h-6 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Now at the bottom */}
      <div className="absolute bottom-8 right-8 flex space-x-3 z-30">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/80 hover:bg-white/90 text-blue-600 backdrop-blur-sm border border-blue-100 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/80 hover:bg-white/90 text-blue-600 backdrop-blur-sm border border-blue-100 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-8 flex space-x-2 z-30">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-200 ${
              index === currentIndex
                ? 'w-12 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400'
                : 'w-3 h-1.5 bg-gray-300 hover:bg-gray-400'
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
