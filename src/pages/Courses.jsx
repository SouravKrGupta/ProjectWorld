import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SubjectCard = ({ subject, perSubjectPrice, theme, handlePurchase }) => {
  const unitCount = subject.notes.length;
  const perUnitPrice = Math.round(perSubjectPrice / unitCount);

  return (
    <div
      className={`group relative rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800' 
          : 'bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-purple-50'
      } transform hover:-translate-y-2 hover:shadow-2xl`}
    >
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {subject.name}
            </h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Code: {subject.code}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            theme === 'dark' 
              ? 'bg-blue-900/30 text-blue-300' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {unitCount} Units
          </span>
        </div>

        {/* Price Badge */}
        <div className={`mt-4 inline-block rounded-lg px-4 py-2 ${
          theme === 'dark' 
            ? 'bg-purple-900/30 text-purple-300' 
            : 'bg-purple-100 text-purple-800'
        }`}>
          <div className="text-lg font-bold">₹{perSubjectPrice}</div>
          <div className="text-xs">₹{perUnitPrice} per unit</div>
        </div>
      </div>

      {/* Units List */}
      <div className={`px-6 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50/80'}`}>
        <div className="py-4 space-y-3">
          {subject.notes.map((note) => (
            <div
              key={note.unitNumber}
              className={`flex items-center justify-between rounded-lg p-3 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-700/50 hover:bg-gray-600/50'
                  : 'bg-white hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                  theme === 'dark'
                    ? 'bg-blue-900/30 text-blue-300'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {note.unitNumber}
                </span>
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {note.title}
                </span>
              </div>
              <a
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                ₹{perUnitPrice}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className={`p-6 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50/80'}`}>
        <button
          onClick={() => handlePurchase('subject', subject.code)}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
        >
          Purchase Full Subject
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mt-3 -mr-3 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 -mb-3 -ml-3 w-24 h-24 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
    </div>
  );
};

const Courses = () => {
  const [courseData, setCourseData] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch('/courseData.json');
        const data = await response.json();
        setCourseData(data.computerScienceEngineering);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course data:', error);
        setLoading(false);
      }
    };

    fetchCourseData();
  }, []);

  const handlePurchase = (type, subjectCode = null) => {
    const formUrl = courseData.googleFormLink;
    const purchaseInfo = subjectCode 
      ? `Subject: ${subjectCode}`
      : `Full Semester: ${selectedSemester}`;
    window.open(`${formUrl}?purchaseInfo=${encodeURIComponent(purchaseInfo)}`, '_blank');
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const currentSemester = courseData?.semesters.find(
    (sem) => sem.semester === selectedSemester
  );
  const subjectCount = currentSemester?.subjects.length || 0;
  const perSubjectPrice = subjectCount > 0 
    ? Math.round(courseData.pricing.fullSemesterPrice / subjectCount)
    : 0;

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Title with decorative elements */}
        <div className="relative mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {courseData?.department} Courses
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
        </div>

        {/* Pricing Information */}
        <div className={`rounded-lg shadow-lg p-6 mb-8 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Pricing Information - Semester {selectedSemester}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-4 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'
            }`}>
              <h3 className={`text-lg font-medium mb-2 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-900'
              }`}>Full Semester Package</h3>
              <p className={`text-xl font-bold ${
                theme === 'dark' ? 'text-blue-300' : 'text-blue-800'
              }`}>₹{courseData?.pricing.fullSemesterPrice}</p>
              <p className={`text-sm mt-1 ${
                theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
              }`}>
                Includes all {subjectCount} subjects
              </p>
              <button
                onClick={() => handlePurchase('semester')}
                className="mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Purchase Full Semester
              </button>
            </div>
            <div className={`p-4 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-purple-50'
            }`}>
              <h3 className={`text-lg font-medium mb-2 ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-900'
              }`}>Individual Subjects</h3>
              <p className={`text-xl font-bold ${
                theme === 'dark' ? 'text-purple-300' : 'text-purple-800'
              }`}>₹{perSubjectPrice} per subject</p>
              <p className={`text-sm mt-1 ${
                theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
              }`}>
                Price per unit varies based on number of units in each subject
              </p>
            </div>
          </div>
        </div>

        {/* Semester Selection - Enhanced styling */}
        <div className="relative mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[...Array(courseData?.totalSemesters)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setSelectedSemester(index + 1)}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                  selectedSemester === index + 1
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105'
                    : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                Semester {index + 1}
              </button>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10"></div>
        </div>

        {/* Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentSemester?.subjects.map((subject) => (
            <SubjectCard
              key={subject.code}
              subject={subject}
              perSubjectPrice={perSubjectPrice}
              theme={theme}
              handlePurchase={handlePurchase}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses; 