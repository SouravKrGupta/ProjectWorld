import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
    <div className="p-6 animate-pulse">
      <div className="h-8 bg-gray-200 rounded-lg w-3/4 mb-4"></div>
      <div className="space-y-3 mb-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="h-10 bg-gray-200 rounded-lg w-40"></div>
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
      <div className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              DSA Practice Sheets 📚
            </h1>
            <p className={`text-lg sm:text-xl mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              "DSA sheets are the best way to prepare for technical interviews and online assessment rounds." 💯
            </p>
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              They not only provide the most asked questions in different companies but also provide a structured path to follow. 
              Start your interview preparation journey with these carefully curated DSA sheets! 🚀
            </p>
          </div>
        </div>
      </div>

      {/* DSA Sheets Grid */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array(6).fill(null).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            ) : (
              dsaSheets.map((sheet) => (
                <div
                  key={sheet.id}
                  className={`group relative rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className="p-6">
                    <h2 className={`text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {sheet.title}
                    </h2>
                    <p className={`mb-6 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {sheet.description}
                    </p>
                    <a
                      href={sheet.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200"
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