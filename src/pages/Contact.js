import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from 'react-tooltip-lite';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

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

const popUp = (status, text) => {
  toast[status](text,
    {
      style: {
        fontSize: '15px', 
        marginTop: '40%',
        borderRadius: '7px',
        pauseOnHover: false,
        autoClose: 6003,
      },
      position: toast.POSITION.TOP_CENTER,
    }
  )
}

function Contact(props) {
  const email1 = 'sagdi';
  const email2 = 'sh@gmail.com';

  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');
  const [request, setRequest] = useState(false)

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
    if (state.message.length < 10) {
      setError(`Type longer message please`)
      return;
    }

    // disable send button
    setRequest(true)

    // send form
    emailjs.sendForm(
      process.env.REACT_APP_service_id,
      process.env.REACT_APP_template_id,
      e.target,
      process.env.REACT_APP_user_id
    )
    .then((result) => {
        console.log('email send', result);
        // popUp('success', 'Email sent')
        alert('Success, Email sent')
    }, (error) => {
        console.log('error sending form: ', error.text);
        // popUp('error', 'Something went wrong, please use my email to reach me')
        alert('Something went wrong, please use my email to reach me')
    })
    .finally(res => setRequest(false))

    // clear form and error state(if any)
    setError('')
    setState(initialState);
  }

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
    setError('');
  };

  return (
    <div>
      
      <div className='pages-content' style={{
        marginTop: '45px',
        // border: '1px solid blue',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}>

        <div className='back-btn'
          style={{
            alignSelf: 'flex-start',
          }}
        >
          <Link to='/' style={{
            color: '#DADADA',
          }}>
            <FontAwesomeIcon icon={faChevronLeft} size='3x' />
          </Link>
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

              <StyledButton
                type='submit'
                disabled={request ? true : false}
              >{request ? 'Sending ...' : 'Send Message'}</StyledButton>
            </StyledForm>
          </StyledFormWrapper>
          {/* end of contact form */}


          <div>
          <div style={{
            // position: 'absolute',
            // top: '26%',
            // left: '25%',
            fontSize: '22px',
            fontWeight: 'lighter',
            lineHeight: '1.8',
            marginBottom: '20px',
            marginLeft: '30px',
            // border: '1px solid red',
          }}>Alternatively
              <br/>
              You can grab my
              <br/>
              email address:
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

      </div>
    </div>
  );
}

export default Contact;