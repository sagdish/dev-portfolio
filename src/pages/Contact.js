import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from 'react-tooltip-lite';
import Swal from 'sweetalert2';

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
        setError(`Please enter the ${key}`)
        return;
      }
    }

    if (state.quiz === '8') {
      setError('Are you sure that 2 + 2 × 2 equals to 8 ?')
      return;
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
    Swal.fire({
      icon: 'warning',
      title: 'Email sending feature is in process',
      text: 'Please use email address to contact me',
    })
    setError('')
    console.log("state", state);
    setState(initialState);
  }

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  // console.log("state", state)

  return (
    <Fade duration={2000} >
      
      <div className='pages-content' style={{
        marginTop: '45px',
        // border: '1px solid blue',
        alignItems: 'center',
      }}>

        <div className='back-btn'
          style={{
            alignSelf: 'flex-start'
          }}
        >
          <Link to='/' style={{
            color: '#DADADA',
            // border: '1px solid red',
          }}>
            <FontAwesomeIcon icon={faChevronLeft} size='3x' />
          </Link>
        </div>

        <div>
            
          <div style={{
            // position: 'absolute',
            // top: '26%',
            // left: '25%',
            fontSize: '22px',
            fontWeight: 'lighter',
            lineHeight: '1.8',
            marginBottom: '20px',
            marginRight: '20px',
            // border: '1px solid red',
          }}>
            Send me a message here
           <br/>
           or write me email
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
                  height: '35px',
                  border: '1px dashed #d4d4d4',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  outline: 'none'
                }}>Click to 
                <br/>
                copy address</button>
              </CopyToClipboard>
            </Tooltip>
            
          </div>

        </div>


          {/* contact form goes here */}
          <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit}>
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
                <legend>2 + 2 × 2 = ?</legend>
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
                <StyledError><p>{error}</p></StyledError>

              <StyledButton type='submit'>Send Message</StyledButton>
            </StyledForm>
          </StyledFormWrapper>
          {/* end of contact form */}

          {/* <img src={mail_box} alt='' style={{
              height: 'auto',
              width: '40%',
              alignSelf: 'center',
              marginLeft: '10%'
            }}/> */}

        {/* </div> */}

      </div>
    </Fade>
  );
}

export default Contact;