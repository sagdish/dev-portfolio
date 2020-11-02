import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from 'react-tooltip-lite';

import mail_box from '../img/mail_box.png'
import './style.css'
import '../App.css'
import {
  StyledFormWrapper,
  StyledForm, StyledInput, StyledTextArea,
  StyledButton, StyledFieldset, StyledError
} from '../components/styles.js';

const initialState = {
  name: '',
  email: '',
  message: '',
  quiz: ''
}

function Contact(props) {
  const email1 = 'sagdi';
  const email2 = 'sh@gmail.com';

  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');

  const handleSubmit = e => {

  }

  const handleInput = e => {
    
  }

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
            // top: '26%',
            // left: '25%',
            fontSize: '26px',
            fontWeight: 'lighter',
            lineHeight: '1.8',
            marginBottom: '20px'
          }}>
           You can reach me at
           <br/>
           my email or contact form here
            <Tooltip
              content='copied'
              eventOn='onClick'
              eventOff='onMouseOut'
              useHover={false}
              background='black'
              color='white'
              direction='left'
            >
              <CopyToClipboard text={email1 + email2}>
                <button style={{
                  backgroundColor: '#212224',
                  color: '#d4d4d4',
                  width: '120px',
                  height: '30px',
                  border: '1px dashed #d4d4d4',
                  borderRadius: '7px',
                  cursor: 'pointer',
                }}>Copy to clipboard</button>
              </CopyToClipboard>
            </Tooltip>

           {/* <br/>
           <small>or Linkedin <FontAwesomeIcon icon={faArrowDown} size='sm' /></small> */}
          </div>
          {/* contact form goes here */}
          <StyledFormWrapper>
            <StyledForm>
              <p style={{ fontSize: '23px' }}>Contact me</p>
              <label htmlFor="name">Name</label>
              <StyledInput type='text' name="name" />
              <label htmlFor='email'>Email</label>
              <StyledInput type="email" name="email" />
              <StyledFieldset>
                <legend>2 + 2 * 2 = ?</legend>
                <label>
                  <input type='radio' value='6' name='quiz' />
                  6
                </label>
                <label>
                  <input type='radio' value='8' name='quiz' />
                  8
                </label>
              </StyledFieldset>
              <label htmlFor='message'>Message</label>
              <StyledTextArea name='message' />
              <StyledError><p>Error message here</p></StyledError>
              <StyledButton type='submit'>Send Me</StyledButton>
            </StyledForm>
          </StyledFormWrapper>
          {/* end of contact form */}

          {/* <img src={mail_box} alt='' style={{
              height: 'auto',
              width: '40%',
              alignSelf: 'center',
              marginLeft: '10%'
            }}/> */}
        </div>
      </div>
    </Fade>
  );
}

export default Contact;