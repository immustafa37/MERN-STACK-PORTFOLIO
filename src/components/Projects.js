import React from 'react';

function Projects() {
  return (
    <section id="projects" className="p-10 bg-gray-50">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Projects</h2>
      <div className="space-y-4">
        <div className="bg-white p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-700">Project 1</h3>
          <p className="text-gray-600">Description of the project and tech stack used.</p>
          <a href="https://github.com/yourusername/project1" className="text-blue-500 hover:underline">
            GitHub
          </a>
        </div>
        <div className="bg-white p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-700">Project 2</h3>
          <p className="text-gray-600">Description of the project and tech stack used.</p>
          <a href="https://github.com/yourusername/project2" className="text-blue-500 hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
