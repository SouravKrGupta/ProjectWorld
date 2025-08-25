// Projects.jsx
import React, { useEffect, useState, useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import Filterbar from "../components/Filterbar";
import { ThemeContext } from "../context/ThemeContext";

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
      .catch(() => setLoading(false));
  }, []);

  const filtered = projects
    .filter(
      (p) =>
        (tech === "All" || p.tech.includes(tech)) &&
        (type === "All" || p.category === type)
    )
    .sort((a, b) => b.id - a.id);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginatedProjects = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

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
      <div className="py-8 sm:py-16 md:py-24 animate-rise">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Explore Our Projects
            </h1>
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${textSecondary}`}>
              Discover our collection of high-quality software projects built
              with modern technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className={`container mx-auto px-4 sm:px-6 ${theme === "dark" ? "text-gray-800" : "text-gray-800"}`}>
        <Filterbar tech={tech} setTech={setTech} type={type} setType={setType} />
      </div>

      {/* Projects Grid */}
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="animate-pulse">
                  <div className="bg-gray-200 rounded-xl h-48 sm:h-56 lg:h-64 mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProjects.map((project, i) => (
                  <div
                    key={project.id}
                    className="animate-rise"
                    style={{ animationDelay: `${0.05 * i}s` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="flex justify-center items-center mt-8 animate-rise">
                <button
                  className={`px-4 py-2 mx-1 rounded-lg font-semibold ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <span className="mx-2 text-black font-medium">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className={`px-4 py-2 mx-1 rounded-lg font-semibold ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-16 animate-rise">
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                } mb-6`}
              >
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className={`text-lg font-medium ${textPrimary} mb-2`}>No Projects Found</h3>
              <p className={`${textSecondaryLight} text-sm max-w-sm mx-auto`}>
                Try adjusting your filters or check back later for new projects.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className={`py-12 sm:py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl overflow-hidden animate-rise">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Have a Project in Mind?</h3>
              <p className="text-blue-100 mb-6">
                Submit your project requirements through our form and we'll get back to you soon.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf5EGUr-B_J0AlhU8cggOuhM6KX7R6CeWvD09q93FpNlvZStw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition transform hover:-translate-y-0.5"
              >
                Submit Project Request
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animations CSS */}
      <style>{`
        @keyframes rise { 0% { opacity:0; transform: translateY(8px);} 100% { opacity:1; transform: translateY(0);} }
        .animate-rise { animation: rise .45s ease both; }
      `}</style>
    </div>
  );
};

export default Projects;
