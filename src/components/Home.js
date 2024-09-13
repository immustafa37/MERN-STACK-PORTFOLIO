import React from 'react';
import image2 from '../assets/image2.jpg';

function Home() {
    return (
      <section id="home" className="text-center p-10 bg-primary dark:bg-dark-primary animate-fadeIn">
        <h1 className="text-4xl font-bold text-secondary dark:text-dark-secondary">Hello, I'm a MERN Stack Developer</h1>
        <p className="text-xl text-secondary dark:text-dark-secondary mt-4">
          I specialize in building full-stack web applications using MongoDB, Express, React, and Node.js.
        </p>
        <img src={image2} alt="Your Description" className="mt-4 w-48 h-auto mx-auto rounded-lg shadow-md" />
      </section>
    );
}

export default Home;
