import React from 'react';
import Fade from 'react-reveal/Fade';
import './App.css';
// import BG from './img/bigmainBG.jpg'

function App() {
  return (
    <div className="App">
      <Fade delay={1000} duration={4000}>
        <div className='image'>
          <h1>placeholder</h1>
          {/* <img src={BG} alt='' /> */}
        </div>
      </Fade>
    </div>
  );
}

export default App;
