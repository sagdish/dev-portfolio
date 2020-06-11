import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import '../App.css'
import photo from '../img/myPhoto.jpg'

function About(props) {

  return (
    <Fade duration={2000} >
    <div className='content'>
      <div>
        <Link to='/' >
          <FontAwesomeIcon icon={faChevronLeft} size='3x' className='back-btn'/>
        </Link>
      </div>
      <div className='content-title' style={{
        // height: '40vh',
        // width: 'auto',
        // border: '3px solid white',
        paddingLeft: '70px'
      }}>
        <img src={photo} alt='' style={{
          height: 'auto',
          width: '40vh',
          borderRadius: '5%',
          boxShadow: '7px 13px 29px -8px rgba(0,0,0,0.75)',
        }}/>
      </div>
      <div className='content-title' style={{
        fontSize: '25px',
        border: '1px solid white'
      }}>
        Hey, I’m Sagdi.
        I am Web developer with Automobile Engineering background. I like to create new stuff and experiment with it. 
        Nothing is constant so I favor action over perfection (I learn it the hard way). I am getting passionate about User Experience and Design, 
        I’m in the process to nail that skill on professional level. This website is one on my attempts of trial and error of my learning process.
        I hope you like it.
        <br/> I think that technology evolving faster than we can get use to it, so best way is adapt mentality of being uncomfortable to some degree. 
        The future is just another path.
      </div>
      
    </div>
    </Fade>
  );
}

export default About;