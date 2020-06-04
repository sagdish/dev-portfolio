import React from 'react';
import Fade from 'react-reveal/Fade';
import { Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Default from './pages/Default';
import About from './pages/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='main-container'>
          <Navbar />
            <Fade 
            // delay={1000}
            duration={3000}>
              <Route exact path='/' component={ Default } />
            </Fade>
            <Route path='/about' component={ About } />
          <Footer />
        </div>
  );
}

export default App;
