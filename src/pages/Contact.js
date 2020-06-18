import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import thinking from '../img/thinking.png'
import './style.css'
import '../App.css'

function Contact(props) {
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
            top: '16%',
            left: '25%',
            fontSize: '27px',
            fontWeight: 'lighter',
          }}>
           While I didn't include email form here yet, best to reach me at: 
           <br/> 
           <br/>
           sagdish@gmail.com or Linkedin
          </div>
          <img src={thinking} alt='' style={{
              height: 'auto',
              width: '68%',
              alignSelf: 'center',
            }}/>
        </div>
      </div>
    </Fade>
  );
}

export default Contact;