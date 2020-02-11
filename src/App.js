import React from 'react';
import logo from './logo.svg';

import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import About from './components/About'
import Projects from './components/Projects';
import More from './components/More'
import Footer from './components/Footer'

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Welcome />
        <About />
        <Projects />
        {/* <More /> */}
        <Footer />
      </header>
    </div>
  );
}

export default App;
