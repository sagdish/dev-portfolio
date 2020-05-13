import React from 'react';
import Fade from 'react-reveal/Fade';

import Navbar from './components/Navbar';
import Default from './pages/Default';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
      <Fade delay={1000} duration={4000}>
        <div className='main-container'>
          <Navbar />
          <Default />
          {/* <div className='content'>main area</div> */}
          <div className='footer'>footer</div>
        </div>
      </Fade>
  );
}

export default App;
