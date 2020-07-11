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
            top: '26%',
            left: '25%',
            fontSize: '26px',
            fontWeight: 'lighter',
            lineHeight: '1.8',
            marginBottom: '20px'
          }}>
           Best to reach me at: 
           <br/>
           sagdish@gmail.com 
           <br/>
           <small>or Linkedin <i>(link in the footer)</i></small>
          </div>
          <img src={mail_box} alt='' style={{
              height: 'auto',
              width: '40%',
              alignSelf: 'center',
              marginLeft: '10%'
            }}/>
        </div>
      </div>
    </Fade>
  );
}

export default Contact;