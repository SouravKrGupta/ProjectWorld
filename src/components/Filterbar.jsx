import React, { useEffect, useState } from 'react';

const Filterbar = ({ tech, setTech, type, setType }) => {
  const [options, setOptions] = useState({ tech: [], type: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        const techSet = new Set();
        const typeSet = new Set();
        data.forEach(p => {
          p.tech.forEach(t => techSet.add(t));
          typeSet.add(p.category);
        });
        setOptions({ tech: ['All', ...Array.from(techSet)], type: ['All', ...Array.from(typeSet)] });
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center items-center animate-pulse">
        <div className="h-12 w-64 bg-gray-200 rounded-xl"></div>
        <div className="h-12 w-64 bg-gray-200 rounded-xl"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100/50 p-8 mb-8">
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
        <div className="w-full sm:w-64">
          <label className="block text-sm font-semibold text-gray-700 mb-2.5 ml-1">Project Type</label>
          <div className="relative group">
            <select 
              value={type} 
              onChange={e => setType(e.target.value)}
              className="block w-full px-4 py-3 text-base border border-gray-200 bg-white bg-opacity-90 
                focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none 
                rounded-xl transition-all duration-200 appearance-none
                hover:border-blue-300 cursor-pointer"
            >
              {options.type.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-64">
          <label className="block text-sm font-semibold text-gray-700 mb-2.5 ml-1">Technology Stack</label>
          <div className="relative group">
            <select 
              value={tech} 
              onChange={e => setTech(e.target.value)}
              className="block w-full px-4 py-3 text-base border border-gray-200 bg-white bg-opacity-90 
                focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none 
                rounded-xl transition-all duration-200 appearance-none
                hover:border-blue-300 cursor-pointer"
            >
              {options.tech.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterbar;
