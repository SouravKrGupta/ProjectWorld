import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => (
  <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="h-64 overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
        {project.name}
      </h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full"
          >
            {t}
          </span>
        ))}
        <span className="px-3 py-1 text-xs font-medium bg-yellow-50 text-yellow-600 rounded-full">
          {project.category}
        </span>
      </div>
      <div className="mb-3 text-lg font-semibold text-blue-600">
        {project.price}
      </div>
      <p className="mb-4 text-gray-600 line-clamp-2">{project.description}</p>
      <div className="flex gap-3">
        <Link
          to={`/projects/${project.id}`}
          className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors duration-200"
        >
          View Details
        </Link>
        <a
          href="https://forms.gle/your-google-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200"
        >
          Get Project
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
