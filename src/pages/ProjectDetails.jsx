import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext"; // adjust path to your context

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { theme } = useContext(ThemeContext); // get theme from context

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === Number(id));
        setProject(found);
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  // Utility function for classNames
  const cn = (...classes) => classes.filter(Boolean).join(" ");

  if (loading) {
    return (
      <div
        className={cn(
          "min-h-screen py-16",
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
            : "bg-gradient-to-b from-blue-50 via-white to-white"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div
              className={cn(
                "h-4 w-24 rounded mb-8",
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              )}
            ></div>
            <div
              className={cn(
                "rounded-2xl p-8",
                theme === "dark"
                  ? "bg-gray-800 shadow-lg shadow-black/50"
                  : "bg-white shadow-lg"
              )}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div
                    className={cn(
                      "rounded-xl h-96 w-full",
                      theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                    )}
                  ></div>
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <div
                    className={cn(
                      "h-8 rounded w-3/4",
                      theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                    )}
                  ></div>
                  <div
                    className={cn(
                      "h-4 rounded w-1/2",
                      theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                    )}
                  ></div>
                  <div
                    className={cn(
                      "h-4 rounded w-1/4",
                      theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                    )}
                  ></div>
                  <div className="space-y-2">
                    <div
                      className={cn(
                        "h-4 rounded w-full",
                        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                      )}
                    ></div>
                    <div
                      className={cn(
                        "h-4 rounded w-full",
                        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                      )}
                    ></div>
                    <div
                      className={cn(
                        "h-4 rounded w-2/3",
                        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                      )}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div
        className={cn(
          "min-h-screen py-16",
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
            : "bg-gradient-to-b from-blue-50 via-white to-white"
        )}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg mx-auto">
            <svg
              className={cn(
                "w-24 h-24 mx-auto mb-6",
                theme === "dark" ? "text-gray-400" : "text-gray-400"
              )}
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
            <h2
              className={cn(
                "text-2xl font-bold mb-4",
                theme === "dark" ? "text-white" : "text-gray-900"
              )}
            >
              Project Not Found
            </h2>
            <p
              className={cn(
                "mb-8",
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              )}
            >
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/projects"
              className={cn(
                "inline-flex items-center px-6 py-3 rounded-lg transition-colors duration-200 font-semibold",
                theme === "dark"
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              )}
            >
              Browse Projects
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "min-h-screen py-8 sm:py-12 lg:py-16",
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
          : "bg-gradient-to-b from-blue-50 via-white to-white"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className={cn(
            "inline-flex items-center mb-4 sm:mb-6 lg:mb-8 group transition-colors duration-200",
            theme === "dark"
              ? "text-gray-300 hover:text-blue-400"
              : "text-gray-600 hover:text-blue-600"
          )}
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        <div
          className={cn(
            "rounded-xl sm:rounded-2xl overflow-hidden",
            theme === "dark"
              ? "bg-gray-800 shadow-xl shadow-black/50"
              : "bg-white shadow-xl"
          )}
        >
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
              {/* Image Section */}
              <div className="lg:w-1/2">
                <div className="rounded-lg sm:rounded-xl overflow-hidden w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center bg-gray-100 dark:bg-white">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                {/* Additional Project Info Below Image */}
                <div className={cn(
                  "mt-6 p-6 rounded-xl",
                  theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                )}>
                  <h3 className={cn(
                    "text-lg font-semibold mb-4",
                    theme === "dark" ? "text-white" : "text-gray-900"
                  )}>
                    Project Highlights
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={cn(
                      "p-4 rounded-lg",
                      theme === "dark" ? "bg-gray-700" : "bg-white"
                    )}>
                      <span className={cn(
                        "block text-sm font-medium mb-1",
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      )}>
                        Category
                      </span>
                      <span className={cn(
                        "text-base font-semibold",
                        theme === "dark" ? "text-white" : "text-gray-900"
                      )}>
                        {project.category}
                      </span>
                    </div>
                    <div className={cn(
                      "p-4 rounded-lg",
                      theme === "dark" ? "bg-gray-700" : "bg-white"
                    )}>
                      <span className={cn(
                        "block text-sm font-medium mb-1",
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      )}>
                        Tech Stack
                      </span>
                      <span className={cn(
                        "text-base font-semibold",
                        theme === "dark" ? "text-white" : "text-gray-900"
                      )}>
                        {project.tech.length} Technologies
                      </span>
                    </div>
                    <div className={cn(
                      "p-4 rounded-lg",
                      theme === "dark" ? "bg-gray-700" : "bg-white"
                    )}>
                      <span className={cn(
                        "block text-sm font-medium mb-1",
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      )}>
                        Last Updated
                      </span>
                      <span className={cn(
                        "text-base font-semibold",
                        theme === "dark" ? "text-white" : "text-gray-900"
                      )}>
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                    <div className={cn(
                      "p-4 rounded-lg",
                      theme === "dark" ? "bg-gray-700" : "bg-white"
                    )}>
                      <span className={cn(
                        "block text-sm font-medium mb-1",
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      )}>
                        Support
                      </span>
                      <span className={cn(
                        "text-base font-semibold",
                        theme === "dark" ? "text-white" : "text-gray-900"
                      )}>
                        Lifetime Access
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2">
                <h1
                  className={cn(
                    "text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4",
                    theme === "dark" ? "text-white" : "text-gray-900"
                  )}
                >
                  {project.name}
                </h1>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={cn(
                        "px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full",
                        theme === "dark"
                          ? "bg-blue-900 text-blue-400"
                          : "bg-blue-50 text-blue-600"
                      )}
                    >
                      {t}
                    </span>
                  ))}
                  <span
                    className={cn(
                      "px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full",
                      theme === "dark"
                        ? "bg-yellow-900 text-yellow-400"
                        : "bg-yellow-50 text-yellow-600"
                    )}
                  >
                    {project.category}
                  </span>
                </div>

                <div
                  className={cn(
                    "text-xl sm:text-2xl font-bold mb-4 sm:mb-6",
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  )}
                >
                  {project.price}
                </div>

                <div className="prose max-w-none mb-6 sm:mb-8">
                  <p
                    className={cn(
                      "text-sm sm:text-base",
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {project.description}
                  </p>
                </div>

                {project.features && (
                  <div className="mb-6 sm:mb-8">
                    <h2
                      className={cn(
                        "text-lg sm:text-xl font-semibold mb-3 sm:mb-4",
                        theme === "dark" ? "text-white" : "text-gray-900"
                      )}
                    >
                      Key Features
                    </h2>
                    <ul className="space-y-2 sm:space-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span
                            className={cn(
                              "text-sm sm:text-base",
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-600"
                            )}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div
                  className={cn(
                    "rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8",
                    theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                  )}
                >
                  <h3
                    className={cn(
                      "text-base sm:text-lg font-semibold mb-2 sm:mb-3",
                      theme === "dark" ? "text-white" : "text-gray-900"
                    )}
                  >
                    Delivery Information
                  </h3>
                  <p
                    className={cn(
                      "text-sm sm:text-base",
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    After your payment is confirmed, you'll receive the complete
                    project files via email in a zip format.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc5OmqXL8-JOnoRU5brsJandVHrulaKH7J-SOZLLBV1v9AzOg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 transform hover:-translate-y-0.5",
                      theme === "dark"
                        ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white hover:from-blue-800 hover:to-purple-800"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                    )}
                  >
                    Purchase Project
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 font-semibold text-sm sm:text-base transition-colors duration-200",
                        theme === "dark"
                          ? "border-blue-400 text-blue-400 hover:bg-blue-900"
                          : "border-blue-600 text-blue-600 hover:bg-blue-50"
                      )}
                    >
                      Preview Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className={cn(
                        "inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 font-semibold text-sm sm:text-base transition-colors duration-200 opacity-50 cursor-not-allowed",
                        theme === "dark"
                          ? "border-gray-400 text-gray-400"
                          : "border-gray-400 text-gray-400"
                      )}
                    >
                      Demo Not Available
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <h2
            className={cn(
              "text-xl sm:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8",
              theme === "dark" ? "text-white" : "text-gray-900"
            )}
          >
            More {project.category} Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {project &&
              data &&
              data
                .filter(
                  (p) => p.category === project.category && p.id !== project.id
                )
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link
                    to={`/projects/${relatedProject.id}`}
                    key={relatedProject.id}
                    className={cn(
                      "group rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1",
                      theme === "dark"
                        ? "bg-gray-800 shadow-black/50"
                        : "bg-white"
                    )}
                  >
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-3 sm:mb-4">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3
                      className={cn(
                        "text-sm sm:text-base lg:text-lg font-semibold mb-2",
                        theme === "dark" ? "text-white" : "text-gray-900"
                      )}
                    >
                      {relatedProject.name}
                    </h3>
                    <div
                      className={cn(
                        "text-sm sm:text-base font-medium",
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      )}
                    >
                      {relatedProject.price}
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
