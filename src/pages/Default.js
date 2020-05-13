import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from '../img/gray.png';
import pic2 from '../img/selected.jpg';


function Default(props) {
  return (
    <div className='content'>
      <div className='content-title'>

          <p>Full Stack Developer <br/> 
            Experimenting with UI&UX </p>
          <button className='content-title_button'>
            . . .
          </button>

      </div>

      <div className='content-carousel'>
        <div>
          carousel
        </div>
      </div>
      
        <div className='content-carousel_line'>
          
        </div>
    </div>
  );
}

export default Default;