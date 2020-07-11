import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from 'react-tooltip-lite';

import mail_box from '../img/mail_box.png'
import './style.css'
import '../App.css'

function Contact(props) {

  // copyEmail = () => {

  // }

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
            <Tooltip
              content='copied'
              eventOn='onClick'
              eventOff='onMouseOut'
              useHover={false}
              background='black'
              color='white'
              direction='left'
            >
            <CopyToClipboard text="sagdish@gmail.com">
              <button style={{
                backgroundColor: '#212224',
                color: '#d4d4d4',
                width: '80px',
                height: '30px',
                border: '1px dashed #d4d4d4',
                borderRadius: '7px',
                cursor: 'pointer',
              }}>Copy email</button>
           </CopyToClipboard>
            </Tooltip>

           <br/>
           <small>or Linkedin <FontAwesomeIcon icon={faArrowDown} size='sm' /></small>
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