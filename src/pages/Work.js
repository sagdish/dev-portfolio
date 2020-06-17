import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import sfspot from '../img/MainLogo.png'
import './style.css'
import '../App.css'

function Work(props) {
  return (
    <Fade duration={2000} >
      <div className='pages-content'>

        <div className='back-btn-blog'>
          <Link to='/' style={{
            color: '#DADADA',
          }}>
            <FontAwesomeIcon icon={faChevronLeft} size='3x' />
          </Link>
        </div>
    
        <div className='box'>
        <img src={sfspot} alt='' style={{
            height: 'auto',
            width: '70%',
            // border: '1px solid white',
            // borderRadius: '5%',
            // boxShadow: '7px 13px 29px -8px rgba(0,0,0,0.75)',
            alignSelf: 'center'
          }}/>
            {/* SF Study Spots */}
        
        </div>

        <div className='box' style={{
          // fontSize: '23px',
          // border: '1px solid white'
        }}>
          LifeLogger
        </div>
        <div className='box' style={{
          // fontSize: '23px',
          // border: '1px solid white'
        }}>
          GraphQL server
        </div>
        <div className='box' style={{
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