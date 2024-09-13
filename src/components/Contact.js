import React from 'react';

function Contact() {
    return (
      <section id="contact" className="p-10 bg-primary dark:bg-dark-primary">
        <h2 className="text-3xl font-semibold text-secondary dark:text-dark-secondary mb-6">Contact</h2>
        <p className="text-secondary dark:text-dark-secondary">Email: <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline dark:text-blue-300">youremail@example.com</a></p>
        <p className="text-secondary dark:text-dark-secondary">LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500 hover:underline dark:text-blue-300">LinkedIn Profile</a></p>
        <p className="text-secondary dark:text-dark-secondary">GitHub: <a href="https://github.com/immustafa37" className="text-blue-500 hover:underline dark:text-blue-300">GitHub Profile</a></p>
      </section>
    );
}
  
export default Contact;
