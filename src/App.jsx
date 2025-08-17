// Routing setup for Zypject
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import DSASheets from './pages/DSASheets';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MNCQuestions from './pages/MNCPrep';
import B2BPages from './pages/B2BServices';
import CollegeProjects from './pages/CollegeProjects';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dsa-sheets" element={<DSASheets />} />
            <Route path="/mnc-questions" element={<MNCQuestions />} />
            <Route path="/b2b-pages" element={<B2BPages />} />
            <Route path="/college-projects" element={<CollegeProjects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
