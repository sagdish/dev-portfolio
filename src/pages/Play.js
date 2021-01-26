import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Stoic from '../components/Stoic'
import Clock from '../components/Clock'

import {ReactComponent as Car} from '../img/car.svg';
import thinking from '../img/thinking.png'
import '../components/style.css'
import './style.css'
import '../App.css'

function Work(props) {
  const [animate, setAnimate] = useState(false);
  const [ imgLoaded, setImageLoaded ] = useState(false);

  const loaded = {
    height: 'auto',
    width: '60%',
    alignSelf: 'center',
    transition: 'opacity 0.5s',
    opacity: imgLoaded ? 1 : 0,
  }

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

          <div style={{
            position: 'absolute',
            top: '10%',
            left: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Clock />
          </div>

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
            
            <img src={thinking}
              alt='man siting on the bench'
              onLoad={() => setImageLoaded(true)}
              style={loaded}
            />
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

            {/* Svg content goes here */}
          
            <div className="car-container">
              <button onClick={() => setAnimate(!animate)}
                style={{
                  width: '92px',
                  height: '30px',
                  backgroundColor: '#212224',
                  color: '#fff',
                  border: '1px solid #fff',
                  cursor: 'pointer',
                  fontSize: '16px',
                  '&:hover': {
                    backgroundColor: '#515255'
                  }
                }}
              >
                {animate ? "Erase it" : "Draw a car"}
              </button>
              <Car className={`${animate ? "active" : ""}`} />
            </div>
          </div>


          <div style={{
            marginTop: '20px',
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

          

        </div>


      </div>
    </Fade>
  );
}

export default Work;