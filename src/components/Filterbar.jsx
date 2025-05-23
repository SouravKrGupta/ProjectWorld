import React, { useEffect, useState } from 'react';

const Filterbar = ({ tech, setTech, type, setType }) => {
  const [options, setOptions] = useState({ tech: [], type: [] });

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        const techSet = new Set();
        const typeSet = new Set();
        data.forEach(p => {
          p.tech.forEach(t => techSet.add(t));
          typeSet.add(p.category);
        });
        setOptions({ tech: ['All', ...Array.from(techSet)], type: ['All', ...Array.from(typeSet)] });
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-4 mb-6 justify-center">
      <div>
        <label className="font-semibold mr-2 text-blue-800">Type:</label>
        <select value={type} onChange={e => setType(e.target.value)} className="border-2 border-blue-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400">
          {options.type.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <div>
        <label className="font-semibold mr-2 text-blue-800">Tech Stack:</label>
        <select value={tech} onChange={e => setTech(e.target.value)} className="border-2 border-blue-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400">
          {options.tech.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
    </div>
  );
};

export default Filterbar;
