import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App dark"> {/* Add the dark class here */}
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;