import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SkeletonCard = () => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    <div className="p-4 sm:p-6 animate-pulse">
      <div className="h-6 sm:h-8 bg-gray-200 rounded-lg w-3/4 mb-3 sm:mb-4"></div>
      <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
        <div className="h-3 sm:h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-3 sm:h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="h-8 sm:h-10 bg-gray-200 rounded-lg w-32 sm:w-40"></div>
    </div>
  </div>
);

const DSASheets = () => {
  const { theme } = useContext(ThemeContext);
  const [dsaSheets, setDsaSheets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/dsasheets.json")
      .then((res) => res.json())
      .then((data) => {
        setDsaSheets(data.dsaSheets);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading DSA sheets:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}>
      {/* Hero Section */}
      <div className="py-8 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              DSA Practice Sheets 📚
            </h1>
            <p className={`text-base sm:text-lg md:text-xl mb-3 sm:mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              "DSA sheets are the best way to prepare for technical interviews and online assessment rounds." 💯
            </p>
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              They not only provide the most asked questions in different companies but also provide a structured path to follow. 
              Start your interview preparation journey with these carefully curated DSA sheets! 🚀
            </p>
          </div>
        </div>
      </div>

      {/* DSA Sheets Grid */}
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {loading ? (
              Array(6).fill(null).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            ) : (
              dsaSheets.map((sheet) => (
                <div
                  key={sheet.id}
                  className={`group relative rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className="p-4 sm:p-6">
                    <h2 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {sheet.title}
                    </h2>
                    <p className={`text-sm sm:text-base mb-4 sm:mb-6 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {sheet.description}
                    </p>
                    <a
                      href={sheet.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                    >
                      Access Sheet
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSASheets; 