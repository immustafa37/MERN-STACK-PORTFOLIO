import React from 'react';

function Header() {
    return (
      <header className="bg-primary text-secondary dark:bg-dark-primary dark:text-dark-secondary p-4">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><a href="#home" className="hover:text-blue-300">Home</a></li>
            <li><a href="#skills" className="hover:text-blue-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
        <div className="text-center mt-4">
          <h1 className="text-2xl font-bold animate-bounceIn">Mustafa</h1>
        </div>
      </header>
    );
}

export default Header;
