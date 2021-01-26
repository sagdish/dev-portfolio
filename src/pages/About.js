import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Spinner from '../components/Spinner'
import '../App.css'
import './style.css'
import photo from '../img/myPhoto.jpg'

function About(props) {

  const [ imgLoaded, setImageLoaded ] = useState(false);

  const loaded = {
    height: 'auto',
    width: '35vh',
    borderRadius: '5%',
    boxShadow: '7px 13px 29px -8px rgba(0,0,0,0.75)',
    alignSelf: 'center',
    transition: 'opacity 0.5s',
    opacity: imgLoaded ? 1 : 0,
  }

  return(
    <Fade duration={1000}>
      <div className='pages-content'>
        <div className='back-btn'>
          <Link to='/' style={{
            color: '#DADADA'
          }}>
            <FontAwesomeIcon icon={faChevronLeft} size='3x' />
          </Link>
        </div>
    
        <div className='content-title'>           
          <img src={photo} alt=''
            onLoad={() => setImageLoaded(true)}
            style={loaded}
          />
        </div>

        <div className='content-title' style={{
            fontSize: '23px',
            border: '1px solid white'
          }}
        >
          Hey, I’m Sagdi.
          I am Web Developer with Automobile Engineering background. I like to create new stuff and experiment with it. 
          Nothing is constant, so I favor action over perfection (I learn it the hard way). I am passionate about User Experience and Design, 
          I’m in the process to nail that skill on professional level. This website is one of my attempts of trial and error in my learning process.
          I hope you like it.
          <br/> I think that technology evolving faster than we can adapt to it, so the best way is to adjust the mentality of being uncomfortable to some degree. 
          The future is just another path.
        </div>
      </div>
    </Fade>
  );
}

export default About;