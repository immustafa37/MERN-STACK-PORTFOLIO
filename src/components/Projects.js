import React from 'react';

function Projects() {
  return (
    <section id="projects" className="p-10 bg-primary dark:bg-dark-primary">
      <h2 className="text-3xl font-semibold text-secondary dark:text-dark-secondary mb-6">Projects</h2>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">Project 1</h3>
          <p className="text-gray-600 dark:text-gray-400">Description of the project and tech stack used.</p>
          <a href="https://github.com/immustafa37/MERN-STACK-PORTFOLIO" className="text-blue-500 hover:underline dark:text-blue-300">
            GitHub
          </a>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">Project 2</h3>
          <p className="text-gray-600 dark:text-gray-400">Description of the project and tech stack used.</p>
          <a href="https://github.com/yourusername/project2" className="text-blue-500 hover:underline dark:text-blue-300">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
