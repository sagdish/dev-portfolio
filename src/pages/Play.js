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
          textAlign: 'center',
        }}>
          <div style={{
            alignSelf: 'center',
            fontWeight: 'lighter',
            fontSize: '20px',
            marginTop: '20px'
          }}>
            JavaScript Analogue Clock
          </div>
          <Clock />

          <div className='laptopImage'>
            <div style={{
              position: 'absolute',
              top: '17%',
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
            <hr style={{border: '1px dashed', width: '60%', marginLeft: '25%'}}/>
          </div>
          {/* this will be future container for another fun thing */}
          <div style={{
            marginTop: '70px',
            display: 'flex',
            // width: '80%',
            height: '400px',
            justifyContent: 'center',
            // border: '1px solid red',
            position: 'relative',
          }}>
            
            {/* <h3>Stoic Quote Generator</h3> */}
            {/* <p>as seen </p> */}
            <Stoic />
          </div>

          {/* next box: */}
          {/* <div>
            <h2>future box</h2>
          </div> */}

        </div>


      </div>
    </Fade>
  );
}

export default Work;