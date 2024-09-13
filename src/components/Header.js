import React from 'react';

function Header() {
    return (
      <header className="bg-gray-800 text-white p-4">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><a href="#home" className="hover:text-blue-300">Home</a></li>
            <li><a href="#skills" className="hover:text-blue-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  

export default Header;
