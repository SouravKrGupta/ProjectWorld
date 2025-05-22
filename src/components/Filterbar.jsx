import React, { useState } from 'react';

const techOptions = ['All', 'MERN', 'Django', 'MySQL'];
const typeOptions = ['All', 'Mini', 'Major', 'Advanced'];

const Filterbar = ({ tech, setTech, type, setType }) => (
  <div className="flex flex-wrap gap-4 mb-6 justify-center">
    <div>
      <label className="font-semibold mr-2 text-blue-800">Type:</label>
      <select value={type} onChange={e => setType(e.target.value)} className="border-2 border-blue-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400">
        {typeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
    <div>
      <label className="font-semibold mr-2 text-blue-800">Tech Stack:</label>
      <select value={tech} onChange={e => setTech(e.target.value)} className="border-2 border-blue-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400">
        {techOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  </div>
);

export default Filterbar;
