import React from 'react';
import Fade from 'react-reveal/Fade';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Default from './pages/Default';
import About from './pages/About';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import './App.css';

function App(prop) {
  return (
    <div className='main-container'>
      <Navbar />
        <Fade delay={1000} duration={3000}>
          <Route exact path='/' component={ Default } />
          <Route path='/about' component={ About } />
          <Route path='/projects' component={ Work } />
          <Route path='/blog' component={ Blog } />
        </Fade>
      <Footer />
    </div>
  );
}

export default App;
