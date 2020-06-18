import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import thinking from '../img/thinking.png'
import './style.css'
import '../App.css'

function Work(props) {
  return (
    <Fade duration={2000} >
      <div className='pages-content'>

        <div className='back-btn'>
          <Link to='/' style={{
            color: '#DADADA',
          }}>
            <FontAwesomeIcon icon={faChevronLeft} size='3x' />
          </Link>
        </div>

        <div style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '25%',
            fontSize: '26px',
            fontWeight: 'lighter',
          }}>
            Shhhhh... <br/> 
            You didn't see this. It is still under development
          </div>
          <img src={thinking} alt='' style={{
              height: 'auto',
              width: '70%',
              alignSelf: 'center',
            }}/>
        </div>


        

        

        
        
      </div>
    </Fade>
  );
}

export default Work;