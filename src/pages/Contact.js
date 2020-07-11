import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import mail_box from '../img/mail_box.png'
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

        <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            flexFlow: 'row wrap',
          }}>
          <div style={{
            // position: 'absolute',
            top: '16%',
            left: '25%',
            fontSize: '27px',
            fontWeight: 'lighter',
          }}>
           Best to reach me at: 
           <br/> 
           <br/>
           sagdish@gmail.com 
           <br/>
           or Linkedin <small><i>(link in the footer)</i></small>
          </div>
          <img src={mail_box} alt='' style={{
              height: 'auto',
              width: '40%',
              alignSelf: 'center',
            }}/>
        </div>
      </div>
    </Fade>
  );
}

export default Contact;