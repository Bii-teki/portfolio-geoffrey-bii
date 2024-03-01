import React from 'react';

import './App.css';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';


function App() {
  return (
    <main className="text-white bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
