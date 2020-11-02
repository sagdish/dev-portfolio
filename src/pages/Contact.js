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
    e.preventDefault();

    for (let key in state) {
      if (state[key] === '') {
        setError(`Please provide the ${key}`)
        return;
      }
    }

    /*
    // this will not work because it return only only block up, not from the whole function:
    Object.keys(state).forEach(key => {
      console.log('current key', key, state[key])
      if (state[key] === '') {
        setError(`Please provide the ${key}`)
        return;
      }
    });
    */
    
    setError('')
    console.log("state", state);
  }

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  // console.log("state", state)

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
            <StyledForm onSubmit={handleSubmit}>
              <p style={{ fontSize: '23px' }}>Contact me</p>
              <label htmlFor="name">Name</label>
              <StyledInput 
                type='text'
                name="name"
                onChange={handleInput} 
                value={state.name}
              />
              <label htmlFor='email'>Email</label>
              <StyledInput 
                type="email" 
                name="email" 
                onChange={handleInput} 
                value={state.email}
              />
              <StyledFieldset>
                <legend>2 + 2 * 2 = ?</legend>
                <label>
                  <input type='radio' value='6' name='quiz'
                    onChange={handleInput} 
                    checked={state.quiz === "6"}
                  />
                  6
                </label>
                <label>
                  <input type='radio' value='8' name='quiz' 
                    onChange={handleInput} 
                    checked={state.quiz === "8"}
                  />
                  8
                </label>
              </StyledFieldset>
              <label htmlFor='message'>Message</label>
              <StyledTextArea
                name='message'
                onChange={handleInput} 
                value={state.message}
              />
              {error && (
                <StyledError><p>{error}</p></StyledError>
              )}

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