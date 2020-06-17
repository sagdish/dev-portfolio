import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import './style.css'
import '../App.css'

function Work(props) {
  return (
    <Fade duration={2000} >
      <div className='pages-content'>

        <div className='back-btn'>
          <Link to='/' style={{
            color: '#DADADA'
          }}>
            <FontAwesomeIcon icon={faChevronLeft} size='3x' />
          </Link>
        </div>
    
        <div className='content-title'>
          <div className="box">

            SF Study Spots
          </div>
        </div>

        <div className='content-title' style={{
          // fontSize: '23px',
          // border: '1px solid white'
        }}>
          LifeLogger
        </div>
        <div className='content-title' style={{
          // fontSize: '23px',
          // border: '1px solid white'
        }}>
          GraphQL server
        </div>
        <div className='content-title' style={{
          // fontSize: '23px',
          // border: '1px solid white'
        }}>
          ARC registry
        </div>
        
      </div>
    </Fade>
  );
}

export default Work;