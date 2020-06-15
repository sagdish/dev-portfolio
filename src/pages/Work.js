import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import '../App.css'

function Work(props) {
  return (
    <Fade duration={2000} >
    <div className='content'>
      <div>
        <Link to='/' >
          <FontAwesomeIcon icon={faChevronLeft} size='3x' className='back-btn' />
        </Link>
      </div>
      <div className='content-title' style={{
        // height: '40vh',
        // width: 'auto',
        border: '1px solid white',
      }}>
        In Progress...
      </div>

      <div className='content-title' style={{
        border: '1px solid white'
      }}>
     
      </div>
      
    </div>
    </Fade>
  );
}

export default Work;