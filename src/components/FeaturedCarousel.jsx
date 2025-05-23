import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const CATEGORY_ORDER = ['Mini', 'Advanced', 'Major'];

const FeaturedCarousel = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => {
        // Sort by createdAt (most recent first), then by category order
        const sorted = data.sort((a, b) => {
          const dateDiff = new Date(b.createdAt) - new Date(a.createdAt);
          if (dateDiff !== 0) return dateDiff;
          const catA = CATEGORY_ORDER.indexOf(a.category);
          const catB = CATEGORY_ORDER.indexOf(b.category);
          return catA - catB;
        });
        setProjects(sorted.slice(0, 3));
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      {projects.length === 0 && (
        <div className="col-span-3 text-center text-gray-500">
          No projects found.
        </div>
      )}
    </div>
  );
};

export default FeaturedCarousel;
