import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import arc from '../img/arc-logo.png'
import arcss from '../img/arc.png'
import graphql from '../img/graphql-logo.png'
import graphqlss from '../img/graphql.png'
import lifeLogger from '../img/logo.png'
import lifeLoggerss from '../img/project2j.jpg'
import sfSpots from '../img/project1j.jpg'
import sfspot from '../img/SF.png'
import breathLogo from '../img/leafs.png'
import breathApp from '../img/breath.png'
import './style.css'
import '../App.css'

function Work() {

  const style = {
    height: 'auto',
    width: '100%',
    alignSelf: 'center',
    marginBottom: '2%',
  }


  return (
    <Fade duration={2000} >
      <div className='projects-content'>

        <div className='back-btn-blog'>
          <Link to='/' style={{
            color: '#DADADA',
          }}>
            <FontAwesomeIcon icon={faChevronLeft} size='3x' />
          </Link>
        </div>

        <div className='box'>
          <div className='box-in'>
            <a href='https://us1.prisma.sh/life-logger/life-logger-be/dev'
              target="_blank" 
              rel="noopener noreferrer" 
            >
                <img src={graphql} alt='' style={{
                  ...style,
                  width: '40%',
                }}/>
            </a>
            GraphQL server
            <br/>
          </div>

          <div className='box-text'>
            <a href='https://us1.prisma.sh/life-logger/life-logger-be/dev'
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <img src={graphqlss} alt='' style={{
                  ...style,
                  width: '90%',
                }}/>
              <div className='text-overImg'>
                • GraphQL server<br/>
                • JSONwebtokens for authentificaiton & Bcrypt for hashing <br/>
                • Deployed on Prisma API with MySQL database
              </div>
            </a>
          </div>  
        </div>

        <div className='devider'>
          <hr/>
        </div>

        <div className='box'>
          <div className='box-in'>
            <a href='https://sf-spots.sagdi.now.sh'
              target="_blank" 
              rel="noopener noreferrer" 
            >
                <img src={sfspot} alt='' style={{
                  ...style,
                  width: '75%',
                }}/>
            </a>
            <div>
              Study-friendly places where you can study in San Francisco, Bay Area.
            </div>
          </div>

          <div className='box-text'>
            <a href='https://sf-spots.sagdi.now.sh'
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <img src={sfSpots} alt='' style={style}/>

              <div className='text-overImg'>
                • Solo managed project from start to finish (from UI mockups to deployed Front and Backend) <br/>
                • Integrated Google maps API into React to display place on map based on location & retrieve its photo <br/>
                • Used user’s current geolocation to get list of nearby places
                <br/>
                • Stack: MongoDB | React | Express | Node | Google-maps API 
              </div>
            </a>
          </div>  
        </div>

        <div className='devider'>
          <hr/>
        </div>

        <div className='box'>
          <div className='box-in'>
            <a href='https://life-logger.now.sh'
              target="_blank" 
              rel="noopener noreferrer" 
            >
                <img src={lifeLogger} alt='' style={{
                  ...style,
                  width: '30%'
                }}/>
            </a>
            Life Logger
            <br/>
            <div>
              An app designed to help consumers organize their regular, non-recurring expenses
              <br/>
            </div>
          </div>

          <div className='box-text'>
            <a href='https://life-logger.now.sh'
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <img src={lifeLoggerss} alt='' style={style}/>

              <div className='text-overImg'>
              • Created GraphQL server for back end <br/>
              • Designed User interface, and integrated it to a final deployed version via Styled components & CSS <br/>
              • Worked on state management and integrated data to Calendar API
              </div>
            </a>
          </div>  
        </div>

        <div className='devider'>
          <hr/>
        </div>

        <div className='box'>
          <div className='box-in'>
            <a href='https://breathing-app.sagdi.vercel.app'
              target="_blank" 
              rel="noopener noreferrer" 
            >
                <img src={breathLogo} alt='' style={{
                  ...style,
                  paddingTop: '5%',
                  width: '45%',
                }}/>
            </a>
            4 - 7 - 8 Breathing Technique App
          </div>

          <div className='box-text'>
            <a href='https://breathing-app.sagdi.vercel.app/'
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <img src={breathApp} alt='' style={{
                height: 'auto',
                width: '70%',
                alignSelf: 'center',
              }}/>

              <div className='text-overImg'>
              • Start/stop functionality & display timing on the screen <br/>
              • Capturing and manipulating sequence with multiple JS Intervals and Timeous<br/>
              • Integrated sounds
                <br/>
              </div>
            </a>
          </div>  
        </div>

        <div className='devider'>
          <hr/>
        </div>

        <div className='box'>
          <div className='box-in'>
            <a href='https://arcregistry.com'
              target="_blank" 
              rel="noopener noreferrer" 
            >
                <img src={arc} alt='' style={{
                  paddingTop: '5%',
                  height: 'auto',
                  width: '50%',
                  alignSelf: 'center',
                }}/>
            </a>
            <div>
              React, Bootstrap4, UI ...
            </div>
          </div>

          <div className='box-text'>
            <a href='https://arcregistry.com'
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <img src={arcss} alt='' style={{
                height: 'auto',
                width: '60%',
                alignSelf: 'center',
              }}/>

              <div className='text-overImg'>
              • Designed and developed website for psychologist staffing agency and implemented SEO tactics 
                <br/>
              </div>
            </a>
          </div>  
        </div>
        
      </div>
    </Fade>
  );
}

export default Work;