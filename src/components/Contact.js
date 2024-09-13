import React from 'react';

function Contact() {
    return (
      <section id="contact" className="p-10 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact</h2>
        <p className="text-gray-600">Email: <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">youremail@example.com</a></p>
        <p className="text-gray-600">LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500 hover:underline">LinkedIn Profile</a></p>
        <p className="text-gray-600">GitHub: <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">GitHub Profile</a></p>
      </section>
    );
  }
  
export default Contact;
