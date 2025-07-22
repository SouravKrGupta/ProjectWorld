// Projects page for Zypject
import React, { useEffect, useState, useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import Filterbar from "../components/Filterbar";
import { ThemeContext } from "../context/ThemeContext"; // adjust the path as needed

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const [projects, setProjects] = useState([]);
  const [tech, setTech] = useState("All");
  const [type, setType] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  // Filter and sort projects by descending id
  const filtered = projects
    .filter(
      (p) =>
        (tech === "All" || p.tech.includes(tech)) &&
        (type === "All" || p.category === type)
    )
    .sort((a, b) => b.id - a.id);

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginatedProjects = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Theme-based background classes
  const bgGradient =
    theme === "dark"
      ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800"
      : "bg-gradient-to-b from-blue-50 via-white to-white";

  const textPrimary = theme === "dark" ? "text-white" : "text-gray-900";
  const textSecondary = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const textSecondaryLight =
    theme === "dark" ? "text-gray-400" : "text-gray-500";

  return (
    <div className={`min-h-screen ${bgGradient}`}>
      {/* Hero Section */}
      <div className="py-8 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
            >
              Explore Our Projects
            </h1>
            <p
              className={`text-sm sm:text-base md:text-lg leading-relaxed ${textSecondary}`}
            >
              Discover our collection of high-quality software projects built
              with modern technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div
        className={`container mx-auto px-4 sm:px-6 ${
          theme === "dark" ? "text-gray-800" : "text-gray-800"
        }`}
      >
        <Filterbar
          tech={tech}
          setTech={setTech}
          type={type}
          setType={setType}
        />
      </div>

      {/* Projects Grid */}
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="animate-pulse">
                  <div className="bg-gray-200 rounded-xl h-48 sm:h-56 lg:h-64 mb-3 sm:mb-4"></div>
                  <div className="h-3 sm:h-4 bg-gray-200 rounded w-3/4 mb-2 sm:mb-3"></div>
                  <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {paginatedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              {/* Pagination Controls */}
              <div className="flex justify-center items-center mt-8">
                <button
                  className={`px-4 py-2 mx-1 rounded-lg font-semibold ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <span className="mx-2 text-base font-medium">Page {currentPage} of {totalPages}</span>
                <button
                  className={`px-4 py-2 mx-1 rounded-lg font-semibold ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-100 mb-4 sm:mb-6 ${
                  theme === "dark" ? "bg-gray-700" : ""
                }`}
              >
                <svg
                  className={`w-6 h-6 sm:w-8 sm:h-8 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className={`text-base sm:text-lg font-medium ${textPrimary} mb-1 sm:mb-2`}>
                No Projects Found
              </h3>
              <p className={`${textSecondaryLight} text-sm sm:text-base max-w-sm mx-auto`}>
                Try adjusting your filters or check back later for new projects.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className={`py-12 sm:py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Have a Project in Mind?
                </h3>
                <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8">
                  Submit your project requirements through our form and we'll get back to you soon.
                </p>
                <div className="max-w-md mx-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf5EGUr-B_J0AlhU8cggOuhM6KX7R6CeWvD09q93FpNlvZStw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-all duration-200 transform hover:-translate-y-0.5 
                      ${theme === 'dark' 
                        ? 'bg-white text-blue-400 hover:bg-white-400 border border-white-500' 
                        : 'bg-white text-black hover:bg-black-50'
                      }`}
                  >
                    Submit Project Request
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
