import React from 'react';
import './App.css';
import Login from './component/Login';
import Header from './component/Header';
import About from './component/About';
import Education from './component/Education';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Collaborations from './component/Collaborations';

import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Collaborations />
      <Contact />
      {/* other components */}
    </div>
  );
}

export default App;
