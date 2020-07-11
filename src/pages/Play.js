import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Stoic from '../components/Stoic'
import Clock from '../components/Clock'

import thinking from '../img/thinking.png'
import '../components/style.css'
import './style.css'
import '../App.css'

function Work(props) {
  return (
    <Fade duration={2000} >
      <div className='blog-content' style={{
        // justifyContent: 'center',
        // alignItems: 'center'
      }}>

         <Link to='/'className='back-btn-blog' >
            <FontAwesomeIcon icon={faChevronLeft} size='3x'/>
        </Link>

        <div style={{position: 'relative', display: 'flex', flexDirection: 'column',
          margin: '3% 7% 3% 10%',
          textAlign: 'center'
        // border: '1px solid blue'
        }}>
          <div style={{
            alignSelf: 'center',
            fontWeight: 'lighter',
            fontSize: '20px'
          }}>
            JavaScript Analogue Clock
          </div>
          <Clock />

          <div className='laptopImage'>
            <div style={{
              position: 'absolute',
              top: '27%',
              right: '5%',
              fontSize: '19px',
              fontWeight: 'lighter',
            }}>
              
              He is still waiting for her ... 
              <br/>
              {/* <small><i>(The clock above is ticking)</i></small> */}
            </div>
            
            <img src={thinking} alt='' style={{
                height: 'auto',
                width: '60%',
                alignSelf: 'center',
            }}/>
          </div>


          {/* this will be future container for another fun thing */}
          <div style={{
            marginTop: '40px',
            display: 'flex',
            // width: '0%',
            height: '400px',
            justifyContent: 'center',
            border: '1px solid red',
            position: 'relative',
          }}>
            
            {/* <h3>Stoic Quote Generator</h3> */}
            {/* <p>as seen </p> */}
            <Stoic />
          </div>

        </div>


      </div>
    </Fade>
  );
}

export default Work;