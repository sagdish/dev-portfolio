import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Clock from '../components/Clock'

import thinking from '../img/thinking.png'
import '../components/style.css'
import './style.css'
import '../App.css'

function Work(props) {
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

        <div style={{position: 'relative', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <div style={{
            alignSelf: 'center',
            fontWeight: 'lighter',
            fontSize: '25px'
          }}>
            JavaScript Analogue Clock
          </div>
          <Clock />

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


          {/* this will be future container for another fun thing */}
          {/* <div style={{
            width: 'auto',
            height: '400px',
            border: '1px solid red'
          }}>
            some ohter placeholder
          </div> */}

        </div>


      </div>
    </Fade>
  );
}

export default Work;