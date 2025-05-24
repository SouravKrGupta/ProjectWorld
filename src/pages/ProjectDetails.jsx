// Project Details page for Project World
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === Number(id));
        setProject(found);
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white py-16">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-4 w-24 bg-gray-200 rounded mb-8"></div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="bg-gray-200 rounded-xl h-96 w-full"></div>
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
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
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg mx-auto">
            <svg className="w-24 h-24 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Browse Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white py-16">
      <div className="container mx-auto px-4">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8 group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Image Section */}
              <div className="lg:w-1/2">
                <div className="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className=" w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  {project.name}
                </h1>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-600 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="px-3 py-1 text-sm font-medium bg-yellow-50 text-yellow-600 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="text-2xl font-bold text-blue-600 mb-6">
                  {project.price}
                </div>

                <div className="prose prose-blue max-w-none mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.features && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Delivery Information
                  </h3>
                  <p className="text-gray-600">
                    After your payment is confirmed, you'll receive the complete project files via email in a zip format.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://forms.gle/your-google-form-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    Purchase Project
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <button
                    className="inline-flex justify-center items-center px-8 py-4 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-200"
                  >
                    Preview Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More {project.category} Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project && data && data
              .filter(p => p.category === project.category && p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link 
                  to={`/project/${relatedProject.id}`} 
                  key={relatedProject.id} 
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{relatedProject.name}</h3>
                  <div className="text-blue-600 font-medium">{relatedProject.price}</div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
