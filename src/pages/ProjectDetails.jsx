// Project Details page for Project World
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === Number(id));
        setProject(found);
      });
  }, [id]);

  if (!project) return <div className="container mx-auto px-4 py-8">Project not found.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/projects" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-8 border border-blue-100">
        <img src={project.image} alt={project.name} className="rounded w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 text-blue-800">{project.name}</h1>
          <div className="mb-2 text-gray-600 flex gap-2 items-center">
            {project.tech.map((t, i) => (
              <span key={i} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">{t}</span>
            ))}
            <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">{project.category}</span>
          </div>
          <div className="mb-2 text-blue-700 font-semibold text-lg">{project.price}</div>
          <p className="mb-4 text-gray-700">{project.description}</p>
          {project.features && (
            <>
              <h2 className="text-lg font-semibold mb-1 text-blue-700">Features:</h2>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                {project.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </>
          )}
          <div className="mb-4">Delivery method: <span className="font-semibold">Zip file emailed after payment confirmation.</span></div>
          <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition font-semibold">Fill Google Form to Purchase</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
